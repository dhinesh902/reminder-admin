import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Edit, User, Phone, Mail, MapPin, 
  ShoppingCart, IndianRupee, Calendar, FileText,
  Package, Lightbulb, Plus, Eye, MoreVertical
} from 'lucide-react';

export function CustomerProductDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Products');

  const products = [
    { id: 1, name: 'RO Membrane', sub: 'AQUA-RO-100', model: 'PRD-001', date: '28/05/2025', qty: 1, amount: '2,499', status: 'Active' },
    { id: 2, name: 'Sediment Filter', sub: 'SF-103', model: 'PRD-002', date: '27/04/2025', qty: 2, amount: '1,298', status: 'Active' },
    { id: 3, name: 'Carbon Filter', sub: 'CF-104', model: 'PRD-003', date: '25/04/2025', qty: 1, amount: '1,499', status: 'Active' },
    { id: 4, name: 'UV Lamp', sub: 'UV-202', model: 'PRD-004', date: '18/05/2025', qty: 1, amount: '1,799', status: 'Active' },
    { id: 5, name: 'Pre Filter', sub: 'PF-106', model: 'PRD-005', date: '05/05/2025', qty: 2, amount: '1,250', status: 'Active' },
    { id: 6, name: 'Post Carbon Filter', sub: 'PCF-107', model: 'PRD-006', date: '10/05/2025', qty: 1, amount: '999', status: 'Pending' },
  ];

  return (
    <div className="space-y-6 w-full pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white border border-gray-200 text-gray-600 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1">Customer Products Detail</h1>
            <p className="text-sm text-gray-500 font-medium">View detailed information about customer purchased products.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
            <Edit className="w-4 h-4" /> Edit Product
          </button>
        </div>
      </div>

      {/* Top Profile Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          
          {/* Left: Info */}
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
              <User className="w-10 h-10" />
            </div>
            <div className="space-y-4 pt-1">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-extrabold text-gray-900">Rohit Sharma</h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    Active
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500">Customer ID : <span className="text-gray-900">CUS-00124</span></p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span className="font-medium text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary-500" />
                  <span className="font-medium text-gray-700">rohit.sharma@example.com</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-700">Shop No. 12, Green Park, Bangalore, Karnataka<br/>- 560001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col gap-4 lg:min-w-[280px]">
             <div className="flex items-center gap-4 pt-2">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                 <ShoppingCart className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Total Purchases</p>
                 <p className="text-lg font-extrabold text-gray-900">6</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                 <IndianRupee className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Total Amount</p>
                 <p className="text-lg font-extrabold text-gray-900">₹ 24,850</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                 <Calendar className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Last Purchase</p>
                 <p className="text-sm font-extrabold text-gray-900 mt-1">28/05/2025</p>
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8 overflow-x-auto">
          {['Products', 'Purchase History', 'Invoices'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab === 'Products' && <Package className="w-4 h-4" />}
              {tab === 'Purchase History' && <Calendar className="w-4 h-4" />}
              {tab === 'Invoices' && <FileText className="w-4 h-4" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="space-y-6">
        
        {/* Purchased Products Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
          <div className="flex items-center justify-between p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900">Purchased Products (6)</h2>
            <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>
          
          <div className="overflow-x-auto px-6 md:px-8 pb-8">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-3 text-[13px] font-bold text-gray-500 w-12">#</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Product</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Model No.</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Purchase Date</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Quantity</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Amount (₹)</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Status</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 text-sm font-bold text-gray-500">{row.id}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center p-2">
                          <img src="https://via.placeholder.com/40/f9fafb/6366f1?text=+" alt={row.name} className="w-full h-full object-contain mix-blend-multiply opacity-60" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{row.name}</span>
                          <span className="text-[12px] font-medium text-gray-500">{row.sub}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm font-medium text-gray-600">{row.model}</td>
                    <td className="py-4 text-sm font-medium text-gray-600">{row.date}</td>
                    <td className="py-4 text-sm font-bold text-gray-900">{row.qty}</td>
                    <td className="py-4 text-sm font-bold text-gray-900">{row.amount}</td>
                    <td className="py-4">
                      {row.status === 'Active' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Active</span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-100">Pending</span>
                      )}
                    </td>
                    <td className="py-4">
                      <div className="flex items-center justify-center gap-3 text-gray-400">
                        <button className="hover:text-primary-600 transition-colors"><Eye className="w-4 h-4" /></button>
                        <button className="hover:text-primary-600 transition-colors"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 md:px-8 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
            <span className="text-sm font-bold text-gray-600">Showing 1-6 of 6 products</span>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors text-sm">&lt;</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm text-sm">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors text-sm">&gt;</button>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Package className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Total Purchase Summary</h2>
            </div>
            <div className="flex justify-between items-center bg-gray-50/50 rounded-xl p-6 border border-gray-100">
              <div className="text-center">
                <p className="text-[13px] font-bold text-gray-500 mb-1">Total Products</p>
                <p className="text-2xl font-extrabold text-gray-900">6</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-[13px] font-bold text-gray-500 mb-1">Total Quantity</p>
                <p className="text-2xl font-extrabold text-gray-900">9</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-[13px] font-bold text-gray-500 mb-1">Total Amount</p>
                <p className="text-2xl font-extrabold text-gray-900">₹ 9,344</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8 flex items-center">
            <div className="flex items-center gap-5 w-full bg-primary-50/50 p-6 rounded-2xl border border-primary-50">
              <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center shadow-sm">
                <Lightbulb className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-600 mb-1.5">Next Service Reminder</p>
                <p className="text-lg font-extrabold text-gray-900">RO Service due in 6 months</p>
                <p className="text-sm font-medium text-gray-500 mt-0.5">(28/11/2025)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
