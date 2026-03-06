import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUp } from './animations';
import { useEffect, useRef } from 'react';

const positivos = [
  '1.771 avaliações — a Veneza é a #1 ABSOLUTA da região (a 2ª colocada tem 747 — nem metade!)',
  'Nota 4.5 — excelente, estável (as últimas avaliações têm a mesma nota)',
  '100% das avaliações têm texto escrito (não é só estrela — o pessoal escreve o que achou)',
  'Está ACIMA da média: 1.771 avaliações vs média do segmento de 508 (3.5x a média!)',
  'Perfil verificado, com logotipo, horários, telefone, site e descrição',
  'Instagram e Facebook vinculados à ficha',
  '4 vídeos publicados',
];

function AnimatedScore() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, 80, { duration: 2, ease: 'easeOut' });
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return () => { controls.stop(); unsub(); };
  }, [count, rounded]);

  return <span ref={ref}>0</span>;
}

const SlideFichaGoogle = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#2ECC71] mb-4">
          02 — FICHA DO GOOGLE
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          Sua Ficha no Google — Como a Veneza aparece quando alguém pesquisa
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          Isso aqui é a coisa MAIS IMPORTANTE do marketing digital de qualquer pizzaria
        </motion.p>

        {/* Explanatory block */}
        <motion.div {...fadeUp(0.2)} className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8">
          <p className="font-lora italic text-base text-[#121212] leading-relaxed">
            Sabe quando você pega o celular, abre o Google e digita 'pizzaria perto de mim'? Aparece uma lista de pizzarias com foto, nota, endereço e telefone, certo? Essa 'fichinha' que aparece é a sua Ficha do Google. É a PRIMEIRA coisa que o cliente vê — antes do Instagram, antes do site, antes de tudo. Se essa ficha está incompleta ou desatualizada, o Google mostra os concorrentes PRIMEIRO e empurra a Veneza pra baixo.
          </p>
        </motion.div>

        {/* Score block */}
        <motion.div {...fadeUp(0.3)} className="bg-white border-t-4 border-[#2ECC71] p-8 text-center mb-8">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="font-montserrat font-black text-7xl text-[#2ECC71]">
              <AnimatedScore />
            </span>
            <span className="font-lora text-base text-[#A9A9A9]">de 100</span>
          </div>
          <p className="font-montserrat font-bold text-lg uppercase tracking-[0.2em] text-[#2ECC71] mb-4">BOM</p>

          <p className="font-lora text-[15px] text-[#121212] max-w-2xl mx-auto leading-relaxed mb-6">
            Usamos uma ferramenta profissional que analisa 20 itens da ficha do Google e dá uma nota de 0 a 100. A Veneza tirou 80 — que é BOM. Mas 4 desses 20 itens tiraram nota ZERO. E esses 4 itens são justamente os que mais fazem diferença pra atrair clientes novos.
          </p>

          <div className="w-[60px] h-[2px] bg-[#2ECC71] mx-auto mb-6" />

          <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto">
            <div className="text-center">
              <span className="font-montserrat font-black text-4xl text-[#2ECC71]">16</span>
              <p className="font-lora text-xs text-[#A9A9A9] mt-1">itens excelentes</p>
            </div>
            <div className="text-center">
              <span className="font-montserrat font-black text-4xl text-[#E74C3C]">4</span>
              <p className="font-lora text-xs text-[#A9A9A9] mt-1">itens com nota ZERO</p>
            </div>
          </div>
        </motion.div>

        {/* Positive block */}
        <motion.div {...fadeUp(0.5)} className="bg-[#2ECC71]/[0.08] border-t-4 border-[#2ECC71] p-6 mb-6">
          <p className="font-montserrat font-bold text-base text-[#2ECC71] mb-4">O que está ótimo — 16 itens</p>
          <div className="space-y-3">
            {positivos.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <Check size={16} className="text-[#2ECC71] mt-1 shrink-0" />
                <p className="font-lora text-base text-[#121212]">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p {...fadeUp(0.6)} className="font-lora text-xs text-[#A9A9A9] mb-8">
          Fonte: Health Check — Pizzaria Veneza — 04/03/2026
        </motion.p>

        {/* Footer */}
        <motion.div {...fadeUp(0.7)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideFichaGoogle;
