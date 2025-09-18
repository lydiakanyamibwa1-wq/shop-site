interface SidebarProps {
  activeRoute: string;
  setActiveRoute: (route: string) => void;
  sidebarOpen: boolean;
}

import React from 'react';
import { Home, Package, Users, User, LogOut, Menu } from 'lucide-react';

const Sidebar = ({ activeRoute, setActiveRoute, sidebarOpen }: SidebarProps) => {
  const sidebarItems = [
    { icon: Home, label: 'Dashboard', route: 'dashboard' },
    { icon: Package, label: 'Products', route: 'products' },
    { icon: Users, label: 'Customers', route: 'customers' },
    { icon: User, label: 'Profile', route: 'profile' }, // Admin profile link
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
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

      {/* Login / Logout at bottom */}
      <div className="absolute bottom-0 w-full p-6">
        <button className="flex items-center w-full px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
          <LogOut className="w-5 h-5 mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
