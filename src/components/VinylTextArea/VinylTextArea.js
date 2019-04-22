import './VinylTextArea.css';
import React, { useState } from 'react';

export const VinylTextArea = ({
  value = '',
  children,
  placeholder,
  onFocus,
  onBlur,
  onChange,
  disabled,
  hasError = false,
  autoGrow = true,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [textValue, setTextValue] = useState(value);

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
    setTextValue(e.target.value);
    if (autoGrow) {
      e.target.style.cssText = 'height:auto;';
      e.target.style.cssText = 'height:' + e.target.scrollHeight + 'px';
    }
  };

  const generateClassname = disabled => {
    const classNames = ['vinyl-textarea'];
    if (focus) {
      classNames.push('focus');
    }
    if (textValue !== '') {
      classNames.push('filled');
    }
    if (hasError) {
      classNames.push('error');
    }
    if (autoGrow) {
      classNames.push('auto-grow');
    }
    if (disabled) {
      classNames.push('disabled');
    }
    return classNames.join(' ');
  };

  const getChildrenClone = () => {
    return React.Children.map(children, child => React.cloneElement(child, { disabled, hasError }));
  };

  return (
    <div className={generateClassname(disabled)}>
      <textarea
        {...props}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={textValue}
      />
      {React.Children.count(children) > 0 && (
        <div className='vinyl-textarea-actions'>{getChildrenClone()}</div>
      )}
    </div>
  );
};
