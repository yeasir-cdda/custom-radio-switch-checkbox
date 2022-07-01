import React from 'react';
import './CustomRadioBtn.css'
const CustomRadioBtn = ({ label, dark, outline, id }) => {
    return (
        <>
            <label className='custom-radioBtn' >
                <input type="radio"className='radioBtn' name={id} id={id} />
                {'radio box'}
            </label>
            <label className='custom-radioBtn' >
                <input  type="radio" className='radioBtn radioBtn-dark '  name={id} id={id} />
                {'checkbox'}
            </label>
           
        </>
    );
};

export default CustomRadioBtn;