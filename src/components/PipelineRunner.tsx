import React, { useState } from 'react';

export const PipelineRunner: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'IDEA & CULINARY BRIEF',
      badge: 'CONCEPT PROTOCOL',
      temp: 'Ambient Culinary Studio',
      specs: 'Sensory target profiles, calorific limits, and packaging constraints defined.',
      detail:
        'Every product begins with nutritional modeling, cost-of-goods analysis, and ingredient viability audits by executive development chefs and food scientists.',
      icon: '💡',
    },
    {
      num: '02',
      title: 'R&D & FORMULATION TESTING',
      badge: 'ISO 8 CLEANROOM LAB',
      temp: 'Laboratory Controlled 20°C',
      specs: 'Microbiological stability, water activity (aw < 0.85), and pH curves.',
      detail:
        'Benchtop trials scale into our pilot plant line to evaluate thermal behavior in combi-steamers and pressure kettles without ingredient degradation.',
      icon: '🧪',
    },
    {
      num: '03',
      title: 'INGREDIENT QUARANTINE',
      badge: '100% INCOMING TRACEABILITY',
      temp: '+2°C to +4°C Cold Storage',
      specs: 'Barcoded lot verification, Halal authentication, and allergen screening.',
      detail:
        'Raw produce from Mediterranean growers and audited international suppliers undergoes strict quarantine inspection before entering production zones.',
      icon: '🌾',
    },
    {
      num: '04',
      title: 'HIGH-VOLUME COOKING',
      badge: 'THERMAL INTEGRITY',
      temp: 'Core Cook Temp > +75°C',
      specs: 'Tilting steam jackets, automated continuous cookers, combi-steam banks.',
      detail:
        'Master chefs oversee 34,500 portions prepared daily with automated mixing arms, precision steam injection, and electronic core temperature logging.',
      icon: '🔥',
    },
    {
      num: '05',
      title: 'IN-LINE QUALITY & MICRO-TESTING',
      badge: 'HACCP & X-RAY SENSORS',
      temp: 'Rapid Blast Chill: +3°C in 90m',
      specs: 'Automated checkweighers, X-ray foreign body scanners, ATP surface swabs.',
      detail:
        'Critical Control Points (CCPs) are monitored continuously. Blast chillers drop food temperature rapidly through the danger zone to preserve texture and flavor.',
      icon: '🛡️',
    },
    {
      num: '06',
      title: 'MODIFIED ATMOSPHERE PACKAGING',
      badge: 'MAP EXTENDED CHILL',
      temp: '+2°C Cold Room Cleanroom',
      specs: 'Gas-flush sealing (CO2/N2 mix), hermetic barrier film, tamper-proof seal.',
      detail:
        'Tray sealing lines replace ambient oxygen with food-grade inert gas, naturally doubling or tripling chilled retail shelf life without artificial preservatives.',
      icon: '📦',
    },
    {
      num: '07',
      title: 'COLD-CHAIN DISTRIBUTION',
      badge: 'TELEMETRY DISPATCH',
      temp: 'Continuous -18°C or +2°C Fleet',
      specs: 'GPS temperature telemetry, bonded customs documentation, maritime reefer.',
      detail:
        'Fleet of 45+ multi-temperature delivery vehicles transports orders to hospitals, airports, deep-water port berths, and international supermarket logistics hubs.',
      icon: '🚛',
    },
    {
      num: '08',
      title: 'CONSUMER & PATIENT TABLE',
      badge: 'FINAL REGENERATION',
      temp: 'Optimal Plating Temperature',
      specs: 'Clinical patient recovery, airline passenger dining, or family dinner table.',
      detail:
        'The culinary journey concludes with consistent mouthfeel, authentic Mediterranean flavor, and verified dietary nutrition across 10 export nations.',
      icon: '🍽️',
    },
  ];

  const active = steps[currentStep];

  return (
    <div className="bg-[#161616] border border-white/15 rounded-xl overflow-hidden shadow-2xl">
      {/* Pipeline Navigation Ribbon */}
      <div className="bg-[#1f1f1f] border-b border-white/10 p-3 overflow-x-auto no-scrollbar flex items-center gap-2">
        {steps.map((st, idx) => {
          const isCurrent = currentStep === idx;
          return (
            <button
              key={st.num}
              onClick={() => setCurrentStep(idx)}
              className={`px-3 py-2 rounded text-xs font-mono uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-all ${
                isCurrent
                  ? 'bg-[#A93428] text-white font-bold shadow-md scale-102'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="opacity-70">{st.num}</span>
              <span className="font-display font-semibold">{st.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage Display */}
      <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 bg-[#A93428] text-white text-xs font-mono font-bold rounded">
              PHASE {active.num} / 08
            </span>
            <span className="px-2.5 py-1 bg-white/10 text-white/80 text-xs font-mono rounded">
              {active.badge}
            </span>
            <span className="text-xs font-mono text-[#68705A] font-bold">
              {active.temp}
            </span>
          </div>

          <h3 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            {active.title}
          </h3>

          <p className="font-editorial italic text-xl text-[#EAE3D5]">
            {active.specs}
          </p>

          <p className="font-sans-ui text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl pt-2">
            {active.detail}
          </p>
        </div>

        {/* Visual Instrument Tile on Right */}
        <div className="lg:col-span-4 p-6 bg-[#0f0f0f] rounded-xl border border-white/10 flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-white/50">
            <span>PARAMETER SENSOR</span>
            <span className="text-[#A93428]">STAGE {active.num}</span>
          </div>

          <div className="text-center py-4">
            <span className="text-5xl block mb-2">{active.icon}</span>
            <span className="font-display font-bold text-base text-white uppercase block">
              {active.badge}
            </span>
            <span className="text-xs font-mono text-white/60 mt-1 block">
              {active.temp}
            </span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              onClick={() => setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="text-xs font-mono text-white/60 hover:text-white uppercase px-2 py-1 rounded bg-white/5"
            >
              ← PREV
            </button>
            <span className="text-xs font-mono text-[#A93428]">
              {currentStep + 1} OF 8
            </span>
            <button
              onClick={() => setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="text-xs font-mono text-white hover:text-[#A93428] uppercase px-2 py-1 rounded bg-white/10 font-bold"
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
