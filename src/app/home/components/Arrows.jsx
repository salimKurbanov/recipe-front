import Button from "@/components/button/Button";

export default function Arrows ({ splideRef }) {

    const handlePrev = () => {
        if (splideRef.current) {
        splideRef.current.splide.go('<'); // Перейти к предыдущему слайду
        }
    };
    
    const handleNext = () => {
        if (splideRef.current) {
        splideRef.current.splide.go('>'); // Перейти к следующему слайду
        }
    };

    return (
        <div className="custom_arrows">
            <Button mode={'round black'} onClick={handlePrev}>
                <svg width="4.982300" height="8.659180" viewBox="0 0 4.9823 8.65918" fill="none">
                    <defs/>
                    <path id="Vector 2" d="M1.65 4.41L4.78 7.54C5.04 7.8 5.04 8.2 4.78 8.46C4.53 8.72 4.12 8.72 3.87 8.46L0.19 4.78C-0.07 4.53 -0.07 4.12 0.19 3.87L3.87 0.19C4.12 -0.07 4.53 -0.07 4.78 0.19C5.04 0.45 5.04 0.85 4.78 1.11L1.65 4.24L1.65 4.41Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
                </svg>
            </Button>

            <Button mode={'round black'} onClick={handleNext}>
                <svg width="4.982422" height="8.659180" viewBox="0 0 4.98242 8.65918" fill="none">
                    <defs/>
                    <path id="Vector 2" d="M3.32 4.41L0.19 7.54C-0.07 7.8 -0.07 8.2 0.19 8.46C0.45 8.72 0.85 8.72 1.11 8.46L4.78 4.78C5.04 4.53 5.04 4.12 4.78 3.87L1.11 0.19C0.85 -0.07 0.45 -0.07 0.19 0.19C-0.07 0.45 -0.07 0.85 0.19 1.11L3.32 4.24L3.32 4.41Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
                </svg>
            </Button>
        </div>
    )
}