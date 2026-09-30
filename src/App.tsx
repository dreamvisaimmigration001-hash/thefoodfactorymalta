import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { FoodSolutionsPage } from './pages/FoodSolutionsPage';
import { BrandsPage } from './pages/BrandsPage';
import { RDPage } from './pages/RDPage';
import { QualityPage } from './pages/QualityPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { StoryPage } from './pages/StoryPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle URL Hash navigation and browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'facilities',
        'solutions',
        'brands',
        'rd',
        'quality',
        'sustainability',
        'story',
        'news',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic Page Title & SEO updates
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'The Food Factory Malta | Creating Taste',
      about: 'About The Group | The Food Factory Malta',
      facilities: 'Inside the 35,000 SQM Facility | The Food Factory Malta',
      solutions: 'Food Solutions & Manufacturing | The Food Factory Malta',
      brands: 'Brand Portfolio | The Food Factory Malta',
      rd: 'Culinary R&D & Testing Laboratory | The Food Factory Malta',
      quality: 'Quality & Certifications | The Food Factory Malta',
      sustainability: 'Sustainability & Solar Energy | The Food Factory Malta',
      story: 'Our Story (1989 — Present) | The Food Factory Malta',
      news: 'Factory Dispatches & News | The Food Factory Malta',
      contact: 'Contact & Commercial Inquiries | The Food Factory Malta',
    };

    document.title = titles[currentPage] || 'The Food Factory Malta | Creating Taste';
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'facilities':
        return <FacilitiesPage onNavigate={handleNavigate} />;
      case 'solutions':
        return <FoodSolutionsPage onNavigate={handleNavigate} />;
      case 'brands':
        return <BrandsPage onNavigate={handleNavigate} />;
      case 'rd':
        return <RDPage onNavigate={handleNavigate} />;
      case 'quality':
        return <QualityPage onNavigate={handleNavigate} />;
      case 'sustainability':
        return <SustainabilityPage onNavigate={handleNavigate} />;
      case 'story':
        return <StoryPage onNavigate={handleNavigate} />;
      case 'news':
        return <NewsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A] flex flex-col font-sans-ui selection:bg-[#C13B2B] selection:text-white relative">
      {/* Pristine Modern Navigation with Official Logo */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Dynamic Viewport Page Content */}
      <main className="flex-1 w-full" id="main-content">
        {renderCurrentPage()}
      </main>

      {/* Floating Procurement Quick Button on Mobile */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <button
          onClick={() => handleNavigate('contact')}
          className="px-5 py-2.5 bg-[#C13B2B] text-white font-display text-xs font-bold uppercase tracking-wider rounded-full shadow-2xl flex items-center gap-2"
        >
          <span>INQUIRE</span>
          <span>→</span>
        </button>
      </div>

      {/* Luxury Footer with Official Logo */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
