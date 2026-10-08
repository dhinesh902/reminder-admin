import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, Plus, Search, Calendar, Eye, Edit2, Printer, MoreVertical, 
  User, ShoppingCart, CreditCard, Edit, Trash2, Save, Download
} from 'lucide-react';

export function Invoices() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // Mock Data for List
  const invoices = [
    { id: 1, invoiceNo: 'INV-2025-001', customer: 'Ramesh Kumar', date: '15 Apr 2025', amount: '2,500.00', status: 'Paid' },
    { id: 2, invoiceNo: 'INV-2025-002', customer: 'Priya Sharma', date: '14 Apr 2025', amount: '1,800.00', status: 'Paid' },
    { id: 3, invoiceNo: 'INV-2025-003', customer: 'Suresh Patel', date: '12 Apr 2025', amount: '3,200.00', status: 'Pending' },
    { id: 4, invoiceNo: 'INV-2025-004', customer: 'Anita Verma', date: '10 Apr 2025', amount: '2,750.00', status: 'Paid' },
    { id: 5, invoiceNo: 'INV-2025-005', customer: 'Vikram Singh', date: '08 Apr 2025', amount: '1,450.00', status: 'Overdue' },
    { id: 6, invoiceNo: 'INV-2025-006', customer: 'Neha Gupta', date: '05 Apr 2025', amount: '4,200.00', status: 'Paid' },
    { id: 7, invoiceNo: 'INV-2025-007', customer: 'Rajesh Yadav', date: '02 Apr 2025', amount: '1,900.00', status: 'Pending' },
    { id: 8, invoiceNo: 'INV-2025-008', customer: 'Pooja Rani', date: '26 Mar 2025', amount: '2,300.00', status: 'Paid' },
    { id: 9, invoiceNo: 'INV-2025-009', customer: 'Amit Kumar', date: '25 Mar 2025', amount: '3,600.00', status: 'Paid' },
    { id: 10, invoiceNo: 'INV-2025-010', customer: 'Sunita Devi', date: '22 Mar 2025', amount: '2,150.00', status: 'Overdue' },
  ];

  // Helper for status badge
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Paid':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Paid</span>;
      case 'Pending':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Pending</span>;
      case 'Overdue':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-bold bg-rose-50 text-rose-600 border border-rose-100"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Overdue</span>;
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
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Invoices</h1>
                <p className="text-sm text-gray-500 font-medium">Manage and view all invoices</p>
              </div>
            </div>
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30"
            >
              <Plus className="w-4 h-4" /> Add Invoice
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
              <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-500 font-medium">Total Invoices</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">48</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-500 font-medium">Paid</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">37</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
              <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-500 font-medium">Pending</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">8</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
              <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-500 font-medium">Overdue</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">3</h3>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
            {/* Filters */}
            <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
              <div className="relative w-full sm:w-[320px]">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search by invoice no, customer name..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="flex w-full sm:w-auto items-center gap-3">
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-3 py-2 outline-none focus:border-primary-500 cursor-pointer min-w-[140px]">
                  <option>All Status</option>
                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Overdue</option>
                </select>
                <div className="relative">
                  <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl pl-3 pr-8 py-2 outline-none focus:border-primary-500 cursor-pointer min-w-[160px] appearance-none">
                    <option>All Date Range</option>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                  </select>
                  <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700 w-12">#</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700">Invoice No</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700">Customer</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700">Date</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700">Total Amount</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4 text-sm font-medium text-gray-500">{inv.id}</td>
                      <td className="px-6 py-4 text-sm font-bold text-primary-600">{inv.invoiceNo}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{inv.customer}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-500">{inv.date}</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">₹ {inv.amount}</td>
                      <td className="px-6 py-4">
                        {getStatusBadge(inv.status)}
                      </td>
                      <td className="px-6 py-4 text-gray-400">
                        <div className="flex items-center gap-3">
                          <button onClick={() => navigate(`/invoices/${inv.id}`)} className="hover:text-primary-600 transition-colors"><Eye className="w-4 h-4" /></button>
                          <button className="hover:text-primary-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                          <button className="hover:text-primary-600 transition-colors"><Printer className="w-4 h-4" /></button>
                          <button className="hover:text-gray-600 transition-colors"><MoreVertical className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
              <p className="text-sm text-gray-500 font-medium">Showing 1 to 10 of 48 invoices</p>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm shadow-primary-600/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">4</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">5</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ================= ADD FORM VIEW =================
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 text-primary-600 flex items-center justify-center rounded-xl cursor-pointer hover:bg-primary-200 transition-colors" onClick={() => setShowForm(false)}>
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Add Invoice</h1>
                <p className="text-sm text-gray-500 font-medium">Create a new invoice for your customer</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 space-y-8">
            
            {/* Customer Details */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-primary-600" />
                <h3 className="text-base font-bold text-gray-900">Customer Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Select Customer <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Ramesh Kumar (CUST-001)</option>
                    <option>Priya Sharma (CUST-002)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Phone No.</label>
                  <input type="text" value="+91 98765 43210" readOnly className="w-full bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-xl px-4 py-2.5 outline-none" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[13px] font-bold text-gray-700">Customer Address</label>
                  <input type="text" value="12, Green Park, New Delhi - 110016" readOnly className="w-full bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-xl px-4 py-2.5 outline-none" />
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Invoice Details */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary-600" />
                <h3 className="text-base font-bold text-gray-900">Invoice Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Invoice No. <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="INV-2025-011" className="w-full bg-white border border-gray-200 text-gray-900 font-medium text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Invoice Date <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type="text" defaultValue="16 Apr 2025" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                    <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Due Date</label>
                  <div className="relative">
                    <input type="text" defaultValue="30 Apr 2025" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                    <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Items Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-5 h-5 text-primary-600" />
                <h3 className="text-base font-bold text-gray-900">Items</h3>
              </div>
              
              <div className="overflow-x-auto border border-gray-100 rounded-xl overflow-hidden mb-4">
                <table className="w-full text-left whitespace-nowrap min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700 w-12">#</th>
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700">Product / Service</th>
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700 w-24">Qty</th>
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700 w-32">Rate (₹)</th>
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700 w-32">Amount (₹)</th>
                      <th className="px-4 py-3 text-[13px] font-bold text-gray-700 w-12 text-center"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500">1</td>
                      <td className="px-4 py-3">
                        <input type="text" defaultValue="RO Service (Annual)" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="number" defaultValue="1" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="text" defaultValue="1,500.00" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500 text-right" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="text" defaultValue="1,500.00" readOnly className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none text-right" />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="text-red-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500">2</td>
                      <td className="px-4 py-3">
                        <input type="text" defaultValue="Filter Cartridge" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="number" defaultValue="2" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="text" defaultValue="350.00" className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary-500 text-right" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="text" defaultValue="700.00" readOnly className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none text-right" />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="text-red-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button className="flex items-center gap-1.5 bg-primary-50 text-primary-600 hover:bg-primary-100 px-4 py-2 rounded-xl font-bold text-sm transition-colors mb-6">
                <Plus className="w-4 h-4" /> Add Item
              </button>

              {/* Totals Box */}
              <div className="flex justify-end">
                <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-50/50 border border-gray-100 rounded-xl p-5 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium">Subtotal</span>
                    <span className="font-bold text-gray-900">₹ 2,200.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium flex-1">Discount</span>
                    <div className="flex items-center gap-2">
                      <select className="bg-white border border-gray-200 text-gray-700 text-xs rounded-lg px-2 py-1 outline-none w-16 appearance-none cursor-pointer">
                        <option>%</option>
                        <option>₹</option>
                      </select>
                      <input type="number" defaultValue="0" className="w-16 bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-2 py-1 outline-none text-right" />
                    </div>
                    <span className="font-medium text-gray-500 w-20 text-right">- ₹ 0.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-3">
                    <span className="text-gray-600 font-medium">Tax (GST 18%)</span>
                    <span className="font-bold text-gray-900">₹ 396.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-base font-extrabold text-gray-900">Total Amount</span>
                    <span className="text-xl font-extrabold text-gray-900">₹ 2,596.00</span>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Payment Details */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-primary-600" />
                <h3 className="text-base font-bold text-gray-900">Payment Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Payment Status <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Partial</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Payment Method</label>
                  <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                    <option>Cash</option>
                    <option>UPI</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Paid Amount (₹)</label>
                  <input type="text" defaultValue="2,596.00" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Payment Date</label>
                  <div className="relative">
                    <input type="text" defaultValue="16 Apr 2025" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl pl-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
                    <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Notes Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Edit className="w-5 h-5 text-primary-600" />
                <h3 className="text-base font-bold text-gray-900">Notes</h3>
              </div>
              <textarea 
                rows={3}
                placeholder="Additional notes (optional)..."
                className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"
              ></textarea>
            </section>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <button 
                onClick={() => setShowForm(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
                <Save className="w-4 h-4" /> Save Invoice
              </button>
            </div>
          </div>

          {/* Invoice Preview Section */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 pb-12 opacity-80 pointer-events-none">
            <div className="flex justify-between items-start mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-600 text-white flex items-center justify-center rounded-xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">RO Water Reminders</h3>
                  <p className="text-xs text-gray-500">Pure Water • Healthy Life</p>
                </div>
              </div>
              <div className="text-right">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Tax Invoice</h2>
                <p className="text-xs text-gray-600">Invoice No: <span className="font-bold text-gray-900">INV-2025-011</span></p>
                <p className="text-xs text-gray-600">Date: <span className="font-bold text-gray-900">16 Apr 2025</span></p>
                <p className="text-xs text-gray-600">Due Date: <span className="font-bold text-gray-900">30 Apr 2025</span></p>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-xs text-gray-500 font-bold mb-1">Bill To:</p>
              <h4 className="text-sm font-bold text-gray-900">Ramesh Kumar</h4>
              <p className="text-xs text-gray-600">12, Green Park, New Delhi - 110016</p>
              <p className="text-xs text-gray-600">Phone: +91 98765 43210</p>
            </div>

            <table className="w-full text-left mb-6 text-sm">
              <thead>
                <tr className="border-y border-gray-200 bg-gray-50/50">
                  <th className="py-2 px-3 font-bold text-gray-700">#</th>
                  <th className="py-2 px-3 font-bold text-gray-700">Product / Service</th>
                  <th className="py-2 px-3 font-bold text-gray-700 text-right">Qty</th>
                  <th className="py-2 px-3 font-bold text-gray-700 text-right">Rate (₹)</th>
                  <th className="py-2 px-3 font-bold text-gray-700 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-3 text-gray-600">1</td>
                  <td className="py-3 px-3 text-gray-900 font-medium">RO Service (Annual)</td>
                  <td className="py-3 px-3 text-gray-600 text-right">1</td>
                  <td className="py-3 px-3 text-gray-600 text-right">1,500.00</td>
                  <td className="py-3 px-3 text-gray-900 font-medium text-right">1,500.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-gray-600">2</td>
                  <td className="py-3 px-3 text-gray-900 font-medium">Filter Cartridge</td>
                  <td className="py-3 px-3 text-gray-600 text-right">2</td>
                  <td className="py-3 px-3 text-gray-600 text-right">350.00</td>
                  <td className="py-3 px-3 text-gray-900 font-medium text-right">700.00</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-end border-t border-gray-200 pt-4">
              <div className="w-64 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">2,200.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span className="text-gray-900 font-medium">396.00</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 font-bold text-base">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">2,596.00</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center text-xs text-gray-400 font-medium">
              Thank you for choosing RO Water Reminders!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}