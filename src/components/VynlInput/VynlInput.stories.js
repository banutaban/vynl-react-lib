import React from 'react';

import { storiesOf } from '@storybook/react';
import '../../App.css';
import {VynlInput} from './VynlInput';
import { FormField } from '../FormField/FormField';
import { VynlLabel } from '../VynlLabel/VynlLabel';
import { VynlButton } from '../VynlButton/VynlButton';
import { VynlTextArea } from '../VynlTextArea/VynlTextArea';


/* ICONS */

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFont } from '@fortawesome/free-solid-svg-icons';

/* Too add new icons from the Fontawesome solid free package, copy the name of the selected icon from the FA website and place the name 
with a coma afte the faHeart on the 11th line. Don't forget to place each added icon under the 16th line, 
as the same format at the 16th line. */

library.add(faEye);

storiesOf('VynlInput', module)
  .add('Input Default', () => <div className='page-section'>
  <div className='headline-input'>Input Default</div>

  <FormField>
    <VynlInput type='text' placeholder='email address' autoFocus='' autoComplete='' name='email' />
  </FormField>

  <FormField>
    <VynlInput type='password' placeholder='password' autoFocus='' autoComplete='' name='password' />
  </FormField>
</div>)

.add('Input with Multi Label', () => <div className='page-section'>
<div className='headline-input'>Input with Multi Label</div>

<FormField>
  <VynlInput type='text' placeholder='email address' autoFocus='' autoComplete='' name='email' />
</FormField>

<FormField>
  <VynlInput type='password' placeholder='password' autoFocus='' autoComplete='' name='password' />
</FormField>
</div>)


.add('Input Disabled', () => <div className='page-section'>
<div className='headline-input'>Input Disabled</div>

<FormField>
<VynlInput type='text' placeholder='password' autoFocus='' autoComplete='' name='email' disabled={true}/>
</FormField>
</div>)


.add('Input Loading', () => <div className='page-section'>
<div className='headline-input'>Input Loading</div>
<FormField>
<VynlInput loading={true}>
</VynlInput>
</FormField> 
</div> )


.add('Text Area', () => <div className='page-section'>
<div className='headline-input'>Text Area Default</div>

<FormField>
  <VynlTextArea type='text' placeholder='Type something' autoFocus='' />
</FormField>

</div>)

.add('Text Area with icon', () => <div className='page-section'>
<div className='headline-input'>Text Area with Icon</div>

<FormField>
  <VynlTextArea type='text' placeholder='Type something' autoFocus='' />
</FormField>
</div>)

.add('Text Area Disabled', () => <div className='page-section'>
<div className='headline-input'>Text Area Disabled</div>

<FormField>
  <VynlTextArea type='text' placeholder='Type something' autoFocus={false} disabled={true} />
</FormField>
</div>)