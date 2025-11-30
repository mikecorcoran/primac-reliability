import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-contrast text-white pt-24 pb-12">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">

          <div className="col-span-2 md:col-span-4">
            <h1 className="font-display font-black text-2xl md:text-3xl tracking-tighter text-white mb-6 md:mb-8 uppercase">
              PRIMAC
            </h1>
            <address className="not-italic text-gray-400 font-sans text-sm leading-loose">
              Primac Reliability HQ<br />
              100 Industrial Parkway<br />
              Nordic Sector, FI-00100<br />
              +358 20 123 4567
            </address>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-display font-bold text-white uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4 font-sans text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-display font-bold text-white uppercase tracking-widest text-xs mb-6">Newsletter</h4>
            <form className="flex flex-col sm:flex-row border-b border-white/20 pb-2 gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent w-full outline-none text-white font-sans placeholder-white/30 text-sm"
              />
              <button type="button" className="text-white font-display font-bold text-xs uppercase tracking-widest hover:text-brand-gold transition-colors text-left sm:text-right">
                Subscribe
              </button>
            </form>
          </div>

          {/* New CTA Section */}
          <div className="col-span-2 md:col-span-4 mt-8 md:mt-0">
            <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-4">
              Is Your Plant At Risk?
            </h2>
            <p className="font-sans text-gray-400 text-sm mb-6 max-w-md">
              Schedule a critical asset audit today. We respond within 24 hours.
            </p>
            <a
              href="tel:+18005550199"
              className="inline-flex items-center justify-center w-full md:w-auto gap-2 bg-brand-red text-white px-6 py-4 md:py-3 font-display font-bold text-xs uppercase tracking-[0.1em] hover:bg-[#4a7010] transition-colors"
            >
              Contact 24/7 Dispatch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/10 text-xs text-gray-500 font-sans uppercase tracking-wider font-bold">
          <p>© 2024 Primac Reliability.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};