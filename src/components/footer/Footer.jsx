import './css/footer.scss';
import Logo from '../header/components/Logo';
import Navigation from './components/Navigation';
import Social from '../social/Social';
import Button from '../button/Button';
import AddRecipe from '../header/components/AddRecipe';

export default function Footer () {

    return (
        <footer className='container'>
            <div className="content">
                <Logo />

                <div className="footer_line"></div>

                <p className="mobile_text">Знаете хороший рецепт? Поделитесь им!</p>

                <AddRecipe />

                <div className="navigation">
                    <Navigation />

                    <div className="copyright">© 2025. все права защищены</div>
                </div>
            </div>
            
            <Social mode={'white'}/>
        </footer>
    )
}