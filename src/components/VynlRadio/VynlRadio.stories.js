import React from 'react';
import { storiesOf } from '@storybook/react';
import { VynlRadio } from './VynlRadio';
import '../font.css';

storiesOf('VynlRadio', module).add('Radio', () => (
  <div className='page-section'>
    <div className='headline-04-primary'>Radio</div>
    <VynlRadio />
  </div>
));
