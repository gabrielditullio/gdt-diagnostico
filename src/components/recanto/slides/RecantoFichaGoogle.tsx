import { motion, useAnimation } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUp } from '../../slides/animations';
import { useEffect, useRef, useState } from 'react';

const positivos = [
  '1.106 avaliações — a #1 da região (2ª: Pizza Mario com 963)',
  'Nota ~4.6 — excelente, tendência estável',
  'Última avaliação: HOJE (06/03/2026) — negócio ativo',
  '84% das avaliações com comentários escritos (42 de 50)',
  'Perfil verificado, logotipo, descrição (251 chars), horário, telefone',
  '3 vídeos publicados',
  'Instagram + Facebook vinculados',
];

const ranking = [
  { name: 'Recanto da Pizza', count: 1106, highlight: true },
  { name: 'Pizza Mario Jundiaí', count: 963 },
  { name: 'Pizza Prime Jundiaí', count: 868 },
  { name: 'Panetteria Verace', count: 800 },
  { name: 'Aroma da Fazenda', count: 695 },
  { name: 'Dois Irmãos', count: 693 },
  { name: 'Uhlen Haus', count: 641 },
  { name: 'Pizzaria Rami', count: 623 },
  { name: 'Vicenzo Pré Assada', count: 600 },
  { name: 'Chersoni Pizzeria', count: 486 },
];

const maxCount = 1106;

function AnimatedScore({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.round(eased * target);
            setValue(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{value}</span>;
}

const RecantoFichaGoogle = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#F5A623] mb-4"
        >
          02 — FICHA DO GOOGLE
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3"
        >
          Sua Ficha no Google — Análise de Saúde
        </motion.h2>

        <motion.p
          {...fadeUp(0.15)}
          className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl"
        >
          'Pizzaria Recanto Da Pizza' — Google Maps e Google Busca
        </motion.p>

        {/* Explanatory block */}
        <motion.div
          {...fadeUp(0.2)}
          className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8"
        >
          <p className="font-lora italic text-base text-[#121212]">
            A 'ficha do Google' é o que aparece quando alguém pesquisa 'pizzaria perto de mim' ou 'Recanto da Pizza Jundiaí'. É a PRIMEIRA coisa que o cliente vê. Se está incompleta, o Google mostra os concorrentes primeiro.
          </p>
        </motion.div>

        {/* Score block */}
        <motion.div
          {...fadeUp(0.3)}
          className="bg-white border-t-4 border-[#F5A623] p-8 mb-8 text-center"
        >
          <p className="font-montserrat font-black text-[72px] leading-none text-[#F5A623]">
            <AnimatedScore target={72} />
          </p>
          <p className="font-lora text-base text-[#A9A9A9] mb-2">de 100</p>
          <p className="font-montserrat font-bold text-lg text-[#F5A623] uppercase tracking-[0.2em] mb-4">
            RAZOÁVEL
          </p>
          <div className="w-[60px] h-[2px] bg-[#F5A623] mx-auto mb-6" />
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div>
              <p className="font-montserrat font-black text-4xl text-[#2ECC71]">14</p>
              <p className="font-lora text-xs text-[#A9A9A9]">itens excelentes</p>
            </div>
            <div>
              <p className="font-montserrat font-black text-4xl text-[#F5A623]">1</p>
              <p className="font-lora text-xs text-[#A9A9A9]">razoável</p>
            </div>
            <div>
              <p className="font-montserrat font-black text-4xl text-[#E74C3C]">5</p>
              <p className="font-lora text-xs text-[#A9A9A9]">nota ZERO</p>
            </div>
          </div>
        </motion.div>

        {/* Positive block */}
        <motion.div
          {...fadeUp(0.4)}
          className="bg-[#2ECC71]/[0.08] border-t-4 border-[#2ECC71] p-6 mb-8"
        >
          <p className="font-montserrat font-bold text-base text-[#2ECC71] mb-4">
            O que está ótimo — 14 itens
          </p>
          <div className="space-y-3">
            {positivos.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <Check size={16} className="text-[#2ECC71] mt-1 shrink-0" />
                <p className="font-lora text-sm md:text-base text-[#121212]">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ranking block */}
        <motion.div
          {...fadeUp(0.5)}
          className="bg-white border-t-4 border-[#2ECC71] p-6 mb-8"
        >
          <p className="font-montserrat font-bold text-base text-[#1B2A4A] mb-6">
            Ranking — Top 10 da região
          </p>
          <div className="space-y-3">
            {ranking.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className={`font-montserrat text-sm w-[180px] md:w-[220px] shrink-0 ${item.highlight ? 'font-bold text-[#2ECC71]' : 'text-[#A9A9A9]'}`}>
                    {item.name}
                  </span>
                  <div className="flex-1 h-5 bg-[#F2F2F2] relative">
                    <motion.div
                      className={`h-full ${item.highlight ? 'bg-[#2ECC71]' : 'bg-[#A9A9A9]/40'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.count / maxCount) * 100}%` }}
                      transition={{ duration: 0.8, delay: 0.7 + i * 0.08, ease: 'easeOut' }}
                    />
                  </div>
                  <span className={`font-montserrat text-sm w-[50px] text-right shrink-0 ${item.highlight ? 'font-bold text-[#2ECC71]' : 'text-[#A9A9A9]'}`}>
                    {item.count === 800 || item.count === 600 ? `~${item.count}` : item.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="font-lora text-xs text-[#2ECC71] mt-4">
            O Recanto é #1 com folga. 143 avaliações a mais que o 2º lugar.
          </p>
        </motion.div>

        <motion.p {...fadeUp(0.6)} className="font-lora text-xs text-[#A9A9A9] mb-6">
          Fonte: Health Check — Recanto da Pizza — 06/03/2026
        </motion.p>

        {/* Footer */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4"
        >
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RecantoFichaGoogle;
