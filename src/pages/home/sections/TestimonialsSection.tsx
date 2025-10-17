import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function Testimonials() {
    const [api, setApi] = useState<CarouselApi | undefined>();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const testimonials = [
        {
            quote: 'Usando a solução da Codexy, nossa presença online e conversões melhoraram significativamente, impulsionando o desempenho do negócio.',
            author: 'Lucas Pereira',
            role: 'Gerente de E-commerce'
        },
        {
            quote: 'Nossas funções de negócio melhoraram com um design amigável e feedback positivo dos clientes.',
            author: 'Diego Ferreira',
            role: 'Diretor de Marketing'
        },
        {
            quote: 'A integração perfeita da Codexy melhorou nossas operações de negócios e eficiência. Altamente recomendado por sua interface intuitiva.',
            author: 'Roberto Lima',
            role: 'CEO'
        },
        {
            quote: 'A Codexy revolucionou nossas operações, simplificando finanças e inventário. A plataforma em nuvem nos mantém produtivos, mesmo remotamente.',
            author: 'Ana Silva',
            role: 'Gerente de Operações'
        },
        {
            quote: 'A equipe de suporte é excepcional, nos guiando através da configuração e fornecendo assistência contínua, garantindo nossa satisfação.',
            author: 'Mariana Costa',
            role: 'Líder de Suporte ao Cliente'
        },
        {
            quote: 'Suas funcionalidades robustas e suporte rápido transformaram nosso fluxo de trabalho, tornando-nos significativamente mais eficientes.',
            author: 'Fernanda Oliveira',
            role: 'Gerente de Projetos'
        },
        {
            quote: 'A implementação suave superou as expectativas. Simplificou processos, melhorando o desempenho geral do negócio.',
            author: 'Patricia Alves',
            role: 'Analista de Negócios'
        },
        {
            quote: 'Eles entregaram uma solução que superou as expectativas, entendendo nossas necessidades e aprimorando nossas operações.',
            author: 'Camila Rodrigues',
            role: 'Gerente de Vendas'
        },
        {
            quote: 'Implementar a solução da Codexy foi suave e rápido. A interface personalizável e amigável tornou o treinamento da equipe sem esforço.',
            author: 'Carlos Santos',
            role: 'Gerente de TI'
        }
    ];

    const plugin = useRef(
        Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true
        })
    );

    const onSelect = useCallback((CurrentApi?: CarouselApi) => {
        if (!CurrentApi) return;
        setSelectedIndex(CurrentApi.selectedScrollSnap());
    }, []);

    const onReint = useCallback((currentApi?: CarouselApi) => {
        if (!currentApi) return;
        setScrollSnaps(currentApi.scrollSnapList());
        onSelect(currentApi);
    }, []);

    useEffect(() => {
        if (!api) return;

        setScrollSnaps(api.scrollSnapList());
        setSelectedIndex(api.selectedScrollSnap());

        api.on('select', onSelect);
        api.on('reInit', onReint);

        return () => {
            api.off('select', onSelect);
            api.off('reInit', onReint);
        }
    }, [api, onSelect, onReint]);

    return (
        <section className='bg-[#F8FAFC] py-16 px-8'>
            <div className='max-w-7xl mx-auto'>
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 bg-[#0046AA]/10 border border-[#0046AA]/30 px-6 py-2 rounded-full text-sm mb-6'>
                        <span className='bg-gradient-to-r from-[#0046AA] to-[#0059D1] bg-clip-text text-transparent font-semibold'>Depoimentos</span>
                    </div>

                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight'>
                        O que nossos{' '}
                        <span className='bg-gradient-to-r from-[#0046AA] to-[#0059D1] bg-clip-text text-transparent'>clientes</span>
                        {' '}dizem?
                    </h2>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='w-full max-w-4xl mx-auto relative'>
                    <Carousel
                        plugins={[plugin.current]}
                        setApi={setApi}
                        className='w-full'
                        onMouseEnter={() => plugin.current.stop()}
                        onMouseLeave={() => plugin.current.play()}
                    >
                        <CarouselContent className='p-1'>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index}>
                                    <div className='flex flex-col items-center text-center p-6 md:p-10 bg-white rounded-xl shadow-lg border border-gray-100 h-full'>
                                        <p className='text-xl md:text-2xl font-medium text-gray-700 italic mb-8 relative'>
                                            <span className='absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-5xl font-serif text-gray-300 opacity-50'>"</span>
                                            {testimonial.quote}
                                        </p>

                                        <div className='w-16 h-1 bg-[#0046AA] mb-4 rounded-full'></div>

                                        <div className='mt-4'>
                                            <p className='text-lg font-bold text-gray-900'>{testimonial.author}</p>
                                            <p className='text-sm text-[#0046AA] font-semibold'>{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className='absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex' />
                        <CarouselNext className='absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex' />
                    </Carousel>

                    {api && (
                        <div className='flex justify-center gap-2 mt-8'>
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => api.scrollTo(index)}
                                    aria-label={`ir para o depoimento ${index + 1}`}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${index === selectedIndex
                                        ? 'bg-[#0046AA] w-5'
                                        : 'bg-gray-300 hover:bg-gray-200'
                                        }`}
                                >

                                </button>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};