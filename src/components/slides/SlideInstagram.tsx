import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { fadeUp } from './animations';

const bons = [
  'Quase 6 mil seguidores — uma base de fãs construída ao longo dos anos',
  'Promoções interessantes: Happy Hour, Pizza em Dobro, Cashback 10%, Desconto Dia da Pizza',
  'Presença de marca: logo, nome, endereço e WhatsApp na bio',
  'Destaques organizados: \'Clientes\' e \'Dia da Pizza\'',
];

const ruins = [
  'Última publicação: 30 de dezembro de 2025 — mais de 2 MESES sem postar nada',
  'Apenas 77 publicações em todo o perfil — pra 34 anos de história, é muito pouco',
  'Maioria dos posts são \'comunicados\' (fechado no feriado, recesso) — não são posts que dão vontade de pedir pizza',
  'Nenhum anúncio pago rodando no Instagram — o Instagram só mostra os posts pra menos de 5% dos seguidores',
  'Sem vídeos curtos (Reels) — que é o formato que mais alcança pessoas novas hoje',
  'Concorrente direto @qdeliciaparipe tem 8.576 seguidores — quase 50% a mais que a Veneza',
];

const SlideInstagram = () => {
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
          Instagram — @pizzariavenezaparipe
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl"
        >
          O Instagram é como uma vitrine na rua mais movimentada da cidade. Se a vitrine está fechada, as pessoas passam direto.
        </motion.p>

        {/* Explanatory block */}
        <motion.div
          {...fadeUp(0.3)}
          className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8"
        >
          <p className="font-lora italic text-base text-[#121212]">
            Quando alguém quer conhecer um restaurante novo, a primeira coisa que faz é abrir o Instagram e ver as fotos, os pratos, como é o lugar. Se o perfil está desatualizado, a pessoa pensa 'será que ainda funciona?' e vai procurar outro.
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
          className="border-2 border-[#E71D36] p-5 bg-[#E71D36]/[0.05] mb-10"
        >
          <p className="font-montserrat font-bold text-base text-[#E71D36]">
            Imagine que você tem uma loja na rua mais movimentada de Paripe, mas faz 2 meses que a porta está fechada e a luz apagada. As pessoas passam, olham e pensam: 'será que fechou?' É isso que acontece quando o Instagram fica 2 meses sem postar.
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

export default SlideInstagram;
