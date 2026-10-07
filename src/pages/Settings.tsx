import React from 'react';
import {
  Settings as SettingsIcon, Building2, CheckCircle
} from 'lucide-react';

export function Settings() {

  return (
    <div className="w-full space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-primary-100 text-primary-600 flex items-center justify-center rounded-xl">
          <SettingsIcon className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">Settings</h1>
          <p className="text-sm text-gray-500 font-medium">Manage your application settings and preferences.</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Company Details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary-600" /> Company Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-700">Business Name <span className="text-red-500">*</span></label>
              <input type="text" defaultValue="RO Water Solutions" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
              <input type="text" defaultValue="+91 98765 43210" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-700">Email Address <span className="text-red-500">*</span></label>
              <input type="email" defaultValue="info@rowater.in" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-700">Address <span className="text-red-500">*</span></label>
              <textarea rows={2} defaultValue="Shop No. 12, Green Park,\nBangalore, Karnataka - 560001" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"></textarea>
            </div>
          </div>
        </div>

        {/* Form Actions (Save Changes) */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
            <CheckCircle className="w-4 h-4" /> Save Settings
          </button>
        </div>

      </div>
    </div>
  );
}