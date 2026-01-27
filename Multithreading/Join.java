class Worker implements Runnable {
    public void run() {
        System.out.println("Worker started");
        try {
            Thread.sleep(2000);
        } catch (Exception e) {}

        System.out.println("Worker finished");
    }
}
public class Join {
    public static void main(String[] args) throws Exception {
        Thread worker = new Thread(new Worker());
        worker.start();
        System.out.println("Main waiting for worker...");
        worker.join(); 
        System.out.println("Main resumes after worker finishes");
    }
}
