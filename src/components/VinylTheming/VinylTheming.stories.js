import React from 'react';
import '../font.css';
import { storiesOf } from '@storybook/react';
import { VinylButton } from '../VinylButton/VinylButton';
import { VinylTheming } from './VinylTheming';
import { VinylContainer } from '../VinylContainer/VinylContainer';

const documentPalette = {
  primary: '#ff0000',
  secondary: '#D30B54',
  success: '#0996B3',
  info: '#0B6FD3',
  warning: '#D3800B',
  danger: '#D31C0B',
  grey: '#617D8B',
};

storiesOf('VinylTheming', module)
  .add('Default Theme', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-04-primary'>Contained Button</div>

        <VinylButton size='small'>Small Button</VinylButton>

        <VinylButton size='small' loading={true} />

        <VinylButton size='small' disabled={true}>
          Small Button
        </VinylButton>

        <VinylButton size='medium'>Medium Button</VinylButton>

        <VinylButton size='medium' loading={true} />

        <VinylButton size='medium' disabled={true}>
          Medium Button
        </VinylButton>

        <VinylButton size='large'>Large Button</VinylButton>

        <VinylButton size='large' loading={true} />

        <VinylButton size='large' disabled={true}>
          Large Button
        </VinylButton>
      </VinylContainer>
    </VinylTheming>
  ))

  .add('Default Theme Inversed', () => (
    <VinylTheming inverse={true}>
      <VinylContainer>
        <div className='headline-04-primary'>Contained Button</div>

        <VinylButton size='small'>Small Button</VinylButton>

        <VinylButton size='small' loading={true} />

        <VinylButton size='small' disabled={true}>
          Small Button
        </VinylButton>

        <VinylButton size='medium'>Medium Button</VinylButton>

        <VinylButton size='medium' loading={true} />

        <VinylButton size='medium' disabled={true}>
          Medium Button
        </VinylButton>

        <VinylButton size='large'>Large Button</VinylButton>

        <VinylButton size='large' loading={true} />

        <VinylButton size='large' disabled={true}>
          Large Button
        </VinylButton>
      </VinylContainer>
    </VinylTheming>
  ))

  .add('Overridden Theme', () => (
    <VinylTheming palette={documentPalette}>
      <VinylContainer>
        <div className='headline-04-primary'>Contained Button</div>

        <VinylButton size='small'>Small Button</VinylButton>

        <VinylButton size='small' loading={true} />

        <VinylButton size='small' disabled={true}>
          Small Button
        </VinylButton>

        <VinylButton size='medium'>Medium Button</VinylButton>

        <VinylButton size='medium' loading={true} />

        <VinylButton size='medium' disabled={true}>
          Medium Button
        </VinylButton>

        <VinylButton size='large'>Large Button</VinylButton>

        <VinylButton size='large' loading={true} />

        <VinylButton size='large' disabled={true}>
          Large Button
        </VinylButton>
      </VinylContainer>
    </VinylTheming>
  ))

  .add('Overridden Theme Inversed', () => (
    <VinylTheming palette={documentPalette} inverse={true}>
      <VinylContainer>
        <div className='headline-04-primary'>Contained Button</div>

        <VinylButton size='small'>Small Button</VinylButton>

        <VinylButton size='small' loading={true} />

        <VinylButton size='small' disabled={true}>
          Small Button
        </VinylButton>

        <VinylButton size='medium'>Medium Button</VinylButton>

        <VinylButton size='medium' loading={true} />

        <VinylButton size='medium' disabled={true}>
          Medium Button
        </VinylButton>

        <VinylButton size='large'>Large Button</VinylButton>

        <VinylButton size='large' loading={true} />

        <VinylButton size='large' disabled={true}>
          Large Button
        </VinylButton>
      </VinylContainer>
    </VinylTheming>
  ));
