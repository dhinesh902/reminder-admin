import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Edit, MoreVertical, Calendar, Clock, User, Phone, MapPin, FileText, 
  History, Paperclip, MessageSquare, PhoneCall, CheckCircle, Mail
} from 'lucide-react';

export function FollowupDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Followup Details');

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
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1">Followups Detail</h1>
            <p className="text-sm text-gray-500 font-medium">View detailed information about the followup and next action.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
            <Edit className="w-4 h-4" /> Edit Followup
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
                  <h2 className="text-xl font-extrabold text-gray-900">Priya Nair</h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    Active
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500">Customer ID : <span className="text-gray-900">CUS-00119</span></p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span className="font-medium text-gray-700">+91 91234 56789</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary-500" />
                  <span className="font-medium text-gray-700">priya.nair@example.com</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-700">Flat No. 4, Sunshine Apartments,<br/>Indiranagar, Bangalore - 560038</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Meta */}
          <div className="flex flex-col gap-4 lg:min-w-[280px]">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                 <FileText className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Followup ID</p>
                 <p className="text-sm font-extrabold text-gray-900">FLW-00119</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                 <Calendar className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Followup Date</p>
                 <p className="text-sm font-extrabold text-gray-900">12/04/2025</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 flex items-center justify-center">
                 <span className="text-xs font-bold text-gray-500">Status</span>
               </div>
               <div>
                 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-100">
                    <Clock className="w-3 h-3" /> Pending
                 </span>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                 <User className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Assigned To</p>
                 <p className="text-sm font-extrabold text-gray-900">Amit Verma</p>
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8 overflow-x-auto">
          {['Followup Details', 'Customer History', 'Notes', 'Attachments'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab === 'Followup Details' && <FileText className="w-4 h-4" />}
              {tab === 'Customer History' && <History className="w-4 h-4" />}
              {tab === 'Notes' && <FileText className="w-4 h-4" />}
              {tab === 'Attachments' && <Paperclip className="w-4 h-4" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="space-y-6">
        
        {/* Followup Information */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Followup Information</h2>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors">
              <Edit className="w-3.5 h-3.5" /> Edit
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Followup Type</span>
              <span className="text-sm font-extrabold text-gray-900">Service Reminder</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Status</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-600">Pending</span>
            </div>
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Priority</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-600">Medium</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Reason</span>
              <span className="text-sm font-bold text-gray-900">RO service due in 6 months</span>
            </div>
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Date & Time</span>
              <span className="text-sm font-extrabold text-gray-900">12/04/2025  10:00 AM</span>
            </div>
            <div className="flex justify-between items-start pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Remarks</span>
              <span className="text-sm font-medium text-gray-900 text-right max-w-[200px]">Customer needs reminder for next service and filter replacement.</span>
            </div>
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Next Followup Date</span>
              <span className="text-sm font-bold text-gray-900">12/10/2025</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-[13px] font-bold text-gray-600">Notification Sent</span>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600">Yes</span>
                <span className="text-[11px] font-medium text-gray-400">(SMS + WhatsApp)</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-50 md:col-span-1">
              <span className="text-[13px] font-bold text-gray-600">Created By</span>
              <span className="text-sm font-bold text-gray-900">Admin</span>
            </div>
          </div>
        </div>

        {/* Followup Timeline */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center gap-2 mb-8 border-b border-gray-50 pb-4">
            <Clock className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-bold text-gray-900">Followup Timeline</h2>
          </div>
          
          <div className="relative border-l-2 border-gray-100 ml-4 space-y-8 pb-4">
            
            <div className="relative pl-8">
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center text-white shadow-sm">
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Followup created</h4>
                  <p className="text-[13px] font-medium text-gray-500 mt-0.5">12/04/2025 09:45 AM</p>
                </div>
                <span className="text-[11px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">By Admin</span>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center text-white shadow-sm">
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Notification sent (SMS + WhatsApp)</h4>
                  <p className="text-[13px] font-medium text-gray-500 mt-0.5">12/04/2025 10:00 AM</p>
                </div>
                <span className="text-[11px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">By System</span>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-amber-500 border-4 border-white flex items-center justify-center text-white shadow-sm">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Customer response</h4>
                  <p className="text-[13px] font-medium text-primary-600 mt-0.5">Waiting for customer confirmation.</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center text-gray-400 shadow-sm">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-gray-500">Next followup</h4>
                  <p className="text-[13px] font-medium text-gray-400 mt-0.5">12/10/2025 10:00 AM</p>
                </div>
                <span className="text-[11px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">Scheduled</span>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-50 pb-4">
            <FileText className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
              <MessageSquare className="w-4 h-4" /> Send Reminder
            </button>
            <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-emerald-500/20 hover:shadow-md hover:shadow-emerald-500/30">
              <MessageSquare className="w-4 h-4" /> Send WhatsApp
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-primary-600 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
              <PhoneCall className="w-4 h-4" /> Call Customer
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-primary-600 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
              <Calendar className="w-4 h-4" /> Reschedule
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
