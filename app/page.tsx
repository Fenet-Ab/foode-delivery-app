import Hero from "@/app/components/Hero/page";
import Menu from "@/app/components/Menu/page";
import TopFooter from "@/app/components/TopFooter/page";
import Footer from "@/app/components/Footer/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCFB]">
      <main className="flex-1">
        <Hero />
        <Menu />
        <TopFooter />
        <Footer />
        
        {/* Additional sections */}
        {/* <section className="max-w-7xl mx-auto px-6 py-24 text-center">
           <h2 className="text-4xl font-black text-white uppercase tracking-wider mb-4 italic">
             Our <span className="text-primary-orange">Best Sellers</span>
           </h2>
           <p className="text-gray-500 max-w-lg mx-auto mb-16 uppercase text-xs font-black tracking-[0.3em]">
             Hand-picked favorites by our community
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-4 h-64 flex items-center justify-center text-white/20 italic font-black uppercase text-2xl tracking-widest hover:border-primary-orange/30 transition-all cursor-pointer">
                Top Quality Beef
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-4 h-64 flex items-center justify-center text-white/20 italic font-black uppercase text-2xl tracking-widest hover:border-primary-orange/30 transition-all cursor-pointer">
                Fresh Ingredients
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-4 h-64 flex items-center justify-center text-white/20 italic font-black uppercase text-2xl tracking-widest hover:border-primary-orange/30 transition-all cursor-pointer">
                Fast Delivery
              </div>
           </div>
        </section> */}
      </main>
    </div>
  );
}
