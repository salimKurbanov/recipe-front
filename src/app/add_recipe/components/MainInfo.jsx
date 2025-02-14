import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import TextArea from "@/components/text_area/TextArea";
import Category from "./Category";

export default function MainInfo () {

    return (
        <div className="main_info">
            <TextArea 
                placeholder={'название'}
            />

            <Category />

            <div className="flex">
                <div className="time">
                    <svg width="22" height="22" viewBox="0 0 12.5293 12.5" fill="none">
                        <defs/>
                        <path id="path" d="M6.26 0C2.8 0 0 2.79 0 6.25C0 9.7 2.8 12.5 6.26 12.5C9.72 12.5 12.52 9.7 12.52 6.25C12.52 2.79 9.72 0 6.26 0ZM6.89 3.12C6.89 2.77 6.61 2.5 6.26 2.5C5.91 2.5 5.63 2.77 5.63 3.12L5.63 6.25C5.63 6.59 5.91 6.87 6.26 6.87C6.61 6.87 6.89 6.59 6.89 6.25L6.89 3.12Z" fill="#59B57C" fillOpacity="1.000000" fillRule="evenodd"/>
                        <path id="path" d="M10.83 0.18C10.58 0.42 10.58 0.82 10.83 1.06L11.45 1.69C11.7 1.93 12.1 1.93 12.34 1.69C12.59 1.44 12.59 1.05 12.34 0.8L11.71 0.18C11.47 -0.07 11.07 -0.07 10.83 0.18Z" fill="#59B57C" fillOpacity="1.000000" fillRule="evenodd"/>
                    </svg>


                    <Input 
                        mode={'small'}
                        placeholder={'время, мин'}
                        width={'120'}
                    />
                </div>

                <div className="portions">
                    <svg width="22" height="16" viewBox="0 0 15 11" fill="none">
                        <defs/>
                        <path id="path" d="M14.42 8.79L14.14 8.79C14.09 5.24 11.58 2.31 8.36 1.86C8.5 1.67 8.58 1.42 8.58 1.16C8.58 0.52 8.1 0 7.5 0C6.89 0 6.41 0.52 6.41 1.16C6.41 1.42 6.49 1.67 6.63 1.86C3.41 2.31 0.9 5.24 0.85 8.79L0.57 8.79C0.25 8.79 0 9.07 0 9.41L0 10.38C0 10.72 0.25 11 0.57 11L14.42 11C14.74 11 15 10.72 15 10.38L15 9.41C15 9.07 14.74 8.79 14.42 8.79Z" fill="#59B57C" fillOpacity="1.000000" fillRule="nonzero"/>
                    </svg>

                    <Input 
                        mode={'small'}
                        placeholder={'кол-во порций'}
                        width={'151'}
                    />
                </div>
            </div>
        </div>
    )
}