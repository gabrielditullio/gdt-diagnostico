import { motion, type Easing } from 'framer-motion';

const line = (delay: number, props: { text: string; className: string; shake?: boolean }) => {
  const anim = props.shake
    ? {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0, x: [0, -3, 3, -2, 2, 0] },
        transition: { opacity: { duration: 0.5, delay }, y: { duration: 0.5, delay }, x: { duration: 0.3, delay: delay + 0.5 } },
      }
    : {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay, ease: 'easeOut' as Easing },
      };
  return (
    <motion.p key={delay} {...anim} className={props.className}>
      {props.text}
    </motion.p>
  );
};

const RecantoPosicionamento = () => {
  return (
    <div className="min-h-screen bg-[#1B2A4A] flex flex-col justify-between px-6 py-12 md:px-16 md:py-16">
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        {line(0, { text: 'O Recanto da Pizza tem 25 anos,', className: 'font-montserrat font-black text-[26px] md:text-[44px] text-[#F2F2F2] leading-tight' })}
        {line(0.4, { text: '1.106 avaliações e nota 4.6.', className: 'font-montserrat font-black text-[26px] md:text-[44px] text-[#F2F2F2] leading-tight' })}
        {line(0.8, { text: 'É a #1 de Jundiaí.', className: 'font-montserrat font-black text-[26px] md:text-[44px] text-[#F2F2F2] leading-tight' })}

        <div className="h-4" />

        {line(1.4, { text: 'Tem 11 anúncios rodando no Instagram', className: 'font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]' })}
        {line(1.7, { text: 'e um perfil mais profissional', className: 'font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]' })}
        {line(2.0, { text: 'que pizzarias com agência.', className: 'font-montserrat font-bold text-lg md:text-2xl text-[#A9A9A9]' })}

        <div className="h-4" />

        {line(2.6, { text: "Mas no Google — onde 12 mil pessoas", className: 'font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]' })}
        {line(2.9, { text: "pesquisam 'pizzaria' todo mês —", className: 'font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]' })}
        {line(3.2, { text: 'o Recanto não tem site,', className: 'font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]' })}
        {line(3.5, { text: 'não tem anúncio,', className: 'font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]' })}
        {line(3.8, { text: 'e 92% das avaliações', className: 'font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]' })}
        {line(4.1, { text: 'estão sem resposta.', className: 'font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]' })}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 4.6 }}
          className="w-[120px] h-[3px] bg-[#E71D36] my-4"
          style={{ transformOrigin: 'center' }}
        />

        {line(5.2, { text: 'O marketing é bom.', className: 'font-montserrat font-black text-2xl md:text-4xl text-[#F2F2F2]', shake: true })}
        {line(5.6, { text: 'O Google, não.', className: 'font-montserrat font-black text-2xl md:text-4xl text-[#E71D36]', shake: true })}

        <div className="h-6" />

        {line(6.2, { text: 'O Recanto acertou no Instagram e nos anúncios.', className: 'font-lora italic text-base md:text-[17px] text-[#A9A9A9]' })}
        {line(6.6, { text: 'Mas está jogando metade do jogo. A outra metade —', className: 'font-lora italic text-base md:text-[17px] text-[#A9A9A9]' })}
        {line(7.0, { text: 'Google Ads, ficha otimizada, site próprio — é onde', className: 'font-lora italic text-base md:text-[17px] text-[#A9A9A9]' })}
        {line(7.4, { text: 'Monte Carlo, 430 Gradi e Vesúvio já estão presentes.', className: 'font-lora italic text-base md:text-[17px] text-[#A9A9A9]' })}
        {line(7.8, { text: '25 anos de história merecem visibilidade completa.', className: 'font-lora italic text-base md:text-[17px] text-[#A9A9A9]' })}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 8.2 }}
        className="flex items-center justify-between border-t border-white/10 pt-4 mt-8"
      >
        <span className="font-montserrat font-black text-sm text-white">GDT</span>
        <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
      </motion.div>
    </div>
  );
};

export default RecantoPosicionamento;
