import React, { useState } from 'react';
import { Bell, Search, Info, AlertTriangle, CheckCircle, Clock, Check, Trash2, Calendar as CalendarIcon, Settings, MailOpen } from 'lucide-react';

export function Notifications() {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    { id: 1, title: 'New Service Request', message: 'Rohit Sharma has requested a RO service for tomorrow at 10:00 AM.', time: '10 mins ago', date: 'Today', type: 'info', read: false },
    { id: 2, title: 'Payment Overdue', message: 'Payment of ₹2,500 is overdue for Priya Nair (Inv #INV-0123).', time: '1 hour ago', date: 'Today', type: 'warning', read: false },
    { id: 3, title: 'Followup Completed', message: 'Followup task completed for Amit Verma by technician Rahul.', time: '3 hours ago', date: 'Today', type: 'success', read: true },
    { id: 4, title: 'Filter Change Due', message: 'RO filter change is due for Sneha Iyer. System generated reminder.', time: '1 day ago', date: 'Yesterday', type: 'info', read: true },
    { id: 5, title: 'Payment Received', message: 'Received ₹1,500 from Karan Mehta via UPI.', time: '2 days ago', date: 'Yesterday', type: 'success', read: true },
    { id: 6, title: 'Technician Assigned', message: 'Neha has been assigned to Neha Joshi\'s complaint ticket #4401.', time: '2 days ago', date: 'Yesterday', type: 'info', read: true },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'info': return <Info className="w-5 h-5 text-blue-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'success': return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'info': return 'bg-blue-50 border-blue-100';
      case 'warning': return 'bg-amber-50 border-amber-100';
      case 'success': return 'bg-emerald-50 border-emerald-100';
      default: return 'bg-gray-50 border-gray-100';
    }
  };

  // Group notifications by date
  const groupedNotifications = notifications.reduce((acc, notif) => {
    if (!acc[notif.date]) {
      acc[notif.date] = [];
    }
    acc[notif.date].push(notif);
    return acc;
  }, {} as Record<string, typeof notifications>);

  return (
    <div className="w-full space-y-6 max-w-5xl mx-auto">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 text-primary-600 flex items-center justify-center rounded-2xl shadow-sm border border-primary-100/50">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">Notifications</h1>
            <p className="text-sm text-gray-500 font-medium">Stay updated with your latest alerts and tasks.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-primary-600 bg-white border border-gray-200 hover:border-primary-200 px-4 py-2.5 rounded-xl transition-all shadow-sm">
            <Settings className="w-4 h-4" /> Preferences
          </button>
          <button className="flex items-center gap-2 text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 px-4 py-2.5 rounded-xl transition-all shadow-sm shadow-primary-600/20">
            <MailOpen className="w-4 h-4" /> Mark all as read
          </button>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
        
        {/* Top Filter / Tabs Bar */}
        <div className="px-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 bg-gray-50/30 pt-4">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setActiveTab('all')}
              className={`pb-4 text-[13px] font-extrabold tracking-wide uppercase transition-colors relative ${activeTab === 'all' ? 'text-primary-600' : 'text-gray-400 hover:text-gray-700'}`}
            >
              All Alerts
              <span className={`ml-2 py-0.5 px-2 rounded-full text-[11px] ${activeTab === 'all' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-500'}`}>6</span>
              {activeTab === 'all' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-t-full"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('unread')}
              className={`pb-4 text-[13px] font-extrabold tracking-wide uppercase transition-colors relative ${activeTab === 'unread' ? 'text-primary-600' : 'text-gray-400 hover:text-gray-700'}`}
            >
              Unread
              <span className={`ml-2 py-0.5 px-2 rounded-full text-[11px] ${activeTab === 'unread' ? 'bg-primary-100 text-primary-700' : 'bg-rose-100 text-rose-600'}`}>2</span>
              {activeTab === 'unread' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-t-full"></div>}
            </button>
          </div>

          <div className="relative pb-3 w-full sm:w-auto">
             <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-[calc(50%+6px)]" />
             <input 
               type="text" 
               placeholder="Search notifications..." 
               className="w-full sm:w-64 pl-9 pr-4 py-2 bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors shadow-sm" 
             />
          </div>
        </div>

        {/* Notifications List Grouped */}
        <div className="divide-y divide-gray-50">
          {Object.entries(groupedNotifications).map(([date, items]) => (
            <div key={date} className="pb-2">
              <div className="px-6 py-3 flex items-center gap-2 bg-gray-50/50 sticky top-0 z-10">
                <CalendarIcon className="w-4 h-4 text-gray-400" />
                <h3 className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">{date}</h3>
              </div>
              
              <div className="flex flex-col">
                {items.filter(item => activeTab === 'all' || (activeTab === 'unread' && !item.read)).map((notif) => (
                  <div 
                    key={notif.id} 
                    className={`group px-6 py-4 flex gap-4 transition-all hover:bg-gray-50 cursor-pointer relative overflow-hidden ${!notif.read ? 'bg-primary-50/10' : ''}`}
                  >
                    {/* Unread Indicator Bar */}
                    {!notif.read && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded-r-full"></div>
                    )}

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm ${getBgColor(notif.type)}`}>
                      {getIcon(notif.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                        <h4 className={`text-[15px] font-extrabold truncate ${!notif.read ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notif.title}
                        </h4>
                        <span className="text-[12px] font-bold text-gray-400 whitespace-nowrap flex items-center gap-1.5 shrink-0">
                          <Clock className="w-3.5 h-3.5" /> {notif.time}
                        </span>
                      </div>
                      <p className="text-[13px] text-gray-500 font-medium leading-relaxed max-w-3xl">
                        {notif.message}
                      </p>
                    </div>

                    {/* Quick Actions (Appear on Hover) */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 self-center shrink-0 bg-gray-50 pl-4">
                      {!notif.read && (
                        <button 
                          className="w-8 h-8 rounded-full bg-white border border-gray-200 text-primary-600 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-colors shadow-sm"
                          title="Mark as read"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button 
                        className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-colors shadow-sm"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                
                {/* Empty State for Unread if none */}
                {activeTab === 'unread' && items.filter(i => !i.read).length === 0 && (
                  <div className="px-6 py-8 text-center">
                    <p className="text-sm text-gray-400 font-bold">No unread notifications for {date}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-100 flex justify-center items-center bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
           <button className="text-[13px] font-extrabold text-primary-600 uppercase tracking-wider">
             View Older Notifications
           </button>
        </div>
      </div>
    </div>
  );
}
