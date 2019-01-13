import React, { Component, Fragment } from 'react';
import './Ripple.css';

export class Ripple extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      x: 0,
      y: 0,
      size: 0,
    };
  }

  handleOnPointerUp = e => {
    e.persist();
    const box = e.target.getBoundingClientRect();
    this.resetPosition(e.clientX - box.x, e.clientY - box.y);
    setTimeout(() => {
      this.setState({
        animating: true,
      });
    }, 10);
    setTimeout(() => {
      this.setState({
        size: 2 * Math.max(box.width, box.height),
        opacity: 0,
      });
    }, 20);
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.resetPosition(0, 0);
    }, 700);
  };

  resetPosition(x, y) {
    this.setState({
      x,
      y,
      size: 0,
      opacity: 1,
      animating: false,
    });
  }

  getChildClassName(childClassName) {
    const cName = (childClassName && childClassName.split(' ')) || [];
    cName.push('ripple-target');
    return cName.join(' ');
  }

  render() {
    const child = React.Children.only(this.props.children);
    return React.cloneElement(
      child,
      {
        ...child.props,
        className: this.getChildClassName(child.props.className),
        onPointerUp: e => {
          child.props.onPointerUp && child.props.onPointerUp(e);
          this.handleOnPointerUp(e);
        },
      },
      <Fragment>
        <div className='ripple-effect-container'>
          <div
            className={this.state.animating ? 'ripple-effect animating': 'ripple-effect'}
            style={{
              top: this.state.y,
              left: this.state.x,
              width: this.state.size,
              height: this.state.size,
              opacity: this.state.opacity
            }}
          />
        </div>
        {child.props.children}
      </Fragment>
    );
  }
}
