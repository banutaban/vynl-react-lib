import React from 'react';

import { storiesOf } from '@storybook/react';
import { VynlCheckbox } from './VynlCheckbox';

storiesOf('VynlCheckbox', module)
  .add('Checkbox', () => (
    <div className='page-section'>
      <div className='headline-04-primary'>Checkbox</div>
      <VynlCheckbox />
    </div>
  ))

  .add('Checkbox Disabled', () => (
    <div className='page-section'>
      <div className='headline-04-primary'>Checkbox Disabled</div>
      <VynlCheckbox disabled={true} />
    </div>
  ));
