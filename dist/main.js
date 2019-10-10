/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myutil */ \"./src/myutil.js\");\n\r\n\r\nconsole.log(_myutil__WEBPACK_IMPORTED_MODULE_0__[\"APP_NAME\"]);\r\n\r\nObject(_myutil__WEBPACK_IMPORTED_MODULE_0__[\"hello\"])();\r\n\r\nconsole.log(_myutil__WEBPACK_IMPORTED_MODULE_0__[\"Figure\"].getTriangle(10, 5));\r\nconsole.log(_myutil__WEBPACK_IMPORTED_MODULE_0__[\"Figure\"].getTriangle(30, 10));\r\nconsole.log(_myutil__WEBPACK_IMPORTED_MODULE_0__[\"Figure\"].getTriangle(20, 10));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWlEOztBQUVqRCxZQUFZLGdEQUFROztBQUVwQixxREFBSzs7QUFFTCxZQUFZLDhDQUFNO0FBQ2xCLFlBQVksOENBQU07QUFDbEIsWUFBWSw4Q0FBTSIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBQX05BTUUsIGhlbGxvLCBGaWd1cmUgfSBmcm9tICcuL215dXRpbCdcclxuXHJcbmNvbnNvbGUubG9nKEFQUF9OQU1FKTtcclxuXHJcbmhlbGxvKCk7XHJcblxyXG5jb25zb2xlLmxvZyhGaWd1cmUuZ2V0VHJpYW5nbGUoMTAsIDUpKTtcclxuY29uc29sZS5sb2coRmlndXJlLmdldFRyaWFuZ2xlKDMwLCAxMCkpO1xyXG5jb25zb2xlLmxvZyhGaWd1cmUuZ2V0VHJpYW5nbGUoMjAsIDEwKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/myutil.js":
/*!***********************!*\
  !*** ./src/myutil.js ***!
  \***********************/
/*! exports provided: APP_NAME, hello, Figure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APP_NAME\", function() { return APP_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hello\", function() { return hello; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Figure\", function() { return Figure; });\nlet message = 'hello webpack';\r\n\r\nconst APP_NAME = '速習Webpack';\r\n\r\nfunction hello() {\r\n  console.log(message);\r\n}\r\n\r\nclass Figure {\r\n  static getTriangle(base, height) {\r\n    return base * height / 2;\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXl1dGlsLmpzP2RjZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFTzs7QUFFQTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9teXV0aWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbWVzc2FnZSA9ICdoZWxsbyB3ZWJwYWNrJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfTkFNRSA9ICfpgJ/nv5JXZWJwYWNrJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZWxsbygpIHtcclxuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ3VyZSB7XHJcbiAgc3RhdGljIGdldFRyaWFuZ2xlKGJhc2UsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIGJhc2UgKiBoZWlnaHQgLyAyO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/myutil.js\n");

/***/ })

/******/ });