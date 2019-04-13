import './VynlHint.css';
import React from 'react';

export const VynlHint = ({ children }) => {
  return (
    <span className={'vynl-hint'}>
      {children}
    </span>
  );
};