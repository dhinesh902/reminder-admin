import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users, Plus, Search, Eye, Edit2, Trash2,
  UserCheck, UserMinus, AlertCircle, ArrowLeft,
  User, Droplets, Calendar, Save
} from 'lucide-react';

export function Customers() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // Mock Data for List
  const customers = [
    { id: 1, initials: 'RS', bg: 'bg-blue-100 text-blue-600', name: 'Rohit Sharma', phone: '+91 98765 43210', email: 'rohit@gmail.com', location: 'Delhi', status: 'Active' },
    { id: 2, initials: 'PN', bg: 'bg-emerald-100 text-emerald-600', name: 'Priya Nair', phone: '+91 87654 32109', email: 'priya@outlook.com', location: 'Bengaluru', status: 'Active' },
    { id: 3, initials: 'AV', bg: 'bg-purple-100 text-purple-600', name: 'Amit Verma', phone: '+91 76543 21098', email: 'amit@gmail.com', location: 'Noida', status: 'Active' },
    { id: 4, initials: 'SI', bg: 'bg-indigo-100 text-indigo-600', name: 'Sneha Iyer', phone: '+91 65432 10987', email: 'sneha@icloud.com', location: 'Chennai', status: 'Inactive' },
    { id: 5, initials: 'VS', bg: 'bg-pink-100 text-pink-600', name: 'Vikram Singh', phone: '+91 54321 09876', email: 'vikram@gmail.com', location: 'Lucknow', status: 'Active' },
    { id: 6, initials: 'NJ', bg: 'bg-orange-100 text-orange-600', name: 'Neha Joshi', phone: '+91 98765 56789', email: 'neha@outlook.com', location: 'Pune', status: 'Active' },
    { id: 7, initials: 'KM', bg: 'bg-blue-100 text-blue-600', name: 'Karan Mehta', phone: '+91 87654 45678', email: 'karan@gmail.com', location: 'Mumbai', status: 'Active' },
    { id: 8, initials: 'PD', bg: 'bg-amber-100 text-amber-600', name: 'Pooja Desai', phone: '+91 76543 34567', email: 'pooja@icloud.com', location: 'Ahmedabad', status: 'Inactive' },
    { id: 9, initials: 'RK', bg: 'bg-rose-100 text-rose-600', name: 'Ramesh Kumar', phone: '+91 65432 23456', email: 'ramesh@gmail.com', location: 'Hyderabad', status: 'Active' },
    { id: 10, initials: 'AS', bg: 'bg-emerald-100 text-emerald-600', name: 'Anita Sharma', phone: '+91 54321 12345', email: 'anita@outlook.com', location: 'Jaipur', status: 'Active' },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'Active') {
      return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Active</span>;
    }
    return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100">Inactive</span>;
  };

  return (
    <div className="w-full">
      {!showForm ? (
        // ================= LIST VIEW =================
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 text-primary-600 flex items-center justify-center rounded-xl">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Customers</h1>
                <p className="text-sm text-gray-500 font-medium">Manage your registered customers and their RO systems.</p>
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30"
            >
              <Plus className="w-4 h-4" /> Add Customer
            </button>
          </div>

          {/* Filters & Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

            {/* Filters */}
            <div className="lg:col-span-12 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
              <div className="relative w-full sm:w-[360px]">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, phone or email..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="flex w-full sm:w-auto items-center gap-3">
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Areas</option>
                  <option>North</option>
                  <option>South</option>
                </select>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Total Customers</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">124</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Active</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">112</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <UserMinus className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Inactive</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">8</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Overdue Reminders</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">7</h3>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 w-12 text-center text-[13px] font-bold text-gray-700">S.No</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Customer Name</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Phone</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Email</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Location</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {customers.map((cus, index) => (
                    <tr key={cus.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${cus.bg}`}>
                            {cus.initials}
                          </div>
                          <span className="text-sm font-bold text-gray-900">{cus.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{cus.phone}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{cus.email}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{cus.location}</td>
                      <td className="px-4 py-4">
                        {getStatusBadge(cus.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button onClick={() => navigate(`/customers/${cus.id}`)} className="text-primary-500 hover:text-primary-700 transition-colors"><Eye className="w-4 h-4" /></button>
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
              <p className="text-sm text-gray-500 font-medium">Showing 1-10 of 124 customers</p>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm shadow-primary-600/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">4</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">5</button>
                <span className="px-1 text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">13</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ================= ADD FORM VIEW =================
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => setShowForm(false)}
              className="w-10 h-10 bg-white border border-gray-200 text-gray-600 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Add New Customer</h1>
              <p className="text-sm text-gray-500 font-medium">Enter customer details to register a new RO water service.</p>
            </div>
          </div>

          <div className="space-y-6">

            {/* Customer Information */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Customer Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter customer name" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="+91 98765 43210" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Email Address</label>
                  <input type="email" placeholder="example@domain.com" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Location / City <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select city</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bengaluru</option>
                  </select>
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[13px] font-bold text-gray-700">Address</label>
                  <textarea
                    rows={2}
                    placeholder="House No, Street, Area, Landmark"
                    className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Customer Type</label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Status</label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* RO System Information */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <Droplets className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">RO System Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">RO System Type <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select system type</option>
                    <option>Under Sink RO</option>
                    <option>Wall Mount RO</option>
                    <option>Commercial RO</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Brand / Model</label>
                  <input type="text" placeholder="e.g. Kent / Aquaguard" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Installation Date</label>
                  <div className="relative">
                    <input type="text" placeholder="dd/mm/yyyy" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Next Service Due Date</label>
                  <div className="relative">
                    <input type="text" placeholder="dd/mm/yyyy" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Filter Type</label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select filter type</option>
                    <option>Pre-Filter</option>
                    <option>Carbon Filter</option>
                    <option>Membrane</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Filter Replacement Frequency</label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Every 6 months</option>
                    <option>Every 12 months</option>
                  </select>
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[13px] font-bold text-gray-700">Additional Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Any special instructions or notes..."
                    className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setShowForm(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
                <Save className="w-4 h-4" /> Save Customer
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}