import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { fadeUp } from '../../slides/animations';

const bons = [
  '25 anos de operação — tradição consolidada em Jundiaí',
  '1.106 avaliações no Google — #1 da região (143 a mais que o 2º)',
  'Nota ~4.6 — excelente, tendência estável',
  '~10.000 seguidores no Instagram com 629 publicações',
  'Instagram profissional: Reels, bastidores, humor, produto, diversidade de conteúdo',
  '11 anúncios no Instagram e Facebook ativos — volume excepcional',
  '100% dos anúncios em vídeo — formato de maior conversão',
  'Mix inteligente: WhatsApp (rodízio/reserva) + Anota AI (delivery)',
  'Rodízio R$39 como produto-âncora com apelo de preço',
  "Espaço recém-renovado ('Recanto de Cara Nova')",
  'Ficha do Google verificada, com logotipo, descrição e horário',
  'Perfil no iFood ativo',
];

const ruins = [
  'SEM SITE PRÓPRIO — link na ficha Google = Play Store (confuso e ineficaz)',
  'SEM ANÚNCIOS NO GOOGLE — impossível sem site; 12.000 buscas/mês desperdiçadas',
  '92% das avaliações SEM RESPOSTA — 46 de 50 ignoradas (CRÍTICO)',
  "ZERO postagens na ficha do Google — tratada como 'adormecida'",
  'ZERO fotos 360° — salão renovado que ninguém vê pelo celular',
  'Score 72/100 — RAZOÁVEL — para quem é #1, deveria ser BOM (80+)',
  'Abaixo da média do segmento (1.106 vs média 1.871)',
  'Marca não é buscada no Google — Monte Carlo é buscado 10.000x/mês pelo nome; Recanto: zero',
  'Foto proprietário no limite (90 dias — recomendado: menos de 90)',
  'Segundo perfil Instagram ativo (@recantodapizzaoficial) — fragmenta audiência',
  "Sem anúncio de 'lembrete' nos anúncios do Instagram/Facebook",
];

const RecantoDiagnostico = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#1B2A4A] mb-4">
          08 — VISÃO GERAL
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-10">
          Visão Geral — O que encontramos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#2ECC71]/[0.08] border-t-4 border-[#2ECC71] p-6"
          >
            <p className="font-montserrat font-bold text-sm uppercase text-[#2ECC71] mb-4">O que está BOM</p>
            <div className="space-y-2">
              {bons.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle size={16} className="text-[#2ECC71] mt-1 shrink-0" />
                  <p className="font-lora text-sm text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#E71D36]/[0.08] border-t-4 border-[#E71D36] p-6"
          >
            <p className="font-montserrat font-bold text-sm uppercase text-[#E71D36] mb-4">O que precisa de ATENÇÃO</p>
            <div className="space-y-2">
              {ruins.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <XCircle size={16} className="text-[#E71D36] mt-1 shrink-0" />
                  <p className="font-lora text-sm text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.5)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RecantoDiagnostico;
