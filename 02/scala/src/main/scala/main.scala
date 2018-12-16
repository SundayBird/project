import java.io._

class MyThread(val filename: String, to: String) extends Thread {
  override def run(): Unit = {
    val tname = Thread.currentThread.getName
    println(s"$tname: Running")
    main.copyFile(filename, to)
  }
}

object main extends App {
  def copyFile(filename: String, to: String): Unit = {
    val src = new File(filename)
    val dest = new File(to)
    new FileOutputStream(dest).getChannel.transferFrom(new FileInputStream(src).getChannel, 0, Long.MaxValue)
  }

  def time[R](block: => R): R = {
    val t0 = System.nanoTime()
    val result = block    // call-by-name
    val t1 = System.nanoTime()
    println("Elapsed time: " + (t1 - t0) / 1000 / 1000 + "ms")
    result
  }

  println("Multi thread")
  time {
    // lock을 걸지 않아서 다른 thread가 돌기 전에 메인 스레드의 println이 호출된다.
    // 고로, 항상 0.001ms 미만의 시간이 걸린다.
    val thread1 = new MyThread(filename = "lec17.pdf", to = "lec17-copy.pdf")
    val thread2 = new MyThread(filename = "lec18.pdf", to = "lec18-copy.pdf")
    val thread3 = new MyThread(filename = "lec19.pdf", to = "lec19-copy.pdf")
    val thread4 = new MyThread(filename = "myvideo.mp4", to = "myvideo-copy.mp4")
    thread1.start()
    thread2.start()
    thread3.start()
    thread4.start()
  }

  println("Single thread")
  time {
    copyFile("lec17.pdf", "lec17-copy.pdf")
    copyFile("lec18.pdf", "lec18-copy.pdf")
    copyFile("lec19.pdf", "lec19-copy.pdf")
    copyFile("myvideo.mp4", "myvideo-copy.mp4")
  }
}

