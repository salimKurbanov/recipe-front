import { useEffect, useState } from "react";

export default function Pagination ({splideRef}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        if (splideRef.current) {
            splideRef.current.splide.on("move", () => {
                setActiveIndex(splideRef.current.splide.index);
            });

            splideRef.current.splide.on("autoplay:playing", (rate) => {
                setProgress(rate * 100);
            });
        }
    }, []);

    return (
        <div className="custom_pagination">
            {Array.from({ length: 5 }).map((_, index) => (
                <button
                    key={index}
                    className={`dot ${activeIndex === index ? "active" : ""}`}
                    onClick={() => splideRef.current.splide.go(index)}
                >
                    {activeIndex === index && (
                        <div className="custom_progress" style={{width: `${progress}%`}}></div>
                    )}
                </button>
            ))}
        </div>
    )
}