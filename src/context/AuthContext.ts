import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import type {
    AuthContextType,
    AuthState,
    DecodedToken,
    LoginCredentials,
    User
} from '../types/auth.types';
import { getTokenFromStorage, removeTokenFromStorage, setTokenToStorage } from '../lib/utils';
import { login as loginApi } from '../services/authService';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
};

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: async () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthState>(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      const token = getTokenFromStorage();
      
      if (token) {
        try {
          const decoded = jwtDecode<DecodedToken>(token);
          
          // Check if token is expired
          const currentTime = Date.now() / 1000;
          if (decoded.exp < currentTime) {
            removeTokenFromStorage();
            setState({
              ...initialState,
              isLoading: false,
            });
            return;
          }
          
          const user: User = {
            id: decoded.sub,
            email: decoded.email,
            name: decoded.name,
            role: decoded.role,
          };
          
          setState({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          console.error('Failed to decode token:', error);
          removeTokenFromStorage();
          setState({
            ...initialState,
            isLoading: false,
          });
        }
      } else {
        setState({
          ...initialState,
          isLoading: false,
        });
      }
    };
    
    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const response = await loginApi(credentials);
      const { user, token } = response;
      
      setTokenFromStorage(token);
      
      setState({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const logout = () => {
    removeTokenFromStorage();
    setState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};