import React from 'react';

export default function SVG(props) {
  const text = "Sorry, your browser does not support this technology!";
  const { onClick, children: c = text, attr, style = {} } = props;
  return (
    <div className="svg" style={style} onClick={onClick}>
      <svg className={attr}>
        {c}
      </svg>
    </div>
  )
}