import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

interface NavItem {
  id: PageId;
  number: string;
  label: string;
  tagline: string;
  previewImage: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    number: '01',
    label: 'HOME',
    tagline: 'Food, Made Bigger · European Production at Scale',
    previewImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'about',
    number: '02',
    label: 'ABOUT',
    tagline: 'A Multi-Sector Culinary Ecosystem Founded in 1989',
    previewImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'facilities',
    number: '03',
    label: 'FACILITIES',
    tagline: '35,000 SQM Complex · 6,000 SQM Extension at Bulebel',
    previewImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'solutions',
    number: '04',
    label: 'FOOD SOLUTIONS',
    tagline: 'Ready Meals, Cook-Chill, Bakery, Pastry & Private Label',
    previewImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'brands',
    number: '05',
    label: 'BRANDS',
    tagline: 'James Caterers, Waistnot, Ciao Bella, Crust & More',
    previewImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'rd',
    number: '06',
    label: 'R&D & INNOVATION',
    tagline: 'Sensory Science, Shelf-Life Testing & Scaling Labs',
    previewImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'quality',
    number: '07',
    label: 'QUALITY & AUDITS',
    tagline: 'HACCP, ISO 22000, FSSC, IFS Food, BRC Grade A & Halal',
    previewImage: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sustainability',
    number: '08',
    label: 'SUSTAINABILITY',
    tagline: '2,000 PV Solar Panels, Heat Recovery & National Awards',
    previewImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'story',
    number: '09',
    label: 'OUR STORY',
    tagline: 'The Journey from Home Kitchen in 1989 to Today',
    previewImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'news',
    number: '10',
    label: 'NEWS',
    tagline: 'Capital Investments, Expansions & Corporate Press',
    previewImage: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'contact',
    number: '11',
    label: 'CONTACT',
    tagline: 'Direct Commercial Inquiries · Bulebel Industrial Estate',
    previewImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
];

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectPage = (page: PageId) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Navbar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-black/8 py-3 shadow-md'
            : 'bg-white/90 backdrop-blur-sm border-b border-black/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo with official SVG from user */}
          <button
            onClick={() => handleSelectPage('home')}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
          >
            <BrandLogo className="h-9 md:h-11" variant="dark" />
          </button>

          {/* Clean Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-xs font-display font-semibold uppercase tracking-wider text-[#333333]"
            aria-label="Main Navigation"
          >
            <button
              onClick={() => handleSelectPage('about')}
              className={`hover:text-[#C13B2B] transition-colors ${
                currentPage === 'about' ? 'text-[#C13B2B] font-bold' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleSelectPage('facilities')}
              className={`hover:text-[#C13B2B] transition-colors ${
                currentPage === 'facilities' ? 'text-[#C13B2B] font-bold' : ''
              }`}
            >
              Facilities
            </button>
            <button
              onClick={() => handleSelectPage('solutions')}
              className={`hover:text-[#C13B2B] transition-colors ${
                currentPage === 'solutions' ? 'text-[#C13B2B] font-bold' : ''
              }`}
            >
              Food Solutions
            </button>
            <button
              onClick={() => handleSelectPage('brands')}
              className={`hover:text-[#C13B2B] transition-colors ${
                currentPage === 'brands' ? 'text-[#C13B2B] font-bold' : ''
              }`}
            >
              Brands
            </button>
            <button
              onClick={() => handleSelectPage('rd')}
              className={`hover:text-[#C13B2B] transition-colors ${
                currentPage === 'rd' ? 'text-[#C13B2B] font-bold' : ''
              }`}
            >
              R&D
            </button>
            <button
              onClick={() => handleSelectPage('quality')}
              className={`hover:text-[#C13B2B] transition-colors ${
                currentPage === 'quality' ? 'text-[#C13B2B] font-bold' : ''
              }`}
            >
              Quality
            </button>
            <button
              onClick={() => handleSelectPage('sustainability')}
              className={`hover:text-[#C13B2B] transition-colors ${
                currentPage === 'sustainability' ? 'text-[#C13B2B] font-bold' : ''
              }`}
            >
              Sustainability
            </button>
            <button
              onClick={() => handleSelectPage('story')}
              className={`hover:text-[#C13B2B] transition-colors ${
                currentPage === 'story' ? 'text-[#C13B2B] font-bold' : ''
              }`}
            >
              Our Story
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSelectPage('contact')}
              className="px-4 py-2 bg-[#C13B2B] hover:bg-[#A02B1D] text-white text-xs font-display font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-sm"
            >
              Contact Us
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              className="px-3 py-2 bg-[#F4EFE6] hover:bg-[#EAE3D5] text-[#121212] border border-black/10 rounded transition-colors text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>{isMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Directory Overlay */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#FFFFFF]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 md:px-14 overflow-y-auto animate-in fade-in"
        >
          <div className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-black/10 pb-4 mb-6">
            <BrandLogo className="h-8" variant="dark" />
            <span className="text-xs font-mono text-[#555555]">
              BULEBEL INDUSTRIAL ESTATE, MALTA · TEL: +356 2567 6500
            </span>
          </div>

          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-auto">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectPage(item.id)}
                className="text-left p-4 rounded-xl border border-black/8 hover:border-[#C13B2B] bg-[#FBF9F5] hover:bg-white transition-all group flex items-center gap-4 shadow-sm"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-neutral-200">
                  <img
                    src={item.previewImage}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#C13B2B] font-bold block">
                    PAGE {item.number}
                  </span>
                  <span className="font-display font-bold text-base uppercase text-[#111111] group-hover:text-[#C13B2B] transition-colors block">
                    {item.label}
                  </span>
                  <span className="text-xs text-[#666666] line-clamp-1 block mt-0.5">
                    {item.tagline}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="max-w-7xl w-full mx-auto pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-2">
            <span>The Food Factory Malta · BLB009Y, Bulebel Industrial Estate</span>
            <button
              onClick={() => handleSelectPage('contact')}
              className="text-[#C13B2B] font-bold hover:underline"
            >
              Direct Commercial Inquiry →
            </button>
          </div>
        </div>
      )}
    </>
  );
};
