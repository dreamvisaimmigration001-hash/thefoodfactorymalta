import React, { useState } from 'react';
import { PageId } from '../types';
import { CERTIFICATIONS } from '../data/factoryData';

interface QualityPageProps {
  onNavigate: (page: PageId) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onNavigate }) => {
  const [selectedCert, setSelectedCert] = useState<string>(CERTIFICATIONS[0].id);

  const activeCert = CERTIFICATIONS.find((c) => c.id === selectedCert) || CERTIFICATIONS[0];

  return (
    <div className="w-full bg-[#171717] text-[#F5F1E8] pt-28 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="border-b border-white/10 pb-12">
          <span className="text-[11px] font-display uppercase tracking-widest text-[#A93428] font-semibold">
            07 · GOVERNANCE & FOOD SAFETY
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase mt-3 leading-[0.9]">
            EVERY BITE<br />
            STARTS WITH<br />
            <span className="text-[#A93428]">CONTROL.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#EAE3D5] mt-6 max-w-3xl">
            Operating under continuous independent audits conforming to HACCP, ISO 22000, ISO 9001, FSSC 22000, IFS Food, BRC Food Safety, and certified Halal dietary standards.
          </p>
        </div>
      </section>

      {/* Interactive Certification Grid */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#A93428] uppercase tracking-widest">
            OFFICIAL ACCREDITATIONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase mt-1">
            VERIFIED AUDIT BENCHMARKS
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {CERTIFICATIONS.map((cert) => {
            const isSelected = cert.id === selectedCert;
            return (
              <button
                key={cert.id}
                onClick={() => setSelectedCert(cert.id)}
                data-cursor="AUDIT"
                className={`p-6 text-left rounded border transition-all ${
                  isSelected
                    ? 'border-[#A93428] bg-[#241716] shadow-xl'
                    : 'border-white/10 bg-[#1a1a1a] hover:bg-[#202020]'
                }`}
              >
                <span className="font-mono text-xs text-[#A93428] block">
                  {cert.code}
                </span>
                <span className="font-display font-bold text-sm text-white uppercase mt-2 block">
                  {cert.name}
                </span>
                <span className="text-[10px] text-white/50 font-sans-ui mt-2 block">
                  {cert.status}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Certification Spotlight */}
        <div className="p-8 md:p-12 bg-[#1c1c1c] border border-white/15 rounded flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#A93428] text-white text-xs font-mono font-bold rounded">
                {activeCert.code}
              </span>
              <span className="text-xs font-mono text-[#68705A] uppercase">
                {activeCert.status}
              </span>
            </div>
            <h3 className="font-display font-bold text-3xl text-white uppercase">
              {activeCert.name}
            </h3>
            <p className="font-editorial italic text-lg text-[#EAE3D5]">
              Scope: {activeCert.scope}
            </p>
            <p className="font-sans-ui text-xs sm:text-sm text-[#EAE3D5]/80 leading-relaxed">
              {activeCert.summary}
            </p>
            <div className="pt-2 text-xs font-mono text-white/50">
              Accreditation Body: {activeCert.body}
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-8 flex flex-col justify-center space-y-4 text-xs font-sans-ui">
            <span className="font-mono uppercase text-white/40 block">AUDIT TRANSPARENCY</span>
            <p className="text-[#EAE3D5]/80">
              All compliance documentation, microbiological test logs, and third-party audit reports are made available to prospective institutional partners during commercial evaluations.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="text-left text-[#A93428] font-display font-semibold uppercase hover:underline"
            >
              REQUEST FULL AUDIT DOSSIER →
            </button>
          </div>
        </div>
      </section>

      {/* Three Pillars of Safety Architecture */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/10 bg-[#151515] rounded">
            <span className="font-mono text-xs text-[#A93428]">PILLAR 01</span>
            <h4 className="font-display font-bold text-xl text-white uppercase mt-2">
              Physical Segregation
            </h4>
            <p className="font-sans-ui text-xs text-[#EAE3D5]/70 mt-3 leading-relaxed">
              Separate positive-pressure cleanroom suites for certified gluten-free, dairy-free, and Halal preparation prevent airborne flour dust and cross-contact.
            </p>
          </div>

          <div className="p-8 border border-white/10 bg-[#151515] rounded">
            <span className="font-mono text-xs text-[#A93428]">PILLAR 02</span>
            <h4 className="font-display font-bold text-xl text-white uppercase mt-2">
              Automated In-Line Inspection
            </h4>
            <p className="font-sans-ui text-xs text-[#EAE3D5]/70 mt-3 leading-relaxed">
              Every sealed package passes through automated checkweighers and high-sensitivity X-ray inspection arrays to eliminate any physical foreign contaminants.
            </p>
          </div>

          <div className="p-8 border border-white/10 bg-[#151515] rounded">
            <span className="font-mono text-xs text-[#A93428]">PILLAR 03</span>
            <h4 className="font-display font-bold text-xl text-white uppercase mt-2">
              100% Traceability
            </h4>
            <p className="font-sans-ui text-xs text-[#EAE3D5]/70 mt-3 leading-relaxed">
              Computerized batch coding records raw ingredient provenance, cooking temperatures, pasteurization hold times, and delivery vehicle GPS temperatures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
