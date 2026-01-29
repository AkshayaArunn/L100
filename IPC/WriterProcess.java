public class WriterProcess {
    public static void main(String[] args) throws Exception {
        System.out.println("Writer started...");
        SharedData.counter = 42;
        System.out.println("Writer set counter = " + SharedData.counter);

        Thread.sleep(10000); 
    }
}
