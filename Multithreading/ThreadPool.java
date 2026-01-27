import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
public class ThreadPool {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        Runnable task = () -> {
            System.out.println(
                "Task running in " + Thread.currentThread().getName()
            );
        };
        executor.execute(task);
        executor.execute(task);
        executor.execute(task);
        executor.execute(task);
        executor.shutdown();
    }
}
