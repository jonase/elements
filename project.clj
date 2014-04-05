(defproject elements "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.0-SNAPSHOT"] 
                 [reagent "0.4.2"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "elements"
              :source-paths ["src"]
              :compiler {
                :preamble ["reagent/react.js"]
                :output-to "elements.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}
             {:id "adv"
              :source-paths ["src"]
              :compiler {:output-to "elements.js"
                         :output-dir "out_adv"
                         :optimizations :advanced}}]})
