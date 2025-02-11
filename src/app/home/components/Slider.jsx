'use client'

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AddToFavorites from "@/components/add_to_favorites/AddToFavorites";
import Score from "./Score";
import Utility from "./Utility";
import Arrows from "./Arrows";
import Pagination from "./Pagination";
import Button from "@/components/button/Button";
import '@splidejs/react-splide/css';


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
                    type: 'loop',
                    rewind: true,
                    speed: 1000,
                    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                    padding: 'auto',
                    width : '100%',
                    gap: '30px',
                    pagination: false,
                    drag: false,
                    arrows: false,
                    autoplay: true,
                    interval: 5500,
                    autoWidth: true,
                    perMove: 1,
                    waitForTransition: true,

                    mediaQuery: 'min',
                    breakpoints: {
                        1400: {
                            perPage: 3,
                            perMove: 1,
                        },
                        768: {
                        },
                    }
                }}
                hasTrack={false}
            >   
                <SplideTrack>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SplideSlide key={index}>
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
                    ))}
                </SplideTrack>
                
                <div className="control">
                    <Pagination splideRef={splideRef}/>

                    <Arrows handlePrev={handlePrev} handleNext={handleNext}/>
                </div>
            </Splide>

            <Button mode={'main full mob'}>Перейти к рецептам</Button>
        </div>
    )
}