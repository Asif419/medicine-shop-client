'use client';

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

import { useState } from 'react';
import MedicineCard from '@/components/modules/shop/MedicineCard';
import Spinner from '@/components/ui/Spinner';

const MedicineSearchBar = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    let endpoint = 'https://medicine-shop-server-mu.vercel.app/api/medicine';

    if (query) {
      endpoint += `?searchTerm=${query}`;
    } else if (category) {
      endpoint += `?searchTerm=${category}`;
    }

    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setMedicines(data.data?.slice(0, 5) || []);
    } catch (err) {
      console.error('Search failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-6 px-6 md:px-24">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search by medicine name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">All Categories</option>
          <option value="Gastric">Gastric</option>
          <option value="Diabetes">Diabetes</option>
          <option value="Fever">Fever</option>
          <option value="Body Pain">Body Pain</option>
        </select>
        <button
          onClick={handleSearch}
          className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Search
        </button>
      </div>

      {/* Search Results */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="col-span-5 flex justify-center"><Spinner /></div>
        ) : (
          medicines.map((medicine) => (
            <MedicineCard key={medicine._id} medicine={medicine} />
          ))
        )}
      </div>
    </section>
  );
};

export default MedicineSearchBar;