import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Local storage functions for auth
export const setTokenToStorage = (token: string) => {
  localStorage.setItem('authToken', token);
}

export const getTokenFromStorage = (): string | null => {
  return localStorage.getItem('authToken');
}

export const removeTokenFromStorage = () => {
  localStorage.removeItem('authToken');
}

// Format date helper
export const formatDate = (date: string | Date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

// Format time for chat messages
export const formatTime = (date: string | Date) => {
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}