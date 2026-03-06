import { motion } from 'framer-motion';
import { fadeUp } from './animations';

const problems = [
  {
    title: 'ZERO postagens na ficha',
    what: 'Sabe aqueles \'posts\' que algumas empresas publicam direto no Google? Tipo \'Promoção de terça: pizza grande + refrigerante\'? Isso se chama postagem na ficha. A Veneza nunca fez NENHUMA.',
    why: 'Quando você publica algo na ficha, o Google entende que o negócio está ativo. Sem postagem, o Google trata como se fosse um lugar que pode ter fechado — e mostra os concorrentes na frente.',
    fix: 'Abrir o app Google Meu Negócio e publicar 1 post por semana (foto de pizza + promoção). Leva 5 minutos.',
  },
  {
    title: '304 dias sem foto nova do dono',
    what: 'A última foto que o proprietário publicou na ficha foi há 10 meses. O Google recomenda publicar fotos novas no máximo a cada 6 meses.',
    why: 'Fotos novas mostram que o restaurante está vivo, funcionando, com comida fresca. Fotos antigas passam a impressão de abandono — como um cardápio empoeirado na porta.',
    fix: 'Tirar fotos boas do salão, das pizzas sendo preparadas, da equipe sorrindo, e publicar na ficha. Pode usar as mesmas fotos do Instagram.',
  },
  {
    title: 'ZERO fotos em 360°',
    what: 'Fotos 360° são aquelas onde o cliente pode \'entrar\' virtualmente no restaurante pelo celular, como se estivesse lá dentro, olhando pra todos os lados.',
    why: 'A Veneza tem um salão enorme (130 lugares!) e um salão de festas com 92 lugares. Isso é um DIFERENCIAL absurdo. Mas quem pesquisa no Google não sabe disso porque não consegue ver o espaço.',
    fix: 'Contratar um fotógrafo certificado do Google (R$300-800). Investimento que dura anos.',
  },
  {
    title: '60 avaliações SEM RESPOSTA (67% ignoradas)',
    what: 'Das últimas 90 avaliações que clientes deixaram no Google, a Veneza respondeu apenas 30. As outras 60 estão sem nenhuma resposta.',
    why: 'Imagine que 60 clientes viessem até o balcão dizer \'adorei a pizza\' ou \'tive um problema\' e o atendente virasse as costas sem dizer nada. É exatamente isso que está acontecendo no Google.',
    fix: 'Separar 30 minutos por semana pra responder TODAS. Custo: R$0.',
  },
];

const SlideProblemasFicha = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          03 — OS 4 PROBLEMAS
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#E71D36] mb-3">
          Os 4 itens que tiraram ZERO na sua ficha
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          São esses 4 problemas que impedem a Veneza de ter nota máxima — e todos são fáceis de resolver
        </motion.p>

        <div className="space-y-6 mb-10">
          {problems.map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.3 + i * 0.15)}
              className="bg-white border-l-4 border-[#E74C3C] p-5 md:p-6"
            >
              <h3 className="font-montserrat font-bold text-lg text-[#E74C3C] mb-3">{card.title}</h3>
              <p className="font-lora text-sm text-[#121212] leading-relaxed mb-2">
                <span className="font-montserrat font-bold text-xs uppercase text-[#A9A9A9] mr-2">O que é:</span>
                {card.what}
              </p>
              <p className="font-lora text-sm text-[#121212] leading-relaxed mb-2">
                <span className="font-montserrat font-bold text-xs uppercase text-[#A9A9A9] mr-2">Por que importa:</span>
                {card.why}
              </p>
              <p className="font-lora italic text-[13px] text-[#2ECC71] leading-relaxed">
                <span className="font-montserrat font-bold text-xs uppercase mr-2">Como resolver:</span>
                {card.fix}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div {...fadeUp(0.9)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideProblemasFicha;
