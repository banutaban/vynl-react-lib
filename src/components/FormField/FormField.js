import React from 'react';
import './FormField.css';

export const FormField = ({ children, hasError = false }) => {
  let input, label, hint, error, link;

  React.Children.forEach(children, child => {
    switch (child.type.name) {
      case 'VinylTextArea':
      case 'VinylInput':
        input = React.cloneElement(child, {hasError});
        break;
      case 'VinylLabel':
        label = React.cloneElement(child, {type: hasError ? 'danger': ''});
        break;
      case 'VinylHint':
        hint = React.cloneElement(child);
        break;
      case 'VinylError':
        error = React.cloneElement(child);
        break;
      case 'VinylLink':
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
