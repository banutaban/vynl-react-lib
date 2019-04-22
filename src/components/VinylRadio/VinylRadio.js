import React, { Component } from 'react';

import './VinylRadio.css';

export class VinylRadio extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
    };
  }

  toggleSelected() {
    this.setState({
      selected: !this.state.selected,
    });
  }

  render() {
    return (
      <div
        className={this.state.selected ? 'vinyl-radio active' : 'vinyl-radio'}
        onClick={() => this.toggleSelected()}>
        {this.state.selected ? <div className='inner-circle' /> : undefined}
      </div>
    );
  }
}
