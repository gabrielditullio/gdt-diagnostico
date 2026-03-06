import { motion } from 'framer-motion';
import { fadeUp } from '../../slides/animations';

const steps = [
  { num: '1', title: 'Conversa de 20-30 minutos', desc: 'Sem compromisso. Para entender melhor a operação, os objetivos e o momento do Recanto da Pizza.', color: '#E71D36' },
  { num: '2', title: 'Proposta personalizada', desc: 'Baseada na conversa, monto um plano de ação específico com investimentos, prazos e resultados esperados.', color: '#F5A623' },
  { num: '3', title: 'Execução e acompanhamento', desc: 'Se aprovado, começo a implementar com relatórios claros e reuniões periódicas de resultados.', color: '#2ECC71' },
];

const RecantoProximosPassos = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#1B2A4A] mb-4">
          SE FIZER SENTIDO
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-10">
          Os próximos passos seriam:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.2 + i * 0.15)}
              className="bg-white p-6"
              style={{ borderLeft: `4px solid ${step.color}` }}
            >
              <span className="font-montserrat font-black text-[48px] leading-none block mb-3" style={{ color: step.color }}>
                {step.num}
              </span>
              <h3 className="font-montserrat font-bold text-lg text-[#121212] mb-2">{step.title}</h3>
              <p className="font-lora text-sm text-[#A9A9A9] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.7)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RecantoProximosPassos;
