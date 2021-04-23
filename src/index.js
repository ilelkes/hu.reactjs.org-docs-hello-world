import React from 'react';
import ReactDOM from 'react-dom';

const name = 'látogató!';
const element = <h1>Helló, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);