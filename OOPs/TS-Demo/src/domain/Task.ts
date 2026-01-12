import { TaskPriority } from "./TaskPriority.js";
import { TaskStatus } from "./TaskStatus.js";
export abstract class Task {
    private readonly id: string;
    private readonly title: string;
    private status: TaskStatus;
    private readonly priority: TaskPriority;
    protected constructor(id: string, titile: string, priority: TaskPriority) {
        this.id = id;
        this.title = titile;
        this.status = TaskStatus.OPEN;
        this.priority = priority;

    }
    getId(): string {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getStatus(): TaskStatus {
        return this.status;
    }
    getPriority() {
        return this.priority;
    }
    start(): void {
        if (this.status !== TaskStatus.OPEN) {
            throw new Error("Can not start this task");
        }
        this.status = TaskStatus.IN_PROGRESS;
    }
    complete(): void {
        if (this.status !== TaskStatus.IN_PROGRESS) {
            throw new Error("Can not complete a task thats in progress");
        }
        this.status = TaskStatus.COMPLETED;
    }
    abstract getDetails(): string;
}