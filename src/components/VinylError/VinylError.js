import './VinylError.css';
import React from 'react';

export const VinylError = ({ children }) => {
  return (
    <span className={'vinyl-error '}>
      {children}
    </span>
  );
};