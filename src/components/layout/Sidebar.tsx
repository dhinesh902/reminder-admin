import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Users, Bell, 
  Settings, Droplet, Server, Mail, BarChart2, LogOut, ShoppingCart
} from 'lucide-react';
import { cn } from '../../utils/helpers';

const navItems = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Customers', path: '/customers', icon: Users },
  { name: 'Products', path: '/products', icon: Droplet },
  { name: 'Customer Products', path: '/customer-products', icon: Droplet },
  { name: 'Services', path: '/services', icon: Settings },
  { name: 'Service History', path: '/service-history', icon: Mail },
  { name: 'Notifications', path: '/notifications', icon: Bell },
  { name: 'Follow-ups', path: '/followups', icon: Mail },
  { name: 'Reminders', path: '/reminders', icon: Bell },
  { name: 'Invoices', path: '/invoices', icon: BarChart2 },
  { name: 'Purchase History', path: '/purchase-history', icon: ShoppingCart },
  { name: 'Payments', path: '/payments', icon: Server },
  { name: 'Technicians', path: '/technicians', icon: Users },
  { name: 'Reports', path: '/reports', icon: BarChart2 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export function Sidebar({ 
  isMobileOpen, 
  setIsMobileOpen, 
  isCollapsed 
}: { 
  isMobileOpen: boolean, 
  setIsMobileOpen: (v: boolean) => void,
  isCollapsed: boolean 
}) {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 bg-[#1a2234] transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col",
        isMobileOpen ? "translate-x-0" : "-translate-x-full",
        isCollapsed ? "w-[88px]" : "w-[260px]"
      )}>
        {/* Logo Section */}
        <div className={cn(
          "flex h-[88px] shrink-0 items-center transition-all duration-300", 
          isCollapsed ? "justify-center px-0" : "px-6"
        )}>
          <div className="flex items-center gap-3 overflow-hidden">
            <Droplet className="w-8 h-8 fill-[#2563eb] text-[#2563eb] shrink-0" />
            <div className={cn(
              "flex flex-col whitespace-nowrap transition-all duration-300", 
              isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
            )}>
              <span className="text-[15px] font-semibold text-white leading-tight">RO Water Reminders</span>
              <span className="text-[12px] text-gray-400">Admin Panel</span>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5 scrollbar-none">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              title={isCollapsed ? item.name : undefined}
              className={({ isActive }) => cn(
                "group flex items-center rounded-xl text-[14px] font-medium transition-all duration-200 overflow-hidden",
                isCollapsed ? "justify-center px-0 py-3" : "px-4 py-3 gap-4",
                isActive 
                  ? "bg-primary-600 text-white shadow-md shadow-primary-600/20" 
                  : "text-[#8a94a6] hover:bg-white/5 hover:text-gray-200"
              )}
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn(
                    "w-[20px] h-[20px] shrink-0", 
                    isActive ? "text-white" : "text-[#8a94a6] group-hover:text-gray-200"
                  )} />
                  <span className={cn(
                    "whitespace-nowrap transition-all duration-300", 
                    isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
                  )}>
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer Section - Logout */}
        <div className="p-3 mb-2">
          <button 
            onClick={handleLogout}
            title={isCollapsed ? "Logout" : undefined}
            className={cn(
              "w-full group flex items-center rounded-xl text-[14px] font-medium text-[#8a94a6] hover:bg-white/5 hover:text-gray-200 transition-all duration-200 overflow-hidden",
              isCollapsed ? "justify-center px-0 py-3" : "px-4 py-3 gap-4"
            )}
          >
            <LogOut className="w-[20px] h-[20px] rotate-180 shrink-0 text-[#8a94a6] group-hover:text-gray-200" />
            <span className={cn(
              "whitespace-nowrap transition-all duration-300", 
              isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
            )}>
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}