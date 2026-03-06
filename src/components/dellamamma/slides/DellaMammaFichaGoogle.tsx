import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUp } from '../../slides/animations';
import { useEffect, useRef } from 'react';

const positivos = [
  '1.746 avaliações — #1 ABSOLUTA de Vitória da Conquista (a 2ª tem 886 — nem METADE)',
  '6 vezes a média do segmento (1.746 vs média de 290)',
  'Tendência estável (nota 3.9 nas últimas e na geral)',
  '100% das avaliações com texto — clientes escrevem o que acharam',
  'Última avaliação: HOJE — o negócio continua gerando avaliações',
  '5 vídeos publicados',
  'Nome, telefone e horário definidos',
];

const ranking = [
  { nome: 'Casa Della Mamma', valor: 1746, destaque: true },
  { nome: 'Gastrô', valor: 886 },
  { nome: "Domino's Pizza VdC", valor: 853 },
  { nome: 'Pizzaria Prediletta', valor: 813 },
  { nome: 'Casa da Esfiha', valor: 753 },
  { nome: 'Pizzaria Florência', valor: 704 },
  { nome: 'Vitória Pizzaria', valor: 674 },
  { nome: 'La Bella Rest. & Pizzaria', valor: 565 },
  { nome: 'A Fornalha Pizzaria', valor: 552 },
  { nome: 'Pedra Urbis', valor: 544 },
];

const max = 1746;

function AnimatedScore() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, 65, { duration: 2, ease: 'easeOut' });
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return () => { controls.stop(); unsub(); };
  }, [count, rounded]);

  return <span ref={ref}>0</span>;
}

const DellaMammaFichaGoogle = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          02 — FICHA DO GOOGLE
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          Sua Ficha no Google — A primeira coisa que o cliente vê
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          Score: 65/100 — RAZOÁVEL. O mais baixo que já registrei para uma #1 da região.
        </motion.p>

        {/* Explanatory block */}
        <motion.div {...fadeUp(0.3)} className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8">
          <p className="font-lora italic text-base text-[#121212]">
            Quando você pega o celular e pesquisa 'pizzaria perto de mim', aparece uma lista com foto, nota e telefone. Essa 'fichinha' é a Ficha do Google. É a PRIMEIRA coisa que o cliente vê. Se ela está incompleta, o Google mostra os concorrentes primeiro — mesmo que a sua pizza seja melhor.
          </p>
        </motion.div>

        {/* Score block */}
        <motion.div {...fadeUp(0.4)} className="bg-white border-t-4 border-[#E71D36] p-8 mb-8 text-center">
          <p className="font-montserrat font-black text-7xl text-[#E71D36]">
            <AnimatedScore />
          </p>
          <p className="font-lora text-base text-[#A9A9A9]">de 100</p>
          <p className="font-montserrat font-bold text-lg text-[#E71D36] uppercase tracking-[0.2em] mt-2">RAZOÁVEL</p>
          <div className="w-[60px] h-[2px] bg-[#E71D36] mx-auto my-4" />
          <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto">
            <div>
              <p className="font-montserrat font-black text-4xl text-[#2ECC71]">11</p>
              <p className="font-lora text-xs text-[#A9A9A9]">itens excelentes</p>
            </div>
            <div>
              <p className="font-montserrat font-black text-4xl text-[#E74C3C]">7</p>
              <p className="font-lora text-xs text-[#A9A9A9]">itens com nota ZERO</p>
            </div>
          </div>
        </motion.div>

        {/* Positive block */}
        <motion.div {...fadeUp(0.5)} className="bg-[#2ECC71]/[0.08] border-t-4 border-[#2ECC71] p-6 mb-8">
          <p className="font-montserrat font-bold text-base text-[#2ECC71] mb-4">O que está bom — 11 itens</p>
          <div className="space-y-3">
            {positivos.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <Check size={16} className="text-[#2ECC71] mt-1 shrink-0" />
                <p className="font-lora text-base text-[#121212]">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ranking block */}
        <motion.div {...fadeUp(0.6)} className="bg-white border-t-4 border-[#2ECC71] p-6 mb-8">
          <p className="font-montserrat font-bold text-base text-[#1B2A4A] mb-6">Ranking — As mais avaliadas de VdC</p>
          <div className="space-y-3">
            {ranking.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className={`font-montserrat text-sm w-[180px] md:w-[220px] shrink-0 truncate ${item.destaque ? 'font-bold text-[#2ECC71]' : 'text-[#A9A9A9]'}`}>
                  {item.nome}
                </span>
                <div className="flex-1 h-5 bg-[#F2F2F2] relative">
                  <motion.div
                    className={`h-full ${item.destaque ? 'bg-[#2ECC71]' : 'bg-[#A9A9A9]/40'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(item.valor / max) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                  />
                </div>
                <span className={`font-montserrat text-sm w-12 text-right ${item.destaque ? 'font-bold text-[#2ECC71]' : 'text-[#A9A9A9]'}`}>
                  {item.valor}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="font-lora text-xs text-[#2ECC71] mt-4">A Della Mamma tem QUASE O DOBRO da segunda colocada.</p>
        </motion.div>

        <motion.p {...fadeUp(0.7)} className="font-lora text-xs text-[#A9A9A9] mb-8">
          Fonte: Health Check — Casa Della Mamma — 04/03/2026
        </motion.p>

        {/* Footer */}
        <motion.div {...fadeUp(0.8)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default DellaMammaFichaGoogle;
