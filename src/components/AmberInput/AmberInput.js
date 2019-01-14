import './AmberInput.css';
import React, { Component } from 'react';
import { AmberLabel } from '../AmberLabel/AmberLabel';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner);



export class AmberInput extends Component {
  constructor() {
    super();
    this.state = { focus: false, value: ''};
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

  generateClassname(disabled) {
    const classNamearray=["amber-input-wrapper"]
    if (this.state.focus) {
      classNamearray.push("focus");
    }
    if (disabled) {classNamearray.push("disabled")};
    return classNamearray.join(' ');
    
  }

  render() {
    const {
      children,
      placeholder,
      disabled,
      onFocus,
      onBlur,
      onChange,
      externalLabel,
      ...props
    } = this.props;
    return (
      <div className={this.generateClassname(disabled)}>
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
            disabled={disabled}
            {...props}
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


