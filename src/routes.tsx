import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Chat from './pages/Chat.tsx';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import RequireAuth from './components/auth/RequireAuth';
import Users from './pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'users',
            element: <Users />
          },
         {
            path: 'chats',
            element: <Chat />
        }
        ]
      }
    ]
  }
]);

export default router;