import React, { Component, createRef } from 'react';
import { applyTheme } from './VinylThemingUtils';
import { defaultColorPalette, defaultTextColorPalette, themingConfig } from './VinylThemingData';
import './VinylTheming.css';

export class VinylTheming extends Component {
  constructor(props) {
    super(props);
    this.themingContainerRef = createRef();
  }

  componentDidMount() {
    const {
      palette = defaultColorPalette,
      textPalette = defaultTextColorPalette,
      inverse = false,
    } = this.props;
    applyTheme(this.themingContainerRef, palette, textPalette, themingConfig, inverse);
  }

  render() {
    const { children } = this.props;
    return (
      <div className='vinyl-theming' ref={this.themingContainerRef}>
        {children}
      </div>
    );
  }
}
