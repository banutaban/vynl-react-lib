import './AmberTextArea.css';
import React, { Component } from 'react';
import { AmberLabel } from '../AmberLabel/AmberLabel';

export class AmberTextArea extends Component {
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
    
    render() {
      const {
        children,
        placeholder,
        onFocus,
        onBlur,
        onChange,
        disabled,
        ...props
      } = this.props;

      return (
        <div className={this.state.focus ? 'amber-text-area focus' : 'amber-text-area'}>
          <textarea
          disabled= {disabled}
          placeholder= {placeholder}
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
              {...props}
              >
              {children}
          

            </textarea>
           
          </div>
      );
    }
}

