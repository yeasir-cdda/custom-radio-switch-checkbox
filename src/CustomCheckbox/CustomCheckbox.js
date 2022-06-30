import React from 'react';
import './CustomCheckbox.css'
const CustomCheckbox = ({ id, label }) => {
    return (
        <label className='custom-checkbox' >
            <input  type="checkbox" name={id} id={id} />
            {label}
        </label>
   
    );
};

export default CustomCheckbox;