import React from 'react';
import Icon from './Icon';

export default function Spinner(props) {
  return (
    <Icon
      name="donut_large"
      className="fa-spin"
      style={{
        animationDuration: '.45s',
        ...props.style
      }}
      {...props}
    />
  )
}