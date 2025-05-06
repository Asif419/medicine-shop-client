'use client';

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Search for Medicines",
      description: "Use our powerful search and filter tools to find the medicine you need by name, category, or symptoms."
    },
    {
      title: "2. Upload Prescription (If Needed)",
      description: "For certain medications, you'll be prompted to upload a valid prescription image during checkout."
    },
    {
      title: "3. Secure Payment",
      description: "Choose from multiple secure payment methods including SurjoPay, bKash, and card payments."
    },
    {
      title: "4. Fast Delivery",
      description: "Get your medicines delivered to your doorstep quickly and reliably, across Bangladesh."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="text-2xl font-bold text-black mb-3">{step.title}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;