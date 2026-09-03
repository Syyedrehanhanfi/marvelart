import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import RatingBanner from '../components/RatingBanner';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';
import EventTypes from '../components/EventTypes';
import ClassesPromo from '../components/ClassesPromo';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import Trust from '../components/Trust';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import LuxuryDivider from '../components/LuxuryDivider';

export default function Page() {
  return (
    <div className="w-full bg-cream-100 overflow-x-hidden selection:bg-gold-500/30 selection:text-brown-900 relative">
      {/* Ambient luxury gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-brown-900/5 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <LuxuryDivider />
        <Stats />
        <LuxuryDivider />
        <About />
        <LuxuryDivider />
        <RatingBanner />
        <Services />
        <LuxuryDivider />
        <WhyChooseUs />
        <LuxuryDivider />
        <Gallery />
        <VideoGallery />
        <EventTypes />
        <LuxuryDivider />
        <ClassesPromo />
        <LuxuryDivider />
        <Pricing />
        <LuxuryDivider />
        <Testimonials />
        <ServiceAreas />
        <LuxuryDivider />
        <Trust />
        <FinalCTA />
        <Contact />
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}
