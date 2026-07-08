import React from 'react';
import { Mic2, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-lightest-gray py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-black text-white p-2 rounded-lg">
                <Mic2 size={20} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">The Kafe</span>
            </div>
            <p className="text-muted-slate max-w-sm mb-8 leading-relaxed">
              DHA's premier destination for high-end karaoke and gourmet cafe culture. Experience sound and taste like never before.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-lightest-gray flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-lightest-gray flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-lightest-gray flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <ul className="space-y-4 text-muted-slate">
              <li><a href="#" className="hover:text-interaction-blue">The Experience</a></li>
              <li><a href="#" className="hover:text-interaction-blue">Our Suites</a></li>
              <li><a href="#" className="hover:text-interaction-blue">Gourmet Menu</a></li>
              <li><a href="#" className="hover:text-interaction-blue">Bookings</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-slate">
              <li>DHA Phase 6, Karachi</li>
              <li>+92 300 1234567</li>
              <li>hello@thekafe.pk</li>
              <li>Mon - Sun: 2PM - 2AM</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-lightest-gray flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-slate">
          <p>© 2024 The Kafe. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
