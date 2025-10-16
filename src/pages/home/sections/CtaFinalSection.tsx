import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Mantendo a dependência de ícones que você já usa (react-icons/fa)
import Footer from './Footer';
// import Button from './caminho/para/Button'; // Assumindo que você tem um componente Button

const PRIMARY_COLOR_HEX = '#0046AA';
const SECONDARY_HOVER_COLOR_HEX = '#0059D1'; 

// Componente simples para a CTA final
// Se você não tiver um componente Button exportado, adapte o Button para o JSX abaixo
const FinalButton = ({ text }: { text: string }) => (
    <button
        className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg bg-gradient-to-r from-[#0046AA] to-[#0059D1] text-white font-bold hover:from-[#0059D1] hover:to-[#006FE8] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0046AA]/30 cursor-pointer`}
        onClick={() => console.log('CTA Final: Quero Começar!')}
    >
        {text}
        <FaArrowRight className="w-5 h-5 ml-2" />
    </button>
);


export default function CTA_FinalSection() {
    return (
        <section className="bg-[#0D1117] pt-16 px-8">
            <div className="max-w-4xl mx-auto mb-16 px-8 text-center flex flex-col gap-3 items-center group bg-white/[0.03] border-[#0046AA]/30 rounded-xl p-8 md:p-10 hover:shadow-2xl hover:shadow-[#0046AA]/20 transition-all duration-300">
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Pronto para <span className={`text-[${PRIMARY_COLOR_HEX}]`}>Impulsionar</span> o Seu Negócio?
                </h2>
                
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Não perca mais tempo com estratégias que não funcionam. Fale com um de nossos especialistas e comece a transformar seus resultados hoje mesmo.
                </p>
                
                <FinalButton text="Quero Falar com um Especialista" />

            </div>

            <Footer />
        </section>
    );
}
