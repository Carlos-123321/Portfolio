export default interface Project {
    id: number;
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
}