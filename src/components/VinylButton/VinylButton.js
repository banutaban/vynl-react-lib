import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Ripple } from '../Ripple/Ripple';
import './VinylButton.css';
import './VinylButtonContained.css';
import './VinylButtonOutline.css';
import './VinylButtonGhost.css';
import './VinylButtonFab.css';
import './VinylButtonOnlyIcon.css';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

export const VinylButton = ({ children, size = 'medium', disabled, kind, loading, hasError }) => {
  const cssNameArray = [
    'vinyl-button',
    size,
    kind,
    loading ? 'loading' : '',
    hasError ? 'has-error' : '',
  ];
  return (
    <Ripple disabled={disabled || hasError}>
      <button className={cssNameArray.join(' ')} disabled={disabled}>
        {loading && (
          <div className='loading-spinner'>
            <FontAwesomeIcon icon='spinner' />
          </div>
        )}
        {!loading && children}
      </button>
    </Ripple>
  );
};
