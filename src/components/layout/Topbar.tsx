import React from 'react';
import { Menu, Bell, ChevronDown } from 'lucide-react';

export function Topbar({ setSidebarOpen }: { setSidebarOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-[88px] shrink-0 items-center justify-between border-b border-gray-100 bg-white px-6 shadow-sm">
      <button
        type="button"
        className="p-2 -ml-2 text-gray-500 hover:text-gray-700 transition-colors lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
      
      {/* Spacer for desktop since menu is only on mobile or for keeping structure */}
      <div className="hidden lg:block">
        <button
          type="button"
          className="p-2 -ml-2 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-[22px] w-[22px]" aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center gap-x-6">
        <button type="button" className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors">
          <span className="sr-only">View notifications</span>
          <Bell className="h-[22px] w-[22px]" aria-hidden="true" />
          <span className="absolute top-1.5 right-1.5 w-[9px] h-[9px] rounded-full bg-red-500 border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-x-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Admin" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Admin</span>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
      </div>
    </header>
  );
}