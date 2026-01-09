public class BankAccount {

    private double balance;

    public BankAccount(double initialBalance) {
        if (initialBalance < 0)
            throw new IllegalArgumentException("Balance cannot be negative");
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount <= 0)
            throw new IllegalArgumentException("Deposit must be positive");
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > balance)
            throw new IllegalStateException("Insufficient funds");
        balance -= amount;
    }

    public double getBalance() {
        return balance;
    }
}
