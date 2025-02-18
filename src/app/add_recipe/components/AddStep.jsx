import Button from "@/components/button/Button";

export default function AddStep () {

    return (
        <Button mode={'main add_step_btn'}>
            Добавить шаг

            <div className="decor">
                <svg width="8.000000" height="8.000000" viewBox="0 0 8 8" fill="none">
                    <defs/>
                    <rect id="Прямоугольник 1" y="3.000000" rx="1.000000" width="8.000000" height="2.000000" fill="#FFFFFF" fillOpacity="1.000000"/>
                    <rect id="Прямоугольник 1" x="3.000000" y="8.000000" rx="1.000000" width="8.000000" height="2.000000" transform="rotate(-90 3.000000 8.000000)" fill="#FFFFFF" fillOpacity="1.000000"/>
                </svg>
            </div>
        </Button>
    )
}