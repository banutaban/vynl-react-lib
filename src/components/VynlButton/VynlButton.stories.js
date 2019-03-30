import React from 'react';

import { storiesOf } from '@storybook/react';
import '../../App.css';
import {VynlButton} from './VynlButton';

/* ICONS */

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

/* Too add new icons from the Fontawesome solid free package, copy the name of the selected icon from the FA website and place the name 
with a coma afte the faHeart on the 11th line. Don't forget to place each added icon under the 16th line, 
as the same format at the 16th line. */

library.add(faHeart);

storiesOf('VynlButton', module)
  .add('Contained Button', () => <div className='page-section'>
  <div className='headline-04-primary'>Contained Button</div>

  <VynlButton size='small'>Small Button</VynlButton>

  <VynlButton size='small' loading={true} />

  <VynlButton size='small' disabled={true}>
    Small Button
  </VynlButton>

  <VynlButton size='medium'>Medium Button</VynlButton>

  <VynlButton size='medium' loading={true} />

  <VynlButton size='medium' disabled={true}>
    Medium Button
  </VynlButton>

  <VynlButton size='large'>Large Button</VynlButton>

  <VynlButton size='large' loading={true} />

  <VynlButton size='large' disabled={true}>
    Large Button
  </VynlButton>
</div>)


.add('Outline Button', () => <div className='page-section'>
<div className='headline-04-primary'>Outline Button</div>

<VynlButton size='small' kind='outline'>
  Outline Button S
</VynlButton>

<VynlButton size='small' kind='outline' loading={true} />

<VynlButton size='small' kind='outline' disabled={true}>
  Outline Button S
</VynlButton>

<VynlButton size='medium' kind='outline'>
  Outline Button M
</VynlButton>

<VynlButton size='medium' kind='outline' loading={true} />

<VynlButton size='medium' kind='outline' disabled={true}>
  Outline Button M
</VynlButton>

<VynlButton size='large' kind='outline'>
  Outline Button L
</VynlButton>

<VynlButton size='large' kind='outline' loading={true} />

<VynlButton size='large' kind='outline' disabled={true}>
  Outline Button L
</VynlButton>
</div>)

.add('Ghost Button', () => <div className='page-section'>
<div className='headline-04-primary'>Ghost Button</div>

<VynlButton size='small' kind='ghost'>
  Ghost Button S
</VynlButton>

<VynlButton size='small' kind='ghost' loading={true}>
  Ghost Button S
</VynlButton>

<VynlButton size='small' kind='ghost' disabled={true}>
  Ghost Button S
</VynlButton>

<VynlButton size='medium' kind='ghost'>
  Ghost Button M
</VynlButton>

<VynlButton size='medium' kind='ghost' loading={true}>
  Ghost Button M
</VynlButton>

<VynlButton size='medium' kind='ghost' disabled={true}>
  Ghost Button M
</VynlButton>

<VynlButton size='large' kind='ghost'>
  Ghost Button L
</VynlButton>

<VynlButton size='large' kind='ghost' loading={true}>
  Ghost Button L
</VynlButton>

<VynlButton size='large' kind='ghost' disabled={true}>
  Ghost Button L
</VynlButton>
</div>)

.add('Button with Icn and Label', () => <div className='page-section'>
<div className='headline-04-primary'>Button with Icon and Label</div>

<VynlButton size='small' kind='withicon'>
  <div className='iconwrappers'>
    <FontAwesomeIcon icon='heart' />
  </div>
  <div className='labelwrappers'>With Icon S</div>
</VynlButton>

<VynlButton size='small' kind='withicon' loading={true}>
  <div className='iconwrappers'>
    <FontAwesomeIcon icon='heart' />
  </div>
  <div className='labelwrappers'>With Icon S</div>
</VynlButton>

<VynlButton size='small' kind='withicon' disabled={true}>
  <div className='iconwrappers'>
    <FontAwesomeIcon icon='heart' />
  </div>
  <div className='labelwrappers'>With Icon S</div>
</VynlButton>

<VynlButton size='medium' kind='withicon'>
  <div className='iconwrapperm'>
    <FontAwesomeIcon icon='heart' />
  </div>
  <div className='labelwrapperm'>With Icon M</div>
</VynlButton>

<VynlButton size='medium' kind='withicon' loading={true}>
  <div className='iconwrapperm'>
    <FontAwesomeIcon icon='heart' />
  </div>
  <div className='labelwrapperm'>With Icon M</div>
</VynlButton>

<VynlButton size='medium' kind='withicon' disabled={true}>
  <div className='iconwrapperm'>
    <FontAwesomeIcon icon='heart' />
  </div>
  <div className='labelwrapperm'>With Icon M</div>
</VynlButton>

<VynlButton size='large' kind='withicon'>
  <div className='iconwrapperl'>
    <FontAwesomeIcon icon='heart' />
  </div>
  <div className='labelwrapperl'>With Icon L</div>
</VynlButton>

<VynlButton size='large' kind='withicon' loading={true}>
  <div className='iconwrapperl'>
    <FontAwesomeIcon icon='heart' />
  </div>
  <div className='labelwrapperl'>With Icon L</div>
</VynlButton>

<VynlButton size='large' kind='withicon' disabled={true}>
  <div className='iconwrapperl'>
    <FontAwesomeIcon icon='heart' />
  </div>
  <div className='labelwrapperl'>With Icon L</div>
</VynlButton>
</div>)

.add('FAB', () =>  <div className='page-section'>
<div className='headline-04-primary'>FAB</div>

<VynlButton size='large' kind='fab'>
  <div className='iconwrapperl'>
    <FontAwesomeIcon icon='heart' />
  </div>
</VynlButton>

<VynlButton size='large' kind='fab' disabled={true}>
  <div className='iconwrapperl'>
    <FontAwesomeIcon icon='heart' />
  </div>
</VynlButton>
</div>)

.add('Button with Only Icon', () => <div className='page-section'>
<div className='headline-04-primary'>Button with Only Icon</div>

<VynlButton size='large' kind='onlyicon'>
  <div className='iconwrapperl'>
    <FontAwesomeIcon icon='heart' />
  </div>
</VynlButton>

<VynlButton size='large' kind='onlyicon' disabled={true}>
  <div className='iconwrapperl'>
    <FontAwesomeIcon icon='heart' />
  </div>
</VynlButton>
</div>)

