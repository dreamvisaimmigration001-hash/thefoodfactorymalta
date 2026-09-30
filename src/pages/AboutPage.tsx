import React from 'react';
import { PageId } from '../types';
import { BrandLogo } from '../components/BrandLogo';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FBF9F5] text-[#1A1A1A] pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="border-b border-black/8 pb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C13B2B] font-bold uppercase tracking-widest mb-3">
            <span>ABOUT THE FOOD FACTORY MALTA</span>
          </div>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase leading-[0.9]">
            MORE THAN<br />
            <span className="text-[#C13B2B]">A FACTORY.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#444444] mt-4 max-w-3xl leading-snug">
            A diversified food ecosystem built around culinary quality, clinical capability, and sustainable European growth.
          </p>
        </div>
      </section>

      {/* Narrative & Visual Spread */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
              OUR IDENTITY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] uppercase">
              AN INDUSTRIAL ENGINE ROOTED IN GASTRONOMY.
            </h2>
            <div className="space-y-4 text-sm font-sans-ui text-[#555555] leading-relaxed">
              <p>
                The Food Factory is Malta’s foremost integrated food production, healthcare catering, and contract manufacturing facility. Located in the Bulebel Industrial Estate, our 35,000 square meter complex was purpose-built to engineer consistency, food safety, and nutritional excellence across every single plate.
              </p>
              <p>
                We unite diverse disciplines under one roof: master bakers, patisserie chefs, clinical hospital dietitians, microbiologists, and automated cold-chain logistics engineers.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg border border-black/5">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                alt="Culinary team at The Food Factory"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg border border-black/5 pt-6">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Automated production facility line"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Guiding Values */}
      <section className="py-20 px-6 md:px-12 bg-[#F4EFE6] border-y border-black/8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] uppercase mt-2">
              OUR PURPOSE & ETHOS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl border border-black/6 shadow-sm">
              <span className="text-xs font-mono text-[#C13B2B] font-bold block mb-2">01 / 05</span>
              <h3 className="font-display font-bold text-xl uppercase text-[#111111]">
                Quality Ingredients
              </h3>
              <p className="font-sans-ui text-xs text-[#666666] mt-2 leading-relaxed">
                We believe scale should never compromise raw ingredient authenticity. From Mediterranean olive oils to single-origin flours, our supply chain is audited for purity.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-black/6 shadow-sm">
              <span className="text-xs font-mono text-[#C13B2B] font-bold block mb-2">02 / 05</span>
              <h3 className="font-display font-bold text-xl uppercase text-[#111111]">
                World-Class Brands
              </h3>
              <p className="font-sans-ui text-xs text-[#666666] mt-2 leading-relaxed">
                Nurturing premier consumer and institutional brands (James Caterers, Waistnot, Ciao Bella, Crust) that set benchmarks for taste and nutritional honesty.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-black/6 shadow-sm">
              <span className="text-xs font-mono text-[#C13B2B] font-bold block mb-2">03 / 05</span>
              <h3 className="font-display font-bold text-xl uppercase text-[#111111]">
                Uncompromising Value
              </h3>
              <p className="font-sans-ui text-xs text-[#666666] mt-2 leading-relaxed">
                Delivering proven economic efficiency and consistent product delivery to our healthcare partners, airline clients, retail distributors, and private labels.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-black/6 shadow-sm">
              <span className="text-xs font-mono text-[#C13B2B] font-bold block mb-2">04 / 05</span>
              <h3 className="font-display font-bold text-xl uppercase text-[#111111]">
                Inspiring Our People
              </h3>
              <p className="font-sans-ui text-xs text-[#666666] mt-2 leading-relaxed">
                Empowering over 5,000 group professionals with ongoing culinary training at our dedicated Academy, safe ergonomic workflows, and leadership advancement.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-black/6 shadow-sm">
              <span className="text-xs font-mono text-[#C13B2B] font-bold block mb-2">05 / 05</span>
              <h3 className="font-display font-bold text-xl uppercase text-[#111111]">
                Sustainable Returns
              </h3>
              <p className="font-sans-ui text-xs text-[#666666] mt-2 leading-relaxed">
                Pursuing durable long-term stakeholder value through disciplined capital investment, environmental conservation, renewable solar arrays, and operational excellence.
              </p>
            </div>

            <div className="p-8 bg-[#111111] text-white rounded-2xl border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#C13B2B] font-bold block mb-2">OUR VISION</span>
                <h3 className="font-display font-bold text-xl uppercase text-white">
                  The Mediterranean Food Hub
                </h3>
                <p className="font-sans-ui text-xs text-white/70 mt-2 leading-relaxed">
                  Positioning Malta as a premier European epicenter for contract food manufacturing, private-label innovation, and specialized clinical dietary solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h3 className="font-display font-bold text-3xl text-[#111111] uppercase">
          Interested in Collaborating with Our Group?
        </h3>
        <p className="font-editorial italic text-lg text-[#555555] max-w-xl mx-auto mt-2">
          Connect with our procurement and corporate partnership team to discuss manufacturing scale.
        </p>
        <div className="pt-6">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-[#C13B2B] hover:bg-[#A02B1D] text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all"
          >
            CONTACT OUR COMMERCIAL TEAM →
          </button>
        </div>
      </section>
    </div>
  );
};
