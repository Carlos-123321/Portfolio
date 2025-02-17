export default interface CreateProject {
    id: number | null;
    name: string;
    description: string;
    coverImage: string;
    reviews: number;
    type: string;
    githubLink: string;
    startDate: string;
    endDate: string;
    images: string[];
    techStack: string[];
    features: string[];
    knowledge: string[];
    summary: string[];
}