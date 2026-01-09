import { ModerationItem } from "./ModerationItem";

export class VideoModeration extends ModerationItem {
    private durationSeconds: number;

    constructor(contentId: string, durationSeconds: number) {
        super(contentId);
        this.durationSeconds = durationSeconds;
    }

    review(): string {
        if (this.durationSeconds > 300) {
            this.flag();
            return "Video flagged: too long";
        }
        return "Video approved";
    }
}
