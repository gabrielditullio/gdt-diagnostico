import { motion } from 'framer-motion';
import { fadeUp } from './animations';

const SlideCapa = () => {
  return (
    <div className="relative min-h-screen bg-[#1B2A4A] flex flex-col justify-between px-6 py-8 md:px-16 md:py-12 overflow-hidden">
      {/* Decorative diagonal lines */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-[0.05]">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          <line x1="0" y1="0" x2="160" y2="160" stroke="white" strokeWidth="1" />
          <line x1="40" y1="0" x2="160" y2="120" stroke="white" strokeWidth="1" />
          <line x1="0" y1="40" x2="120" y2="160" stroke="white" strokeWidth="1" />
          <line x1="80" y1="0" x2="160" y2="80" stroke="white" strokeWidth="1" />
          <line x1="0" y1="80" x2="80" y2="160" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-[0.05]">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          <line x1="160" y1="0" x2="0" y2="160" stroke="white" strokeWidth="1" />
          <line x1="120" y1="0" x2="0" y2="120" stroke="white" strokeWidth="1" />
          <line x1="160" y1="40" x2="40" y2="160" stroke="white" strokeWidth="1" />
          <line x1="80" y1="0" x2="0" y2="80" stroke="white" strokeWidth="1" />
          <line x1="160" y1="80" x2="80" y2="160" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Top - GDT */}
      <motion.div {...fadeUp(0)}>
        <span className="font-montserrat font-black text-xl text-white">GDT</span>
      </motion.div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.p
          {...fadeUp(0.2)}
          className="font-montserrat font-bold text-sm text-[#A9A9A9] uppercase tracking-[0.25em] mb-4"
        >
          DIAGNÓSTICO DIGITAL
        </motion.p>

        <motion.h1
          {...fadeUp(0.4)}
          className="font-montserrat font-black text-4xl md:text-[56px] text-[#F2F2F2] leading-tight mb-4"
        >
          PIZZARIA VENEZA
        </motion.h1>

        <motion.p
          {...fadeUp(0.6)}
          className="font-montserrat font-bold text-base md:text-xl text-[#F2F2F2]/80 max-w-2xl mb-6"
        >
          Uma análise completa de como o seu negócio aparece (ou não) na internet para quem está procurando uma pizzaria em Salvador.
        </motion.p>

        <motion.div
          {...fadeUp(0.8)}
          className="w-20 h-[3px] bg-[#E71D36] my-6"
        />

        <motion.p
          {...fadeUp(1.0)}
          className="font-lora italic text-lg text-[#A9A9A9]"
        >
          R. Eduardo Dotto, 32 — Paripe, Salvador/BA
        </motion.p>

        <motion.div
          {...fadeUp(1.2)}
          className="mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-8"
        >
          {[
            '34 anos de tradição',
            '1.771 avaliações',
            '#1 da região',
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && (
                <span className="hidden md:block w-px h-4 bg-[#A9A9A9]/30" />
              )}
              <span className="font-montserrat font-bold text-sm text-[#A9A9A9]">
                {text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        {...fadeUp(1.4)}
        className="text-center"
      >
        <p className="font-montserrat text-xs text-[#A9A9A9]/60">
          Março 2026 · Confidencial · Preparado por Gabriel Di Tullio — DT Coproduções
        </p>
      </motion.div>
    </div>
  );
};

export default SlideCapa;
