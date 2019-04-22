import React from 'react';
import '../font.css';
import { storiesOf } from '@storybook/react';
import { VinylCheckbox } from './VinylCheckbox';

storiesOf('VinylCheckbox', module)
  .add('Checkbox', () => (
    <div className='page-section'>
      <div className='headline-04-primary'>Checkbox</div>
      <VinylCheckbox />
    </div>
  ))

  .add('Checkbox Disabled', () => (
    <div className='page-section'>
      <div className='headline-04-primary'>Checkbox Disabled</div>
      <VinylCheckbox disabled={true} />
    </div>
  ));
