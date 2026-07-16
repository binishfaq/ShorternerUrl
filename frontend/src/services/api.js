import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const shortenUrl = async (originalUrl) => {
  try {
    const response = await api.post('/testurl', { originalUrl });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Network error' };
  }
};

export const deleteUrl = async (shortCode) => {
  try {
    const response = await api.delete(`/${shortCode}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Network error' };
  }
};

export default api;