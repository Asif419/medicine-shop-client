import { Medicine } from "@/types";
import Image from "next/image";
import Link from "next/link";

const MedicineCard = ({ medicine }: { medicine: Medicine }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition group h-[320px]">
      <div className="w-full h-40 relative mb-4 overflow-hidden rounded">
        <Image
          src={medicine?.image}
          alt={medicine.name}
          fill
          className="object-contain rounded transition-transform duration-300 group-hover:scale-115"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-black transition">
        {medicine.name}
      </h3>
      <p className="text-gray-500 mb-4 text-xl group-hover:text-gray-700 group-hover:text-xl group-hover:font-bold transition-all duraiton-500 ease-in-out">৳{medicine.price}</p>
      <Link href={`/shop/${medicine._id}`}>
        <button className="bg-white text-black w-full py-2 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-500 ease-in-out font-medium">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default MedicineCard;