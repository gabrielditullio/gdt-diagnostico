import { motion } from 'framer-motion';
import { fadeUp } from '../../slides/animations';

const linhas = [
  { canal: 'Ficha do Google (verificação)', status: 'NÃO VERIFICADA — qualquer pessoa pode editar', tag: 'CRÍTICA', tagBg: '#E71D36' },
  { canal: 'Ficha do Google (avaliações)', status: '1.746, #1 — mas 0% respondidas (0 de 90)', tag: 'CRÍTICA', tagBg: '#E71D36' },
  { canal: 'Ficha do Google (informações)', status: 'Sem logo, sem descrição, sem foto proprietário', tag: 'CRÍTICA', tagBg: '#E71D36' },
  { canal: 'Instagram', status: 'Parado desde setembro 2022 (3,5 anos)', tag: 'CRÍTICA', tagBg: '#E71D36' },
  { canal: 'Site próprio', status: 'NÃO EXISTE', tag: 'URGENTE', tagBg: '#E71D36' },
  { canal: 'Anúncios (Google/Instagram/Facebook)', status: 'ZERO em todas as plataformas', tag: 'URGENTE', tagBg: '#E71D36' },
  { canal: 'Delivery (iFood/TheLivery)', status: 'Presente e ativo', tag: 'OK', tagBg: '#2ECC71' },
  { canal: 'Reputação real', status: '31 anos, #1 da cidade, 1.746 avaliações', tag: 'EXCELENTE', tagBg: '#2ECC71' },
];

const DellaMammaResumo = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#1B2A4A] mb-4">
          07 — RESUMO
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-10">
          Resumo — Canal por Canal
        </motion.h2>

        <motion.div {...fadeUp(0.2)} className="bg-white border border-[#A9A9A9] mb-10 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1B2A4A]">
                <th className="font-montserrat font-bold text-sm text-white p-3">O que é</th>
                <th className="font-montserrat font-bold text-sm text-white p-3">Como está</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-center">Urgência</th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((l, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]/60'}
                >
                  <td className="font-montserrat font-bold text-sm text-[#121212] p-3">{l.canal}</td>
                  <td className="font-lora text-sm text-[#121212] p-3">{l.status}</td>
                  <td className="p-3 text-center">
                    <span
                      className="inline-block font-montserrat font-bold text-xs text-white px-3 py-1 uppercase tracking-wider"
                      style={{ backgroundColor: l.tagBg }}
                    >
                      {l.tag}
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

export default DellaMammaResumo;
