import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import DellaMammaCapa from './slides/DellaMammaCapa';
import DellaMammaIntroducao from './slides/DellaMammaIntroducao';
import DellaMammaInstagram from './slides/DellaMammaInstagram';
import DellaMammaFichaGoogle from './slides/DellaMammaFichaGoogle';
import DellaMammaProblemasFicha from './slides/DellaMammaProblemasFicha';
import DellaMammaTriploZero from './slides/DellaMammaTriploZero';
import DellaMammaBuscas from './slides/DellaMammaBuscas';
import DellaMammaDiagnostico from './slides/DellaMammaDiagnostico';
import DellaMammaResumo from './slides/DellaMammaResumo';
import DellaMammaPosicionamento from './slides/DellaMammaPosicionamento';

const slides = [DellaMammaCapa, DellaMammaIntroducao, DellaMammaInstagram, DellaMammaFichaGoogle, DellaMammaProblemasFicha, DellaMammaTriploZero, DellaMammaBuscas, DellaMammaDiagnostico, DellaMammaResumo, DellaMammaPosicionamento];

const DellaMammaPresentation: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchLocked = useRef<'horizontal' | 'vertical' | null>(null);

  const goTo = useCallback((index: number, dir: number) => {
    if (index < 0 || index >= slides.length) return;
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
    touchLocked.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.touches[0];
    const dx = Math.abs(t.clientX - touchStart.current.x);
    const dy = Math.abs(t.clientY - touchStart.current.y);

    if (!touchLocked.current && (dx > 10 || dy > 10)) {
      touchLocked.current = dy > dx ? 'vertical' : 'horizontal';
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current || touchLocked.current !== 'horizontal') {
      touchStart.current = null;
      touchLocked.current = null;
      return;
    }
    const t = e.changedTouches[0];
    const diff = t.clientX - touchStart.current.x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev();
      else next();
    }
    touchStart.current = null;
    touchLocked.current = null;
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const CurrentSlide = slides[current];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div className="w-full h-full overflow-y-auto">
            <CurrentSlide />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {current > 0 && (
        <button
          onClick={prev}
          className="fixed left-3 top-1/2 -translate-y-1/2 z-50 p-2 bg-[#1B2A4A]/80 hover:bg-[#1B2A4A] text-white transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      {current < slides.length - 1 && (
        <button
          onClick={next}
          className="fixed right-3 top-1/2 -translate-y-1/2 z-50 p-2 bg-[#1B2A4A]/80 hover:bg-[#1B2A4A] text-white transition-colors"
          aria-label="Próximo slide"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Progress indicators */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`h-1 transition-all duration-300 ${
              i === current
                ? 'w-8 bg-[#E71D36]'
                : 'w-4 bg-[#A9A9A9]/50 hover:bg-[#A9A9A9]'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-4 right-4 z-50 font-montserrat text-xs text-[#A9A9A9]">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
};

export default DellaMammaPresentation;
