import React, { useState } from 'react';
import {
  Search, Plus, Calendar as CalendarIcon, CheckCircle, Clock, AlertCircle,
  Eye, Edit2, Trash2, ArrowLeft, User, FileText, Bell, ChevronDown
} from 'lucide-react';

export function Followups() {
  const [showForm, setShowForm] = useState(false);

  const followups = [
    { id: 1, initial: 'RS', bg: 'bg-blue-100 text-blue-700', customer: 'Rohit Sharma', phone: '+91 98765 43210', type: 'Service', typeColor: 'blue', date: 'May 31, 2025', dateSub: '(Today)', status: 'Pending', statusColor: 'amber', assignedTo: 'Admin' },
    { id: 2, initial: 'PN', bg: 'bg-emerald-100 text-emerald-700', customer: 'Priya Nair', phone: '+91 87654 32109', type: 'Reminder', typeColor: 'emerald', date: 'May 30, 2025', dateSub: '(Tomorrow)', status: 'Pending', statusColor: 'amber', assignedTo: 'Admin' },
    { id: 3, initial: 'AV', bg: 'bg-rose-100 text-rose-700', customer: 'Amit Verma', phone: '+91 76543 21098', type: 'Complaint', typeColor: 'rose', date: 'May 29, 2025', dateSub: '(2 days ago)', status: 'Overdue', statusColor: 'rose', assignedTo: 'Admin' },
    { id: 4, initial: 'SI', bg: 'bg-purple-100 text-purple-700', customer: 'Sneha Iyer', phone: '+91 65432 10987', type: 'Service', typeColor: 'blue', date: 'May 28, 2025', dateSub: '(3 days ago)', status: 'Completed', statusColor: 'emerald', assignedTo: 'Admin' },
    { id: 5, initial: 'VS', bg: 'bg-emerald-100 text-emerald-700', customer: 'Vikram Singh', phone: '+91 54321 09876', type: 'Reminder', typeColor: 'emerald', date: 'May 27, 2025', dateSub: '(4 days ago)', status: 'Completed', statusColor: 'emerald', assignedTo: 'Admin' },
    { id: 6, initial: 'NJ', bg: 'bg-rose-100 text-rose-700', customer: 'Neha Joshi', phone: '+91 98765 56789', type: 'Complaint', typeColor: 'rose', date: 'May 26, 2025', dateSub: '(5 days ago)', status: 'Completed', statusColor: 'emerald', assignedTo: 'Admin' },
    { id: 7, initial: 'KM', bg: 'bg-blue-100 text-blue-700', customer: 'Karan Mehta', phone: '+91 87654 45678', type: 'Service', typeColor: 'blue', date: 'May 25, 2025', dateSub: '(6 days ago)', status: 'Completed', statusColor: 'emerald', assignedTo: 'Admin' },
    { id: 8, initial: 'PD', bg: 'bg-emerald-100 text-emerald-700', customer: 'Pooja Desai', phone: '+91 76543 34567', type: 'Reminder', typeColor: 'emerald', date: 'May 24, 2025', dateSub: '(7 days ago)', status: 'Pending', statusColor: 'amber', assignedTo: 'Admin' },
  ];

  const getTypeBadge = (type: string, color: string) => {
    const colorClasses: any = {
      blue: 'bg-blue-50 text-blue-600',
      emerald: 'bg-emerald-50 text-emerald-600',
      rose: 'bg-rose-50 text-rose-600'
    };
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-bold ${colorClasses[color]}`}>
        {type}
      </span>
    );
  };

  const getStatusBadge = (status: string, color: string) => {
    const colorClasses: any = {
      amber: 'bg-amber-50 text-amber-600',
      emerald: 'bg-emerald-50 text-emerald-600',
      rose: 'bg-rose-50 text-rose-600'
    };
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold ${colorClasses[color]}`}>
        {status}
      </span>
    );
  };

  if (showForm) {
    return (
      <div className="w-full space-y-6 max-w-5xl">
        <div className="flex items-center gap-3 mb-2 cursor-pointer w-fit" onClick={() => setShowForm(false)}>
          <ArrowLeft className="w-5 h-5 text-gray-500" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Add Followup</h1>
            <p className="text-sm text-gray-500 font-medium">Create a new followup task for a customer.</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Customer Details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-primary-600" /> Customer Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <div className="space-y-1.5 relative">
                <label className="text-[13px] font-bold text-gray-700">Select Customer <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Choose customer</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-gray-700">Phone Number</label>
                <input type="text" defaultValue="+91 98765 43210" disabled className="w-full bg-gray-50 border border-gray-200 text-gray-500 text-sm rounded-xl px-4 py-2.5 outline-none" />
              </div>
            </div>
          </div>

          {/* Followup Information */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary-600" /> Followup Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <div className="space-y-1.5 relative">
                <label className="text-[13px] font-bold text-gray-700">Followup Type <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Select type</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1.5 relative">
                <label className="text-[13px] font-bold text-gray-700">Followup Date <span className="text-red-500">*</span></label>
                <div className="relative">
                  <CalendarIcon className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input type="text" placeholder="dd/mm/yyyy" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5 relative">
                <label className="text-[13px] font-bold text-gray-700">Followup Time</label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-10 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Select time</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1.5 relative">
                <label className="text-[13px] font-bold text-gray-700">Assigned To <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-10 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Select user</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary-600" /> Details
            </h3>

            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-700">Notes / Message <span className="text-red-500">*</span></label>
              <textarea rows={4} placeholder="Enter followup notes or message..." className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"></textarea>
              <p className="text-xs text-gray-400 text-right font-medium mt-1">0/500</p>
            </div>
          </div>

          {/* Status */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-600" /> Status
            </h3>

            <div className="space-y-1.5 max-w-sm relative">
              <label className="text-[13px] font-bold text-gray-700">Status</label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 text-amber-600 font-bold text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors appearance-none cursor-pointer">
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Overdue</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary-600" /> Additional Options
            </h3>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Send Notification to Customer</h4>
                <p className="text-xs text-gray-500 font-medium">Customer will receive an SMS/WhatsApp reminder</p>
              </div>
              {/* Toggle Switch */}
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600 cursor-pointer">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
            <button onClick={() => setShowForm(false)} className="w-full sm:w-auto px-6 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl font-bold text-sm transition-colors">
              Cancel
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
              <FileText className="w-4 h-4" /> Save Followup
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">Followups</h1>
          <p className="text-sm text-gray-500 font-medium">Track and manage your customer followups.</p>
        </div>
        <button onClick={() => setShowForm(true)} className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
          <Plus className="w-4 h-4" /> Add Followup
        </button>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by customer name, phone, or note..."
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 text-gray-900 font-medium text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400 shadow-sm"
          />
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <select className="bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl px-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors appearance-none cursor-pointer min-w-[140px] shadow-sm">
              <option>All Types</option>
              <option>Service</option>
              <option>Reminder</option>
              <option>Complaint</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl px-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors appearance-none cursor-pointer min-w-[140px] shadow-sm">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>Overdue</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
          <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-4">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-1">12</h3>
          <p className="text-[13px] text-gray-500 font-bold">Total Followups</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-1">7</h3>
          <p className="text-[13px] text-gray-500 font-bold">Completed</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
          <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-1">4</h3>
          <p className="text-[13px] text-gray-500 font-bold">Pending</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
          <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-1">1</h3>
          <p className="text-[13px] text-gray-500 font-bold">Overdue</p>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-white border-b border-gray-50">
                <th className="px-6 py-4 w-12 text-center text-[13px] font-extrabold text-gray-700">S.No</th>
                <th className="px-4 py-4 text-[13px] font-extrabold text-gray-700">Customer</th>
                <th className="px-4 py-4 text-[13px] font-extrabold text-gray-700">Type</th>
                <th className="px-4 py-4 text-[13px] font-extrabold text-gray-700">Followup Date</th>
                <th className="px-4 py-4 text-[13px] font-extrabold text-gray-700">Status</th>
                <th className="px-4 py-4 text-[13px] font-extrabold text-gray-700">Assigned To</th>
                <th className="px-6 py-4 text-[13px] font-extrabold text-gray-700 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {followups.map((row, index) => (
                <tr key={row.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${row.bg}`}>
                        {row.initial}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">{row.customer}</span>
                        <span className="text-xs font-medium text-gray-500 mt-0.5">{row.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {getTypeBadge(row.type, row.typeColor)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-900">{row.date}</span>
                      <span className="text-xs font-medium text-gray-400 mt-0.5">{row.dateSub}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {getStatusBadge(row.status, row.statusColor)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-bold text-gray-700">{row.assignedTo}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-gray-400 hover:text-primary-600 transition-colors"><Eye className="w-4 h-4" /></button>
                      <button className="text-gray-400 hover:text-primary-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button className="text-gray-400 hover:text-rose-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-50 flex justify-between items-center bg-white mt-auto">
          <p className="text-sm text-gray-500 font-bold">Showing 1-8 of 8 followups</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}