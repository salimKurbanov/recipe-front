'use client'

import Store from "@/utils/Store";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname()

    return (
        <nav>
            {Store.navigation.map((el, i) => (
                <Link key={i} href={el.link} className={`nav_item ${path === el.link ? 'active' : ''}`}>{el.title}</Link>
            ))}
        </nav>
    )
}