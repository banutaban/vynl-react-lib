import './VynlInput.css';
import React, { Component } from 'react';
import { VynlLabel } from '../VynlLabel/VynlLabel';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner);



export class VynlInput extends Component {
  constructor() {
    super();
    this.state = { focus: false, value: ''};
  }

  handleFocus = (e, onFocus) => {
    if(onFocus) {
      onFocus(e)
    }

    this.setState({ focus: true });
  }

  handleBlur = (e, onBlur) => {
    if (onBlur) {
      onBlur(e)
    }

    this.setState({ focus: false });
  }

  handleOnChange = (e, onChange) => {
    if(onChange) {
      onChange(e)
    }
    this.setState({ value: e.target.value });
  }

  generateLabelClassName() {
    return !this.state.focus && this.state.value === '' ? 'placeholder' : '';
  }

  renderLabel(placeholder, externalLabel) {
    if(placeholder && placeholder !== '') {
    if (!externalLabel) {
       return (
          <VynlLabel className={this.generateLabelClassName()}>
              {placeholder}
          </VynlLabel>
          );
      }
    }
}

  generateClassname(disabled) {
    const classNamearray=["vynl-input-wrapper"]
    if (this.state.focus) {
      classNamearray.push("focus");
    }
    if (disabled) {classNamearray.push("disabled")};
    return classNamearray.join(' ');
    
  }

  renderIcon (loading, children) {
    if (loading) {
      return <div className='icon-wrapper loading'><FontAwesomeIcon icon='spinner'></FontAwesomeIcon></div>;
    } else if (children) {
      return <div className='icon-wrapper'>{children}</div>;
    }
  }

  render() {
    let {
      children,
      placeholder,
      disabled,
      onFocus,
      onBlur,
      onChange,
      externalLabel,
      loading,
      ...props
    } = this.props;
    
    const inlinePlaceholder = externalLabel ? placeholder : undefined
    disabled = loading ? true : disabled

    return (
      <div className={this.generateClassname(disabled)}>
        {this.renderLabel(placeholder, externalLabel)} 
        <div className='vynl-input'>
          <input
            placeholder={inlinePlaceholder}
            {...props}
            onChange={(e) => this.handleOnChange(e, onChange)}
            onFocus={(e) => this.handleFocus(e, onFocus)}
            onBlur = {(e)=>this.handleBlur(e, onBlur)}
            disabled={disabled}
          />
         {this.renderIcon(loading,children)}
        </div>
      </div>
    );
  }
}


