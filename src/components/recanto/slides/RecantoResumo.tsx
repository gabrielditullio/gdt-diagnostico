import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { fadeUp } from '../../slides/animations';

const rows = [
  { canal: 'Site Próprio', icon: 'x', nota: 'NÃO EXISTE. Link na ficha = Play Store', tag: 'URGENTE', tagColor: '#E71D36' },
  { canal: 'Anúncios no Google', icon: 'x', nota: 'IMPOSSÍVEL sem site. 12.000 buscas/mês perdidas', tag: 'URGENTE', tagColor: '#E71D36' },
  { canal: 'Ficha do Google (Avaliações)', icon: 'x', nota: '1.106, #1 — mas 92% sem resposta', tag: 'URGENTE', tagColor: '#E71D36' },
  { canal: 'Ficha do Google (Score)', icon: 'warn', nota: '72/100 RAZOÁVEL — 5 itens zerados', tag: 'ALTA', tagColor: '#F5A623' },
  { canal: 'Anúncios Instagram/Facebook', icon: 'check', nota: '11 anúncios em vídeo — excelente volume', tag: 'MÉDIA', tagColor: '#2ECC71' },
  { canal: 'Instagram (Orgânico)', icon: 'check', nota: '10K seguidores, Reels profissionais, conteúdo forte', tag: 'MÉDIA', tagColor: '#2ECC71' },
  { canal: 'iFood / Anota AI', icon: 'check', nota: 'Presente e ativo', tag: 'BAIXA', tagColor: '#2ECC71' },
];

const IconEl = ({ type }: { type: string }) => {
  if (type === 'check') return <CheckCircle size={18} className="text-[#2ECC71]" />;
  if (type === 'warn') return <AlertTriangle size={18} className="text-[#F5A623]" />;
  return <XCircle size={18} className="text-[#E74C3C]" />;
};

const RecantoResumo = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#1B2A4A] mb-4">
          09 — RESUMO EXECUTIVO
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-10">
          Resumo Executivo — Canal por Canal
        </motion.h2>

        <motion.div {...fadeUp(0.2)} className="overflow-x-auto mb-10">
          <table className="w-full border border-[#A9A9A9] text-left">
            <thead>
              <tr className="bg-[#1B2A4A]">
                <th className="font-montserrat font-bold text-sm text-white p-3">Canal Digital</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-center">Situação</th>
                <th className="font-montserrat font-bold text-sm text-white p-3">Nota</th>
                <th className="font-montserrat font-bold text-sm text-white p-3 text-center">Prioridade</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'}
                >
                  <td className="font-montserrat font-bold text-sm text-[#121212] p-3">{r.canal}</td>
                  <td className="p-3 text-center"><IconEl type={r.icon} /></td>
                  <td className="font-lora text-sm text-[#121212] p-3">{r.nota}</td>
                  <td className="p-3 text-center">
                    <span
                      className="font-montserrat font-bold text-xs text-white px-3 py-1 inline-block"
                      style={{ backgroundColor: r.tagColor }}
                    >
                      {r.tag}
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

export default RecantoResumo;
