

import BrandingSection from "@/components/modules/home/BrandingSection";
import CustomerReviews from "@/components/modules/home/customerReview";
import FAQSection from "@/components/modules/home/FAQSection";
import FeaturedMedicines from "@/components/modules/home/FeaturedMedicine";
import HowItWorks from "@/components/modules/home/HowItWorks";
import MedicineSearchBar from "@/components/modules/home/MedicineSearchBar";
import StatsSection from "@/components/modules/home/StatsSection";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs";

const HomePage = async () => {
  const res = await fetch("https://medicine-shop-server-mu.vercel.app/api/medicine");
  const result = await res.json();
  const medicine = result.data;

  return (
    <div>
      <BrandingSection />
      <MedicineSearchBar />
      <HowItWorks />
      <FeaturedMedicines medicine={medicine} />
      <WhyChooseUs />
      <StatsSection />
      <CustomerReviews />
      <FAQSection />
    </div>
  );
};

export default HomePage;
