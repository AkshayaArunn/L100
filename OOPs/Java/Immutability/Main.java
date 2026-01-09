package Java.Immutability;

public class Main {
    public static void main(String[] args) {

        Money m1 = new Money(100);
        Money m2 = m1.add(new Money(50));

        System.out.println("\n"+m1.value());
        System.out.println("\n"+m2.value());
    }
}
