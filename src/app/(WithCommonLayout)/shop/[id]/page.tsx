'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/featurs/cartSlice';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Spinner from '@/components/ui/Spinner';

const MedicineDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  interface Medicine {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    prescriptionRequired: boolean;
    manufacturer: string;
    expiryDate: string;
    image: string;
    quantity: number;
  }
  const [loading, setLoading] = useState(true);

  const [medicine, setMedicine] = useState<Medicine | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMedicine = async () => {
      const res = await fetch(`https://medicine-shop-server-mu.vercel.app/api/medicine/${id}`);
      const data = await res.json();
      setMedicine(data.data);
      setLoading(false);
    };
    fetchMedicine();
  }, [id]);

  if (loading || !medicine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...medicine, quantity: 1 }));
    router.push('/cart')
  };

  return (
    <div className="px-6 md:px-24 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="w-full h-[400px] relative">
          <Image
            src={medicine.image}
            alt={medicine.name}
            fill
            className="object-contain rounded"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{medicine.name}</h1>
          <p className="text-gray-600 mb-6">{medicine.description}</p>
          <p className="text-gray-700 mb-2"><strong>Category:</strong> {medicine.category}</p>
          <p className="text-gray-700 mb-6">
            <strong>Prescription Required:</strong>{' '}
            {medicine.prescriptionRequired ? 'Yes' : 'No'}
          </p>
          <p className="text-2xl font-semibold text-black mb-6">৳{medicine.price}</p>
          <p className="text-gray-700 mb-2"><strong>Stock:</strong> {medicine.quantity > 0 ? medicine.quantity : 'Out of stock'}</p>
          <p className="text-gray-700 mb-6"><strong>Expiry Date:</strong> {new Date(medicine.expiryDate).toLocaleDateString()}</p>
          <button
            onClick={handleAddToCart}
            disabled={medicine.quantity === 0}
            className={`px-6 py-3 rounded-lg transition text-white ${
              medicine.quantity === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;