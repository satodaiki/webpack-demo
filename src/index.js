import {APP_NAME, hello, Figure } from './myutil'
import './style.css'

// CSSの適用
let body = document.getElementsByTagName('body')[0];

body.classList.add('sky');

// 環境変数のテスト
if (process.env.NODE_ENV === 'development') {
  console.log("!!開発者モードで動作中!!");
}

// バンドルのテスト
console.log(APP_NAME);

hello();

console.log(Figure.getTriangle(10, 5));
console.log(Figure.getTriangle(30, 10));
console.log(Figure.getTriangle(20, 10));
