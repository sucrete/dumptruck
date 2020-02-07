module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./components/Dump.js":
/*!****************************!*\
  !*** ./components/Dump.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/components/Dump.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Dump = props => __jsx("div", {
  className: "jsx-1179482444" + " " + "workContainer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-1179482444" + " " + "artistName",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, props.id, __jsx("img", {
  src: "/piskel.svg",
  className: "jsx-1179482444" + " " + "dumpHeart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
})), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1179482444",
  __self: undefined
}, ".artistName.jsx-1179482444{font-family:\"Helvetica Neue\",sans-serif;font-size:0.8em;font-weight:500;padding-right:20px;margin-right:10px;position:relative;}.dumpHeart.jsx-1179482444{position:absolute;top:35%;width:7px;right:8px;-webkit-transform:translatey(-60%);-ms-transform:translatey(-60%);transform:translatey(-60%);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;cursor:pointer;}span.artistName.jsx-1179482444 img.dumpHeart.jsx-1179482444:hover{width:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL0R1bXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLEFBR2tELEFBUXZCLEFBU1AsV0FDYixPQVRVLFFBQ0UsVUFDQSxJQVZNLE1BV1csVUFWWCxnQkFDRyxtQkFDRCxrQkFDQSxrQkFDcEIsWUFPa0Msd0VBQ2pCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL0R1bXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEdW1wID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtDb250YWluZXJcIj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpc3ROYW1lXCI+XG4gICAgICB7cHJvcHMuaWR9XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImR1bXBIZWFydFwiIHNyYz1cIi9waXNrZWwuc3ZnXCIgLz5cbiAgICA8L3NwYW4+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hcnRpc3ROYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuZHVtcEhlYXJ0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDM1JTtcbiAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC02MCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgc3Bhbi5hcnRpc3ROYW1lIGltZy5kdW1wSGVhcnQ6aG92ZXIge1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbmV4cG9ydCBkZWZhdWx0IER1bXA7XG4iXX0= */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/components/Dump.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Dump);

/***/ }),

/***/ "./pages/grass/VTf5HLHK8S.js":
/*!***********************************!*\
  !*** ./pages/grass/VTf5HLHK8S.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VTf5HLHK8S; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dump__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Dump */ "./components/Dump.js");
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/pages/grass/VTf5HLHK8S.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const sourceURLS = ["https://lh3.googleusercontent.com/gzVdVntu5c3sGLiZ4-xp2WAknbmLWfoIX7XjHzqyukJB-Rri8jnRLCowjvbACk-Vjsw383vb0x5sXRC6GZHdHyiVY7tmpeFEylrwHHlt51GT7O-a8hJxdVBme7v2_w0o4vyauWqkdhMCNOtCZH7E7FJRXGSTr_jl2kapeseXVtPUMrEZawmNxD_MmtUuby-r2Ul4fplHg8AYU402atL5YGZ17IEnY0NyaSSk_Gady7w2g5hmeYSwbKJrHiJJB6OU_7MMeUKNS6U3_FD4NfJ4nAZzavGBIIoyluN6PtiBYeX1Vf3_Fh_outg-E_C-CdnggxrMpgkjPNtguH_Ko6AFyMVACwhCq31-_VwOZcfnac-AyoKoUVFJJLgbE28ZHD9n-zQ9ze3j1E6xkL_26lW6YqkNRazQjJVsGvCh9YHU160zQHZtMz_uiMOvT7PpCHtSg5sYMyjeLqwsSdvgf4fVYmvfCXQID_CfxjnikEkHbtUnVkSzFVuDrwrHx0jd5gHO1kMavOWzetTNEBmf1viisPuvx9Of-F1eTX0QkjAltlzVTBdrNDY_-KXxBWZgxDbivATBFG62N_H3Oxbc-8nPoCll6NxThjqrDqtBKEsa1n3h9q6HB1YV1E-kgBCtFiJcYOkU2puhrJv02E8s-TXyTHOux8tdsutnwhMMZJ3ZXBVJMAipQt0=w1440-h550-ft"];
function VTf5HLHK8S() {
  return __jsx("div", {
    className: "jsx-1312979782",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_components_Dump__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "grass",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, sourceURLS.map(url => __jsx("img", {
    src: url,
    className: "jsx-1312979782" + " " + "workComponent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1312979782",
    __self: this
  }, ".workComponent.jsx-1312979782{max-height:400px;max-width:500px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9wYWdlcy9ncmFzcy9WVGY1SExISzhTLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQixBQUc0QixpQkFDRCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1hbmRyZWUvS29kM24vZHVtcHRydWNrL3BhZ2VzL2dyYXNzL1ZUZjVITEhLOFMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHVtcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EdW1wXCI7XG5jb25zdCBzb3VyY2VVUkxTID0gW1xuICBcImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9nelZkVm50dTVjM3NHTGlaNC14cDJXQWtuYm1MV2ZvSVg3WGpIenF5dWtKQi1Scmk4am5STENvd2p2YkFDay1WanN3MzgzdmIweDVzWFJDNkdaSGRIeWlWWTd0bXBlRkV5bHJ3SEhsdDUxR1Q3Ty1hOGhKeGRWQm1lN3YyX3cwbzR2eWF1V3FrZGhNQ05PdENaSDdFN0ZKUlhHU1RyX2psMmthcGVzZVhWdFBVTXJFWmF3bU54RF9NbXRVdWJ5LXIyVWw0ZnBsSGc4QVlVNDAyYXRMNVlHWjE3SUVuWTBOeWFTU2tfR2FkeTd3Mmc1aG1lWVN3YktKckhpSkpCNk9VXzdNTWVVS05TNlUzX0ZENE5mSjRuQVp6YXZHQklJb3lsdU42UHRpQlllWDFWZjNfRmhfb3V0Zy1FX0MtQ2RuZ2d4ck1wZ2tqUE50Z3VIX0tvNkFGeU1WQUN3aENxMzEtX1Z3T1pjZm5hYy1BeW9Lb1VWRkpKTGdiRTI4WkhEOW4telE5emUzajFFNnhrTF8yNmxXNllxa05SYXpRakpWc0d2Q2g5WUhVMTYwelFIWnRNel91aU1PdlQ3UHBDSHRTZzVzWU15amVMcXdzU2R2Z2Y0ZlZZbXZmQ1hRSURfQ2Z4am5pa0VrSGJ0VW5Wa1N6RlZ1RHJ3ckh4MGpkNWdITzFrTWF2T1d6ZXRUTkVCbWYxdmlpc1B1dng5T2YtRjFlVFgwUWtqQWx0bHpWVEJkck5EWV8tS1h4QldaZ3hEYml2QVRCRkc2Mk5fSDNPeGJjLThuUG9DbGw2TnhUaGpxckRxdEJLRXNhMW4zaDlxNkhCMVlWMUUta2dCQ3RGaUpjWU9rVTJwdWhySnYwMkU4cy1UWHlUSE91eDh0ZHN1dG53aE1NWkozWlhCVkpNQWlwUXQwPXcxNDQwLWg1NTAtZnRcIlxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZUZjVITEhLOFMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEdW1wIGlkPVwiZ3Jhc3NcIj5cbiAgICAgICAge3NvdXJjZVVSTFMubWFwKHVybCA9PiAoXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3b3JrQ29tcG9uZW50XCIgc3JjPXt1cmx9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9EdW1wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud29ya0NvbXBvbmVudCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/pages/grass/VTf5HLHK8S.js */"));
}

/***/ }),

/***/ 5:
/*!*****************************************!*\
  !*** multi ./pages/grass/VTf5HLHK8S.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/williamandree/Kod3n/dumptruck/pages/grass/VTf5HLHK8S.js */"./pages/grass/VTf5HLHK8S.js");


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
//# sourceMappingURL=VTf5HLHK8S.js.map