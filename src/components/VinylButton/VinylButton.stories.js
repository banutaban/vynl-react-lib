import React from 'react';
import '../font.css';
import { storiesOf } from '@storybook/react';
import { VinylButton } from './VinylButton';
import { VinylTheming } from '../VinylTheming/VinylTheming';
import { VinylContainer } from '../VinylContainer/VinylContainer';
import { VinylCell, VinylGrid } from '../VinylGrid/VinylGrid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart);

storiesOf('VinylButton', module)
  .add('Contained Button', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-04-primary'>Contained Button</div>
        <VinylGrid>
          <VinylCell span={4}>
            <VinylButton size='small'>Small Button</VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' loading={true} />
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' disabled={true}>
              Small Button
            </VinylButton>
          </VinylCell>

          <VinylCell span={4}>
            <VinylButton size='medium'>Medium Button</VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' loading={true} />
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' disabled={true}>
              Medium Button
            </VinylButton>
          </VinylCell>

          <VinylCell span={4}>
            <VinylButton size='large'>Large Button</VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' loading={true} />
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' disabled={true}>
              Large Button
            </VinylButton>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ))

  /* OUTLINE BUTTON */

  .add('Outline Button', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-04-primary'>Outline Button</div>
        <VinylGrid>
          <VinylCell span={4}>
            <VinylButton size='small' kind='outline'>
              Small Button
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' kind='outline' loading={true} />
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' kind='outline' disabled={true}>
              Small Button
            </VinylButton>
          </VinylCell>

          <VinylCell span={4}>
            <VinylButton size='medium' kind='outline'>
              Medium Button
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='outline' loading={true} />
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='outline' disabled={true}>
              Medium Button
            </VinylButton>
          </VinylCell>

          <VinylCell span={4}>
            <VinylButton size='large' kind='outline'>
              Large Button
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='outline' loading={true} />
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='outline' disabled={true}>
              Large Button
            </VinylButton>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ))

  /* GHOST BUTTON */

  .add('Ghost Button', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-04-primary'>Ghost Button</div>
        <VinylGrid>
          <VinylCell span={4}>
            <VinylButton size='small' kind='ghost'>
              Small Button
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' kind='ghost' loading={true} />
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' kind='ghost' disabled={true}>
              Small Button
            </VinylButton>
          </VinylCell>

          <VinylCell span={4}>
            <VinylButton size='medium' kind='ghost'>
              Medium Button
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='ghost' loading={true} />
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='ghost' disabled={true}>
              Medium Button
            </VinylButton>
          </VinylCell>

          <VinylCell span={4}>
            <VinylButton size='large' kind='ghost'>
              Large Button
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='ghost' loading={true} />
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='ghost' disabled={true}>
              Large Button
            </VinylButton>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ))

  /* BUTTON WITH ICON AND LABEL LEFT */

  .add('Icon and Label L', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-04-primary'>Button with Icon and Label</div>
        <VinylGrid>
          <VinylCell span={4}>
            <VinylButton size='small' kind='withicon'>
              <FontAwesomeIcon icon='heart' />
              With Icon S
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' kind='withicon' loading={true}>
              <FontAwesomeIcon icon='heart' />
              With Icon S
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' kind='withicon' disabled={true}>
              <FontAwesomeIcon icon='heart' />
              With Icon S
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='withicon'>
              <FontAwesomeIcon icon='heart' />
              With Icon M
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='withicon' loading={true}>
              <FontAwesomeIcon icon='heart' />
              With Icon M
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='withicon' disabled={true}>
              <FontAwesomeIcon icon='heart' />
              With Icon M
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='withicon'>
              <FontAwesomeIcon icon='heart' />
              With Icon L
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='withicon' loading={true}>
              <FontAwesomeIcon icon='heart' />
              With Icon L
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='withicon' disabled={true}>
              <FontAwesomeIcon icon='heart' />
              With Icon L
            </VinylButton>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ))

  /* BUTTON WITH ICON AND LABEL RIGHT */

  .add('Icon and Label R', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-04-primary'>Button with Icon and Label</div>
        <VinylGrid>
          <VinylCell span={4}>
            <VinylButton size='small' kind='withicon'>
              With Icon S
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' kind='withicon' loading={true}>
              With Icon S
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='small' kind='withicon' disabled={true}>
              With Icon S
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='withicon'>
              With Icon M
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='withicon' loading={true}>
              With Icon M
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='medium' kind='withicon' disabled={true}>
              With Icon M
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='withicon'>
              With Icon L
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='withicon' loading={true}>
              With Icon L
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={4}>
            <VinylButton size='large' kind='withicon' disabled={true}>
              With Icon L
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ))

  /* FAB */

  .add('FAB', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-04-primary'>FAB</div>
        <VinylGrid>
          <VinylCell span={1}>
            <VinylButton size='large' kind='fab'>
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={1}>
            <VinylButton size='large' kind='fab' disabled={true}>
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ))

  /* ONLY ICON */

  .add('Only Icon', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-04-primary'>Button with Only Icon</div>
        <VinylGrid>
          <VinylCell span={1}>
            <VinylButton size='small' kind='onlyicon'>
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={1}>
            <VinylButton size='small' kind='onlyicon' disabled={true}>
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={1}>
            <VinylButton size='medium' kind='onlyicon'>
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={1}>
            <VinylButton size='medium' kind='onlyicon' disabled={true}>
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={1}>
            <VinylButton size='large' kind='onlyicon'>
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
          <VinylCell span={1}>
            <VinylButton size='large' kind='onlyicon' disabled={true}>
              <FontAwesomeIcon icon='heart' />
            </VinylButton>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ))

  /* ONLY ICON + LABEL */

  .add('Only Icon and Label', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-04-primary'>Button with Only Icon and Label</div>
        <VinylGrid>
          <VinylCell span={1}>
            <VinylButton size='medium' kind='onlyicon'>
              <FontAwesomeIcon icon='heart' />
              <div className='labelwrapper'>Button</div>
            </VinylButton>
          </VinylCell>
          <VinylCell span={1}>
            <VinylButton size='medium' kind='onlyicon' disabled={true}>
              <FontAwesomeIcon icon='heart' />
              <div className='labelwrapper'>Button</div>
            </VinylButton>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ));
