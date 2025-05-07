import { useEffect } from 'react';
import { AxiosInstance } from '../services/api';
import { useAuth } from './useAuth';

export const useAxiosInstance = () => {
  const { token } = useAuth();
  
  useEffect(() => {
    const requestIntercept = AxiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    
    return () => {
      AxiosInstance.interceptors.request.eject(requestIntercept);
    };
  }, [token]);
  
  return AxiosInstance;
};