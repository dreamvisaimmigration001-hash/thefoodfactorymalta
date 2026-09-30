import React, { useState } from 'react';
import { PageId } from '../types';
import { FACILITY_ZONES } from '../data/factoryData';

interface FacilitiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigate }) => {
  const [selectedZone, setSelectedZone] = useState<string>(FACILITY_ZONES[0].id);

  const activeZone = FACILITY_ZONES.find((z) => z.id === selectedZone) || FACILITY_ZONES[0];

  return (
    <div className="w-full bg-[#FBF9F5] text-[#1A1A1A] pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="border-b border-black/8 pb-10">
          <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block mb-2">
            INFRASTRUCTURE & FACILITIES
          </span>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase leading-[0.9]">
            INSIDE<br />
            <span className="text-[#C13B2B]">THE FACTORY.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#444444] mt-4 max-w-3xl leading-snug">
            A 35,000 square meter industrial complex at Bulebel, including a new 6,000 sqm multi-level expansion, engineered for micro-cleanliness, cold-chain rigor, and automated volume.
          </p>
        </div>
      </section>

      {/* Complex Key Metrics Bar */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-black/6 shadow-sm font-mono text-xs">
          <div>
            <span className="text-[#888888] block text-[10px] uppercase">TOTAL COMPLEX FOOTPRINT</span>
            <span className="text-[#111111] text-xl font-black font-display">35,000 SQM</span>
          </div>
          <div>
            <span className="text-[#888888] block text-[10px] uppercase">NEW CAPITAL EXTENSION</span>
            <span className="text-[#C13B2B] text-xl font-black font-display">+6,000 SQM</span>
          </div>
          <div>
            <span className="text-[#888888] block text-[10px] uppercase">AIR CONTROL HYGIENE</span>
            <span className="text-[#111111] text-xl font-black font-display">HEPA POSITIVE-P</span>
          </div>
          <div>
            <span className="text-[#888888] block text-[10px] uppercase">HIGH-BAY COLD STORAGE</span>
            <span className="text-[#111111] text-xl font-black font-display">4,500 PALLETS</span>
          </div>
        </div>
      </section>

      {/* Interactive Facility Navigator */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="flex flex-wrap gap-2 mb-8">
          {FACILITY_ZONES.map((zone, idx) => {
            const isActive = zone.id === selectedZone;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C13B2B] text-white shadow-md scale-102'
                    : 'bg-white text-[#444444] hover:bg-[#F4EFE6] border border-black/8 shadow-sm'
                }`}
              >
                0{idx + 1}. {zone.name}
              </button>
            );
          })}
        </div>

        {/* Selected Zone Deep Dive Display with Rich Image */}
        <div className="bg-white border border-black/8 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#C13B2B] font-bold mb-3">
                <span>FACILITY DIVISION SPECIFICATION</span>
                <span className="text-[#111111]">{activeZone.sqm}</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] uppercase">
                {activeZone.name}
              </h2>

              <p className="font-editorial italic text-xl text-[#333333] mt-2">
                {activeZone.headline}
              </p>

              <p className="font-sans-ui text-xs sm:text-sm text-[#555555] mt-4 leading-relaxed">
                {activeZone.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-black/8 text-xs font-mono">
                <div>
                  <span className="text-[#888888] block text-[10px] uppercase">
                    THERMAL / AIR REGIME
                  </span>
                  <span className="font-bold text-[#111111] mt-1 block">
                    {activeZone.temperature}
                  </span>
                </div>
                <div>
                  <span className="text-[#888888] block text-[10px] uppercase">
                    OPERATIONAL CAPACITY
                  </span>
                  <span className="font-bold text-[#C13B2B] mt-1 block">
                    {activeZone.capacity}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-black/8">
              <span className="text-[10px] font-mono text-[#888888] uppercase block mb-3 font-bold">
                ENGINEERING & HYGIENE SPECIFICATIONS:
              </span>
              <ul className="space-y-2 text-xs font-sans-ui text-[#444444]">
                {activeZone.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C13B2B] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full bg-neutral-200">
            <img
              src={activeZone.image}
              alt={activeZone.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Capital Extension Highlights */}
      <section className="py-20 px-6 md:px-12 bg-[#F4EFE6] border-t border-black/8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 border-b border-black/8 pb-6">
            <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
              CAPITAL INVESTMENT
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] uppercase mt-1">
              THE 6,000 SQM FACILITY EXTENSION
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-black/6 shadow-sm">
              <span className="text-xs font-mono text-[#C13B2B] font-bold block">6,000 SQM</span>
              <h4 className="font-display font-bold text-xl text-[#111111] uppercase mt-2">
                New Production Wing
              </h4>
              <p className="font-sans-ui text-xs text-[#555555] mt-2 leading-relaxed">
                Expands automated MAP tray sealing, continuous multi-zone blast chilling, and robotic palletizing to satisfy surging European ready-meal export volume.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-black/6 shadow-sm">
              <span className="text-xs font-mono text-[#C13B2B] font-bold block">ISO 8 CLEANROOM</span>
              <h4 className="font-display font-bold text-xl text-[#111111] uppercase mt-2">
                Testing & Sensory Lab
              </h4>
              <p className="font-sans-ui text-xs text-[#555555] mt-2 leading-relaxed">
                Equipped with accelerated shelf-life stability ovens, sensory profiling chambers, and microbiological swab testing verifying zero allergen contamination.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-black/6 shadow-sm">
              <span className="text-xs font-mono text-[#C13B2B] font-bold block">THE ACADEMY</span>
              <h4 className="font-display font-bold text-xl text-[#111111] uppercase mt-2">
                Culinary Training Center
              </h4>
              <p className="font-sans-ui text-xs text-[#555555] mt-2 leading-relaxed">
                In-house state accredited culinary institute training apprentices, hospital catering teams, and line operators in continuous HACCP and allergen protocols.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#C13B2B] hover:bg-[#A02B1D] text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all"
            >
              SCHEDULE A FACILITY PROCUREMENT AUDIT →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
