import { motion } from 'framer-motion';
import { fadeUp } from '../../slides/animations';

const DellaMammaTriploZero = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-4xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          04 — O TRIPLO ZERO
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          Nenhum site. Nenhum anúncio. Em nenhum lugar.
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="font-lora italic text-base text-[#A9A9A9] mb-10 max-w-3xl">
          A Della Mamma é a única #1 que já analisei que não investe R$0,01 em marketing digital.
        </motion.p>

        {/* Bloco 1 — SEM SITE */}
        <motion.div {...fadeUp(0.3)} className="bg-[#E71D36]/[0.08] border-l-4 border-[#E71D36] p-6 mb-4">
          <p className="font-montserrat font-black text-2xl md:text-4xl text-[#E71D36] mb-3">SEM SITE</p>
          <p className="font-lora text-[15px] text-[#121212] mb-3">
            A Della Mamma não tem um site. O link que aparece na ficha do Google é da plataforma TheLivery — um serviço de delivery terceirizado. Não é um site da Della Mamma.
          </p>
          <div className="space-y-1 mt-2">
            {[
              'O Google não encontra a Della Mamma nas buscas',
              'É impossível rodar anúncios no Google (precisa de site como destino)',
              'Não tem cardápio próprio, história da marca, fotos profissionais',
              'Qualquer decisão do TheLivery afeta a Della Mamma diretamente',
            ].map((t, i) => (
              <p key={i} className="font-montserrat font-semibold text-sm text-[#121212]">→ {t}</p>
            ))}
          </div>
        </motion.div>

        {/* Bloco 2 — SEM ANÚNCIOS GOOGLE */}
        <motion.div {...fadeUp(0.5)} className="bg-[#E71D36]/[0.08] border-l-4 border-[#E71D36] p-6 mb-4">
          <p className="font-montserrat font-black text-2xl md:text-4xl text-[#E71D36] mb-3">ZERO ANÚNCIOS NO GOOGLE</p>
          <p className="font-lora text-[15px] text-[#121212]">
            Quando alguém pesquisa 'pizzaria' em Vitória da Conquista — 5.000 vezes por mês — a Della Mamma não aparece em nenhum anúncio. Toda essa demanda vai para concorrentes.
          </p>
        </motion.div>

        {/* Bloco 3 — SEM ANÚNCIOS INSTAGRAM */}
        <motion.div {...fadeUp(0.7)} className="bg-[#E71D36]/[0.08] border-l-4 border-[#E71D36] p-6 mb-4">
          <p className="font-montserrat font-black text-2xl md:text-4xl text-[#E71D36] mb-3">ZERO ANÚNCIOS NO INSTAGRAM/FACEBOOK</p>
          <p className="font-lora text-[15px] text-[#121212]">
            Diferente de outras pizzarias que analisei (que têm 5, 10, até 11 anúncios rodando), a Della Mamma não tem NENHUM anúncio pago no Instagram nem no Facebook. Combinado com o Instagram parado desde 2022, a presença digital é essencialmente NULA.
          </p>
        </motion.div>

        {/* Highlight block */}
        <motion.div {...fadeUp(0.9)} className="border-2 border-[#E71D36] p-5 bg-[#E71D36]/[0.05] mb-10 mt-8">
          <p className="font-montserrat font-bold text-base text-[#E71D36]">
            Sem site. Sem anúncio no Google. Sem anúncio no Instagram. Instagram parado há 3 anos. Ficha do Google sem logo, sem descrição, sem verificação. De todos os negócios que já analisei, a Della Mamma é o caso mais extremo de desconexão entre reputação real e presença digital. A pizza é a #1. O digital é o último.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div {...fadeUp(1.0)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default DellaMammaTriploZero;
