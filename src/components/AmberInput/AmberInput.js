import './AmberInput.css';
import React, { Component } from 'react';
import { AmberLabel } from '../AmberLabel/AmberLabel';

export class AmberInput extends Component {
  constructor() {
    super();
    this.state = { focus: false, value: '' };
  }

  handleFocus() {
    this.setState({ focus: true });
  }
  handleBlur() {
    this.setState({ focus: false });
  }

  handleOnChange(text) {
    this.setState({ value: text });
  }

  generateLabelClassName() {
    return !this.state.focus && this.state.value === '' ? 'placeholder' : '';
  }

  renderLabel(placeholder, externalLabel) {
      if (!externalLabel) {
         return (
            <AmberLabel className={this.generateLabelClassName()}>
                {placeholder}
            </AmberLabel>
            );
        }
  }

  render() {
    const {
      children,
      placeholder,
      onFocus,
      onBlur,
      onChange,
      externalLabel,
      ...props
    } = this.props;
    return (
      <div className={this.state.focus ? 'amber-input-wrapper focus' : 'amber-input-wrapper'}>
        {placeholder && placeholder !== ''
          ? this.renderLabel(placeholder, externalLabel)
          : undefined}
        <div className='amber-input'>
          <input
           placeholder={externalLabel? placeholder : undefined}
            {...props}
            onChange={e => {
              onChange && onChange(e);
              this.handleOnChange(e.target.value);
            }}
            onFocus={e => {
              onFocus && onFocus(e);
              this.handleFocus();
            }}
            onBlur={e => {
              onBlur && onBlur(e);
              this.handleBlur();
            }}
          />
          {children ? (
            <div className='icon-wrapper'>{children}</div>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}
