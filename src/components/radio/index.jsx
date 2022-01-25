import React from "react";
import './radio.css';

// const Radio = ({ value, checked, onChange }) => {
const Radio = (props) => {  
  // return <input type="radio" value={value} checked={checked} onChange={onChange} />
  return <input type="radio" className="radioBtn" {...props} name="testRadio" />
  
}

export default Radio