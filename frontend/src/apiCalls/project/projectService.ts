import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export const getProjects = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/projects`);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the projects!", error);
        return [];
    }
};

export const getProjectById = async (id: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/projects/${id}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the project with ID: ${id}`, error);
        return null;
    }
};

export const deleteProject = async (id: number) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/v1/projects/${id}`);
        console.log(`Project with ID ${id} deleted successfully`);
        return response.data;
    } catch (error) {
        console.error(`There was an error deleting the project with ID: ${id}`, error);
        return null;
    }
};

export const createProject = async (project: {
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
}) => {
    try {
        const response = await axios.post(API_BASE_URL + "/api/v1/projects", project);
        console.log("Project created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("There was an error creating the project!", error);
        return null;
    }
};

export const updateProject = async (id: number, updatedProject: {
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
}) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/v1/projects/${id}`, updatedProject);
        console.log("Project updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating project:", error);
        return null;
    }
};
