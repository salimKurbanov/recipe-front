
import { useCallback, useEffect, useState } from "react";

export default function useBurger () {
    const [isOpen, setIsOpen] = useState(false)
    
    const openMenu = (e) => {
        e.stopPropagation()
        document.body.style.overflow = 'hidden'
        setIsOpen(prev => prev = true)
    }

    const closeMenu = useCallback(() => {
        setIsOpen(prev => prev = false)
        document.body.style.overflow = 'visible'
    }, [])

    useEffect(() => {
        if (isOpen && window.innerWidth < 993) {
            const handleClickOutside = () => closeMenu();
            
            window.addEventListener('click', handleClickOutside);
    
            return () => window.removeEventListener('click', handleClickOutside);
        }
    }, [isOpen, closeMenu]); 

    return {
        isOpen,
        openMenu,
        closeMenu
    }
}