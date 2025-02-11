'use client'

import Button from "@/components/button/Button";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function LogoContainer () {
    const path = usePathname()

    return (
        <div className="logo_container">
            {path === '/' ?
                <Logo />
            :
                <Button mode={'square black'}>
                    <svg width="4.982300" height="8.659180" viewBox="0 0 4.9823 8.65918" fill="none">
                        <defs/>
                        <path id="Vector 2" d="M1.65 4.41L4.78 7.54C5.04 7.8 5.04 8.2 4.78 8.46C4.53 8.72 4.12 8.72 3.87 8.46L0.19 4.78C-0.07 4.53 -0.07 4.12 0.19 3.87L3.87 0.19C4.12 -0.07 4.53 -0.07 4.78 0.19C5.04 0.45 5.04 0.85 4.78 1.11L1.65 4.24L1.65 4.41Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
                    </svg>
                </Button>
            }
        </div>
    )
}