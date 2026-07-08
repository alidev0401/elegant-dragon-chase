import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-lightest-gray">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white p-2 rounded-lg">
            <Mic2 size={20} />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">The Kafe</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium hover:text-interaction-blue transition-colors">About</a>
          <a href="#karaoke" className="text-sm font-medium hover:text-interaction-blue transition-colors">Karaoke</a>
          <a href="#menu" className="text-sm font-medium hover:text-interaction-blue transition-colors">Menu</a>
          <a href="#location" className="text-sm font-medium hover:text-interaction-blue transition-colors">Location</a>
        </div>

        <Button variant="ghost" className="rounded-full px-6 font-medium text-black hover:text-interaction-blue hover:bg-transparent transition-all duration-300">
          Book a Room
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
