import { motion } from 'framer-motion';
import { fadeUp } from './animations';

const cards = [
  {
    title: "Anúncio 'Pizza Delivery'",
    color: '#2ECC71',
    bg: 'rgba(46,204,113,0.06)',
    lines: [
      '🎯 Para quem: Pessoas num raio de 5km de Paripe',
      '📅 Quando: Todos os dias, 16h-21h (antes e durante operação)',
      '📱 Formato: Foto da pizza + botão \'Peça pelo WhatsApp\'',
    ],
    quote: 'Pizza de camarão, nota 4.5 no Google, delivery pra Paripe e região.',
    price: 'R$10-15/dia',
  },
  {
    title: "Anúncio 'Salão de Festas'",
    color: '#1B2A4A',
    bg: 'rgba(27,42,74,0.06)',
    lines: [
      '🎯 Para quem: Pessoas de 25-55 anos em Paripe e subúrbio',
      '📅 Quando: Segunda a sexta, 10h-17h (quem planeja festa)',
      '📱 Formato: Fotos do salão montado + vídeo curto',
    ],
    quote: 'Sua festa de aniversário na pizzaria mais famosa de Paripe. Salão pra 92 pessoas.',
    price: 'R$8-12/dia',
  },
  {
    title: "Anúncio 'Happy Hour / Promoção'",
    color: '#F5A623',
    bg: 'rgba(245,166,35,0.06)',
    lines: [
      '🎯 Para quem: Seguidores + pessoas parecidas com seguidores',
      '📅 Quando: Terça a quinta, 14h-17h',
      '📱 Formato: Arte da promoção + vídeo de pizza saindo do forno',
    ],
    quote: 'Pizza em Dobro nas terças! Leve 2, pague 1. Só na Pizzaria Veneza — Paripe.',
    price: 'R$5-10/dia (só nos dias de promoção)',
  },
  {
    title: "Anúncio 'A Mais Antiga de Paripe'",
    color: '#C0001F',
    bg: 'rgba(192,0,31,0.06)',
    lines: [
      '🎯 Para quem: NOVOS públicos que não conhecem a Veneza',
      '📅 Quando: Fins de semana, 12h-20h',
      '📱 Formato: Vídeo de 15 segundos contando a história (desde 1990)',
    ],
    quote: '34 anos. 1.771 avaliações. Nota 4.5. A pizzaria mais antiga e mais amada de Paripe.',
    price: 'R$10-15/dia',
  },
];

const SlideExemplosAnuncios = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#2ECC71] mb-4">
          07 — EXEMPLOS DE ANÚNCIOS
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          Exemplos do que a Veneza poderia anunciar
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          Cada um desses tipos de anúncio alcança um público diferente
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.2 + i * 0.15)}
              className="p-5"
              style={{ backgroundColor: card.bg, borderTop: `4px solid ${card.color}` }}
            >
              <h3 className="font-montserrat font-bold text-lg mb-3" style={{ color: card.color }}>
                {card.title}
              </h3>
              <div className="space-y-1 mb-3">
                {card.lines.map((line, j) => (
                  <p key={j} className="font-lora text-sm text-[#121212]">{line}</p>
                ))}
              </div>
              <p className="font-lora text-[13px] text-[#A9A9A9] italic mb-3">💬 '{card.quote}'</p>
              <p className="font-montserrat font-semibold text-[13px]" style={{ color: card.color }}>
                💰 {card.price}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(0.9)} className="font-lora italic text-xs text-[#A9A9A9] mb-10 max-w-3xl">
          Com R$300-600/mês divididos entre esses anúncios, a Veneza alcançaria milhares de pessoas novas toda semana — sem precisar contratar agência, sem complicação. Os próprios donos podem criar esses anúncios pelo celular em menos de 10 minutos cada.
        </motion.p>

        <motion.div {...fadeUp(1.0)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideExemplosAnuncios;
