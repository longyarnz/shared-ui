import React from 'react';
// import AsyncLoader from './AsyncLoader';

export default function Authentication(props) {
  const clickButton = () => {
    props.dispatch({
      type: 'CHANGE VIEW',
      payload: './Timeline',
    })
  };

  return (
    <div>
      <button onClick={clickButton}>
        Authentication
      </button>
    </div>
  )
}
