import './VynlInput.css';
import React, { Component } from 'react';


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


  generateClassname(disabled) {
    const classNamearray=["vynl-input"]
    if (this.state.focus) {
      classNamearray.push("focus");
    }
    if (this.state.value !== '') {
      classNamearray.push("filled");
    }
    if (disabled) {classNamearray.push("disabled")};
    return classNamearray.join(' ');
    
  }

  render() {
    let {
      children,
      disabled,
      onFocus,
      onBlur,
      onChange,
      ...props
    } = this.props;

    const [first, second] = React.Children.toArray(children);
    const inputClassName = `${first && 'withPrefix'} ${second && 'withSuffix'}`;

    return (
      <div className={this.generateClassname(disabled)}>
        {first && <div className="prefix">{first}</div>}
          <input
            {...props}
            className={inputClassName}
            onChange={(e) => this.handleOnChange(e, onChange)}
            onFocus={(e) => this.handleFocus(e, onFocus)}
            onBlur = {(e)=>this.handleBlur(e, onBlur)}
            disabled={disabled}
            />
        {second && <div className="suffix">{second}</div>}
      </div>
    );
  }
}


