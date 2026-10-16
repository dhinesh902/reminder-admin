import React from 'react';
import {
  Bell, Plus, Search, Calendar, Eye, Edit2, Trash2,
  CalendarDays, Clock, AlertCircle, Wrench, IndianRupee, Users,
  FileText, Activity, ChevronRight, Lightbulb
} from 'lucide-react';

export function Reminders() {
  const reminders = [
    { id: 1, date: '31/05/2025', time: '10:00 AM', type: 'Service', typeColor: 'blue', typeIcon: Wrench, customer: 'Rohit Sharma', phone: '+91 98765 43210', remarkLine1: 'RO service due for 6 months', remarkLine2: 'Service visit required', priority: 'High', status: 'Pending' },
    { id: 2, date: '30/05/2025', time: '04:00 PM', type: 'Payment', typeColor: 'emerald', typeIcon: IndianRupee, customer: 'Priya Nair', phone: '+91 91234 56789', remarkLine1: 'Payment reminder', remarkLine2: '₹ 2,500 due for May 2025', priority: 'Medium', status: 'Pending' },
    { id: 3, date: '28/05/2025', time: '09:30 AM', type: 'Followup', typeColor: 'purple', typeIcon: Users, customer: 'Amit Verma', phone: '+91 99887 66554', remarkLine1: 'Customer feedback followup', remarkLine2: 'Check service satisfaction', priority: 'Low', status: 'Pending' },
    { id: 4, date: '25/05/2025', time: '11:00 AM', type: 'Service', typeColor: 'blue', typeIcon: Wrench, customer: 'Sneha Iyer', phone: '+91 77654 32109', remarkLine1: 'Filter replacement due', remarkLine2: 'RO filter change required', priority: 'High', status: 'Overdue' },
    { id: 5, date: '22/05/2025', time: '02:30 PM', type: 'Invoice', typeColor: 'indigo', typeIcon: FileText, customer: 'Vikram Singh', phone: '+91 93456 78210', remarkLine1: 'Invoice #INV-0124', remarkLine2: 'Amount ₹ 3,999 due', priority: 'Medium', status: 'Overdue' },
    { id: 6, date: '20/05/2025', time: '01:15 PM', type: 'Service', typeColor: 'blue', typeIcon: Wrench, customer: 'Neha Joshi', phone: '+91 98712 65432', remarkLine1: 'Annual service due', remarkLine2: 'RO + UV service', priority: 'Medium', status: 'Upcoming' },
    { id: 7, date: '18/05/2025', time: '10:45 AM', type: 'Payment', typeColor: 'emerald', typeIcon: IndianRupee, customer: 'Karan Mehta', phone: '+91 99876 54321', remarkLine1: 'Payment reminder', remarkLine2: '₹ 1,500 due for April 2025', priority: 'High', status: 'Pending' },
    { id: 8, date: '15/05/2025', time: '05:20 PM', type: 'Followup', typeColor: 'purple', typeIcon: Users, customer: 'Pooja Desai', phone: '+91 87654 32178', remarkLine1: 'Call for service feedback', remarkLine2: '1 week followup', priority: 'Low', status: 'Completed' },
    { id: 9, date: '12/05/2025', time: '09:50 AM', type: 'Service', typeColor: 'blue', typeIcon: Wrench, customer: 'Ramesh Kumar', phone: '+91 96543 21098', remarkLine1: 'Tank cleaning due', remarkLine2: 'Water tank cleaning', priority: 'Medium', status: 'Upcoming' },
    { id: 10, date: '08/05/2025', time: '03:40 PM', type: 'Invoice', typeColor: 'indigo', typeIcon: FileText, customer: 'Anita Sharma', phone: '+91 87654 09876', remarkLine1: 'Invoice #INV-0118', remarkLine2: 'Amount ₹ 2,999 due', priority: 'High', status: 'Overdue' },
  ];

  const getTypeBadge = (type: string, color: string, Icon: any) => {
    const bgClasses: Record<string, string> = {
      blue: 'bg-blue-50 text-blue-600',
      emerald: 'bg-emerald-50 text-emerald-600',
      purple: 'bg-purple-50 text-purple-600',
      indigo: 'bg-indigo-50 text-indigo-600',
    };
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold ${bgClasses[color] || 'bg-gray-50 text-gray-600'}`}>
        <Icon className="w-3.5 h-3.5" />
        {type}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600 border border-rose-100">High</span>;
      case 'Medium':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100">Medium</span>;
      case 'Low':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Low</span>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100">Pending</span>;
      case 'Overdue':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600 border border-rose-100">Overdue</span>;
      case 'Upcoming':
      case 'Completed':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">{status}</span>;
      default:
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-gray-50 text-gray-600 border border-gray-100">{status}</span>;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-100 text-primary-600 flex items-center justify-center rounded-xl">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Reminders</h1>
            <p className="text-sm text-gray-500 font-medium">View and manage all your reminders for services, payments, follow-ups and more.</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
          <Plus className="w-4 h-4" /> Add Reminder
        </button>
      </div>

      {/* Filters Row */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col xl:flex-row gap-4 justify-between items-center">
        <div className="relative w-full xl:w-[340px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by customer name, mobile, remark..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-wrap sm:flex-nowrap w-full xl:w-auto items-center gap-3">
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[130px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
            <option>All Types</option>
            <option>Service</option>
            <option>Payment</option>
            <option>Followup</option>
            <option>Invoice</option>
          </select>
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[130px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[130px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
            <option>All Status</option>
            <option>Pending</option>
            <option>Overdue</option>
            <option>Upcoming</option>
          </select>
          <div className="relative min-w-[210px]">
            <Calendar className="w-4 h-4 text-primary-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input 
              type="text" 
              defaultValue="01/04/2025 - 31/05/2025" 
              className="w-full bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl pl-9 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" 
            />
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

        {/* Left Column (Stats & Table) */}
        <div className="xl:col-span-9 space-y-6">

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
              <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-4">
                <CalendarDays className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-500 font-medium">Total Reminders</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">15</h3>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
              <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-500 font-medium">Overdue</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">4</h3>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
              <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-500 font-medium">Today</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">3</h3>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <CalendarDays className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-500 font-medium">Upcoming</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">8</h3>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 w-12 text-center text-[13px] font-bold text-gray-700">S.No</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Date</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Type</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Customer Name</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Details / Remark</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700 text-center">Priority</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700 text-center">Status</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {reminders.map((row, index) => (
                    <tr key={row.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4 text-sm font-bold text-gray-500 text-center">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{row.date}</span>
                          <span className="text-xs font-medium text-gray-500">{row.time}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        {getTypeBadge(row.type, row.typeColor, row.typeIcon)}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{row.customer}</span>
                          <span className="text-xs font-medium text-gray-500">{row.phone}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{row.remarkLine1}</span>
                          <span className="text-xs font-medium text-primary-600">{row.remarkLine2}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {getPriorityBadge(row.priority)}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {getStatusBadge(row.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button className="text-primary-500 hover:text-primary-700 transition-colors"><Eye className="w-4 h-4" /></button>
                          <button className="text-primary-500 hover:text-primary-700 transition-colors"><Edit2 className="w-4 h-4" /></button>
                          <button className="text-rose-500 hover:text-rose-700 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
              <p className="text-sm text-gray-500 font-medium">Showing 1-10 of 15 reminders</p>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm shadow-primary-600/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&gt;</button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Widgets) */}
        <div className="xl:col-span-3 space-y-6">

          {/* Reminder Summary Widget */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6">
            <h3 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary-600" /> Reminder Summary
            </h3>

            <div className="flex flex-col items-center gap-6">
              {/* SVG Donut Chart */}
              <div className="relative w-32 h-32 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#f3f4f6" strokeWidth="4"></circle>
                  <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#3b82f6" strokeWidth="4" strokeDasharray="40 100" strokeDashoffset="0"></circle>
                  <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#10b981" strokeWidth="4" strokeDasharray="26.6 100" strokeDashoffset="-40"></circle>
                  <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#a855f7" strokeWidth="4" strokeDasharray="13.3 100" strokeDashoffset="-66.6"></circle>
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
            <h3 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-600" /> Upcoming Reminders
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors">
                <div className="w-[40px] flex flex-col items-center justify-center shrink-0">
                  <span className="text-xl font-extrabold text-gray-900 leading-none mb-1">02</span>
                  <span className="text-[10px] font-bold text-primary-600 uppercase">Jun</span>
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
                  <span className="text-xl font-extrabold text-gray-900 leading-none mb-1">03</span>
                  <span className="text-[10px] font-bold text-primary-600 uppercase">Jun</span>
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
                  <span className="text-xl font-extrabold text-gray-900 leading-none mb-1">05</span>
                  <span className="text-[10px] font-bold text-primary-600 uppercase">Jun</span>
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
          <div className="bg-primary-50/50 rounded-2xl border border-primary-100 p-5 flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 bg-white text-primary-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-primary-100/50">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-900 mb-1">Stay on track!</h4>
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