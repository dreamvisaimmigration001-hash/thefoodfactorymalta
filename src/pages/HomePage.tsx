import React, { useState } from 'react';
import { PageId } from '../types';
import {
  CORE_STATS,
  CAPABILITIES,
  FACILITY_ZONES,
  BRANDS,
  CERTIFICATIONS,
  SUSTAINABILITY_METRICS,
  GALLERY_IMAGES,
} from '../data/factoryData';
import { BrandLogo } from '../components/BrandLogo';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All');
  const [activeStep, setActiveStep] = useState(0);

  const galleryFilters = [
    'All',
    'Food Manufacturing',
    'Bakery & Pastry',
    'Ready Meals',
    'Healthcare Catering',
    'Banqueting & Gala',
    'R&D Laboratory',
  ];

  const filteredGallery =
    activeGalleryFilter === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeGalleryFilter);

  const journeySteps = [
    {
      num: '01',
      stage: 'IDEA & CONCEPT',
      title: 'Nutritional Specification & Recipe Design',
      desc: 'Developing bespoke culinary recipes matching exact dietary, calorific, and retail specifications.',
      img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '02',
      stage: 'R&D LAB',
      title: 'Food Science & Sensory Profiling',
      desc: 'Formulation testing in our ISO 8 laboratory cleanroom, testing water activity, pH curves, and clean-label shelf-life.',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '03',
      stage: 'INGREDIENTS',
      title: 'Audited Mediterranean Sourcing',
      desc: '100% barcoded batch quarantine for fresh Mediterranean produce, flours, dairy, and Halal-certified ingredients.',
      img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '04',
      stage: 'PRODUCTION',
      title: 'High-Volume Precision Cooking',
      desc: '34,500 meals cooked daily utilizing tilting steam kettles, automated braising units, and multi-tier stone ovens.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '05',
      stage: 'QUALITY & HACCP',
      title: 'Continuous Micro-Testing & X-Ray Sensors',
      desc: 'Critical control points verified, rapid blast chilling to +3°C within 90 minutes, and zero pathogen tolerance.',
      img: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '06',
      stage: 'MAP PACKAGING',
      title: 'Modified Atmosphere Gas-Flush Sealing',
      desc: 'Hermetic barrier packaging replacing oxygen with inert gas to naturally extend chilled retail shelf life.',
      img: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '07',
      stage: 'DISTRIBUTION',
      title: 'Unbroken Cold Chain Telematics',
      desc: 'GPS-monitored refrigerated fleet dispatching across Malta, international airport catering, and maritime export routes.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '08',
      stage: 'CONSUMER TABLE',
      title: 'Optimal Sensory Experience',
      desc: 'Served fresh in national hospitals, airline passenger flights, luxury weddings, and leading European supermarkets.',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <div className="w-full bg-[#FBF9F5] text-[#1A1A1A] pt-20">
      {/* ========================================================
          1. IMMERSIVE HERO WITH FOOD & INDUSTRIAL FACILITY IMAGERY
      ======================================================== */}
      <section className="relative min-h-[88vh] flex items-center bg-white border-b border-black/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#F4EFE6] rounded-full border border-black/5 text-xs font-mono text-[#111111]">
              <span className="w-2 h-2 rounded-full bg-[#C13B2B] animate-pulse" />
              <span className="font-bold tracking-wider">35,000 SQM FACILITY · BULEBEL, MALTA</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase leading-[0.9]">
              FOOD, MADE<br />
              <span className="text-[#C13B2B]">BIGGER.</span>
            </h1>

            <p className="font-editorial italic text-2xl md:text-3xl text-[#333333] leading-snug">
              From concept and high-volume production to cold-chain distribution, we create food solutions built for scale.
            </p>

            <p className="font-sans-ui text-sm text-[#555555] leading-relaxed max-w-lg">
              Operating Malta’s premier multi-disciplinary food manufacturing complex: 34,500 meals cooked daily across clinical healthcare catering, automated bakery, ready meals, R&D labs, and private-label contracts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('facilities')}
                className="px-7 py-3.5 bg-[#C13B2B] hover:bg-[#A02B1D] text-white font-display text-xs font-bold tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                DISCOVER THE FACILITY
              </button>
              <button
                onClick={() => onNavigate('solutions')}
                className="px-7 py-3.5 bg-[#F4EFE6] hover:bg-[#EAE3D5] text-[#111111] font-display text-xs font-bold tracking-wider uppercase rounded-lg border border-black/8 transition-all"
              >
                OUR FOOD SOLUTIONS
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/8 text-center sm:text-left">
              <div>
                <span className="font-display font-black text-2xl sm:text-3xl text-[#111111] block">
                  35,000
                </span>
                <span className="text-[11px] font-mono text-[#666666] uppercase">SQM COMPLEX</span>
              </div>
              <div>
                <span className="font-display font-black text-2xl sm:text-3xl text-[#C13B2B] block">
                  34,500
                </span>
                <span className="text-[11px] font-mono text-[#666666] uppercase">MEALS DAILY</span>
              </div>
              <div>
                <span className="font-display font-black text-2xl sm:text-3xl text-[#111111] block">
                  10
                </span>
                <span className="text-[11px] font-mono text-[#666666] uppercase">EXPORT COUNTRIES</span>
              </div>
            </div>
          </div>

          {/* Right Photographic Collage (Real Company Food & Facility Imagery) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg border border-black/5 group">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                  alt="Ready Meals and Gourmet Plated Dish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-mono uppercase text-[#C13B2B] font-bold">READY MEALS</span>
                  <span className="font-display font-bold text-sm uppercase">Fresh Mediterranean Recipes</span>
                </div>
              </div>

              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-black/5 group">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                  alt="Bakery stone-deck artisan bread"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-mono uppercase text-[#C13B2B] font-bold">BAKERY & PASTRY</span>
                  <span className="font-display font-bold text-sm uppercase">Stone-Deck Sourdough</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-black/5 group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial Food Production line"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-mono uppercase text-[#C13B2B] font-bold">THE FACILITY</span>
                  <span className="font-display font-bold text-sm uppercase">35,000 SQM Production Line</span>
                </div>
              </div>

              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg border border-black/5 group">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
                  alt="James Caterers Banqueting Hospitality"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-mono uppercase text-[#C13B2B] font-bold">HOSPITALITY & GALA</span>
                  <span className="font-display font-bold text-sm uppercase">James Caterers Luxury Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. COMPANY OVERVIEW & 1989 ORIGINS (Bright Editorial)
      ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-16/11 rounded-2xl overflow-hidden shadow-2xl border border-black/8">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                alt="Executive culinary chef team"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm text-xs font-mono text-[#111111]">
                BULEBEL FACILITY // MALTA
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
              OUR JOURNEY · EST. 1989
            </span>

            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] uppercase leading-tight">
              FROM A SMALL BEGINNING TO A FOOD POWERHOUSE.
            </h2>

            <p className="font-editorial italic text-xl text-[#333333]">
              “Scale should never compromise the soul of authentic cooking.”
            </p>

            <div className="space-y-4 text-sm font-sans-ui text-[#555555] leading-relaxed">
              <p>
                The journey began in 1989 when founder <strong>James Barbara</strong> started handcrafting traditional delicacies and party savouries from his family kitchen in Malta. With a focus on pristine ingredients and uncompromising quality, that small home operation quickly expanded into Malta’s premier catering institution.
              </p>
              <p>
                Today, <strong>The Food Factory</strong> operates as the industrial backbone for a diversified group of <strong>22 companies</strong>, <strong>17 brands</strong>, and over <strong>5,000 employees</strong>. Operating from a state-of-the-art 35,000 sqm complex at Bulebel, we produce food for national hospitals, international airlines, retail supermarkets, and export markets.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-[#C13B2B] hover:text-[#111111] transition-colors"
              >
                <span>EXPLORE OUR STORY (1989 — 2026)</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. AUDITED NUMBERS AT SCALE (Warm Cream Accent Block)
      ======================================================== */}
      <section className="py-20 px-6 md:px-12 bg-[#F4EFE6] border-y border-black/8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
              OFFICIAL AUDITED DATA
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111111] uppercase mt-2">
              CAPACITY MEASURED IN SCALE.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_STATS.map((stat, idx) => (
              <div
                key={stat.id}
                className="p-8 bg-white rounded-2xl border border-black/6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#C13B2B] mb-2">
                  <span>0{idx + 1}</span>
                  <span className="text-[#888888]">AUDITED BENCHMARK</span>
                </div>
                <div className="font-display font-black text-5xl text-[#111111] tracking-tight tabular-nums">
                  {stat.value.toLocaleString()}
                  <span className="text-2xl text-[#C13B2B] font-bold ml-1">{stat.suffix || ''}</span>
                </div>
                <h3 className="font-display font-bold text-base uppercase text-[#111111] mt-2">
                  {stat.label}
                </h3>
                <p className="font-sans-ui text-xs text-[#666666] mt-2 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. EXTENSIVE COMPANY PHOTO GALLERY WITH CATEGORY TABS
          (Addresses "add lots of image realted to componey")
      ======================================================== */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-black/8 gap-4">
          <div>
            <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
              VISUAL REPOSITORY
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] uppercase mt-1">
              INSIDE THE FOOD FACTORY.
            </h2>
            <p className="font-editorial italic text-lg text-[#555555] mt-1">
              Photography from our Bulebel facilities, culinary kitchens, bakery lines, and banquets.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {galleryFilters.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveGalleryFilter(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider transition-all ${
                  activeGalleryFilter === tab
                    ? 'bg-[#C13B2B] text-white shadow-sm'
                    : 'bg-[#F4EFE6] text-[#444444] hover:bg-[#EAE3D5]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-black/6 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-200">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded text-[10px] font-mono font-bold text-[#111111] shadow-sm uppercase">
                  {item.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-[#111111] uppercase group-hover:text-[#C13B2B] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans-ui text-xs text-[#666666] mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. WHAT WE DO: 8 SPECIALIZED FOOD PRODUCTION SECTORS
      ======================================================== */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-black/8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/8 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
                MANUFACTURING CAPABILITIES
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] uppercase mt-1">
                ONE FACTORY. MANY POSSIBILITIES.
              </h2>
            </div>
            <p className="font-editorial italic text-base text-[#555555] max-w-sm">
              Explore our multi-sector production divisions engineered for European scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                onClick={() => onNavigate('solutions')}
                className="bg-[#FBF9F5] border border-black/8 rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-[#C13B2B] hover:shadow-lg transition-all"
              >
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-neutral-200">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#111111] text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-display font-bold text-lg text-[#111111] uppercase group-hover:text-[#C13B2B] transition-colors leading-tight">
                      {cap.title}
                    </h3>
                    <p className="font-editorial italic text-xs text-[#555555]">
                      {cap.tagline}
                    </p>
                    <p className="font-sans-ui text-xs text-[#666666] line-clamp-3 leading-relaxed pt-1">
                      {cap.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-black/8 flex items-center justify-between text-xs font-display font-bold text-[#C13B2B]">
                    <span>{cap.specs[0]}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. INTERACTIVE FOOD JOURNEY (FROM IDEA TO PLATE)
      ======================================================== */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
            HOW WE MAKE FOOD
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] uppercase mt-1">
            FROM IDEA TO PLATE.
          </h2>
          <p className="font-editorial italic text-lg text-[#555555] mt-1">
            Follow the 8-stage industrial food manufacturing process.
          </p>
        </div>

        {/* Step Tabs Ribbon */}
        <div className="flex gap-2 overflow-x-auto pb-4 pt-1 mb-8 no-scrollbar">
          {journeySteps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase whitespace-nowrap transition-all flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-[#C13B2B] text-white font-bold shadow-md'
                    : 'bg-white text-[#444444] hover:bg-[#F4EFE6] border border-black/8'
                }`}
              >
                <span>{step.num}</span>
                <span className="font-display font-bold">{step.stage}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Card */}
        <div className="bg-white rounded-3xl border border-black/8 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#C13B2B] font-bold mb-2">
                <span>PHASE {journeySteps[activeStep].num} / 08</span>
                <span>·</span>
                <span>{journeySteps[activeStep].stage}</span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] uppercase">
                {journeySteps[activeStep].title}
              </h3>

              <p className="font-sans-ui text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
                {journeySteps[activeStep].desc}
              </p>
            </div>

            <div className="pt-6 border-t border-black/8 flex items-center justify-between">
              <span className="text-xs font-mono text-[#888888]">
                ISO 22000 · HACCP · FSSC 22000 CERTIFIED
              </span>
              <button
                onClick={() => onNavigate('rd')}
                className="px-5 py-2.5 bg-[#111111] hover:bg-[#C13B2B] text-white text-xs font-display font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                LEARN ABOUT R&D →
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[320px] bg-neutral-200">
            <img
              src={journeySteps[activeStep].img}
              alt={journeySteps[activeStep].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          7. GROUP BRAND PORTFOLIO (Magazine Showcase)
      ======================================================== */}
      <section className="py-24 px-6 md:px-12 bg-[#F4EFE6] border-y border-black/8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/8 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
                OUR BRANDS
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] uppercase mt-1">
                A PORTFOLIO BUILT FOR DIFFERENT TASTES.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('brands')}
              className="text-xs font-display font-bold uppercase tracking-wider text-[#C13B2B] hover:text-[#111111]"
            >
              EXPLORE ALL 17 BRANDS →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANDS.slice(0, 8).map((brand, idx) => (
              <div
                key={brand.id}
                onClick={() => onNavigate('brands')}
                className="bg-white rounded-2xl overflow-hidden border border-black/8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-neutral-200">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#111111] shadow-sm">
                      {brand.founded ? `EST. ${brand.founded}` : 'BRAND'}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-mono text-[#C13B2B] font-bold block uppercase">
                      {brand.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#111111] uppercase group-hover:text-[#C13B2B] transition-colors mt-1">
                      {brand.name}
                    </h3>
                    <p className="font-editorial italic text-xs text-[#555555] mt-1">
                      {brand.tagline}
                    </p>
                    <p className="font-sans-ui text-xs text-[#666666] line-clamp-2 mt-2 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-black/8 flex items-center justify-between text-xs font-display font-bold text-[#C13B2B]">
                    <span>DISCOVER BRAND</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. QUALITY & CERTIFICATIONS (Clean White Minimalist)
      ======================================================== */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
              FOOD DEFENSE & COMPLIANCE
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#111111] uppercase leading-tight">
              QUALITY ISN'T A CLAIM.<br />
              <span className="text-[#C13B2B]">IT'S A SYSTEM.</span>
            </h2>
            <p className="font-editorial italic text-xl text-[#333333] leading-relaxed">
              The Food Factory operates food safety and quality systems aligned with HACCP principles and certifications including ISO 22000, ISO 9001, FSSC 22000, IFS Food and BRC Food Safety, alongside local Halal certification.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('quality')}
                className="px-7 py-3.5 bg-[#111111] hover:bg-[#C13B2B] text-white font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                QUALITY & CERTIFICATIONS DOSSIER →
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {CERTIFICATIONS.slice(0, 6).map((cert) => (
              <div
                key={cert.id}
                className="p-5 bg-white rounded-xl border border-black/8 shadow-sm flex flex-col justify-between"
              >
                <span className="font-mono text-xs text-[#C13B2B] font-bold">
                  {cert.code}
                </span>
                <span className="font-display font-bold text-sm text-[#111111] uppercase mt-2">
                  {cert.name}
                </span>
                <span className="text-[10px] text-[#666666] font-mono mt-2 block">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. SUSTAINABILITY & SOLAR INITIATIVE
      ======================================================== */}
      <section className="py-20 px-6 md:px-12 bg-[#556048] text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-[#EAE3D5] uppercase font-bold tracking-widest block">
                GREEN FACILITY
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white uppercase mt-1">
                DESIGNED TO WASTE LESS. CREATE MORE.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('sustainability')}
              className="px-5 py-2.5 bg-white text-[#556048] font-display text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#F4EFE6] transition-colors"
            >
              SUSTAINABILITY REPORT →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUSTAINABILITY_METRICS.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="p-6 bg-white/10 rounded-2xl border border-white/15 flex flex-col justify-between"
              >
                <div>
                  <div className="font-display font-black text-3xl text-white">
                    {item.value}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#F4EFE6] uppercase mt-1">
                    {item.metric}
                  </h3>
                  <p className="font-editorial italic text-xs text-white/80 mt-1">
                    {item.impact}
                  </p>
                </div>
                <p className="font-sans-ui text-xs text-white/70 mt-3 pt-3 border-t border-white/15 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. FINAL INVITATION / COMMERCIAL PROCUREMENT CALL
      ======================================================== */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center mb-4">
            <BrandLogo className="h-12" variant="dark" />
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-[#111111] uppercase tracking-tight leading-tight">
            CREATING TASTE. AT SCALE.
          </h2>

          <p className="font-editorial italic text-2xl text-[#444444]">
            Food manufacturing, catering and innovation from Malta to the world.
          </p>

          <p className="font-sans-ui text-sm text-[#666666] max-w-xl mx-auto">
            Ready to discuss private-label production, healthcare contracts, high-volume bakery supply, or culinary R&D? Connect with our commercial development team today.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#C13B2B] hover:bg-[#A02B1D] text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              SEND COMMERCIAL INQUIRY
            </button>
            <a
              href="tel:+35625676500"
              className="px-8 py-4 bg-white hover:bg-[#F4EFE6] text-[#111111] font-display text-xs font-bold uppercase tracking-wider rounded-xl border border-black/10 transition-all"
            >
              CALL +356 2567 6500
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
