import React, { useState } from 'react';
import { 
  Users, Plus, Search, Eye, Edit2, Trash2, 
  CheckCircle2, Clock, XCircle, ArrowLeft, 
  User, Briefcase, Lock, EyeOff, Calendar, Save,
  Image as ImageIcon, UploadCloud
} from 'lucide-react';

export function Technicians() {
  const [showForm, setShowForm] = useState(false);

  // Mock Data for List
  const technicians = [
    { id: 1, name: 'Rohit Sharma', role: 'Senior Technician', phone: '+91 98765 43210', email: 'rohit@rservice.com', area: 'Delhi', status: 'Active' },
    { id: 2, name: 'Amit Verma', role: 'Technician', phone: '+91 87654 32109', email: 'amit@rservice.com', area: 'Noida', status: 'Active' },
    { id: 3, name: 'Sandeep Yadav', role: 'Technician', phone: '+91 76543 21098', email: 'sandeep@rservice.com', area: 'Gurgaon', status: 'Active' },
    { id: 4, name: 'Vikas Kumar', role: 'Technician', phone: '+91 65432 10987', email: 'vikas@rservice.com', area: 'Faridabad', status: 'On Leave' },
    { id: 5, name: 'Imran Khan', role: 'Technician', phone: '+91 54321 09876', email: 'imran@rservice.com', area: 'Ghaziabad', status: 'Active' },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'Active') {
      return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Active</span>;
    }
    if (status === 'On Leave') {
      return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100">On Leave</span>;
    }
    return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600 border border-rose-100">Inactive</span>;
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
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Technicians</h1>
                <p className="text-sm text-gray-500 font-medium">Manage your technicians and their details.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30"
            >
              <Plus className="w-4 h-4" /> Add Technician
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
                  placeholder="Search by name, phone, or email..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="flex w-full sm:w-auto items-center gap-3">
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>On Leave</option>
                  <option>Inactive</option>
                </select>
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Areas</option>
                  <option>Delhi</option>
                  <option>Noida</option>
                  <option>Gurgaon</option>
                </select>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-1">5</h3>
                  <p className="text-[13px] text-gray-500 font-bold">Total Technicians</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-1">4</h3>
                  <p className="text-[13px] text-gray-500 font-bold">Active</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-1">1</h3>
                  <p className="text-[13px] text-gray-500 font-bold">On Leave</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-6">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-1">0</h3>
                  <p className="text-[13px] text-gray-500 font-bold">Inactive</p>
                </div>
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
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Technician</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Phone</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Email</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Area / City</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {technicians.map((tech, index) => (
                    <tr key={tech.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-600">
                            <User className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900">{tech.name}</span>
                            <span className="text-xs font-medium text-primary-600">{tech.role}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{tech.phone}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{tech.email}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{tech.area}</td>
                      <td className="px-4 py-4">
                        {getStatusBadge(tech.status)}
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
              <p className="text-sm text-gray-500 font-medium">Showing 1-5 of 5 technicians</p>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm shadow-primary-600/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ================= ADD FORM VIEW =================
        <div className="space-y-6 max-w-5xl">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <button 
              onClick={() => setShowForm(false)}
              className="w-10 h-10 bg-white border border-gray-200 text-gray-600 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Add Technician</h1>
              <p className="text-sm text-gray-500 font-medium">Fill in the technician details to register a new technician.</p>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Basic Information */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Basic Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter technician name" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="+91 98765 43210" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="example@domain.com" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Date of Joining <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type="text" placeholder="dd/mm/yyyy" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                    <Calendar className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[13px] font-bold text-gray-700">Address</label>
                  <textarea 
                    rows={2}
                    placeholder="Enter complete address"
                    className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Professional Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Role / Designation <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select role</option>
                    <option>Senior Technician</option>
                    <option>Technician</option>
                    <option>Junior Technician</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Experience (Years) <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select experience</option>
                    <option>0-2 Years</option>
                    <option>3-5 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Area / City <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select area</option>
                    <option>Delhi</option>
                    <option>Noida</option>
                    <option>Gurgaon</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Assigned Services</label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select services</option>
                    <option>Installation</option>
                    <option>Repair</option>
                    <option>Maintenance</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Account Access */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Account Access</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Username <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter username" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type="password" placeholder="Enter password" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                    <EyeOff className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Status & Profile Photo */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Status</h3>
                </div>
                <div className="space-y-1.5 md:w-1/2 lg:w-1/3">
                  <label className="text-[13px] font-bold text-gray-700">Status <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                      <option>Active</option>
                      <option>On Leave</option>
                      <option>Inactive</option>
                    </select>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100 mb-8" />

              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Profile Photo</h3>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-full sm:w-64 h-32 border-2 border-dashed border-primary-200 bg-primary-50/50 rounded-2xl flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-primary-50 transition-colors">
                    <UploadCloud className="w-8 h-8 text-primary-500 mb-2" />
                    <p className="text-[13px] font-bold text-primary-700 mb-1">Click to upload photo</p>
                    <p className="text-[11px] font-medium text-gray-400">Supports JPG, PNG (Max 2MB)</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-primary-600 border border-blue-100">
                      <User className="w-8 h-8" />
                    </div>
                    <button className="px-4 py-2 rounded-xl border border-gray-200 text-primary-600 font-bold text-sm hover:bg-gray-50 transition-colors">
                      Choose Image
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <button 
                onClick={() => setShowForm(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
                <Save className="w-4 h-4" /> Save Technician
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}