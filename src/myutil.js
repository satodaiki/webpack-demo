const message = 'hello webpack';

export const APP_NAME = '速習Webpack';

export function hello() {
  console.log(message);
}

export class Figure {
  static getTriangle(base, height) {
    return (base * height) / 2;
  }
}
