import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { LayoutDashboard, Users, MessageSquare, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Sidebar = () => {
  const { logout, user } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Users', href: '/users', icon: Users },
  ];

  return (
    <div className="flex flex-col h-full bg-primary text-primary-foreground">
      <div className="flex flex-col flex-grow">
        <div className="px-4 py-5 mb-5 flex items-center">
          <h1 className="text-xl font-bold">Admin Chat</h1>
        </div>
        <nav className="flex-1 space-y-1 px-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  isActive
                    ? 'bg-primary-foreground text-primary'
                    : 'text-primary-foreground hover:bg-primary-foreground/10'
                )
              }
            >
              <item.icon
                className="mr-3 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="p-4">
        {user && (
          <div className="text-sm mb-3 font-medium">
            <span className="block">Logged in as:</span>
            <span className="block font-bold">{user.name}</span>
          </div>
        )}
        <button
          onClick={logout}
          className="flex w-full items-center px-2 py-2 text-sm font-medium rounded-md text-primary-foreground hover:bg-primary-foreground/10"
        >
          <LogOut className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;