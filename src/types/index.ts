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