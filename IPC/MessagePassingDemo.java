import java.util.concurrent.*;

class Message {
    String text;
    Message(String text) {
        this.text = text;
    }
}
class Sender implements Runnable {
    BlockingQueue<Message> queue;

    Sender(BlockingQueue<Message> queue) {
        this.queue = queue;
    }

    public void run() {
        try {
            queue.put(new Message("Hello"));
            System.out.println("Message sent");
        } catch (InterruptedException e) {}
    }
}
class Receiver implements Runnable {
    BlockingQueue<Message> queue;

    Receiver(BlockingQueue<Message> queue) {
        this.queue = queue;
    }

    public void run() {
        try {
            Message msg = queue.take();
            System.out.println("Received: " + msg.text);
        } catch (InterruptedException e) {}
    }
}
public class MessagePassingDemo {
    public static void main(String[] args) {
        BlockingQueue<Message> queue = new LinkedBlockingQueue<>();

        new Thread(new Sender(queue)).start();
        new Thread(new Receiver(queue)).start();
    }
}