import {APP_NAME, hello, Figure } from './myutil'

if (process.env.NODE_ENV === 'development') {
  console.log("!!開発者モードで動作中!!");
}

console.log(APP_NAME);

hello();

console.log(Figure.getTriangle(10, 5));
console.log(Figure.getTriangle(30, 10));
console.log(Figure.getTriangle(20, 10));
