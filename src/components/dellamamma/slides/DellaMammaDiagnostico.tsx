import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { fadeUp } from '../../slides/animations';

const fortes = [
  '31 anos de operação — desde 1995',
  '1.746 avaliações no Google — #1 ABSOLUTA de VdC (2x a 2ª colocada)',
  '6x a média do segmento (1.746 vs 290)',
  'Tendência estável (nota 3.9 mantida)',
  '100% das avaliações com texto escrito',
  'Última avaliação: HOJE — negócio ativo',
  '6.471 seguidores no Instagram — base existente',
  'Delivery ativo em iFood, TheLivery e WhatsApp',
  'Grupo empresarial: Caminho da Roça ao lado (almoço+jantar)',
  'Cardápio extenso: 41 sabores salgados + 6 doces',
  'Massa fina e crocante como marca registrada',
];

const fracos = [
  'Instagram PARADO desde setembro 2022 — 3 anos e meio sem publicar',
  'Perfil do Google NÃO VERIFICADO — qualquer pessoa pode alterar dados da ficha',
  'SEM logotipo na ficha do Google',
  'SEM descrição na ficha (espaço 100% vazio)',
  'SEM foto do proprietário na ficha — NUNCA publicou nenhuma',
  'ZERO postagens na ficha do Google',
  'ZERO fotos 360°',
  '0 de 90 avaliações respondidas — taxa de resposta: ZERO POR CENTO',
  'SEM site próprio — link na ficha é TheLivery (terceirizado)',
  'ZERO anúncios — nem Instagram, nem Facebook, nem Google — nada',
  "5.850 buscas/mês por 'pizzaria' em VdC sem ver a Della Mamma",
  'Score 65/100 — o mais baixo que já registrei para uma #1',
  'Só 1 rede social conectada na ficha (Instagram)',
];

const DellaMammaDiagnostico = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#1B2A4A] mb-4">
          06 — VISÃO GERAL
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#121212] mb-10">
          Visão Geral — O que encontramos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div {...fadeUp(0.3)} className="bg-[#2ECC71]/[0.08] border-t-4 border-[#2ECC71] p-6">
            <p className="font-montserrat font-bold text-sm uppercase text-[#2ECC71] mb-4">O que está FORTE</p>
            <div className="space-y-3">
              {fortes.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle size={16} className="text-[#2ECC71] mt-1 shrink-0" />
                  <p className="font-lora text-sm text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="bg-[#E71D36]/[0.08] border-t-4 border-[#E71D36] p-6">
            <p className="font-montserrat font-bold text-sm uppercase text-[#E71D36] mb-4">O que precisa de ATENÇÃO</p>
            <div className="space-y-3">
              {fracos.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <XCircle size={16} className="text-[#E71D36] mt-1 shrink-0" />
                  <p className="font-lora text-sm text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.7)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default DellaMammaDiagnostico;
