class SleepTask implements Runnable {
    public void run() {
        System.out.println("Thread started: " + Thread.currentThread().getName());
        try {
            Thread.sleep(2000); 
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Thread resumed: " + Thread.currentThread().getName());
    }
}
public class ThreadSleep {
    public static void main(String[] args) {
        Thread t = new Thread(new SleepTask());
        t.start();
        System.out.println("Main thread finished");
    }
}
