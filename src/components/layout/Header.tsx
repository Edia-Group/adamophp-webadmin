import { Menu } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../hooks/useAuth';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
  title?: string;
}

const Header = ({ setSidebarOpen, title = 'Dashboard' }: HeaderProps) => {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 z-10 bg-white shadow">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            type="button"
            className="lg:hidden -m-2.5 p-2.5 text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="lg:flex lg:items-center lg:justify-between">
            <h1 className="text-2xl font-semibold text-gray-900 ml-2 lg:ml-0">
              {title}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <div className={cn("flex items-center gap-x-4 lg:gap-x-6")}>
            {user && (
              <span className="text-sm font-medium">
                {user.name}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;