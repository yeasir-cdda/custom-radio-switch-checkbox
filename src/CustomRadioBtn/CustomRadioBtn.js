import React from 'react';
import './CustomRadioBtn.css'
const CustomRadioBtn = ({ label, dark, outline, id }) => {
    return (
            <label className='custom-radioBtn' >
                <input  type="radio" className={`radioBtn ${dark && 'radioBtn-dark'} ${outline && 'radioBtn-outline'}`} name={id} id={id} value={id} />
                {label}
            </label>     
    );
};

export default CustomRadioBtn;