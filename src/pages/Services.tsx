import React, { useState } from 'react';
import { 
  Wrench, Plus, Search, Eye, Edit2, Trash2, 
  CheckCircle2, Clock, ArrowLeft, 
  FileText, Settings, Save,
  Image as ImageIcon, UploadCloud, X, Package, Shield, Zap, FlaskConical, Droplet
} from 'lucide-react';

export function Services() {
  const [showForm, setShowForm] = useState(false);

  // Mock Data for List
  const servicesList = [
    { id: 1, name: 'RO Filter Replacement', desc: 'Replace RO filter set', category: 'Maintenance', price: '499', duration: '1-2 hrs', status: 'Active', Icon: Droplet },
    { id: 2, name: 'UV Lamp Replacement', desc: 'Replace UV lamp', category: 'Maintenance', price: '299', duration: '1 hr', status: 'Active', Icon: Zap },
    { id: 3, name: 'Membrane Cleaning', desc: 'Deep cleaning of RO membrane', category: 'Cleaning', price: '799', duration: '2-3 hrs', status: 'Active', Icon: Settings },
    { id: 4, name: 'TDS Adjusting', desc: 'Adjust TDS level for better taste', category: 'Water Quality', price: '399', duration: '1 hr', status: 'Active', Icon: Droplet },
    { id: 5, name: 'System Installation', desc: 'New RO system installation', category: 'Installation', price: '1,499', duration: '3-5 hrs', status: 'Active', Icon: Wrench },
    { id: 6, name: 'Annual Maintenance Contract', desc: 'AMC for 1 year', category: 'Maintenance', price: '2,999', duration: '-', status: 'Active', Icon: Shield },
    { id: 7, name: 'Water Quality Testing', desc: 'Check water quality (TDS, pH)', category: 'Testing', price: '499', duration: '30 mins', status: 'Inactive', Icon: FlaskConical },
    { id: 8, name: 'RO System Servicing', desc: 'Full system servicing', category: 'Service', price: '899', duration: '2 hrs', status: 'Inactive', Icon: Settings },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'Active') {
      return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Active</span>;
    }
    return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100">Inactive</span>;
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Maintenance': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-blue-50 text-blue-600">Maintenance</span>;
      case 'Cleaning': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-purple-50 text-purple-600">Cleaning</span>;
      case 'Water Quality': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-teal-50 text-teal-600">Water Quality</span>;
      case 'Installation': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-orange-50 text-orange-600">Installation</span>;
      case 'Testing': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600">Testing</span>;
      case 'Service': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-gray-100 text-gray-600">Service</span>;
      default: return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-gray-100 text-gray-600">{category}</span>;
    }
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
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Services</h1>
                <p className="text-sm text-gray-500 font-medium">Manage RO services and their details.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30"
            >
              <Plus className="w-4 h-4" /> Add Service
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
                  placeholder="Search by service name, category..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="flex w-full sm:w-auto items-center gap-3">
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[150px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Categories</option>
                  <option>Maintenance</option>
                  <option>Cleaning</option>
                  <option>Installation</option>
                </select>
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-5 h-5" />
                </div>
                <p className="text-[13px] text-gray-500 font-bold mb-1">Total Services</p>
                <h3 className="text-3xl font-extrabold text-gray-900">8</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-[13px] text-gray-500 font-bold mb-1">Active Services</p>
                <h3 className="text-3xl font-extrabold text-gray-900">6</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col">
                <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-[13px] text-gray-500 font-bold mb-1">Inactive Services</p>
                <h3 className="text-3xl font-extrabold text-gray-900 text-rose-500">2</h3>
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
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Service Name</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Category</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Price (₹)</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Duration</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {servicesList.map((svc, index) => {
                    const SvcIcon = svc.Icon;
                    return (
                      <tr key={svc.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-600">
                              <SvcIcon className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-gray-900">{svc.name}</span>
                              <span className="text-xs font-medium text-gray-500">{svc.desc}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          {getCategoryBadge(svc.category)}
                        </td>
                        <td className="px-4 py-4 text-sm font-bold text-gray-900">₹ {svc.price}</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-600">{svc.duration}</td>
                        <td className="px-4 py-4">
                          {getStatusBadge(svc.status)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-3">
                            <button className="text-primary-500 hover:text-primary-700 transition-colors"><Eye className="w-4 h-4" /></button>
                            <button className="text-primary-500 hover:text-primary-700 transition-colors"><Edit2 className="w-4 h-4" /></button>
                            <button className="text-rose-500 hover:text-rose-700 transition-colors"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
              <p className="text-sm text-gray-500 font-medium">Showing 1-8 of 8 services</p>
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
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Add New Service</h1>
              <p className="text-sm text-gray-500 font-medium">Fill in the service details to add a new service.</p>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Basic Information */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Basic Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Service Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter service name" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Category <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select category</option>
                    <option>Maintenance</option>
                    <option>Cleaning</option>
                    <option>Installation</option>
                  </select>
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[13px] font-bold text-gray-700">Description <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <textarea 
                      rows={4}
                      placeholder="Enter detailed description of the service..."
                      className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none placeholder:text-gray-400 pb-8"
                    ></textarea>
                    <span className="absolute bottom-3 right-4 text-xs font-medium text-gray-400">0/500</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 mt-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Price (₹) <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter price" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Duration (e.g. 1-2 hrs) <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter duration" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Status <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Service Image */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Service Image</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="w-full h-48 border-2 border-dashed border-primary-200 bg-primary-50/50 rounded-2xl flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:bg-primary-50 transition-colors">
                  <UploadCloud className="w-10 h-10 text-primary-500 mb-3" />
                  <p className="text-sm font-bold text-primary-700 mb-1">Click to upload image</p>
                  <p className="text-xs font-medium text-gray-400">Supports JPG, PNG (Max 2MB)</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[13px] font-bold text-gray-700">Image Preview</p>
                  <div className="relative w-40 h-40 rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center">
                    <button className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 shadow-sm transition-colors">
                      <X className="w-3 h-3" />
                    </button>
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                      <Package className="w-8 h-8 text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <Settings className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Additional Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Applicable For</label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select customer type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Both</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Tags</label>
                  <input type="text" placeholder="Enter tags (e.g. maintenance, cleaning)" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                  <p className="text-[11px] font-medium text-gray-400">Separate tags with comma</p>
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[13px] font-bold text-gray-700">Notes <span className="font-medium text-gray-400">(Optional)</span></label>
                  <textarea 
                    rows={3}
                    placeholder="Any additional notes about this service..."
                    className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none placeholder:text-gray-400"
                  ></textarea>
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
                <Save className="w-4 h-4" /> Save Service
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}