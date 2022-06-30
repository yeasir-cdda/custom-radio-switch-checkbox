import React from 'react';
import './CustomSwitch.css'
const CustomSwitch = ({ label }) => {
  return (
    <div className="container">
      
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox"
          name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default CustomSwitch;