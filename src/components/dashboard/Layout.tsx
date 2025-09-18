import React, { useState } from 'react';
import { 
  Package, Users, ShoppingCart, DollarSign, TrendingUp, Menu,
  Home, BarChart3, Bell, Search, ChevronDown, User, LogOut
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeRoute: string;
  setActiveRoute: (route: string) => void;
}

const DashboardLayout = ({ children, activeRoute, setActiveRoute }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', route: 'dashboard' },
    { icon: Package, label: 'Products', route: 'products' },
    { icon: ShoppingCart, label: 'Orders', route: 'orders' },
    { icon: Users, label: 'Customers', route: 'customers' },
    { icon: BarChart3, label: 'Analytics', route: 'analytics' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-center h-16 bg-yellow-400">
          <span className="text-2xl font-bold text-gray-800">kapee.</span>
        </div>

        <nav className="mt-8">
          {sidebarItems.map(item => (
            <button
              key={item.route}
              onClick={() => setActiveRoute(item.route)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-100 transition-colors ${
                activeRoute === item.route ? 'bg-yellow-50 border-r-4 border-yellow-400 text-yellow-600' : 'text-gray-700'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-0 w-full p-6">
          <button className="flex items-center w-full px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
            <LogOut className="w-5 h-5 mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Navbar */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-20">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-gray-700 mr-4">
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-800 capitalize">{activeRoute}</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <button className="relative text-gray-600 hover:text-gray-800">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Profile in Navbar */}
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setActiveRoute('profile')}
              >
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 mt-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
