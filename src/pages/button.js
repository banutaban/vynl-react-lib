import React from 'react';
import { AmberButton } from '../components/AmberButton/AmberButton';
import { AmberButtonGroup } from '../components/AmberButtonGroup/AmberButtonGroup';
import './button.css';

/* ICONS */

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

/* Too add new icons from the Fontawesome solid free package, copy the name of the selected icon from the FA website and place the name 
with a coma afte the faHeart on the 11th line. Don't forget to place each added icon under the 16th line, 
as the same format at the 16th line. */

library.add(faHeart);

export const Button = () => {
  return (
    <div>
      <div className='page-intro'>
        <div className='headline-02'>Button</div>

        <div className='paragraph'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>

      <div className='page-section'>
        <div className='headline-04-primary'>Contained Button</div>

        <AmberButton size='small'>Small Button</AmberButton>

        <AmberButton size='small' loading={true} />

        <AmberButton size='small' disabled={true}>
          Small Button
        </AmberButton>

        <AmberButton size='medium'>Medium Button</AmberButton>

        <AmberButton size='medium' loading={true} />

        <AmberButton size='medium' disabled={true}>
          Medium Button
        </AmberButton>

        <AmberButton size='large'>Large Button</AmberButton>

        <AmberButton size='large' loading={true} />

        <AmberButton size='large' disabled={true}>
          Large Button
        </AmberButton>
      </div>

      <div className='page-section'>
        <div className='headline-04-primary'>Outline Button</div>

        <AmberButton size='small' kind='outline'>
          Outline Button S{' '}
        </AmberButton>

        <AmberButton size='small' kind='outline' loading={true} />

        <AmberButton size='small' kind='outline' disabled={true}>
          Outline Button S
        </AmberButton>

        <AmberButton size='medium' kind='outline'>
          Outline Button M
        </AmberButton>

        <AmberButton size='medium' kind='outline' loading={true} />

        <AmberButton size='medium' kind='outline' disabled={true}>
          Outline Button M
        </AmberButton>

        <AmberButton size='large' kind='outline'>
          Outline Button L
        </AmberButton>

        <AmberButton size='large' kind='outline' loading={true} />

        <AmberButton size='large' kind='outline' disabled={true}>
          Outline Button L
        </AmberButton>
      </div>

      <div className='page-section'>
        <div className='headline-04-primary'>Text Button</div>

        <AmberButton size='small' kind='text'>
          Text Button S
        </AmberButton>

        <AmberButton size='small' kind='text' loading={true}>
          Text Button S
        </AmberButton>

        <AmberButton size='small' kind='text' disabled={true}>
          Text Button S
        </AmberButton>

        <AmberButton size='medium' kind='text'>
          Text Button M
        </AmberButton>

        <AmberButton size='medium' kind='text' loading={true}>
          Text Button M
        </AmberButton>

        <AmberButton size='medium' kind='text' disabled={true}>
          Text Button M
        </AmberButton>

        <AmberButton size='large' kind='text'>
          Text Button L
        </AmberButton>

        <AmberButton size='large' kind='text' loading={true}>
          Text Button L
        </AmberButton>

        <AmberButton size='large' kind='text' disabled={true}>
          Text Button L
        </AmberButton>
      </div>

      <div className='page-section'>
        <div className='headline-04-primary'>Button with Icon and Label</div>

        <AmberButton size='small' kind='withicon'>
          <div className='iconwrappers'>
            <FontAwesomeIcon icon='heart' />
          </div>
          <div className='labelwrappers'>With Icon S</div>
        </AmberButton>

        <AmberButton size='small' kind='withicon' loading={true}>
          <div className='iconwrappers'>
            <FontAwesomeIcon icon='heart' />
          </div>
          <div className='labelwrappers'>With Icon S</div>
        </AmberButton>

        <AmberButton size='small' kind='withicon' disabled={true}>
          <div className='iconwrappers'>
            <FontAwesomeIcon icon='heart' />
          </div>
          <div className='labelwrappers'>With Icon S</div>
        </AmberButton>

        <AmberButton size='medium' kind='withicon'>
          <div className='iconwrapperm'>
            <FontAwesomeIcon icon='heart' />
          </div>
          <div className='labelwrapperm'>With Icon M</div>
        </AmberButton>

        <AmberButton size='medium' kind='withicon' loading={true}>
          <div className='iconwrapperm'>
            <FontAwesomeIcon icon='heart' />
          </div>
          <div className='labelwrapperm'>With Icon M</div>
        </AmberButton>

        <AmberButton size='medium' kind='withicon' disabled={true}>
          <div className='iconwrapperm'>
            <FontAwesomeIcon icon='heart' />
          </div>
          <div className='labelwrapperm'>With Icon M</div>
        </AmberButton>

        <AmberButton size='large' kind='withicon'>
          <div className='iconwrapperl'>
            <FontAwesomeIcon icon='heart' />
          </div>
          <div className='labelwrapperl'>With Icon L</div>
        </AmberButton>

        <AmberButton size='large' kind='withicon' loading={true}>
          <div className='iconwrapperl'>
            <FontAwesomeIcon icon='heart' />
          </div>
          <div className='labelwrapperl'>With Icon L</div>
        </AmberButton>

        <AmberButton size='large' kind='withicon' disabled={true}>
          <div className='iconwrapperl'>
            <FontAwesomeIcon icon='heart' />
          </div>
          <div className='labelwrapperl'>With Icon L</div>
        </AmberButton>
      </div>

      <div className='page-section'>
        <div className='headline-04-primary'>FAB</div>

        <AmberButton size='large' kind='fab'>
          <div className='iconwrapperl'>
            <FontAwesomeIcon icon='heart' />
          </div>
        </AmberButton>

        <AmberButton size='large' kind='fab' disabled={true}>
          <div className='iconwrapperl'>
            <FontAwesomeIcon icon='heart' />
          </div>
        </AmberButton>
      </div>

      <div className='page-section'>
        <div className='headline-04-primary'>Button with Only Icon</div>

        <AmberButton size='large' kind='onlyicon'>
          <div className='iconwrapperl'>
            <FontAwesomeIcon icon='heart' />
          </div>
        </AmberButton>

        <AmberButton size='large' kind='onlyicon' disabled={true}>
          <div className='iconwrapperl'>
            <FontAwesomeIcon icon='heart' />
          </div>
        </AmberButton>
      </div>

      <div className='page-section'>
        <div className='headline-04-primary'>Button Group</div>

        <AmberButtonGroup>
          <AmberButton size='small' kind='text'>
            Bold
          </AmberButton>

          <AmberButton size='small' kind='text'>
            Italic
          </AmberButton>

          <AmberButton size='small' kind='text'>
            Underline
          </AmberButton>
        </AmberButtonGroup>
      </div>
    </div>
  );
};
