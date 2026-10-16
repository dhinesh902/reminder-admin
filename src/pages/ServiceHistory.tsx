import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wrench, Search, Calendar, Eye, Download, CheckCircle, Clock, XCircle, Edit2, Trash2,
  User, Settings as SettingsIcon, Package, FileText, Image as ImageIcon, UploadCloud, Save, Plus, Phone, ArrowLeft
} from 'lucide-react';

export function ServiceHistory() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const services = [
    { id: 'SRV-00124', customer: 'Rohit Sharma', type: 'RO Service - Annual', tech: 'Sandeep Yadav', date: '31/05/2025', status: 'Completed', amount: '1,500' },
    { id: 'SRV-00123', customer: 'Priya Nair', type: 'Filter Replacement', tech: 'Amit Verma', date: '30/05/2025', status: 'Pending', amount: '499' },
    { id: 'SRV-00122', customer: 'Amit Verma', type: 'UV Lamp Service', tech: 'Vikas Kumar', date: '29/05/2025', status: 'Completed', amount: '1,799' },
    { id: 'SRV-00121', customer: 'Sneha Iyer', type: 'Carbon Filter Change', tech: 'Imran Khan', date: '28/05/2025', status: 'Completed', amount: '2,999' },
    { id: 'SRV-00120', customer: 'Vikram Singh', type: 'RO Service - Annual', tech: 'Karan Mehta', date: '27/05/2025', status: 'Pending', amount: '1,499' },
    { id: 'SRV-00119', customer: 'Neha Joshi', type: 'Post Carbon Filter', tech: 'Pooja Desai', date: '25/05/2025', status: 'Completed', amount: '1,299' },
    { id: 'SRV-00118', customer: 'Karan Mehta', type: 'UV Lamp Service', tech: 'Ramesh Kumar', date: '22/05/2025', status: 'Cancelled', amount: '1,899' },
    { id: 'SRV-00117', customer: 'Pooja Desai', type: 'Sediment Filter Change', tech: 'Anita Sharma', date: '20/05/2025', status: 'Completed', amount: '998' },
    { id: 'SRV-00116', customer: 'Ramesh Kumar', type: 'RO Service - Annual', tech: 'Vikram Singh', date: '18/05/2025', status: 'Pending', amount: '1,499' },
    { id: 'SRV-00115', customer: 'Anita Sharma', type: 'TDS Controller', tech: 'Sandeep Yadav', date: '16/05/2025', status: 'Completed', amount: '1,199' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Completed':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Completed</span>;
      case 'Pending':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100">Pending</span>;
      case 'Cancelled':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600 border border-rose-100">Cancelled</span>;
      default:
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-gray-50 text-gray-600 border border-gray-100">{status}</span>;
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
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Service History</h1>
                <p className="text-sm text-gray-500 font-medium">View and manage all service history records.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30"
            >
              <Plus className="w-4 h-4" /> Add Service History
            </button>
          </div>

          {/* Filters & Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* Filters */}
            <div className="lg:col-span-12 flex flex-col xl:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
              <div className="relative w-full sm:w-[360px]">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search by customer name, service type, technician..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="flex flex-wrap sm:flex-nowrap w-full xl:w-auto items-center gap-3">
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Services</option>
                  <option>RO Service</option>
                  <option>Filter Replace</option>
                </select>
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[130px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>
                <div className="relative min-w-[220px]">
                  <Calendar className="w-4 h-4 text-primary-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input 
                    type="text" 
                    defaultValue="01/04/2025 - 31/05/2025" 
                    className="w-full bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl pl-9 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" 
                  />
                </div>
                <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
                  <Download className="w-4 h-4" /> Export
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Total Services</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">28</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Completed</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">22</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Pending</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">4</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <XCircle className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Cancelled</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">2</h3>
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
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Service ID</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Customer Name</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Service Type</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Technician</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Service Date</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Status</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Amount (₹)</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {services.map((service, i) => (
                    <tr key={service.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                        {i + 1}
                      </td>
                      <td className="px-4 py-4 text-sm font-bold text-primary-600">{service.id}</td>
                      <td className="px-4 py-4 text-sm font-bold text-gray-900">{service.customer}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 max-w-[160px] truncate">{service.type}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{service.tech}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{service.date}</td>
                      <td className="px-4 py-4">
                        {getStatusBadge(service.status)}
                      </td>
                      <td className="px-4 py-4 text-sm font-bold text-gray-900">₹ {service.amount}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button onClick={() => navigate(`/service-history/${service.id}`)} className="text-primary-500 hover:text-primary-700 transition-colors"><Eye className="w-4 h-4" /></button>
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
              <p className="text-sm text-gray-500 font-medium">Showing 1-10 of 28 service records</p>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm shadow-primary-600/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">3</button>
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
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Add Service History</h1>
              <p className="text-sm text-gray-500 font-medium">Fill in the details to add a new service record.</p>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Customer Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-gray-900">Customer Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Customer <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Select customer</option>
                    <option>Rohit Sharma</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" readOnly value="+91 98765 43210" className="w-full bg-gray-50/50 border border-gray-200 text-gray-600 font-medium text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <SettingsIcon className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-gray-900">Service Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Service Type <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Select service type</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Service Date <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" defaultValue="31/05/2025" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Technician <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Select technician</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Status <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500 pointer-events-none"></div>
                    <select className="w-full bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-xl pl-9 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                      <option>Completed</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Product / Items Used */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Package className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-gray-900">Product / Items Used</h3>
              </div>
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-12 md:col-span-6 space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Product</label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Select product</option>
                  </select>
                </div>
                <div className="col-span-6 md:col-span-3 space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Quantity</label>
                  <input type="text" placeholder="Enter quantity" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                </div>
                <div className="col-span-6 md:col-span-3 space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Unit</label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Select unit</option>
                  </select>
                </div>
              </div>
              <button className="flex items-center gap-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 px-4 py-2 rounded-xl font-bold text-sm transition-colors">
                <Plus className="w-4 h-4" /> Add More Product
              </button>
            </div>

            {/* Service Notes */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-gray-900">Service Notes</h3>
              </div>
              <div className="relative">
                <textarea 
                  rows={3}
                  placeholder="Enter service notes, observations, or remarks..."
                  className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none placeholder:text-gray-400 pb-8"
                ></textarea>
                <span className="absolute bottom-3 right-4 text-[10px] font-bold text-gray-400">0/500</span>
              </div>
            </div>

            {/* Upload Photo */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <ImageIcon className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-gray-900">Upload Photo <span className="text-gray-400 text-sm font-medium">(Optional)</span></h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="w-full h-44 border-2 border-dashed border-primary-200 bg-primary-50/50 rounded-2xl flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:bg-primary-50 transition-colors">
                  <UploadCloud className="w-8 h-8 text-primary-500 mb-2" />
                  <p className="text-sm font-bold text-primary-700 mb-1">Click to upload photo <span className="font-medium text-gray-500">or drag & drop</span></p>
                  <p className="text-xs font-medium text-gray-400">Supports JPG, PNG (Max 5MB)</p>
                </div>
                <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-gray-300" />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
              <button 
                onClick={() => setShowForm(false)} 
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
                <Save className="w-4 h-4" /> Save Service History
              </button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}