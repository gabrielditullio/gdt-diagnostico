import { motion } from 'framer-motion';
import { fadeUp } from '../../slides/animations';

const paragraphs = [
  'Ricardo,',
  '',
  'Este documento não é uma proposta comercial. É um presente.',
  '',
  'Nos últimos dias, realizei uma análise independente da presença digital do Recanto da Pizza. Olhei a ficha do Google, o Instagram, os anúncios no Meta, ferramentas especializadas e dados de busca — da mesma forma que faço para clientes que me pagam mensalmente.',
  '',
  'A primeira coisa que me chamou atenção: o Recanto está fazendo MUITO mais marketing digital que a grande maioria das pizzarias que analiso. 11 anúncios rodando no Meta Ads, Instagram ativo com Reels, 10 mil seguidores, conteúdo de verdade — não apenas \'comunicados de feriado\'. Isso é raro e merece reconhecimento.',
  '',
  'Mas encontrei um desequilíbrio importante. Enquanto o Instagram e o Meta Ads funcionam bem, a ficha do Google — que é onde a maioria das pessoas DECIDE pedir pizza — está com problemas sérios. 92% das avaliações sem resposta. Zero postagens. Zero fotos 360°. E o mais crítico: o Recanto não tem site próprio, o que significa que é impossível rodar anúncios no Google para as 12 mil buscas mensais por \'pizzaria\' em Jundiaí.',
  '',
  'Este diagnóstico mostra exatamente o que está forte, o que está fraco e onde estão as maiores oportunidades. Sem compromisso.',
  '',
  'Boa leitura.',
];

const RecantoIntroducao = () => {
  let paraIndex = 0;

  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-3xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#1B2A4A] mb-4"
        >
          ANTES DE TUDO
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-10"
        >
          Por que este documento existe?
        </motion.h2>

        <div className="border-l-2 border-[#1B2A4A] pl-6 md:pl-10">
          {paragraphs.map((p, i) => {
            if (p === '') return <div key={i} className="h-4" />;
            paraIndex++;
            return (
              <motion.p
                key={i}
                {...fadeUp(0.3 + paraIndex * 0.08)}
                className="font-lora text-base md:text-lg text-[#121212] leading-[1.8] mb-1"
              >
                {p}
              </motion.p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecantoIntroducao;
