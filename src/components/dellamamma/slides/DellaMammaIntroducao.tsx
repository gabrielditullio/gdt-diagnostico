import { motion } from 'framer-motion';
import { fadeUp } from '../../slides/animations';

const paragraphs = [
  'Miguel,',
  '',
  'Este documento não é uma proposta comercial. É um presente.',
  '',
  'Nos últimos dias, fiz uma análise completa de como a Casa Della Mamma aparece na internet. Usei as mesmas ferramentas profissionais que uso para clientes que me pagam mensalmente — e olhei tudo: Google, Instagram, anúncios, plataformas de avaliação.',
  '',
  'Vou ser direto com você: a Della Mamma é a pizzaria MAIS avaliada de toda Vitória da Conquista. São 1.746 avaliações no Google — seis vezes a média da região. Isso não se compra. São 31 anos de tradição que os clientes fizeram questão de registrar.',
  '',
  'Mas o que encontrei no digital me preocupou. O Instagram não publica nada desde setembro de 2022 — são quase 3 anos e meio parado. A ficha do Google não tem logo, não tem descrição, não está nem verificada. Zero anúncios em qualquer plataforma. E de 90 avaliações recentes, NENHUMA foi respondida. Zero.',
  '',
  'É como ter o restaurante mais famoso da cidade, mas com a porta trancada, a placa caída e o telefone fora do gancho. No mundo real, a Della Mamma está lotada toda noite. No digital, ela simplesmente não existe.',
  '',
  'Este documento mostra tudo isso de forma simples. Sem compromisso.',
  '',
  'Boa leitura.',
];

const DellaMammaIntroducao = () => {
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

export default DellaMammaIntroducao;
