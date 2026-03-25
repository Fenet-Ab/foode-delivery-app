'use client';

import React from 'react';
import Image from 'next/image';

interface FoodCardProps {
  dish: {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    image: string;
  };
}

const FoodCard: React.FC<FoodCardProps> = ({ dish }) => {
  return (
    <div className="group relative bg-white rounded-[3rem] p-4 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-transparent hover:border-gray-50">
      
      {/* Visual Header - Now with floating action */}
      <div className="relative h-[340px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50">
        <Image 
          src={dish.image} 
          alt={dish.name} 
          fill 
          className="object-cover transition-all duration-[2s] group-hover:scale-110"
          priority
        />
        
        {/* Soft Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10 transition-opacity duration-700 opacity-60 group-hover:opacity-80"></div>
        
        {/* Top Badges */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="px-4 py-1.5 bg-white/95 backdrop-blur-xl rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] text-gray-900 border border-white/50 shadow-lg">
                {dish.category}
            </span>
            <div className="flex items-center gap-1 bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white font-black text-[9px] tracking-widest shadow-lg">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                {dish.rating}
            </div>
        </div>

        {/* Floating Add to Cart - Plus Button */}
        <button className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-gray-900 hover:bg-primary-orange hover:text-white transition-all duration-500 hover:scale-110 active:scale-90 group/btn overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            <div className="absolute inset-0 bg-primary-orange translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-8 left-8">
            <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.4em] mb-1 block">Signature Value</span>
            <div className="text-3xl font-black text-white tracking-tighter">
                <span className="text-primary-orange italic">$</span>{dish.price.toFixed(2)}
            </div>
        </div>
      </div>

      {/* Clean Content Section */}
      <div className="p-10 flex flex-col items-start text-left">
          <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-4 group-hover:text-primary-orange transition-colors duration-500">
            {dish.name}
          </h3>
        
        <p className="text-gray-400 text-[11px] font-black uppercase tracking-widest leading-relaxed mb-6 max-w-[240px]">
          {dish.description}
        </p>
        
        <div className="h-1 w-12 bg-gray-100 rounded-full group-hover:w-20 group-hover:bg-primary-orange transition-all duration-700"></div>
      </div>
    </div>
  );
};

export default FoodCard;
