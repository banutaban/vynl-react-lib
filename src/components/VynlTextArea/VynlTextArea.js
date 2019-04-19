import './VynlTextArea.css';
import React, { useState } from 'react';

export const VynlTextArea = ({
  children,
  placeholder,
  onFocus,
  onBlur,
  onChange,
  disabled,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = e => {
    onFocus && onFocus(e);
    setFocus(true);
  };

  const handleBlur = e => {
    onBlur && onBlur(e);
    setFocus(false);
  };

  const handleOnChange = e => {
    onChange && onChange(e);
    setValue(e.target.value);
  };

  return (
    <div className={focus ? 'vynl-text-area focus' : 'vynl-text-area'}>
      <textarea
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}>
        {children}
      </textarea>
    </div>
  );
};
