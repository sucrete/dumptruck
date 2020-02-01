module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ArtistBody.js":
/*!**********************************!*\
  !*** ./components/ArtistBody.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/components/ArtistBody.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const ArtistBody = props => __jsx("div", {
  className: "jsx-2085888330" + " " + "artistBody",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2085888330",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL0FydGlzdEJvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWdCIiwiZmlsZSI6Ii9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL0FydGlzdEJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcnRpc3RCb2R5ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdEJvZHlcIj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG5cbiAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdEJvZHk7XG4iXX0= */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/components/ArtistBody.js */"));

/* harmony default export */ __webpack_exports__["default"] = (ArtistBody);

/***/ }),

/***/ "./components/Marquee.js":
/*!*******************************!*\
  !*** ./components/Marquee.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/components/Marquee.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Marquee = props => __jsx("div", {
  className: "jsx-3226667796" + " " + "marquee",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("a", {
  id: "marqLink",
  href: "/",
  className: "jsx-3226667796",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("img", {
  alt: "logo for dumpTRUCK dump.fm gallery showcase",
  src: "/dumpTRUCKlogo.svg",
  className: "jsx-3226667796" + " " + "guc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
})), __jsx("hr", {
  className: "jsx-3226667796",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-3226667796" + " " + "description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3226667796",
  __self: undefined
}, "@font-face{font-family:\"America Expanded Regular\";src:url(\"/fonts/GT-America-Expanded-Regular.otf\") format(\"opentype\");font-display:auto;}.description.jsx-3226667796{font-family:\"America Expanded Regular\";margin-left:5px;margin-top:20px;}#marqLink.jsx-3226667796{width:100%;-webkit-align-content:right;-ms-flex-line-pack:right;align-content:right;}.guc.jsx-3226667796{width:175px;margin-bottom:12px;margin-top:3px;}.marquee.jsx-3226667796{background:#f8f8f8;padding-left:20px;padding-top:20px;padding-right:20px;}hr.jsx-3226667796{margin:0px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL01hcnF1ZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBR2dELEFBSzVCLEFBSUMsQUFLTyxBQU1KLEFBR3dCLFdBakJuQixDQUlELEdBV3JCLElBTm9CLFlBSkgsTUFLRSxFQWZELEFBdUJxRCxPQVp2RSxRQUtxQixDQWZILGdCQUNsQixFQWVBLFdBWEEsd0JBa0JvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1hbmRyZWUvS29kM24vZHVtcHRydWNrL2NvbXBvbmVudHMvTWFycXVlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1hcnF1ZWUgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFycXVlZVwiPlxuICAgIDxhIGlkPVwibWFycUxpbmtcIiBocmVmPVwiL1wiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJndWNcIlxuICAgICAgICBhbHQ9XCJsb2dvIGZvciBkdW1wVFJVQ0sgZHVtcC5mbSBnYWxsZXJ5IHNob3djYXNlXCJcbiAgICAgICAgc3JjPVwiL2R1bXBUUlVDS2xvZ28uc3ZnXCJcbiAgICAgIC8+XG4gICAgPC9hPlxuICAgIDxociAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQW1lcmljYSBFeHBhbmRlZCBSZWd1bGFyXCI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgICAjbWFycUxpbmsge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24tY29udGVudDogcmlnaHQ7XG4gICAgICB9XG4gICAgICAuZ3VjIHtcbiAgICAgICAgd2lkdGg6IDE3NXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICB9XG4gICAgICAubWFycXVlZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgICBociB7XG4gICAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogXCJBbWVyaWNhIEV4cGFuZGVkIFJlZ3VsYXJcIjtcbiAgICAgICAgc3JjOiB1cmwoXCIvZm9udHMvR1QtQW1lcmljYS1FeHBhbmRlZC1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgICAgICAgZm9udC1kaXNwbGF5OiBhdXRvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJxdWVlO1xuIl19 */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/components/Marquee.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Marquee);

/***/ }),

/***/ "./pages/kiptok.js":
/*!*************************!*\
  !*** ./pages/kiptok.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Kiptok; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Marquee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Marquee */ "./components/Marquee.js");
/* harmony import */ var _components_ArtistBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ArtistBody */ "./components/ArtistBody.js");
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/pages/kiptok.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Kiptok() {
  return __jsx("div", {
    className: "jsx-1778996294" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_Marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1778996294" + " " + "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "PROFILE"), __jsx("div", {
    className: "jsx-1778996294" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "kiptok")), __jsx(_components_ArtistBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1778996294",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Work+Sans&display=swap\");.profile.jsx-1778996294{font-family:\"Work Sans\";font-size:77%;}.page.jsx-1778996294{margin:10px;margin-top:20px;padding-bottom:100px;}.header.jsx-1778996294{font-size:3em;position:relative;margin-top:6px;left:-3px;padding-bottom:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9wYWdlcy9raXB0b2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWtCLEFBRXNGLEFBRW5ELEFBSVosQUFLRSxZQUpFLEVBS0UsVUFUSixJQUtPLElBS04sTUFUakIsU0FVWSxFQUxaLFFBTXNCLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbWFuZHJlZS9Lb2Qzbi9kdW1wdHJ1Y2svcGFnZXMva2lwdG9rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hcnF1ZWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFycXVlZVwiO1xuaW1wb3J0IEJvZHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aXN0Qm9keVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLaXB0b2soKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICA8TWFycXVlZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+UFJPRklMRTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPmtpcHRvazwvZGl2PlxuICAgICAgPC9NYXJxdWVlPlxuICAgICAgPEJvZHk+PC9Cb2R5PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVdvcmsrU2FucyZkaXNwbGF5PXN3YXBcIik7XG4gICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcbiAgICAgICAgICBmb250LXNpemU6IDc3JTtcbiAgICAgICAgfVxuICAgICAgICAucGFnZSB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgbGVmdDogLTNweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/pages/kiptok.js */"));
}

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/kiptok.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/williamandree/Kod3n/dumptruck/pages/kiptok.js */"./pages/kiptok.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=kiptok.js.map