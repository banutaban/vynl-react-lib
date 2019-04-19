import './VynlLabel.css';
import React from 'react';

export const VynlLabel = ({ children, type = 'primary'}) => {
  return (
    <span className={'vynl-label ' + type}>
      {children}
    </span>
  );
};
