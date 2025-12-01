'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Serinova',
    href: '/services/vibration-analysis',
    children: [
      { label: 'Stativa Vibronis', href: '/services/vibration-analysis' },
      { label: 'Lazum Dorectis', href: '#' },
      { label: 'Dynara Libretio', href: '#' },
      { label: 'Ultraxa Probantis', href: '#' },
    ]
  },
  {
    label: 'Induriana',
    href: '/industries/mining',
    children: [
      { label: 'Fessum & Exolatio', href: '/industries/mining' },
      { label: 'Olefa & Gax', href: '#' },
      { label: 'Lirna & Cherta', href: '#' },
      { label: 'Potrena Generatia', href: '#' },
    ]
  },
  { label: 'Virel et Cauta', href: '/trust-and-safety' },
  { label: 'Condivio', href: '#contact' }
];

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHero, setIsHero] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for scroll handling
  const lastScrollY = React.useRef(0);
  const scrollTimeout = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight - 100; // Approx hero height threshold

      // 1. Hero Transparency Logic
      setIsHero(currentScrollY < heroHeight);

      // 2. Visibility Logic (Hide on scroll down, show on scroll up)
      if (currentScrollY < 50) {
        setIsVisible(true); // Always show at very top
      } else if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false); // Hide on scroll down
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(true); // Show on scroll up
      }

      lastScrollY.current = currentScrollY;

      // 3. "Mind of its own" - Reappear at rest
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // Reappear after 1.5s of stillness
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${isHero ? 'bg-white/90 backdrop-blur-sm py-6 border-transparent' : 'bg-white shadow-md py-4 border-gray-100'}
        `}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center relative">

          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <h1 className="font-display font-black text-3xl tracking-tighter text-text-main uppercase">
              PRIMAC
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12" onMouseLeave={() => setHoveredItem(null)}>
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group h-full"
                onMouseEnter={() => setHoveredItem(item.children ? item.label : null)}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-1 font-display text-xs font-bold uppercase tracking-[0.1em] text-text-main hover:text-brand-gold transition-colors py-2"
                >
                  {item.label}
                  {item.children && (
                    <span
                      className={`text-[10px] transition-transform duration-300 ${hoveredItem === item.label ? 'rotate-180 text-brand-gold' : ''}`}
                    >
                      ▼
                    </span>
                  )}
                </Link>

                {/* Hover Indicator Line */}
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-brand-gold transform origin-left transition-transform duration-300 ${hoveredItem === item.label ? 'scale-x-100' : 'scale-x-0'
                  }`} />
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+18005550199"
              className="bg-brand-red text-white px-6 py-3 font-display font-bold text-xs uppercase tracking-[0.1em] hover:bg-red-700 transition-colors"
            >
              24/7 Praesidium
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-main z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="font-display text-lg tracking-[0.2em] uppercase">
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>

        {/* Desktop Mega Menu Panel */}
        <AnimatePresence>
          {hoveredItem && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-hidden"
              onMouseEnter={() => setHoveredItem(hoveredItem)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="max-w-[1920px] mx-auto px-12 py-16 grid grid-cols-12 gap-8">
                <div className="col-span-3">
                  <h3 className="font-display text-text-muted tracking-widest text-xs uppercase mb-6">Explore {hoveredItem}</h3>
                  <ul className="space-y-4">
                    {NAV_ITEMS.find(i => i.label === hoveredItem)?.children?.map(child => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child.href)}
                          className="group flex items-center gap-3 text-text-main hover:text-brand-gold transition-colors font-sans font-medium text-lg"
                        >
                          <span className="text-sm opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-gold">→</span>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-5 col-start-8">
                  <div className="aspect-video bg-bg-panel relative overflow-hidden group cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                      alt="Featured"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-8 left-8 bg-white p-6 shadow-lg max-w-xs">
                      <p className="font-display text-xs text-brand-gold uppercase tracking-widest mb-2">Ministerium Insigne</p>
                      <p className="font-display text-xl font-bold text-text-main uppercase tracking-tight">Analytica Vibrationum</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-8 pb-12">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-4">
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-display text-2xl font-bold uppercase text-text-main tracking-tight flex justify-between items-center"
                  >
                    {item.label}
                    {item.children && <span className="text-brand-gold">→</span>}
                  </Link>
                  {item.children && (
                    <div className="mt-4 pl-4 flex flex-col gap-3">
                      {item.children.map(child => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child.href)}
                          className="text-text-muted font-sans text-sm font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
