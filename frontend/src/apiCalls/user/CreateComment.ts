export default interface CreateComment{
    id: number;
    name: string;
    email: string;
    comments: {
        id?: number;
        comment: string;
        approved: boolean;
    }[];
    password: string;
    role: string;
}