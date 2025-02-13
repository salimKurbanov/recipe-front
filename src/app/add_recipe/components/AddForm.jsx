import MainInfo from "./MainInfo";
import Ingredients from "./Ingredients";
import Proces from "./Proces";

export default function AddForm () {

    return (
        <div className="add_form">
            <MainInfo />

            <Ingredients />

            <Proces />
        </div>
    )
}