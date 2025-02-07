'use client'

import Button from "@/components/button/Button";
import Store from "@/utils/Store";
import Link from "next/link";
import Social from "@/components/social/Social";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function BurgerBtn () {
    const [isOpen, setIsOpen] = useState(false)
    
    const path = usePathname()
    
    const openMenu = (e) => {
        e.stopPropagation()
        document.body.style.overflow = 'hidden'
        setIsOpen(prev => prev = true)
    }

    const closeMenu = useCallback(() => {
        setIsOpen(prev => prev = false)
        document.body.style.overflow = 'visible'
    }, [isOpen])

    useEffect(() => {
        if(isOpen && window.innerWidth < 993) {

            window.addEventListener('click', () => closeMenu())

            return window.removeEventListener('click', () => closeMenu())
        }
    }, [isOpen])
    
    return (
        <>
            <button className="burger_btn" onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <div className={`burger_menu ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <Button onClick={closeMenu} mode={`square black close`}>
                    <svg width="11.499969" height="10.000977" viewBox="0 0 11.5 10.001">
                        <defs/>
                        <rect id="Прямоугольник 1" y="8.975342" rx="0.762356" width="13.341237" height="1.524713" transform="rotate(-42.2732 0.000000 8.975342)" fill="#FFFFFF" fillOpacity="1.000000"/>
                        <rect id="Прямоугольник 1" x="1.628174" rx="0.762356" width="13.341237" height="1.524713" transform="rotate(42.2732 1.628174 0.000000)" fill="#FFFFFF" fillOpacity="1.000000"/>
                    </svg>
                </Button>

                <nav className="burger_nav">
                    {Store.navigation.map((el, i) => (
                        <Link key={i} href={el.link} className={`burger_item ${path === el.link ? 'active' : ''}`}>{el.title}</Link>
                    ))}
                </nav>

                <div className="burger_footer">
                    <Link href={''}>
                        <Button mode={'main green'}>
                            Добавить рецепт 
                            <div className="decor">
                                <svg width="8.000000" height="8.000000" viewBox="0 0 8 8" fill="none">
                                    <defs/>
                                    <rect id="Прямоугольник 1" y="3.000000" rx="1.000000" width="8.000000" height="2.000000" fill="#FFFFFF" fillOpacity="1.000000"/>
                                    <rect id="Прямоугольник 1" x="3.000000" y="8.000000" rx="1.000000" width="8.000000" height="2.000000" transform="rotate(-90 3.000000 8.000000)" fill="#FFFFFF" fillOpacity="1.000000"/>
                                </svg>
                            </div>
                        </Button>
                    </Link>

                    <div className="line"/>

                    <p className="text">по интересующим вопросам обращаться:</p>

                    <Social mode={'black'}/>
                </div>
            </div>
        </>
    )
}