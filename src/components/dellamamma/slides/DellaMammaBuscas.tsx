import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { fadeUp } from '../../slides/animations';

const buscas = [
  { termo: 'pizzaria', volume: '5.000', aparece: false },
  { termo: 'pizzaria perto de mim', volume: '500', aparece: false },
  { termo: 'pizzaria vitória', volume: '500', aparece: false },
  { termo: 'pizzaria aberta agora', volume: '50', aparece: false },
  { termo: 'pizzaria delivery', volume: '50', aparece: false },
  { termo: 'pizzaria próxima', volume: '50', aparece: false },
  { termo: '+ variações (aberta, perto, etc.)', volume: '~200', aparece: false },
];

const DellaMammaBuscas = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          05 — BUSCAS NO GOOGLE
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          5.500+ buscas por mês que a Della Mamma não captura
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          Em Vitória da Conquista, as pessoas pesquisam — mas a Della Mamma não aparece
        </motion.p>

        {/* Explanatory block */}
        <motion.div {...fadeUp(0.3)} className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8">
          <p className="font-lora italic text-base text-[#121212]">
            Sabe quando você pesquisa algo no Google e os primeiros resultados têm a tag 'Patrocinado'? Isso é um anúncio pago. As empresas pagam pra aparecer no topo. A Della Mamma não paga NADA — então só aparece se o Google resolver mostrar de graça.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div {...fadeUp(0.4)} className="bg-white border border-[#A9A9A9] mb-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1B2A4A]">
                <th className="font-montserrat font-bold text-sm text-white p-3">O que as pessoas digitam no Google</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-center">Vezes por mês</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-center">A Della Mamma aparece?</th>
              </tr>
            </thead>
            <tbody>
              {buscas.map((b, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]/60'}
                >
                  <td className="font-lora text-sm text-[#121212] p-3">{b.termo}</td>
                  <td className="font-lora text-sm text-[#121212] p-3 text-center font-bold">{b.volume}</td>
                  <td className="p-3 text-center">
                    <span className="inline-flex items-center gap-1 font-lora text-sm text-[#E74C3C]">
                      <X size={14} /> Não
                    </span>
                  </td>
                </motion.tr>
              ))}
              <tr className="bg-[#1B2A4A]">
                <td className="font-montserrat font-bold text-sm text-white p-3">TOTAL</td>
                <td className="font-montserrat font-bold text-sm text-white p-3 text-center">~5.850/mês</td>
                <td className="font-montserrat font-bold text-sm text-[#E71D36] p-3 text-center">❌ Invisível</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.p {...fadeUp(0.9)} className="font-montserrat text-[10px] text-[#A9A9A9] mb-2">
          Dados: Google Keyword Planner, fev/2025 a jan/2026. Região: Vitória da Conquista.
        </motion.p>

        <motion.p {...fadeUp(0.95)} className="font-lora italic text-[13px] text-[#A9A9A9] mb-8">
          O volume de buscas em VdC é menor que Salvador ou BH — mas é proporcional ao tamanho da cidade. 5.850 buscas/mês são 5.850 pessoas COM FOME que não estão vendo a Della Mamma.
        </motion.p>

        {/* Competitor block */}
        <motion.div {...fadeUp(1.0)} className="bg-[#F5A623]/[0.08] border-l-4 border-[#F5A623] p-4 mb-8">
          <p className="font-montserrat font-bold text-sm text-[#1B2A4A] mb-1">Enquanto isso:</p>
          <p className="font-lora text-sm text-[#121212]">
            A Pizzaria Florência é buscada 1.000 vezes por mês PELO NOME no Google. A Della Mamma? Não aparece como termo buscado. A marca ainda não tem presença de busca.
          </p>
        </motion.div>

        {/* Dark highlight block */}
        <motion.div {...fadeUp(1.1)} className="bg-[#1B2A4A] p-8 md:p-12 text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="font-montserrat font-black text-3xl md:text-5xl text-[#F2F2F2] mb-2"
          >
            5.850 vezes por mês
          </motion.p>
          {['alguém em Vitória da Conquista', "pesquisa 'pizzaria' no Google.", 'A Della Mamma — a #1 da cidade —'].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.3 }}
              className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]"
            >
              {line}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
            className="font-montserrat font-black text-3xl md:text-5xl text-[#E71D36] mt-2"
          >
            não aparece em NENHUMA.
          </motion.p>
        </motion.div>

        {/* Footer */}
        <motion.div {...fadeUp(1.2)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default DellaMammaBuscas;
