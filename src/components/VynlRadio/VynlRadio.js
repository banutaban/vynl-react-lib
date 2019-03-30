import React, { Component } from 'react';

import './VynlRadio.css';

export class VynlRadio extends Component {
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
        className={this.state.selected ? 'vynl-radio active' : 'vynl-radio'}
        onClick={() => this.toggleSelected()}>
        {this.state.selected ? <div className='inner-circle' /> : undefined}
      </div>
    );
  }
}
