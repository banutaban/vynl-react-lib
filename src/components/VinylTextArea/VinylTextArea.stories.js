import React from 'react';
import '../font.css';
import { storiesOf } from '@storybook/react';
import { VinylTextArea } from './VinylTextArea';
import { FormField } from '../FormField/FormField';
import { VinylTheming } from '../VinylTheming/VinylTheming';
import { VinylHint } from '../VinylHint/VinylHint';
import { VinylError } from '../VinylError/VinylError';
import { VinylLabel } from '../VinylLabel/VinylLabel';
import { VinylContainer } from '../VinylContainer/VinylContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import { VinylButton } from '../VinylButton/VinylButton';
library.add(faHeart);
library.add(faAnchor);

storiesOf('VinylTextArea', module).add('TextArea Default', () => (
  <VinylTheming>
    <VinylContainer>
      <div className='headline-input'>Input Default</div>
      <FormField>
        <VinylLabel>Label</VinylLabel>
        <VinylHint>Optional</VinylHint>

        <VinylTextArea
          type='text'
          placeholder='Write your text'
          autoFocus=''
          autoComplete=''
          name='email'
        />
        <VinylError>This is an error message!</VinylError>
      </FormField>

      <FormField hasError={true}>
        <VinylLabel>Label</VinylLabel>
        <VinylHint>Optional</VinylHint>

        <VinylTextArea
          type='text'
          placeholder='Write your text'
          autoFocus=''
          autoComplete=''
          name='email'
        />
        <VinylError>This is an error message!</VinylError>
      </FormField>

      <FormField hasError={true}>
        <VinylLabel>Label</VinylLabel>
        <VinylHint>Optional</VinylHint>

        <VinylTextArea
          type='text'
          placeholder='Write your text'
          autoFocus=''
          autoComplete=''
          name='email'>
          <VinylButton size='medium' kind='onlyicon'>
            <FontAwesomeIcon icon='heart' />
          </VinylButton>
          <VinylButton size='medium' kind='onlyicon'>
            <FontAwesomeIcon icon='anchor' />
          </VinylButton>
        </VinylTextArea>
        <VinylError>This is an error message!</VinylError>
      </FormField>

      <FormField>
        <VinylLabel>Label</VinylLabel>
        <VinylHint>Optional</VinylHint>

        <VinylTextArea
          type='text'
          placeholder='Write your text'
          autoFocus=''
          autoComplete=''
          name='email'>
          <VinylButton size='medium' kind='onlyicon'>
            <FontAwesomeIcon icon='heart' />
          </VinylButton>
          <VinylButton size='medium' kind='onlyicon'>
            <FontAwesomeIcon icon='anchor' />
          </VinylButton>
        </VinylTextArea>
        <VinylError>This is an error message!</VinylError>
      </FormField>

      <FormField>
        <VinylLabel>Label</VinylLabel>
        <VinylHint>Optional</VinylHint>

        <VinylTextArea
          type='text'
          placeholder='Write your text'
          autoFocus=''
          autoComplete=''
          disabled={true}
          name='email'>
          <VinylButton size='medium' kind='onlyicon'>
            <FontAwesomeIcon icon='heart' />
          </VinylButton>
          <VinylButton size='medium' kind='onlyicon'>
            <FontAwesomeIcon icon='anchor' />
          </VinylButton>
        </VinylTextArea>
        <VinylError>This is an error message!</VinylError>
      </FormField>
    </VinylContainer>
  </VinylTheming>
));
