export type Question = {
    id: number;
    text: string;
    marks: number;
};

export class Exam {
    private readonly examId: string;
    private questions: Question[] = [];
    private totalScore: number = 0;
    private isSubmitted: boolean = false;

    constructor(examId: string) {
        this.examId = examId;
    }

    addQuestion(question: Question): void {
        if (this.isSubmitted) {
            throw new Error("Cannot add questions after submission");
        }
        this.questions.push({ ...question });
    }

    getQuestions(): ReadonlyArray<Question> {
        return this.questions.map(q => ({ ...q }));
    }

    submitExam(score: number): void {
        if (this.isSubmitted) {
            throw new Error("Exam already submitted");
        }

        if (score < 0 || score > this.getMaxMarks()) {
            throw new Error("Invalid score");
        }

        this.totalScore = score;
        this.isSubmitted = true;
    }

    getResult(): string {
        if (!this.isSubmitted) {
            return "Exam not submitted yet";
        }
        return `Score: ${this.totalScore} / ${this.getMaxMarks()}`;
    }

    private getMaxMarks(): number {
        return this.questions.reduce((sum, q) => sum + q.marks, 0);
    }
}
