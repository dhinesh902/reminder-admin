import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Edit, Trash2, User, Phone, Mail, MapPin, 
  ShoppingCart, IndianRupee, Calendar, Bell, FileText,
  AlertCircle, Shield, CheckCircle
} from 'lucide-react';

export function CustomerDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

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
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1">Customer Details</h1>
            <p className="text-sm text-gray-500 font-medium">View and manage customer information, purchase history and more.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
            <Edit className="w-4 h-4" /> Edit
          </button>
          <button className="flex items-center gap-2 bg-white border border-red-200 text-red-500 hover:bg-red-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
            <Trash2 className="w-4 h-4" /> Delete
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
          <div className="flex flex-col sm:flex-row gap-4 lg:min-w-[400px]">
             <div className="flex-1 bg-primary-50/50 border border-primary-50 rounded-xl p-4 flex items-center gap-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600">
                 <ShoppingCart className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Total Purchases</p>
                 <p className="text-lg font-extrabold text-gray-900">6</p>
               </div>
             </div>
             <div className="flex-1 bg-primary-50/50 border border-primary-50 rounded-xl p-4 flex items-center gap-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600">
                 <IndianRupee className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Total Amount</p>
                 <p className="text-lg font-extrabold text-gray-900">₹ 24,850</p>
               </div>
             </div>
             <div className="flex-1 bg-primary-50/50 border border-primary-50 rounded-xl p-4 flex items-center gap-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600">
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
          {['Overview', 'Purchase History', 'Invoices', 'Reminders', 'Notes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab === 'Overview' && <Shield className="w-4 h-4" />}
              {tab === 'Purchase History' && <ShoppingCart className="w-4 h-4" />}
              {tab === 'Invoices' && <FileText className="w-4 h-4" />}
              {tab === 'Reminders' && <Bell className="w-4 h-4" />}
              {tab === 'Notes' && <FileText className="w-4 h-4" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="space-y-6">
        
        {/* Customer Information Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Customer Information</h2>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors">
              <Edit className="w-3.5 h-3.5" /> Edit
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div className="grid grid-cols-[140px_1fr] items-start gap-4 text-sm">
              <span className="text-gray-500 font-medium">Customer Name</span>
              <span className="font-bold text-gray-900">: Rohit Sharma</span>
              
              <span className="text-gray-500 font-medium">Phone Number</span>
              <span className="font-bold text-gray-900">: +91 98765 43210</span>
              
              <span className="text-gray-500 font-medium">Email Address</span>
              <span className="font-bold text-gray-900">: rohit.sharma@example.com</span>
              
              <span className="text-gray-500 font-medium">Customer Type</span>
              <span className="font-bold text-gray-900">: Regular</span>
              
              <span className="text-gray-500 font-medium flex items-center h-6">Status</span>
              <span className="flex items-center h-6">
                <span className="mr-2">:</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Active</span>
              </span>
            </div>
            
            <div className="grid grid-cols-[140px_1fr] items-start gap-4 text-sm">
              <span className="text-gray-500 font-medium">Address</span>
              <span className="font-bold text-gray-900 leading-relaxed">: Shop No. 12, Green Park,<br/>  Bangalore, Karnataka - 560001</span>
              
              <span className="text-gray-500 font-medium">Date of Joining</span>
              <span className="font-bold text-gray-900">: 12/03/2024</span>
              
              <span className="text-gray-500 font-medium">Preferred Contact</span>
              <span className="font-bold text-gray-900">: WhatsApp</span>
              
              <span className="text-gray-500 font-medium">GST No.</span>
              <span className="font-medium text-gray-400">: (Not Provided)</span>
            </div>
          </div>
        </div>

        {/* Recent Purchases Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Recent Purchases</h2>
            </div>
            <button className="text-xs font-bold text-primary-600 hover:text-primary-700">View All →</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Date</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Invoice No.</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Products</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Amount</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { date: '28/05/2025', inv: 'INV-0124', prod: 'RO Membrane, Pre Filter', amt: '₹ 3,499' },
                  { date: '20/04/2025', inv: 'INV-0108', prod: 'Sediment Filter', amt: '₹ 1,299' },
                  { date: '15/03/2025', inv: 'INV-0092', prod: 'Carbon Filter', amt: '₹ 1,499' },
                  { date: '10/02/2025', inv: 'INV-0076', prod: 'UV Lamp', amt: '₹ 1,799' },
                  { date: '05/01/2025', inv: 'INV-0061', prod: 'RO Service', amt: '₹ 499' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 text-sm font-medium text-gray-600">{row.date}</td>
                    <td className="py-4 text-sm font-bold text-gray-900">{row.inv}</td>
                    <td className="py-4 text-sm font-medium text-gray-600">{row.prod}</td>
                    <td className="py-4 text-sm font-bold text-gray-900">{row.amt}</td>
                    <td className="py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Completed</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom 2 cols: Reminders & Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Reminders */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-bold text-gray-900">Upcoming Reminders</h2>
              </div>
              <button className="text-xs font-bold text-primary-600 hover:text-primary-700">View All →</button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-gray-50/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shadow-sm">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">RO Service</p>
                    <p className="text-[12px] font-medium text-gray-500 mt-0.5">02 Jun 2025</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-100 uppercase">High</span>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-gray-50/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Filter Replacement</p>
                    <p className="text-[12px] font-medium text-gray-500 mt-0.5">18 Jun 2025</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-100 uppercase">Medium</span>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-gray-50/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">UV Lamp Service</p>
                    <p className="text-[12px] font-medium text-gray-500 mt-0.5">20 Jun 2025</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase">Low</span>
              </div>
            </div>
          </div>
          
          {/* Notes */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-bold text-gray-900">Notes</h2>
              </div>
              <button className="text-xs font-bold text-primary-600 hover:text-primary-700">Add Note</button>
            </div>
            
            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
              <p className="text-sm font-medium text-gray-900 leading-relaxed">
                Customer prefers WhatsApp for communication. Always confirm address before service visit.
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-50">
               <p className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md border border-gray-100 w-fit">Added on: <span className="text-gray-500 font-bold">12/03/2024</span> by Admin</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}