// Test Subject
export class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    // LCOM: uses age
    public setAge(a: number) {
        this.age = a;
    }

    // LCOM: uses nothing
    public doNothing() {
        console.log("Nothing");
    }
}

export class Employee extends Person {
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }
}

export class Manager extends Employee {
    public manage() {
        console.log("Managing...");
    }
}
