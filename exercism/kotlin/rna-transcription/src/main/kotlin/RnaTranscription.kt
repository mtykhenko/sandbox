fun transcribeToRna(dna: String): String = dna.toCharArray().map{dna2rnaNucleotideMapping(it)}.joinToString("")

fun dna2rnaNucleotideMapping(dnaNucleotide: Char): Char {
    return when (dnaNucleotide) {
        'G' -> 'C'
        'C' -> 'G'
        'T' -> 'A'
        'A' -> 'U'
        else -> throw IllegalArgumentException("Invalid DNA nucleotide")
    }
}
