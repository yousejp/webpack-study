// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';
// import './style.scss';

// ReactDOM.render(
//   <div>Hello, React!</div>,
//   document.getElementById('root'),
// );

import _ from 'lodash';

import { NAME, NiJou } from './utilities';

// import * as utilities from './utilities';
// utilities.NAMEなどの書き方で使えるようになる

// import { NAME as NAME_OF_HAM } from './utilities';
// NAME_OF_HAMという名前に置き換えている

import Lion from './utilities';
// defultでは{}がいらない、import後の名前も自由に設定できる

// import style from './style.css';
// 上記でも下記でも同じ機能が得られる（style fromを省略しても良い）
import './style.css';

// テストコメント
/* テストだよコメント
 */

/* 
 @license
 ライセンスコメント
 */

console.log(NiJou(2));
console.log(NAME);

// console.log(utilities.NiJou(10));
// console.log(utilities.NAME);
// console.log(NAME_OF_HAM);

console.log(Lion.say());

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
document.body.classList.add('haikei');

console.log(style.toString());
