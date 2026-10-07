import React, { useState } from 'react';
import {
  Settings as SettingsIcon, Building2, MessageSquare, Mail, Bell, CreditCard, Users, Download, Database, Image as ImageIcon, CheckCircle
} from 'lucide-react';

export function Settings() {

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <SettingsIcon className="w-8 h-8 text-blue-900" />
        <div>
          <h1 className="text-2xl font-extrabold text-blue-900 tracking-tight mb-1">Settings</h1>
          <p className="text-sm text-gray-500 font-medium">Manage your application settings and preferences.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Content Area */}
        <div className="flex-1 space-y-6">

          {/* Company Details */}
          <div className="bg-white rounded-2xl border border-blue-50 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-blue-900" />
              <h3 className="text-base font-extrabold text-blue-900">Company Details</h3>
            </div>
            <p className="text-xs text-blue-500 font-medium mb-6">Update your business information.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-blue-900">Business Name <span className="text-rose-500">*</span></label>
                <input type="text" defaultValue="RO Water Solutions" className="w-full bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-blue-900">Phone Number <span className="text-rose-500">*</span></label>
                <input type="text" defaultValue="+91 98765 43210" className="w-full bg-white border border-gray-200 text-blue-500 font-bold text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-blue-900">Email Address <span className="text-rose-500">*</span></label>
                <input type="email" defaultValue="info@rowater.in" className="w-full bg-white border border-gray-200 text-blue-500 font-bold text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-blue-900">Address <span className="text-rose-500">*</span></label>
                <textarea rows={2} defaultValue="Shop No. 12, Green Park,\nBangalore, Karnataka - 560001" className="w-full bg-white border border-gray-200 text-gray-500 font-medium text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none"></textarea>
              </div>
            </div>
          </div>

          {/* Save Changes */}
          <div className="bg-white rounded-2xl border border-blue-50 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-blue-900 mb-0.5">Save Changes</h3>
                <p className="text-xs font-medium text-blue-500">Make sure to save your changes before leaving.</p>
              </div>
            </div>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/30">
              <CheckCircle className="w-4 h-4" /> Save Settings
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}