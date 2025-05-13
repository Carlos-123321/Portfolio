import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";


export const getReviewsById = async () => {
    const hardcodedId = 123;
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/reviews/${hardcodedId}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the reviews with ID: ${hardcodedId}`, error);
        return null;
    }
};


export const updateReviews = async (id: number, updatedReviews: {
    title: string;
}) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/v1/reviews/${id}`, updatedReviews);
        console.log("Reviews updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Reviews updating project:", error);
        return null;
    }
};
