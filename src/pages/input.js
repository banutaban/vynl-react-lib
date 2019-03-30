import React from 'react';
import { VynlInput } from '../components/VynlInput/VynlInput';
import { FormField } from '../components/FormField/FormField';
import { VynlLabel } from '../components/VynlLabel/VynlLabel';
import { VynlButton } from '../components/VynlButton/VynlButton';
import { VynlTextArea } from '../components/VynlTextArea/VynlTextArea';
import './input.css';

/* ICONS */

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFont } from '@fortawesome/free-solid-svg-icons';

/* Too add new icons from the Fontawesome solid free package, copy the name of the selected icon from the FA website and place the name 
with a coma afte the faHeart on the 11th line. Don't forget to place each added icon under the 16th line, 
as the same format at the 16th line. */

library.add(faEye);

export const Input = () => {
  return (
    <div className="inputpage">
      <div className='page-intro'>
        <div className='headline-02'>Input</div>

        <div className='paragraph'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>

      <div className='page-section'>
        <div className='headline-input'>Input Default</div>

        <FormField>
          <VynlInput type='text' placeholder='email address' autoFocus='' autoComplete='' name='email' />
        </FormField>

        <FormField>
          <VynlInput type='password' placeholder='password' autoFocus='' autoComplete='' name='password' />
        </FormField>
      </div>

      <div className='page-section'>
        <div className='headline-04-primary'>Input with Multi Labels</div>

        <FormField>
          <VynlLabel>Set Password</VynlLabel>
          <VynlInput type='text' placeholder='password' autoFocus='' autoComplete='' name='email' />
        </FormField>
      </div>

      <div className='page-section'>
        <div className='headline-input'>Input with Icon</div>

        <FormField>
          <VynlInput type='password' placeholder='password' autoFocus='' autoComplete='' name='email'>
          <VynlButton size='small' kind='onlyicon'>
          <div className='iconwrappers'>
            <FontAwesomeIcon icon='eye' />
          </div>
          </VynlButton>
          </VynlInput>
        </FormField>
      </div>

      <div className='page-section'>
        <div className='headline-input'>Input Disabled</div>

        <FormField>
        <VynlInput type='text' placeholder='password' autoFocus='' autoComplete='' name='email' disabled={true}/>
        </FormField>
      </div>


      <div className='page-section'>
        <div className='headline-input'>Input Loading</div>
        <FormField>
       <VynlInput loading={true}>
       </VynlInput>
        </FormField> 
      </div> 
      

      <div className='page-intro'>
        <div className='headline-02'>Text Area</div>

        <div className='paragraph'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>

      <div className='page-section'>
        <div className='headline-input'>Text Area Default</div>

        <FormField>
          <VynlTextArea type='text' placeholder='Type something' autoFocus='' />
        </FormField>

      </div>

      <div className='page-section'>
        <div className='headline-input'>Text Area with Icon</div>

        <FormField>
          <VynlTextArea type='text' placeholder='Type something' autoFocus='' />
        </FormField>
      </div>

      <div className='page-section'>
        <div className='headline-input'>Text Area Disabled</div>

        <FormField>
          <VynlTextArea type='text' placeholder='Type something' autoFocus={false} disabled={true} />
        </FormField>
      </div>

    </div>
  );
};



