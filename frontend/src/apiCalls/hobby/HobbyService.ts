import axios from 'axios';
import {Hobbies} from "./Hobbies.ts";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";


export const getHobbyById = async () => {
    const hardcodedId = 123;
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/hobby/${hardcodedId}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the hobby with ID: ${hardcodedId}`, error);
        return null;
    }
};


export const updateHobby = async (id: number, updatedHobby: {
    title: string;
    below: string;
    hobbies: Hobbies[];
}) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/v1/hobby/${id}`, updatedHobby);
        console.log("Hobby updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Hobby updating:", error);
        return null;
    }
};
