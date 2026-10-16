import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  Menu, Bell, ChevronDown, Search,
  Settings, LogOut, AlertCircle,
  Clock, CheckCircle2, ChevronRight
} from 'lucide-react';
import { cn } from '../../utils/helpers';

const pageTitleMap: Record<string, { title: string; category: string }> = {
  '/': { title: 'Dashboard', category: 'Overview' },
  '/customers': { title: 'Customers', category: 'Overview' },
  '/products': { title: 'Products', category: 'Inventory' },
  '/customer-products': { title: 'Customer Products', category: 'Assets' },
  '/services': { title: 'Services Catalog', category: 'Services' },
  '/service-history': { title: 'Service History', category: 'Services' },
  '/reminders': { title: 'Service Reminders', category: 'Operations' },
  '/followups': { title: 'Customer Follow-ups', category: 'Operations' },
  '/notifications': { title: 'System Notifications', category: 'Communication' },
  '/invoices': { title: 'Invoices & Billing', category: 'Finance' },
  '/purchase-history': { title: 'Purchase History', category: 'Finance' },
  '/payments': { title: 'Payment Transactions', category: 'Finance' },
  '/technicians': { title: 'Field Technicians', category: 'Team' },
  '/reports': { title: 'Analytics & Reports', category: 'Insights' },
  '/settings': { title: 'System Settings', category: 'Configuration' },
};

const mockNotifications = [
  {
    id: 1,
    title: 'Filter Replacement Due',
    desc: 'Rajesh Kumar (Kent Grand+) service is scheduled for today.',
    time: '10m ago',
    unread: true,
    type: 'warning'
  },
  {
    id: 2,
    title: 'Payment Received',
    desc: 'INV-2025-0108 ₹2,500.00 settled via UPI by Anita Desai.',
    time: '1h ago',
    unread: true,
    type: 'success'
  },
  {
    id: 3,
    title: 'AMC Contract Expiring',
    desc: '4 customer AMC contracts require renewal within 7 days.',
    time: '1d ago',
    unread: false,
    type: 'info'
  }
];

export function Topbar({
  setIsMobileOpen,
  isCollapsed,
  setIsCollapsed
}: {
  setIsMobileOpen: (v: boolean) => void,
  isCollapsed: boolean,
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  // Determine current page info
  const currentPage = pageTitleMap[location.pathname] || {
    title: location.pathname.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Dashboard',
    category: 'Admin'
  };

  return (
    <header className="sticky top-0 z-30 flex h-[74px] shrink-0 items-center justify-between border-b border-slate-200/80 bg-white/95 backdrop-blur-md px-4 sm:px-6 shadow-xs transition-all duration-300">

      {/* Left Area: Toggle & Breadcrumb */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Mobile Sidebar Toggle Button */}
        <button
          type="button"
          className="p-2 -ml-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors lg:hidden"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Desktop Sidebar Toggle Button */}
        <div className="hidden lg:block">
          <button
            type="button"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all duration-200 border border-slate-200/60"
            onClick={() => setIsCollapsed(v => !v)}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
        </div>

        {/* Breadcrumb / Page Title */}
        <div className="flex flex-col">
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-slate-400">

          </div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none mt-0.5 sm:mt-1">
            {currentPage.title}
          </h1>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* System Status Pill */}
        <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live Sync Active
        </div>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            type="button"
            onClick={() => setNotificationsOpen(v => !v)}
            className={cn(
              "relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors border border-transparent",
              notificationsOpen && "bg-slate-100 text-slate-900 border-slate-200"
            )}
            title="Notifications"
            aria-label="View notifications"
          >
            <Bell className="h-[20px] w-[20px]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
          </button>

          {/* Notifications Popover */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900">Notifications</span>
                  <span className="text-[11px] font-bold bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                    2 unread
                  </span>
                </div>
                <button
                  onClick={() => navigate('/notifications')}
                  className="text-xs font-semibold text-primary-600 hover:text-primary-700 hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="divide-y divide-slate-100 max-h-[320px] overflow-y-auto">
                {mockNotifications.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      setNotificationsOpen(false);
                      navigate('/notifications');
                    }}
                    className={cn(
                      "p-3.5 hover:bg-slate-50 cursor-pointer transition-colors flex items-start gap-3",
                      n.unread && "bg-primary-50/30"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                      n.type === 'warning' ? "bg-amber-100 text-amber-700" :
                        n.type === 'success' ? "bg-emerald-100 text-emerald-700" :
                          "bg-blue-100 text-blue-700"
                    )}>
                      {n.type === 'warning' ? <AlertCircle className="w-4 h-4" /> :
                        n.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> :
                          <Clock className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <p className="text-xs font-bold text-slate-900 truncate">{n.title}</p>
                        <span className="text-[10px] text-slate-400 whitespace-nowrap">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">{n.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 py-2 border-t border-slate-100 text-center">
                <Link
                  to="/notifications"
                  onClick={() => setNotificationsOpen(false)}
                  className="text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Manage Notification Preferences
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            type="button"
            onClick={() => setProfileOpen(v => !v)}
            className="flex items-center gap-2.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all duration-200 text-left"
          >
            <div className="relative">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-primary-600 to-indigo-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-xs">
                A
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs sm:text-sm font-bold text-slate-800">Admin</span>
              <span className="text-[10.5px] font-medium text-slate-400">Super Admin</span>
            </div>
            <ChevronDown className={cn(
              "w-4 h-4 text-slate-400 transition-transform duration-200",
              profileOpen && "rotate-180"
            )} />
          </button>

          {/* Profile Menu Popover */}
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-4 py-2.5 border-b border-slate-100">
                <p className="text-xs font-semibold text-slate-400">Signed in as</p>
                <p className="text-xs font-bold text-slate-900 truncate">admin@roreminders.com</p>
              </div>

              <div className="py-1">
                <Link
                  to="/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <Settings className="w-4 h-4 text-slate-400" />
                  Account & Settings
                </Link>
                <Link
                  to="/reminders"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <Clock className="w-4 h-4 text-slate-400" />
                  Due Reminders (28)
                </Link>
              </div>

              <div className="border-t border-slate-100 pt-1">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2.5 px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-4 h-4 text-rose-500" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}