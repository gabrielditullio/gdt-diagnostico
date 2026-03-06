import { motion } from 'framer-motion';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

const shake = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    x: [0, -3, 3, -2, 2, 0],
  },
  transition: {
    opacity: { duration: 0.6, delay, ease: 'easeOut' },
    y: { duration: 0.6, delay, ease: 'easeOut' },
    x: { duration: 0.3, delay: delay + 0.6, ease: 'easeInOut' },
  },
});

const DellaMammaPosicionamento = () => {
  return (
    <div className="min-h-screen bg-[#1B2A4A] flex flex-col justify-between px-6 py-12 md:px-16 md:py-16">
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        {/* Lines 1-4 */}
        {['31 anos.', '1.746 avaliações.', 'A #1 de Vitória da Conquista.', 'Quase o DOBRO da segunda colocada.'].map((t, i) => (
          <motion.p key={i} {...fade(i * 0.4)} className="font-montserrat font-black text-[28px] md:text-[48px] text-[#F2F2F2] leading-tight">
            {t}
          </motion.p>
        ))}

        <div className="h-6" />

        {/* Lines 5-8 */}
        {[
          { text: 'Mas a ficha do Google', delay: 1.8, color: '#A9A9A9' },
          { text: 'não tem logo.', delay: 2.1, color: '#A9A9A9' },
          { text: 'Não tem descrição.', delay: 2.4, color: '#A9A9A9' },
          { text: 'Não está VERIFICADA.', delay: 2.7, color: '#E74C3C' },
        ].map((l, i) => (
          <motion.p key={`b${i}`} {...fade(l.delay)} className="font-montserrat font-bold text-base md:text-[22px]" style={{ color: l.color }}>
            {l.text}
          </motion.p>
        ))}

        <div className="h-2" />

        {/* Lines 9-10 */}
        <motion.p {...fade(3.2)} className="font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]">E de 90 avaliações recentes,</motion.p>
        <motion.p {...fade(3.5)} className="font-montserrat font-bold text-base md:text-[22px] text-[#E74C3C]">ZERO foram respondidas.</motion.p>

        <div className="h-2" />

        {/* Lines 11-12 */}
        <motion.p {...fade(4.0)} className="font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]">O Instagram está parado</motion.p>
        <motion.p {...fade(4.3)} className="font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]">desde setembro de 2022.</motion.p>

        <div className="h-2" />

        {/* Lines 13-15 */}
        <motion.p {...fade(4.8)} className="font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]">Nenhum site.</motion.p>
        <motion.p {...fade(5.0)} className="font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]">Nenhum anúncio.</motion.p>
        <motion.p {...fade(5.2)} className="font-montserrat font-bold text-base md:text-[22px] text-[#A9A9A9]">Em lugar nenhum.</motion.p>

        {/* Separator */}
        <motion.div {...fade(5.6)} className="w-[120px] h-[3px] bg-[#E71D36] my-6" />

        {/* Lines 16-17 with shake */}
        <motion.p {...shake(6.2)} className="font-montserrat font-black text-[26px] md:text-[40px] text-[#F2F2F2]">A pizza é lendária.</motion.p>
        <motion.p {...shake(6.6)} className="font-montserrat font-black text-[26px] md:text-[40px] text-[#E71D36]">O digital? Não existe.</motion.p>

        <div className="h-6" />

        {/* Lines 18-22 */}
        {[
          { text: 'A Casa Della Mamma é a prova de que um produto excepcional', delay: 7.2 },
          { text: "sobrevive décadas por mérito próprio. Mas no mundo de 2026,", delay: 7.6 },
          { text: "'sobreviver' não é 'crescer'. Enquanto a Della Mamma fica", delay: 8.0 },
          { text: 'em silêncio, os concorrentes estão aprendendo a aparecer.', delay: 8.4 },
          { text: 'E o Google não espera.', delay: 8.8 },
        ].map((l, i) => (
          <motion.p key={`c${i}`} {...fade(l.delay)} className="font-lora italic text-[17px] text-[#A9A9A9]">
            {l.text}
          </motion.p>
        ))}
      </div>

      {/* Footer light */}
      <motion.div {...fade(9.2)} className="flex items-center justify-between border-t border-white/10 pt-4 mt-8">
        <span className="font-montserrat font-black text-sm text-white">GDT</span>
        <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
      </motion.div>
    </div>
  );
};

export default DellaMammaPosicionamento;
