import type { LoginCredentials, LoginResponse } from '../types/auth.types';
import { axiosInstance } from './api';

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>('/auth/login', credentials);
  return response.data;
};

export const register = async (userData: any) => {
  const response = await axiosInstance.post('/auth/register', userData);
  return response.data;
};