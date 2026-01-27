class MyTask implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Child Thread: " + i + " - " + Thread.currentThread().getName());
        }
    }
}
public class MultiThread {
    public static void main(String[] args) {
        Thread t = new Thread(new MyTask());
        t.start();
        for (int i = 1; i <= 5; i++) {
            System.out.println(
                "Main Thread: " + i + " - " + Thread.currentThread().getName()
            );
        }
    }
}
