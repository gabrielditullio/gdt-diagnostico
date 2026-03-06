import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as Easing },
});

const DellaMammaCTA = () => {
  return (
    <div className="min-h-screen bg-[#1B2A4A] flex flex-col items-center justify-center px-6 py-12 md:px-16 md:py-16 text-center">
      <div className="max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center">
        {/* Main text */}
        <motion.p {...fade(0)} className="font-montserrat font-black text-[28px] md:text-[40px] text-[#F2F2F2] leading-tight mb-1">
          Nós oferecemos <motion.span
            initial={{ backgroundColor: 'rgba(46,204,113,0)' }}
            animate={{ backgroundColor: 'rgba(46,204,113,1)' }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="px-3 py-1"
          >RESULTADO</motion.span>.
        </motion.p>
        <motion.p {...fade(0.3)} className="font-montserrat font-black text-[28px] md:text-[40px] text-[#F2F2F2] leading-tight">
          E resultado a gente <motion.span
            initial={{ backgroundColor: 'rgba(231,29,54,0)' }}
            animate={{ backgroundColor: 'rgba(231,29,54,1)' }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="px-3 py-1"
          >PROVA</motion.span> — não promete.
        </motion.p>

        <div className="h-8" />

        <motion.p {...fade(0.8)} className="font-lora italic text-lg text-[#A9A9A9]">
          Se essa análise fez sentido para você, vamos marcar uma conversa rápida.
        </motion.p>

        <div className="h-8" />

        <motion.a
          href="https://api.whatsapp.com/send/?phone=5511996035995&text=Gabriel%2C+vi+o+diagn%C3%B3stico+e+quero+marcar+uma+reuni%C3%A3o&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          {...fade(1.0)}
          whileHover={{ scale: 1.02 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.03, 1],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.0 },
            y: { duration: 0.6, delay: 1.0 },
            scale: { duration: 2, repeat: Infinity, repeatDelay: 1, delay: 2 },
          }}
          className="inline-block font-montserrat font-bold text-base text-white bg-[#E71D36] hover:bg-[#C41830] px-12 py-4 transition-colors"
        >
          AGENDAR CONVERSA
        </motion.a>

        <div className="h-6" />

        <motion.p {...fade(1.4)} className="font-montserrat font-black text-5xl text-[#F2F2F2]/20">GDT</motion.p>
        <motion.p {...fade(1.6)} className="font-montserrat text-sm text-[#A9A9A9] mt-2">gabrielditullio.com.br</motion.p>
      </div>

      <motion.p {...fade(1.8)} className="font-lora text-xs text-[#A9A9A9]/60 mt-8">
        Confidencial — Casa Della Mamma Pizzaria
      </motion.p>
    </div>
  );
};

export default DellaMammaCTA;
