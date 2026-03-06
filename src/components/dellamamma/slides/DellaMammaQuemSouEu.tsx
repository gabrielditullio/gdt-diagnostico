import { motion } from 'framer-motion';
import { fadeUp } from '../../slides/animations';
import gabrielFoto from '@/assets/gabriel-foto.jpg';

const DellaMammaQuemSouEu = () => {
  return (
    <div className="relative min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16 overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-[0.05]" style={{ background: 'linear-gradient(165deg, transparent 40%, #1B2A4A 40%)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-10 items-center min-h-[60vh]">
          {/* Photo placeholder */}
          <motion.div {...fadeUp(0)} className="flex justify-center md:justify-start">
            <img src={gabrielFoto} alt="Gabriel Di Tullio" className="w-[240px] h-[300px] object-cover border-2 border-[#A9A9A9]" />
          </motion.div>

          {/* Text */}
          <div>
            <motion.p {...fadeUp(0.1)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#A9A9A9] mb-2">
              QUEM PREPAROU ESSE DIAGNÓSTICO?
            </motion.p>
            <motion.h2 {...fadeUp(0.2)} className="font-montserrat font-black text-[28px] text-[#121212] mb-1">
              GABRIEL DI TULLIO
            </motion.h2>
            <motion.p {...fadeUp(0.3)} className="font-montserrat font-bold text-sm text-[#E71D36] mb-4">
              Especialista em Marketing Digital e Tráfego Pago para Negócios Locais
            </motion.p>
            <motion.div {...fadeUp(0.4)} className="w-10 h-[2px] bg-[#E71D36] mb-6" />
            <motion.p {...fadeUp(0.5)} className="font-lora text-base text-[#121212] mb-3">
              Há 6 anos ajudando empresas a serem encontradas na internet por quem está pronto para comprar.
            </motion.p>
            <motion.p {...fadeUp(0.6)} className="font-lora text-base text-[#121212] mb-3">
              Mais de R$50 milhões em resultados gerados para clientes em diversos segmentos.
            </motion.p>
            <motion.p {...fadeUp(0.7)} className="font-lora italic text-base text-[#121212]">
              Foco: pizzarias, restaurantes e negócios de bairro que têm um produto incrível mas ainda dependem só do boca-a-boca.
            </motion.p>
          </div>
        </div>

        {/* Footer */}
        <motion.div {...fadeUp(0.8)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4 mt-12">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default DellaMammaQuemSouEu;
