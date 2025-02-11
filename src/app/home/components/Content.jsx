import Button from "@/components/button/Button";

export default function Content () {

    return (
        <div className="content">
            <h1>Что сегодня на ужин?</h1>

            <p className="text">Выберите один из рецептов, или перейдите в каталог</p>

            <Button mode={'main desc'}>
                Перейти к рецептам
                
                <div className="decor">
                <svg width="4.982422" height="8.659180" viewBox="0 0 4.98242 8.65918" fill="none">
                    <defs/>
                    <path id="Vector 2" d="M3.32 4.41L0.19 7.54C-0.07 7.8 -0.07 8.2 0.19 8.46C0.45 8.72 0.85 8.72 1.11 8.46L4.78 4.78C5.04 4.53 5.04 4.12 4.78 3.87L1.11 0.19C0.85 -0.07 0.45 -0.07 0.19 0.19C-0.07 0.45 -0.07 0.85 0.19 1.11L3.32 4.24L3.32 4.41Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
                </svg>
                </div>
            </Button>
        </div>
    )
}