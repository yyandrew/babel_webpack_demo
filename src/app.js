import React from 'react';
import ReactDOM from 'react-dom';
import { person, sayHello } from './lib'
import Header from './components/Header'

console.log(person.name);

console.log(sayHello('Andrew'));

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Header />,
  document.getElementById('app')
);
