import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { Customers } from './pages/Customers';
import { CustomerDetails } from './pages/CustomerDetails';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { CustomerProducts } from './pages/CustomerProducts';
import { CustomerProductDetails } from './pages/CustomerProductDetails';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { ServiceHistory } from './pages/ServiceHistory';
import { ServiceHistoryDetails } from './pages/ServiceHistoryDetails';
import { Followups } from './pages/Followups';
import { FollowupDetails } from './pages/FollowupDetails';
import { Reminders } from './pages/Reminders';
import { Invoices } from './pages/Invoices';
import { InvoiceDetails } from './pages/InvoiceDetails';
import { PurchaseHistory } from './pages/PurchaseHistory';
import { Payments } from './pages/Payments';
import { Technicians } from './pages/Technicians';
import { TechnicianDetails } from './pages/TechnicianDetails';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { Notifications } from './pages/Notifications';
import type { JSX } from 'react/jsx-runtime';

function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={
          <RequireAuth>
            <AppLayout />
          </RequireAuth>
        }>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:id" element={<CustomerDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="customer-products" element={<CustomerProducts />} />
          <Route path="customer-products/:id" element={<CustomerProductDetails />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetails />} />
          <Route path="service-history" element={<ServiceHistory />} />
          <Route path="service-history/:id" element={<ServiceHistoryDetails />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="followups" element={<Followups />} />
          <Route path="followups/:id" element={<FollowupDetails />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="invoices/:id" element={<InvoiceDetails />} />
          <Route path="purchase-history" element={<PurchaseHistory />} />
          <Route path="payments" element={<Payments />} />
          <Route path="technicians" element={<Technicians />} />
          <Route path="technicians/:id" element={<TechnicianDetails />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;