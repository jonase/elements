(ns elements.geometry)

(defn dist 
  "Distance between two points"
  ([{x1 :x y1 :y} {x2 :x y2 :y}]
     (dist x1 y1 x2 y2))
  ([x1 y1 x2 y2]
     (let [dx (- x2 x1)
           dy (- y2 y1)
           dx2 (* dx dx)
           dy2 (* dy dy)]
       (js/Math.sqrt
        (+ dx2 dy2)))))

(defn lerp
  "Linear interpolation by a between p1 and p2. Returns the point as [x y]"
  ([{x1 :x y1 :y} {x2 :x y2 :y} a]
     (lerp x1 y1 x2 y2 a))
  ([x1 y1 x2 y2 a]
     [(+ x1 (* (- x2 x1) a))
      (+ y1 (* (- y2 y1) a))]))

(defn line-line-intersection 
  "Returns the intersection point (as [x y]) or nil if the lines are parallell"  
  [{[{x1 :x y1 :y} {x2 :x y2 :y}] :points}
   {[{x3 :x y3 :y} {x4 :x y4 :y}] :points}]
  (let [x1-x2 (- x1 x2)
        x3-x4 (- x3 x4)
        y1-y2 (- y1 y2)
        y3-y4 (- y3 y4)
        denom (- (* x1-x2 y3-y4)
                 (* x3-x4 y1-y2))]
    (when-not (zero? denom)
      (let [x1y2 (* x1 y2)
            y1x2 (* y1 x2)
            x3y4 (* x3 y4)
            y3x4 (* y3 x4)
            x1y2-y1x2 (- x1y2 y1x2)
            x3y4-y3x4 (- x3y4 y3x4)]
        {:type :point
         :x (/ (- (* x1y2-y1x2 x3-x4) (* x1-x2 x3y4-y3x4))
               denom)
         :y (/ (- (* x1y2-y1x2 y3-y4) (* y1-y2 x3y4-y3x4))
               denom)}))))

;; http://stackoverflow.com/a/1088058/24946
(defn line-circle-intersection
  [{[{ax :x ay :y} {bx :x by :y}] :points}
   {r :radius {cx :x cy :y} :midpoint}]
  (let [d (dist ax ay bx by)
        dx (/ (- bx ax) d)
        dy (/ (- by ay) d)
        t (+ (* dx (- cx ax))
             (* dy (- cy ay)))
        ex (+ (* t dx) ax)
        ey (+ (* t dy) ay)
        dec (dist ex ey cx cy)]
    (when (<= dec r)
      (let [dt (js/Math.sqrt (- (* r r) (* dec dec)))
            t-dt (- t dt)
            t+dt (+ t dt)]
        [{:type :point
          :x (+ (* t-dt dx) ax)
          :y (+ (* t-dt dy) ay)}
         {:type :point
          :x (+ (* t+dt dx) ax)
          :y (+ (* t+dt dy) ay)}]))))

;; http://www.kevlindev.com/gui/math/intersection/Intersection.js
(defn circle-circle-intersection
  [{r1 :radius {c1x :x c1y :y} :midpoint}
   {r2 :radius {c2x :x c2y :y} :midpoint}]
  (let [r-max (+ r1 r2)
        r-min (js/Math.abs (- r1 r2))
        c-dist (dist c1x c1y c2x c2y)]
    (if (or (> c-dist r-max)  ;; Outside
            (< c-dist r-min)) ;; Inside
      nil
      (let [r1*r1 (* r1 r1) 
            a (/ (+ (- r1*r1 (* r2 r2))
                    (* c-dist c-dist))
                 (* 2 c-dist))
            h (js/Math.sqrt (- r1*r1 (* a a)))
            [px py] (lerp c1x c1y c2x c2y (/ a c-dist))
            b (/ h c-dist)
            k1 (* b (- c2y c1y))
            k2 (* b (- c2x c1x))]
        [{:type :point
          :x (- px k1)
          :y (+ py k2)}
         {:type :point
          :x (+ px k1)
          :y (- py k2)}]))))

(defmulti intersection-points (fn [obj1 obj2]
                                [(:type obj1) (:type obj2)]))

(defmethod intersection-points [:line :line]
  [line1 line2]
  (when-let [intersection (line-line-intersection line1 line2)]
    [intersection]))

(defmethod intersection-points [:circle :circle]
  [circle1 circle2]
  (circle-circle-intersection circle1 circle2))

(defmethod intersection-points [:line :circle]
  [line circle]
  (line-circle-intersection line circle))

(defmethod intersection-points [:circle :line]
  [circle line]
  (intersection-points line circle))

