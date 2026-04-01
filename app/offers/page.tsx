'use client';

import React from 'react';

const OffersPage = ({ isSection = false }: { isSection?: boolean }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const offers = [
    { 
        title: 'Welcome Gift', 
        discount: '25% OFF', 
        description: 'Exclusive for our first-time gourmet explorers.',
        code: 'WELCOME25', 
        bg: 'bg-primary-orange',
        featured: true
    },
    { 
        title: 'Flash Friday', 
        discount: '50% OFF', 
        description: 'Select signature dishes every Friday evening.',
        code: 'FLASH50', 
        bg: 'bg-gray-900 border-gray-800' 
    },
    { 
        title: 'Family Feast', 
        discount: 'BOGO', 
        description: 'Buy one get one free on all traditional platters.',
        code: 'FAMILYBOGO', 
        bg: 'bg-white border-gray-100 text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.03)]' 
    },
  ];

  return (
    <div className={`bg-[#FDFCFB] overflow-hidden ${isSection ? 'pt-20' : 'min-h-screen pt-32'}`}>
      {!isSection && (
        <div className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center relative">
          <span className="text-primary-orange font-black uppercase tracking-[0.5em] text-[10px] mb-6 animate-fade-in-down">Exclusive Privileges</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter leading-none italic">
            Gourmet <span className="text-primary-orange">Rewards</span>
          </h1>
          <div className="h-1.5 w-32 bg-primary-orange rounded-full mb-10"></div>
          <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed uppercase tracking-widest text-[11px]">
            Elevate your dining experience with our meticulously curated selection of limited-time offers and rewards.
          </p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {offers.map((offer, idx) => (
            <div 
              key={idx} 
              className={`${offer.bg} p-12 lg:p-16 rounded-[3.5rem] flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden group min-h-[420px] transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] hover:-translate-y-4 border ${offer.featured ? 'lg:col-span-2 border-transparent ring-2 ring-primary-orange/10' : ''}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <span className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest ${offer.bg.includes('bg-white') ? 'bg-gray-900 text-white' : 'bg-white/20 text-white border border-white/20'}`}>
                        {offer.title}
                    </span>
                    {offer.featured && (
                        <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/80 animate-pulse">
                         <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                         First Order Exclusive
                        </span>
                    )}
                </div>
                
                <p className={`text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6 ${offer.bg.includes('bg-white') ? 'text-gray-900' : 'text-white'}`}>
                    {offer.discount}
                </p>
                <p className={`text-sm font-medium leading-relaxed max-w-md ${offer.bg.includes('bg-white') ? 'text-gray-400' : 'text-white/70'}`}>
                    {offer.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 pt-12 border-t border-white/10 mt-auto">
                <div className="flex flex-col">
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-3 ${offer.bg.includes('bg-white') ? 'text-gray-400' : 'text-white/50'}`}>Activation Code</span>
                  <div className={`p-5 rounded-2xl flex items-center gap-6 border transition-all duration-500 ${offer.bg.includes('bg-white') ? 'bg-gray-50 border-gray-100 hover:bg-white hover:border-primary-orange/30 group-hover:shadow-xl group-hover:shadow-primary-orange/5' : 'bg-white/10 border-white/10 hover:bg-white/20 hover:border-white/30'}`}>
                    <span className={`text-2xl font-black uppercase font-mono tracking-[0.2em] ${offer.bg.includes('bg-white') ? 'text-gray-900' : 'text-white'}`}>{offer.code}</span>
                    <button 
                      onClick={() => copyToClipboard(offer.code)}
                      className={`p-3 rounded-xl transition-all duration-300 ${copiedCode === offer.code ? 'bg-green-500 text-white scale-110' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                      {copiedCode === offer.code ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                      )}
                    </button>
                  </div>
                </div>
                
                <button className={`px-10 py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl transition-all duration-500 active:scale-95 ${offer.bg.includes('bg-white') ? 'bg-gray-900 text-white hover:bg-primary-orange' : 'bg-white text-gray-900 hover:bg-primary-orange hover:text-white'}`}>
                    Claim Benefit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
