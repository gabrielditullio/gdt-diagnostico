import { motion } from 'framer-motion';
import { fadeUp } from './animations';
import type { Easing } from 'framer-motion';

const ranking = [
  { name: 'Pizzaria Veneza', count: 1771, highlight: true },
  { name: 'Churrascaria e Pizzaria', count: 747 },
  { name: 'Brasa & Sal', count: 642 },
  { name: 'Pizzaria Forma de Prata', count: 434 },
  { name: 'Boi na Brasa', count: 370 },
  { name: 'Pizzaria Oliveira', count: 352 },
  { name: 'Pizzaria São Paulo', count: 325 },
  { name: 'Bella Massa', count: 320 },
  { name: 'Cantina das Pizzas', count: 309 },
  { name: 'Forno a Lenha', count: 305 },
];

const max = 1771;

const SlideRanking = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#2ECC71] mb-4">
          08 — RANKING
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          A Veneza é a pizzaria mais avaliada de toda a região
        </motion.h2>
        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          Com mais que o DOBRO de avaliações da segunda colocada
        </motion.p>

        {/* Bar chart */}
        <motion.div {...fadeUp(0.2)} className="bg-white border-t-4 border-[#C0001F] p-6 mb-8">
          <div className="space-y-3">
            {ranking.map((item, i) => {
              const pct = (item.count / max) * 100;
              const isVeneza = item.highlight;
              return (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-sm ${isVeneza ? 'font-montserrat font-bold text-[#C0001F]' : 'font-lora text-[#A9A9A9]'}`}>
                      {item.name}
                    </span>
                    <span className={`text-sm ${isVeneza ? 'font-montserrat font-bold text-[#C0001F]' : 'font-lora text-[#A9A9A9]'}`}>
                      {item.count.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#F2F2F2]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{
                        duration: isVeneza ? 1.2 : 0.8,
                        delay: isVeneza ? 0.5 + ranking.length * 0.08 : 0.5 + i * 0.08,
                        ease: 'easeOut' as Easing,
                      }}
                      className={`h-full ${isVeneza ? 'bg-[#C0001F]' : 'bg-[#A9A9A9]'}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="font-lora text-xs text-[#A9A9A9] mt-4">
            Média do segmento: 508 avaliações. Pizzaria Veneza: 1.771 — 3.5 vezes a média.
          </p>
        </motion.div>

        {/* Insight block */}
        <motion.div {...fadeUp(0.6)} className="bg-[#2ECC71]/[0.08] border-l-4 border-[#2ECC71] p-5 mb-10">
          <div className="space-y-3">
            <p className="font-lora text-base text-[#121212] leading-relaxed">
              Isso é IMPRESSIONANTE. Pra uma pizzaria de bairro ter 1.771 avaliações no Google e nota 4.5, com mais que o dobro da segunda colocada, significa que MILHARES de clientes fizeram questão de ir no Google e escrever que gostaram.
            </p>
            <p className="font-lora text-base text-[#121212] leading-relaxed">
              Esse é um ativo que não se compra. Não existe dinheiro que faça alguém ter 1.771 avaliações reais. Isso é CONFIANÇA, construída pizza a pizza durante 34 anos.
            </p>
            <p className="font-montserrat font-bold text-base text-[#1B2A4A]">
              Agora imagina: e se a Veneza usasse toda essa força (34 anos, nota 4.5, #1 da região) nos anúncios, no Instagram e no Google? Em vez de deixar isso escondido, MOSTRAR pro mundo?
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.7)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideRanking;
