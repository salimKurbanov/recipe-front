import Button from "@/components/button/Button";
import Input from "@/components/input/Input";

export default function MainInfo () {

    return (
        <div className="main_info">
            <Input 
                placeholder={'название'}
            />

            <div className="category">
                <Input 
                    placeholder={'категория'}
                />

                <Button mode={'round grey'}>
                    <svg width="6.661133" height="3.832275" viewBox="0 0 6.66113 3.83228" fill="none">
                        <defs/>
                        <path id="Vector 2" d="M3.62 2.33L5.8 0.14C6 -0.05 6.31 -0.05 6.51 0.14C6.71 0.34 6.71 0.65 6.51 0.85L3.68 3.68C3.48 3.88 3.17 3.88 2.97 3.68L0.14 0.85C-0.05 0.65 -0.05 0.34 0.14 0.14C0.34 -0.05 0.65 -0.05 0.85 0.14L3.03 2.33L3.62 2.33Z" fill="#454545" fillOpacity="1.000000" fillRule="evenodd"/>
                    </svg>
                </Button>
            </div>

            <div className="flex">
                <div className="time">
                    <svg width="12.529297" height="12.500000" viewBox="0 0 12.5293 12.5" fill="none">
                        <defs/>
                        <path id="path" d="M6.26 0C2.8 0 0 2.79 0 6.25C0 9.7 2.8 12.5 6.26 12.5C9.72 12.5 12.52 9.7 12.52 6.25C12.52 2.79 9.72 0 6.26 0ZM6.89 3.12C6.89 2.77 6.61 2.5 6.26 2.5C5.91 2.5 5.63 2.77 5.63 3.12L5.63 6.25C5.63 6.59 5.91 6.87 6.26 6.87C6.61 6.87 6.89 6.59 6.89 6.25L6.89 3.12Z" fill="#59B57C" fillOpacity="1.000000" fillRule="evenodd"/>
                        <path id="path" d="M10.83 0.18C10.58 0.42 10.58 0.82 10.83 1.06L11.45 1.69C11.7 1.93 12.1 1.93 12.34 1.69C12.59 1.44 12.59 1.05 12.34 0.8L11.71 0.18C11.47 -0.07 11.07 -0.07 10.83 0.18Z" fill="#59B57C" fillOpacity="1.000000" fillRule="evenodd"/>
                    </svg>


                    <Input 
                        placeholder={'время, мин'}
                    />
                </div>

                <div className="portions">
                    <svg width="15.000000" height="11.000000" viewBox="0 0 15 11" fill="none">
                        <defs/>
                        <path id="path" d="M14.42 8.79L14.14 8.79C14.09 5.24 11.58 2.31 8.36 1.86C8.5 1.67 8.58 1.42 8.58 1.16C8.58 0.52 8.1 0 7.5 0C6.89 0 6.41 0.52 6.41 1.16C6.41 1.42 6.49 1.67 6.63 1.86C3.41 2.31 0.9 5.24 0.85 8.79L0.57 8.79C0.25 8.79 0 9.07 0 9.41L0 10.38C0 10.72 0.25 11 0.57 11L14.42 11C14.74 11 15 10.72 15 10.38L15 9.41C15 9.07 14.74 8.79 14.42 8.79Z" fill="#59B57C" fillOpacity="1.000000" fillRule="nonzero"/>
                    </svg>

                    <Input 
                        placeholder={'кол-во порций'}
                    />
                </div>
            </div>
        </div>
    )
}