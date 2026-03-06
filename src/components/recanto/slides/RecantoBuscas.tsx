import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { fadeUp } from '../../slides/animations';

const buscas = [
  { termo: 'pizzaria', vol: '5.000', anuncio: false },
  { termo: 'pizzaria perto de mim', vol: '5.000', anuncio: false },
  { termo: 'pizzaria aberta agora', vol: '500', anuncio: false },
  { termo: 'pizzaria próximo a mim', vol: '500', anuncio: false },
  { termo: 'pizzaria perto de mim aberta agora', vol: '500', anuncio: false },
  { termo: 'pizzaria delivery (genérico)', vol: '500+', anuncio: false },
];

const concorrentes = [
  { name: 'Monte Carlo Pizzaria', vol: '10.000 buscas/mês pelo nome' },
  { name: '430 Gradi', vol: '500 buscas/mês pelo nome' },
  { name: 'Vesúvio', vol: '500 buscas/mês pelo nome' },
  { name: 'Fratelli', vol: '1.000 buscas/mês pelo nome' },
];

const RecantoBuscas = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          05 — BUSCAS PERDIDAS
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          12.000+ buscas por mês que o Recanto não captura
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          Cada busca é alguém com fome, celular na mão, pronto para pedir
        </motion.p>

        {/* Table */}
        <motion.div {...fadeUp(0.2)} className="mb-4 overflow-x-auto">
          <table className="w-full border border-[#A9A9A9] text-left">
            <thead>
              <tr className="bg-[#1B2A4A]">
                <th className="font-montserrat font-bold text-sm text-white p-3">Termo de busca</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-right">Buscas/mês</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-center">Anúncio do Recanto?</th>
              </tr>
            </thead>
            <tbody>
              {buscas.map((b, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'}
                >
                  <td className="font-lora text-sm text-[#121212] p-3">{b.termo}</td>
                  <td className="font-lora text-sm text-[#121212] p-3 text-right">{b.vol}</td>
                  <td className="p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-[#E74C3C]">
                      <X size={14} /> <span className="font-lora text-sm">Não</span>
                    </span>
                  </td>
                </motion.tr>
              ))}
              <tr className="bg-[#1B2A4A]">
                <td className="font-montserrat font-bold text-sm text-white p-3">TOTAL ESTIMADO</td>
                <td className="font-montserrat font-bold text-sm text-white p-3 text-right">~12.000+/mês</td>
                <td className="font-montserrat font-bold text-sm text-white p-3 text-center">
                  <span className="inline-flex items-center gap-1">
                    <X size={14} /> Invisível
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.p {...fadeUp(0.5)} className="font-montserrat text-[10px] text-[#A9A9A9] mb-8">
          Dados: Google Keyword Planner, fev/2025 a jan/2026. Região: Jundiaí e entorno. Total mapeado: 1.119 termos, 89.200 buscas/mês no universo completo.
        </motion.p>

        {/* Competitors block */}
        <motion.div {...fadeUp(0.55)} className="bg-[#F5A623]/[0.08] border-l-4 border-[#F5A623] p-5 mb-8">
          <p className="font-montserrat font-bold text-[15px] text-[#1B2A4A] mb-3">
            Enquanto isso, os concorrentes são buscados PELO NOME:
          </p>
          <div className="space-y-1 mb-3">
            {concorrentes.map((c, i) => (
              <p key={i} className="font-lora text-sm text-[#121212]">
                {c.name} — {c.vol}
              </p>
            ))}
          </div>
          <p className="font-montserrat font-bold text-sm text-[#E71D36]">
            Recanto da Pizza — ZERO buscas pelo nome. A marca ainda não tem presença de busca direta.
          </p>
        </motion.div>

        {/* Dark highlight block */}
        <motion.div
          {...fadeUp(0.65)}
          className="bg-[#1B2A4A] p-10 md:p-12 text-center mb-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-montserrat font-black text-3xl md:text-[48px] text-[#F2F2F2] leading-tight"
          >
            12.000 buscas por mês
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="font-montserrat font-bold text-xl md:text-2xl text-[#A9A9A9] mt-2"
          >
            por 'pizzaria' em Jundiaí.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="font-montserrat font-bold text-xl md:text-2xl text-[#A9A9A9] mt-1"
          >
            O Recanto não aparece
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.25 }}
            className="font-montserrat font-black text-3xl md:text-[48px] text-[#E71D36] mt-2"
          >
            em NENHUMA delas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="font-lora italic text-base text-[#A9A9A9] mt-6 max-w-2xl mx-auto"
          >
            Enquanto isso, a Pizzaria Monte Carlo é pesquisada 5.000 vezes por mês PELO NOME. A 430 Gradi, a Vesúvio e a Firenze também. O Recanto tem 25 anos e 1.106 avaliações — mas no Google, ninguém pesquisa pelo nome. Isso muda com presença digital estruturada.
          </motion.p>
        </motion.div>

        <motion.div {...fadeUp(0.9)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RecantoBuscas;
