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