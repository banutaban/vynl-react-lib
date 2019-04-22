import React from 'react';
import '../font.css';
import { storiesOf } from '@storybook/react';
import { VinylInput } from './VinylInput';
import { FormField } from '../FormField/FormField';
import { VinylTheming } from '../VinylTheming/VinylTheming';
import { VinylHint } from '../VinylHint/VinylHint';
import { VinylError } from '../VinylError/VinylError';
import { VinylLabel } from '../VinylLabel/VinylLabel';
import { VinylContainer } from '../VinylContainer/VinylContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { VinylButton } from '../VinylButton/VinylButton';
import { VinylCell, VinylGrid } from '../VinylGrid/VinylGrid';
library.add(faHeart);

storiesOf('VinylInput', module)
  .add('Input Default', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-input'>Input Default</div>
        <VinylGrid>
          <VinylCell span={5}>
            <FormField>
              <VinylLabel>Label</VinylLabel>
              <VinylHint>Optional</VinylHint>

              <VinylInput
                type='text'
                placeholder='email address'
                autoFocus=''
                autoComplete=''
                name='email'
              />
              <VinylError>This is an error message!</VinylError>
            </FormField>

            <FormField hasError={true}>
              <VinylLabel>Label</VinylLabel>
              <VinylHint>Optional</VinylHint>

              <VinylInput
                type='text'
                placeholder='email address'
                autoFocus=''
                autoComplete=''
                name='email'
              />
              <VinylError>This is an error message!</VinylError>
            </FormField>

            <FormField>
              <VinylLabel>Label</VinylLabel>
              <VinylHint>Optional</VinylHint>
              <VinylInput
                type='password'
                placeholder='password'
                autoFocus=''
                autoComplete=''
                name='password'
              />
            </FormField>

            <FormField>
              <VinylLabel>Label</VinylLabel>
              <VinylHint>Optional</VinylHint>
              <VinylInput
                type='text'
                placeholder='password'
                autoFocus=''
                autoComplete=''
                name='email'
                disabled={true}
              />
            </FormField>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ))

  .add('Input with Icon', () => (
    <VinylTheming>
      <VinylContainer>
        <div className='headline-input'>Input with Icon</div>
        <VinylGrid>
          <VinylCell span={5}>
            <FormField hasError={true}>
              <VinylLabel>Label</VinylLabel>
              <VinylHint>Optional</VinylHint>

              <VinylInput
                type='text'
                placeholder='email address'
                autoFocus=''
                autoComplete=''
                name='email'>
                <FontAwesomeIcon icon='heart' />
                <VinylButton size='medium' kind='onlyicon'>
                  <FontAwesomeIcon icon='heart' />
                </VinylButton>
              </VinylInput>

              <VinylError>This is an error message!</VinylError>
            </FormField>

            <FormField>
              <VinylLabel>Label</VinylLabel>
              <VinylHint>Optional</VinylHint>

              <VinylInput
                type='text'
                placeholder='email address'
                autoFocus=''
                autoComplete=''
                name='email'>
                <FontAwesomeIcon icon='heart' />
                <VinylButton size='medium' kind='onlyicon'>
                  <FontAwesomeIcon icon='heart' />
                </VinylButton>
              </VinylInput>

              <VinylError>This is an error message!</VinylError>
            </FormField>
          </VinylCell>
        </VinylGrid>
      </VinylContainer>
    </VinylTheming>
  ));
