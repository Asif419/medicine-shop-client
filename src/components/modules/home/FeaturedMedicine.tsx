'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';


type Medicine = {
  _id: string;
  name: string;
  image: string;
  price: number;
  company: string;
  category: string;
};

const FeaturedMedicines = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filtered, setFiltered] = useState<Medicine[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/medicine');
        const data = await res.json();
        setMedicines(data.data);
        setFiltered(data.data.slice(0, 8));
      } catch (error) {
        console.error('Failed to load medicines', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const result = medicines.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = selectedCategory ? item.category === selectedCategory : true;
      return nameMatch && categoryMatch;
    });

    setFiltered(result.slice(0, 6));
  };

  return (
    <>
      <section className="bg-gray-50 py-12 px-6 md:px-24">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search by medicine name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">All Categories</option>
            <option value="pain-relief">Pain Relief</option>
            <option value="diabetes">Diabetes</option>
            <option value="vitamins">Vitamins</option>
            <option value="antibiotics">Antibiotics</option>
          </select>
          <button
            onClick={handleSearch}
            className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Search
          </button>
        </div>
      </section>

      <section className="py-10 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Medicines</h2>
            <p className="text-gray-600 text-lg">Explore our most popular and trusted products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((med) => (
              <div
                key={med._id}
                className="border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-full h-40 relative mb-4">
                  <Image
                    src={med.image}
                    alt={med.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{med.name}</h3>
                <p className="text-gray-500 mb-4">৳{med.price}</p>
                <button className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturedMedicines;
