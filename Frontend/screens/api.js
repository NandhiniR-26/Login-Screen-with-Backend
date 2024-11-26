import axios from 'axios';

const API_URL = 'http://10.0.2.2:3000';

export const signup = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { username, email, password });
        return response.data;
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
