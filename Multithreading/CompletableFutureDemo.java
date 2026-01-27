import java.util.concurrent.*;
public class CompletableFutureDemo {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            return "Hello from " + Thread.currentThread().getName();
        }, executor);
        future.thenAccept(result -> System.out.println("Result: " + result));
        executor.shutdown();
    }
}
