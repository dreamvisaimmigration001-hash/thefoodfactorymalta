import React from 'react';
import { PageId } from '../types';
import { ResilientImage } from '../components/ResilientImage';

interface RDPageProps {
  onNavigate: (page: PageId) => void;
}

export const RDPage: React.FC<RDPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'IDEA',
      desc: 'Consumer macro-trend analysis, nutritional brief formulation, and ingredient discovery.',
    },
    {
      num: '02',
      title: 'TEST',
      desc: 'Benchtop kitchen trials, pilot testing, and chemical-biological water activity and pH checks.',
    },
    {
      num: '03',
      title: 'REFINE',
      desc: 'Sensory profiling in isolated tasting booths, texture adjustments, and clean-label natural preservation.',
    },
    {
      num: '04',
      title: 'PRODUCE',
      desc: 'Pilot batch replication inside the ISO 8 cleanroom line to evaluate thermal curves under pressure.',
    },
    {
      num: '05',
      title: 'SCALE',
      desc: 'Industrial transfer to 1,000L steam kettles and continuous MAP packaging lines without quality drift.',
    },
  ];

  return (
    <div className="w-full bg-[#171717] text-[#F5F1E8] pt-28 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="border-b border-white/10 pb-12">
          <span className="text-[11px] font-display uppercase tracking-widest text-[#A93428] font-semibold">
            06 · CULINARY SCIENCE & INNOVATION
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase mt-3 leading-[0.9]">
            WHERE FOOD<br />
            <span className="text-[#A93428]">MEETS POSSIBILITY.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#EAE3D5] mt-6 max-w-3xl">
            Bridging artisan gastronomy, biochemistry, and automated manufacturing to engineer the next generation of food products.
          </p>
        </div>
      </section>

      {/* Visual Sequence: IDEA → TEST → REFINE → PRODUCE → SCALE */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#A93428] uppercase tracking-widest">
            THE R&D PROTOCOL
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase mt-1">
            FROM BENCHTOP TO FULL SCALE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-6 bg-[#1b1b1b] border border-white/15 rounded flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#A93428]">{st.num}</span>
                <h3 className="font-display font-bold text-2xl text-white uppercase mt-2">
                  {st.title}
                </h3>
                <p className="font-sans-ui text-xs text-[#EAE3D5]/70 mt-3 leading-relaxed">
                  {st.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[10px] font-mono text-white/40">
                STAGE VERIFIED
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Split Laboratory Showcase */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#A93428] uppercase tracking-widest">
              IN-HOUSE TESTING LABORATORY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white uppercase">
              PRECISION ANALYTICAL RIGOR.
            </h2>
            <div className="space-y-4 text-xs sm:text-sm font-sans-ui text-[#EAE3D5]/80 leading-relaxed">
              <p>
                Our 2,200 square meter R&D facility and testing laboratory functions as both our internal engine of innovation and an independent contract research hub for clients.
              </p>
              <p>
                Equipped with spectrophotometers, water activity meters, microbial incubators, and accelerated shelf-life stability test cabinets, we ensure that every recipe maintains microbiological safety and sensory integrity across its entire shelf life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-sans-ui">
              <div className="p-4 bg-white/5 border border-white/10 rounded">
                <span className="font-display font-bold text-white block uppercase">Clean-Label Preservation</span>
                <span className="text-[#EAE3D5]/60 mt-1 block">Replacing synthetic additives with natural plant polyphenols</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded">
                <span className="font-display font-bold text-white block uppercase">Texture Optimization</span>
                <span className="text-[#EAE3D5]/60 mt-1 block">Ensuring frozen bakery and sauces regenerate flawlessly</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 rounded overflow-hidden border border-white/15 bg-[#222222]">
              <ResilientImage
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
                alt="Food testing laboratory"
                aspectRatioClass="aspect-4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* R&D Services for External Clients */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto">
        <div className="p-8 md:p-12 bg-[#1b1716] border border-[#A93428]/40 rounded flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#A93428] uppercase">
              CONFIDENTIAL CLIENT DEVELOPMENT
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase mt-1">
              Have an Idea You Want to Scale?
            </h3>
            <p className="font-editorial italic text-base text-[#EAE3D5]/80 mt-2 max-w-xl">
              We offer turnkey recipe development, nutritional certification, packaging testing, and trial production under strict non-disclosure agreements.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#A93428] hover:bg-[#87281f] text-white font-display text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap"
          >
            CONSULT OUR R&D TEAM →
          </button>
        </div>
      </section>
    </div>
  );
};
