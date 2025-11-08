import Navbar from "../components/Navbar";
import FAQ from '../components/FAQ';
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import PricingPlans from "../components/PricingPlans";
import Comparison from "../components/Comparison";
import CustomPLans from "../components/CustomPlans";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white relative">
 
      <Navbar />
      <img src="/src/assets/images/blob1.png" alt="background blob"
        className="absolute top-0 left-0 w-[350px] sm:w-[500px] md:w-[800px] lg:w-[900px] opacity-90 z-10 pointer-events-none select-none"
      />

      <PricingPlans />
      <Comparison/>
      <CustomPLans />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
export default Pricing