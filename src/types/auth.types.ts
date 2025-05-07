export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    user: User;
    token: string;
  }
  
  export interface AuthContextType extends AuthState {
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => void;
  }
  
  export interface DecodedToken {
    sub: string;
    email: string;
    name: string;
    role: string;
    exp: number;
  }