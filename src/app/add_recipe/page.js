import MainTitle from "@/components/main_title/MainTitle";
import MainImage from "./components/MainImage";
import AddForm from "./components/AddForm";
import './css/add_recipe.scss';

export default function AddRecipe () {

    return (
        <div className="add_recipe container">
            <MainTitle>Поделитесь своим рецептом</MainTitle>

            <div className="content">
                <MainImage />

                <AddForm />
            </div>
        </div>
    )
}