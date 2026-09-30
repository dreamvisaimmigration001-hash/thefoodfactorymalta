import React, { useState } from 'react';

export const ScaleCalculator: React.FC = () => {
  const [scaleFactor, setScaleFactor] = useState<number>(1); // 1 day, 7 days, 30 days, 365 days

  const dailyMeals = 34500;
  const currentMeals = dailyMeals * scaleFactor;
  const solarKWh = 3280 * scaleFactor;
  const cleanHours = 24 * scaleFactor;
  const ingredientsTons = (14.2 * scaleFactor).toFixed(1);

  return (
    <div className="bg-[#141414] border border-white/15 rounded-xl p-6 md:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <span className="font-mono text-xs text-[#A93428] uppercase tracking-widest">
            SIMULATED PRODUCTION DISPATCH
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase mt-1">
            INDUSTRIAL VELOCITY CALCULATOR
          </h3>
        </div>

        {/* Time Horizon Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-[#1e1e1e] rounded border border-white/10 font-mono text-xs">
          <button
            onClick={() => setScaleFactor(1)}
            className={`px-3 py-1.5 rounded transition-all ${
              scaleFactor === 1 ? 'bg-[#A93428] text-white font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            24 HOURS
          </button>
          <button
            onClick={() => setScaleFactor(7)}
            className={`px-3 py-1.5 rounded transition-all ${
              scaleFactor === 7 ? 'bg-[#A93428] text-white font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            1 WEEK
          </button>
          <button
            onClick={() => setScaleFactor(30)}
            className={`px-3 py-1.5 rounded transition-all ${
              scaleFactor === 30 ? 'bg-[#A93428] text-white font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            1 MONTH
          </button>
          <button
            onClick={() => setScaleFactor(365)}
            className={`px-3 py-1.5 rounded transition-all ${
              scaleFactor === 365 ? 'bg-[#A93428] text-white font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            ANNUAL RUN
          </button>
        </div>
      </div>

      {/* Output Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        <div className="p-6 bg-[#1a1a1a] rounded border border-white/10 flex flex-col justify-between">
          <span className="text-xs font-mono text-white/50 uppercase">PREPARED MEALS</span>
          <div className="font-display font-bold text-4xl sm:text-5xl text-white mt-2 tabular-nums">
            {currentMeals.toLocaleString()}
          </div>
          <span className="text-[11px] font-sans-ui text-[#A93428] mt-2 block">
            Hospitals, Airlines, Retail & Institutions
          </span>
        </div>

        <div className="p-6 bg-[#1a1a1a] rounded border border-white/10 flex flex-col justify-between">
          <span className="text-xs font-mono text-white/50 uppercase">FRESH INGREDIENTS PROCESSED</span>
          <div className="font-display font-bold text-4xl sm:text-5xl text-white mt-2 tabular-nums">
            {ingredientsTons} <span className="text-lg text-white/50">TONS</span>
          </div>
          <span className="text-[11px] font-sans-ui text-[#EAE3D5]/70 mt-2 block">
            Audited Mediterranean Raw Sourcing
          </span>
        </div>

        <div className="p-6 bg-[#1a1a1a] rounded border border-white/10 flex flex-col justify-between">
          <span className="text-xs font-mono text-white/50 uppercase">CLEAN PV SOLAR POWER</span>
          <div className="font-display font-bold text-4xl sm:text-5xl text-[#68705A] mt-2 tabular-nums">
            {solarKWh.toLocaleString()} <span className="text-lg text-white/50">kWh</span>
          </div>
          <span className="text-[11px] font-sans-ui text-white/60 mt-2 block">
            From 2,000 Rooftop Solar Panels
          </span>
        </div>

        <div className="p-6 bg-[#1a1a1a] rounded border border-white/10 flex flex-col justify-between">
          <span className="text-xs font-mono text-white/50 uppercase">COLD-CHAIN COMPLIANCE</span>
          <div className="font-display font-bold text-4xl sm:text-5xl text-white mt-2 tabular-nums">
            {cleanHours.toLocaleString()} <span className="text-lg text-white/50">HRS</span>
          </div>
          <span className="text-[11px] font-sans-ui text-[#A93428] mt-2 block">
            Zero Unmonitored Temperature Drift
          </span>
        </div>
      </div>
    </div>
  );
};
