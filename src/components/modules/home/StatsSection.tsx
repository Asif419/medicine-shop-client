'use client';

const StatsSection = () => {
  const stats = [
    {
      title: "10,000+",
      subtitle: "Orders Delivered",
    },
    {
      title: "4.9★",
      subtitle: "Average Rating",
    },
    {
      title: "1,200+",
      subtitle: "Verified Medicines",
    },
    {
      title: "500+",
      subtitle: "Happy Customers",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center"
            >
              <div className="text-4xl font-bold text-black mb-2">{item.title}</div>
              <div className="text-gray-600 text-sm">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;