const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src');

const files = {
  'pages/CustomerDetails.tsx': `
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Edit, Package, Wrench, Clock, FileText } from 'lucide-react';

export function CustomerDetails() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Customer Details</h1>
        <Button className="gap-2" variant="outline"><Edit className="w-4 h-4"/> Edit Customer</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium text-gray-900">Ravi Kumar</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium text-gray-900">+91 9876543210</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-900">ravi.kumar@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium text-gray-900">123, MG Road, Mumbai, Maharashtra 400001</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <Badge variant="success" className="mt-1">Active</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <div className="flex space-x-6 border-b pb-2">
              <button className="text-primary-600 font-medium border-b-2 border-primary-600 pb-2">Overview</button>
              <button className="text-gray-500 hover:text-gray-900 pb-2">Products</button>
              <button className="text-gray-500 hover:text-gray-900 pb-2">Services</button>
              <button className="text-gray-500 hover:text-gray-900 pb-2">Follow-ups</button>
              <button className="text-gray-500 hover:text-gray-900 pb-2">Invoices</button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              <div className="border-l-2 border-gray-200 ml-3 space-y-6">
                <div className="relative pl-6">
                  <span className="absolute -left-2.5 top-1 h-5 w-5 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center">
                    <Wrench className="w-3 h-3 text-primary-600" />
                  </span>
                  <p className="font-medium text-gray-900">General Service Completed</p>
                  <p className="text-sm text-gray-500">Technician: Suresh • 15 Jan 2026</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute -left-2.5 top-1 h-5 w-5 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                    <Package className="w-3 h-3 text-blue-600" />
                  </span>
                  <p className="font-medium text-gray-900">Aqua Mars Installed</p>
                  <p className="text-sm text-gray-500">Product Serial: AQM-2026-8910 • 10 Jan 2026</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
  `,
  'pages/CustomerProducts.tsx': `
import React from 'react';

export function CustomerProducts() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Customer Products</h1>
      <p className="text-gray-500">Manage customer installations and products here.</p>
    </div>
  );
}
  `,
  'pages/ServiceHistory.tsx': `
import React from 'react';

export function ServiceHistory() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Service History</h1>
      <p className="text-gray-500">View complete service records.</p>
    </div>
  );
}
  `,
  'pages/Followups.tsx': `
import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';

export function Followups() {
  const followups = [
    { id: 1, customer: 'Ravi Kumar', type: 'Service Follow-up', date: '08 Oct 2026', staff: 'Neha', status: 'Pending' },
    { id: 2, customer: 'Anita Sharma', type: 'Payment Follow-up', date: '09 Oct 2026', staff: 'Rahul', status: 'In Progress' },
    { id: 3, customer: 'Vikram Singh', type: 'Sales Follow-up', date: '10 Oct 2026', staff: 'Amit', status: 'Completed' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Follow-ups</h1>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {followups.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.customer}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.staff}</TableCell>
                  <TableCell>
                    <Badge variant={
                      item.status === 'Completed' ? 'success' : 
                      item.status === 'In Progress' ? 'info' : 'warning'
                    }>{item.status}</Badge>
                  </TableCell>
                  <TableCell><button className="text-primary-600 font-medium">Update</button></TableCell>
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
  'pages/Reminders.tsx': `
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Bell, CalendarClock, AlertTriangle } from 'lucide-react';

export function Reminders() {
  const reminders = [
    { id: 1, customer: 'Ravi Kumar', product: 'Aqua Mars', type: 'Service Due', date: 'Today', status: 'Scheduled' },
    { id: 2, customer: 'Sita Ram', product: 'Finpure Purosis', type: 'Warranty Expiry', date: 'Tomorrow', status: 'Sent' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Reminders Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-full"><AlertTriangle /></div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Due Today</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full"><CalendarClock /></div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Due This Week</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-full"><Bell /></div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Successfully Sent (7d)</p>
              <p className="text-2xl font-bold text-gray-900">128</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Reminders</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Reminder Type</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reminders.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.customer}</TableCell>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === 'Sent' ? 'success' : 'warning'}>{item.status}</Badge>
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
  'pages/Invoices.tsx': `
import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Plus } from 'lucide-react';

export function Invoices() {
  const invoices = [
    { id: 'INV-2045', customer: 'Ravi Kumar', date: '05 Oct 2026', amount: '₹1,500', status: 'Paid' },
    { id: 'INV-2046', customer: 'Anita Sharma', date: '06 Oct 2026', amount: '₹14,500', status: 'Partial' },
    { id: 'INV-2047', customer: 'Vikram Singh', date: '07 Oct 2026', amount: '₹850', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Invoices</h1>
        <Button className="gap-2"><Plus className="w-4 h-4"/> Create Invoice</Button>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-medium text-primary-600">{inv.id}</TableCell>
                  <TableCell>{inv.customer}</TableCell>
                  <TableCell>{inv.date}</TableCell>
                  <TableCell className="font-medium">{inv.amount}</TableCell>
                  <TableCell>
                    <Badge variant={inv.status === 'Paid' ? 'success' : inv.status === 'Partial' ? 'info' : 'warning'}>
                      {inv.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View PDF</Button>
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
  'pages/Payments.tsx': `
import React from 'react';

export function Payments() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Payments</h1>
      <p className="text-gray-500">Track and manage payments here.</p>
    </div>
  );
}
  `,
  'pages/Technicians.tsx': `
import React from 'react';

export function Technicians() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Technicians</h1>
      <p className="text-gray-500">Manage field staff and technicians.</p>
    </div>
  );
}
  `,
  'pages/Reports.tsx': `
import React from 'react';

export function Reports() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Reports & Analytics</h1>
      <p className="text-gray-500">View business reports.</p>
    </div>
  );
}
  `,
  'pages/Settings.tsx': `
import React from 'react';

export function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">System Settings</h1>
      <p className="text-gray-500">Configure your CRM options.</p>
    </div>
  );
}
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(src, filePath), content.trim());
  console.log('Created: ', filePath);
});
