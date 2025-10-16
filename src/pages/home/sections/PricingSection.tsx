import React from 'react';
import { Check, X, Star, Monitor, Settings, Palette } from 'lucide-react';

// Cor Primária do Design System
const PRIMARY_COLOR_HEX = '#0046AA';
const SECONDARY_HOVER_COLOR_HEX = '#0059D1'; 

// --------------------------------------------------------
// DADOS DE PLANOS
// --------------------------------------------------------
const marketingPlansData = [
    {
        name: 'Bronze',
        price: '599',
        description: 'Ideal para pequenos negócios que querem começar no digital.',
        features: [
            { text: '1 Post por semana', included: true },
            { text: 'Tráfego pago (Gestão)', included: true },
            { text: 'Edição de vídeo semanal', included: true },
            { text: 'Ações de Saque', included: false },
        ],
        featured: false,
        ctaText: 'Começar com Bronze',
    },
    {
        name: 'Prata',
        price: '899',
        description: 'Perfeito para empresas em crescimento. Mais posts e suporte.',
        features: [
            { text: '2 Posts por semana', included: true },
            { text: 'Tráfego pago (Gestão Otimizada)', included: true },
            { text: 'Edição de vídeo semanal', included: true },
            { text: 'Ações de Saque', included: true },
        ],
        featured: true, // DESTAQUE: Plano central para máxima conversão
        ctaText: 'COMEÇAR AGORA',
    },
    {
        name: 'Ouro',
        price: '1.999',
        description: 'Para empresas que querem dominar o mercado com produção de vídeo.',
        features: [
            { text: '5 Posts por semana', included: true },
            { text: 'Tráfego pago (Otimizado)', included: true },
            { text: 'VideoMaking (Criação e edição)', included: true },
            { text: 'Ações de Saque', included: true },
        ],
        featured: false,
        ctaText: 'Escolher Ouro',
    },
    {
        name: 'Diamante',
        price: 'Sob consulta',
        description: 'Solução personalizada para grandes empresas com requisitos complexos.',
        features: [
            { text: 'Estratégia Personalizada', included: true },
            { text: 'Comunicação e Prazos Dedicados', included: true },
            { text: 'Conteúdo Ilimitado', included: true },
            { text: 'Suporte Dedicado 24/7', included: true },
        ],
        featured: false,
        isContact: true,
        ctaText: 'Falar com um Consultor',
    },
];

const PricingCard = ({ plan }: { plan: typeof marketingPlansData[0] }) => {
    const highlightClasses = plan.featured
        ? `border-[${PRIMARY_COLOR_HEX}] shadow-2xl shadow-[${PRIMARY_COLOR_HEX}]/30 transform scale-[1.03] transition-all duration-300`
        : 'border-gray-200 hover:border-gray-400/50 hover:shadow-lg transition-all duration-300';

    const ctaClasses = plan.featured
        ? `bg-[${PRIMARY_COLOR_HEX}] text-white hover:bg-blue-900 shadow-lg`
        : plan.isContact
            ? `border-2 border-[${PRIMARY_COLOR_HEX}] text-[${PRIMARY_COLOR_HEX}] hover:bg-gray-200`
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

    return (
        <div className={`flex flex-col bg-white p-8 rounded-2xl border-2 relative ${highlightClasses}`}>

            {plan.featured && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[${PRIMARY_COLOR_HEX}] text-white text-sm font-bold py-1 px-4 rounded-full shadow-md flex items-center`}>
                    <Star className="w-4 h-4 mr-1 fill-current" /> MAIS VENDIDO
                </div>
            )}

            <h3 className={`text-xl md:text-2xl font-bold mb-2 ${plan.featured ? `text-[${PRIMARY_COLOR_HEX}]` : 'text-gray-900'}`}>
                {plan.name}
            </h3>

            <p className={`text-4xl font-black mb-1 ${plan.featured ? `text-[${PRIMARY_COLOR_HEX}]` : 'text-gray-900]'}`}>
                {plan.price.includes('consulta') ? plan.price : `R$ ${plan.price}`}
            </p>
            <p className="text-sm text-gray-500 mb-8 font-semibold">
                {plan.price.includes('consulta') ? '' : '/mês'}
            </p>

            <p className="text-base text-gray-600 mb-8 flex-grow">{plan.description}</p>

            <ul className="text-left space-y-3 mb-10 min-h-[160px]">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-base"> 
                        {feature.included ? (
                            <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                        ) : (
                            <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                        )}
                        <span>{feature.text}</span>
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-4 px-2 text-sm font-bold rounded-xl transition-colors ${ctaClasses} mt-auto cursor-pointer`}
                onClick={() => console.log(`CTA: ${plan.ctaText}`)}
            >
                {plan.ctaText}
            </button>
        </div>
    );
};

const projectServices = [
    {
        icon: Monitor,
        title: 'Desenvolvimento Web',
        description: 'Criação de sites e landing pages modernas, responsivas e com rastreamento de métricas.',
        cta: 'Solicitar Orçamento Web',
    },
    {
        icon: Settings,
        title: 'Automação com IA',
        description: 'Processos inteligentes que economizam tempo e aumentam a produtividade operacional da sua empresa.',
        cta: 'Agendar Consultoria de IA',
    },
    {
        icon: Palette,
        title: 'Design Gráfico & Branding',
        description: 'Identidade visual, logos e apresentações profissionais de alto impacto que representam sua marca.',
        cta: 'Ver Portfólio & Orçar',
    },
];

const ProjectServiceCard: React.FC<{ service: typeof projectServices[0] }> = ({ service }) => {
    return (
        <div className={`group bg-white border border-gray-200 border-t-4 border-t-4 border-t-[#0046AA] rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-300 transition-all duration-300 flex flex-col items-center text-center`}>
            <service.icon className={`w-10 h-10 text-[${PRIMARY_COLOR_HEX}] mb-4`} strokeWidth={2} />
            
            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3'>{service.title}</h3>
            
            <p className='text-base text-gray-600 leading-relaxed mb-6 flex-grow'>{service.description}</p>

            <span className="text-xl font-bold text-gray-900 mb-6">Preço: Sob Orçamento</span>

            <button
                className={`w-full py-3 bg-[${PRIMARY_COLOR_HEX}] text-white font-bold rounded-xl hover:bg-blue-900 transition-colors cursor-pointer`}
                onClick={() => console.log(`CTA: ${service.cta}`)}
            >
                {service.cta}
            </button>
        </div>
    );
};

export default function PricingSection() {
    return (
        <section className='font-montserrat py-20 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-8'>

                {/* Bloco 1: Marketing Digital (Planos Recorrentes) */}
                <div className="text-center mb-16">
                    <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
                        Marketing Digital: Comece a <span className={`text-[${PRIMARY_COLOR_HEX}]`}>Crescer</span>
                    </h2>
                    <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                        Escolha um de nossos planos mensais e transforme sua presença online.
                    </p>
                </div>

                {/* Cards de Preço */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-24">
                    {marketingPlansData.map((plan) => (
                        <PricingCard key={plan.name} plan={plan} />
                    ))}
                </div>

                {/* Bloco 2: Serviços por Projeto (Orçamento) */}
                <div className="text-center mb-16 pt-12 border-t border-gray-200">
                    <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
                        Projetos Web & Automação <span className={`text-[${PRIMARY_COLOR_HEX}]`}>Customizados</span>
                    </h2>
                    <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                        Soluções sob medida para o seu desafio. Receba um orçamento detalhado e sem compromisso.
                    </p>
                </div>

                {/* Cards de Serviço */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projectServices.map((service) => (
                        <ProjectServiceCard key={service.title} service={service} />
                    ))}
                </div>

            </div>
        </section>
    );
};
