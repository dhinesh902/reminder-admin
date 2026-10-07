import React, { useState } from 'react';
import { 
  Bell, Plus, Search, Calendar, Filter, Eye, Edit2, Trash2,
  CalendarDays, Clock, ChevronLeft, AlertCircle, Wrench, IndianRupee, Users,
  FileText, Activity, ChevronRight, Lightbulb
} from 'lucide-react';

export function Reminders() {
  const reminders = [
    { id: 1, date: '31/05/2025', time: '10:00 AM', type: 'Service', typeColor: 'blue', typeIcon: Wrench, customer: 'Rohit Sharma', phone: '+91 98765 43210', remarkLine1: 'RO service due for 6 months', remarkLine2: 'Service visit required', priority: 'High', status: 'Pending' },
    { id: 2, date: '30/05/2025', time: '04:00 PM', type: 'Payment', typeColor: 'emerald', typeIcon: IndianRupee, customer: 'Priya Nair', phone: '+91 91234 56789', remarkLine1: 'Payment reminder', remarkLine2: '₹ 2,500 due for May 2025', priority: 'Medium', status: 'Pending' },
    { id: 3, date: '28/05/2025', time: '09:30 AM', type: 'Followup', typeColor: 'purple', typeIcon: Users, customer: 'Amit Verma', phone: '+91 99887 66554', remarkLine1: 'Customer feedback followup', remarkLine2: 'Check service satisfaction', priority: 'Low', status: 'Pending' },
    { id: 4, date: '25/05/2025', time: '11:00 AM', type: 'Service', typeColor: 'blue', typeIcon: Wrench, customer: 'Sneha Iyer', phone: '+91 77654 32109', remarkLine1: 'Filter replacement due', remarkLine2: 'RO filter change required', priority: 'High', status: 'Overdue' },
    { id: 5, date: '22/05/2025', time: '02:30 PM', type: 'Invoice', typeColor: 'blue', typeIcon: FileText, customer: 'Vikram Singh', phone: '+91 93456 78210', remarkLine1: 'Invoice #INV-0124', remarkLine2: 'Amount ₹ 3,999 due', priority: 'Medium', status: 'Overdue' },
    { id: 6, date: '20/05/2025', time: '01:15 PM', type: 'Service', typeColor: 'blue', typeIcon: Wrench, customer: 'Neha Joshi', phone: '+91 98712 65432', remarkLine1: 'Annual service due', remarkLine2: 'RO + UV service', priority: 'Medium', status: 'Upcoming' },
    { id: 7, date: '18/05/2025', time: '10:45 AM', type: 'Payment', typeColor: 'emerald', typeIcon: IndianRupee, customer: 'Karan Mehta', phone: '+91 99876 54321', remarkLine1: 'Payment reminder', remarkLine2: '₹ 1,500 due for April 2025', priority: 'High', status: 'Pending' },
    { id: 8, date: '15/05/2025', time: '05:20 PM', type: 'Followup', typeColor: 'purple', typeIcon: Users, customer: 'Pooja Desai', phone: '+91 87654 32178', remarkLine1: 'Call for service feedback', remarkLine2: '1 week followup', priority: 'Low', status: 'Completed' },
    { id: 9, date: '12/05/2025', time: '09:50 AM', type: 'Service', typeColor: 'blue', typeIcon: Wrench, customer: 'Ramesh Kumar', phone: '+91 96543 21098', remarkLine1: 'Tank cleaning due', remarkLine2: 'Water tank cleaning', priority: 'Medium', status: 'Upcoming' },
    { id: 10, date: '08/05/2025', time: '03:40 PM', type: 'Invoice', typeColor: 'blue', typeIcon: FileText, customer: 'Anita Sharma', phone: '+91 87654 09876', remarkLine1: 'Invoice #INV-0118', remarkLine2: 'Amount ₹ 2,999 due', priority: 'High', status: 'Overdue' },
  ];

  const getTypeBadge = (type: string, color: string, Icon: any) => {
    const bgClasses: any = {
      blue: 'bg-blue-50 text-blue-600',
      emerald: 'bg-emerald-50 text-emerald-600',
      purple: 'bg-purple-50 text-purple-600',
    };
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-bold ${bgClasses[color]}`}>
        <Icon className="w-3.5 h-3.5" />
        {type}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600">High</span>;
      case 'Medium':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600">Medium</span>;
      case 'Low':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600">Low</span>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600">Pending</span>;
      case 'Overdue':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600">Overdue</span>;
      case 'Upcoming':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600">Upcoming</span>;
      case 'Completed':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600">Completed</span>;
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-50 text-primary-600 flex items-center justify-center rounded-xl">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">Reminders</h1>
            <p className="text-sm text-gray-500 font-medium">View and manage all your reminders for services, payments, follow-ups and more.</p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
          <Plus className="w-4 h-4" /> Add Reminder
        </button>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col xl:flex-row gap-4 justify-between">
        {/* Left Filters */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-primary-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by customer name, mobile number, or remark..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 text-gray-900 font-medium text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400 shadow-sm"
            />
          </div>
          <div className="flex gap-4">
            <select className="bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center] min-w-[140px] shadow-sm">
              <option>All Types</option>
              <option>Service</option>
              <option>Payment</option>
              <option>Followup</option>
              <option>Invoice</option>
            </select>
            <select className="bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center] min-w-[140px] shadow-sm">
              <option>All Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <select className="bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center] min-w-[140px] shadow-sm">
              <option>All Status</option>
              <option>Pending</option>
              <option>Overdue</option>
              <option>Upcoming</option>
            </select>
          </div>
        </div>

        {/* Right Date Picker */}
        <div className="relative w-full xl:w-auto min-w-[240px]">
          <Calendar className="w-4 h-4 text-primary-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input type="text" defaultValue="01/04/2025 - 31/05/2025" className="w-full bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl pl-9 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors shadow-sm" />
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

        {/* Left Column (Stats & Table) */}
        <div className="xl:col-span-9 space-y-6">

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-shadow">
              <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-4">
                <CalendarDays className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-blue-900 font-bold mb-1">Total Reminders</p>
              <h3 className="text-2xl font-extrabold text-blue-900 mb-2">15</h3>
            </div>
            
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-shadow">
              <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-blue-900 font-bold mb-1">Overdue</p>
              <h3 className="text-2xl font-extrabold text-blue-900 mb-2">4</h3>
            </div>
            
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-shadow">
              <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-blue-900 font-bold mb-1">Today</p>
              <h3 className="text-2xl font-extrabold text-blue-900 mb-2">3</h3>
            </div>
            
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-shadow">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                <CalendarDays className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-blue-900 font-bold mb-1">Upcoming</p>
              <h3 className="text-2xl font-extrabold text-blue-900 mb-2">8</h3>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
            <div className="p-5 border-b border-gray-50">
              <h3 className="text-base font-extrabold text-blue-900">All Reminders</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-6 py-4 w-12 text-xs font-extrabold text-blue-900 text-center">S.No</th>
                    <th className="px-4 py-4 text-xs font-extrabold text-blue-900">Date</th>
                    <th className="px-4 py-4 text-xs font-extrabold text-blue-900">Type</th>
                    <th className="px-4 py-4 text-xs font-extrabold text-blue-900">Customer Name</th>
                    <th className="px-4 py-4 text-xs font-extrabold text-blue-900">Details / Remark</th>
                    <th className="px-4 py-4 text-xs font-extrabold text-blue-900 text-center">Priority</th>
                    <th className="px-4 py-4 text-xs font-extrabold text-blue-900 text-center">Status</th>
                    <th className="px-4 py-4 text-xs font-extrabold text-blue-900 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {reminders.map((row, index) => (
                    <tr key={row.id} className="hover:bg-primary-50/30 transition-colors group">
                      <td className="px-6 py-4 text-sm font-bold text-gray-500 text-center">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{row.date}</span>
                          <span className="text-xs font-medium text-gray-500 mt-0.5">{row.time}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        {getTypeBadge(row.type, row.typeColor, row.typeIcon)}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-primary-600">{row.customer}</span>
                          <span className="text-xs font-medium text-gray-500 mt-0.5">{row.phone}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{row.remarkLine1}</span>
                          <span className="text-xs font-medium text-primary-500 mt-0.5">{row.remarkLine2}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {getPriorityBadge(row.priority)}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {getStatusBadge(row.status)}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button className="text-primary-400 hover:text-primary-600 transition-colors"><Eye className="w-4 h-4" /></button>
                          <button className="text-primary-400 hover:text-primary-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                          <button className="text-rose-400 hover:text-rose-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-50 flex justify-between items-center bg-white">
              <p className="text-sm text-gray-500 font-bold">Showing 1-10 of 15 reminders</p>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-transparent text-gray-600 hover:bg-gray-50 font-medium transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Widgets) */}
        <div className="xl:col-span-3 space-y-6">

          {/* Reminder Summary Widget */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6">
            <h3 className="text-base font-extrabold text-blue-900 mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary-600" /> Reminder Summary
            </h3>

            <div className="flex flex-col items-center gap-6">
              {/* SVG Donut Chart */}
              <div className="relative w-32 h-32 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#f3f4f6" strokeWidth="4"></circle>
                  {/* Service: 6/15 = 40% */}
                  <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#3b82f6" strokeWidth="4" strokeDasharray="40 100" strokeDashoffset="0"></circle>
                  {/* Payment: 4/15 = 26.6% */}
                  <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#10b981" strokeWidth="4" strokeDasharray="26.6 100" strokeDashoffset="-40"></circle>
                  {/* Followup: 2/15 = 13.3% */}
                  <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#a855f7" strokeWidth="4" strokeDasharray="13.3 100" strokeDashoffset="-66.6"></circle>
                  {/* Invoice: 3/15 = 20% */}
                  <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#6366f1" strokeWidth="4" strokeDasharray="20.1 100" strokeDashoffset="-79.9"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-gray-900 leading-none">15</span>
                  <span className="text-[11px] text-gray-500 font-bold mt-1">Total</span>
                </div>
              </div>

              <div className="w-full space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-bold text-gray-700">Service</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-bold text-gray-700">Payment</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                    <span className="text-xs font-bold text-gray-700">Followup</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                    <span className="text-xs font-bold text-gray-700">Invoice</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500">3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Reminders Widget */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6">
            <h3 className="text-base font-extrabold text-blue-900 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-600" /> Upcoming Reminders
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors">
                <div className="w-[40px] flex flex-col items-center justify-center shrink-0">
                  <span className="text-xl font-extrabold text-blue-900 leading-none mb-1">02</span>
                  <span className="text-[10px] font-bold text-primary-500 uppercase">Jun</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-gray-900 truncate">RO Service</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[12px] font-medium text-gray-500">10:00 AM</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[12px] font-bold text-rose-500">High</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary-500 transition-colors" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors">
                <div className="w-[40px] flex flex-col items-center justify-center shrink-0">
                  <span className="text-xl font-extrabold text-blue-900 leading-none mb-1">03</span>
                  <span className="text-[10px] font-bold text-primary-500 uppercase">Jun</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-gray-900 truncate">Payment - Priya</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[12px] font-medium text-gray-500">02:00 PM</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[12px] font-bold text-amber-500">Medium</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary-500 transition-colors" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors">
                <div className="w-[40px] flex flex-col items-center justify-center shrink-0">
                  <span className="text-xl font-extrabold text-blue-900 leading-none mb-1">05</span>
                  <span className="text-[10px] font-bold text-primary-500 uppercase">Jun</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-gray-900 truncate">Filter Replace</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[12px] font-medium text-gray-500">11:00 AM</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[12px] font-bold text-amber-500">Medium</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Stay on Track Widget */}
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 p-5 flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 bg-white text-primary-500 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-primary-50">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-blue-900 mb-1">Stay on track!</h4>
              <p className="text-[12px] font-medium text-gray-600 leading-relaxed">
                Set reminders for timely service, payments and follow-ups to keep your customers happy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}