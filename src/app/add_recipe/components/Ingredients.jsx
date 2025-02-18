import AddIngredient from "./AddIngredient";
import IngredientItem from "./IngredientItem";

export default function Ingredients () {

    return (
        <div className="ingredients">
            <h3>Ингридиенты</h3>

            <div className="ingredient_list">
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
            </div>

            <AddIngredient />
        </div>
    )
}