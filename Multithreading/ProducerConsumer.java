class Buffer {
    private int data;
    private boolean hasData = false;

    synchronized void produce(int value) {
        while (hasData) {
            try {
                wait();
            } catch (Exception e) {}
        }

        data = value;
        hasData = true;
        System.out.println("Produced: " + value);

        notify();
    }

    synchronized int consume() {
        while (!hasData) {
            try {
                wait();
            } catch (Exception e) {}
        }

        hasData = false;
        System.out.println("Consumed: " + data);

        notify();
        return data;
    }
}
class Producer implements Runnable {
    private Buffer buffer;

    Producer(Buffer buffer) {
        this.buffer = buffer;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            buffer.produce(i);
        }
    }
}
class Consumer implements Runnable {
    private Buffer buffer;

    Consumer(Buffer buffer) {
        this.buffer = buffer;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            buffer.consume();
        }
    }
}
public class ProducerConsumer {
    public static void main(String[] args) {

        Buffer buffer = new Buffer();

        Thread producer = new Thread(new Producer(buffer));
        Thread consumer = new Thread(new Consumer(buffer));

        producer.start();
        consumer.start();
    }
}
