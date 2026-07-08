import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingSection = () => {
  return (
    <section id="karaoke" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-black text-white rounded-[22px] p-8 md:p-16 flex flex-col md:flex-row gap-16 overflow-hidden relative">
          <div className="flex-1 z-10">
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-[1.1]">Reserve Your Suite.</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Planning a night out? Secure your private karaoke suite in advance. Our rooms accommodate groups from 4 to 20 people.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-serif mb-2">12</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Private Rooms</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-serif mb-2">30k+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Songs Library</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white text-black p-8 md:p-12 rounded-[22px] z-10 shadow-2xl">
            <h3 className="text-2xl font-serif mb-8">Request a Booking</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" className="h-12 border-lightest-gray rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" className="h-12 border-lightest-gray rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" className="h-12 border-lightest-gray rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input id="guests" type="number" placeholder="4" className="h-12 border-lightest-gray rounded-xl" />
              </div>
              <Button className="w-full h-12 rounded-xl bg-interaction-blue hover:bg-interaction-blue/90 text-white font-medium">
                Check Availability
              </Button>
            </form>
          </div>
          
          {/* Decorative Background Image */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
            <img src="/assets/microphone.jpg" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
