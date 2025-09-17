import React, { useState } from 'react';
import DashboardLayout from './Layout';
import DashboardOverview from './pages/DashboardOverview';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrderPage';
import CustomersPage from './pages/CustomersPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage'; 

const Dashboard = () => {
  const [activeRoute, setActiveRoute] = useState('dashboard');

  const routes: { [key: string]: React.ReactElement } = {
    dashboard: <DashboardOverview />,
    products: <ProductsPage />,
    orders: <OrdersPage />,
    customers: <CustomersPage />,
    analytics: <AnalyticsPage />,
    profile: <SettingsPage />
  };

  return (
    <DashboardLayout activeRoute={activeRoute} setActiveRoute={setActiveRoute}>
      {routes[activeRoute]}
    </DashboardLayout>
  );
};

export default Dashboard;
