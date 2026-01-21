export interface FileUploader {
    canUpload(sizeInMb: number): boolean;
    upload(fileName: string, sizeInMb: number): void;
}