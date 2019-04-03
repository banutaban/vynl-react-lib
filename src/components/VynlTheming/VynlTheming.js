import React from 'react';
import './VynlTheming.css';
import * as tinycolor from 'tinycolor2';

const colorPalette = {
    primary: '#4242A6', 
    secondary: '#D30B54',
    success: '#0996B3',
    info: '#0B6FD3',
    warning: '#D3800B',
    danger: '#D31C0B',
    grey: '#617D8B',
}

export const VynlTheming = ({
  children, palette=colorPalette }) => {
      applyTheme(colorPalette)
  return (
     <div className='vynl-theming'>{children}</div>
  );
};

const preset={
    100: {s: 0.81, l:0.17},
    70: {s: 0.60, l:0.65},
    60: {s: 0.61, l:0.62},
    50: {s: 0.68, l:0.69},
    30: {s: 0.91, l:0.87},
    20: {s: 0.83, l:0.93},
    10: {s: 0.46, l:0.98},
}


    function applyTheme(colorPalette) {
      Object.entries(colorPalette).forEach (
          (color) => {
              Object.keys(preset).forEach((preset) => {
                  console.log(`--color-${color[0]}-${preset}`, getColor(color[1], preset));
                document.documentElement.style.setProperty(`--color-${color[0]}-${preset}`, getColor(color[1], preset)); 
              })
          }
      )

    }

    function getColor(hex, colorVariation) {
        const hsl = tinycolor(hex).toHsl();
        hsl.l=preset[colorVariation].l
        hsl.s=preset[colorVariation].s

        return tinycolor(hsl).toHexString ()
    } 

   /* document.documentElement.style
    .setProperty('--my-variable-name', 'pink'); */