import {FrontendTechnology} from "./FrontendTechnology.ts";
import {BackendTechnology} from "./BackendTechnology.ts";

export default interface Skills {
    id: number;
    title: string;
    softSkills: string[];
    frontendTechnologies: FrontendTechnology[];
    backendTechnologies: BackendTechnology[];
}