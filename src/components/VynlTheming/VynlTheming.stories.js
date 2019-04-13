import React from 'react';

import { storiesOf } from '@storybook/react';
import { VynlButton } from '../VynlButton/VynlButton';
import { VynlTheming } from './VynlTheming';

const documentPalette = {
  primary: '#ff0000',
  secondary: '#D30B54',
  success: '#0996B3',
  info: '#0B6FD3',
  warning: '#D3800B',
  danger: '#D31C0B',
  grey: '#617D8B',
};

storiesOf('VynlTheming', module)
  .add('Default Theme', () => (
    <VynlTheming>
      <div className='page-section'>
        <div className='headline-04-primary'>Contained Button</div>

        <VynlButton size='small'>Small Button</VynlButton>

        <VynlButton size='small' loading={true} />

        <VynlButton size='small' disabled={true}>
          Small Button
        </VynlButton>

        <VynlButton size='medium'>Medium Button</VynlButton>

        <VynlButton size='medium' loading={true} />

        <VynlButton size='medium' disabled={true}>
          Medium Button
        </VynlButton>

        <VynlButton size='large'>Large Button</VynlButton>

        <VynlButton size='large' loading={true} />

        <VynlButton size='large' disabled={true}>
          Large Button
        </VynlButton>
      </div>
    </VynlTheming>
  ))

  .add('Default Theme Inversed', () => (
    <VynlTheming inverse={true}>
      <div className='page-section'>
        <div className='headline-04-primary'>Contained Button</div>

        <VynlButton size='small'>Small Button</VynlButton>

        <VynlButton size='small' loading={true} />

        <VynlButton size='small' disabled={true}>
          Small Button
        </VynlButton>

        <VynlButton size='medium'>Medium Button</VynlButton>

        <VynlButton size='medium' loading={true} />

        <VynlButton size='medium' disabled={true}>
          Medium Button
        </VynlButton>

        <VynlButton size='large'>Large Button</VynlButton>

        <VynlButton size='large' loading={true} />

        <VynlButton size='large' disabled={true}>
          Large Button
        </VynlButton>
      </div>
    </VynlTheming>
  ))

  .add('Overridden Theme', () => (
    <VynlTheming palette={documentPalette}>
      <div className='page-section'>
        <div className='headline-04-primary'>Contained Button</div>

        <VynlButton size='small'>Small Button</VynlButton>

        <VynlButton size='small' loading={true} />

        <VynlButton size='small' disabled={true}>
          Small Button
        </VynlButton>

        <VynlButton size='medium'>Medium Button</VynlButton>

        <VynlButton size='medium' loading={true} />

        <VynlButton size='medium' disabled={true}>
          Medium Button
        </VynlButton>

        <VynlButton size='large'>Large Button</VynlButton>

        <VynlButton size='large' loading={true} />

        <VynlButton size='large' disabled={true}>
          Large Button
        </VynlButton>
      </div>
    </VynlTheming>
  ))

  .add('Overridden Theme Inversed', () => (
    <VynlTheming palette={documentPalette} inverse={true}>
      <div className='page-section'>
        <div className='headline-04-primary'>Contained Button</div>

        <VynlButton size='small'>Small Button</VynlButton>

        <VynlButton size='small' loading={true} />

        <VynlButton size='small' disabled={true}>
          Small Button
        </VynlButton>

        <VynlButton size='medium'>Medium Button</VynlButton>

        <VynlButton size='medium' loading={true} />

        <VynlButton size='medium' disabled={true}>
          Medium Button
        </VynlButton>

        <VynlButton size='large'>Large Button</VynlButton>

        <VynlButton size='large' loading={true} />

        <VynlButton size='large' disabled={true}>
          Large Button
        </VynlButton>
      </div>
    </VynlTheming>
  ));
