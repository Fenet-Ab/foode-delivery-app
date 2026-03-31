import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-xl shadow-lg shadow-primary-orange/20 ring-1 ring-white/10 group-hover:ring-primary-orange/30 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="FoodSwift Logo"
                  width={50}
                  height={50}
                  className="transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase ">
                Food<span className="text-primary-orange">Swift</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Exceptional flavors, delivered with speed. We bridge the gap between your favorite kitchens and your table.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
               {[
                 { icon: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                 { icon: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01' },
                 { icon: 'Twitter', path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' }
               ].map((social) => (
                 <a key={social.icon} href="#" className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-primary-orange transition-all duration-300">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     {social.icon === 'Instagram' ? <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/> : null}
                     <path d={social.path}/>
                   </svg>
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white  decoration-4 ">
              Explore
            </h4>
            <nav className="flex flex-col gap-4 text-gray-400">
              <Link href="/" className="hover:text-primary-orange transition-colors font-medium">Home</Link>
              <Link href="/menu" className="hover:text-primary-orange transition-colors font-medium">Full Menu</Link>
              <Link href="/offers" className="hover:text-primary-orange transition-colors font-medium">Special Offers</Link>
              <Link href="/delivery" className="hover:text-primary-orange transition-colors font-medium">Order Tracking</Link>
            </nav>
          </div>

          {/* Business Hours Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white   decoration-4 ">
              Open Hours
            </h4>
            <div className="flex flex-col gap-4 text-gray-400">
              <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="font-medium">Mon - Fri</span>
                 <span className="text-white font-bold tracking-tighter">08:00 - 22:00</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="font-medium">Sat - Sun</span>
                 <span className="text-white font-bold tracking-tighter">10:00 - 00:00</span>
              </div>
              <p className="text-xs text-primary-orange font-bold uppercase tracking-wider mt-2">
                 * Available For Holiday Orders
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white  decoration-4 ">
              Contact Us
            </h4>
            <div className="flex flex-col gap-5">
               <div className="flex gap-4 items-start group">
                 <div className="p-3 bg-white/5 rounded-xl text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 </div>
                 <div>
                   <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                   <p className="text-white font-bold">+123-456-7890</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start group">
                 <div className="p-3 bg-white/5 rounded-xl text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 </div>
                 <div>
                   <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Location</p>
                   <p className="text-white font-bold">123 Food Street, Addis Ababa</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500 font-bold uppercase tracking-widest">
           <p>© 2026 FoodSwift Delivery. All rights reserved.</p>
           <div className="flex gap-10">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;