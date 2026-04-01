'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/contexts/CartContext';
import Footer from '@/app/components/Footer/page';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  const deliveryFee = cart.length > 0 ? 5.00 : 0;
  const tax = cartTotal * 0.1; // 10% tax
  const finalTotal = cartTotal + deliveryFee + tax;

  if (cart.length === 0) {
    return (
      <div className="bg-[#FDFCFB] min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="relative w-64 h-64 mb-8">
            <div className="absolute inset-0 bg-primary-orange/5 rounded-full animate-pulse"></div>
            <svg className="absolute inset-0 m-auto w-32 h-32 text-primary-orange/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter uppercase">Your cart is empty</h2>
          <p className="text-gray-500 mb-8 max-w-sm text-center font-medium">Looks like you haven't added anything to your cart yet. Explore our delicious menu and find something you love!</p>
          <Link 
            href="/pages/menu" 
            className="px-8 py-4 bg-primary-orange text-white font-black rounded-2xl shadow-xl shadow-primary-orange/30 hover:bg-secondary-orange hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider"
          >
            Explore Menu
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCFB] min-h-screen flex flex-col">
      <div className="flex-1 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <nav className="flex mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-gray-400">
                  <li><Link href="/" className="hover:text-primary-orange transition-colors">Home</Link></li>
                  <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></li>
                  <li className="text-primary-orange">Cart</li>
                </ol>
              </nav>
              <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                Your <span className="text-primary-orange">Cart</span>
              </h1>
            </div>
            <div className="flex items-center gap-4 text-sm font-black text-gray-500 uppercase tracking-widest">
              <span>{cart.length} {cart.length === 1 ? 'Item' : 'Items'}</span>
              <div className="h-1 w-12 bg-orange-200 rounded-full"></div>
              <button onClick={clearCart} className="hover:text-primary-orange transition-colors">Clear All</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative bg-white rounded-[2.5rem] p-6 flex flex-col sm:flex-row items-center gap-8 border border-transparent hover:border-orange-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500"
                >
                  {/* Product Image */}
                  <div className="relative w-full sm:w-40 h-40 rounded-[2rem] overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-700">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="text-[10px] font-black text-primary-orange uppercase tracking-[0.3em] mb-2">{item.category}</span>
                    <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-2">
                      {item.name}
                    </h3>
                    <div className="text-xl font-black text-gray-900 mb-4 sm:mb-0">
                      <span className="text-primary-orange italic">$</span>{item.price.toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center bg-gray-50 rounded-2xl p-1 border border-gray-100">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-primary-orange hover:shadow-sm rounded-xl transition-all font-black text-xl"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-black text-gray-900">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-primary-orange hover:shadow-sm rounded-xl transition-all font-black text-xl"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-4 text-gray-300 hover:text-red-500 transition-colors group/remove"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/remove:rotate-90 transition-transform duration-300">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-orange-900/5 border border-orange-50 relative overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-orange/10 rounded-full blur-3xl"></div>
                
                <h2 className="relative z-10 text-3xl font-black text-gray-900 tracking-tighter uppercase mb-8">
                  Summary
                </h2>

                <div className="relative z-10 space-y-6 mb-10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-black text-gray-500 uppercase tracking-widest font-bold">Subtotal</span>
                    <span className="font-black text-gray-900">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-black text-gray-500 uppercase tracking-widest">Delivery</span>
                    <span className="font-black text-gray-900">${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-black text-gray-500 uppercase tracking-widest">Tax (10%)</span>
                    <span className="font-black text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gray-100"></div>
                  <div className="flex justify-between items-end">
                    <span className="font-black text-gray-900 text-xl uppercase tracking-tighter">Total</span>
                    <div className="text-4xl font-black text-primary-orange tracking-tighter">
                      <span className="italic text-2xl mr-1">$</span>{finalTotal.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 space-y-4">
                  <button className="w-full py-5 bg-primary-orange text-white font-black rounded-2xl shadow-xl shadow-primary-orange/30 hover:bg-secondary-orange hover:-translate-y-1 active:translate-y-0 transition-all duration-300 uppercase tracking-[0.2em] text-sm">
                    Checkout Now
                  </button>
                  <Link 
                    href="/pages/menu" 
                    className="block w-full py-5 text-center text-gray-400 font-black hover:text-primary-orange transition-colors uppercase tracking-[0.2em] text-xs"
                  >
                    Continue Shopping
                  </Link>
                </div>

                {/* Promo Code Section */}
                <div className="mt-10 pt-10 border-t border-gray-50 relative z-10">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Have a promo code?</p>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Enter code" 
                      className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-primary-orange/20 transition-all"
                    />
                    <button className="px-6 py-3 bg-gray-900 text-white text-[10px] font-black rounded-xl hover:bg-gray-800 transition-colors uppercase tracking-widest">
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              {/* Satisfaction Guarantee */}
              <div className="mt-8 flex items-center justify-center gap-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span className="text-[9px] font-black uppercase tracking-widest">Secure Checkout Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;