import { Megaphone, Settings, Palette, Monitor, Check } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: Megaphone,
            title: 'Marketing Digital',
            description: 'Estratégias completas de marketing digital para aumentar sua visibilidade online e gerar mais leads qualificados.',
            features: [
                'Google Ads e Facebook Ads',
                'SEO e Marketing de Conteúdo',
                'Email Marketing',
                'Analytics e Relatórios'
            ]
        },
        {
            icon: Settings,
            title: 'Automação',
            description: 'Automatize processos repetitivos e otimize a eficiência operacional da sua empresa.',
            features: [
                'Automação de Marketing',
                'Chatbots Inteligentes',
                'Integração de Sistemas',
                'Markflows Personalizados'
            ]
        },
        {
            icon: Palette,
            title: 'Design Gráfico',
            description: 'Criação de identidade visual marcante que comunica profissionalismo e confiança.',
            features: [
                'Logotipos e Identidade Visual',
                'Material Publicitário',
                'Design para Redes Sociais',
                'Branding Completo'
            ]
        },
        {
            icon: Monitor,
            title: 'Sites & Landing Pages',
            description: 'Desenvolvimento de websites modernos e landing pages otimizadas para conversão.',
            features: [
                'Sites Responsivos',
                'Landing Pages de Alto Desempenho',
                'Otimização para SEO',
                'Rastreamento de Métricas'
            ]
        }
    ];

    return (
        <section className='bg-white py-16 px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-20'>
                    <div className='inline-flex items-center gap-2 bg-[#0046AA]/10 border border-[#0046AA]/30 px-6 py2 rounded-full text-sm mb-6'>
                        <span className='bg-gradient-to-r from-[#0046AA] to-[#0059D1] bg-clip-text text-transparent font-semibold'>Nossos Serviços</span>
                    </div>

                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight'>
                        Nossos{' '}
                        <span className='bg-gradient-to-r from-[#0046AA] to-[#0059D1] bg-clip-text text-transparent'>Serviços</span>
                    </h2>
                    <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>Oferecemos soluções integradas que cobrem todas as necessidades digitais da sua empresa, desde o marketing até o desenvolvimento de sistemas.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {services.map((service, index) => (
                        <ServiceCard key={index}
                            Icon={service.icon}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

type ServiceProps = {
    Icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
};

const ServiceCard = ({ Icon, title, description, features }: ServiceProps) => {
    return (
        <div className='group bg-white border border-gray-200 border-t-4 border-t-[#0046AA] rounded-2xl p-8 hover:border-[#0046AA] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0046AA]/20 transition-all duration-300'>
            <div className='w-14 h-14 bg-[#0046AA]/15 rounded-xl grid place-items-center mb-6 group-hover:bg-[#0046AA]/25 group-hover:scale-110 transition-all duration-300'>
                <Icon className='w-7 h-7 text-[#0046AA]' strokeWidth={2} />
            </div>

            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3'>{title}</h3>
            <p className='text-gray-600 leading-relaxed mb-6 text-base'>{description}</p>

            <ul className='space-y-3'>
                {features.map((feature, index) => (
                    <li key={index} className='flex items-center justify-start gap-1.5 text-gray-600 text-sm'>
                        <Check size={20} className='text-[#0046AA] mt-1 flex shrink-0' />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};