import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { fadeUp } from '../../slides/animations';

const bons = [
  '6.471 seguidores — uma base construída ao longo de anos',
  "Bio com informações úteis: 'Desde 1995', telefones, endereço, link para pedidos",
  'Destaques organizados: Cardápio, Contato, Expediente, Localização',
  '175 publicações — há conteúdo histórico',
];

const ruins = [
  'ÚLTIMA PUBLICAÇÃO: 26 DE SETEMBRO DE 2022 — são 3 anos e 6 meses sem postar NADA',
  "Maioria dos posts são artes genéricas — 'Feliz Páscoa', 'Feliz Ano Novo' — não são posts que mostram a pizza, o salão, a equipe",
  'ZERO vídeos curtos (Reels) — que é o formato que mais alcança pessoas novas hoje',
  'ZERO anúncios pagos no Instagram — os posts (quando existiam) só apareciam pra uma fração dos seguidores',
  'Link na bio: bit.ly — funcional, mas não é um site próprio',
];

const DellaMammaInstagram = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4"
        >
          01 — INSTAGRAM
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-3"
        >
          Instagram — @dellamammapizzaria
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl"
        >
          Última publicação: 26 de setembro de 2022. Três anos e meio de silêncio.
        </motion.p>

        {/* Explanatory block */}
        <motion.div
          {...fadeUp(0.3)}
          className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8"
        >
          <p className="font-lora italic text-base text-[#121212]">
            O Instagram é como uma vitrine na rua mais movimentada da cidade. Quando alguém quer conhecer um restaurante, a primeira coisa que faz é abrir o Instagram. Se o perfil está parado há anos, a pessoa pensa 'será que fechou?' e procura outra opção.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            {...fadeUp(0.4)}
            className="bg-white border-t-4 border-[#2ECC71] p-6"
          >
            <p className="font-montserrat font-bold text-sm uppercase text-[#2ECC71] mb-4">
              O que ainda existe
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
              O que está CRÍTICO
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
          className="border-2 border-[#E71D36] p-5 bg-[#E71D36]/[0.05] mb-10"
        >
          <p className="font-montserrat font-bold text-base text-[#E71D36]">
            Imagine uma loja que fechou as portas há 3 anos e meio mas o dono esqueceu de trancar. As pessoas passam, veem a vitrine empoeirada e pensam: 'fechou'. É isso que acontece quando o Instagram fica 3 anos sem postar. Os 6.471 seguidores estão lá — mas ninguém sabe se a Della Mamma ainda existe.
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

export default DellaMammaInstagram;
