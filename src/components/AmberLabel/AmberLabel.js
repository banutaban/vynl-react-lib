import './AmberLabel.css';
import React from 'react';

export const AmberLabel = ({ children, className }) => {
  return (
    <div className={'amber-label ' + className}>
      {children}
    </div>
  );
};
