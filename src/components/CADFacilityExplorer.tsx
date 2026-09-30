import React, { useState } from 'react';
import { FACILITY_ZONES } from '../data/factoryData';

interface CADFacilityExplorerProps {
  onSelectZone?: (zoneId: string) => void;
}

export const CADFacilityExplorer: React.FC<CADFacilityExplorerProps> = ({ onSelectZone }) => {
  const [activeZoneId, setActiveZoneId] = useState<string>(FACILITY_ZONES[0].id);

  const activeZone = FACILITY_ZONES.find((z) => z.id === activeZoneId) || FACILITY_ZONES[0];

  const handleSelect = (id: string) => {
    setActiveZoneId(id);
    if (onSelectZone) onSelectZone(id);
  };

  return (
    <div className="bg-[#121212] border border-white/15 rounded-xl overflow-hidden shadow-2xl">
      {/* CAD Terminal Bar */}
      <div className="bg-[#181818] border-b border-white/10 px-6 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-white/70 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A93428] animate-ping" />
          <span className="text-white font-bold">SCHEMATIC CAD TERMINAL // BULEBEL INDUSTRIAL COMPLEX</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-white/50">
          <span>SURFACE: 35,000 SQM</span>
          <span>·</span>
          <span>ZONING: POSITIVE PRESSURE</span>
          <span>·</span>
          <span className="text-[#A93428]">STATUS: 24/7 ONLINE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Interactive Blueprint Canvas (Cols 1-7) */}
        <div className="lg:col-span-7 p-6 md:p-8 bg-[#0d0d0d] relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-grid-pattern min-h-[460px]">
          {/* Blueprint Grid Layout */}
          <div className="relative w-full aspect-16/10 rounded border border-white/20 p-4 flex flex-col justify-between bg-[#141414]/90">
            {/* Architectural Crosshairs */}
            <div className="absolute top-2 left-2 font-mono text-[9px] text-white/30">+ 00.00</div>
            <div className="absolute top-2 right-2 font-mono text-[9px] text-white/30">+ 35,000 SQM</div>
            <div className="absolute bottom-2 left-2 font-mono text-[9px] text-white/30">+ EXT 6,000 SQM</div>
            <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/30">+ MALTA_BULEBEL</div>

            {/* Interactive Zones Matrix (Visual blueprint tiles) */}
            <div className="grid grid-cols-3 gap-2.5 my-auto p-2">
              {FACILITY_ZONES.map((zone, idx) => {
                const isSelected = zone.id === activeZoneId;
                return (
                  <button
                    key={zone.id}
                    onClick={() => handleSelect(zone.id)}
                    className={`p-3 text-left rounded border transition-all flex flex-col justify-between min-h-[85px] ${
                      isSelected
                        ? 'bg-[#A93428] border-white text-white shadow-xl scale-102 ring-2 ring-white/30'
                        : 'bg-[#1b1b1b] border-white/15 text-white/70 hover:bg-[#252525] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span>W-{idx + 1}</span>
                      <span className={isSelected ? 'text-white' : 'text-[#A93428]'}>
                        {zone.sqm}
                      </span>
                    </div>
                    <span className="font-display font-bold text-xs uppercase leading-tight mt-1 line-clamp-2">
                      {zone.name.replace('DIVISION', '').replace('FACILITY', '')}
                    </span>
                    <span className="text-[9px] font-mono opacity-60">
                      {zone.temperature.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Real-time telemetry legend */}
            <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
              <span>ACTIVE AIR HANDLING: HEPA-H14 FILTERS</span>
              <span>CLOSED-LOOP GLYCOL REFRIGERATION</span>
            </div>
          </div>

          <div className="mt-4 text-xs font-mono text-white/40 flex items-center justify-between">
            <span>[CLICK ANY FACILITY WING TO ENGAGE LIVE SENSOR TELEMETRY]</span>
            <span className="text-[#A93428]">8 AUDITED DIVISIONS</span>
          </div>
        </div>

        {/* Right Active Zone Telemetry & Photographic Inspection (Cols 8-12) */}
        <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-[#151515] space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#A93428] mb-2">
              <span>LIVE TELEMETRY // WING SPECIFICATION</span>
              <span className="text-white/60">{activeZone.sqm}</span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white uppercase">
              {activeZone.name}
            </h3>

            <p className="font-editorial italic text-base text-[#EAE3D5] mt-1">
              {activeZone.headline}
            </p>

            {/* Live Parameter Meters */}
            <div className="grid grid-cols-2 gap-3 my-4 p-3 bg-[#1e1e1e] rounded border border-white/10 font-mono text-xs">
              <div>
                <span className="text-[9px] text-white/40 uppercase block">THERMAL REGIME</span>
                <span className="text-white font-bold text-sm">{activeZone.temperature}</span>
              </div>
              <div>
                <span className="text-[9px] text-white/40 uppercase block">RATED OUTPUT</span>
                <span className="text-[#A93428] font-bold text-sm">{activeZone.capacity}</span>
              </div>
            </div>

            <p className="font-sans-ui text-xs text-white/70 leading-relaxed">
              {activeZone.description}
            </p>

            {/* Engineering Highlights */}
            <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
              <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                KEY HYGIENE & AUTOMATION SYSTEMS:
              </span>
              {activeZone.features.slice(0, 3).map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 text-xs font-sans-ui text-[#EAE3D5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A93428] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-16/9 rounded overflow-hidden border border-white/15">
            <img
              src={activeZone.image}
              alt={activeZone.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-white">
              HD CAMERA // LIVE FEED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
