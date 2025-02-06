import './css/header.scss'

import Logo from "./components/Logo";
import Navigation from './components/Navigation';
import Button from '../button/Button';
import Link from 'next/link';

export default function Header() {

    return (
        <header className={`container`}>
            <Logo />

            <Navigation />

            <Link href={'/fd'}>
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

        </header>
    )
}