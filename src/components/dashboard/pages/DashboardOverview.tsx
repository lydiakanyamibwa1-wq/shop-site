import React from 'react';
import { DollarSign, ShoppingCart, Users, Package, TrendingUp } from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12%', icon: DollarSign, color: 'text-green-600' },
    { label: 'Orders', value: '1,234', change: '+8%', icon: ShoppingCart, color: 'text-blue-600' },
    { label: 'Customers', value: '5,678', change: '+15%', icon: Users, color: 'text-purple-600' },
    { label: 'Products', value: '892', change: '+3%', icon: Package, color: 'text-orange-600' }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', product: 'Premium Headphones', amount: '$299', status: 'Completed' },
    { id: '#12346', customer: 'Jane Smith', product: 'Wireless Earbuds', amount: '$149', status: 'Processing' },
    { id: '#12347', customer: 'Mike Johnson', product: 'Bluetooth Speaker', amount: '$79', status: 'Shipped' },
    { id: '#12348', customer: 'Sarah Wilson', product: 'Gaming Headset', amount: '$199', status: 'Pending' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
              </div>
              <div className="p-3 rounded-full bg-gray-100">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h3>
          <div className="h-64 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
              <p className="text-gray-600">Chart Component Would Go Here</p>
              <p className="text-sm text-gray-500">Integration with Chart.js or Recharts</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-4">
            {['Premium Headphones', 'Wireless Earbuds', 'Bluetooth Speaker', 'Gaming Headset'].map((product, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{product}</p>
                  <p className="text-xs text-gray-500">{Math.floor(Math.random() * 100)} sales</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
