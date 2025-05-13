import {Hobbies} from "./Hobbies.ts";

export default interface Hobby {
    id: number;
    title: string;
    below: string;
    hobbies: Hobbies[];
}