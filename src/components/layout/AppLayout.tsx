import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export function AppLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#f4f7fa] overflow-hidden">
      <Sidebar 
        isMobileOpen={isMobileOpen} 
        setIsMobileOpen={setIsMobileOpen} 
        isCollapsed={isCollapsed} 
      />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <Topbar 
          setIsMobileOpen={setIsMobileOpen} 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed} 
        />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="p-4 sm:p-5 lg:p-6 max-w-[1400px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}