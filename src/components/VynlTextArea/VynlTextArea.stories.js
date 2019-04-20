import React from 'react';
import '../font.css';
import { storiesOf } from '@storybook/react';
import { VynlTextArea } from './VynlTextArea';
import { FormField } from '../FormField/FormField';
import { VynlTheming } from '../VynlTheming/VynlTheming';
import { VynlHint } from '../VynlHint/VynlHint';
import { VynlError } from '../VynlError/VynlError';
import { VynlLabel } from '../VynlLabel/VynlLabel';
import { VynlContainer } from '../VynlContainer/VynlContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import { VynlButton } from '../VynlButton/VynlButton';
library.add(faHeart);
library.add(faAnchor);

storiesOf('VynlTextArea', module)
  .add('TextArea Default', () => (
    <VynlTheming>
      <VynlContainer>
        <div className='headline-input'>Input Default</div>
        <FormField>
          <VynlLabel>Label</VynlLabel>
          <VynlHint>Optional</VynlHint>

          <VynlTextArea
            type='text'
            placeholder='Write your text'
            autoFocus=''
            autoComplete=''
            name='email'
          />
          <VynlError>This is an error message!</VynlError>
        </FormField>

        <FormField hasError={true}>
          <VynlLabel>Label</VynlLabel>
          <VynlHint>Optional</VynlHint>

          <VynlTextArea
            type='text'
            placeholder='Write your text'
            autoFocus=''
            autoComplete=''
            name='email'
          />
          <VynlError>This is an error message!</VynlError>
        </FormField>

        <FormField hasError={true}>
          <VynlLabel>Label</VynlLabel>
          <VynlHint>Optional</VynlHint>

          <VynlTextArea
            type='text'
            placeholder='Write your text'
            autoFocus=''
            autoComplete=''
            name='email'
          >
            <VynlButton size='medium' kind='onlyicon'>
              <FontAwesomeIcon icon='heart' />
            </VynlButton>
            <VynlButton size='medium' kind='onlyicon'>
              <FontAwesomeIcon icon='anchor' />
            </VynlButton>
          </VynlTextArea>
          <VynlError>This is an error message!</VynlError>
        </FormField>

        <FormField>
          <VynlLabel>Label</VynlLabel>
          <VynlHint>Optional</VynlHint>

          <VynlTextArea
            type='text'
            placeholder='Write your text'
            autoFocus=''
            autoComplete=''
            name='email'
          >
            <VynlButton size='medium' kind='onlyicon'>
              <FontAwesomeIcon icon='heart' />
            </VynlButton>
            <VynlButton size='medium' kind='onlyicon'>
              <FontAwesomeIcon icon='anchor' />
            </VynlButton>
          </VynlTextArea>
          <VynlError>This is an error message!</VynlError>
        </FormField>

        <FormField>
          <VynlLabel>Label</VynlLabel>
          <VynlHint>Optional</VynlHint>

          <VynlTextArea
            type='text'
            placeholder='Write your text'
            autoFocus=''
            autoComplete=''
            disabled={true}
            name='email'
          >
            <VynlButton size='medium' kind='onlyicon'>
              <FontAwesomeIcon icon='heart' />
            </VynlButton>
            <VynlButton size='medium' kind='onlyicon'>
              <FontAwesomeIcon icon='anchor' />
            </VynlButton>
          </VynlTextArea>
          <VynlError>This is an error message!</VynlError>
        </FormField>
      </VynlContainer>
    </VynlTheming>
  ));
