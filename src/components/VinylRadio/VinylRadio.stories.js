import React from 'react';
import { storiesOf } from '@storybook/react';
import { VinylRadio } from './VinylRadio';
import '../font.css';

storiesOf('VinylRadio', module).add('Radio', () => (
  <div className='page-section'>
    <div className='headline-04-primary'>Radio</div>
    <VinylRadio />
  </div>
));
