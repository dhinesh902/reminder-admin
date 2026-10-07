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