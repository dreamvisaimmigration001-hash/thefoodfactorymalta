import React, { useState, useEffect } from 'react';
import { PageId } from '../types';

interface PerimeterFrameProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  activeChapter?: number;
  totalChapters?: number;
  onChapterSelect?: (index: number) => void;
  onOpenRFP?: () => void;
}

export const PerimeterFrame: React.FC<PerimeterFrameProps> = ({
  currentPage,
  onNavigate,
  activeChapter = 0,
  totalChapters = 6,
  onChapterSelect,
  onOpenRFP,
}) => {
  const [timeCET, setTimeCET] = useState('');
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeCET(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Malta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' CET'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const pages: { id: PageId; label: string; num: string }[] = [
    { id: 'home', label: 'EXHIBITION', num: '01' },
    { id: 'about', label: 'ABOUT THE GROUP', num: '02' },
    { id: 'facilities', label: '35,000 SQM FACILITY', num: '03' },
    { id: 'solutions', label: 'FOOD SOLUTIONS', num: '04' },
    { id: 'brands', label: 'BRAND PORTFOLIO', num: '05' },
    { id: 'rd', label: 'R&D INNOVATION', num: '06' },
    { id: 'quality', label: 'QUALITY & AUDITS', num: '07' },
    { id: 'sustainability', label: 'SUSTAINABILITY', num: '08' },
    { id: 'story', label: 'STORY (1989—2026)', num: '09' },
    { id: 'news', label: 'DISPATCHES', num: '10' },
    { id: 'contact', label: 'COMMERCIAL RFP', num: '11' },
  ];

  const handleSelectPage = (id: PageId) => {
    onNavigate(id);
    setIsDossierOpen(false);
  };

  return (
    <>
      {/* ========================================================
          TOP ARCHITECTURAL HUD BAR
      ======================================================== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-2.5 flex items-center justify-between text-xs font-mono">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleSelectPage('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            data-cursor="HOME"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#A93428] group-hover:scale-125 transition-transform" />
            <span className="font-display font-bold text-sm tracking-wider text-white uppercase group-hover:text-[#A93428] transition-colors whitespace-nowrap">
              THE FOOD FACTORY
            </span>
          </button>
          <span className="hidden lg:inline text-white/30">|</span>
          <span className="hidden lg:inline text-white/60 tracking-wider text-[11px]">
            BULEBEL INDUSTRIAL ESTATE, MALTA
          </span>
        </div>

        {/* Center: Live Facility Status & Time */}
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68705A] animate-pulse" />
            <span>24/7 PRODUCTION ACTIVE</span>
          </div>
          <span className="text-white/20">·</span>
          <span className="text-white/90 tabular-nums font-mono">{timeCET}</span>
        </div>

        {/* Right: Quick Page Trigger & Dossier Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenRFP || (() => handleSelectPage('contact'))}
            data-cursor="RFP"
            className="px-3 py-1 bg-[#A93428] hover:bg-[#87281f] text-white text-[11px] font-display font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap"
          >
            PROCUREMENT RFP
          </button>

          <button
            onClick={() => setIsDossierOpen(!isDossierOpen)}
            data-cursor={isDossierOpen ? 'CLOSE' : 'INDEX'}
            className="px-3 py-1 bg-[#1e1e1e] hover:bg-white text-white hover:text-black border border-white/20 rounded transition-all text-[11px] font-display uppercase tracking-wider"
          >
            {isDossierOpen ? 'CLOSE ✕' : 'DOSSIER ☰'}
          </button>
        </div>
      </header>

      {/* ========================================================
          LEFT ARCHITECTURAL SPINE (Desktop Only)
      ======================================================== */}
      <aside className="fixed left-0 top-12 bottom-8 z-40 hidden xl:flex flex-col justify-between items-center py-6 px-3 border-r border-white/10 bg-[#0d0d0d]/80 backdrop-blur-sm pointer-events-auto">
        <span
          className="text-[10px] font-mono tracking-widest text-white/40 uppercase rotate-180"
          style={{ writingMode: 'vertical-rl' }}
        >
          EUROPEAN FOOD POWERHOUSE · 35,000 SQM
        </span>

        {/* Chapter Indicator Dots (Only on Home Page) */}
        {currentPage === 'home' && (
          <div className="flex flex-col gap-3">
            {Array.from({ length: totalChapters }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => onChapterSelect && onChapterSelect(idx)}
                title={`Jump to Act 0${idx + 1}`}
                className={`w-2 transition-all rounded-full ${
                  activeChapter === idx
                    ? 'h-6 bg-[#A93428]'
                    : 'h-2 bg-white/30 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}

        <span className="text-[10px] font-mono text-[#A93428] font-bold">
          0{activeChapter + 1}/0{totalChapters}
        </span>
      </aside>

      {/* ========================================================
          BOTTOM LIVE TELEMETRY BAR
      ======================================================== */}
      <footer className="fixed bottom-0 inset-x-0 z-40 bg-[#0a0a0a] border-t border-white/10 py-1.5 px-4 md:px-8 flex items-center justify-between text-[11px] font-mono text-white/60 overflow-hidden">
        <div className="flex items-center gap-6 whitespace-nowrap overflow-x-auto no-scrollbar">
          <span className="text-[#A93428] font-bold">LIVE TELEMETRY:</span>
          <span>35,000 SQM PRODUCTION COMPLEX</span>
          <span>·</span>
          <span>34,500 MEALS PREPARED DAILY</span>
          <span>·</span>
          <span>10 EXPORT COUNTRIES</span>
          <span>·</span>
          <span>17 GROUP BRANDS</span>
          <span>·</span>
          <span>22 COMPANIES</span>
          <span>·</span>
          <span>5,000+ WORKFORCE</span>
          <span>·</span>
          <span className="text-[#68705A]">2,000 SOLAR PV PANELS</span>
          <span>·</span>
          <span>HACCP · ISO 22000 · IFS · BRC</span>
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0 pl-4 border-l border-white/10">
          <span className="text-[10px] text-white/40">MALTA CENTRAL PRODUCTION</span>
        </div>
      </footer>

      {/* ========================================================
          FULL-SCREEN ARCHITECTURAL DOSSIER OVERLAY
      ======================================================== */}
      {isDossierOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0d0d0d]/98 backdrop-blur-xl flex flex-col justify-between pt-20 pb-12 px-6 md:px-14 overflow-y-auto animate-in fade-in"
        >
          <div className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-white/15 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A93428]" />
              <span className="font-display font-bold text-lg text-white uppercase tracking-wider">
                CORPORATE DOSSIER & INDEX
              </span>
            </div>
            <button
              onClick={() => setIsDossierOpen(false)}
              className="text-xs font-mono text-white/60 hover:text-white uppercase px-3 py-1 bg-white/10 rounded"
            >
              CLOSE [ESC]
            </button>
          </div>

          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-auto">
            {pages.map((p) => {
              const isActive = currentPage === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectPage(p.id)}
                  data-cursor="OPEN"
                  className={`text-left p-6 rounded border transition-all flex flex-col justify-between h-36 group ${
                    isActive
                      ? 'bg-[#A93428]/20 border-[#A93428] text-white'
                      : 'bg-[#161616] border-white/10 text-white/80 hover:bg-[#202020] hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#A93428]">
                    <span>PAGE {p.num}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white group-hover:text-[#A93428] transition-colors">
                      {p.label}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="max-w-7xl w-full mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-2">
            <span>The Food Factory · Bulebel Industrial Estate, Malta</span>
            <span>Tel: +356 2567 6500 · info@thefoodfactory.com.mt</span>
          </div>
        </div>
      )}
    </>
  );
};
