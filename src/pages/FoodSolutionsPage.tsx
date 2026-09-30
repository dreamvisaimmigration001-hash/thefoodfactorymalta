import React, { useState } from 'react';
import { PageId } from '../types';
import { FOOD_SOLUTIONS } from '../data/factoryData';

interface FoodSolutionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const FoodSolutionsPage: React.FC<FoodSolutionsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL SOLUTIONS' },
    { id: 'ready-meals', label: 'READY MEALS' },
    { id: 'cook-chill', label: 'COOK & CHILL' },
    { id: 'cook-freeze', label: 'COOK & FREEZE' },
    { id: 'bakery', label: 'BAKERY & PASTRY' },
    { id: 'special', label: 'SPECIAL DIETARY' },
    { id: 'private', label: 'PRIVATE LABEL' },
  ];

  const filteredSolutions =
    selectedCategory === 'all'
      ? FOOD_SOLUTIONS
      : FOOD_SOLUTIONS.filter(
          (sol) =>
            sol.id.toLowerCase().includes(selectedCategory) ||
            sol.title.toLowerCase().includes(selectedCategory)
        );

  return (
    <div className="w-full bg-[#FBF9F5] text-[#1A1A1A] pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="border-b border-black/8 pb-10">
          <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block mb-2">
            MANUFACTURING CAPABILITIES & PRODUCTS
          </span>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase leading-[0.9]">
            FOOD SOLUTIONS<br />
            <span className="text-[#C13B2B]">WITHOUT LIMITS.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#444444] mt-4 max-w-3xl leading-snug">
            From single-serve supermarket ready meals to multi-thousand portion hospital diets and export-grade frozen delicacies.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-xl border border-black/8 shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded-lg transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#C13B2B] text-white shadow-sm'
                  : 'text-[#444444] hover:bg-[#F4EFE6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border border-black/8 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
            >
              <div>
                <div className="relative aspect-16/10 bg-neutral-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded text-[10px] font-mono font-bold text-[#111111] shadow-sm">
                    {item.temperatureRegime}
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#C13B2B] font-bold">
                    <span>CATEGORY 0{idx + 1}</span>
                    <span className="text-[#888888]">{item.shelfLife}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-[#111111] uppercase group-hover:text-[#C13B2B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-editorial italic text-sm text-[#444444]">
                    {item.tagline}
                  </p>
                  <p className="font-sans-ui text-xs text-[#666666] leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <div className="pt-4 border-t border-black/8">
                  <span className="text-[10px] font-mono text-[#888888] uppercase block mb-2 font-bold">
                    TARGET APPLICATIONS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.applications.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[11px] font-sans-ui text-[#444444] bg-[#F4EFE6] px-2.5 py-1 rounded-md"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contract & Formulation Support */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="p-8 md:p-12 bg-[#F4EFE6] rounded-3xl border border-black/8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#C13B2B] uppercase font-bold">
              BESPOKE FORMULATION & PRIVATE LABEL
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] uppercase mt-1">
              Need a Custom Recipe Engineered for Scale?
            </h3>
            <p className="font-editorial italic text-base text-[#555555] mt-2 max-w-xl">
              Our culinary innovation labs and food scientists will formulate, test, shelf-life validate, and mass-produce your proprietary SKU.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 bg-[#C13B2B] hover:bg-[#A02B1D] text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all whitespace-nowrap"
          >
            DISCUSS PRIVATE LABEL →
          </button>
        </div>
      </section>
    </div>
  );
};
