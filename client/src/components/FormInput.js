import React from "react";
import "./FormInput.css";

const FormInput = ({ title,name, value, readOnly, type, width, onChange, errors }) => {

    return (
        <div className="form-main" style={{ width: width }}>
            <label className="form-label" htmlFor={title}>{title}</label>
            <input 
                readOnly={readOnly}
                id={title}
                className="form-input" 
                type={type} 
                name={name} 
                onChange={onChange}
                value={value}
            />
            {errors ? 
             <span className="form-error">{errors}</span> : <></>} 
        </div>
    );
}

export default FormInput;