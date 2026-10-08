import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Edit, Trash2, User, Phone, Mail, MapPin, 
  Wrench, CheckCircle2, Star, Shield, Briefcase, Calendar,
  FileText, Clock, Settings
} from 'lucide-react';

export function TechnicianDetails() {
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
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1">Technician Details</h1>
            <p className="text-sm text-gray-500 font-medium">View and manage technician information, performance, and assignments.</p>
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
                <p className="text-sm font-medium text-gray-500">Employee ID : <span className="text-gray-900">TECH-001</span></p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span className="font-medium text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary-500" />
                  <span className="font-medium text-gray-700">rohit@rservice.com</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-700">Service Area: Delhi NCR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col sm:flex-row gap-4 lg:min-w-[400px]">
             <div className="flex-1 bg-primary-50/50 border border-primary-50 rounded-xl p-4 flex items-center gap-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600">
                 <Wrench className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Assigned Jobs</p>
                 <p className="text-lg font-extrabold text-gray-900">12</p>
               </div>
             </div>
             <div className="flex-1 bg-primary-50/50 border border-primary-50 rounded-xl p-4 flex items-center gap-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600">
                 <CheckCircle2 className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Completed</p>
                 <p className="text-lg font-extrabold text-gray-900">145</p>
               </div>
             </div>
             <div className="flex-1 bg-primary-50/50 border border-primary-50 rounded-xl p-4 flex items-center gap-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-500">
                 <Star className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[13px] font-bold text-gray-500">Rating</p>
                 <p className="text-lg font-extrabold text-gray-900">4.8</p>
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8 overflow-x-auto">
          {['Overview', 'Service History', 'Reviews', 'Documents'].map((tab) => (
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
              {tab === 'Service History' && <Wrench className="w-4 h-4" />}
              {tab === 'Reviews' && <Star className="w-4 h-4" />}
              {tab === 'Documents' && <FileText className="w-4 h-4" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="space-y-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Professional Information */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-bold text-gray-900">Professional Details</h2>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors">
                <Edit className="w-3.5 h-3.5" /> Edit
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1">Role</span>
                <span className="block text-sm font-bold text-gray-900">Senior Technician</span>
              </div>
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1 flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-gray-400"/> Date of Joining</span>
                <span className="block text-sm font-bold text-gray-900">10/01/2022</span>
              </div>
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1">Experience</span>
                <span className="block text-sm font-bold text-gray-900">5+ Years</span>
              </div>
              <div>
                <span className="block text-[13px] font-bold text-gray-600 mb-1">Expertise</span>
                <span className="block text-sm font-bold text-gray-900">RO Installation & Repair</span>
              </div>
              <div className="md:col-span-2">
                <span className="block text-[13px] font-bold text-gray-600 mb-1">Skills</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-600 border border-primary-100">Filter Replacement</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-600 border border-primary-100">Pump Repair</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-600 border border-primary-100">TDS Adjustment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-50 pb-4">
              <Star className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Performance (This Month)</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                 <p className="text-[13px] font-bold text-gray-500 mb-1">Jobs Completed</p>
                 <p className="text-2xl font-extrabold text-gray-900">28</p>
               </div>
               <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                 <p className="text-[13px] font-bold text-gray-500 mb-1">On-Time Rate</p>
                 <p className="text-2xl font-extrabold text-gray-900">96%</p>
               </div>
               <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                 <p className="text-[13px] font-bold text-gray-500 mb-1">Avg Completion Time</p>
                 <p className="text-2xl font-extrabold text-gray-900">1.2 hrs</p>
               </div>
               <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                 <p className="text-[13px] font-bold text-gray-500 mb-1">Revenue Generated</p>
                 <p className="text-2xl font-extrabold text-gray-900">₹ 14,500</p>
               </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
               <p className="text-[11px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 w-fit">Last updated: Today, 09:00 AM</p>
            </div>
          </div>
        </div>

        {/* Recent Assignments Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Recent Assignments</h2>
            </div>
            <button className="text-xs font-bold text-primary-600 hover:text-primary-700">View All →</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Date</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Service ID</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Customer</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Type</th>
                  <th className="pb-3 text-[13px] font-bold text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { date: '28/05/2025', id: 'SRV-0124', customer: 'Amit Verma', type: 'RO Service', status: 'Completed' },
                  { date: '28/05/2025', id: 'SRV-0125', customer: 'Priya Nair', type: 'Installation', status: 'Pending' },
                  { date: '27/05/2025', id: 'SRV-0118', customer: 'Rahul Singh', type: 'Repair', status: 'Completed' },
                  { date: '25/05/2025', id: 'SRV-0105', customer: 'Sneha Patel', type: 'Filter Change', status: 'Completed' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 text-sm font-medium text-gray-600">{row.date}</td>
                    <td className="py-4 text-sm font-bold text-gray-900">{row.id}</td>
                    <td className="py-4 text-sm font-medium text-gray-600">{row.customer}</td>
                    <td className="py-4 text-sm font-bold text-gray-900">{row.type}</td>
                    <td className="py-4">
                      {row.status === 'Completed' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Completed</span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-600 border border-amber-100">Pending</span>
                      )}
                    </td>
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
