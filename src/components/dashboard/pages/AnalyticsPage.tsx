import React from 'react';
import { TrendingUp } from 'lucide-react';

const AnalyticsPage = () => {
  const analytics = [
    { label: 'Revenue', value: '$45,231', change: '+12%' },
    { label: 'Orders', value: '1,234', change: '+8%' },
    { label: 'Customers', value: '5,678', change: '+15%' },
    { label: 'Products', value: '892', change: '+3%' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analytics.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{item.label}</p>
              <p className="text-xl font-bold text-gray-900">{item.value}</p>
              <p className="text-sm text-green-600">{item.change} from last month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-yellow-600" />
          </div>
        ))}
      </div>
      <div className="h-64 bg-yellow-50 rounded-lg flex items-center justify-center text-gray-600">
        Chart placeholder (integrate Chart.js or Recharts)
      </div>
    </div>
  );
};

export default AnalyticsPage;
