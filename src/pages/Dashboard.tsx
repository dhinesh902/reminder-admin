import React from 'react';
import { 
  Users, Bell, Server, Calendar, 
  ArrowUp, 
  ArrowRight, Send, UserPlus, Droplets, BarChart3
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

export function Dashboard() {
  const summaryCards = [
    { title: 'Total Users', value: '124', icon: Users, trend: '+12%', color: 'blue' },
    { title: 'Active Reminders', value: '28', icon: Bell, trend: '+8%', color: 'green' },
    { title: 'RO Systems', value: '18', icon: Server, trend: '+5%', color: 'purple' },
    { title: 'Overdue Reminders', value: '7', icon: Calendar, trend: '↑ 3%', color: 'orange' },
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
    { name: 'Offline', value: 2, color: '#ef4444' },
  ];

  const quickActions = [
    { title: 'Send Reminder', desc: 'Notify users about pending tasks', icon: Send, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Add User', desc: 'Register new user', icon: UserPlus, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Add RO System', desc: 'Configure new RO system', icon: Droplets, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'View Reports', desc: 'Check detailed analytics', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto p-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-gray-900 tracking-tight">Dashboard</h1>
          <p className="text-[15px] text-gray-500 mt-1">Overview of RO water reminders and system status</p>
        </div>
        <button className="flex items-center gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
          <Calendar className="w-[18px] h-[18px] text-gray-400" />
          May 31, 2025
          <ChevronDownIcon className="w-4 h-4 text-gray-400 ml-1" />
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                card.color === 'blue' ? 'bg-blue-50 text-blue-500' :
                card.color === 'green' ? 'bg-emerald-50 text-emerald-500' :
                card.color === 'purple' ? 'bg-purple-50 text-purple-500' :
                'bg-orange-50 text-orange-500'
              }`}>
                <card.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-gray-900">{card.value}</h3>
              <p className="text-[15px] text-gray-500 font-medium mt-1">{card.title}</p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-medium">
              <span className={`flex items-center ${card.color === 'orange' ? 'text-red-500' : 'text-emerald-500'}`}>
                {card.trend.includes('↑') ? card.trend : <><ArrowUp className="w-3 h-3 mr-0.5" /> {card.trend}</>}
              </span>
              <span className="text-gray-400">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts & Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reminder Overview Bar Chart */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm lg:col-span-1.5 xl:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[17px] font-bold text-gray-900">Reminder Overview</h3>
            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-600"></span>
                <span className="text-gray-500">Completed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-200"></span>
                <span className="text-gray-500">Pending</span>
              </div>
            </div>
          </div>
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={12}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} dx={-10} />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="Completed" fill="#2563eb" radius={[2, 2, 0, 0]} />
                <Bar dataKey="Pending" fill="#bfdbfe" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Reminders */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm lg:col-span-1.5 xl:col-span-1 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[17px] font-bold text-gray-900">Recent Reminders</h3>
            <button className="text-primary-600 text-xs font-semibold hover:text-primary-700">View All</button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead>
                <tr className="text-gray-400 font-semibold text-xs border-b border-gray-100">
                  <th className="pb-3 font-medium">User</th>
                  <th className="pb-3 font-medium">Task</th>
                  <th className="pb-3 font-medium">Due Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50/80">
                {recentReminders.map((row) => (
                  <tr key={row.id}>
                    <td className="py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary-600">
                          <UserIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold text-gray-900 text-[13px]">{row.user}</span>
                      </div>
                    </td>
                    <td className="py-3.5 text-gray-500 text-[13px]">{row.task}</td>
                    <td className="py-3.5 text-gray-500 text-[13px]">{row.date}</td>
                    <td className="py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold ${
                        row.status === 'Completed' ? 'bg-emerald-100/60 text-emerald-600' :
                        row.status === 'Pending' ? 'bg-orange-100/60 text-orange-600' :
                        'bg-red-100/60 text-red-600'
                      }`}>
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
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-[17px] font-bold text-gray-900 mb-6">RO System Status</h3>
          <div className="flex items-center justify-between h-[200px]">
            <div className="h-full w-[160px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={75}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-gray-900">18</span>
                <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Total Systems</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {pieData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-[13px] font-medium text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-[13px] font-bold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm lg:col-span-2">
          <h3 className="text-[17px] font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map((action, i) => (
              <div key={i} className="group flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md hover:shadow-primary-600/5 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${action.bg} ${action.color}`}>
                    <action.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{action.title}</h4>
                    <p className="text-[12px] text-gray-500 mt-0.5">{action.desc}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-600 transition-colors" />
              </div>
            ))}
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