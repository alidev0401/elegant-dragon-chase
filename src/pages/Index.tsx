import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import MenuSection from "@/components/MenuSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-interaction-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <MenuSection />
        <BookingSection />
        
        {/* Gallery Preview or Additional Section */}
        <section id="location" className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted-slate mb-4 block">Visit Us</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-12">Heart of Karachi.</h2>
            <div className="w-full h-[500px] rounded-[22px] overflow-hidden shadow-xl border border-lightest-gray relative">
              <img 
                src="/assets/cafe.jpg" 
                alt="The Kafe Location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-12">
                <div className="text-white">
                  <p className="text-2xl font-serif mb-2">DHA Phase 6, Karachi</p>
                  <p className="text-gray-300">Find us near the Bukhari Commercial area.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
