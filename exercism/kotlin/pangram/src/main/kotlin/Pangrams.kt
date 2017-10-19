object Pangrams {
    fun isPangram(sentense: String): Boolean {
        return listOf('a'..'z').flatten().stream() //make stream of all letters
                .map {sentense.contains(it, true)} //check if sentense contains letter (ignore case)
                .filter {it == false}.findFirst() //first absent char means sentense is not Pangram
                .orElse(true) // if no absent chars found - sentense is Pangram
    }
}