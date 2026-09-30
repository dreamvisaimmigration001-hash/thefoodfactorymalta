import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  height?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-9',
  variant = 'dark',
}) => {
  const [loadError, setLoadError] = useState(false);
  const logoUrl = 'https://thefoodfactory.com.mt/wp-content/uploads/2020/02/foodfactory.svg';

  return (
    <div className={`inline-flex items-center gap-2 ${variant === 'dark' ? 'bg-[#1A1A1A] px-3 py-1.5 rounded-lg shadow-sm' : ''} ${className}`}>
      {!loadError ? (
        <img
          src={logoUrl}
          alt="The Food Factory Malta"
          className={`h-full w-auto object-contain transition-opacity duration-300 ${
            variant === 'light' ? 'brightness-0 invert' : ''
          }`}
          onError={() => setLoadError(true)}
        />
      ) : (
        /* Fallback SVG representation in case of image load delay */
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-[#C13B2B] flex items-center justify-center text-white font-display font-black text-sm tracking-tighter">
            FF
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-display font-black text-sm uppercase tracking-wider ${
                variant === 'light' ? 'text-white' : 'text-[#121212]'
              }`}
            >
              The Food Factory
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#C13B2B] uppercase font-bold mt-0.5">
              MALTA
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
