import React, { Component, createRef } from 'react';
import './VynlTheming.css';
import * as tinycolor from 'tinycolor2';

export class VynlTheming extends Component {
  defaultColorPalette = {
    primary: '#4242A6',
    secondary: '#D30B54',
    success: '#0996B3',
    info: '#0B6FD3',
    warning: '#D3800B',
    danger: '#D31C0B',
    grey: '#617D8B',
  };

  preset = {
    100: { s: 0.81, l: 0.17 },
    70: { s: 0.6, l: 0.65 },
    60: { s: 0.61, l: 0.62 },
    50: { s: 0.68, l: 0.69 },
    30: { s: 0.91, l: 0.87 },
    20: { s: 0.83, l: 0.93 },
    10: { s: 0.46, l: 0.98 },
  };

  constructor(props) {
    super(props);
    this.themingContainerRef = createRef();
  }

  applyTheme = colorPalette => {
    Object.entries(colorPalette).forEach(color => {
      Object.keys(this.preset).forEach(preset => {
        this.themingContainerRef.current.style.setProperty(
          `--color-${color[0]}-${preset}`,
          this.getColor(color[1], preset)
        );
      });
    });
  };

  getColor = (hex, colorVariation) => {
    const hsl = tinycolor(hex).toHsl();
    hsl.l = this.preset[colorVariation].l;
    hsl.s = this.preset[colorVariation].s;

    return tinycolor(hsl).toHexString();
  };

  componentDidMount() {
    const { palette = this.defaultColorPalette } = this.props;
    this.applyTheme(palette);
  }

  render() {
    const { children } = this.props;
    return (
      <div className='vynl-theming' ref={this.themingContainerRef}>
        {children}
      </div>
    );
  }
}
