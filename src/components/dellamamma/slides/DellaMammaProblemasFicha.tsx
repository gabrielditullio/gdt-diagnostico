import { motion } from 'framer-motion';
import { fadeUp } from '../../slides/animations';

const cards = [
  {
    titulo: 'PERFIL NÃO VERIFICADO — O MAIS GRAVE',
    tituloStyle: 'text-[#E71D36] text-lg',
    bgStyle: 'bg-[#E71D36]/[0.05] border-l-4 border-[#E71D36]',
    textos: [
      "O que é: 'Verificar' o perfil é como provar pro Google que VOCÊ é o dono da pizzaria. Enquanto não verificar, o Google não confia que as informações são reais — e pode mostrar dados errados, deixar qualquer pessoa editar sua ficha, e reduzir a visibilidade.",
      'Na prática: Qualquer pessoa pode sugerir mudanças na ficha da Della Mamma — mudar horário, mudar telefone, mudar endereço — e o Google pode aceitar SEM avisar o dono.',
    ],
    resolver: 'Como resolver: Entrar no Google Meu Negócio, clicar em \'Verificar\' e seguir o passo a passo. Leva 5-15 dias. Custo: R$0.',
  },
  {
    titulo: 'SEM LOGOTIPO',
    textos: ['A ficha não tem a imagem do logo da Della Mamma. O cliente vê um espaço vazio onde deveria ter a marca. É como um cartão de visita sem nome.'],
  },
  {
    titulo: 'SEM DESCRIÇÃO',
    textos: ["A ficha não tem NENHUM texto explicando o que é a Della Mamma. O espaço onde deveria dizer 'Desde 1995, a melhor pizza de Vitória da Conquista, massa fina e crocante, mais de 40 sabores...' está VAZIO."],
  },
  {
    titulo: 'ZERO postagens na ficha',
    textos: ["Nunca foi publicada nenhuma postagem. O Google interpreta como negócio 'adormecido'."],
  },
  {
    titulo: 'ZERO fotos do proprietário',
    textos: ['A ficha não tem NENHUMA foto publicada pelo dono. Todas são de clientes. Fotos do proprietário mostram que o negócio está ativo e geram mais confiança.'],
  },
  {
    titulo: 'ZERO fotos em 360°',
    textos: ["O cliente não consegue 'entrar' no restaurante pelo celular e ver como é o salão."],
  },
  {
    titulo: 'ZERO AVALIAÇÕES RESPONDIDAS (0 de 90!)',
    tituloStyle: 'text-[#E71D36] text-lg',
    bgStyle: 'bg-[#E71D36]/[0.05] border-l-4 border-[#E71D36]',
    textos: [
      'De 90 avaliações recentes, a Della Mamma respondeu ZERO. Nenhuma. Nem uma. Isso é o equivalente a 90 clientes virem até o balcão — alguns pra elogiar, outros pra reclamar — e o restaurante virar as costas pra TODOS. O Google penaliza MUITO isso.',
    ],
  },
];

const DellaMammaProblemasFicha = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-4xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          03 — OS 7 PROBLEMAS
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#E71D36] mb-3">
          Os 7 itens que tiraram ZERO na ficha do Google
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="font-lora italic text-base text-[#A9A9A9] mb-10 max-w-3xl">
          São 7 problemas graves — e TODOS são fáceis e baratos de resolver
        </motion.p>

        <div className="space-y-4 mb-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.3 + i * 0.15)}
              className={`p-5 ${card.bgStyle || 'bg-white border-l-4 border-[#E74C3C]'}`}
            >
              <p className={`font-montserrat font-bold mb-2 ${card.tituloStyle || 'text-base text-[#E74C3C]'}`}>
                {card.titulo}
              </p>
              {card.textos.map((t, j) => (
                <p key={j} className="font-lora text-sm text-[#121212] mb-2">{t}</p>
              ))}
              {card.resolver && (
                <p className="font-lora italic text-[13px] text-[#2ECC71]">{card.resolver}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Highlight block */}
        <motion.div {...fadeUp(1.5)} className="border-2 border-[#E71D36] p-5 bg-[#E71D36]/[0.05] mb-10">
          <p className="font-montserrat font-bold text-base text-[#E71D36]">
            A Della Mamma tem 1.746 avaliações — quase o dobro de QUALQUER concorrente. Mas a ficha não tem logo, não tem descrição, não está verificada e NENHUMA avaliação foi respondida. É como ser o restaurante mais famoso da cidade — mas com a fachada sem placa, sem pintura e sem porta.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div {...fadeUp(1.6)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default DellaMammaProblemasFicha;
