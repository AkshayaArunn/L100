import { Task } from "./Task.js";
import { TaskPriority } from "./TaskPriority.js";

export class FeatureTask extends Task {
    private readonly estimatedDays: number;

    constructor(id: string, title: string, priority: TaskPriority, estimatedDays: number) {
        super(id, title, priority);
        this.estimatedDays = estimatedDays;
    }

    getDetails(): string {
        return `FEATURE | ${this.getTitle()} | ETA: ${this.estimatedDays} days | Priority: ${this.getPriority()} | Status: ${this.getStatus()}`;
    }
}
