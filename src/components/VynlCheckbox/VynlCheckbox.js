import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './VynlCheckbox.css';

library.add(faCheck);


export class VynlCheckbox extends Component {
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
    return this.state.selected ? 'vynl-checkbox active' : 'vynl-checkbox'; 
  }

 /*  readOnly() {
    this.setState({
      disabled: !this.state.disabled,
    });
  }


  getClassName() {
    return this.state.disabled ? 'vynl-checkbox disabled' : 'vynl-checkbox'; 
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
