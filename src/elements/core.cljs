(ns elements.core
  (:require [cljs.core.async :as async]
            [reagent.core :as r]
            [elements.components :as c]
            [elements.object-store :as s]
            [elements.interactions :as i]
            [elements.geometry :as g])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(defn root [store interact-chan tool-chan]
  [:div
   {:style {:margin-left "auto"
            :margin-right "auto"
            :width "90%"}}
   [c/toolbar @i/tools tool-chan]
   [c/blackboard @store interact-chan]])

(defn ^:export start []
  (let [object-store (r/atom {})
        tool-chan (async/chan)
        interact-chan (i/start-interactions! object-store tool-chan)]
    (r/render-component 
     [root object-store interact-chan tool-chan]
     (.getElementById js/document "root"))))
