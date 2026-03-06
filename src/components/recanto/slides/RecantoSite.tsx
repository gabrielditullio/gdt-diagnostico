import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { fadeUp } from '../../slides/animations';

const semSite = [
  'Link na ficha = Play Store (confuso)',
  'Impossível rodar anúncios no Google',
  'Invisível nas buscas orgânicas',
  'Sem cardápio indexável com preços',
  'Sem história da marca (25 anos!)',
  'Dependência total de iFood e Instagram',
];

const comSite = [
  'Link na ficha = site profissional do Recanto',
  "Anúncios no Google ativados: aparecer pra quem busca 'pizzaria'",
  "Aparece nas buscas orgânicas ('rodízio Jundiaí')",
  'Cardápio completo com fotos, preços e otimização',
  "História: 'Desde 2001, tradição e sabor em Jundiaí'",
  'Pedidos diretos (sem comissão de app)',
  "Rastreamento de anúncios para mostrar anúncios de 'lembrete'",
];

const consequencias = [
  'Impossível rodar anúncios no Google — o Google exige um site real como destino',
  'Sem presença nas buscas — o Google não consegue mostrar o Recanto nos resultados',
  "Sem cardápio indexável — quando alguém pesquisa 'rodízio de pizza Jundiaí', o Google não encontra o Recanto",
  'Dependência total de iFood (que cobra comissão) e Instagram (que muda algoritmo)',
];

const RecantoSite = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          04 — SITE PRÓPRIO
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          Site Próprio — A Grande Lacuna Estrutural
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          O Recanto da Pizza não tem um site. O link na ficha do Google é... a Play Store.
        </motion.p>

        <motion.div {...fadeUp(0.2)} className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8">
          <p className="font-lora italic text-base text-[#121212]">
            Um site é a única propriedade digital que é 100% SUA. Instagram e iFood podem mudar regras ou fechar. O site é onde você controla a narrativa, aparece nas buscas do Google e pode rodar anúncios.
          </p>
        </motion.div>

        {/* Central block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="bg-[#E71D36]/[0.08] border-[3px] border-[#E71D36] p-8 md:p-10 text-center mb-8"
        >
          <p className="font-montserrat font-black text-3xl md:text-[48px] text-[#E71D36] leading-tight mb-6">
            SEM SITE = SEM GOOGLE ADS
          </p>
          <p className="font-lora text-base text-[#121212] max-w-3xl mx-auto mb-4">
            Hoje, o único 'site' vinculado à ficha do Recanto no Google é um link para baixar o aplicativo na Play Store. Isso NÃO é um site. É como se, na ficha de uma pizzaria, o endereço apontasse para uma loja de eletrônicos.
          </p>
          <p className="font-montserrat font-semibold text-[15px] text-[#121212] mb-3">O que isso significa:</p>
          <div className="text-left max-w-2xl mx-auto space-y-2">
            {consequencias.map((c, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-[#E71D36] shrink-0 mt-0.5">→</span>
                <p className="font-lora text-sm text-[#121212]">{c}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#E74C3C]/[0.08] border-t-4 border-[#E74C3C] p-6"
          >
            <p className="font-montserrat font-bold text-lg text-[#E74C3C] mb-4">HOJE (SEM SITE)</p>
            <p className="font-montserrat font-bold text-base text-[#E74C3C] mb-3">Sem site</p>
            <div className="space-y-2">
              {semSite.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <X size={16} className="text-[#E74C3C] mt-1 shrink-0" />
                  <p className="font-lora text-sm text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#2ECC71]/[0.08] border-t-4 border-[#2ECC71] p-6"
          >
            <p className="font-montserrat font-bold text-lg text-[#2ECC71] mb-4">COM SITE</p>
            <p className="font-montserrat font-bold text-base text-[#2ECC71] mb-3">Com site profissional</p>
            <div className="space-y-2">
              {comSite.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <Check size={16} className="text-[#2ECC71] mt-1 shrink-0" />
                  <p className="font-lora text-sm text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight */}
        <motion.div {...fadeUp(0.7)} className="border-2 border-[#E71D36] p-5 bg-[#E71D36]/[0.05] mb-10">
          <p className="font-montserrat font-bold text-base text-[#E71D36]">
            O Recanto investe em 11 anúncios no Instagram e Facebook. Mas sem site, é impossível investir 1 centavo no Google — onde 12 mil pessoas por mês pesquisam 'pizzaria' em Jundiaí. É como montar um time de futebol excelente mas só jogar em campo de futsal.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.8)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RecantoSite;
