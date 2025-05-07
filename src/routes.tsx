import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
//import Chat from './pages/Chat';
import RequireAuth from './components/auth/RequireAuth';

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
        //   {
        //     path: 'chat/:userId',
        //     element: <Chat />
        //   }
        ]
      }
    ]
  }
]);

export default router;