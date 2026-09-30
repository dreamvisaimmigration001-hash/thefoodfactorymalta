import React, { useState } from 'react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackCategory?: string;
  aspectRatioClass?: string;
  className?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackCategory = 'Food Manufacturing Facility',
  aspectRatioClass = 'aspect-16/9',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#1e1e1e] ${aspectRatioClass} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          {...props}
        />
      ) : (
        /* Styled CSS/SVG Fallback Container conforming to Zero-Broken-Image Policy */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#1e1e1e] via-[#252321] to-[#171717] text-[#F5F1E8] border border-white/5">
          <div className="w-12 h-12 rounded-full border border-[#A93428]/40 bg-[#A93428]/10 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-[#A93428]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <p className="font-display font-medium text-xs tracking-widest uppercase text-white/70 text-center">
            THE FOOD FACTORY MALTA
          </p>
          <p className="font-editorial italic text-base text-[#EAE3D5] text-center mt-1 max-w-xs">
            {fallbackCategory}
          </p>
        </div>
      )}
    </div>
  );
};
