import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Users, Bell, 
  Settings, Droplet, Server, Mail, BarChart2, LogOut
} from 'lucide-react';
import { cn } from '../../utils/helpers';

const navItems = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Customers', path: '/customers', icon: Users },
  { name: 'Products', path: '/products', icon: Droplet },
  { name: 'Customer Products', path: '/customer-products', icon: Droplet },
  { name: 'Services', path: '/services', icon: Settings },
  { name: 'Service History', path: '/service-history', icon: Mail },
  { name: 'Follow-ups', path: '/followups', icon: Mail },
  { name: 'Reminders', path: '/reminders', icon: Bell },
  { name: 'Invoices', path: '/invoices', icon: BarChart2 },
  { name: 'Payments', path: '/payments', icon: Server },
  { name: 'Technicians', path: '/technicians', icon: Users },
  { name: 'Reports', path: '/reports', icon: BarChart2 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export function Sidebar({ isOpen, setSidebarOpen }: { isOpen: boolean, setSidebarOpen: (v: boolean) => void }) {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-[260px] bg-[#1a2234] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Section */}
        <div className="flex h-[88px] shrink-0 items-center px-6">
          <div className="flex items-center gap-3">
            <Droplet className="w-8 h-8 fill-[#2563eb] text-[#2563eb]" />
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold text-white leading-tight">RO Water Reminders</span>
              <span className="text-[12px] text-gray-400">Admin Panel</span>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1.5 scrollbar-none">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "group flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary-600 text-white shadow-md shadow-primary-600/20" 
                  : "text-[#8a94a6] hover:bg-white/5 hover:text-gray-200"
              )}
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn(
                    "w-[18px] h-[18px]", 
                    isActive ? "text-white" : "text-[#8a94a6] group-hover:text-gray-200"
                  )} />
                  {item.name}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer Section - Logout */}
        <div className="p-4 mb-2">
          <button 
            onClick={handleLogout}
            className="w-full group flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-medium text-[#8a94a6] hover:bg-white/5 hover:text-gray-200 transition-all duration-200"
          >
            <LogOut className="w-[18px] h-[18px] rotate-180 text-[#8a94a6] group-hover:text-gray-200" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}