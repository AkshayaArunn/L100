
import { BugTask } from "./domain/BugTask.js";
import { FeatureTask } from "./domain/FeatureTask.js";
import { TaskBoard } from "./domain/TaskBoard.js";
import { TaskPriority } from "./domain/TaskPriority.js";


const board = new TaskBoard();

const bug1 = new BugTask(
    "T-101",
    "Login button not working",
    TaskPriority.HIGH,
    5
);

const feature1 = new FeatureTask(
    "T-102",
    "Add dark mode",
    TaskPriority.MEDIUM,
    4
);

board.addTask(bug1);
board.addTask(feature1);

const tasks = board.getTasks();
board.printAll();
