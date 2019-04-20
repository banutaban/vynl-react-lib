import React from 'react';
import '../font.css';
import { storiesOf } from '@storybook/react';
import { VynlInput } from './VynlInput';
import { FormField } from '../FormField/FormField';
import { VynlTheming } from '../VynlTheming/VynlTheming';
import { VynlHint } from '../VynlHint/VynlHint';
import { VynlError } from '../VynlError/VynlError';
import { VynlLabel } from '../VynlLabel/VynlLabel';
import { VynlContainer } from '../VynlContainer/VynlContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { VynlButton } from '../VynlButton/VynlButton';
import { VynlCell, VynlGrid } from '../VynlGrid/VynlGrid';
library.add(faHeart);

storiesOf('VynlInput', module)
  .add('Input Default', () => (
    <VynlTheming>
      <VynlContainer>
        <div className='headline-input'>Input Default</div>
        <VynlGrid>
          <VynlCell span={5}>
            <FormField>
              <VynlLabel>Label</VynlLabel>
              <VynlHint>Optional</VynlHint>

              <VynlInput
                type='text'
                placeholder='email address'
                autoFocus=''
                autoComplete=''
                name='email'
              />
              <VynlError>This is an error message!</VynlError>
            </FormField>

            <FormField hasError={true}>
              <VynlLabel>Label</VynlLabel>
              <VynlHint>Optional</VynlHint>

              <VynlInput
                type='text'
                placeholder='email address'
                autoFocus=''
                autoComplete=''
                name='email'
              />
              <VynlError>This is an error message!</VynlError>
            </FormField>

            <FormField>
              <VynlLabel>Label</VynlLabel>
              <VynlHint>Optional</VynlHint>
              <VynlInput
                type='password'
                placeholder='password'
                autoFocus=''
                autoComplete=''
                name='password'
              />
            </FormField>

            <FormField>
              <VynlLabel>Label</VynlLabel>
              <VynlHint>Optional</VynlHint>
              <VynlInput
                type='text'
                placeholder='password'
                autoFocus=''
                autoComplete=''
                name='email'
                disabled={true}
              />
            </FormField>
          </VynlCell>
        </VynlGrid>
      </VynlContainer>
    </VynlTheming>
  ))

  .add('Input with Icon', () => (
    <VynlTheming>
      <VynlContainer>
        <div className='headline-input'>Input with Icon</div>
        <VynlGrid>
          <VynlCell span={5}>
            <FormField hasError={true}>
              <VynlLabel>Label</VynlLabel>
              <VynlHint>Optional</VynlHint>

              <VynlInput
                type='text'
                placeholder='email address'
                autoFocus=''
                autoComplete=''
                name='email'>
                <FontAwesomeIcon icon='heart' />
                <VynlButton size='medium' kind='onlyicon'>
                  <FontAwesomeIcon icon='heart' />
                </VynlButton>
              </VynlInput>

              <VynlError>This is an error message!</VynlError>
            </FormField>

            <FormField>
              <VynlLabel>Label</VynlLabel>
              <VynlHint>Optional</VynlHint>

              <VynlInput
                type='text'
                placeholder='email address'
                autoFocus=''
                autoComplete=''
                name='email'>
                <FontAwesomeIcon icon='heart' />
                <VynlButton size='medium' kind='onlyicon'>
                  <FontAwesomeIcon icon='heart' />
                </VynlButton>
              </VynlInput>

              <VynlError>This is an error message!</VynlError>
            </FormField>
          </VynlCell>
        </VynlGrid>
      </VynlContainer>
    </VynlTheming>
  ));
