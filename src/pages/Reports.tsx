import React from 'react';
import { 
  Download, Calendar, IndianRupee, FileText, Users, Clock, ArrowUp, ArrowDown, ArrowRight
} from 'lucide-react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';

export function Reports() {
  const revenueData = [
    { name: 'Apr 1', value: 0 },
    { name: 'Apr 8', value: 12000 },
    { name: 'Apr 15', value: 25000 },
    { name: 'Apr 22', value: 18000 },
    { name: 'Apr 29', value: 32000 },
    { name: 'May 6', value: 25000 },
    { name: 'May 13', value: 45000 },
    { name: 'May 20', value: 38000 },
    { name: 'May 27', value: 58000 },
  ];

  const paymentMethodsData = [
    { name: 'UPI', value: 52, color: '#3b82f6' }, // Blue
    { name: 'Card', value: 24, color: '#10b981' }, // Green
    { name: 'Cash', value: 16, color: '#f59e0b' }, // Yellow
    { name: 'Others', value: 8, color: '#8b5cf6' }, // Purple
  ];

  const serviceRevenueData = [
    { name: 'RO Service', value: 16800, color: '#3b82f6' },
    { name: 'Filter Replace', value: 11250, color: '#10b981' },
    { name: 'UV Lamp', value: 8400, color: '#f59e0b' },
    { name: 'Membrane Clean', value: 6300, color: '#8b5cf6' },
    { name: 'Others', value: 4500, color: '#06b6d4' },
  ];

  const topCustomers = [
    { id: 1, name: 'Rohit Sharma', amount: '7,492' },
    { id: 2, name: 'Priya Nair', amount: '6,598' },
    { id: 3, name: 'Amit Verma', amount: '5,397' },
    { id: 4, name: 'Sneha Iyer', amount: '4,997' },
    { id: 5, name: 'Vikram Singh', amount: '3,996' },
  ];

  const recentPayments = [
    { id: 'PAY-00123', customer: 'Rohit Sharma', invoice: 'INV-00124', amount: '2,498', method: 'UPI', status: 'Paid', date: '31/05/2025' },
    { id: 'PAY-00122', customer: 'Priya Nair', invoice: 'INV-00123', amount: '3,199', method: 'Card', status: 'Paid', date: '30/05/2025' },
    { id: 'PAY-00121', customer: 'Amit Verma', invoice: 'INV-00122', amount: '1,799', method: 'Cash', status: 'Paid', date: '29/05/2025' },
    { id: 'PAY-00120', customer: 'Sneha Iyer', invoice: 'INV-00121', amount: '2,999', method: 'UPI', status: 'Pending', date: '28/05/2025' },
    { id: 'PAY-00119', customer: 'Vikram Singh', invoice: 'INV-00120', amount: '1,499', method: 'Card', status: 'Paid', date: '27/05/2025' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Paid':
        return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-bold bg-emerald-50 text-emerald-600">Paid</span>;
      case 'Pending':
        return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-bold bg-amber-50 text-amber-600">Pending</span>;
      case 'Failed':
        return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-bold bg-rose-50 text-rose-600">Failed</span>;
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">Reports</h1>
          <p className="text-sm text-gray-500 font-medium mb-4">Get insights and analytics about your business.</p>
          
          <div className="relative inline-block">
            <Calendar className="w-4 h-4 text-primary-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select className="bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl pl-9 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors cursor-pointer appearance-none min-w-[240px]">
              <option>01/04/2025 - 31/05/2025</option>
              <option>01/03/2025 - 31/03/2025</option>
            </select>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30">
          <Download className="w-4 h-4" /> Download Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-shadow">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
            <IndianRupee className="w-5 h-5" />
          </div>
          <p className="text-[13px] text-blue-900 font-bold mb-1">Total Revenue</p>
          <h3 className="text-2xl font-extrabold text-blue-900 mb-2">₹ 48,750</h3>
          <p className="text-xs font-bold text-emerald-500 flex items-center gap-1">
            <ArrowUp className="w-3 h-3" /> 12% vs last period
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-shadow">
          <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
            <FileText className="w-5 h-5" />
          </div>
          <p className="text-[13px] text-blue-900 font-bold mb-1">Total Invoices</p>
          <h3 className="text-2xl font-extrabold text-blue-900 mb-2">24</h3>
          <p className="text-xs font-bold text-emerald-500 flex items-center gap-1">
            <ArrowUp className="w-3 h-3" /> 8% vs last period
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-shadow">
          <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
            <Users className="w-5 h-5" />
          </div>
          <p className="text-[13px] text-blue-900 font-bold mb-1">Total Customers</p>
          <h3 className="text-2xl font-extrabold text-blue-900 mb-2">16</h3>
          <p className="text-xs font-bold text-emerald-500 flex items-center gap-1">
            <ArrowUp className="w-3 h-3" /> 6% vs last period
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-shadow">
          <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-5 h-5" />
          </div>
          <p className="text-[13px] text-blue-900 font-bold mb-1">Pending Payments</p>
          <h3 className="text-2xl font-extrabold text-blue-900 mb-2">5</h3>
          <p className="text-xs font-bold text-rose-500 flex items-center gap-1">
            <ArrowDown className="w-3 h-3" /> 2% vs last period
          </p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Revenue Overview Line Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-extrabold text-blue-900">Revenue Overview</h3>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-500">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Revenue
            </div>
          </div>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280', fontWeight: 600 }} tickFormatter={(value) => `₹${value/1000}K`} />
                <CartesianGrid vertical={false} stroke="#f3f4f6" />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  formatter={(value) => [`₹ ${value}`, 'Revenue']}
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment Methods Doughnut */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
          <h3 className="text-base font-extrabold text-blue-900 mb-6">Payment Methods</h3>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-between gap-6">
            <div className="relative w-[160px] h-[160px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={paymentMethodsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    dataKey="value"
                    stroke="none"
                  >
                    {paymentMethodsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                    formatter={(value) => [`${value}%`]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-extrabold text-blue-900">24</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase text-center leading-tight">Total<br/>Payments</span>
              </div>
            </div>
            
            <div className="flex-1 w-full space-y-3">
              {paymentMethodsData.map((method, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: method.color }}></div>
                    <span className="text-xs font-bold text-gray-700">{method.name}</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500">{method.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tables & Bar Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Top Customers Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden flex flex-col">
          <div className="p-5 border-b border-gray-50">
            <h3 className="text-base font-extrabold text-blue-900">Top Customers</h3>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-5 py-3 text-xs font-extrabold text-blue-900 w-12">#</th>
                  <th className="px-5 py-3 text-xs font-extrabold text-blue-900">Customer Name</th>
                  <th className="px-5 py-3 text-xs font-extrabold text-blue-900 text-right">Total Paid (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {topCustomers.map((cust) => (
                  <tr key={cust.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-5 py-3 text-sm font-bold text-gray-400">{cust.id}</td>
                    <td className="px-5 py-3 text-sm font-bold text-blue-600">{cust.name}</td>
                    <td className="px-5 py-3 text-sm font-bold text-gray-900 text-right">{cust.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Service-wise Revenue Bar Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
          <h3 className="text-base font-extrabold text-blue-900 mb-6">Service-wise Revenue</h3>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serviceRevenueData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280', fontWeight: 600 }} dy={10} interval={0} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6b7280', fontWeight: 600 }} tickFormatter={(value) => `₹${value/1000}K`} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  formatter={(value) => [`₹ ${value}`, 'Revenue']}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={40}>
                  {serviceRevenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Payments Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
        <div className="p-5 border-b border-gray-50">
          <h3 className="text-base font-extrabold text-blue-900">Recent Payments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-extrabold text-blue-900">Payment ID</th>
                <th className="px-6 py-4 text-xs font-extrabold text-blue-900">Customer Name</th>
                <th className="px-6 py-4 text-xs font-extrabold text-blue-900">Invoice No.</th>
                <th className="px-6 py-4 text-xs font-extrabold text-blue-900">Amount (₹)</th>
                <th className="px-6 py-4 text-xs font-extrabold text-blue-900">Method</th>
                <th className="px-6 py-4 text-xs font-extrabold text-blue-900">Status</th>
                <th className="px-6 py-4 text-xs font-extrabold text-blue-900">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentPayments.map((payment, i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-blue-500">{payment.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-700">{payment.customer}</td>
                  <td className="px-6 py-4 text-sm font-bold text-blue-500">{payment.invoice}</td>
                  <td className="px-6 py-4 text-sm font-extrabold text-gray-900">₹ {payment.amount}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-500">{payment.method}</td>
                  <td className="px-6 py-4">
                    {getStatusBadge(payment.status)}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-500">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-50 flex justify-between items-center bg-white">
          <p className="text-sm text-gray-500 font-bold">Showing 1-5 of 24 payments</p>
          <button className="flex items-center gap-1.5 text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-colors shadow-sm">
            View All Payments <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
    </div>
  );
}