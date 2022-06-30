import React from 'react';
import './CustomCheckbox.css'
const CustomCheckbox = ({ id, label, outline }) => {
    return (
        <label className='custom-checkbox' >
            <input className={`checkbox ${outline && 'border'}`}  type="checkbox" name={id} id={id} />
            {label}
        </label>
   
    );
};

export default CustomCheckbox;