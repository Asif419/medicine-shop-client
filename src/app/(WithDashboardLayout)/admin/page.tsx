'use client'

import { useEffect, useState } from 'react';

const AdminDashboardPage = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const [stockItems, setStockItems] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/orders/order/my-orders', {
          headers: {
            Authorization: token || '',
          },
        });
        const result = await res.json();
        if (result.success && Array.isArray(result.data)) {
          setTotalOrders(result.data.length);
        }
      } catch (error) {
        console.error('Failed to fetch orders', error);
      }
    };

    const fetchMedicines = async () => {
      try {
        const res = await fetch('https://medicine-shop-server-mu.vercel.app/api/medicine');
        const result = await res.json();
        if (result.status && Array.isArray(result.data)) {
          const count = result.data.filter((med: { quantity: number }) => med.quantity > 0).length;
          setStockItems(count);
        }
      } catch (error) {
        console.error('Failed to fetch medicines', error);
      }
    };

    fetchOrders();
    fetchMedicines();
  }, []);



  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <p className="text-gray-500 mb-1">Total Orders</p>
          <h2 className="text-2xl font-bold text-gray-800">{totalOrders}</h2>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <p className="text-gray-500 mb-1">Stock Items</p>
          <h2 className="text-2xl font-bold text-gray-800">{stockItems}</h2>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;