import axios from 'axios';
import {FrontendTechnology} from "./FrontendTechnology.ts";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";


export const getSkillsById = async () => {
    const hardcodedId = 123;
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/skills/${hardcodedId}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the skills with ID: ${hardcodedId}`, error);
        return null;
    }
};


export const updateSkills = async (id: number, updatedSkills: {
    title: string;
    softSkills: string[];
    frontendTechnologies: FrontendTechnology[];
}) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/v1/skills/${id}`, updatedSkills);
        console.log("Skills updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Skills updating project:", error);
        return null;
    }
};
