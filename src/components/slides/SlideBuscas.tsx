import { motion } from 'framer-motion';
import { fadeUp } from './animations';
import type { Easing } from 'framer-motion';

const rows = [
  { term: 'pizzaria', vol: '50.000', appears: false },
  { term: 'pizzaria perto de mim', vol: '5.000', appears: false },
  { term: 'pizzaria aberta agora', vol: '500', appears: false },
  { term: 'pizzaria próxima', vol: '500', appears: false },
  { term: 'pizzaria delivery', vol: '500', appears: false },
  { term: 'pizzaria perto', vol: '500', appears: false },
  { term: 'pizzaria aberta', vol: '500', appears: false },
  { term: 'numero de pizzaria', vol: '500', appears: false },
  { term: 'pizzaria veneza (a própria marca!)', vol: '500', appears: false, note: 'Não aparece no topo' },
];

const SlideBuscas = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          05 — BUSCAS NO GOOGLE
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          Quando alguém pesquisa 'pizzaria' em Salvador — a Veneza NÃO aparece
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          60 mil buscas por mês. Cada uma é uma pessoa com fome. E nenhuma vê a Veneza.
        </motion.p>

        {/* Explanatory block */}
        <motion.div {...fadeUp(0.2)} className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8">
          <p className="font-lora italic text-base text-[#121212] leading-relaxed">
            Sabe quando você pesquisa algo no Google e os primeiros resultados têm a tag 'Patrocinado'? Isso é um anúncio pago no Google. As empresas pagam pra aparecer no topo quando alguém pesquisa algo específico. A Veneza não paga NADA — então só aparece se o Google resolver mostrar de graça (o que depende de vários fatores que a Veneza não controla).
          </p>
        </motion.div>

        {/* Table */}
        <motion.div {...fadeUp(0.3)} className="mb-6 overflow-x-auto">
          <table className="w-full border border-[#A9A9A9] text-left">
            <thead>
              <tr className="bg-[#1B2A4A]">
                <th className="font-montserrat font-bold text-sm text-white p-3">O que as pessoas digitam no Google</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-right">Quantas vezes/mês</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-center">A Veneza aparece?</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.08, ease: 'easeOut' as Easing }}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'}
                >
                  <td className="font-lora text-sm text-[#121212] p-3 border-b border-[#A9A9A9]/30">{row.term}</td>
                  <td className="font-lora text-sm text-[#121212] p-3 border-b border-[#A9A9A9]/30 text-right">{row.vol}</td>
                  <td className="font-lora text-sm text-[#E74C3C] p-3 border-b border-[#A9A9A9]/30 text-center">
                    ❌ {row.note || 'Não'}
                  </td>
                </motion.tr>
              ))}
              <tr className="bg-[#1B2A4A]">
                <td className="font-montserrat font-bold text-sm text-white p-3">TOTAL</td>
                <td className="font-montserrat font-bold text-sm text-white p-3 text-right">~60.000/mês</td>
                <td className="font-montserrat font-bold text-sm text-[#E74C3C] p-3 text-center">❌ Invisível</td>
              </tr>
            </tbody>
          </table>
          <p className="font-montserrat text-[10px] text-[#A9A9A9] mt-2">
            Esses dados são do Google Keyword Planner, a ferramenta oficial do Google que mostra quantas vezes cada termo é pesquisado. Período: fev/2025 a jan/2026. Região: Salvador e entorno.
          </p>
        </motion.div>

        {/* Dark highlight block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-[#1B2A4A] p-8 md:p-12 text-center mb-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: 'easeOut' as Easing }}
            className="font-montserrat font-black text-3xl md:text-5xl text-[#F2F2F2] mb-2"
          >
            60 mil vezes por mês
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' as Easing }}
            className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]"
          >
            alguém em Salvador pega o celular
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' as Easing }}
            className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]"
          >
            e pesquisa 'pizzaria'.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6, ease: 'easeOut' as Easing }}
            className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]"
          >
            A Veneza não aparece
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8, ease: 'easeOut' as Easing }}
            className="font-montserrat font-black text-3xl md:text-5xl text-[#E71D36] mt-2"
          >
            em NENHUMA dessas vezes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2, ease: 'easeOut' as Easing }}
            className="font-lora italic text-base text-[#A9A9A9] mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Cada uma dessas 60 mil buscas é uma pessoa com fome, com o celular na mão, pronta pra ligar ou pedir pelo WhatsApp. E essa pessoa está vendo os concorrentes — não a Veneza. É como ter a melhor pizza da região mas estar numa rua sem placa.
          </motion.p>
        </motion.div>

        {/* Footer */}
        <motion.div {...fadeUp(0.9)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideBuscas;
