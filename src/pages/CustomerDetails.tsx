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