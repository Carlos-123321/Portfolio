import {Academic} from "./Academic.ts";

export default interface Journey {
    id: number;
    title: string;
    academic: Academic[];
}