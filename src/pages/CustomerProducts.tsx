import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Package, Plus, Search, Calendar, Eye, Download, CheckCircle, Clock, Edit2, Trash2,
  User, Settings as SettingsIcon, Save, ArrowLeft,
  ChevronLeft, ChevronRight, ShoppingCart, IndianRupee, Users, FileText, Filter
} from 'lucide-react';

export function CustomerProducts() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const purchases = [
    { id: 1, date: '28 May 2025', invoice: 'CP-00120', customer: 'Rohit Sharma', product: 'RO Water Purifier', qty: 1, amount: '2,499', status: 'Paid' },
    { id: 2, date: '27 May 2025', invoice: 'CP-00119', customer: 'Priya Nair', product: 'UV Lamp', qty: 1, amount: '1,799', status: 'Paid' },
    { id: 3, date: '25 May 2025', invoice: 'CP-00118', customer: 'Amit Verma', product: 'Sediment Filter', qty: 2, amount: '998', status: 'Paid' },
    { id: 4, date: '22 May 2025', invoice: 'CP-00117', customer: 'Sneha Iyer', product: 'Carbon Filter', qty: 1, amount: '1,499', status: 'Pending' },
    { id: 5, date: '18 May 2025', invoice: 'CP-00116', customer: 'Vikram Singh', product: 'RO Membrane', qty: 1, amount: '3,999', status: 'Paid' },
    { id: 6, date: '15 May 2025', invoice: 'CP-00115', customer: 'Neha Joshi', product: 'Post Carbon Filter', qty: 3, amount: '1,497', status: 'Paid' },
    { id: 7, date: '12 May 2025', invoice: 'CP-00114', customer: 'Karan Mehta', product: 'UV Lamp', qty: 2, amount: '3,598', status: 'Paid' },
    { id: 8, date: '10 May 2025', invoice: 'CP-00113', customer: 'Pooja Desai', product: 'Pressure Tank', qty: 1, amount: '1,250', status: 'Pending' },
    { id: 9, date: '08 May 2025', invoice: 'CP-00112', customer: 'Ramesh Kumar', product: 'RO Membrane', qty: 1, amount: '3,999', status: 'Paid' },
    { id: 10, date: '05 May 2025', invoice: 'CP-00111', customer: 'Anita Sharma', product: 'Sediment Filter', qty: 2, amount: '998', status: 'Paid' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Paid':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Paid</span>;
      case 'Pending':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100">Pending</span>;
      default:
        return <span>{status}</span>;
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
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Customer Purchases</h1>
                <p className="text-sm text-gray-500 font-medium">View and manage all customer purchase records.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30"
            >
              <Plus className="w-4 h-4" /> Add Customer Purchase
            </button>
          </div>

          {/* Filters & Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* Filters */}
            <div className="lg:col-span-12 flex flex-col xl:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
              <div className="relative w-full xl:flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search by customer name, product, or invoice no..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="flex flex-col sm:flex-row w-full xl:w-auto items-center gap-3">
                <select className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[150px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Customers</option>
                  <option>Rohit Sharma</option>
                  <option>Priya Nair</option>
                </select>
                <select className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[150px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Products</option>
                  <option>RO Water Purifier</option>
                  <option>UV Lamp</option>
                </select>
                <div className="relative w-full sm:w-auto">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input type="text" defaultValue="01/04/2025 - 31/05/2025" className="w-full sm:w-[220px] bg-white border border-gray-200 text-gray-700 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-primary-500 transition-colors" />
                </div>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm transition-all">
                  <Filter className="w-4 h-4" /> Filter
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Total Purchases</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">62</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Total Amount</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">₹ 48,750</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-sky-50 text-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Active Customers</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">18</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Products Sold</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">12</h3>
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
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Date</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Invoice No.</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Customer Name</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Product Name</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Quantity</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Amount (₹)</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Payment Status</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {purchases.map((purchase, index) => (
                    <tr key={purchase.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-500">{purchase.date}</td>
                      <td className="px-4 py-4 text-sm font-bold text-gray-900">{purchase.invoice}</td>
                      <td className="px-4 py-4 text-sm font-bold text-primary-600">{purchase.customer}</td>
                      <td className="px-4 py-4 text-sm font-bold text-gray-900">{purchase.product}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-500">{purchase.qty}</td>
                      <td className="px-4 py-4 text-sm font-bold text-gray-900">{purchase.amount}</td>
                      <td className="px-4 py-4">
                        {getStatusBadge(purchase.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button onClick={() => navigate(`/customer-products/${purchase.id}`)} className="text-primary-500 hover:text-primary-700 transition-colors"><Eye className="w-4 h-4" /></button>
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
              <p className="text-sm text-gray-500 font-medium">Showing 1-10 of 62 purchases</p>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm shadow-primary-600/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">4</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">5</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
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
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Add Customer Purchase</h1>
              <p className="text-sm text-gray-500 font-medium">Enter the details of a new customer purchase.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            
            {/* Customer & Invoice Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-600" /> Customer & Invoice Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Customer <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    <select className="flex-1 bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                      <option>Select customer</option>
                      <option>Rohit Sharma</option>
                    </select>
                    <button className="w-[42px] h-[42px] shrink-0 bg-primary-50 text-primary-600 border border-primary-100 flex items-center justify-center rounded-xl hover:bg-primary-100 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Invoice No. <span className="text-red-500">*</span></label>
                  <div className="relative flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:border-primary-500 transition-colors bg-white">
                    <div className="pl-3 pr-2 py-2.5 bg-gray-50 border-r border-gray-200 text-gray-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <input type="text" placeholder="Enter invoice number" className="w-full text-gray-900 text-sm px-3 py-2.5 outline-none bg-transparent placeholder:text-gray-400" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Purchase Date <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="dd/mm/yyyy" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-9 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Payment Status <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 pointer-events-none"></div>
                    <select className="w-full bg-white border border-gray-200 text-gray-900 font-bold text-sm rounded-xl pl-8 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                      <option>Select status</option>
                      <option>Paid</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Products / Items */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary-600" /> Products / Items
                </h3>
                <button className="flex items-center gap-1.5 bg-primary-50 hover:bg-primary-100 text-primary-600 px-3 py-1.5 rounded-lg font-bold text-xs transition-colors border border-primary-100">
                  <Plus className="w-3.5 h-3.5" /> Add Product
                </button>
              </div>
              
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-12 md:col-span-4 space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Product <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Select product</option>
                  </select>
                </div>
                <div className="col-span-4 md:col-span-2 space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Quantity <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="1" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                </div>
                <div className="col-span-4 md:col-span-3 space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Unit Price (₹)</label>
                  <input type="text" defaultValue="0.00" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                </div>
                <div className="col-span-4 md:col-span-2 space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Amount (₹)</label>
                  <input type="text" defaultValue="0.00" className="w-full bg-white border border-gray-200 text-gray-900 font-bold text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                </div>
                <div className="col-span-12 md:col-span-1 space-y-1.5 flex flex-col items-center">
                  <label className="text-[13px] font-bold text-gray-700 hidden md:block">Actions</label>
                  <button className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 transition-colors p-2.5 rounded-lg md:mt-1 border border-transparent">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Calculation Summary */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-primary-600" /> Calculation Summary
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                    <span className="text-[13px] font-bold text-gray-700">Subtotal</span>
                    <span className="text-sm font-bold text-gray-900">₹ 0.00</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                    <span className="text-[13px] font-bold text-gray-700">Discount (%)</span>
                    <div className="flex items-center gap-2">
                      <input type="text" defaultValue="0" className="w-20 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors text-center" />
                      <span className="text-[13px] font-medium text-gray-500">%</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                    <span className="text-[13px] font-bold text-gray-700">Tax (GST %)</span>
                    <div className="flex items-center gap-2 w-32">
                      <select className="flex-1 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-10px)_center]">
                        <option>Select tax</option>
                        <option>18%</option>
                      </select>
                      <span className="text-[13px] font-medium text-gray-500">%</span>
                    </div>
                  </div>
                  <div className="flex justify-end pt-1">
                    <span className="text-sm font-bold text-gray-900">₹ 0.00</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-6 mt-6 border-t-2 border-primary-100">
                <span className="text-lg font-extrabold text-gray-900">Total Amount</span>
                <span className="text-2xl font-extrabold text-primary-600">₹ 0.00</span>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-600" /> Additional Notes
              </h3>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-gray-700">Notes <span className="font-medium text-gray-400">(Optional)</span></label>
                <textarea 
                  rows={4}
                  placeholder="Enter any additional notes about this purchase..."
                  className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none placeholder:text-gray-400"
                ></textarea>
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
                <Save className="w-4 h-4" /> Save Purchase
              </button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}