import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";


export const getIntroById = async () => {
    const hardcodedId = 123;
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/intro/${hardcodedId}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the intro with ID: ${hardcodedId}`, error);
        return null;
    }
};


export const updateIntro = async (id: number, updatedIntro: {
    title: string;
    secondTitle: string;
    thirdTitle: string;
    image: string;
}) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/v1/intro/${id}`, updatedIntro);
        console.log("Intro updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Intro updating project:", error);
        return null;
    }
};
