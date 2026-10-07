import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { Customers } from './pages/Customers';
import { CustomerDetails } from './pages/CustomerDetails';
import { Products } from './pages/Products';
import { CustomerProducts } from './pages/CustomerProducts';
import { Services } from './pages/Services';
import { ServiceHistory } from './pages/ServiceHistory';
import { Followups } from './pages/Followups';
import { Reminders } from './pages/Reminders';
import { Invoices } from './pages/Invoices';
import { Payments } from './pages/Payments';
import { Technicians } from './pages/Technicians';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
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
          <Route path="customer-products" element={<CustomerProducts />} />
          <Route path="services" element={<Services />} />
          <Route path="service-history" element={<ServiceHistory />} />
          <Route path="followups" element={<Followups />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="payments" element={<Payments />} />
          <Route path="technicians" element={<Technicians />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;