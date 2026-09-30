import React from 'react';
import { PageId } from '../types';

interface FloatingCTAProps {
  onNavigate: (page: PageId) => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Desktop Floating Vertical CTA */}
      <aside
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center"
        aria-label="Direct procurement inquiry"
      >
        <button
          onClick={() => onNavigate('contact')}
          data-cursor="INQUIRE"
          className="group flex items-center gap-3 py-3 px-4 bg-[#171717]/90 hover:bg-[#A93428] text-[#F5F1E8] backdrop-blur-md border-l border-y border-white/15 rounded-l-md shadow-2xl transition-all duration-300 origin-right hover:pr-5"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="font-display font-medium text-xs tracking-widest uppercase transition-transform group-hover:-translate-y-1">
            WORK WITH US
          </span>
          <span className="text-[#A93428] group-hover:text-white transition-colors rotate-90 text-sm font-bold">
            →
          </span>
        </button>
      </aside>

      {/* Mobile Fixed Bottom CTA (strictly compliant with <= 15% viewport height cap) */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-[#171717]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div className="flex flex-col">
            <span className="text-[10px] font-display uppercase tracking-widest text-[#EAE3D5]/70">
              European Scale
            </span>
            <span className="text-xs font-semibold text-white">
              Food Solutions & Private Label
            </span>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 bg-[#A93428] hover:bg-[#87281f] text-white font-display text-xs font-semibold tracking-wider uppercase rounded transition-colors whitespace-nowrap"
          >
            START A CONVERSATION
          </button>
        </div>
      </div>
    </>
  );
};
