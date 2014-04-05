(ns elements.components
  (:require [cljs.core.async :as async]
            [goog.events :as events]
            [reagent.core :as r]
            [elements.object-store :as s]
            [elements.geometry :as g])
  (:import [goog.events EventType]))

(def point-defaults
  {:r 5
   :fill "#525252"
   :stroke "#f8f8f8"
   :stroke-width 2})

(def segment-defaults
  {:stroke "#f8f8f8" 
   :stroke-width 2})

(def circle-defaults
  {:stroke "#f8f8f8" 
   :stroke-width 2
   :fill "none"})

(defn drag-move-fn [chan name]
  (fn [evt]
    (async/put! chan {:topic :drag
                      :name name
                      :x (.-offsetX evt)
                      :y (.-offsetY evt)})))

(defn drag-end-fn [drag-move drag-end]
  (fn [evt]
    (events/unlisten js/window EventType.MOUSEMOVE drag-move)
    (events/unlisten js/window EventType.MOUSEUP @drag-end)))

(defn dragging [interact name]
  (let [drag-move (drag-move-fn interact name)
        drag-end-atom (atom nil)
        drag-end (drag-end-fn drag-move drag-end-atom)]
    (reset! drag-end-atom drag-end)
    (events/listen js/window EventType.MOUSEMOVE drag-move)
    (events/listen js/window EventType.MOUSEUP drag-end)))

(defn extend-segment [x1 y1 x2 y2]
  (let [len (g/dist x1 y1 x2 y2)
        a (/ (- x2 x1) len)
        b (/ (- y2 y1) len)]
    [(+ x2 (* a 10000))
     (+ y2 (* b 10000))
     (+ x2 (* a -10000))
     (+ y2 (* b -10000))]))

(defn offset [cc]
  (let [bcr (-> cc r/dom-node .getBoundingClientRect)]
    [(.-left bcr) (.-top bcr)]))

(defn mouse-pos [mouse-event svg-root]
  (let [[x-offset y-offset] (offset svg-root)]
    {:x (- (.-clientX mouse-event) x-offset)
     :y (- (.-clientY mouse-event) y-offset)}))

(defmulti shape (fn [obj chan]
                  (:type obj)))

(defmulti on-mouse-down (fn [obj chan]
                          (:type obj)))

(defmethod shape :point
  [{:keys [x y draggable name] :as point} chan]
  [:circle 
   (merge point-defaults
          {:cx x :cy y
           :on-mouse-down (on-mouse-down point chan)}
          (when-not draggable
            {:fill "black"
             :opacity "1"}))])

(defmethod shape :line [obj]
  (let [hover? (r/atom false)]
    (fn [{:keys [points name] :as line} interact] 
      (let [[p1 p2] points
            {x1 :x y1 :y} p1
            {x2 :x y2 :y} p2
            [x1 y1 x2 y2] (extend-segment x1 y1 x2 y2)]
        [:g {:on-mouse-down (on-mouse-down line interact)
             :on-mouse-over #(reset! hover? true)
             :on-mouse-out #(reset! hover? false)}
         [:line {:stroke-width 7
                 :stroke (if @hover? "rgba(255,255,255,0.2)" "rgba(0,0,0,0)") 
                 :x1 x1 :y1 y1
                 :x2 x2 :y2 y2}]
         [:line (merge segment-defaults
                       {:x1 x1 :y1 y1
                        :x2 x2 :y2 y2})]]))))

(defmethod shape :circle [obj]
  (let [hover? (r/atom false)]
    (fn [{:keys [radius midpoint name] :as circle} interact]
      (let [{:keys [x y]} midpoint] 
        [:g {:on-mouse-down (on-mouse-down circle interact)
             :on-mouse-over #(reset! hover? true)
             :on-mouse-out #(reset! hover? false)}
         [:circle {:stroke-width 7
                   :stroke (if @hover? "rgba(255,255,255,0.2)" "rgba(0,0,0,0)")
                   :fill "none"
                   :cx x
                   :cy y
                   :r radius}]
         [:circle (merge circle-defaults
                         {:cx x
                          :cy y
                          :r radius})]]))))

(defmethod on-mouse-down :point
  [point chan]
  (fn [evt]
    (.stopPropagation evt)
    (async/put! chan
                {:topic :click-point
                 :object point})
    (when (:draggable point)
      (dragging chan (:name point)))))

(defmethod on-mouse-down :line
  [line chan]
  (fn [evt]
    (async/put! chan {:topic :click-segment
                      :object line})))

(defmethod on-mouse-down :circle
  [circle chan]
  (fn [evt]
    (async/put! chan {:topic :click-circle
                      :object circle})))


(defn blackboard [store interact]
  (let [cc (r/current-component)]
    [:svg 
     {:width "100%"
      :height "90%"
      :on-mouse-down #(let [[offset-left offset-top] (offset cc)]
                        (async/put! interact 
                                    (assoc (mouse-pos % cc)
                                      :topic :click-canvas)))
      :style {:background-color "#0C1021"
              :margin-top "6px"}}
     (let [resolve (memoize s/resolve)
           store (reduce 
                  (fn [store [name obj]]
                    (assoc store name (s/resolve store obj)))
                  store
                  store)
           store' (sort-by (fn [[k v]]
                             (:z-index v)) 
                           store)]
       
       (for [[name obj] store'
             :when (:render obj)]
         ^{:key (str name)}
         [shape
          (merge obj {:name name})
          interact]))]))

(defn toolbar [tools tool-chan]
  [:div 
   (for [[tool-name {:keys [chan img selected]}] tools]
     [:img (merge {:src (str "img/" img)
                   :width 32
                   :height 32
                   :on-click #(async/put! tool-chan tool-name)
                   :style (merge (if selected
                                   {:background-color "#d8d8d8"}
                                   {:background-color "white"})
                                 {:margin-left "4px"})})])
   [:span {:style {:margin-left 10
                   :font-size "21px"
                   :vertical-align "33%"}}
    (or (some #(when (:selected %)
                 (:desc %))
              (vals tools))
        "Be Creative. Pick a tool")]])


