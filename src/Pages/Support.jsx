import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import FAQ from '../components/FAQ';
import CTA from "../components/CTA";
import Footer from "../components/Footer";


const Support = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <img src="/src/assets/images/blob1.png" alt="background blob"
        className="absolute top-0 left-0 w-[350px] sm:w-[500px] md:w-[800px] lg:w-[900px] opacity-90 z-10 pointer-events-none select-none"
      />
      <Navbar />
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <CTA />
      <Footer />
      
    </div>
  )
}
export default Support