import './VynlError.css';
import React from 'react';

export const VynlError = ({ children }) => {
  return (
    <span className={'vynl-error '}>
      {children}
    </span>
  );
};