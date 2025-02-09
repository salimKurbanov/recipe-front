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

    const openModal = (el) => {
        document.body.style.overflow = 'hidden'
        Store.setListener('open_repair_modal', el)
    }

    return (
        <Splide
            ref={splideRef}
            options={{
                rewind: true,
                padding: 'auto',
                autoWidth: true,
                width : '100%',
                gap: '30px',
                pagination: true,
                // drag: 'free',
                arrows: false,
            }}
        >   
            <SplideSlide>
                <AddToFavorites />
                
                <Link href={''}>
                    <Image 
                        className="image"
                        src={``} 
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
    )
}