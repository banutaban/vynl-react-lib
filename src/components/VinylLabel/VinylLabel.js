import './VinylLabel.css';
import React from 'react';

export const VinylLabel = ({ children, type }) => {
  return (
    <span className={'vinyl-label ' + type}>
      {children}
    </span>
  );
};
