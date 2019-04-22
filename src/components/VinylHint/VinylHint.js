import './VinylHint.css';
import React from 'react';

export const VinylHint = ({ children }) => {
  return (
    <span className={'vinyl-hint'}>
      {children}
    </span>
  );
};