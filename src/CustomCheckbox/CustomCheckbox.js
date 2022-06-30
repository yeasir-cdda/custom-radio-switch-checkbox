import React from 'react';
import './CustomCheckbox.css'
const CustomCheckbox = ({ id, label, outline, dark }) => {
    return (
        <label className='custom-checkbox' >
            <input className={`checkbox ${dark && 'dark_checkbox'} ${outline && 'border'}`}  type="checkbox" name={id} id={id} />
            {label}
        </label>
   
    );
};

export default CustomCheckbox;