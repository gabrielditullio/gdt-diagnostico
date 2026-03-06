import { motion } from 'framer-motion';
import { fadeUp } from './animations';

const SlideAnuncios = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          06 — ANÚNCIOS PAGOS
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          Anúncios no Instagram e Facebook
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          Hoje a Veneza não está rodando NENHUM anúncio em nenhum lugar
        </motion.p>

        <motion.div {...fadeUp(0.2)} className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8">
          <p className="font-lora italic text-base text-[#121212] leading-relaxed">
            Quando você está rolando o Instagram ou o Facebook e aparece um post de uma empresa com a tag 'Patrocinado' embaixo, isso é um anúncio pago. A empresa pagou pra que aquele post apareça pra milhares de pessoas — mesmo pra quem nunca seguiu o perfil. É a forma mais eficiente de fazer pessoas novas conhecerem o seu negócio.
          </p>
        </motion.div>

        {/* Central block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#E71D36]/[0.08] border-[3px] border-[#E71D36] p-8 md:p-12 text-center mb-8"
        >
          <p className="font-montserrat font-black text-3xl md:text-5xl text-[#E71D36] mb-4">ZERO anúncios.</p>
          <p className="font-montserrat font-bold text-xl text-[#E71D36]">No Instagram: zero.</p>
          <p className="font-montserrat font-bold text-xl text-[#E71D36]">No Facebook: zero.</p>
          <p className="font-montserrat font-bold text-xl text-[#E71D36] mb-6">No Google: zero.</p>

          <div className="text-left max-w-2xl mx-auto space-y-3">
            <p className="font-lora text-base text-[#121212]">O que isso significa na prática:</p>
            <p className="font-lora text-base text-[#121212] leading-relaxed">
              <strong>No Instagram:</strong> Os posts da Veneza só aparecem pra uma fração dos 6 mil seguidores (o Instagram mostra pra menos de 5% de graça). Sem anúncio pago, 95% dos seguidores NEM VÊ os posts.
            </p>
            <p className="font-lora text-base text-[#121212] leading-relaxed">
              <strong>Para pessoas novas:</strong> Quem NÃO segue @pizzariavenezaparipe simplesmente não sabe que a Veneza existe no Instagram. Sem anúncio, o perfil é invisível pra quem não é seguidor.
            </p>
            <p className="font-lora text-base text-[#121212] leading-relaxed">
              <strong>No Google:</strong> Quando alguém pesquisa 'pizzaria em Paripe' ou 'pizza delivery Salvador', a Veneza não aparece nos resultados pagos. Os concorrentes que pagam aparecem primeiro.
            </p>
          </div>
        </motion.div>

        {/* Money block */}
        <motion.div {...fadeUp(0.5)} className="bg-[#F5A623]/[0.08] border-l-4 border-[#F5A623] p-5 mb-6">
          <p className="font-montserrat font-bold text-base text-[#1B2A4A] mb-3">Pra colocar em perspectiva:</p>
          <div className="space-y-3 font-lora text-[15px] text-[#121212] leading-relaxed">
            <p>Com apenas R$10 a R$20 por dia em anúncios no Instagram, a Veneza poderia alcançar 3.000 a 8.000 pessoas por dia em Paripe e no subúrbio — pessoas que moram perto, que gostam de pizza, e que nunca ouviram falar da Veneza.</p>
            <p>Isso é R$300 a R$600 por mês. Menos que o custo de UMA pizza grande por dia.</p>
            <p>E hoje? Hoje esse investimento é R$0. E o alcance de pessoas novas também é praticamente zero.</p>
          </div>
        </motion.div>

        {/* Highlight */}
        <motion.div {...fadeUp(0.6)} className="border-2 border-[#E71D36] p-5 bg-[#E71D36]/[0.05] mb-10">
          <p className="font-montserrat font-bold text-base text-[#E71D36]">
            A Veneza tem 34 anos de história e 1.771 avaliações no Google. Mas pra quem não está no Instagram da Veneza e não mora em Paripe, ela simplesmente não existe. Sem anúncio, sem vitrine. Sem vitrine, sem cliente novo.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.7)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideAnuncios;
