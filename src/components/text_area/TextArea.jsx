'use client'

import { useEffect, useRef, useState } from "react";
import './css/text_area.scss';

export default function TextArea({value, onChange, placeholder}) {
    const area = useRef(null)

    useEffect(() => {
        const textarea = area.current;

        if (textarea) {
            textarea.style.height = '40px'; 
            const isOverflowing = textarea.scrollHeight > textarea.clientHeight; 
            
            if (isOverflowing) {
                textarea.style.height = `${textarea.scrollHeight}px`; 
            }
        }
    }, [value])

    return (
        <textarea ref={area} placeholder={placeholder} className='text_area' value={value} onChange={onChange}></textarea>
    )
}