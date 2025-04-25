'use client';

import MedicineCard from '@/components/modules/shop/MedicineCard';
import Spinner from '@/components/ui/Spinner';
import { useEffect, useState } from 'react';

type Medicine = {
  _id: string;
  name: string;
  company: string;
  image: string;
  price: number;
  type: string;
  symptoms: string[];
  description: string;
  quantity: number;
  inStock: boolean;
  prescriptionRequired: boolean;
  manufactureDetails: string;
  expiryDate: string;
};

const ShopPage = () => {
  const [filters, setFilters] = useState({ category: '', sort: '' });
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = 'https://medicine-shop-server-mu.vercel.app/api/medicine';

        if (searchTerm) {
          endpoint += `?searchTerm=${searchTerm}`;
        } else if (filters.category) {
          endpoint += `?searchTerm=${filters.category}`;
        }

        if (!searchTerm && filters.sort) {
          const sortQuery = `sortBy=price&sortOrder=${filters.sort === 'price-low-high' ? 'asc' : 'desc'}`;
          endpoint += filters.category ? `&${sortQuery}` : `?${sortQuery}`;
        }

        const res = await fetch(endpoint);
        const data = await res.json();
        setMedicines(data.data || []);
      } catch (err) {
        console.error('Failed to load medicines', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, filters]);

  if (loading) {
    <Spinner />
  }

  return (
    <div className="px-6 md:px-24 py-16 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Shop All Medicines</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          <option value="Gastric">Gastric</option>
          <option value="Diabetes">Diabetes</option>
          <option value="Fever">Fever</option>
          <option value="Body Pain">Body Pain</option>
        </select>

        <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        >
          <option value="">Sort by</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>

        <input
          type="text"
          placeholder="Search medicine..."
          className="border border-gray-300 rounded-lg px-4 py-2"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      {/* Medicines Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {medicines.map((med) => (
          <MedicineCard key={med?._id} medicine={med} />
        ))}
      </div>

      {/* Load More */}
      {/* {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Load More
          </button>
        </div>
      )} */}
    </div>
  );
}

export default ShopPage;