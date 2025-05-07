import { LayoutDashboard, LogOut, MessageSquare, Users } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export function Sidebar({ isOpen, onClose, isMobile = false }: SidebarProps) {
  const { logout, user } = useAuth();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Users", href: "/users", icon: Users },
    { name: "Chats", href: "/chats", icon: MessageSquare, disabled: true },
  ];

  const sidebarContent = (
    <div className="flex h-full flex-col bg-primary text-primary-foreground">
      <div className="flex-1">
        <div className="flex h-16 items-center px-4 border-b border-primary-foreground/10">
          <h1 className="text-xl font-bold">Admin Chat</h1>
        </div>
        <nav className="space-y-1 px-2 py-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.disabled ? "#" : item.href}
              onClick={(e) => {
                if (item.disabled) {
                  e.preventDefault();
                } else if (isMobile && onClose) {
                  onClose();
                }
              }}
              className={({ isActive }) =>
                cn(
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive && !item.disabled
                    ? "bg-primary-foreground text-primary"
                    : "text-primary-foreground hover:bg-primary-foreground/10",
                  item.disabled && "opacity-50 cursor-not-allowed"
                )
              }
            >
              <item.icon
                className="mr-3 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              {item.name}
              {item.disabled && (
                <span className="ml-2 text-xs bg-primary-foreground/20 px-2 py-0.5 rounded text-primary-foreground">
                  Soon
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-primary-foreground/10">
        {user && (
          <div className="text-sm mb-3 font-medium">
            <span className="block text-primary-foreground/70">Logged in as:</span>
            <span className="block font-bold">{user.name}</span>
          </div>
        )}
        <Button
          variant="ghost"
          className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          onClick={() => {
            logout();
            if (isMobile && onClose) {
              onClose();
            }
          }}
        >
          <LogOut className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
          Logout
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0 w-[280px]">
          <ScrollArea className="h-full">
            {sidebarContent}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="h-full">
      <ScrollArea className="h-full">
        {sidebarContent}
      </ScrollArea>
    </div>
  );
}

export default Sidebar;