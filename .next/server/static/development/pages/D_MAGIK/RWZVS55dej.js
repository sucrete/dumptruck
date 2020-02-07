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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ "./pages/D_MAGIK/RWZVS55dej.js":
/*!*************************************!*\
  !*** ./pages/D_MAGIK/RWZVS55dej.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RWZVS55dej; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dump__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Dump */ "./components/Dump.js");
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/pages/D_MAGIK/RWZVS55dej.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const sourceURLS = ["https://lh3.googleusercontent.com/iWZo2d8U54hPpZykP5cpl2bEDzmCX5bDkGoQKepimPs2ulimJ-e-q53--6hv_oCSJ_5o56QVjRs5QymN9pUZLTvl4Uz4Tv7M51Koi72vjzxQRyqbUPpgdfBFCcsXRiZKLTK_QHgMRSAsV-drV3PonMf83hDZ2Y6hZvFUzHLm3ufc6ZrMNd_gKpopxOvt6g05Z5hELIOsRTUbHCZC59dpkw-Afx5BWGfMJDNdo8LMXHn3Dgxe27PvUJJrYPow5XB5JxtA7nrHaoeoUiFi6O3e2NjqAYc76Kfs2VIhykqPyJf5uz9kunxCg17S7kr4c7D5vxGQWUFVS3-ao4Mptod8FMH93uj12thPWEhIruG0NRxKDc7nG7B9kK4OrOxo2XyJAldAN3JyBbz0jRidOaFamay4NGgJRVgmMmI435HHk-S3EQ_ga96WpPFx9O56FgViXGynk2j9_iuKA0pYbXQXXFn0mTK6JtPucoosyT8mlc4ynLPes-CxtKgLd0gSikVvWQ5nexlbgU9hJZr18fNkbjEqw73fuzpZzZAPSBch0_Bmk1mxLlRR2CvKJpFgEa69_CNHQhHfb0RMbRTSn2GaSBk4Oq83vo9Vl98otnVOwpwiicQaih2JaK_QD-or50F7sBB8Qg1FlJ_xt6IKhDcIeOo10lDRP8ZvkuXEeIODH-iBpSUSkQo=w1440-h562-ft"];
function RWZVS55dej() {
  return __jsx("div", {
    className: "jsx-2314525003",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_components_Dump__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "D_MAGIK",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, sourceURLS.map(url => __jsx("img", {
    src: url,
    className: "jsx-2314525003" + " " + "workComponent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2314525003",
    __self: this
  }, ".workComponent.jsx-2314525003{max-width:425px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9wYWdlcy9EX01BR0lLL1JXWlZTNTVkZWouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWtCLEFBRzJCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbWFuZHJlZS9Lb2Qzbi9kdW1wdHJ1Y2svcGFnZXMvRF9NQUdJSy9SV1pWUzU1ZGVqLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER1bXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRHVtcFwiO1xuY29uc3Qgc291cmNlVVJMUyA9IFtcbiAgXCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vaVdabzJkOFU1NGhQcFp5a1A1Y3BsMmJFRHptQ1g1YkRrR29RS2VwaW1QczJ1bGltSi1lLXE1My0tNmh2X29DU0pfNW81NlFWalJzNVF5bU45cFVaTFR2bDRVejRUdjdNNTFLb2k3MnZqenhRUnlxYlVQcGdkZkJGQ2NzWFJpWktMVEtfUUhnTVJTQXNWLWRyVjNQb25NZjgzaERaMlk2aFp2RlV6SExtM3VmYzZack1OZF9nS3BvcHhPdnQ2ZzA1WjVoRUxJT3NSVFViSENaQzU5ZHBrdy1BZng1QldHZk1KRE5kbzhMTVhIbjNEZ3hlMjdQdlVKSnJZUG93NVhCNUp4dEE3bnJIYW9lb1VpRmk2TzNlMk5qcUFZYzc2S2ZzMlZJaHlrcVB5SmY1dXo5a3VueENnMTdTN2tyNGM3RDV2eEdRV1VGVlMzLWFvNE1wdG9kOEZNSDkzdWoxMnRoUFdFaElydUcwTlJ4S0RjN25HN0I5a0s0T3JPeG8yWHlKQWxkQU4zSnlCYnowalJpZE9hRmFtYXk0TkdnSlJWZ21NbUk0MzVISGstUzNFUV9nYTk2V3BQRng5TzU2RmdWaVhHeW5rMmo5X2l1S0EwcFliWFFYWEZuMG1USzZKdFB1Y29vc3lUOG1sYzR5bkxQZXMtQ3h0S2dMZDBnU2lrVnZXUTVuZXhsYmdVOWhKWnIxOGZOa2JqRXF3NzNmdXpwWnpaQVBTQmNoMF9CbWsxbXhMbFJSMkN2S0pwRmdFYTY5X0NOSFFoSGZiMFJNYlJUU24yR2FTQms0T3E4M3ZvOVZsOThvdG5WT3dwd2lpY1FhaWgySmFLX1FELW9yNTBGN3NCQjhRZzFGbEpfeHQ2SUtoRGNJZU9vMTBsRFJQOFp2a3VYRWVJT0RILWlCcFNVU2tRbz13MTQ0MC1oNTYyLWZ0XCJcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSV1pWUzU1ZGVqKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RHVtcCBpZD1cIkRfTUFHSUtcIj5cbiAgICAgICAge3NvdXJjZVVSTFMubWFwKHVybCA9PiAoXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3b3JrQ29tcG9uZW50XCIgc3JjPXt1cmx9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9EdW1wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud29ya0NvbXBvbmVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MjVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/pages/D_MAGIK/RWZVS55dej.js */"));
}

/***/ }),

/***/ 7:
/*!*******************************************!*\
  !*** multi ./pages/D_MAGIK/RWZVS55dej.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/williamandree/Kod3n/dumptruck/pages/D_MAGIK/RWZVS55dej.js */"./pages/D_MAGIK/RWZVS55dej.js");


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
//# sourceMappingURL=RWZVS55dej.js.map