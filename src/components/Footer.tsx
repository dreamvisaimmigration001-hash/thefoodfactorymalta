import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONTACT } from '../data/factoryData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#121212] text-[#F5F1E8] border-t border-black/10 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Branding Bar with Official Logo */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <BrandLogo className="h-10 md:h-12" variant="light" />
            <p className="font-editorial italic text-lg text-[#EAE3D5] mt-3">
              Europe's premier food production and culinary manufacturing facility in Malta.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono text-white/70">
            <span className="px-3 py-1.5 rounded bg-white/10 border border-white/15">35,000 SQM COMPLEX</span>
            <span className="px-3 py-1.5 rounded bg-white/10 border border-white/15">34,500 MEALS DAILY</span>
            <span className="px-3 py-1.5 rounded bg-white/10 border border-white/15">10 COUNTRIES</span>
          </div>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10 text-xs">
          {/* Col 1: Headquarters */}
          <div className="space-y-3">
            <span className="font-mono text-[#C13B2B] uppercase font-bold tracking-wider block">
              HEADQUARTERS & MANUFACTURING
            </span>
            <p className="font-display font-semibold text-white text-sm">
              The Food Factory Malta
            </p>
            <address className="not-italic text-white/70 space-y-1 font-sans-ui">
              <p>{COMPANY_CONTACT.addressLine1}</p>
              <p>{COMPANY_CONTACT.addressLine2}</p>
              <p className="pt-2">Tel: <a href="tel:+35625676500" className="hover:text-white transition-colors">{COMPANY_CONTACT.phone}</a></p>
              <p>Email: <a href="mailto:info@thefoodfactory.com.mt" className="hover:text-white transition-colors">{COMPANY_CONTACT.email}</a></p>
            </address>
          </div>

          {/* Col 2: Navigation 1 */}
          <div className="space-y-2.5">
            <span className="font-mono text-white/50 uppercase font-bold tracking-wider block">
              OPERATIONS
            </span>
            <ul className="space-y-2 text-white/80 font-sans-ui">
              <li>
                <button onClick={() => onNavigate('facilities')} className="hover:text-white transition-colors">
                  35,000 SQM Facilities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-white transition-colors">
                  Food Solutions & Packaging
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('brands')} className="hover:text-white transition-colors">
                  Group Brand Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rd')} className="hover:text-white transition-colors">
                  Culinary R&D & Testing Lab
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation 2 */}
          <div className="space-y-2.5">
            <span className="font-mono text-white/50 uppercase font-bold tracking-wider block">
              GOVERNANCE & STORY
            </span>
            <ul className="space-y-2 text-white/80 font-sans-ui">
              <li>
                <button onClick={() => onNavigate('quality')} className="hover:text-white transition-colors">
                  Quality & Certifications
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sustainability')} className="hover:text-white transition-colors">
                  Sustainability & PV Solar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('story')} className="hover:text-white transition-colors">
                  Our Story (1989 — Present)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-white transition-colors">
                  Factory Dispatches & News
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Audit Standards */}
          <div className="space-y-3">
            <span className="font-mono text-white/50 uppercase font-bold tracking-wider block">
              ACCREDITED AUDIT STANDARDS
            </span>
            <p className="text-white/70 leading-relaxed font-sans-ui">
              Operating food safety, hygiene, and clinical traceability management systems strictly compliant with HACCP principles, ISO 22000, ISO 9001, FSSC 22000, IFS Food, BRC Food Safety, and certified Halal lines.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono text-white/80">
              <span className="px-2 py-0.5 bg-white/10 rounded">HACCP</span>
              <span className="px-2 py-0.5 bg-white/10 rounded">ISO 22000</span>
              <span className="px-2 py-0.5 bg-white/10 rounded">FSSC 22000</span>
              <span className="px-2 py-0.5 bg-white/10 rounded">IFS FOOD</span>
              <span className="px-2 py-0.5 bg-white/10 rounded">BRC GRADE A</span>
              <span className="px-2 py-0.5 bg-white/10 rounded">HALAL</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} The Food Factory Malta. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Bulebel Industrial Estate, Żejtun, Malta</span>
            <span>·</span>
            <span>Tel: +356 2567 6500</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
