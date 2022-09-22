import React from 'react';

import './Button.css';

const Button = props => {
  let buttonClass='button '+props.className
  return (
    
    <button type={props.type} className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
