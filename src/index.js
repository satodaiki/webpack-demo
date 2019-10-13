import {APP_NAME, hello, Figure } from './myutil';
import './style.css';
import pic from './images/wings.jpg';
import data from './sample.json';
import csv from './sample.csv';

// CSSの適用
let body = document.getElementsByTagName('body')[0];

body.classList.add('sky');

// 画像ファイルのインポート
window.addEventListener('DOMContentLoaded', function() {
  let img = new Image();
  img.src = pic;
  document.body.appendChild(img);
}, false);

// JSONのコンソール出力
console.log(data[0].title);

// CSVのコンソール出力
console.log(csv[0][1]);

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
