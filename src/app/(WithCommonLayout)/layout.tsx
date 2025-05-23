import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";



const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
