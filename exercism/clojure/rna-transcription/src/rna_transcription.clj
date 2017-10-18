(ns rna-transcription)

(defn transcribe [nucleotide]
  (condp = nucleotide
    \G "C"
    \C "G"
    \A "U"
    \T "A")
  )

(defn validate-dna [dna]
  (empty? dna) ""
  (if-not (re-matches #"[ATCG]+" dna) (throw (AssertionError. dna)))
  )

(defn to-rna [dna]
    (validate-dna dna)
    (reduce str (map transcribe (seq dna)))
)
