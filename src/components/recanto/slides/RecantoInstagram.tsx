import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { fadeUp } from '../../slides/animations';

const bons = [
  '~10.000 seguidores — base sólida para Jundiaí',
  '629 publicações — ritmo consistente ao longo dos anos',
  'Reels de verdade — vídeos de pizza saindo do forno, bastidores, clientes comendo, humor (formato que mais alcança pessoas novas)',
  "Bio bem construída: 'Melhores de 2023', 'Pizza artesanal com sabor de verdade', endereço, link",
  'Destaques organizados: Delivery, Bastidores, Momentos, Cardápio, Feedbacks',
  'Conteúdo diversificado: produto + pessoas + humor + bastidores (não só arte de promoção)',
  '11 anúncios ativos no Instagram e Facebook — volume excepcional para o porte',
];

const ruins = [
  'Segundo perfil ativo (@recantodapizzaoficial com 2K seguidores) — fragmenta audiência e confunde o cliente',
  'Link na bio aponta para Linktree/app — não para um site com cardápio otimizado',
  "Sem destaque de 'Rodízio' — que é o carro-chefe (R$39 ter-qui) e merece destaque próprio",
];

const RecantoInstagram = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#2ECC71] mb-4"
        >
          01 — INSTAGRAM
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-3"
        >
          Instagram — @recantodapizza__
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl"
        >
          O ponto mais forte do marketing digital do Recanto
        </motion.p>

        {/* Explanatory block */}
        <motion.div
          {...fadeUp(0.3)}
          className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8"
        >
          <p className="font-lora italic text-base text-[#121212]">
            O Instagram é o canal nº1 de descoberta de restaurantes. É onde o cliente decide se vai ou não pedir. O Recanto usa o Instagram MELHOR que 90% das pizzarias que analiso.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            {...fadeUp(0.4)}
            className="bg-white border-t-4 border-[#2ECC71] p-6"
          >
            <p className="font-montserrat font-bold text-sm uppercase text-[#2ECC71] mb-4">
              O que está BOM
            </p>
            <div className="space-y-3">
              {bons.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <Check size={16} className="text-[#2ECC71] mt-1 shrink-0" />
                  <p className="font-lora text-base text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.5)}
            className="bg-white border-t-4 border-[#E74C3C] p-6"
          >
            <p className="font-montserrat font-bold text-sm uppercase text-[#E74C3C] mb-4">
              O que precisa de atenção
            </p>
            <div className="space-y-3">
              {ruins.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <X size={16} className="text-[#E74C3C] mt-1 shrink-0" />
                  <p className="font-lora text-base text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight block */}
        <motion.div
          {...fadeUp(0.6)}
          className="border-2 border-[#2ECC71] p-5 bg-[#2ECC71]/[0.05] mb-10"
        >
          <p className="font-montserrat font-bold text-base text-[#2ECC71]">
            O Instagram do Recanto é o mais profissional que vi entre pizzarias de bairro. Reels de verdade, bastidores reais, conteúdo que dá vontade de pedir. Esse é o padrão. Agora falta aplicar essa mesma energia no Google — onde 92% das avaliações estão sem resposta.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          {...fadeUp(0.7)}
          className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4"
        >
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RecantoInstagram;
