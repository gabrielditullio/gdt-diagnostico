import { motion } from 'framer-motion';
import { fadeUp } from '../../slides/animations';

const cards = [
  {
    title: "Campanha '25 Anos de Tradição'",
    color: '#F5A623',
    bg: 'rgba(245,166,35,0.06)',
    lines: [
      { icon: '🎯', text: 'Público novo que não conhece o Recanto' },
      { icon: '📅', text: 'Contínua, fins de semana' },
      { icon: '📱', text: "Vídeo: 'Desde 2001, servindo a melhor pizza de Jundiaí'" },
      { icon: '💡', text: 'NENHUM concorrente tem 25 anos + 1.106 avaliações', muted: true },
    ],
    cta: "'Conheça o Recanto — reserve pelo WhatsApp'",
  },
  {
    title: "Campanha de 'Lembrete'",
    color: '#1B2A4A',
    bg: 'rgba(27,42,74,0.06)',
    lines: [
      { icon: '🎯', text: 'Quem interagiu com @recantodapizza__ e não pediu' },
      { icon: '📅', text: 'Contínua, 7 dias/semana' },
      { icon: '📱', text: "'Você quase pediu. Sua pizza está esperando.'" },
      { icon: '💡', text: 'Conversão de quem já conhece mas não comprou', muted: true },
    ],
    cta: 'Link direto pro Anota AI',
  },
  {
    title: "Campanha 'Rodízio em Família'",
    color: '#2ECC71',
    bg: 'rgba(46,204,113,0.06)',
    lines: [
      { icon: '🎯', text: 'Famílias 25-55 anos, raio 8km' },
      { icon: '📅', text: 'Segunda e terça, 14h-18h (antes do rodízio ter-qui)' },
      { icon: '📱', text: 'Vídeo com família no salão + crianças + pizza' },
      { icon: '💡', text: 'R$39/pessoa é imbatível — posicionar como PROGRAMA DE FAMÍLIA', muted: true },
    ],
    cta: 'WhatsApp para reservar mesa',
  },
  {
    title: 'Campanha no Google (requer site)',
    color: '#E71D36',
    bg: 'rgba(231,29,54,0.06)',
    lines: [
      { icon: '🎯', text: "Quem pesquisa 'pizzaria Jundiaí', 'rodízio pizza'" },
      { icon: '📅', text: 'Todos os dias, 15h-21h' },
      { icon: '📱', text: 'Anúncio de texto no topo do Google' },
      { icon: '💡', text: '12.000 buscas/mês capturadas', muted: true },
    ],
    cta: '⚠️ REQUER: criação de site profissional primeiro | R$15-25/dia',
  },
];

const RecantoOportunidades = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#2ECC71] mb-4">
          07 — OPORTUNIDADES
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-10">
          O que falta no mix de campanhas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.2 + i * 0.15)}
              className="p-5"
              style={{ background: card.bg, borderTop: `4px solid ${card.color}` }}
            >
              <p className="font-montserrat font-bold text-lg mb-3" style={{ color: card.color }}>
                {card.title}
              </p>
              <div className="space-y-2 mb-4">
                {card.lines.map((line, j) => (
                  <p key={j} className={`font-lora text-sm ${line.muted ? 'text-[#A9A9A9]' : 'text-[#121212]'}`}>
                    {line.icon} {line.text}
                  </p>
                ))}
              </div>
              <p className="font-montserrat font-semibold text-[13px]" style={{ color: card.color }}>
                🔑 {card.cta}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.8)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RecantoOportunidades;
