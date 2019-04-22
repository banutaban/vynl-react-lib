import React from 'react';
import '../variables.css';
import '../breakpoints.css';
import './VinylGrid.css';

export const VinylGrid = ({ children }) => <div className='vinyl-grid'>{children}</div>;
export const VinylCell = ({ children, span = 1 }) => (
  <div className={`vinyl-grid-cell span-${span}`}>{children}</div>
);
