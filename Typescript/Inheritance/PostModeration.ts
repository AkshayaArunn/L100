import { ModerationItem } from "./ModerationItem";

export class PostModeration extends ModerationItem {
    private textLength: number;

    constructor(contentId: string, textLength: number) {
        super(contentId);
        this.textLength = textLength;
    }

    review(): string {
        if (this.textLength > 500) {
            this.flag();
            return "Post flagged: excessive length";
        }
        return "Post approved";
    }
}
