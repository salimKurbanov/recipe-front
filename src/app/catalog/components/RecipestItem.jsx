import AddToFavorites from "@/components/add_to_favorites/AddToFavorites";
import Link from "next/link";


export default function RecipesItem() {

    return (
        <Link href={'/'} className="recipe_item">
            <img src="/image.jpg" className="background" alt="" />
            <AddToFavorites />

            <div className="info">
                <div className="score"></div>
                <div className="title">Стейк с гарниром из овощей</div>
                <div className="description">курица, зелень, помидор, макароны, лимон, кориандр курица, зелень, помидор, макароны, лимон, кориандр</div>
                <div className="char_block">
                    <p><img src="/timer.svg" alt="" /> 20 мин.</p>
                    <span>|</span>
                    <p><img src="/portion.svg" alt="" /> 3 порции</p>
                </div>
            </div>
        </Link>
    );
}