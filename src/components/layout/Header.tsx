import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  setSidebarOpen: (value: boolean) => void;
  sidebarOpen: boolean;
}

const Header = ({ setSidebarOpen, sidebarOpen }: HeaderProps) => {
  const { user } = useAuth();
  const location = useLocation();
  
  const getTitle = () => {
    const path = location.pathname;
    if (path.includes('/dashboard')) return 'Dashboard';
    if (path.includes('/users')) return 'Users';
    if (path.includes('/chats/')) return 'Chat';
    return 'Admin Chat';
  };

  return (
    <div className="sticky top-0 z-10 bg-white shadow">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden mr-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="sr-only">Toggle sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
          <div className="lg:flex lg:items-center lg:justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              {getTitle()}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {user && (
            <span className="text-sm font-medium">
              {user.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;