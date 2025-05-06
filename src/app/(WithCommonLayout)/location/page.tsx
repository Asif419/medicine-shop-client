'use client';

const locations = [
  {
    title: 'Dhaka Central Pharmacy',
    address: 'Mirpur 10, Dhaka',
    details:
      'Open every day 9AM - 10PM | Delivery available in 2 hours within city limits. For express service, contact the counter directly.',
  },
  {
    title: 'Chittagong Medical Hub',
    address: 'Agrabad, Chattogram',
    details:
      'Open Mon-Sat 8AM - 9PM | Online pharmacy pickup available. Express delivery 10AM - 6PM.',
  },
  {
    title: 'Sylhet Health Point',
    address: 'Zindabazar, Sylhet',
    details:
      'Open 7 days a week 9AM - 9PM | Prescription medicines can be delivered within 24 hours.',
  },
  {
    title: 'Khulna Pharmacy',
    address: 'Shibbari More, Khulna',
    details:
      'Open daily 10AM - 8PM | Orders processed and delivered locally. Call for product availability.',
  },
  {
    title: 'Rajshahi Health Store',
    address: 'Shaheb Bazar, Rajshahi',
    details:
      'Open Mon-Fri 8AM - 8PM | Closed on Govt. holidays. Free delivery on orders above BDT 500.',
  },
  {
    title: 'Barisal Central Medical',
    address: 'Sadar Road, Barisal',
    details:
      'Open every day 9AM - 7PM | Medicines available with e-prescription validation.',
  },
  {
    title: 'Comilla Pharmacy Point',
    address: 'Kandirpar, Cumilla',
    details:
      'Open Mon-Sun 9AM - 9PM | Free pickup service for orders placed online.',
  },
  {
    title: 'Rangpur Medic Center',
    address: 'Central Road, Rangpur',
    details:
      'Open Sat-Thu 8AM - 6PM | Delivery slots available 2PM - 5PM only.',
  },
];

export default function LocationPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-12">OUR PHYSICAL SHOPS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {locations.map((loc, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg text-gray-800">{loc.title}</h3>
            <p className="text-gray-700 font-medium mb-1">{loc.address}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{loc.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
