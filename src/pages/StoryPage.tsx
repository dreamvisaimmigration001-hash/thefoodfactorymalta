import React, { useState } from 'react';
import { PageId } from '../types';
import { TIMELINE } from '../data/factoryData';

interface StoryPageProps {
  onNavigate: (page: PageId) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  const [selectedYear, setSelectedYear] = useState<string>(TIMELINE[0].year);

  const activeMilestone = TIMELINE.find((t) => t.year === selectedYear) || TIMELINE[0];

  return (
    <div className="w-full bg-[#FBF9F5] text-[#1A1A1A] pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="border-b border-black/8 pb-10">
          <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block mb-2">
            CHRONICLE OF GROWTH (1989 — PRESENT)
          </span>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase leading-[0.9]">
            FROM 1989<br />
            <span className="text-[#C13B2B]">TO TODAY.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#444444] mt-4 max-w-3xl leading-snug">
            How James Barbara turned handmade home delicacies into Malta's largest, most modern food manufacturing complex.
          </p>
        </div>
      </section>

      {/* Interactive Year Selector Ribbon */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar">
          {TIMELINE.map((item) => {
            const isSelected = item.year === selectedYear;
            return (
              <button
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                className={`px-5 py-2.5 rounded-xl font-display text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#C13B2B] text-white shadow-md scale-105'
                    : 'bg-white text-[#444444] hover:bg-[#F4EFE6] border border-black/8'
                }`}
              >
                {item.year}
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured Milestone Spotlight Card */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="bg-white border border-black/8 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-display font-black text-6xl sm:text-7xl text-[#C13B2B]">
                  {activeMilestone.year}
                </span>
                <span className="text-xs font-mono text-[#888888] uppercase tracking-widest pl-3 border-l border-black/15 font-bold">
                  DECISIVE MILESTONE
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] uppercase mt-4">
                {activeMilestone.title}
              </h2>
              <p className="font-editorial italic text-xl text-[#333333] mt-2">
                {activeMilestone.headline}
              </p>

              <p className="font-sans-ui text-sm sm:text-base text-[#555555] mt-6 leading-relaxed">
                {activeMilestone.description}
              </p>
            </div>

            <div className="pt-6 border-t border-black/8">
              <span className="text-[10px] font-mono text-[#888888] uppercase block mb-1 font-bold">
                STRATEGIC SIGNIFICANCE:
              </span>
              <p className="font-editorial italic text-base text-[#C13B2B] font-bold">
                {activeMilestone.significance}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full bg-neutral-200">
            <img
              src={activeMilestone.image}
              alt={activeMilestone.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Full Vertical Chronicle Stream */}
      <section className="py-20 px-6 md:px-12 bg-[#F4EFE6] border-t border-black/8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 border-b border-black/8 pb-6 flex items-center justify-between">
            <span className="font-mono text-xs text-[#C13B2B] font-bold uppercase tracking-widest">
              HISTORICAL TIMELINE
            </span>
            <span className="font-mono text-xs text-[#666666]">
              1989 — 2026 CHRONOLOGY
            </span>
          </div>

          <div className="border-l-2 border-[#C13B2B]/40 ml-4 md:ml-8 pl-8 md:pl-12 space-y-14">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative group">
                <div
                  className={`absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full border-2 transition-all ${
                    item.year === selectedYear
                      ? 'bg-[#C13B2B] border-white ring-4 ring-[#C13B2B]/20 scale-125'
                      : 'bg-white border-[#C13B2B] group-hover:scale-110'
                  }`}
                />

                <div className="flex items-baseline gap-4 mb-1">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#111111] group-hover:text-[#C13B2B] transition-colors">
                    {item.year}
                  </span>
                  <span className="font-mono text-xs text-[#888888] uppercase font-bold">
                    {item.title}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#111111] uppercase">
                  {item.headline}
                </h3>

                <p className="font-sans-ui text-xs sm:text-sm text-[#555555] mt-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-2 text-xs font-editorial italic text-[#C13B2B] font-bold">
                  {item.significance}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#C13B2B] hover:bg-[#A02B1D] text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all"
            >
              BECOME PART OF OUR ONGOING STORY →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
