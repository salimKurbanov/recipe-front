import './css/header.scss'

import Navigation from './components/Navigation';
import AddRecipe from './components/AddRecipe';
import BurgerBtn from './components/BurgerBtn';
import LogoContainer from './components/LogoContainer';

export default function Header() {

    return (
        <header className={`container`}>
            <LogoContainer />

            <Navigation />

            <AddRecipe />

            <BurgerBtn />
        </header>
    )
}