import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as Easing },
});

const shakeAndFade = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    x: [0, -3, 3, -2, 2, 0],
  },
  transition: {
    opacity: { duration: 0.5, delay, ease: 'easeOut' as Easing },
    y: { duration: 0.5, delay, ease: 'easeOut' as Easing },
    x: { duration: 0.3, delay: delay + 0.3, ease: 'easeInOut' as Easing },
  },
});

const SlidePosicionamento = () => {
  return (
    <div className="min-h-screen bg-[#1B2A4A] flex flex-col justify-between px-6 py-12 md:px-16 md:py-16">
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.p {...fade(0)} className="font-montserrat font-black text-3xl md:text-5xl text-[#F2F2F2]">34 anos.</motion.p>
        <motion.p {...fade(0.4)} className="font-montserrat font-black text-3xl md:text-5xl text-[#F2F2F2]">1.771 avaliações.</motion.p>
        <motion.p {...fade(0.8)} className="font-montserrat font-black text-3xl md:text-5xl text-[#F2F2F2]">Nota 4.5.</motion.p>
        <motion.p {...fade(1.2)} className="font-montserrat font-black text-3xl md:text-5xl text-[#F2F2F2]">A #1 de toda a região.</motion.p>

        <div className="h-6" />

        <motion.p {...fade(1.8)} className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]">Mas o Instagram está parado</motion.p>
        <motion.p {...fade(2.1)} className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]">há 2 meses.</motion.p>

        <div className="h-2" />

        <motion.p {...fade(2.6)} className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]">60 avaliações no Google</motion.p>
        <motion.p {...fade(2.9)} className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]">estão sem resposta.</motion.p>

        <div className="h-2" />

        <motion.p {...fade(3.4)} className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]">60 mil pessoas por mês</motion.p>
        <motion.p {...fade(3.7)} className="font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]">pesquisam 'pizzaria' em Salvador.</motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, delay: 4.2, ease: 'easeOut' as Easing }}
          className="w-[120px] h-[3px] bg-[#E71D36] my-6 origin-center"
        />

        <motion.p {...shakeAndFade(4.8)} className="font-montserrat font-black text-3xl md:text-5xl text-[#E71D36]">E a Veneza simplesmente</motion.p>
        <motion.p {...shakeAndFade(5.2)} className="font-montserrat font-black text-3xl md:text-5xl text-[#E71D36]">NÃO APARECE.</motion.p>

        <div className="h-6" />

        <motion.p {...fade(5.8)} className="font-lora italic text-base md:text-[17px] text-[#A9A9A9] leading-relaxed">A pizza é a melhor da região — os clientes já provaram</motion.p>
        <motion.p {...fade(6.2)} className="font-lora italic text-base md:text-[17px] text-[#A9A9A9] leading-relaxed">isso 1.771 vezes. Mas enquanto a Veneza fica em silêncio</motion.p>
        <motion.p {...fade(6.6)} className="font-lora italic text-base md:text-[17px] text-[#A9A9A9] leading-relaxed">no digital, os concorrentes estão aparecendo, anunciando</motion.p>
        <motion.p {...fade(7.0)} className="font-lora italic text-base md:text-[17px] text-[#A9A9A9] leading-relaxed">e levando embora os clientes que deveriam ser da Veneza.</motion.p>
      </div>

      {/* Footer */}
      <motion.div {...fade(7.4)} className="flex items-center justify-between border-t border-white/10 pt-4 mt-8">
        <span className="font-montserrat font-black text-sm text-white">GDT</span>
        <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
      </motion.div>
    </div>
  );
};

export default SlidePosicionamento;
