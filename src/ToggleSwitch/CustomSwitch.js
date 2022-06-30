import React from 'react';
import './CustomSwitch.css'
const CustomSwitch = ({ id, outline, dark}) => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input type="checkbox" className="switch-checkbox"
          name={id} id={id} />
        <label className=" label" htmlFor={id}>
          <span className={dark ? 'inner dark_inner' : 'inner'} />
          {dark || <span className={outline ? ' switch outline' : ' switch'} />}
          {dark && <span className={outline ? 'dark_switch switch outline' : 'dark_switch switch'} />}
        </label>
      </div>
    </div>
  );

};

export default CustomSwitch;