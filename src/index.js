import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
ReactDOM.render(
  <ErrorBoundary />, 
  document.getElementById('root')
);