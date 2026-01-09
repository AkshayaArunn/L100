export abstract class ModerationItem {
    protected contentId: string;
    protected isFlagged: boolean = false;

    constructor(contentId: string) {
        this.contentId = contentId;
    }

    flag(): void {
        this.isFlagged = true;
    }

    isContentFlagged(): boolean {
        return this.isFlagged;
    }

    abstract review(): string;
}
