import React, { useState } from 'react';
import './VinylInput.css';

export const VinylInput = ({
  children,
  disabled,
  onFocus,
  onBlur,
  onChange,
  hasError = false,
  ...props
}) => {
  const [first, second] = React.Children.toArray(children).map(child =>
    React.cloneElement(child, { hasError }),
  );
  const inputClassName = `${first && 'withPrefix'} ${second && 'withSuffix'}`;

  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = (e, onFocus) => {
    if (onFocus) {
      onFocus(e);
    }

    setFocus(true);
  };

  const handleBlur = (e, onBlur) => {
    if (onBlur) {
      onBlur(e);
    }

    setFocus(false);
  };

  const handleOnChange = (e, onChange) => {
    if (onChange) {
      onChange(e);
    }
    setValue(e.target.value);
  };

  const generateClassname = disabled => {
    const classNames = ['vinyl-input'];
    if (focus) {
      classNames.push('focus');
    }
    if (value !== '') {
      classNames.push('filled');
    }
    if (hasError) {
      classNames.push('error');
    }
    if (disabled) {
      classNames.push('disabled');
    }
    return classNames.join(' ');
  };

  return (
    <div className={generateClassname(disabled)}>
      {first && <div className='prefix'>{first}</div>}
      <input
        {...props}
        className={inputClassName}
        onChange={handleOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
      />
      {second && <div className='suffix'>{second}</div>}
    </div>
  );
};
