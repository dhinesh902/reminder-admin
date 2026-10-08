import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Edit, MoreVertical, Wrench, Calendar, CheckCircle, 
  User, Phone, Mail, MapPin, Settings, FileText, Package
} from 'lucide-react';

export function ServiceHistoryDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Service Details');

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
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1">Service History Detail</h1>
            <p className="text-sm text-gray-500 font-medium">View detailed information about the service and maintenance performed.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
            <Edit className="w-4 h-4" /> Edit Service
          </button>
          <button className="flex items-center justify-center w-10 h-10 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors">
            <MoreVertical className="w-4 h-4" />
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

          {/* Right: Meta */}
          <div className="flex flex-col gap-4 lg:min-w-[280px]">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                 <Wrench className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Service ID</p>
                 <p className="text-sm font-extrabold text-gray-900">SRV-00124</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                 <Calendar className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Service Date</p>
                 <p className="text-sm font-extrabold text-gray-900">28/05/2025</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                 <CheckCircle className="w-5 h-5" />
               </div>
               <div>
                 <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    ✓ Completed
                 </span>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                 <User className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Technician</p>
                 <p className="text-sm font-extrabold text-gray-900">Amit Verma</p>
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
        
        {/* Service Information */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Service Information</h2>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors">
              <Edit className="w-3.5 h-3.5" /> Edit
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Service Type</span>
              <span className="text-sm font-bold text-gray-900">RO Service - Annual</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Status</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600">Completed</span>
            </div>
            <div className="hidden lg:block"></div>
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Technician</span>
              <span className="text-sm font-bold text-gray-900">Amit Verma</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Total Cost</span>
              <span className="text-sm font-extrabold text-gray-900">₹ 1,200</span>
            </div>
            <div className="hidden lg:block"></div>
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Duration</span>
              <span className="text-sm font-bold text-gray-900">1.5 hours</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Payment Status</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600">Paid</span>
            </div>
            <div className="hidden lg:block"></div>
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Service Date</span>
              <span className="text-sm font-bold text-gray-900">28/05/2025</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Warranty Upto</span>
              <span className="text-sm font-bold text-gray-900">28/05/2027</span>
            </div>
            <div className="hidden lg:block"></div>
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Next Service Due</span>
              <span className="text-sm font-bold text-gray-900">28/11/2025 <span className="text-gray-400 font-medium">(in 6 months)</span></span>
            </div>
            <div className="flex flex-col gap-1 pb-2 border-b border-gray-50 md:col-span-2 lg:col-span-1">
              <span className="text-[13px] font-bold text-gray-600">Service Notes</span>
              <span className="text-sm font-medium text-gray-900">RO membrane cleaned, filters replaced and system checked.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products Used */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8 lg:col-span-2">
            <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-bold text-gray-900">Products Used (4)</h2>
              </div>
              <button className="text-xs font-bold text-primary-600 hover:text-primary-700">View All →</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="pb-3 text-xs font-bold text-gray-500">Product Name</th>
                    <th className="pb-3 text-xs font-bold text-gray-500">Model No.</th>
                    <th className="pb-3 text-xs font-bold text-gray-500 text-center">Quantity</th>
                    <th className="pb-3 text-xs font-bold text-gray-500 text-right">Unit Price</th>
                    <th className="pb-3 text-xs font-bold text-gray-500 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gray-50 border border-gray-100 flex items-center justify-center">
                          <img src="https://via.placeholder.com/20" alt="product" className="w-4 h-4 opacity-50 mix-blend-multiply" />
                        </div>
                        <span className="text-sm font-bold text-gray-900">RO Membrane</span>
                      </div>
                    </td>
                    <td className="py-3 text-sm font-medium text-gray-500">AQUA-RO-100</td>
                    <td className="py-3 text-sm font-bold text-gray-900 text-center">1</td>
                    <td className="py-3 text-sm font-medium text-gray-500 text-right">₹ 2,499</td>
                    <td className="py-3 text-sm font-bold text-gray-900 text-right">₹ 2,499</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gray-50 border border-gray-100 flex items-center justify-center">
                          <img src="https://via.placeholder.com/20" alt="product" className="w-4 h-4 opacity-50 mix-blend-multiply" />
                        </div>
                        <span className="text-sm font-bold text-gray-900">Sediment Filter</span>
                      </div>
                    </td>
                    <td className="py-3 text-sm font-medium text-gray-500">SF-103</td>
                    <td className="py-3 text-sm font-bold text-gray-900 text-center">2</td>
                    <td className="py-3 text-sm font-medium text-gray-500 text-right">₹ 499</td>
                    <td className="py-3 text-sm font-bold text-gray-900 text-right">₹ 998</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gray-50 border border-gray-100 flex items-center justify-center">
                          <img src="https://via.placeholder.com/20" alt="product" className="w-4 h-4 opacity-50 mix-blend-multiply" />
                        </div>
                        <span className="text-sm font-bold text-gray-900">Carbon Filter</span>
                      </div>
                    </td>
                    <td className="py-3 text-sm font-medium text-gray-500">CF-104</td>
                    <td className="py-3 text-sm font-bold text-gray-900 text-center">2</td>
                    <td className="py-3 text-sm font-medium text-gray-500 text-right">₹ 1,499</td>
                    <td className="py-3 text-sm font-bold text-gray-900 text-right">₹ 1,499</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gray-50 border border-gray-100 flex items-center justify-center">
                          <img src="https://via.placeholder.com/20" alt="product" className="w-4 h-4 opacity-50 mix-blend-multiply" />
                        </div>
                        <span className="text-sm font-bold text-gray-900">Pre Filter</span>
                      </div>
                    </td>
                    <td className="py-3 text-sm font-medium text-gray-500">PF-106</td>
                    <td className="py-3 text-sm font-bold text-gray-900 text-center">2</td>
                    <td className="py-3 text-sm font-medium text-gray-500 text-right">₹ 399</td>
                    <td className="py-3 text-sm font-bold text-gray-900 text-right">₹ 798</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <span className="text-[13px] font-bold text-gray-600">Total Product Cost</span>
              <span className="text-lg font-extrabold text-gray-900">₹ 5,794</span>
            </div>
          </div>

          {/* Service Summary */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-50 pb-4">
              <Settings className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Service Summary</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0"><CheckCircle className="w-3.5 h-3.5" /></div>
                System cleaning completed
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0"><CheckCircle className="w-3.5 h-3.5" /></div>
                Filters replaced
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0"><CheckCircle className="w-3.5 h-3.5" /></div>
                RO membrane checked
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0"><CheckCircle className="w-3.5 h-3.5" /></div>
                Water flow test passed
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0"><CheckCircle className="w-3.5 h-3.5" /></div>
                TDS level optimal
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
          <p className="text-sm font-bold text-gray-900 mb-6 bg-gray-50/50 p-4 rounded-xl border border-gray-100">RO membrane cleaned, filters replaced and system checked. Water TDS is normal (45 ppm). Working fine.</p>
          <div className="pt-4 border-t border-gray-50">
             <p className="text-[11px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 w-fit">Added by: Amit Verma | 28/05/2025 02:30 PM</p>
          </div>
        </div>

      </div>
    </div>
  );
}
