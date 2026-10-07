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