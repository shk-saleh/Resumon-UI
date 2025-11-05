import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Templates from '../components/Templates';
import Working from '../components/Working';
import Tools from '../components/Tools';
import Review from "../components/Review";
import Plans from '../components/Plans';
import FAQ from '../components/FAQ';
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative ">

      <img src="/src/assets/images/blob1.png"
        className="absolute top-0 left-0 w-[350px] sm:w-[500px] md:w-[800px] lg:w-[900px] opacity-90 z-10 pointer-events-none select-none"
      />
      <Navbar />
      <Hero />
      <Templates />
      <Features />
      <Working />
      <Tools />
      <Review />
      <Plans />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
export default Home