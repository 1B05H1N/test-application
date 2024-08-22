import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/recommendations';

export const getRecommendations = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getRecommendationById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createRecommendation = async (data: any) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateRecommendation = async (id: string, data: any) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteRecommendation = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
