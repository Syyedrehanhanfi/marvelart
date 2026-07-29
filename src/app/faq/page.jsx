import Navbar from '../../components/Navbar';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';

export default function FAQPage() {
  return (
    <div className="w-full min-h-[100dvh] bg-cream-100 overflow-x-hidden selection:bg-gold-500/30 selection:text-brown-900 relative">
      {/* Ambient luxury gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-brown-900/5 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 pt-24 pb-12">
          <FAQ />
        </div>
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}
