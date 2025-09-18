import React from 'react';
import { CreditCard, Package, DollarSign } from 'lucide-react';

const PaymentMethods = () => {
  const methods = [
    { id: 1, name: 'Visa', transactions: 120, revenue: 15000 },
    { id: 2, name: 'Mastercard', transactions: 80, revenue: 9000 },
    { id: 3, name: 'PayPal', transactions: 50, revenue: 7000 },
    { id: 4, name: 'Stripe', transactions: 30, revenue: 5000 }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Payment Methods</h2>

      {/* Methods Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {methods.map(method => (
          <div key={method.id} className="bg-white p-6 rounded-lg shadow border flex items-center justify-between">
            <div>
              <p className="text-gray-500">{method.name}</p>
              <p className="text-xl font-bold text-gray-900">${method.revenue}</p>
              <p className="text-sm text-gray-400">{method.transactions} transactions</p>
            </div>
            <div className="p-3 rounded-full bg-gray-100">
              {method.name === 'Visa' && <CreditCard className="w-6 h-6 text-blue-600" />}
              {method.name === 'Mastercard' && <CreditCard className="w-6 h-6 text-red-600" />}
              {method.name === 'PayPal' && <Package className="w-6 h-6 text-blue-400" />}
              {method.name === 'Stripe' && <DollarSign className="w-6 h-6 text-purple-600" />}
            </div>
          </div>
        ))}
      </div>

      {/* Add New Payment Method */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Payment Method</h3>
        <div className="flex gap-4">
          <input type="text" placeholder="Method Name" className="border rounded px-4 py-2 w-full" />
          <button className="bg-yellow-400 text-white px-4 py-2 rounded">Add Method</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
