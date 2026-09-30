import React from 'react';
import { PageId } from '../types';
import { BRANDS } from '../data/factoryData';

interface BrandsPageProps {
  onNavigate: (page: PageId) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FBF9F5] text-[#1A1A1A] pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="border-b border-black/8 pb-10">
          <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block mb-2">
            GROUP BRAND DIRECTORY
          </span>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase leading-[0.9]">
            BRANDS WITH<br />
            <span className="text-[#C13B2B]">A PURPOSE.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#444444] mt-4 max-w-3xl leading-snug">
            From high-end banqueting to fitness nutrition, artisan Italian gelato, and maritime supply channels.
          </p>
        </div>
      </section>

      {/* Editorial Brand Directory with Large Photography */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-16 mb-24">
        {BRANDS.map((brand, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={brand.id}
              className={`p-8 md:p-12 rounded-3xl bg-white border border-black/8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Block */}
              <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-md bg-neutral-200">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-lg text-xs font-mono font-bold text-[#111111] shadow-sm">
                    {brand.founded ? `FOUNDED ${brand.founded}` : 'GROUP ENTITY'}
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className={`lg:col-span-6 space-y-4 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                <div className="flex items-center gap-3 text-xs font-mono text-[#C13B2B] font-bold">
                  <span>0{idx + 1} / 08</span>
                  <span className="text-black/20">·</span>
                  <span className="uppercase tracking-widest text-[#555555]">{brand.category}</span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
                  {brand.name}
                </h2>

                <p className="font-editorial italic text-xl text-[#333333]">
                  {brand.tagline}
                </p>

                <p className="font-sans-ui text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {brand.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono text-[#888888] uppercase block font-bold">
                    CORE DISTINCTIONS:
                  </span>
                  <ul className="space-y-1 text-xs font-sans-ui text-[#444444]">
                    {brand.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C13B2B]" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {brand.website && (
                  <div className="pt-2">
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#C13B2B] hover:text-[#111111] transition-colors"
                    >
                      <span>VISIT OFFICIAL BRAND SITE</span>
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Inquiry CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="max-w-2xl mx-auto space-y-4 p-10 bg-[#F4EFE6] rounded-3xl border border-black/8">
          <span className="font-mono text-xs text-[#C13B2B] font-bold uppercase">
            COMMERCIAL DISTRIBUTION
          </span>
          <h3 className="font-display font-bold text-3xl text-[#111111] uppercase">
            Interested in Stocking Our Brands?
          </h3>
          <p className="font-editorial italic text-base text-[#555555]">
            We partner with supermarket retail chains, food service distributors, and export partners worldwide.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#C13B2B] hover:bg-[#A02B1D] text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all"
            >
              BECOME A DISTRIBUTION PARTNER →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
