import java.util.concurrent.*;

public class ScheduledThreadPoolDemo {
    public static void main(String[] args) {
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);
        scheduler.schedule(() -> System.out.println("Delayed task"), 2, TimeUnit.SECONDS);
        scheduler.scheduleAtFixedRate(() -> System.out.println("Repeating task"), 1, 3, TimeUnit.SECONDS);
        scheduler.schedule(() -> scheduler.shutdown(), 10, TimeUnit.SECONDS);
    }
}
