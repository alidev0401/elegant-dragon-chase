import React from 'react';

const menuItems = [
  {
    name: "Spanish Latte",
    price: "Rs. 750",
    description: "Espresso with condensed milk and a touch of sweetness.",
    category: "Coffee"
  },
  {
    name: "Truffle Fries",
    price: "Rs. 1,200",
    description: "Golden fries tossed in white truffle oil and parmesan.",
    category: "Bites"
  },
  {
    name: "Caramel Macchiato",
    price: "Rs. 850",
    description: "Layers of steamed milk, vanilla, espresso and caramel.",
    category: "Coffee"
  },
  {
    name: "Classic Wagyu Slider",
    price: "Rs. 1,800",
    description: "Mini wagyu beef burgers with caramelized onions.",
    category: "Bites"
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted-slate mb-4 block">Gourmet Experience</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-[1.1]">The Perfect Accompaniment.</h2>
            <p className="text-xl text-muted-slate mb-12 leading-relaxed max-w-xl">
              Elevate your singing experience with our curated selection of beverages and artisanal bites, crafted with the finest ingredients.
            </p>
            
            <div className="space-y-8">
              {menuItems.map((item, index) => (
                <div key={index} className="flex justify-between items-start pb-6 border-b border-border-cool">
                  <div>
                    <h4 className="text-xl font-medium mb-1">{item.name}</h4>
                    <p className="text-muted-slate">{item.description}</p>
                  </div>
                  <span className="font-serif text-xl">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="rounded-[22px] overflow-hidden shadow-2xl">
              <img 
                src="/assets/coffee.jpg" 
                alt="Gourmet Coffee" 
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
