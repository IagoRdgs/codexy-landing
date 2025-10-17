import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement } from "react";

type CommonProps = {
    text: string;
    icon?: ReactElement;
    iconPos?: 'left' | 'right';
    variant?: 'primary' | 'secondary';
};

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
};

type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
    as = 'button',
    text,
    icon,
    iconPos = 'left',
    variant = 'primary',
    ...rest
}: ButtonProps) {
    const baseStyle = 'text-sm md:text-md xl:text-lg px-4 py-2 rounded-md flex items-center gap-2 font-semibold text-lg cursor-pointer hover:-translate-y-1 focus:-translate-y-1';
    const variants = {
        primary: 'bg-gradient-to-r from-[#0046AA] to-[#0059D1] text-white hover:from-[#0059D1] hover:to-[#006FE8] focus:from-[#0059D1] focus:to-[#006FE8] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0046AA]/30 focus:-translate-y-1 focus:shadow-xl focus:shadow-[#0046AA]/30',
        secondary: 'bg-[#000] text-white border border-white/30 hover:bg-white/5 hover:border-white/50 focus:bg-white/5 focus:border-white/50 transition-all'
    };

    const content = (
        <>
            {icon && iconPos == 'left' && <span>{icon}</span>}
            <span>{text}</span>
            {icon && iconPos == 'right' && <span>{icon}</span>}
        </>
    );

    if (as == 'a') {
        return (
            <a className={`${baseStyle} ${variants[variant]}`} {...(rest as any)}>
                {content}
            </a>
        );
    };

    return (
        <button className={`${baseStyle} ${variants[variant]}`} {...(rest as any)}>
            {content}
        </button>
    );
};