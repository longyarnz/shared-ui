import React, { useState } from 'react';
import Spinner from './Spinner';
import ShouldRender from './ShouldRender';

export default function AsyncImage({ src, ...props }) {
  const [view, setView] = useState(true);

  const removeSpinner = () => {
    setView(false);
    let cachedImages = localStorage.getItem('cachedImages');
    cachedImages = cachedImages !== null && JSON.parse(cachedImages);

    cachedImages = Array.isArray(cachedImages) ? (
      !cachedImages.some(imageSrc => imageSrc === src) ? cachedImages.concat([src]) : cachedImages
    ) : [src];

    cachedImages = JSON.stringify(cachedImages);
    localStorage.setItem('cachedImages', cachedImages);
  }

  let cachedImages = localStorage.getItem('cachedImages');
  cachedImages = cachedImages !== null && JSON.parse(cachedImages);

  const imageHasNotBeenLoaded = Array.isArray(cachedImages) ?
    !cachedImages.some(imageSrc => imageSrc === src) : true;

  const style = {
    ...props.style
  }

  return (
    <>
      <ShouldRender if={view && imageHasNotBeenLoaded}>
        <Spinner 
          style={{ fontSize: '300%', color: 'transparent' }} 
          container={{position: 'absolute', zIndex: '99999' }} 
          onClick={props.onClick}
        />
        <div style={{ width: 50, height: 50, position: 'absolute' }}></div>
      </ShouldRender>
      <img src={src} onLoad={removeSpinner} alt={props.alt} style={style} {...props} />
    </>
  );
}