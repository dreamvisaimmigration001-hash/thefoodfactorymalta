import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on non-touch devices with fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor'));
        setIsHovered(true);
      } else if (target.closest('a, button, [role="button"]')) {
        setCursorText(null);
        setIsHovered(true);
      } else {
        setCursorText(null);
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {cursorText ? (
        <div className="flex items-center justify-center px-3 py-1.5 rounded-full bg-[#A93428] text-[#F5F1E8] shadow-2xl text-[11px] font-display font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20 scale-100 transition-all duration-200">
          {cursorText}
        </div>
      ) : (
        <div
          className={`rounded-full border border-white/60 transition-all duration-200 flex items-center justify-center ${
            isHovered
              ? 'w-10 h-10 bg-white/10 backdrop-blur-[1px] border-[#A93428]'
              : 'w-4 h-4 bg-white/20'
          }`}
        >
          <div
            className={`rounded-full transition-all duration-200 ${
              isHovered ? 'w-1.5 h-1.5 bg-[#A93428]' : 'w-1 h-1 bg-white'
            }`}
          />
        </div>
      )}
    </div>
  );
};
