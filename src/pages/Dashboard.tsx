import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Welcome back, {user?.name}!</h2>
        <p className="text-gray-700">
          This is the admin dashboard for the customer chat application. 
          Use the sidebar to navigate to different sections.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium mb-2">Users</h3>
          <p className="text-gray-700 mb-4">
            View and manage app users. Start conversations with users.
          </p>
          <a 
            href="/users" 
            className="text-primary hover:underline font-medium"
          >
            Go to Users →
          </a>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium mb-2">Active Chats</h3>
          <p className="text-gray-700 mb-4">
            View and continue your active conversations.
          </p>
          <p className="text-gray-500 text-sm">
            Coming soon...
          </p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium mb-2">Analytics</h3>
          <p className="text-gray-700 mb-4">
            View chat statistics and user engagement metrics.
          </p>
          <p className="text-gray-500 text-sm">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;