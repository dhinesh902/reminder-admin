import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export function AppLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return (
    <div className="flex h-screen bg-[#f4f7fa] overflow-hidden print:h-auto print:overflow-visible print:bg-white">
      <div className="print:hidden flex shrink-0">
        <Sidebar 
          isMobileOpen={isMobileOpen} 
          setIsMobileOpen={setIsMobileOpen} 
          isCollapsed={isCollapsed} 
        />
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden print:overflow-visible">
        <div className="print:hidden">
          <Topbar 
            setIsMobileOpen={setIsMobileOpen} 
            isCollapsed={isCollapsed} 
            setIsCollapsed={setIsCollapsed} 
          />
        </div>
        <main ref={mainRef} className="flex-1 relative z-0 overflow-y-auto focus:outline-none print:overflow-visible print:h-auto">
          <div className="p-4 sm:p-5 lg:p-6 max-w-[1400px] mx-auto print:p-0 print:max-w-none print:m-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}