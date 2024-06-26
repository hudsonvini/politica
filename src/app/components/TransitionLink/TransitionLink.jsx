'use client'
import style from './Transition.module.css'
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/app/utils/animations";
import { fontPrincipal } from '@/app/fonts';

export default function TransitionLink({href, label}) {
    // Animações de Transições de página
    const router = useRouter()
    const pathname = usePathname()

    const handleClik = () => {
        if (pathname !== href) {
            animatePageOut(href, router)
        }
    }

    return (
        
        <button 
            className={`${style.link} ${fontPrincipal.className}`} href={href}
            onClick={handleClik}
        >
            {label}
        </button>
    )
}