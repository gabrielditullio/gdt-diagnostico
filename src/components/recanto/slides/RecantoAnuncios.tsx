import { motion } from 'framer-motion';
import { Check, AlertTriangle } from 'lucide-react';
import { fadeUp } from '../../slides/animations';

const anuncios = [
  { n: '1', foco: 'Pizza grande a partir de R$58', inicio: '5 fev', destino: 'pedido.anota.ai', formato: 'Vídeo 17s' },
  { n: '2', foco: "'Fome que chega do nada' + promoção", inicio: '5 fev', destino: '[link pedido]', formato: 'Vídeo 25s (2 versões)' },
  { n: '3', foco: 'Rodízio R$39 (ter-qui)', inicio: '5 fev', destino: 'WhatsApp', formato: 'Vídeo 22s' },
  { n: '4', foco: "'Pizza não é só comida, é experiência'", inicio: '5 fev', destino: 'pedido.anota.ai', formato: 'Vídeo 15s' },
  { n: '5', foco: 'Delivery + salão (várias versões)', inicio: '5 fev', destino: 'pedido.anota.ai', formato: 'Vídeo 22s' },
  { n: '6', foco: "'Cara nova' — espaço renovado", inicio: '5 fev', destino: '[sem link]', formato: 'Vídeo 14s' },
  { n: '7', foco: 'Reserva mesa via WhatsApp', inicio: '5 fev', destino: 'WhatsApp', formato: 'Vídeo 23s' },
  { n: '8', foco: "'Pizzas acabaram de sair do forno'", inicio: '26 fev', destino: '[link pedido]', formato: 'Vídeo 21s (2 versões)' },
  { n: '9', foco: 'Frango + Cheddar + Catupiry', inicio: '5 fev', destino: 'pedido.anota.ai', formato: 'Vídeo 22s' },
];

const bons = [
  '11 anúncios simultâneos — volume excelente, muito acima da média',
  '100% em vídeo — formato com maior engajamento',
  "Copy emocional e direta — 'fome que chega do nada', 'experiência', 'banquete de respeito'",
  'Mix de destinos — WhatsApp (reservas rodízio) + Anota AI (delivery) — inteligente',
  "Urgência e escassez — 'enquanto ainda tem vaga', 'SOMENTE HOJE'",
  'Rodízio como âncora — R$39 é um preço-chamariz poderoso',
  "Espaço renovado como criativo — 'Recanto de cara nova' gera curiosidade",
];

const melhorias = [
  'Todos os anúncios iniciaram no mesmo dia (5 fev) — sem testes escalonados ao longo do tempo',
  'Sem direcionamento visível por região — ideal seria focar em 5-8km do Jd. das Tulipas',
  "Sem anúncio de 'lembrete' — quem interagiu e não pediu não vê o Recanto aparecer de novo",
  "Destino 'pedido.anota.ai' sem página própria — o cliente cai direto no cardápio sem ver a história, o ambiente, o diferencial",
  'Sem anúncio focado em EVENTOS/FESTAS — o Recanto tem 25 anos e provavelmente faz eventos; não está comunicando isso',
];

const RecantoAnuncios = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#2ECC71] mb-4">
          06 — ANÚNCIOS INSTAGRAM/FACEBOOK
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          Anúncios no Instagram e Facebook — 11 Ativos
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          O Recanto está fazendo mais marketing digital que 95% das pizzarias de Jundiaí
        </motion.p>

        {/* Mapping block */}
        <motion.div {...fadeUp(0.2)} className="bg-white border border-[#A9A9A9] p-6 mb-8">
          <div className="w-full h-[100px] border-2 border-dashed border-[#A9A9A9] flex items-center justify-center mb-6">
            <span className="font-montserrat text-sm text-[#A9A9A9]">SCREENSHOT — Biblioteca de Anúncios (11 anúncios ativos)</span>
          </div>

          <p className="font-montserrat font-bold text-base text-[#1B2A4A] mb-4">Mapeamento dos 11 anúncios</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1B2A4A]">
                  <th className="font-montserrat font-bold text-xs text-[#1B2A4A] p-2">#</th>
                  <th className="font-montserrat font-bold text-xs text-[#1B2A4A] p-2">Foco</th>
                  <th className="font-montserrat font-bold text-xs text-[#1B2A4A] p-2">Início</th>
                  <th className="font-montserrat font-bold text-xs text-[#1B2A4A] p-2">Destino</th>
                  <th className="font-montserrat font-bold text-xs text-[#1B2A4A] p-2">Formato</th>
                </tr>
              </thead>
              <tbody>
                {anuncios.map((a, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                    className={i % 2 === 0 ? 'bg-[#F2F2F2]' : 'bg-white'}
                  >
                    <td className="font-lora text-[13px] text-[#121212] p-2">{a.n}</td>
                    <td className="font-lora text-[13px] text-[#121212] p-2">{a.foco}</td>
                    <td className="font-lora text-[13px] text-[#121212] p-2">{a.inicio}</td>
                    <td className="font-lora text-[13px] text-[#121212] p-2">{a.destino}</td>
                    <td className="font-lora text-[13px] text-[#121212] p-2">{a.formato}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Positive block */}
        <motion.div {...fadeUp(0.5)} className="bg-[#2ECC71]/[0.08] border-t-4 border-[#2ECC71] p-6 mb-6">
          <p className="font-montserrat font-bold text-sm uppercase text-[#2ECC71] mb-4">O que está BOM</p>
          <div className="space-y-2">
            {bons.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <Check size={16} className="text-[#2ECC71] mt-1 shrink-0" />
                <p className="font-lora text-sm text-[#121212]">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Improvements block */}
        <motion.div {...fadeUp(0.6)} className="bg-[#F5A623]/[0.08] border-t-4 border-[#F5A623] p-6 mb-8">
          <p className="font-montserrat font-bold text-sm uppercase text-[#F5A623] mb-4">O que pode melhorar</p>
          <div className="space-y-2">
            {melhorias.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <AlertTriangle size={16} className="text-[#F5A623] mt-1 shrink-0" />
                <p className="font-lora text-sm text-[#121212]">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlight */}
        <motion.div {...fadeUp(0.7)} className="border-2 border-[#2ECC71] p-5 bg-[#2ECC71]/[0.05] mb-10">
          <p className="font-montserrat font-bold text-base text-[#2ECC71]">
            11 anúncios em vídeo, copy emocional, WhatsApp + Anota AI como destinos. O Recanto está jogando o jogo dos anúncios no Instagram melhor que muita pizzaria com agência. Agora falta aplicar essa mesma energia no Google — que é onde a pessoa JÁ DECIDIU pedir pizza.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.75)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RecantoAnuncios;
