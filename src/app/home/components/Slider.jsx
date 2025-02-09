'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef } from "react";
import '@splidejs/react-splide/css';
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button/Button";
import AddToFavorites from "@/components/add_to_favorites/AddToFavorites";
import Score from "./Score";
import Utility from "./Utility";


export default function Slider () {

    const splideRef = useRef(null);

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
        <div className="slider_container">
            <Splide
                ref={splideRef}
                options={{
                    rewind: true,
                    padding: 'auto',
                    autoWidth: true,
                    width : '100%',
                    gap: '30px',
                    pagination: true,
                    drag: false,
                    arrows: false,
                }}
            >   
                <SplideSlide>
                    <AddToFavorites />
                    
                    <Link className="wrapper_link" href={''}>
                        <Image 
                            className="recipe_image"
                            src={`./image.jpg`} 
                            width={0} 
                            height={0} 
                            style={{ width: '100%', height: '100%' }} 
                            priority={100} 
                            placeholder="blur" 
                            unoptimized={true} 
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z" 
                            alt=""
                        />

                        <div className="description">
                            <Score />

                            <h3>Стейк с гарниром из овощей</h3>

                            <p className="ingredients">курица, зелень, помидор, макароны, лимон, кориандр</p>

                            <Utility />
                        </div>
                    </Link>
                </SplideSlide>
            </Splide>

            <div className="custom_arrows">
                <div className="pagination"></div>

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
        </div>
    )
}