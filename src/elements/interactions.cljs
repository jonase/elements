(ns elements.interactions
  (:require [elements.object-store :as s] 
            [reagent.core :as r]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]))

(def tools
  (r/atom
   {"move" {:name "move"
            :img "move.svg" 
            :topics [:drag]
            :chan (async/chan 128)
            :desc "Move the points around"} 
    "point" {:name "point"
             :img "new_point.svg"
             :topics [:click-canvas]
             :chan (async/chan)
             :desc "Click on the canvas to create a new point" }
    "segment" {:name "segment"
               :img "segment.svg"
               :topics [:click-point :click-canvas]
               :chan (async/chan)
               :desc "Click on two points to create a line"} 
    "circle" {:name "circle"
              :img "circle.svg"
              :topics [:click-point :click-canvas]
              :chan (async/chan)
              :desc "Click on two points to create a circle"}
    "intersection" {:name "intersection"
                    :img "intersection.svg"
                    :topics [:click-segment :click-circle]
                    :chan (async/chan)
                    :desc "Click on two objects to find the intersecting points"}
    "hide" {:name "hide"
            :img "hide.svg"
            :topics [:click-point :click-circle :click-segment]
            :chan (async/chan)
            :desc "Click on objects you want to hide"}}))

(defn move-point [{:keys [chan]} store]
  (go-loop []
    (let [{:keys [x y object]} (<! chan)]
      (swap! store assoc (:name object) (s/point x y)))
    (recur)))

(defn create-point [{:keys [chan]} store]
  (go-loop []
    (let [{:keys [x y]} (<! chan)]
      (swap! store assoc (gensym "P") (s/point x y)))
    (recur)))

(defn create-or-select-point [store p]
  (if (= (:topic p) :click-canvas)
    ;; Need to create a point
    (let [name (gensym "P")
          pt (s/point (:x p) (:y p))]
      (swap! store assoc name pt)
      (assoc pt :name name))
    (:object p)))

(defn create-segment [{:keys [chan]} store]
  (go-loop []
    (let [p1 (create-or-select-point store (<! chan))
          p2 (create-or-select-point store (<! chan))]
      (swap! store assoc (gensym "s") (s/segment (:name p1) (:name p2)))
      (recur))))

(defn create-circle [{:keys [chan]} store]
  (go-loop []
    (let [p1 (create-or-select-point store (<! chan))
          p2 (create-or-select-point store (<! chan))]
      (swap! store assoc (gensym "s") (s/circle (:name p1) (:name p2))))
    (recur)))

(defn create-intersection-point [{:keys [chan]} store]
  (go-loop []
    (let [obj1 (:object (<! chan))
          obj2 (:object (<! chan))] 
      (let [n (gensym "i")
            ip (s/intersection (:name obj1) (:name obj2))]
        (swap! store assoc n ip)
        (swap! store
               assoc
               (gensym "ip")
               (s/intersection-point n 0))
        (when-not (and (= (:type obj1) :line) (= (:type obj2) :line))
          (swap! store
                 assoc
                 (gensym "ip")
                 (s/intersection-point n 1)))))
    (recur)))

(defn hide-object [{:keys [chan]} store]
  (go-loop []
    (let [name (:name (:object (<! chan)))]
      (swap! store assoc-in [name :render] false))
    (recur)))

;; TODO: Drain interaction chan here?
(defn deselect-tool [tool ipub]
  (when tool
    (let [{:keys [name topics chan]} tool]
      (doseq [topic topics]
        (async/unsub ipub topic chan))
      (swap! tools assoc-in [name :selected] false))))

(defn select-tool [tool ipub]
  (when tool
    (let [{:keys [name topics chan]} tool]
      (doseq [topic topics]
        (async/sub ipub topic chan))
      (swap! tools assoc-in [name :selected] true))))

(defn pick-tool [tools-chan interaction-pub]
  (go-loop [current-tool nil]
    (let [next-tool-name (<! tools-chan) ;; Wait for new tool to be selected
          next-tool (when-not (= next-tool-name 
                                 (:name current-tool))
                      (@tools next-tool-name))]
      (deselect-tool current-tool interaction-pub)
      (select-tool next-tool interaction-pub)
      (recur next-tool))))

(defn start-interactions! [store tools-chan]
  (let [tools-map @tools
        interaction-chan (async/chan 32)
        interaction-pub (async/pub interaction-chan :topic)]
    (pick-tool tools-chan interaction-pub)
    (move-point (tools-map "move")  store)
    (create-point (tools-map "point") store)
    (create-segment (tools-map "segment") store)
    (create-circle (tools-map "circle") store)
    (create-intersection-point (tools-map "intersection") store)
    (hide-object (tools-map "hide") store)
    interaction-chan))
