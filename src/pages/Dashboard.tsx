import React from 'react';
import { 
  Users, Bell, Server, Calendar, 
  ArrowUp, ArrowRight, Send, UserPlus, Droplets, BarChart3
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

export function Dashboard() {
  const summaryCards = [
    { title: 'Total Users', value: '124', icon: Users, trend: '+12%', color: 'blue', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/20' },
    { title: 'Active Reminders', value: '28', icon: Bell, trend: '+8%', color: 'emerald', gradient: 'from-emerald-400 to-emerald-500', shadow: 'shadow-emerald-500/20' },
    { title: 'RO Systems', value: '18', icon: Server, trend: '+5%', color: 'purple', gradient: 'from-purple-500 to-purple-600', shadow: 'shadow-purple-500/20' },
    { title: 'Overdue Reminders', value: '7', icon: Calendar, trend: '↑ 3%', color: 'rose', gradient: 'from-rose-500 to-rose-600', shadow: 'shadow-rose-500/20' },
  ];

  const recentReminders = [
    { id: 1, user: 'Rohit Sharma', task: 'Change Filter', date: 'May 31, 2025', status: 'Pending' },
    { id: 2, user: 'Priya Nair', task: 'Clean RO Tank', date: 'May 30, 2025', status: 'Completed' },
    { id: 3, user: 'Amit Verma', task: 'Replace Filter', date: 'May 29, 2025', status: 'Completed' },
    { id: 4, user: 'Sneha Iyer', task: 'Check TDS', date: 'May 28, 2025', status: 'Pending' },
    { id: 5, user: 'Vikram Singh', task: 'Service RO', date: 'May 27, 2025', status: 'Overdue' },
  ];

  const barData = [
    { name: 'May 25', Completed: 22, Pending: 10 },
    { name: 'May 26', Completed: 20, Pending: 12 },
    { name: 'May 27', Completed: 17, Pending: 10 },
    { name: 'May 28', Completed: 22, Pending: 8 },
    { name: 'May 29', Completed: 16, Pending: 10 },
    { name: 'May 30', Completed: 17, Pending: 9 },
    { name: 'May 31', Completed: 21, Pending: 11 },
  ];

  const pieData = [
    { name: 'Online', value: 14, color: '#10b981' },
    { name: 'Maintenance', value: 2, color: '#f59e0b' },
    { name: 'Offline', value: 2, color: '#f43f5e' },
  ];

  const quickActions = [
    { title: 'Send Reminder', desc: 'Notify users about pending tasks', icon: Send, iconColor: 'text-blue-600', bg: 'bg-blue-50/80 group-hover:bg-blue-100 transition-colors' },
    { title: 'Add User', desc: 'Register new user', icon: UserPlus, iconColor: 'text-emerald-600', bg: 'bg-emerald-50/80 group-hover:bg-emerald-100 transition-colors' },
    { title: 'Add RO System', desc: 'Configure new RO system', icon: Droplets, iconColor: 'text-purple-600', bg: 'bg-purple-50/80 group-hover:bg-purple-100 transition-colors' },
    { title: 'View Reports', desc: 'Check detailed analytics', icon: BarChart3, iconColor: 'text-orange-600', bg: 'bg-orange-50/80 group-hover:bg-orange-100 transition-colors' },
  ];

  return (
    <div className="space-y-6 lg:space-y-8 w-full pb-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
        <div>
          <h1 className="text-[32px] font-extrabold text-[#0f172a] tracking-tight leading-tight">Dashboard</h1>
          <p className="text-[15px] text-[#64748b] mt-1.5 font-medium tracking-wide">Overview of RO water reminders and system status</p>
        </div>
        <button className="group flex items-center gap-3 px-5 py-3 bg-white border border-[#e2e8f0] rounded-[10px] text-[14px] font-bold text-[#475569] hover:text-[#0f172a] hover:border-primary-300 hover:shadow-[0_8px_16px_-6px_rgba(37,99,235,0.15)] transition-all">
          <Calendar className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
          May 31, 2025
          <ChevronDownIcon className="w-4 h-4 text-[#94a3b8] ml-1 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, i) => (
          <div key={i} className="group relative bg-white rounded-[10px] p-7 border border-[#f1f5f9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Subtle background glow on hover */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-${card.color}-400/10 rounded-full blur-3xl group-hover:bg-${card.color}-400/20 transition-colors duration-500`}></div>
            
            <div className="flex justify-between items-start relative z-10">
              <div className={`w-[52px] h-[52px] rounded-[10px] bg-gradient-to-br ${card.gradient} shadow-lg ${card.shadow} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <card.icon className="w-[26px] h-[26px] text-white" />
              </div>
              <div className={`px-2.5 py-1 rounded-full text-[12px] font-bold flex items-center gap-1 ${
                card.color === 'rose' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
              }`}>
                {card.trend.includes('↑') ? null : <ArrowUp className="w-[14px] h-[14px]" />}
                {card.trend}
              </div>
            </div>
            
            <div className="mt-6 relative z-10">
              <h3 className="text-[36px] font-extrabold text-[#0f172a] tracking-tight">{card.value}</h3>
              <p className="text-[15px] text-[#64748b] font-semibold mt-1">{card.title}</p>
            </div>
            
            <div className="mt-5 pt-4 border-t border-[#f1f5f9] text-[13px] font-medium text-[#94a3b8] flex items-center relative z-10">
              <span className="truncate">Updated from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Layout Grid - Split into Left and Right columns to fix alignment gaps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT COLUMN: Takes 2/3 of space on large screens */}
        <div className="lg:col-span-2 space-y-8 flex flex-col">
          
          {/* Reminder Overview Bar Chart */}
          <div className="bg-white rounded-[10px] p-7 lg:p-8 border border-[#f1f5f9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex-1">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[20px] font-bold text-[#0f172a]">Reminder Overview</h3>
              <div className="flex items-center gap-5 text-[13px] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-[10px] bg-primary-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></span>
                  <span className="text-[#64748b]">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-[10px] bg-blue-100 border border-blue-200"></span>
                  <span className="text-[#64748b]">Pending</span>
                </div>
              </div>
            </div>
            
            <div className="h-[280px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={16}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.6} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 500 }} dy={15} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 500 }} dx={-15} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', padding: '12px 16px', fontWeight: 600 }}
                    itemStyle={{ fontSize: '14px', paddingBottom: '4px' }}
                  />
                  <Bar dataKey="Completed" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Pending" fill="#dbeafe" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-[10px] p-7 lg:p-8 border border-[#f1f5f9] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-[20px] font-bold text-[#0f172a] mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {quickActions.map((action, i) => (
                <div key={i} className="group relative flex items-center justify-between p-5 rounded-[10px] border border-[#e2e8f0]/60 hover:border-primary-200 hover:shadow-[0_12px_24px_-8px_rgba(37,99,235,0.15)] hover:-translate-y-0.5 bg-white transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Decorative hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-12 h-12 rounded-[10px] flex items-center justify-center ${action.bg} ${action.iconColor}`}>
                      <action.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0f172a] group-hover:text-primary-700 transition-colors">{action.title}</h4>
                      <p className="text-[13px] text-[#64748b] font-medium mt-0.5">{action.desc}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-[10px] bg-gray-50 flex items-center justify-center group-hover:bg-primary-50 transition-colors relative z-10">
                    <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Takes 1/3 of space on large screens */}
        <div className="lg:col-span-1 space-y-8 flex flex-col">
          
          {/* Recent Reminders */}
          <div className="bg-white rounded-[10px] p-7 lg:p-8 border border-[#f1f5f9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[20px] font-bold text-[#0f172a]">Recent Tasks</h3>
              <button className="text-primary-600 text-[13px] font-bold hover:text-primary-700 bg-primary-50 px-3 py-1.5 rounded-lg transition-colors">View All</button>
            </div>
            
            <div className="flex-1 overflow-x-auto -mx-2 px-2 scrollbar-none">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="text-[#94a3b8] font-semibold text-[12px] uppercase tracking-wider border-b border-[#f1f5f9]">
                    <th className="pb-4 font-bold">User</th>
                    <th className="pb-4 font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f8fafc]">
                  {recentReminders.map((row) => (
                    <tr key={row.id} className="hover:bg-[#f8fafc]/50 transition-colors group">
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-[10px] bg-gradient-to-tr from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-primary-600 shrink-0 group-hover:scale-105 transition-transform">
                            <UserIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-[#0f172a] text-[14px]">{row.user}</p>
                            <p className="text-[12px] text-[#64748b] font-medium">{row.task}</p>
                            <p className="text-[12px] text-[#94a3b8] font-medium mt-0.5">{row.date}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-[10px] text-[12px] font-extrabold tracking-wide ${
                          row.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100/50' :
                          row.status === 'Pending' ? 'bg-orange-50 text-orange-600 border border-orange-100/50' :
                          'bg-rose-50 text-rose-600 border border-rose-100/50'
                        }`}>
                          {row.status === 'Completed' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>}
                          {row.status === 'Pending' && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-1.5"></span>}
                          {row.status === 'Overdue' && <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5"></span>}
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RO System Status Donut */}
          <div className="bg-white rounded-[10px] p-7 lg:p-8 border border-[#f1f5f9] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-[20px] font-bold text-[#0f172a] mb-8">System Status</h3>
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="h-[200px] w-[200px] relative group cursor-pointer">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={95}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                      cornerRadius={4}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity outline-none" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-300">
                  <span className="text-[32px] font-extrabold text-[#0f172a] leading-none tracking-tight">18</span>
                  <span className="text-[11px] text-[#64748b] font-bold uppercase tracking-widest mt-1">Systems</span>
                </div>
              </div>
              
              <div className="w-full space-y-4">
                {pieData.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-[10px] shadow-sm" style={{ backgroundColor: item.color }}></span>
                      <span className="text-[14px] font-bold text-[#475569]">{item.name}</span>
                    </div>
                    <span className="text-[15px] font-extrabold text-[#0f172a]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// Helper icons
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}