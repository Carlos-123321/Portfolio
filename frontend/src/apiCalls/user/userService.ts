import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1/users';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/users`);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the users!", error);
        return [];
    }
};

export const getUserById = async (id: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the user with ID: ${id}`, error);
        return null;
    }
};

export const deleteUser = async (id: number) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/v1/users/${id}`);
        console.log(`User with ID ${id} deleted successfully`);
        return response.data;
    } catch (error) {
        console.error(`There was an error deleting the user with ID: ${id}`, error);
        return null;
    }
};

export const createUser = async (user: {
    name: string;
    email: string;
    comment: string[];
}) => {
    try {
        const response = await axios.post(API_BASE_URL + "/api/v1/users", user);
        console.log("User created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("There was an error creating the user!", error);
        return null;
    }
};

export const updateUser = async (id: number, updatedUser: { name: string;
    email: string;
    comment: string[];
    password: string;
    role: string;}) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/v1/users/${id}`, updatedUser);
        console.log("User updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        return null;
    }
};