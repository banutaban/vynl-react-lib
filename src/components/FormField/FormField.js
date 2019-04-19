import React from 'react';
import './FormField.css';

export const FormField = ({ children, hasError }) => {
  let input, label, hint, error, link;

  React.Children.forEach(children, (child, index) => {
    switch (child.type.name) {
      case 'VynlInput':
        input = React.cloneElement(child);
        break;
      case 'VynlLabel':
        label = React.cloneElement(child);
        break;
      case 'VynlHint':
        hint = React.cloneElement(child);
        break;
      case 'VynlError':
        error = React.cloneElement(child);
        break;
      case 'VynlLink':
        link = React.cloneElement(child);
        break;
    }
  });
  return (
    <div className='form-field'>
      {(label || hint) && (
        <div className='form-field-header'>
          {label}
          {hint}
        </div>
      )}
      {input && <div className='form-field-body'>{input}</div>}
      {hasError && error && <div className='form-field-error'>{error}</div>}
      {link && <div className='form-field-footer'>{link}</div>}
    </div>
  );
};
