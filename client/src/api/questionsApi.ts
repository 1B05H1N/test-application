import axios from 'axios';

interface Question {
  id: string;
  title: string;
  body: string;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/questions';

export const getQuestionById = async (id: string): Promise<Question> => {
  const response = await axios.get<Question>(`${API_URL}/${id}`);
  return response.data;
};

export const getQuestions = async (): Promise<Question[]> => {
  const response = await axios.get<Question[]>(API_URL);
  return response.data;
};

export const createQuestion = async (data: Partial<Question>): Promise<Question> => {
  const response = await axios.post<Question>(API_URL, data);
  return response.data;
};

export const updateQuestion = async (id: string, data: Partial<Question>): Promise<Question> => {
  const response = await axios.put<Question>(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteQuestion = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
