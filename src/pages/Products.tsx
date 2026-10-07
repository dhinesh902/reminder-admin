import React, { useState } from 'react';
import { 
  Package, Plus, Search, Eye, Edit2, Trash2, 
  CheckCircle2, AlertCircle, PackageMinus, ArrowLeft, 
  UploadCloud, X, Bold, Italic, Underline, List, ListOrdered, Save,
  Image as ImageIcon
} from 'lucide-react';

export function Products() {
  const [showForm, setShowForm] = useState(false);

  // Mock Data for List
  const products = [
    { id: 1, name: 'Sediment Filter', sku: 'SF-001', category: 'Filters', price: '499', stock: 25, status: 'Active' },
    { id: 2, name: 'Activated Carbon Filter', sku: 'ACF-002', category: 'Filters', price: '799', stock: 18, status: 'Active' },
    { id: 3, name: 'RO Membrane', sku: 'RO-003', category: 'Membranes', price: '2,499', stock: 7, status: 'Low Stock' },
    { id: 4, name: 'UV Lamp', sku: 'UV-004', category: 'UV', price: '1,299', stock: 12, status: 'Active' },
    { id: 5, name: 'Post Carbon Filter', sku: 'PCF-005', category: 'Filters', price: '699', stock: 15, status: 'Active' },
    { id: 6, name: 'Pressure Tank', sku: 'PT-006', category: 'Tanks', price: '1,899', stock: 5, status: 'Low Stock' },
    { id: 7, name: 'RO Controller', sku: 'RC-007', category: 'Electronics', price: '1,199', stock: 20, status: 'Active' },
    { id: 8, name: 'Service Kit', sku: 'SK-008', category: 'Accessories', price: '499', stock: 30, status: 'Active' },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'Active') {
      return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Active</span>;
    }
    if (status === 'Low Stock') {
      return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100">Low Stock</span>;
    }
    return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600 border border-rose-100">Out of Stock</span>;
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Filters': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-blue-50 text-blue-600">Filters</span>;
      case 'Membranes': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-purple-50 text-purple-600">Membranes</span>;
      case 'UV': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-teal-50 text-teal-600">UV</span>;
      case 'Tanks': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600">Tanks</span>;
      case 'Electronics': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-indigo-50 text-indigo-600">Electronics</span>;
      case 'Accessories': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-gray-100 text-gray-600">Accessories</span>;
      default: return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-gray-100 text-gray-600">{category}</span>;
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
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Products</h1>
                <p className="text-sm text-gray-500 font-medium">Manage your RO products and supplies.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30"
            >
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>

          {/* Filters & Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* Filters */}
            <div className="lg:col-span-12 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
              <div className="relative w-full sm:w-[360px]">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search by product name, category..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="flex w-full sm:w-auto items-center gap-3">
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[150px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Categories</option>
                  <option>Filters</option>
                  <option>Membranes</option>
                  <option>Tanks</option>
                </select>
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Out of Stock</option>
                </select>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Total Products</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">24</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Active Products</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">20</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Out of Stock</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">2</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
                <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <PackageMinus className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Low Stock</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-1">3</h3>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 w-12 text-center">
                      <input type="checkbox" className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 border-gray-300 cursor-pointer" />
                    </th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700 w-16">Image</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Product Name</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Category</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Price (₹)</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Stock</th>
                    <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-700 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4 text-center">
                        <input type="checkbox" className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 border-gray-300 cursor-pointer" />
                      </td>
                      <td className="px-4 py-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                          <ImageIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{product.name}</span>
                          <span className="text-xs font-medium text-gray-500">SKU: {product.sku}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        {getCategoryBadge(product.category)}
                      </td>
                      <td className="px-4 py-4 text-sm font-bold text-gray-900">₹ {product.price}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-600">{product.stock}</td>
                      <td className="px-4 py-4">
                        {getStatusBadge(product.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button className="text-primary-500 hover:text-primary-700 transition-colors"><Eye className="w-4 h-4" /></button>
                          <button className="text-primary-500 hover:text-primary-700 transition-colors"><Edit2 className="w-4 h-4" /></button>
                          <button className="text-rose-500 hover:text-rose-700 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
              <p className="text-sm text-gray-500 font-medium">Showing 1-8 of 24 products</p>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold shadow-sm shadow-primary-600/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ================= ADD FORM VIEW =================
        <div className="space-y-6 max-w-5xl">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <button 
              onClick={() => setShowForm(false)}
              className="w-10 h-10 bg-white border border-gray-200 text-gray-600 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Add New Product</h1>
              <p className="text-sm text-gray-500 font-medium">Fill in the product details to add a new item to your inventory.</p>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Basic Information */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Basic Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Product Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter product name" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Price (₹) <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter price" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Category <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Package className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <select className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
                      <option value="" disabled selected className="text-gray-400">Select category</option>
                      <option>Filters</option>
                      <option>Membranes</option>
                      <option>Tanks</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">Stock Quantity <span className="text-red-500">*</span></label>
                  <input type="number" placeholder="Enter quantity" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-700">SKU / Product Code <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter SKU (e.g., SF-001)" className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors placeholder:text-gray-400" />
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Product Image</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="w-full h-48 border-2 border-dashed border-primary-200 bg-primary-50/50 rounded-2xl flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:bg-primary-50 transition-colors">
                  <UploadCloud className="w-10 h-10 text-primary-500 mb-3" />
                  <p className="text-sm font-bold text-primary-700 mb-1">Click to upload <span className="font-medium text-gray-500">or drag and drop</span></p>
                  <p className="text-xs font-medium text-gray-400">Supports JPG, PNG (Max 2MB)</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[13px] font-bold text-gray-700">Image Preview</p>
                  <div className="relative w-40 h-40 rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center">
                    <button className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 shadow-sm transition-colors">
                      <X className="w-3 h-3" />
                    </button>
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                      <Package className="w-8 h-8 text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Status */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="space-y-6">
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">Description</h3>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-50/50 border-b border-gray-200 p-2 flex items-center gap-1">
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"><Bold className="w-4 h-4" /></button>
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"><Italic className="w-4 h-4" /></button>
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"><Underline className="w-4 h-4" /></button>
                      <div className="w-px h-4 bg-gray-300 mx-2"></div>
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"><List className="w-4 h-4" /></button>
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"><ListOrdered className="w-4 h-4" /></button>
                    </div>
                    <textarea 
                      rows={4}
                      placeholder="Enter product description..."
                      className="w-full bg-white text-gray-700 text-sm p-4 outline-none resize-none placeholder:text-gray-400"
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 pt-4 border-t border-gray-100">
                  <div className="space-y-3">
                    <h3 className="text-[13px] font-bold text-gray-700">Status</h3>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="radio" name="status" defaultChecked className="peer w-5 h-5 opacity-0 absolute cursor-pointer" />
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center peer-checked:border-primary-600 transition-colors group-hover:border-primary-400">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary-600 scale-0 peer-checked:scale-100 transition-transform"></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Active</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="radio" name="status" className="peer w-5 h-5 opacity-0 absolute cursor-pointer" />
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center peer-checked:border-primary-600 transition-colors group-hover:border-primary-400">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary-600 scale-0 peer-checked:scale-100 transition-transform"></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Inactive</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-gray-700">Notes <span className="font-medium text-gray-400">(Optional)</span></label>
                    <textarea 
                      rows={2}
                      placeholder="Add any additional notes..."
                      className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none placeholder:text-gray-400"
                    ></textarea>
                  </div>
                </div>

              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
              <button 
                onClick={() => setShowForm(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
                <Save className="w-4 h-4" /> Save Product
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}