import './css/header.scss'

import Logo from "./components/Logo";
import Navigation from './components/Navigation';
import AddRecipe from './components/AddRecipe';
import BurgerBtn from './components/BurgerBtn';

export default function Header() {

    return (
        <header className={`container`}>
            <Logo />

            <Navigation />

            <AddRecipe />

            <BurgerBtn />
        </header>
    )
}