import './css/input.scss';

export default function Input ({value, onChange, placeholder}) {

    return (
        <div className="input_wrapper">
            <input 
                className="main_input"
                type="text" 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

            <p className="error"></p>
        </div>
    )
}