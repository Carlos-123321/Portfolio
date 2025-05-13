import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";


export const getAboutMeById = async () => {
    const hardcodedId = 123;
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/aboutMe/${hardcodedId}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the aboutMe with ID: ${hardcodedId}`, error);
        return null;
    }
};


export const updateAboutMe = async (id: number, updatedAboutMe: {
    aboutMeText: string;
    title: string;
}) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/v1/aboutMe/${id}`, updatedAboutMe);
        console.log("AboutMe updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("AboutMe updating project:", error);
        return null;
    }
};
