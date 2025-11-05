import Navbar from "../components/Navbar";
import FAQ from '../components/FAQ';
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { PricingHeader } from "../components/PricingHeader";
import PricingPlans from "../components/PricingPlans";
import Compare from "../components/Compare";
import CustomPLans from "../components/CustomPlans";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white relative">
 
        <Navbar />
         {/* Background blob like Home page */}
      <img
        src="/src/assets/images/blob1.png"
        className="absolute top-0 left-0 w-[350px] sm:w-[500px] md:w-[800px] lg:w-[900px] opacity-90 z-10 pointer-events-none select-none"
        alt="background blob"
      />

        <PricingHeader />
        <PricingPlans />
        <Compare />
        <CustomPLans />
        <FAQ />
        <CTA />
        <Footer />
    </div>
  )
}
export default Pricing