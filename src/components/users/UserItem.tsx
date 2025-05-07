import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { MessageSquare } from 'lucide-react';
import type { User } from '../../types/user.types';

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <li>
      <div className="px-4 py-4 flex items-center justify-between sm:px-6">
        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-lg font-medium text-gray-600">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
            <div className="flex items-center space-x-4">
              {user.lastActive && (
                <div className="hidden md:block text-sm text-gray-500">
                  Last active: {format(new Date(user.lastActive), 'MMM d, yyyy')}
                </div>
              )}
              <div className={`h-2.5 w-2.5 rounded-full ${user.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <Link
                to={`/chat/${user.id}`}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserItem;