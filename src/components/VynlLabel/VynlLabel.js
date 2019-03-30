import './VynlLabel.css';
import React from 'react';

export const VynlLabel = ({ children, className }) => {
  return (
    <div className={'vynl-label ' + className}>
      {children}
    </div>
  );
};
