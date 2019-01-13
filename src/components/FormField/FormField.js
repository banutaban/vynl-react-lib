import React from 'react';
import './FormField.css';

export const FormField = ({ children }) => {
  let isLabelFound = false;
 
  children = React.Children.map(children, (child, index) => {

    if (child.type.name === "AmberLabel") {
  
      isLabelFound = true;
    };
    if (child.type.name === "AmberInput" && isLabelFound) {
   
      return React.cloneElement(child, {externalLabel: isLabelFound})
    } else {
      return child;
    }
  });
  return <div className='form-field'>{children}</div>;
};

