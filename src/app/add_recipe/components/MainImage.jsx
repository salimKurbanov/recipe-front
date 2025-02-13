'use client'

import Image from "next/image";
import { useState } from "react";

export default function MainImage () {
    const [image, setImage] = useState(null)

    const addImage = (e) => {
        if(!e.target.files[0]) {
            return
        }

        setImage(e.target.files[0])

        e.target.value = null
    }

    return (
        <div className="main_image">

            <label className="image_wrapper" htmlFor="add_recipe_input">
                {image ?
                    <Image 
                        className="image"
                        src={URL.createObjectURL(image)} 
                        width={0} 
                        height={0} 
                        style={{ width: '100%', height: '100%' }} 
                        priority={100} 
                        placeholder="blur" 
                        unoptimized={true} 
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z" 
                        alt=""
                    />
                :
                    <svg className="plug_image" viewBox="0 0 230.833 184.667" fill="none">
                        <defs/>
                        <path id="path" d="M0 28.85C0 12.91 12.91 0 28.85 0L201.97 0C217.91 0 230.83 12.91 230.83 28.85L230.83 155.81C230.83 171.74 217.91 184.66 201.97 184.66L28.85 184.66C12.91 184.66 0 171.74 0 155.81L0 28.85ZM11.54 28.85L11.54 155.81C11.54 165.37 19.29 173.12 28.85 173.12L201.97 173.12C211.54 173.12 219.29 165.37 219.29 155.81L219.29 28.85C219.29 19.29 211.54 11.54 201.97 11.54L28.85 11.54C19.29 11.54 11.54 19.29 11.54 28.85ZM161.58 34.62L184.66 34.62C191.04 34.62 196.2 39.79 196.2 46.16L196.2 69.25C196.2 75.62 191.04 80.79 184.66 80.79L161.58 80.79C155.2 80.79 150.04 75.62 150.04 69.25L150.04 46.16C150.04 39.79 155.2 34.62 161.58 34.62ZM161.58 46.16L161.58 69.25L184.66 69.25L184.66 46.16L161.58 46.16ZM9.85 136.81C7.59 139.06 3.94 139.06 1.69 136.81C-0.57 134.55 -0.57 130.9 1.69 128.64L59.39 70.94C61.65 68.68 65.3 68.68 67.55 70.94L132.72 136.11L163.27 105.56C165.52 103.31 169.18 103.31 171.43 105.56L223.37 157.5C225.62 159.75 225.62 163.41 223.37 165.66C221.11 167.91 217.46 167.91 215.21 165.66L167.35 117.8L136.81 148.35C134.55 150.6 130.9 150.6 128.64 148.35L63.47 83.18L9.85 136.81Z" fill="#8C8C8C" fillOpacity="1.000000" fillRule="nonzero"/>
                    </svg>
                }

                <input id="add_recipe_input" type="file" onChange={addImage}/>
            </label>
        </div>
    )
}