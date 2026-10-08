import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Edit, Wrench, Calendar, CheckCircle, User, Phone, MapPin, Settings, FileText, Package
} from 'lucide-react';

export function ServiceDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Service Details');

  const productsUsed = [
    { id: 1, name: 'RO Membrane', model: 'AQUA-RO-100', qty: 1, remarks: 'Replaced' },
    { id: 2, name: 'Sediment Filter', model: 'SF-103', qty: 2, remarks: 'Replaced' },
    { id: 3, name: 'Carbon Filter', model: 'CF-104', qty: 1, remarks: 'Replaced' },
    { id: 4, name: 'Post Carbon Filter', model: 'PCF-107', qty: 1, remarks: 'Replaced' },
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
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1">Service Detail</h1>
            <p className="text-sm text-gray-500 font-medium">View detailed information about service / maintenance.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
            <Edit className="w-4 h-4" /> Edit Service
          </button>
        </div>
      </div>

      {/* Top Details Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          
          {/* Left: Service Info */}
          <div className="flex items-start gap-4 pr-6 lg:border-r border-gray-100">
            <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div className="space-y-1 pt-1">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-extrabold text-gray-900">RO Service</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                  Completed
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500">Service ID : <span className="text-gray-900">SRV-00124</span></p>
            </div>
          </div>

          {/* Middle: Customer Info */}
          <div className="flex-1 space-y-4 lg:px-6">
            <div className="flex items-start gap-3 text-sm">
              <User className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] font-bold text-gray-500">Customer</p>
                <span className="font-bold text-gray-900">Rohit Sharma (CUS-00124)</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] font-bold text-gray-500">Phone</p>
                <span className="font-bold text-gray-900">+91 98765 43210</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] font-bold text-gray-500">Address</p>
                <span className="font-bold text-gray-900">Shop No. 12, Green Park, Bangalore, Karnataka - 560001</span>
              </div>
            </div>
          </div>

          {/* Right: Meta Info */}
          <div className="flex flex-col gap-4 lg:pl-6 lg:border-l border-gray-100 lg:min-w-[200px]">
             <div className="flex items-start gap-3 text-sm">
               <Calendar className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Service Date</p>
                 <span className="font-extrabold text-gray-900">28/05/2025</span>
               </div>
             </div>
             <div className="flex items-start gap-3 text-sm">
               <User className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Technician</p>
                 <span className="font-extrabold text-gray-900">Amit Verma</span>
               </div>
             </div>
             <div className="flex items-start gap-3 text-sm">
               <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Status</p>
                 <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    ✓ Completed
                 </span>
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8 overflow-x-auto">
          {['Service Details', 'Products Used', 'Notes', 'Images'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab === 'Service Details' && <Settings className="w-4 h-4" />}
              {tab === 'Products Used' && <Package className="w-4 h-4" />}
              {tab === 'Notes' && <FileText className="w-4 h-4" />}
              {tab === 'Images' && <FileText className="w-4 h-4" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="space-y-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Service Information */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-50 pb-4">
              <Settings className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Service Information</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1">Service Type</span>
                <span className="block text-sm font-bold text-gray-900">RO Service - Annual</span>
              </div>
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1 flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-gray-400"/> Service Date</span>
                <span className="block text-sm font-bold text-gray-900">28/05/2025</span>
              </div>
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1">Technician</span>
                <span className="block text-sm font-bold text-gray-900 flex items-center gap-1"><User className="w-3.5 h-3.5 text-gray-400"/> Amit Verma</span>
              </div>
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1">Service Status</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                  ✓ Completed
                </span>
              </div>
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1">Duration</span>
                <span className="block text-sm font-bold text-gray-900 flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-gray-400"/> 1.5 hours</span>
              </div>
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1 flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-gray-400"/> Next Service Due</span>
                <span className="block text-sm font-bold text-gray-900">28/11/2025</span>
              </div>
            </div>
          </div>

          {/* Service Summary */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-50 pb-4">
              <Settings className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Service Summary</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white"><CheckCircle className="w-3 h-3" /></div>
                Filter replacement
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white"><CheckCircle className="w-3 h-3" /></div>
                RO membrane check
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white"><CheckCircle className="w-3 h-3" /></div>
                TDS level check
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white"><CheckCircle className="w-3 h-3" /></div>
                System cleaning
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white"><CheckCircle className="w-3 h-3" /></div>
                Water flow test
              </div>
            </div>
          </div>
        </div>

        {/* Service Notes */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-4">
            <FileText className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-bold text-gray-900">Service Notes</h2>
          </div>
          <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-4">
            <p className="text-sm font-bold text-gray-900 mb-4">All filters replaced and system cleaned. Water TDS is normal (45 ppm). Working fine.</p>
            <p className="text-[11px] font-bold text-gray-500 bg-white border border-gray-100 px-2 py-1 rounded-md w-fit">Added by: Amit Verma | 28/05/2025 02:30 PM</p>
          </div>
        </div>

        {/* Products Used */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-4">
            <Package className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-bold text-gray-900">Products Used</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="pb-3 pt-2 text-xs font-bold text-gray-500 w-12 text-center">#</th>
                  <th className="pb-3 pt-2 text-xs font-bold text-gray-500">Product</th>
                  <th className="pb-3 pt-2 text-xs font-bold text-gray-500">Model No.</th>
                  <th className="pb-3 pt-2 text-xs font-bold text-gray-500 text-center">Quantity</th>
                  <th className="pb-3 pt-2 text-xs font-bold text-gray-500">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {productsUsed.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 text-sm font-bold text-gray-500 text-center">{row.id}</td>
                    <td className="py-4 text-sm font-bold text-gray-900">{row.name}</td>
                    <td className="py-4 text-sm font-medium text-gray-600">{row.model}</td>
                    <td className="py-4 text-sm font-medium text-gray-600 text-center">{row.qty}</td>
                    <td className="py-4 text-sm font-medium text-gray-600">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
