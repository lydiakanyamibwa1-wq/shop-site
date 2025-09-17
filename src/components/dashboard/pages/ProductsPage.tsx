import React from 'react';
import { Package, Eye, Pencil, Trash2 } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    { id: 1, name: "Premium Headphones", price: "$299", stock: 15, category: "Audio" },
    { id: 2, name: "Wireless Earbuds", price: "$149", stock: 50, category: "Audio" },
    { id: 3, name: "Bluetooth Speaker", price: "$79", stock: 30, category: "Audio" },
    { id: 4, name: "Gaming Headset", price: "$199", stock: 10, category: "Gaming" },
    { id: 5, name: "Smart Watch", price: "$249", stock: 20, category: "Wearables" }
  ];

  const totalProducts = products.length;
  const totalStock = products.reduce((acc, p) => acc + p.stock, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Products</h2>

      {/* Stats Cards */}
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
          <Package className="w-8 h-8 text-green-600" />
        </div>
      </div>

      {/* Product List */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map(product => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex space-x-2">
                  <button className="flex items-center px-2 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
                    <Eye className="w-4 h-4 mr-1" /> View
                  </button>
                  <button className="flex items-center px-2 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                    <Pencil className="w-4 h-4 mr-1" /> Edit
                  </button>
                  <button className="flex items-center px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                    <Trash2 className="w-4 h-4 mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
