class MyTask implements Runnable {
    public void run() {
        System.out.println(
            "Running in thread: " + Thread.currentThread().getName()
        );
    }
}
public class ThreadRunnable {
    public static void main(String[] args) {

        MyTask task = new MyTask();     
        Thread thread = new Thread(task); 
        thread.start(); 
    }
}
