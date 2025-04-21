'use client';

import MedicineCard from '@/components/modules/shop/MedicineCard';
import useMedicines from '@/hooks/useMedicine';
import { useState } from 'react';

const ShopPage = () => {
  const [filters, setFilters] = useState({ category: '', sort: '' });
  const { medicines, hasMore, loadMore } = useMedicines(filters);

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
          <option value="pain-relief">Pain Relief</option>
          <option value="diabetes">Diabetes</option>
          <option value="vitamins">Vitamins</option>
          <option value="antibiotics">Antibiotics</option>
        </select>

        <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        >
          <option value="">Sort by</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      {/* Medicines Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {medicines.map((med) => (
          <MedicineCard key={med.id} medicine={med} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopPage;