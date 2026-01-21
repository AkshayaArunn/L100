import { Document } from "./Document";

export interface DocumentStep {
    execute(document: Document): void;
}
