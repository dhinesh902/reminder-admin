import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Edit, Trash2, Shield, Package, ShoppingCart, IndianRupee, Bell, AlertCircle
} from 'lucide-react';

export function ProductDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Details');

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
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1">Product Details</h1>
            <p className="text-sm text-gray-500 font-medium">View and manage product information, stock and pricing.</p>
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

      {/* Top Product Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* Left: Info */}
          <div className="flex items-start gap-8">
            <div className="w-40 h-40 bg-gray-50 rounded-2xl flex items-center justify-center p-4 border border-gray-100 shrink-0">
              {/* Product placeholder image */}
              <img src="https://via.placeholder.com/150/f9fafb/6366f1?text=RO+Filter" alt="Product" className="w-full h-full object-contain mix-blend-multiply opacity-50" />
            </div>
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-extrabold text-gray-900">RO Membrane</h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    Active
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-y-2 gap-x-4 text-sm">
                <span className="text-gray-500 font-medium">Product ID</span>
                <span className="font-bold text-gray-900">: PRD-001</span>

                <span className="text-gray-500 font-medium">Category</span>
                <span className="font-bold text-gray-900">: Filter</span>

                <span className="text-gray-500 font-medium">Brand</span>
                <span className="font-bold text-gray-900">: AquaPure</span>

                <span className="text-gray-500 font-medium">Model No.</span>
                <span className="font-bold text-gray-900">: AQUA-RO-100</span>

                <span className="text-gray-500 font-medium">Warranty</span>
                <span className="font-bold text-gray-900">: 1 Year</span>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col sm:flex-row gap-4 lg:min-w-[320px] pt-2">
            <div className="flex-1 space-y-4">
              <div>
                <p className="text-[13px] font-bold text-gray-500 mb-1">Selling Price</p>
                <p className="text-2xl font-extrabold text-gray-900">₹ 2,499</p>
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-500 mb-1">Purchase Price</p>
                <p className="text-lg font-bold text-gray-900">₹ 1,800</p>
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-500 mb-1">Current Stock</p>
                <div className="flex items-baseline gap-1 text-gray-900">
                  <p className="text-2xl font-extrabold">25</p>
                </div>
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-500 mb-1">Unit</p>
                <p className="text-sm font-bold text-gray-900">Piece</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Content area */}
      <div className="space-y-6">

        {/* Product Description */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-4">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Product Description</h2>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors">
              <Edit className="w-3.5 h-3.5" /> Edit
            </button>
          </div>
          <p className="text-sm font-medium text-gray-900 leading-relaxed max-w-4xl bg-gray-50/50 p-4 rounded-xl border border-gray-100">
            High quality RO membrane for domestic water purifiers. Provides excellent filtration and removes harmful impurities, bacteria and dissolved solids.
          </p>
        </div>

        {/* Middle 2 cols: Specs & Stock */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {/* Specifications */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
            <div className="flex items-center mb-6 gap-2 border-b border-gray-50 pb-4">
              <Shield className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Specifications</h2>
            </div>

            <div className="space-y-0">
              <div className="grid grid-cols-2 py-3 border-b border-gray-50">
                <span className="text-[13px] font-bold text-gray-500">Parameter</span>
                <span className="text-[13px] font-bold text-gray-500">Value</span>
              </div>
              <div className="grid grid-cols-2 py-3 border-b border-gray-50">
                <span className="text-sm font-medium text-gray-600">Material</span>
                <span className="text-sm font-bold text-gray-900">Thin Film Composite (TFC)</span>
              </div>
              <div className="grid grid-cols-2 py-3 border-b border-gray-50">
                <span className="text-sm font-medium text-gray-600">Capacity</span>
                <span className="text-sm font-bold text-gray-900">50 GPD</span>
              </div>
              <div className="grid grid-cols-2 py-3 border-b border-gray-50">
                <span className="text-sm font-medium text-gray-600">Usage</span>
                <span className="text-sm font-bold text-gray-900">Domestic RO Purifier</span>
              </div>
              <div className="grid grid-cols-2 py-3 border-b border-gray-50">
                <span className="text-sm font-medium text-gray-600">Dimensions</span>
                <span className="text-sm font-bold text-gray-900">11.5 x 1.75 inch</span>
              </div>
              <div className="grid grid-cols-2 py-3">
                <span className="text-sm font-medium text-gray-600">Color</span>
                <span className="text-sm font-bold text-gray-900">White & Blue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
