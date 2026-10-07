import React, { useState } from 'react';
import {
  ShoppingCart, Plus, Search, Eye, Edit2, Trash2,
  Calendar, Filter, Building2, Package, IndianRupee,
  ArrowLeft, User, FileText, Save
} from 'lucide-react';

export function PurchaseHistory() {
  const [showForm, setShowForm] = useState(false);

  // Mock Data for List
  const purchasesList = [
    { id: 1, date: '22 May 2025', refNo: 'PO-0012', supplier: 'AquaPure Suppliers', product: 'Sediment Filter', qty: 10, amount: '4,990', status: 'Received' },
    { id: 2, date: '18 May 2025', refNo: 'PO-0011', supplier: 'BlueTech Water', product: 'RO Membrane', qty: 5, amount: '7,499', status: 'Received' },
    { id: 3, date: '12 May 2025', refNo: 'PO-0010', supplier: 'AquaPure Suppliers', product: 'UV Lamp', qty: 8, amount: '3,992', status: 'Pending' },
    { id: 4, date: '05 May 2025', refNo: 'PO-0009', supplier: 'FreshWater Ltd.', product: 'Carbon Filter', qty: 15, amount: '2,985', status: 'Received' },
    { id: 5, date: '28 Apr 2025', refNo: 'PO-0008', supplier: 'WaterTech Co.', product: 'Post Carbon Filter', qty: 10, amount: '6,990', status: 'Received' },
    { id: 6, date: '20 Apr 2025', refNo: 'PO-0007', supplier: 'AquaPure Suppliers', product: 'Pressure Tank', qty: 2, amount: '3,798', status: 'Pending' },
    { id: 7, date: '15 Apr 2025', refNo: 'PO-0006', supplier: 'BlueTech Water', product: 'TDS Controller', qty: 3, amount: '5,997', status: 'Received' },
    { id: 8, date: '10 Apr 2025', refNo: 'PO-0005', supplier: 'FreshWater Ltd.', product: 'RO Membrane', qty: 4, amount: '7,996', status: 'Received' },
    { id: 9, date: '02 Apr 2025', refNo: 'PO-0004', supplier: 'WaterTech Co.', product: 'UV Lamp', qty: 6, amount: '3,594', status: 'Pending' },
    { id: 10, date: '28 Mar 2025', refNo: 'PO-0003', supplier: 'AquaPure Suppliers', product: 'Sediment Filter', qty: 12, amount: '5,988', status: 'Received' },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'Received') {
      return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Received</span>;
    }
    return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Pending</span>;
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
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Purchase History</h1>
                <p className="text-sm text-gray-500 font-medium">View and manage your purchase records.</p>
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30"
            >
              <Plus className="w-4 h-4" /> Add Purchase
            </button>
          </div>

          {/* Filters & Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

            {/* Filters */}
            <div className="lg:col-span-12 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
              <div className="flex flex-wrap items-center gap-4 w-full">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by supplier, product, reference no..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    defaultValue="01/04/2025 - 31/05/2025"
                    className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm outline-none focus:border-primary-500 w-[220px]"
                  />
                </div>
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Suppliers</option>
                  <option>AquaPure</option>
                  <option>BlueTech</option>
                </select>
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Products</option>
                  <option>Filters</option>
                  <option>Membranes</option>
                </select>
                <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
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
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">12</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Total Amount</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">₹ 18,750</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-teal-50 text-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Suppliers</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">5</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Products</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">8</h3>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 w-12 text-center">
                      <input type="checkbox" className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 border-gray-300 cursor-pointer" />
                    </th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Date</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Reference No.</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Supplier</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Product</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Quantity</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Amount (₹)</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {purchasesList.map((purchase) => (
                    <tr key={purchase.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4 text-center">
                        <input type="checkbox" className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 border-gray-300 cursor-pointer" />
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{purchase.date}</td>
                      <td className="px-4 py-4 text-sm font-bold text-primary-600">{purchase.refNo}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{purchase.supplier}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{purchase.product}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900">{purchase.qty}</td>
                      <td className="px-4 py-4 text-sm font-bold text-gray-900">{purchase.amount}</td>
                      <td className="px-4 py-4">
                        {getStatusBadge(purchase.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3 text-gray-400">
                          <button className="hover:text-primary-600 transition-colors"><Eye className="w-4 h-4" /></button>
                          <button className="hover:text-primary-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                          <button className="hover:text-rose-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
              <p className="text-sm text-gray-500 font-medium">Showing 1-10 of 12 purchases</p>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm shadow-primary-600/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">2</button>
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
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Add Purchase</h1>
              <p className="text-sm text-gray-500 font-medium">Fill in the details to record a new purchase.</p>
            </div>
          </div>

          <div className="space-y-6">

            {/* Supplier & Basic Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Supplier & Basic Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Supplier <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select supplier</option>
                    <option>AquaPure Suppliers</option>
                    <option>BlueTech Water</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Purchase Date <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type="text" placeholder="dd/mm/yyyy" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Reference No. <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter reference number" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Invoice No.</label>
                  <input type="text" placeholder="Enter invoice number" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
              </div>
            </div>

            {/* Items / Products Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <Package className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Items / Products</h3>
              </div>

              <div className="overflow-x-auto border border-gray-100 rounded-xl overflow-hidden mb-6">
                <table className="w-full text-left whitespace-nowrap min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700">Product <span className="text-red-500">*</span></th>
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700 w-24">Quantity <span className="text-red-500">*</span></th>
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700 w-32">Rate (₹) <span className="text-red-500">*</span></th>
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700 w-32 text-right">Amount (₹)</th>
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700 w-12 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3">
                        <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                          <option value="" disabled selected className="text-gray-400">Select product</option>
                          <option>Sediment Filter</option>
                          <option>RO Membrane</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input type="number" defaultValue="1" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="text" defaultValue="0.00" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500" />
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-600 text-right">
                        0.00
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="text-red-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                          <option value="" disabled selected className="text-gray-400">Select product</option>
                          <option>Carbon Filter</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input type="number" defaultValue="1" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="text" defaultValue="0.00" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500" />
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-600 text-right">
                        0.00
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="text-red-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20">
                  <Plus className="w-4 h-4" /> Add Item
                </button>

                {/* Totals Box */}
                <div className="w-full md:w-[320px] bg-white border border-gray-100 rounded-xl p-5 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium">Subtotal</span>
                    <span className="font-medium text-gray-900">₹ 0.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium flex-1">Discount</span>
                    <div className="flex items-center gap-2">
                      <input type="number" defaultValue="0" className="w-16 bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-2 py-1 outline-none text-center" />
                      <span className="text-gray-500">%</span>
                    </div>
                    <span className="font-medium text-gray-500 w-16 text-right">₹ 0.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-3">
                    <span className="text-gray-600 font-medium">Tax (GST 18%)</span>
                    <span className="font-medium text-gray-900">₹ 0.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-base font-extrabold text-gray-900">Total Amount</span>
                    <span className="text-lg font-extrabold text-gray-900">₹ 0.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary-600">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Additional Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Payment Method <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option value="" disabled selected className="text-gray-400">Select payment method</option>
                    <option>Bank Transfer</option>
                    <option>Credit Card</option>
                    <option>UPI</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Payment Reference / UTR No.</label>
                  <input type="text" placeholder="Enter UTR/reference number" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[13px] font-bold text-gray-700">Notes</label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      placeholder="Any additional notes about this purchase..."
                      className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none placeholder:text-gray-400 pb-8"
                    ></textarea>
                    <span className="absolute bottom-3 right-4 text-xs font-medium text-gray-400">0/500</span>
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
                <Save className="w-4 h-4" /> Save Purchase
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
