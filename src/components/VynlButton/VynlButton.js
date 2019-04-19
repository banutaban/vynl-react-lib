import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Ripple } from '../Ripple/Ripple';
import './VynlButton.css';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

const renderLoading = () => {
  return (
    <div className='loading-spinner'>
      <FontAwesomeIcon icon='spinner' />
    </div>
  );
};
export const VynlButton = ({
  children,
  size = 'medium',
  disabled,
  kind,
  loading,
}) => {
  const cssNameArray = ['vynl-button', size, kind, loading ? 'loading' : ''];
  return (
    <Ripple>
      <button className={cssNameArray.join(' ')} disabled={disabled}>
        {loading ? renderLoading() : children}
      </button>
    </Ripple>
  );
};
