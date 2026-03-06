import { motion } from 'framer-motion';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

const paragraphs = [
  'Alcides,',
  '',
  'Este documento não é uma proposta comercial. É um presente.',
  '',
  'Nos últimos dias, eu fiz uma análise completa de como a Pizzaria Veneza aparece na internet. Olhei o Google, o Instagram, o site, e usei ferramentas profissionais que mostram dados que normalmente só agências grandes conseguem ver.',
  '',
  'Vou ser direto: o que encontrei me deixou impressionado nas duas direções.',
  '',
  'De um lado, a Pizzaria Veneza é um caso raro de sucesso. 34 anos no mesmo lugar. 1.771 avaliações no Google — a #1 de toda a região, com mais que o DOBRO da segunda colocada. Nota 4.5. Isso não se compra. Isso se constrói durante décadas.',
  '',
  'Do outro lado, encontrei coisas que estão custando clientes todos os dias sem que ninguém perceba. O Instagram está parado desde dezembro. O site é o mesmo desde 2008. 60 avaliações no Google estão sem resposta. E quando alguém pega o celular e digita \'pizzaria perto de mim\' — que acontece 50 mil vezes por mês em Salvador — a Veneza não aparece em nenhum anúncio.',
  '',
  'Este documento mostra tudo isso, explicado de um jeito simples. Sem compromisso, sem enrolação.',
  '',
  'Boa leitura.',
];

const SlideIntroducao = () => {
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

export default SlideIntroducao;
