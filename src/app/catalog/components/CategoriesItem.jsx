'use client'

import Link from "next/link";


export default function CategoriesItem({el, path}) {

    return (
        <div className="categories_item">
            <Link href={'/catalog/utka'} className={`image ${path === '/catalog/utka' ? 'active' : ''}`}>
                <img src="/utka.svg" alt="" />
            </Link>
            <Link href={'/catalog/utka'} className="title">Утка</Link>
        </div>
    );
}