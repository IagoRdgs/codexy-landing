import codexyBg from '../../../assets/codexy_bg.png';
import codexyLogo from '../../../assets/codexy_logo.png';
import Button from '../../../components/layout/Button';
import { FaArrowDown, FaArrowRight, FaPlay } from 'react-icons/fa';

export default function Main() {
    return (
        <section
            style={{ backgroundImage: `url(${codexyBg})` }}
            className='font-montserrat min-h-dvh bg-cover bg-center bg-no-repeat flex justify-end px-8 md:px-24'
        >
            <div className='flex flex-col h-dvh md:w-[70%] justify-center text-white gap-6 md:gap-8'>
                <div className='w-full flex justify-center'>
                    <img src={codexyLogo} alt="codexy logo" width={250} height={150} />
                </div>
                <h1 className='text-end font-bold text-5xl lg:text-7xl'>Tecnologia Que Impulsiona seu Progresso</h1>
                <p className='text-end text-md md:text-xl'>Transformamos ideias em soluções digitais completas. Do marketing ao desenvolvimento, da automação à identidade visual.</p>
                <div className='flex flex-col gap-4 md:gap-8 items-end lg:flex-row justify-end'>
                    <Button
                        text='Quero impulsionar minha empresa'
                        icon={<FaArrowRight />}
                        iconPos='right'
                    />
                    <Button
                        text='ver cases de sucesso'
                        icon={<FaPlay />}
                        variant='secondary'
                    />
                </div>

                <div className="absolute bottom-5 md:bottom-6 lg:bottom-2 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-md md:rounded-full flex justify-center pt-2">
                        <FaArrowDown size={12} className='text-white/60 animate-bounce md:hidden'/>
                        <div className="hidden w-1 h-3 bg-white/50 rounded-full animate-bounce md:block"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};