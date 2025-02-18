import AddStep from "./AddStep";
import ProcesItem from "./ProcesItem";

export default function Proces () {
    return (
        <div className="proces">
            <h3>Приготовление</h3>

            <div className="proces_list">
                <ProcesItem />
                <ProcesItem />
                <ProcesItem />
            </div>

            <AddStep />
        </div>
    )
}