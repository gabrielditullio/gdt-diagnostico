import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUp } from './animations';

const problemas = [
  'O site parece um site dos anos 2000 — layout antigo, cores da época, tecnologia ultrapassada',
  'Não funciona direito no celular — e hoje 80% das pessoas acessam pelo celular',
  'Tem links pra redes sociais que não existem mais',
  'O rodapé diz \'2008 © Pizzaria Veneza ltda\' — faz 18 anos',
  'Tem erros técnicos que o Google encontra e penaliza (imagens quebradas, código antigo)',
  'O teste de acessibilidade (se pessoas com deficiência conseguem usar) tirou nota 48 de 100 — reprovado',
];

const positivos = [
  'O site EXISTE — isso já é melhor que muitas pizzarias que nem site têm',
  'Ele carrega rápido no computador — nota 100 de 100 (porque é simples e leve)',
  'No celular, a velocidade é OK — nota 86 de 100 (aprovado pelo Google)',
  'O Google consegue encontrar o site sem problemas — nota 91 de 100',
];

const SlideSite = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm uppercase tracking-[0.1em] text-[#E74C3C] mb-4">
          04 — O SITE
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-[#1B2A4A] mb-3">
          O Site — pizzariaveneza.net
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-lora italic text-base text-[#A9A9A9] mb-8 max-w-3xl">
          O site da Veneza é de 2008. Isso foi há 18 anos.
        </motion.p>

        {/* Explanatory block */}
        <motion.div {...fadeUp(0.2)} className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] p-5 mb-8">
          <p className="font-lora italic text-base text-[#121212] leading-relaxed">
            O site é o 'endereço oficial' da Veneza na internet. Quando alguém pesquisa 'Pizzaria Veneza' no Google, o site é o que aparece. É como se fosse a fachada do restaurante no mundo digital. Se a fachada está velha e descascando, o cliente fica com medo de entrar.
          </p>
        </motion.div>

        {/* Central block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#E71D36]/[0.08] border-[3px] border-[#E71D36] p-8 text-center mb-8"
        >
          <p className="font-montserrat font-black text-2xl md:text-4xl text-[#E71D36]">Site criado em 2008.</p>
          <p className="font-montserrat font-black text-2xl md:text-4xl text-[#E71D36]">Nunca foi atualizado.</p>

          <div className="mt-6 text-left max-w-2xl mx-auto">
            <p className="font-montserrat font-semibold text-[15px] text-[#121212] mb-3">O que isso significa na prática:</p>
            <div className="space-y-2">
              {problemas.map((item, i) => (
                <p key={i} className="font-lora text-sm text-[#121212] leading-relaxed">→ {item}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Positive block */}
        <motion.div {...fadeUp(0.5)} className="bg-[#2ECC71]/[0.08] border-t-4 border-[#2ECC71] p-6 mb-6">
          <p className="font-montserrat font-bold text-sm text-[#2ECC71] mb-4">Mas tem pontos positivos</p>
          <div className="space-y-3">
            {positivos.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <Check size={16} className="text-[#2ECC71] mt-1 shrink-0" />
                <p className="font-lora text-base text-[#121212]">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Real problem block */}
        <motion.div {...fadeUp(0.6)} className="bg-[#F5A623]/[0.08] border-l-4 border-[#F5A623] p-5 mb-6">
          <p className="font-lora text-[15px] text-[#121212] leading-relaxed">
            O site da Veneza é como uma placa de madeira na porta que diz 'Pizzaria Veneza — desde 1990'. Ela está lá, as pessoas veem, mas ela não vende nada. Não dá pra pedir pizza pelo site. Não tem cardápio atualizado com preços. Não tem botão de WhatsApp grande. Não tem fotos novas. Em 2026, um site precisa FAZER alguma coisa — não apenas existir.
          </p>
        </motion.div>

        {/* Highlight block */}
        <motion.div {...fadeUp(0.7)} className="border-2 border-[#E71D36] p-5 bg-[#E71D36]/[0.05] mb-10">
          <p className="font-montserrat font-bold text-base text-[#E71D36]">
            O site da Veneza tem a mesma idade de um adolescente que vai completar 18 anos. Nesse tempo, a internet mudou completamente — mas o site ficou parado. É como ter uma TV de tubo quando todo mundo já tem smart TV.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div {...fadeUp(0.8)} className="flex items-center justify-between border-t border-[#1B2A4A]/20 pt-4">
          <span className="font-montserrat font-black text-sm text-[#1B2A4A]">GDT</span>
          <span className="font-montserrat text-xs text-[#A9A9A9]">gabrielditullio.com.br</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideSite;
