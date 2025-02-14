import './css/input.scss';

export default function Input ({mode, value, onChange, placeholder, width}) {

    return (
        <div className={`input_wrapper ${mode}`} >
            <input 
                className={`main_input`}
                type="text" 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{width: `${width}px`}}
            />

            <p className="error"></p>
        </div>
    )
}