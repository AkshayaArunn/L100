package com.ck.test;

import java.util.ArrayList;

// Test Subject 1: Simple Class
class Person {
    private String name;
    private int age;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    // Uses 'age'
    public void setAge(int age) {
        this.age = age;
    }

    // Uses nothing (LCOM impact)
    public void doNothing() {
        System.out.println("Nothing");
    }
}

// Test Subject 2: Inheritance
class Employee extends Person {
    private double salary;

    public void setSalary(double salary) {
        this.salary = salary;
    }
}

// Test Subject 3: Coupling
class Department {
    private Manager manager; // Coupling 1
    private ArrayList<Employee> employees; // Coupling 2 (ArrayList, Employee)

    public void addEmployee(Employee e) { // Method param
        // ...
    }

    public Manager getManager() { // Return type
        return manager;
    }
}

// Test Subject 4: Another class
class Manager extends Employee {
    // ...
}
