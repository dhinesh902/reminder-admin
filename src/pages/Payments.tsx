import React from 'react';
import { 
  CreditCard, Plus, Search, Calendar, Eye, Download, FileText, CheckCircle, Clock, XCircle
} from 'lucide-react';

export function Payments() {
  const payments = [
    { id: 'PAY-00123', customer: 'Rohit Sharma', invoice: 'INV-00124', amount: '2,498', method: 'UPI', status: 'Paid', date: '31/05/2025' },
    { id: 'PAY-00122', customer: 'Priya Nair', invoice: 'INV-00123', amount: '3,199', method: 'Card', status: 'Paid', date: '30/05/2025' },
    { id: 'PAY-00121', customer: 'Amit Verma', invoice: 'INV-00122', amount: '1,799', method: 'Cash', status: 'Paid', date: '29/05/2025' },
    { id: 'PAY-00120', customer: 'Sneha Iyer', invoice: 'INV-00121', amount: '2,999', method: 'UPI', status: 'Pending', date: '28/05/2025' },
    { id: 'PAY-00119', customer: 'Vikram Singh', invoice: 'INV-00120', amount: '1,499', method: 'Card', status: 'Paid', date: '27/05/2025' },
    { id: 'PAY-00118', customer: 'Neha Joshi', invoice: 'INV-00118', amount: '2,699', method: 'UPI', status: 'Paid', date: '25/05/2025' },
    { id: 'PAY-00117', customer: 'Karan Mehta', invoice: 'INV-00117', amount: '1,899', method: 'Cash', status: 'Failed', date: '22/05/2025' },
    { id: 'PAY-00116', customer: 'Pooja Desai', invoice: 'INV-00116', amount: '3,499', method: 'UPI', status: 'Paid', date: '20/05/2025' },
    { id: 'PAY-00115', customer: 'Ramesh Kumar', invoice: 'INV-00115', amount: '2,199', method: 'Card', status: 'Pending', date: '18/05/2025' },
    { id: 'PAY-00114', customer: 'Anita Sharma', invoice: 'INV-00114', amount: '2,799', method: 'Cash', status: 'Paid', date: '16/05/2025' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Paid':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Paid</span>;
      case 'Pending':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600 border border-amber-100">Pending</span>;
      case 'Failed':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600 border border-rose-100">Failed</span>;
      default:
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-gray-50 text-gray-600 border border-gray-100">{status}</span>;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-100 text-primary-600 flex items-center justify-center rounded-xl">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Payments</h1>
            <p className="text-sm text-gray-500 font-medium">View and manage all customer payments.</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
          <Plus className="w-4 h-4" /> Add Payment
        </button>
      </div>

      {/* Filters & Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Filters */}
        <div className="lg:col-span-12 flex flex-col xl:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
          <div className="relative w-full sm:w-[360px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by customer name, invoice no., or reference..." 
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
            />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap w-full xl:w-auto items-center gap-3">
            <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[160px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
              <option>All Payment Methods</option>
              <option>UPI</option>
              <option>Card</option>
              <option>Cash</option>
            </select>
            <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 cursor-pointer min-w-[140px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]">
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
            <div className="relative min-w-[220px]">
              <Calendar className="w-4 h-4 text-primary-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input 
                type="text" 
                defaultValue="01/04/2025 - 31/05/2025" 
                className="w-full bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl pl-9 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors" 
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 font-medium">Total Payments</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-1">₹ 48,750</h3>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 font-medium">Paid</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-1">₹ 41,250</h3>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
            <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 font-medium">Pending</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-1">₹ 5,000</h3>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
            <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-lg flex items-center justify-center mb-4">
              <XCircle className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 font-medium">Failed</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-1">₹ 2,500</h3>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 w-12 text-center text-[13px] font-bold text-gray-700">S.No</th>
                <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Payment ID</th>
                <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Customer Name</th>
                <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Invoice No.</th>
                <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Amount (₹)</th>
                <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Method</th>
                <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Status</th>
                <th className="px-4 py-4 text-[13px] font-bold text-gray-700">Payment Date</th>
                <th className="px-6 py-4 text-[13px] font-bold text-gray-700 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {payments.map((payment, i) => (
                <tr key={payment.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                    {i + 1}
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-primary-600">{payment.id}</td>
                  <td className="px-4 py-4 text-sm font-bold text-gray-900">{payment.customer}</td>
                  <td className="px-4 py-4 text-sm font-medium text-primary-600">{payment.invoice}</td>
                  <td className="px-4 py-4 text-sm font-bold text-gray-900">₹ {payment.amount}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-600">{payment.method}</td>
                  <td className="px-4 py-4">
                    {getStatusBadge(payment.status)}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-600">{payment.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-primary-500 hover:text-primary-700 transition-colors"><Eye className="w-4 h-4" /></button>
                      <button className="text-primary-500 hover:text-primary-700 transition-colors"><Download className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
          <p className="text-sm text-gray-500 font-medium">Showing 1-10 of 28 payments</p>
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
  );
}