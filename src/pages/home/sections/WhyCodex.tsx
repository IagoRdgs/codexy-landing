import { Target, Zap, Users } from 'lucide-react';

export default function WhyCodexy() {
    const features = [
        {
            icon: Target,
            title: "Foco em Resultados",
            description: "Metas claras, KPIs definidos e entregas mensuráveis. Planejamento orientado a dados e acompanhamento contínuo."
        },
        {
            icon: Zap,
            title: "Tecnologia de Ponta",
            description: "Stack moderno e ferramentas líderes do mercado. Integrações seguras e arquiteturas escaláveis."
        },
        {
            icon: Users,
            title: "Time Especializado",
            description: "Profissionais certificados. Comunicação objetiva e prazos cumpridos."
        }
    ];

    return (
        <section className='bg-[#0D1117] py-16 px-8'>
            <div className='text-center mb-20'>
                <h2 className='text-white text-4xl md:text-5xl font-bold mb-4'>Por que escolher a <span className='bg-gradient-to-r from-[#0046AA] to-[#0059D1] bg-clip-text text-transparent'>Codexy</span>?</h2>
                <p className='text-gray-400 text-md md:text-lg max-w-3xl mx-auto'>Somos mais que uma empresa de tecnologia. Somos parceiros estratégicos do seu crescimento!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        Icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>

            <StatsBox />
        </section>
    );
};

type FeatureCardProps = {
    Icon: React.ElementType;
    title: string;
    description: string;
};

const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => {
    return (
        <div className='group bg-white/[0.03] border-[#0046AA]/30 rounded-xl p-8 md:p-10 hover:bg-[#0046AA]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0046AA]/20 transition-all duration-300 flex flex-col gap-6'>
            <div className='w-14 h-14 bg-gradient-to-br from-[#0046AA]/20 to-[#0059D1]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300'>
                <Icon className='w-7 h-7 text-[#0046AA]' strokeWidth={2} />
            </div>

            <div className='flex flex-col gap-3'>
                <h3 className='text-xl md:text-2xl font-bold text-white'>
                    {title}
                </h3>
                <p className='text-gray-400 leading-relaxed text-base'>
                    {description}
                </p>
            </div>
        </div>
    );
};

const StatsBox = () => {
    const stats = [
        { number: '10+', label: 'Projetos entregues' },
        { number: '100%', label: 'Clientes satisfeitos' },
        { number: '24/7', label: 'Suporte disponível' }
    ];

    return (
        <div className='bg-gradient-to-br from-gray-900/80 via-[#0046AA]/5 to-gray-900/80 border border-[#0046AA]/35 rounded-2xl px-6 py-8 md:px-8 md:py-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#0046AA]/35 '>
                {stats.map((stat, index) => (
                    <div key={index} className='text-center group py-6 md:py-0'>
                        <h4 className='text-5xl font-black bg-gradient-to-r from-[#0046AA] to-[#0059D1] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300'>{stat.number}</h4>
                        <span className='text-gray-400 text-base md:text-lg font-medium'>{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
