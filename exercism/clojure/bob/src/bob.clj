(ns bob)

(defn response-for
  ([request]
    (cond
      (and
        (= request (clojure.string/upper-case request))
        (not (= request (clojure.string/lower-case request)))
      ) "Whoa, chill out!"
      (clojure.string/ends-with? request "?") "Sure."
      (empty? (clojure.string/trim request)) "Fine. Be that way!"
      :else "Whatever.")
  )
)
