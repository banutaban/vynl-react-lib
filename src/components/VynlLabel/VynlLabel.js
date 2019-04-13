import './VynlLabel.css';
import React from 'react';

export const VynlLabel = ({ children, className }) => {
  return (
    <span className={'vynl-label ' + className}>
      {children}
    </span>
  );
};
