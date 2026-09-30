import React, { useState } from 'react';
import { PageId, NewsArticle } from '../types';
import { NEWS_ARTICLES } from '../data/factoryData';

interface NewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const featured = NEWS_ARTICLES.find((n) => n.featured) || NEWS_ARTICLES[0];
  const gridArticles = NEWS_ARTICLES.filter((n) => n.id !== featured.id);

  return (
    <div className="w-full bg-[#171717] text-[#F5F1E8] pt-28 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="border-b border-white/10 pb-12">
          <span className="text-[11px] font-display uppercase tracking-widest text-[#A93428] font-semibold">
            10 · PRESS & DISPATCHES
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase mt-3 leading-[0.9]">
            FROM THE<br />
            <span className="text-[#A93428]">FACTORY.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#EAE3D5] mt-6 max-w-3xl">
            Corporate dispatches, capital investments, awards, and food-science research breakthroughs from Bulebel.
          </p>
        </div>
      </section>

      {/* Featured Editorial Article */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-20">
        <div
          onClick={() => setSelectedArticle(featured)}
          data-cursor="READ"
          className="group cursor-pointer bg-[#191919] border border-white/15 rounded overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl hover:border-[#A93428] transition-all"
        >
          <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] bg-[#222222]">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#A93428] text-white px-3 py-1 rounded text-xs font-mono font-bold">
              FEATURED DISPATCH
            </div>
          </div>

          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#EAE3D5]/60 mb-3">
                <span className="text-[#A93428]">{featured.category}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase group-hover:text-[#A93428] transition-colors leading-tight">
                {featured.title}
              </h2>

              <p className="font-editorial italic text-base text-[#EAE3D5] mt-4">
                {featured.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-display font-semibold uppercase text-[#A93428]">
              <span>READ FULL STORY</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column News Grid */}
      <section className="px-6 md:px-14 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              data-cursor="READ"
              className="group cursor-pointer bg-[#1a1a1a] border border-white/15 rounded overflow-hidden flex flex-col justify-between hover:border-[#A93428] transition-all"
            >
              <div>
                <div className="relative aspect-16/10 bg-[#222222] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-mono text-[#F5F1E8]">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#EAE3D5]/50">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white uppercase group-hover:text-[#A93428] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="font-sans-ui text-xs text-[#EAE3D5]/70 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-display font-semibold text-[#A93428]">
                  <span>READ ARTICLE</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in"
        >
          <div className="bg-[#1a1a1a] text-[#F5F1E8] border border-white/20 rounded max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white font-mono text-xs uppercase px-3 py-1 bg-white/10 rounded"
            >
              CLOSE ✕
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#A93428]">
                <span>{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.date}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase leading-tight pr-12">
                {selectedArticle.title}
              </h2>

              <p className="font-editorial italic text-lg text-[#EAE3D5] pb-4 border-b border-white/10">
                {selectedArticle.excerpt}
              </p>

              <div className="relative aspect-16/9 rounded overflow-hidden my-6 border border-white/10">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-sans-ui text-[#EAE3D5]/80 leading-relaxed">
                {selectedArticle.fullText.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">
                  DISPATCH SOURCE: The Food Factory Corporate Communications
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-[#A93428] text-white font-display text-xs uppercase tracking-wider rounded"
                >
                  DONE READING
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
