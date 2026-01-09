package Java.Polymorphism;

public class Main {
    public static void main(String[] args) {

        GameCharacter character;

        character = new Warrior();
        character.attack();

        character = new Mage();
        character.attack();

        character = new Archer();
        character.attack();
    }
}


