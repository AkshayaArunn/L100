class Counter {
    int value = 0;
}

public class RaceConditionDemo {
    public static void main(String[] args) throws Exception {
        Counter counter = new Counter();
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1_000_000; i++) {
                counter.value++;
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1_000_000; i++) {
                counter.value++;
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println(counter.value);
    }
}
