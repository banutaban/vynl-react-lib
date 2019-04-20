import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Ripple } from '../Ripple/Ripple';
import './VynlButton.css';
import './VynlButtonContained.css';
import './VynlButtonOutline.css';
import './VynlButtonGhost.css';
import './VynlButtonFab.css';
import './VynlButtonOnlyIcon.css';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

export const VynlButton = ({ children, size = 'medium', disabled, kind, loading, hasError }) => {
  const cssNameArray = [
    'vynl-button',
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
