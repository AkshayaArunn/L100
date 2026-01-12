import { Task } from "./Task.js";
export class TaskBoard {
    private tasks: Task[] = [];
    addTask(task: Task): void {
        this.tasks.push(task);
    }
    getTasks(): readonly Task[] {
        return [...this.tasks];
    }
    printAll(): void {
        for (const task of this.tasks) {
            console.log(task.getDetails());
        }
    }
}