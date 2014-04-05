(ns elements.object-store
  (:require [reagent.core :as r]
            [elements.geometry :as g]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer (go-loop)]))

(defmulti resolve 
  (fn [env obj]
    
    (or (:type obj)
        :symbol)))

(defmethod resolve :symbol [env sym]
  (resolve env (get env sym)))

(defmethod resolve :point [env point]
  point)

(defmethod resolve :line [env {[p1 p2] :points :as line}]
  (let [p1 (resolve env p1)
        p2 (resolve env p2)]
    (when (and p1 p2)
      (assoc line
       :points [p1 p2]))))

(defmethod resolve :circle [env {:keys [midpoint perimeter-point] 
                                 :as circle}]
  (let [midpoint (resolve env midpoint)
        perimeter-point (resolve env perimeter-point)]
    (when (and midpoint perimeter-point)
      (assoc circle
        :midpoint midpoint
        :radius (g/dist midpoint perimeter-point)))))

(defmethod resolve :intersection [env {[obj1 obj2] :objects :as intersection}]
  (let [obj1 (resolve env obj1)
        obj2 (resolve env obj2)]
    (when (and obj1 obj2)
      (assoc intersection
        :intersection-points (g/intersection-points obj1 obj2)))))

(defmethod resolve :intersection-point [env {:keys [intersection idx render]}]
  (let [intersection (resolve env intersection)]
    (when intersection
      (when-let [p (get (:intersection-points intersection) idx)]
        (assoc p :render render :z-index 2)))))

(defn point [x y]
  {:type :point
   :render true
   :draggable true
   :z-index 3
   :x x
   :y y})

(defn segment [p1 p2]
  {:type :line
   :render true
   :z-index 1
   :points [p1 p2]})

(defn circle [mpt ppt]
  {:type :circle
   :render true
   :z-index 1
   :midpoint mpt
   :perimeter-point ppt})

(defn intersection [obj-1 obj-2]
  {:type :intersection
   :render false
   :objects [obj-1 obj-2]})

(defn intersection-point [intersection idx]
  {:type :intersection-point
   :render true
   :z-index 2
   :intersection intersection
   :idx idx})

