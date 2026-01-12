class User {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getProfile(): string {
        return `User ID: ${this.id}, Name: ${this.name}`;
    }
}
const user1 = new User(1, "Akshaya");
const user2 = new User(2, "Rahul");

console.log(user1.getProfile());
console.log(user2.getProfile());
