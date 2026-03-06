import { motion } from 'framer-motion';
import { fadeUp } from '../../slides/animations';

const problems = [
  {
    title: 'ZERO postagens na ficha',
    desc: "A ficha não tem NENHUMA publicação. O Google recomenda pelo menos 1 a cada 30 dias. Sem postagem, o Google interpreta como negócio 'adormecido' — e mostra os concorrentes antes.",
    critical: false,
  },
  {
    title: 'ZERO fotos 360°',
    desc: "Nenhuma foto 360° do salão. O cliente não consegue 'entrar' no restaurante pelo celular. O Recanto tem um ambiente renovado ('de cara nova') — e ninguém vê isso pelo Google.",
    critical: false,
  },
  {
    title: 'Fora do Top 10 (paradoxo)',
    desc: 'Apesar de ser #1 em avaliações (1.106), a ferramenta marca como \'fora do Top 10\' — provavelmente porque os outros itens zerados derrubam o score geral e a visibilidade.',
    critical: false,
  },
  {
    title: 'Abaixo da média do segmento',
    desc: 'A média de avaliações do segmento na região é 1.871. O Recanto tem 1.106 — está abaixo. O ritmo de novas avaliações precisa acelerar para acompanhar os concorrentes.',
    critical: false,
  },
  {
    title: '92% das avaliações SEM RESPOSTA — CRÍTICO',
    desc: 'Das últimas 50 avaliações, o Recanto respondeu apenas 4. As outras 46 estão sem nenhuma resposta. Isso é o equivalente a 46 clientes virem no balcão elogiar ou reclamar — e ninguém dizer nada. O Google penaliza MUITO isso.',
    critical: true,
  },
];

const RecantoProblemasFicha = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-4xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4"
        >
          03 — OS 5 PROBLEMAS
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-montserrat font-bold text-2xl md:text-4xl text-[#E71D36] mb-3"
        >
          Os 5 itens que tiraram ZERO na ficha do Google
        </motion.h2>

        <motion.p
          {...fadeUp(0.15)}
          className="font-lora italic text-base text-[#A9A9A9] mb-10 max-w-3xl"
        >
          São esses 5 problemas que impedem o Recanto de ter nota máxima
        </motion.p>

        {/* 5 cards */}
        <div className="space-y-4 mb-10">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.25 + i * 0.15)}
              className={`p-5 ${
                p.critical
                  ? 'bg-[#E71D36]/[0.05] border-l-4 border-[#E71D36]'
                  : 'bg-white border-l-4 border-[#E74C3C]'
              }`}
            >
              <p className={`font-montserrat font-bold text-lg mb-2 ${p.critical ? 'text-[#E71D36]' : 'text-[#E74C3C]'}`}>
                {p.title}
              </p>
              <p className="font-lora text-sm text-[#121212] leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight block */}
        <motion.div
          {...fadeUp(1.0)}
          className="border-2 border-[#E71D36] p-5 bg-[#E71D36]/[0.05] mb-10"
        >
          <p className="font-montserrat font-bold text-base text-[#E71D36]">
            O Instagram tem 11 anúncios rodando, Reels profissionais, 10 mil seguidores. Mas a ficha do Google — que é onde 70% das pessoas DECIDEM se vão ou não pedir — tem 92% das avaliações ignoradas e zero postagens. É como ter uma fachada linda e a cozinha suja.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          {...fadeUp(1.1)}
          className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4"
        >
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RecantoProblemasFicha;
