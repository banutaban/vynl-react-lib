import React, { useState, Fragment } from 'react';
import './Ripple.css';

export const Ripple = ({ children }) => {
  const initialOpacity = 0.1;
  let timer;
  const [animating, setAnimating] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [size, setSize] = useState(0);
  const [opacity, setOpacity] = useState(initialOpacity);

  const handleOnPointerUp = e => {
    e.persist();
    const box = e.target.getBoundingClientRect();
    resetPosition(e.clientX - box.x, e.clientY - box.y);
    setTimeout(() => {
      setAnimating(true);
    }, 10);
    setTimeout(() => {
      setSize(2 * Math.max(box.width, box.height));
      setOpacity(0);
    }, 20);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      resetPosition(0, 0);
    }, 700);
  };

  const resetPosition = (x, y) => {
    setLeft(x);
    setTop(y);
    setSize(0);
    setOpacity(initialOpacity);
    setAnimating(false);
  };

  const getChildClassName = childClassName => {
    const classNames = (childClassName && childClassName.split(' ')) || [];
    classNames.push('ripple-target');
    return classNames.join(' ');
  };

  const child = React.Children.only(children);

  return React.cloneElement(
    child,
    {
      ...child.props,
      className: getChildClassName(child.props.className),
      onPointerUp: e => {
        child.props.onPointerUp && child.props.onPointerUp(e);
        handleOnPointerUp(e);
      },
    },
    <Fragment>
      <div className='ripple-effect-container'>
        <div
          className={animating ? 'ripple-effect animating' : 'ripple-effect'}
          style={{
            top,
            left,
            width: size,
            height: size,
            opacity,
          }}
        />
      </div>
      {child.props.children}
    </Fragment>,
  );
};
