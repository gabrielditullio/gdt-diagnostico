import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as Easing },
});

const SlideCTA = () => {
  return (
    <div className="min-h-screen bg-[#1B2A4A] flex flex-col justify-between px-6 py-12 md:px-16 md:py-16">
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <motion.p {...fade(0)} className="font-montserrat font-black text-2xl md:text-[40px] text-[#F2F2F2] leading-tight mb-1">
          Nós oferecemos{' '}
          <motion.span
            initial={{ backgroundColor: 'rgba(46,204,113,0)' }}
            animate={{ backgroundColor: 'rgba(46,204,113,1)' }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="px-3 py-1 text-white inline-block"
          >
            RESULTADO
          </motion.span>
          .
        </motion.p>
        <motion.p {...fade(0.3)} className="font-montserrat font-black text-2xl md:text-[40px] text-[#F2F2F2] leading-tight">
          E resultado a gente{' '}
          <motion.span
            initial={{ backgroundColor: 'rgba(231,29,54,0)' }}
            animate={{ backgroundColor: 'rgba(231,29,54,1)' }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="px-3 py-1 text-white inline-block"
          >
            PROVA
          </motion.span>
          {' '}— não promete.
        </motion.p>

        <div className="h-8" />

        <motion.p {...fade(0.8)} className="font-lora italic text-base md:text-lg text-[#A9A9A9] leading-relaxed">
          Se essa análise fez sentido para você, vamos marcar uma conversa rápida.
        </motion.p>

        <div className="h-8" />

        <motion.a
          href="https://api.whatsapp.com/send/?phone=5511996035995&text=Gabriel%2C+vi+o+diagn%C3%B3stico+e+quero+marcar+uma+reuni%C3%A3o&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [1, 1.02, 1] }}
          transition={{
            opacity: { duration: 0.5, delay: 1.0 },
            scale: { duration: 2, delay: 1.5, repeat: Infinity, repeatType: 'reverse' as const },
          }}
          className="font-montserrat font-bold text-base bg-[#E71D36] hover:bg-[#C41830] text-white px-12 py-4 transition-colors inline-block"
        >
          AGENDAR CONVERSA
        </motion.a>

        <div className="h-6" />

        <motion.p {...fade(1.2)} className="font-montserrat font-black text-5xl text-[#F2F2F2] opacity-20">GDT</motion.p>
        <motion.p {...fade(1.4)} className="font-montserrat text-sm text-[#A9A9A9] mt-2">gabrielditullio.com.br</motion.p>
      </div>

      <motion.p {...fade(1.6)} className="text-center font-lora text-xs text-[#A9A9A9]/60 mt-8">
        Confidencial — Pizzaria Veneza
      </motion.p>
    </div>
  );
};

export default SlideCTA;
