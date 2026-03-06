import { motion } from 'framer-motion';
import { fadeUp } from './animations';
import type { Easing } from 'framer-motion';

const rows = [
  { item: 'Ficha do Google (como aparece nas buscas)', status: '80/100 — BOM, mas 4 itens com nota zero', tag: 'MÉDIA', tagColor: '#F5A623' },
  { item: 'Avaliações no Google', status: '1.771 — #1 da região, mas 67% sem resposta', tag: 'URGENTE', tagColor: '#E71D36' },
  { item: 'Instagram', status: '6K seguidores, mas parado desde dezembro', tag: 'URGENTE', tagColor: '#E71D36' },
  { item: 'Anúncios pagos (Instagram/Facebook/Google)', status: 'ZERO. Nenhum anúncio em nenhuma plataforma', tag: 'URGENTE', tagColor: '#E71D36' },
  { item: 'Site (pizzariaveneza.net)', status: 'Existe, mas é de 2008 e nunca foi atualizado', tag: 'MÉDIA', tagColor: '#F5A623' },
  { item: 'Delivery online', status: 'Funciona via WhatsApp e Pedir Delivery', tag: 'OK', tagColor: '#2ECC71' },
  { item: 'Reputação / Avaliações', status: '4.5 estrelas, #1, 34 anos — muito forte', tag: 'ÓTIMO', tagColor: '#2ECC71' },
];

const SlideResumo = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#1B2A4A] mb-4">
          10 — RESUMO
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-8">
          Resumo — Canal por Canal
        </motion.h2>

        <motion.div {...fadeUp(0.2)} className="overflow-x-auto mb-10">
          <table className="w-full border border-[#A9A9A9] text-left">
            <thead>
              <tr className="bg-[#1B2A4A]">
                <th className="font-montserrat font-bold text-sm text-white p-3">O que é</th>
                <th className="font-montserrat font-bold text-sm text-white p-3">Como está</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-center">Urgência</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1, ease: 'easeOut' as Easing }}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'}
                >
                  <td className="font-montserrat font-bold text-sm text-[#121212] p-3 border-b border-[#A9A9A9]/30">{row.item}</td>
                  <td className="font-lora text-sm text-[#121212] p-3 border-b border-[#A9A9A9]/30">{row.status}</td>
                  <td className="p-3 border-b border-[#A9A9A9]/30 text-center">
                    <span
                      className="font-montserrat font-bold text-xs text-white px-3 py-1 inline-block uppercase tracking-wider"
                      style={{ backgroundColor: row.tagColor }}
                    >
                      {row.tag}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div {...fadeUp(0.8)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideResumo;
