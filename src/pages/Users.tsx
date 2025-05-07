import UserList from '../components/users/UserList';

const Users = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">App Users</h2>
        <p className="text-gray-700 mb-6">
          Browse mobile app users and start conversations.
        </p>
        <UserList />
      </div>
    </div>
  );
};

export default Users;