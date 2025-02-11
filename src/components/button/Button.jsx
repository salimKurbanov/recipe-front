'use client'

import './button.scss'

export default function Button({ children, onClick, mode }) {
    return <button className={`main_button ${mode}`} onClick={onClick}>{children}</button>
}