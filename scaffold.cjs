const fs = require('fs');
const path = require('path');

const root = __dirname;
const src = path.join(root, 'src');

const directories = [
  'components',
  'components/ui',
  'components/layout',
  'pages',
  'services',
  'types',
  'hooks',
  'utils'
];

directories.forEach(dir => {
  fs.mkdirSync(path.join(src, dir), { recursive: true });
});

// Write to files
const files = {
  'types/index.ts': `
export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  status: 'Active' | 'Inactive';
  productsCount: number;
  pendingFollowups: number;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  sellingPrice: number;
  warrantyDays: number;
  serviceIntervalDays: number;
  status: 'Active' | 'Inactive';
}

export interface CustomerProduct {
  id: string;
  customerId: string;
  productId: string;
  serialNumber: string;
  installationDate: string;
  nextServiceDate: string;
  status: 'Active' | 'Inactive';
}

export interface ServiceRecord {
  id: string;
  customerProductId: string;
  serviceType: string;
  technician: string;
  serviceDate: string;
  amount: number;
  paymentStatus: 'Paid' | 'Pending';
  status: 'Completed' | 'Pending' | 'Scheduled' | 'Cancelled';
}

export interface Followup {
  id: string;
  customerId: string;
  type: string;
  date: string;
  assignedStaff: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';
}

export interface Reminder {
  id: string;
  customerId: string;
  productId: string;
  type: string;
  date: string;
  status: 'Scheduled' | 'Sent' | 'Failed' | 'Cancelled';
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerId: string;
  date: string;
  amount: number;
  paymentStatus: 'Paid' | 'Pending' | 'Partial';
}
  `,
  'services/api.ts': `
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
  `,
  'utils/helpers.ts': `
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(date));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
  `,
  'components/ui/Button.tsx': `
import React from 'react';
import { cn } from '../../utils/helpers';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-primary-600 text-white hover:bg-primary-700': variant === 'primary',
            'bg-gray-100 text-gray-900 hover:bg-gray-200': variant === 'secondary',
            'border border-gray-300 bg-transparent hover:bg-gray-50': variant === 'outline',
            'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
            'hover:bg-gray-100 hover:text-gray-900': variant === 'ghost',
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 py-2': size === 'md',
            'h-12 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
  `,
  'components/ui/Card.tsx': `
import React from 'react';
import { cn } from '../../utils/helpers';

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm", className)} {...props} />
  )
)
Card.displayName = "Card"

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

export const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
  )
)
CardTitle.displayName = "CardTitle"

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"
  `,
  'components/ui/Badge.tsx': `
import React from 'react';
import { cn } from '../../utils/helpers';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
      {
        'bg-gray-100 text-gray-800': variant === 'default',
        'bg-green-100 text-green-800': variant === 'success',
        'bg-yellow-100 text-yellow-800': variant === 'warning',
        'bg-red-100 text-red-800': variant === 'danger',
        'bg-blue-100 text-blue-800': variant === 'info',
      },
      className
    )} {...props} />
  );
}
  `,
  'components/ui/Table.tsx': `
import React from 'react';
import { cn } from '../../utils/helpers';

export const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  )
)
Table.displayName = "Table"

export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b bg-gray-50/50", className)} {...props} />
  )
)
TableHeader.displayName = "TableHeader"

export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  )
)
TableBody.displayName = "TableBody"

export const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn("border-b transition-colors hover:bg-gray-50/50 data-[state=selected]:bg-gray-50", className)} {...props} />
  )
)
TableRow.displayName = "TableRow"

export const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th ref={ref} className={cn("h-10 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0", className)} {...props} />
  )
)
TableHead.displayName = "TableHead"

export const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  )
)
TableCell.displayName = "TableCell"
  `,
  'components/layout/Sidebar.tsx': `
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Package, Wrench, Clock, Bell, FileText, CreditCard, UserCircle, Settings, ClipboardList } from 'lucide-react';
import { cn } from '../../utils/helpers';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Customers', path: '/customers', icon: Users },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Services', path: '/services', icon: Wrench },
  { name: 'Follow-ups', path: '/followups', icon: ClipboardList },
  { name: 'Reminders', path: '/reminders', icon: Bell },
  { name: 'Invoices', path: '/invoices', icon: FileText },
  { name: 'Payments', path: '/payments', icon: CreditCard },
  { name: 'Technicians', path: '/technicians', icon: UserCircle },
  { name: 'Reports', path: '/reports', icon: Clock },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export function Sidebar({ isOpen, setSidebarOpen }: { isOpen: boolean, setSidebarOpen: (v: boolean) => void }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 shrink-0 items-center px-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary-600 flex items-center justify-center text-white font-bold">
              RO
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">AquaCare</span>
          </div>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary-50 text-primary-700" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className={cn("w-5 h-5", "opacity-70")} />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
  `,
  'components/layout/Topbar.tsx': `
import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';
import { Button } from '../ui/Button';

export function Topbar({ setSidebarOpen }: { setSidebarOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">Search</label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm bg-transparent outline-none"
            placeholder="Search customers, products, invoices..."
            type="search"
            name="search"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 relative">
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
          </button>

          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

          <div className="flex items-center gap-x-4">
            <button type="button" className="flex items-center gap-x-2 text-sm font-medium text-gray-700">
              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <span className="hidden lg:block">Admin User</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
  `,
  'components/layout/AppLayout.tsx': `
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
  `,
  'pages/Dashboard.tsx': `
import React from 'react';
import { Users, AlertCircle, Wrench, CheckCircle2, TrendingUp, IndianRupee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export function Dashboard() {
  const summaryCards = [
    { title: 'Total Customers', value: '1,248', icon: Users, trend: '+12% from last month' },
    { title: 'Upcoming Services', value: '45', icon: Wrench, trend: 'Next 7 days' },
    { title: 'Pending Follow-ups', value: '12', icon: AlertCircle, trend: 'Needs attention' },
    { title: 'Monthly Revenue', value: '₹1,45,000', icon: IndianRupee, trend: '+5% from last month' },
  ];

  const upcomingServices = [
    { id: 1, customer: 'Ravi Kumar', product: 'Aqua Mars', date: '15 Jan 2027', tech: 'Suresh', status: 'Scheduled' },
    { id: 2, customer: 'Anita Sharma', product: 'Finpure Purosis', date: '16 Jan 2027', tech: 'Unassigned', status: 'Pending' },
    { id: 3, customer: 'Vikram Singh', product: 'LX One', date: '18 Jan 2027', tech: 'Ramesh', status: 'Scheduled' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <Button>Add Service</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{card.title}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-2">{card.value}</p>
                </div>
                <div className="p-3 bg-primary-50 rounded-full text-primary-600">
                  <card.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                {card.trend}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Upcoming Services</CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingServices.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium">{service.customer}</TableCell>
                    <TableCell className="text-gray-500">{service.product}</TableCell>
                    <TableCell>{service.date}</TableCell>
                    <TableCell>
                      <Badge variant={service.status === 'Scheduled' ? 'success' : 'warning'}>
                        {service.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Today's Follow-ups</CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Payment Reminder - Invoice #INV-204</p>
                    <p className="text-sm text-gray-500">Customer: Rohan Patel</p>
                  </div>
                  <Button variant="outline" size="sm">Call</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
  `,
  'pages/Customers.tsx': `
import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Search, Plus } from 'lucide-react';

export function Customers() {
  const customers = [
    { id: 'CUS-1001', name: 'Ravi Kumar', phone: '+91 9876543210', city: 'Mumbai', products: 2, status: 'Active' },
    { id: 'CUS-1002', name: 'Anita Sharma', phone: '+91 9876543211', city: 'Pune', products: 1, status: 'Active' },
    { id: 'CUS-1003', name: 'Vikram Singh', phone: '+91 9876543212', city: 'Delhi', products: 3, status: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Add Customer
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b flex gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search customers..." 
                className="w-full pl-9 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((cus) => (
                <TableRow key={cus.id}>
                  <TableCell className="font-medium text-primary-600">{cus.id}</TableCell>
                  <TableCell>{cus.name}</TableCell>
                  <TableCell>{cus.phone}</TableCell>
                  <TableCell>{cus.city}</TableCell>
                  <TableCell>{cus.products}</TableCell>
                  <TableCell>
                    <Badge variant={cus.status === 'Active' ? 'success' : 'default'}>
                      {cus.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
  `,
  'pages/Products.tsx': `
import React from 'react';

export function Products() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Products</h1>
      <p className="text-gray-500">Manage products catalogue here.</p>
    </div>
  );
}
  `,
  'pages/Services.tsx': `
import React from 'react';

export function Services() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Services & History</h1>
      <p className="text-gray-500">Manage service masters and history.</p>
    </div>
  );
}
  `,
  'App.tsx': `
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { Customers } from './pages/Customers';
import { Products } from './pages/Products';
import { Services } from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          {/* Placeholder routes for others */}
          <Route path="followups" element={<div className="p-4">Follow-ups Module</div>} />
          <Route path="reminders" element={<div className="p-4">Reminders Module</div>} />
          <Route path="invoices" element={<div className="p-4">Invoices Module</div>} />
          <Route path="payments" element={<div className="p-4">Payments Module</div>} />
          <Route path="technicians" element={<div className="p-4">Technicians Module</div>} />
          <Route path="reports" element={<div className="p-4">Reports Module</div>} />
          <Route path="settings" element={<div className="p-4">Settings Module</div>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  `,
  'main.tsx': `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(src, filePath), content.trim());
  console.log('Created: ', filePath);
});
