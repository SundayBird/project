import java.net.URL
import java.util.Date

fun main() {
    val urls: MutableList<URL> = ArrayList()
    for (i in 1..20) {
        urls.add(URL("https://www.google.com"))
    }

    val startTime = Date()
    urls.parallelStream().forEach { url ->
        println(url.readText())
    }

    val endTime = Date()

    // 1.768
    print("Processing Time: " + ((endTime.time - startTime.time) / 1000f))
}
