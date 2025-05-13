import {FrontendTechnology} from "./FrontendTechnology.ts";

export default interface Skills {
    id: number;
    title: string;
    softSkills: string[];
    frontendTechnologies: FrontendTechnology[];
}