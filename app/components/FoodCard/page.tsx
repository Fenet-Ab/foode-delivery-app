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
  const [rating, setRating] = useState(dish.rating);
  const [hoverRating, setHoverRating] = useState(0);
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-[3rem] p-4 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-transparent hover:border-gray-50 flex flex-col h-full">
      
      {/* Visual Header - Now with floating action */}
      <div className="relative h-[340px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50">
        <Link href={`/components/CardDetail?id=${dish.id}`} className="absolute inset-0 z-10">
          <Image 
            src={dish.image} 
            alt={dish.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-[2s] group-hover:scale-110"
            priority
          />
          
          {/* Soft Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10 transition-opacity duration-700 opacity-60 group-hover:opacity-80"></div>
        </Link>
        
        {/* Top UI Layout */}
        <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-20 pointer-events-none">
            {/* Prominent Rating Badge */}
            <div className="flex items-center gap-2.5 bg-white/40 backdrop-blur-xl px-5 py-3 rounded-[1.5rem] border border-white/20 text-white font-black text-[10px] tracking-widest shadow-2xl pointer-events-auto">
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                            key={star}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setRating(star);
                            }}
                            className="transition-transform hover:scale-125"
                        >
                            <svg className={`w-4.5 h-4.5 ${(hoverRating || rating) >= star ? 'fill-primary-orange' : 'fill-white/30'}`} viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </button>
                    ))}
                </div>
                <span className="ml-1 text-sm font-black text-white">{rating.toFixed(1)}</span>
            </div>

            {/* Like Button */}
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                }}
                className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500 backdrop-blur-md border pointer-events-auto ${isLiked ? 'bg-primary-orange text-white border-primary-orange shadow-lg shadow-primary-orange/40' : 'bg-white/20 text-white border-white/30 hover:bg-white/40'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
            </button>
        </div>

        {/* Floating Add to Cart - Plus Button */}
        <button 
          onClick={() => addToCart({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            category: dish.category
          })}
          className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-gray-900 hover:bg-primary-orange hover:text-white transition-all duration-500 hover:scale-110 active:scale-90 group/btn overflow-hidden z-20"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            <div className="absolute inset-0 bg-primary-orange translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-8 left-8 pointer-events-none">
            <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.4em] mb-1 block">Signature Value</span>
            <div className="text-3xl font-black text-white tracking-tighter">
                <span className="text-primary-orange italic">$</span>{dish.price.toFixed(2)}
            </div>
        </div>
      </div>

      {/* Clean Content Section */}
      <Link href={`/components/CardDetail?id=${dish.id}`} className="p-10 flex flex-col items-start text-left flex-1">
          <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-4 group-hover:text-primary-orange transition-colors duration-500">
            {dish.name}
          </h3>
        
        <p className="text-gray-400 text-[11px] font-black uppercase tracking-widest leading-relaxed mb-6 max-w-[240px]">
          {dish.description}
        </p>
        
        <div className="h-1 w-12 bg-gray-100 rounded-full group-hover:w-20 group-hover:bg-primary-orange transition-all duration-700 mt-auto"></div>
      </Link>
    </div>
  );
};

export default FoodCard;
