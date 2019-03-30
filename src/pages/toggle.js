import React from 'react';
import { VynlRadio } from '../components/VynlRadio/VynlRadio';
import { VynlCheckbox } from '../components/VynlCheckbox/VynlCheckbox';


export const Toggle = () => {
  return (
    <div>
      <div className='page-intro'>
        <div className='headline-02'>Toggles</div>

        <div className='paragraph'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>
      <div className='page-section'>
        <div className='headline-04-primary'>Radio</div>
        <VynlRadio />
      </div>
      <div className='page-section'>
        <div className='headline-04-primary'>Checkbox</div>
        <VynlCheckbox/>
      </div>
    
      <div className='page-section'>
        <div className='headline-04-primary'>Checkbox Disabled</div>
        <VynlCheckbox disabled={true}/>
      </div>
    </div>
  );
};
