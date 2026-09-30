import React from 'react';
import { PageId } from '../types';
import { SUSTAINABILITY_METRICS, SUSTAINABILITY_AWARDS } from '../data/factoryData';

interface SustainabilityPageProps {
  onNavigate: (page: PageId) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#171717] text-[#F5F1E8] pt-28 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="border-b border-white/10 pb-12">
          <span className="text-[11px] font-display uppercase tracking-widest text-[#68705A] font-semibold">
            08 · ECOLOGICAL ARCHITECTURE
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase mt-3 leading-[0.9]">
            BETTER FOOD.<br />
            <span className="text-[#68705A]">BETTER FOOTPRINT.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#EAE3D5] mt-6 max-w-3xl">
            Proving that high-volume food manufacturing can operate in complete synergy with environmental stewardship.
          </p>
        </div>
      </section>

      {/* Core Technical Systems Grid */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#68705A] uppercase tracking-widest">
            ENGINEERED SYSTEMS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase mt-1">
            HOW THE FACILITY OPERATES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUSTAINABILITY_METRICS.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 rounded bg-[#1e231b] border border-[#68705A]/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#EAE3D5]/60 mb-2">
                  <span>SYSTEM 0{idx + 1}</span>
                  <span className="text-[#68705A]">VERIFIED</span>
                </div>
                <div className="font-display font-bold text-4xl text-white my-2">
                  {item.value}
                </div>
                <h3 className="font-display font-bold text-lg text-white uppercase">
                  {item.metric}
                </h3>
                <p className="font-editorial italic text-sm text-[#EAE3D5] mt-1">
                  {item.impact}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 text-xs font-sans-ui text-[#EAE3D5]/70 leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Awards & Recognitions */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-20">
        <div className="bg-[#141414] border border-white/15 rounded p-8 md:p-12">
          <span className="text-xs font-mono text-[#68705A] uppercase tracking-widest">
            INDEPENDENT RECOGNITION
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase mt-2 mb-8">
            VERIFIED SUSTAINABILITY AWARDS
          </h2>

          <div className="space-y-6">
            {SUSTAINABILITY_AWARDS.map((award, aIdx) => (
              <div
                key={aIdx}
                className="p-6 bg-[#1a1a1a] rounded border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 bg-[#68705A] text-white text-xs font-mono font-bold rounded">
                      {award.year}
                    </span>
                    <span className="text-xs font-mono text-white/50">{award.organization}</span>
                  </div>
                  <h4 className="font-display font-bold text-xl text-white uppercase pt-1">
                    {award.title}
                  </h4>
                  <p className="font-sans-ui text-xs text-[#EAE3D5]/70">
                    {award.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Procurement */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto text-center">
        <p className="font-editorial italic text-xl text-[#EAE3D5] max-w-xl mx-auto mb-6">
          We invite supermarket retailers and global distributors to review our environmental metrics and carbon-reduction audit reports.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 bg-[#68705A] hover:bg-[#575e4b] text-white font-display text-xs font-semibold uppercase tracking-wider rounded transition-colors"
        >
          REQUEST ENVIRONMENTAL REPORT →
        </button>
      </section>
    </div>
  );
};
