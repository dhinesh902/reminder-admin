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