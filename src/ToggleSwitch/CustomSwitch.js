import React from 'react';
import './CustomSwitch.css'
const CustomSwitch = ({ id, outline }) => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox"
          name={id} id={id} />
        <label className="label" htmlFor={id}>
          <span className="inner" />
          <span className={outline ? 'switch outline' : 'switch'} />
        </label>
      </div>
    </div>
  );

};

export default CustomSwitch;