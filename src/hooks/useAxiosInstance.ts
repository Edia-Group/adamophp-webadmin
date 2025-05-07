import { axiosInstance } from '../services/api';
import { useAuth } from './useAuth';
import { useEffect } from 'react';

export const useAxiosInstance = () => {
  const { token } = useAuth();
  
  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config: any) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => Promise.reject(error)
    );
    
    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
    };
  }, [token]);
  
  return axiosInstance;
};