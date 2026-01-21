import { FileUploader } from "./FileUploader";
export class LocalUploader implements FileUploader {
    canUpload(sizeInMb: number): boolean {
        return true;
    }

    upload(fileName: string, sizeInMb: number): void {
        console.log(`Local upload: ${fileName}`);
    }
}