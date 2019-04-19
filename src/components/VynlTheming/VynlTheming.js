import React, { Component, createRef } from 'react';
import { applyTheme } from './VynlThemingUtils';
import { defaultColorPalette, thememingConfig } from './VynlThemingData';
import './VynlTheming.css';

export class VynlTheming extends Component {
  constructor(props) {
    super(props);
    this.themingContainerRef = createRef();
  }

  componentDidMount() {
    const { palette = defaultColorPalette, inverse = false } = this.props;
    applyTheme(this.themingContainerRef, palette, thememingConfig, inverse);
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
