// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';
// import './style.scss';

// ReactDOM.render(
//   <div>Hello, React!</div>,
//   document.getElementById('root'),
// );

import _ from 'lodash';

// テストコメント
/* テストだよコメント
 */

/* 
 @license
 ライセンスコメント
 */

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  /* テスト2コメント
   */
  console.log('コンソール');
  return element;
}

document.body.appendChild(component());
