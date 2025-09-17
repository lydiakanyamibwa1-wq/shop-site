import React from 'react';
import { Package, DollarSign } from 'lucide-react';

const StoreSettings = () => {
  const products = [
    { id: 1, name: "Premium Headphones", stock: 15, price: "$299" },
    { id: 2, name: "Wireless Earbuds", stock: 50, price: "$149" },
    { id: 3, name: "Bluetooth Speaker", stock: 30, price: "$79" },
    { id: 4, name: "Gaming Headset", stock: 10, price: "$199" },
    { id: 5, name: "Smart Watch", stock: 20, price: "$249" }
  ];

  const totalProducts = products.length;
  const totalStock = products.reduce((acc, p) => acc + p.stock, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Store Settings</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Products</p>
            <p className="text-2xl font-bold text-gray-900">{totalProducts}</p>
          </div>
          <Package className="w-8 h-8 text-yellow-600" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow border flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Stock</p>
            <p className="text-2xl font-bold text-gray-900">{totalStock}</p>
          </div>
          <DollarSign className="w-8 h-8 text-green-600" />
        </div>
      </div>

      {/* Add New Product Form */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Product</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Product Name" className="border px-4 py-2 rounded w-full" />
          <input type="text" placeholder="Category" className="border px-4 py-2 rounded w-full" />
          <input type="number" placeholder="Price" className="border px-4 py-2 rounded w-full" />
          <input type="number" placeholder="Stock" className="border px-4 py-2 rounded w-full" />
        </div>
        <button className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded">Add Product</button>
      </div>

      {/* Product Stock Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map(p => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{p.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{p.stock}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreSettings;
