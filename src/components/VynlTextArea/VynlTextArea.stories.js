import React from 'react';

import { storiesOf } from '@storybook/react';
import { VynlTextArea } from './VynlTextArea';
import { FormField } from '../FormField/FormField';
import { VynlTheming } from '../VynlTheming/VynlTheming';
import { VynlHint } from '../VynlHint/VynlHint';
import { VynlError } from '../VynlError/VynlError';
import { VynlLabel } from '../VynlLabel/VynlLabel';
import { VynlContainer } from '../VynlContainer/VynlContainer';
import '../font.css';

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

          <VynlTextArea
            type='text'
            placeholder='email address'
            autoFocus=''
            autoComplete=''
            name='email'
          />
          <VynlError>This is an error message!</VynlError>
        </FormField>
      </VynlContainer>
    </VynlTheming>
  ));
