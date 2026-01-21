import { FileUploader } from "./FileUploader";
export class CloudUploader implements FileUploader {
    private readonly MAX_SIZE = 100;

    canUpload(sizeInMb: number): boolean {
        return sizeInMb <= this.MAX_SIZE;
    }

    upload(fileName: string, sizeInMb: number): void {
        console.log(`Cloud upload: ${fileName}`);
    }
}