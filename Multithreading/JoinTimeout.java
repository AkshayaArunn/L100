public class JoinTimeout {
    public static void main(String[] args) throws Exception {
        Thread t = new Thread(() -> {
            try {
                Thread.sleep(5000);
            } catch (Exception e) {}
            System.out.println("Worker done");
        });
        t.start();
        System.out.println("Waiting max 2 seconds...");
        t.join(2000);
        System.out.println("Main continues");
    }
}
