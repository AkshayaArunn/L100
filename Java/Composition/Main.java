package Java.Composition;

public class Main {
    public static void main(String[] args) {
        Car petrolCar = new Car(new PetrolEngine());
        petrolCar.start();

        Car electricCar = new Car(new ElectricEngine());
        electricCar.start();
    }
}

class AppConfig {
public static final int MAX_USERS = 100;
}
