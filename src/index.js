import {APP_NAME, hello, Figure } from './myutil';
import './style.css';
import './sky_style.scss';
import pic from './images/wings.jpg';
import data from './sample.json';
import csv from './sample.csv';
import html from './sample.html';
import xml from './sample.xml';
// React関連
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// TS関連
import TsUtil from './util';

// React
ReactDOM.render(<App />, document.getElementById('app'));

// TS
TsUtil.printTriangle(10, 5)

// CSSの適用
// let body = document.getElementsByTagName('body')[0];
// body.classList.add('sky');

// SCSSの適用
let scssDiv = document.getElementById('scssDiv');
scssDiv.classList.add('sky');

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

// HTMLのコンソール出力
console.log(html);

// XMLのコンソール出力
console.log(xml.data.row[0]);
console.log(xml.data.row[1].$.id); // row要素のid属性を取得
console.log(xml.data.row[1]._); //row要素の本体テキストを取得

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
