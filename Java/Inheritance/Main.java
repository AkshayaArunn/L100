package Java.Inheritance;

public class Main {
    public static void main(String[] args) {
        Weapon weapon = new Sword();
        System.out.println(" \n");
        System.out.println(weapon.damage());

        weapon = new Bow();
        System.out.println(weapon.damage());
    }
}
