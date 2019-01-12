import React, { Component } from 'react';

import './AmberRadio.css';

export class AmberRadio extends Component {
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
        className={this.state.selected ? 'amber-radio active' : 'amber-radio'}
        onClick={() => this.toggleSelected()}>
        {this.state.selected ? <div className='inner-circle' /> : undefined}
      </div>
    );
  }
}
