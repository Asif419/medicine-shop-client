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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="px-6 md:px-36 py-16 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Shop All Medicines</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <div>
          <div className="mb-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className=" text-black px-4 py-2 rounded-md"
            >
              {/* {sidebarOpen ? 'Hide Filters' : 'Show Filters'} */}
              <span className="text-xl">&#9776;</span> {/* Unicode hamburger menu */}
            </button>
          </div>

          {/* Sidebar */}
          <aside className={`w-full space-y-6 ${sidebarOpen ? 'block' : 'hidden'}`}>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Search</label>
              <input
                type="text"
                placeholder="Search medicine..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Category</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                <option value="">All Categories</option>
                <option value="Gastric">Gastric</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Fever">Fever</option>
                <option value="Body Pain">Body Pain</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Sort By</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={filters.sort}
                onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
              >
                <option value="">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({ category: '', sort: '' });
                }}
                className="text-sm text-red-500 hover:text-red-700"
                aria-label="Clear filters"
              >
                &#10005; Clear Filters
              </button>
            </div>
          </aside>
        </div>

        {/* Main Product Grid */}
        <main className="flex-1">
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {medicines.map((med) => (
                <MedicineCard key={med?._id} medicine={med} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ShopPage;