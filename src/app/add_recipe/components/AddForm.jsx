import MainInfo from "./MainInfo";
import Ingredients from "./Ingredients";
import Proces from "./Proces";
import SendForm from "./SendForm";

export default function AddForm () {

    return (
        <div className="add_form">
            <MainInfo />

            <Ingredients />

            <Proces />

            <SendForm />
        </div>
    )
}