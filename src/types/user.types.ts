export interface User {
    id: string;
    name: string;
    email: string;
    lastActive?: string;
    status?: 'online' | 'offline';
  }