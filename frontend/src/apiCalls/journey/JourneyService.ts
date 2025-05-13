import axios from 'axios';
import {Academic} from "./Academic.ts";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";


export const getJourneyById = async () => {
    const hardcodedId = 123;
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/journey/${hardcodedId}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the journey with ID: ${hardcodedId}`, error);
        return null;
    }
};


export const updateJourney = async (id: number, updatedJourney: {
    title: string;
    academic: Academic[];
}) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/v1/journey/${id}`, updatedJourney);
        console.log("JourneySectionPage updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("JourneySectionPage updating:", error);
        return null;
    }
};
