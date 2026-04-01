'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/contexts/CartContext';

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
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Link href={`/components/CardDetail?id=${dish.id}`} className="block h-full w-full">
          <Image 
            src={dish.image} 
            alt={dish.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700"
            priority
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
        </Link>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary-orange shadow-sm">
            {dish.category}
          </span>
        </div>

        {/* Like Button */}
        <button 
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsLiked(!isLiked);
            }}
            className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md border ${isLiked ? 'bg-primary-orange text-white border-primary-orange shadow-lg shadow-primary-orange/20' : 'bg-white/40 text-white border-white/20 hover:bg-white/60'}`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/components/CardDetail?id=${dish.id}`} className="block group/title">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight leading-tight mb-1 transition-colors duration-300 group-hover/title:text-primary-orange">
            {dish.name}
          </h3>
        </Link>

        {/* Minimal Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star} 
                className={`w-3 h-3 ${star <= Math.round(dish.rating) ? 'text-primary-orange fill-primary-orange' : 'text-gray-200 fill-gray-200'}`} 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{dish.rating.toFixed(1)}</span>
        </div>
        
        <p className="text-gray-400 text-[10px] font-medium leading-relaxed mb-6 line-clamp-2">
          {dish.description}
        </p>

        {/* Pricing & Call to Action */}
        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] leading-none mb-1">Price</span>
            <div className="text-2xl font-black text-gray-900 tracking-tighter">
              <span className="text-primary-orange italic text-sm mr-0.5">$</span>{dish.price.toFixed(2)}
            </div>
          </div>

          <button 
            onClick={() => addToCart({
              id: dish.id,
              name: dish.name,
              price: dish.price,
              image: dish.image,
              category: dish.category
            })}
            className="h-12 px-6 bg-gray-900 text-white font-black text-xs rounded-xl shadow-lg hover:bg-primary-orange transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
