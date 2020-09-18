// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';
// import './style.scss';

// ReactDOM.render(
//   <div>Hello, React!</div>,
//   document.getElementById('root'),
// );

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());
