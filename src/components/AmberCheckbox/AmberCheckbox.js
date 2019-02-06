import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './AmberCheckbox.css';

library.add(faCheck);


export class AmberCheckbox extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      disabled: false
    };
  }

  toggleSelected() {
    this.setState({
      selected: !this.state.selected,
    });
  }


  getClassName() {
    return this.state.selected ? 'amber-checkbox active' : 'amber-checkbox'; 
  }

 /*  readOnly() {
    this.setState({
      disabled: !this.state.disabled,
    });
  }


  getClassName() {
    return this.state.disabled ? 'amber-checkbox disabled' : 'amber-checkbox'; 
  } */


  render() {
    const {
      disabled,
      ...props
    } = this.props;
    
    return (
      <div
        disabled={disabled}
        className={this.getClassName()}
        onClick={() => this.toggleSelected()}>
        {this.state.selected ? (
          <div className='inner-icon'>
            <FontAwesomeIcon icon='check' />
          </div>
        ) : (
          undefined
        )}
        
      </div>
    );
  }
}
