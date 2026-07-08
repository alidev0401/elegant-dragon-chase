import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-7xl md:text-8xl font-serif font-normal leading-[1.0] tracking-[-0.04em] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Unleash your <br /> <span className="italic">inner star.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-slate max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            DHA's premier karaoke lounge and gourmet cafe. Where high-fidelity sound meets artisan coffee in the heart of Karachi.
          </p>
        </div>

        {/* Purple Hero Band */}
        <div className="relative w-full rounded-[22px] overflow-hidden bg-purple-hero aspect-[21/9] shadow-2xl animate-in zoom-in-95 duration-1000 delay-300">
          <img 
            src="/assets/lounge.jpg" 
            alt="Premium Karaoke Lounge" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-center">Elegance in every note.</h2>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-interaction-blue hover:text-white transition-all px-8 py-6 text-lg border-none">
                View Rooms
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full text-white hover:text-interaction-blue hover:bg-transparent px-8 py-6 text-lg">
                Our Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
