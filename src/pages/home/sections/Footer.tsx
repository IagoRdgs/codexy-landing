import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const footerLinks = [
    {
        title: 'Serviços',
        links: [
            { name: 'Marketing Digital', href: '#marketing' },
            { name: 'Desenvolvimento Web', href: '#desenvolvimento' },
            { name: 'Automação com IA', href: '#automacao' },
            { name: 'Design Gráfico', href: '#design' },
        ],
    },
    {
        title: 'Empresa',
        links: [
            { name: 'Sobre Nós', href: '#sobre' },
            { name: 'Por que Codexy', href: '#porque' },
            { name: 'Depoimentos', href: '#depoimentos' },
            { name: 'Contato', href: '#contato' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { name: 'Política de Privacidade', href: '/politica-privacidade' },
            { name: 'Termos de Uso', href: '/termos-de-uso' },
        ],
    },
];

// Componente corrigido: Removeu Icon.displayName
const SocialIcon = ({ Icon, href, label }: { Icon: React.ElementType, href: string, label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className='p-3 rounded-full bg-gray-700 hover:bg-[#0046AA] transition-colors duration-300 cursor-pointer'
        aria-label={label}
    >
        <Icon className='w-5 h-5 text-white' />
    </a>
);


export default function Footer() {
    return (
        // Fundo escuro consistente com WhyCodexySection e CTA_FinalSection
        <footer className='bg-[#0D1117] font-montserrat py-8 px-8 text-gray-400'>
            <div className='max-w-7xl mx-auto'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5}} className='grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10 mb-10'>

                    {/* Bloco 1: Informações de Contato e Logo */}
                    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5}} className='col-span-2 md:col-span-2 flex flex-col gap-6'>

                        <div className="h-10 w-auto mb-4 text-3xl font-black text-white">CODEXY</div>

                        <p className='text-base leading-relaxed max-w-sm'>
                            Tecnologia que impulsiona seu progresso. Soluções digitais completas para o seu crescimento.
                        </p>

                        <div className='space-y-3 mt-4'>
                            <div className='flex items-center gap-3 text-base'>
                                <Mail className='w-5 h-5 text-[#0046AA]' />
                                <a href="mailto:contato@codexy.com.br" className='hover:text-white transition-colors'>contato@codexy.com.br</a>
                            </div>
                            <div className='flex items-center gap-3 text-base'>
                                <Phone className='w-5 h-5 text-[#0046AA]' />
                                <a href="tel:+5511999999999" className='hover:text-white transition-colors'>+55 (11) 99999-9999</a>
                            </div>
                            <div className='flex items-start gap-3 text-base'>
                                <MapPin className='w-5 h-5 text-[#0046AA] flex-shrink-0 mt-1' />
                                <span>São Paulo, SP - Brasil</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Blocos de Links */}
                    {footerLinks.map((section, index) => (
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: index * 0.25 }} key={index} className='flex flex-col gap-4'>
                            {/* Tipografia de título secundário consistente: text-xl font-bold */}
                            <h4 className='text-xl font-bold text-white mb-2'>
                                {section.title}
                            </h4>
                            <ul className='space-y-3'>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className='text-base hover:text-white transition-colors duration-200'
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bloco Final: Redes Sociais e Copyright */}
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-sm mb-4 md:mb-0'>
                        &copy; {new Date().getFullYear()} Codexy. Todos os direitos reservados.
                    </p>
                    <div className='flex gap-4'>
                        <SocialIcon Icon={Instagram} href="https://instagram.com/codexy" label="Instagram da Codexy" />
                        <SocialIcon Icon={Facebook} href="https://facebook.com/codexy" label="Facebook da Codexy" />
                        <SocialIcon Icon={Linkedin} href="https://linkedin.com/company/codexy" label="Linkedin da Codexy" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
