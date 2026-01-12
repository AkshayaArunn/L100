import { Task } from "./Task.js";
import { TaskPriority } from "./TaskPriority.js";
export class BugTask extends Task {
    private readonly severity: number;
    constructor(id: string, title: string, priority: TaskPriority, severity: number) {
        super(id, title, priority);
        if (severity < 1 || severity > 5)
            throw new Error("Severity ranhes from 1 to 5 alone");
        this.severity = severity;
    }
    getDetails(): string {
        return `BUG | ${this.getTitle()} | Severity: ${this.severity} | Priority: ${this.getPriority()} | Status: ${this.getStatus()}`;
    }
}