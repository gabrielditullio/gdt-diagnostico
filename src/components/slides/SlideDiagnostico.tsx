import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { fadeUp } from './animations';

const fortes = [
  '34 anos de operação — a mais antiga de Paripe',
  '1.771 avaliações no Google — #1 absoluta da região (3.5x a média)',
  'Nota 4.5 no Google — excelente',
  'Tendência estável (nota das últimas avaliações = nota geral)',
  'Score da ficha: 80/100 — BOM',
  '100% das avaliações com texto escrito',
  'Espaço físico enorme: 222 lugares entre salão + festas',
  'Delivery próprio (sem pagar comissão pra iFood)',
  'Cardápio amplo: 50+ sabores',
  'Site existente (mesmo desatualizado)',
  'Perfil verificado, logotipo, telefone, endereço, horário',
  '6 mil seguidores no Instagram',
  'WhatsApp ativo para pedidos',
];

const atencao = [
  'Instagram parado desde 30/dezembro/2025 — 2+ meses sem postar',
  '67% das avaliações SEM RESPOSTA — 60 clientes ignorados',
  'ZERO postagens na ficha do Google — vitrine digital fechada',
  '304 dias sem foto nova do proprietário na ficha',
  'ZERO fotos 360° — salão enorme que ninguém pode ver pelo celular',
  'ZERO anúncios — nem no Instagram, nem no Facebook, nem no Google',
  '60 mil buscas/mês por \'pizzaria\' em Salvador e a Veneza não aparece',
  'Site de 2008 — nunca atualizado, sem pedido online, sem cardápio com preços',
  'Acessibilidade do site: 48/100 — reprovado',
  'Erros técnicos no site — imagens quebradas, código antigo',
  'Concorrente @qdeliciaparipe com 8.576 seguidores (43% mais que a Veneza)',
];

const SlideDiagnostico = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#1B2A4A] mb-4">
          09 — VISÃO GERAL
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-8">
          Resumo — O que está forte e o que precisa de atenção
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Strong */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#2ECC71]/[0.08] border-t-4 border-[#2ECC71] p-6"
          >
            <p className="font-montserrat font-bold text-sm uppercase text-[#2ECC71] mb-4">O que está FORTE</p>
            <div className="space-y-2">
              {fortes.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <CheckCircle size={15} className="text-[#2ECC71] mt-0.5 shrink-0" />
                  <p className="font-lora text-sm text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Attention */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#E71D36]/[0.08] border-t-4 border-[#E71D36] p-6"
          >
            <p className="font-montserrat font-bold text-sm uppercase text-[#E71D36] mb-4">O que precisa de ATENÇÃO</p>
            <div className="space-y-2">
              {atencao.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <XCircle size={15} className="text-[#E71D36] mt-0.5 shrink-0" />
                  <p className="font-lora text-sm text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.6)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideDiagnostico;
