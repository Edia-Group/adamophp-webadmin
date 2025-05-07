import { axiosInstance } from './api';

export interface User {
  id: string;
  name: string;
  email: string;
  lastActive?: string;
  status?: 'online' | 'offline';
}

export const getUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>('/users');
  return response.data;
};

export const getUserById = async (userId: string): Promise<User> => {
  const response = await axiosInstance.get<User>(`/users/${userId}`);
  return response.data;
};

export const startChat = async (userId: string) => {
  const response = await axiosInstance.post('/chats', { userId });
  return response.data;
};