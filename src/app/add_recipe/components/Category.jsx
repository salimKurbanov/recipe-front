'use client'

import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { useCallback, useEffect, useRef, useState } from "react";

export default function () {
    const listWrapperRef = useRef()
    const listRef = useRef()
    const [isOpen, setIsOpen] = useState(false)

    const openPopUp = (e) => {
        e.stopPropagation()

        setIsOpen(prev => {
            if(!prev) {
                const w = listRef.current.offsetWidth
                const h = listRef.current.offsetHeight
                listWrapperRef.current.style.width = `${w}px`
                listWrapperRef.current.style.height = `${h}px`
                return true
            } else {
                listWrapperRef.current.style.width = `0px`
                listWrapperRef.current.style.height = `0px`
                return false
            }
        })
    }

    const closePopup = useCallback(() => {
        setIsOpen(prev => prev = false)
        listWrapperRef.current.style.width = `0px`
        listWrapperRef.current.style.height = `0px`
        console.log('close')
    }, [])

    useEffect(() => {
        if (isOpen) {
            const handleClickOutside = () => closePopup();
            
            window.addEventListener('click', handleClickOutside);
    
            return () => window.removeEventListener('click', handleClickOutside);
        }
    }, [isOpen, closePopup]); 

    return (
        <div className="category">
            <Input 
                placeholder={'категория'}
                mode={'full'}
            />

            <Button mode={`round grey ${isOpen ? 'open' : ''}`} onClick={openPopUp}>
                <svg width="6.661133" height="3.832275" viewBox="0 0 6.66113 3.83228" fill="none">
                    <defs/>
                    <path id="Vector 2" d="M3.62 2.33L5.8 0.14C6 -0.05 6.31 -0.05 6.51 0.14C6.71 0.34 6.71 0.65 6.51 0.85L3.68 3.68C3.48 3.88 3.17 3.88 2.97 3.68L0.14 0.85C-0.05 0.65 -0.05 0.34 0.14 0.14C0.34 -0.05 0.65 -0.05 0.85 0.14L3.03 2.33L3.62 2.33Z" fill="#454545" fillOpacity="1.000000" fillRule="evenodd"/>
                </svg>
            </Button>

            <div className={`list_wrapper ${isOpen ? 'open' : ''}`} ref={listWrapperRef}>
                <div className="list" ref={listRef}>
                    <p>курица</p>
                    <p>говядина</p>
                </div>
            </div>
        </div>
    )
}