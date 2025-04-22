// import { notFound } from 'next/navigation';
import Image from "next/image";

// Fake DB lookup
// const allMedicines = Array.from({ length: 50 }).map((_, i) => ({
//   id: `${i + 1}`,
//   name: `Medicine ${i + 1}`,
//   description:
//     'This is a detailed description of the medicine, including usage, dosage, and warnings.',
//   category: i % 2 === 0 ? 'Pain Relief' : 'Vitamins',
//   prescriptionRequired: i % 3 === 0,
//   price: (50 + i * 5).toFixed(0),
//   image: '/assets/medicines/paracetamol.png',
// }));

const MedicineDetails = async ({
  params,
}: {
  params: Promise<{ medId: string }>;
}) => {
  const medId = await params;

  // const medicine = allMedicines.find((med) => med.id === params.id);

  // if (!medicine) return notFound();
  const res = await fetch(`http://localhost:5000/api/medicine/${medId.id}`);
  const result = await res.json();
  const medicine = result.data;

  return (
    <div className="px-6 md:px-24 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="w-full h-[400px] relative">
          <Image
            src={medicine.image}
            alt={medicine.name}
            fill
            className="object-contain rounded"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {medicine.name}
          </h1>
          <p className="text-gray-600 mb-1">{medicine.description}</p>
          <p className="text-gray-700 mb-1">
            <strong>Manu Facturer:</strong> {medicine.manufacturerDetails}
          </p>
          <p className="text-gray-700 mb-1 ">
            <strong>Medicine Type:</strong> {medicine.type}
          </p>
          <div className="text-gray-700 mb-1 ">
            <strong>Symptoms: </strong>
            {medicine.symptoms.map((sn: string, index: number) => (
              <samp className=" mr-1" key={index}>
                *{sn} <span> </span>
              </samp>
            ))}
          </div>
          <p className="text-gray-700 mb-1 ">
            <strong>Quantity : </strong> {medicine.quantity}
          </p>
          <p className="text-2xl font-semibold text-black mb-6">
            ৳ {medicine.price}
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;
