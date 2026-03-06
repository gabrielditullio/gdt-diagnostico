import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as Easing },
});

const RecantoCTA = () => {
  return (
    <div className="min-h-screen bg-[#1B2A4A] flex flex-col items-center justify-center px-6 py-12 md:px-16 md:py-16 text-center">
      <div className="max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center">
        <motion.p {...fadeIn(0)} className="font-montserrat font-black text-[28px] md:text-[40px] text-[#F2F2F2] leading-tight mb-2">
          Nós oferecemos{' '}
          <motion.span
            initial={{ backgroundColor: 'rgba(46,204,113,0)' }}
            animate={{ backgroundColor: 'rgba(46,204,113,1)' }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="px-3 py-1 text-white"
          >
            RESULTADO
          </motion.span>
          .
        </motion.p>
        <motion.p {...fadeIn(0.3)} className="font-montserrat font-black text-[28px] md:text-[40px] text-[#F2F2F2] leading-tight">
          E resultado a gente{' '}
          <motion.span
            initial={{ backgroundColor: 'rgba(231,29,54,0)' }}
            animate={{ backgroundColor: 'rgba(231,29,54,1)' }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="px-3 py-1 text-white"
          >
            PROVA
          </motion.span>
          {' '}— não promete.
        </motion.p>

        <motion.p {...fadeIn(0.8)} className="font-lora italic text-lg text-[#A9A9A9] mt-8 mb-8 max-w-xl">
          Se essa análise fez sentido para você, vamos marcar uma conversa rápida.
        </motion.p>

        <motion.a
          {...fadeIn(1.0)}
          href="https://api.whatsapp.com/send/?phone=5511996035995&text=Gabriel%2C+vi+o+diagn%C3%B3stico+e+quero+marcar+uma+reuni%C3%A3o&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-montserrat font-bold text-base bg-[#E71D36] text-white px-12 py-4 hover:bg-[#C41830] transition-colors animate-pulse"
          style={{ animationDuration: '3s' }}
        >
          AGENDAR CONVERSA
        </motion.a>

        <div className="mt-10">
          <motion.p {...fadeIn(1.4)} className="font-montserrat font-black text-[48px] text-[#F2F2F2] opacity-20">
            GDT
          </motion.p>
          <motion.p {...fadeIn(1.6)} className="font-montserrat text-sm text-[#A9A9A9]">
            gabrielditullio.com.br
          </motion.p>
          <motion.p {...fadeIn(1.8)} className="font-lora text-xs text-[#A9A9A9] opacity-60 mt-4">
            Confidencial — Recanto da Pizza
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default RecantoCTA;
