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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/FAUXreal/wPDZsg6BkW.js":
/*!**************************************!*\
  !*** ./pages/FAUXreal/wPDZsg6BkW.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wPDZsg6BkW; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dump__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Dump */ "./components/Dump.js");
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/pages/FAUXreal/wPDZsg6BkW.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const sourceURLS = ["https://lh3.googleusercontent.com/AajjpZ-rOokMlJJR3WCccnYwYI4bujbta69PW5HI7YSHEjv7iC6z2Sh8n6x1eyO-1R0bwnvNWGiYGyiDFdpHipK2xg85kr16nPhx1hbYxHdq7vlnGLKFw_z_yrkAJOxApEhvPiibXPD4mIu8v1sb8Y8m3LNkQ92A6CyTplQYmr-6dxUrXvVn9W3bdl9jdEAOt3-QZwJwZLxxbZbtGq9R-JYYqQmjwny62RXwJnCqBzOWXxqKApgA2HzNKmJeE7w7AvUy1rs9j9KuH55_kOLtyJsyRY0D5t4OShql6Tv9jJYmKY0Ymu4hTqmUIOwgyq_r5QILWiMDoOFc31qicLrzobAz33P7CAiiNiIF5R9te9-5NatX1rNBtpZpMBePVaI7pqcWv3AX0gCKxJKo8JnlhupwbOWakd8MQG3ivcA06V9Fodyl74O8YssiuLdq4iFkcD859XiZUw6iYXL3rymkaGN4cV_X9Yin8PgaFisADbUiKoi1auvIltIogUZEeUPoH7YtpCX2MCMjS6UlziDqJRWQQ9iTX2U0AKXS9FZERTozfNMQ6-0WoC1RYmtZIj7qDWVleHKVsE7jfeKweIfOqE9gbJxXf2hf_pGnbPxv3LsGfS9TF1PlhLIC_QIemnRJZNV3ICcFQBmJCFE835acskXdoHNw_KydDya97cRSuv1j9CvZZ7c=w1440-h550-ft"];
function wPDZsg6BkW() {
  return __jsx("div", {
    className: "jsx-305126160",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_components_Dump__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "FAUXreal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, sourceURLS.map(url => __jsx("img", {
    src: url,
    className: "jsx-305126160" + " " + "workComponent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "305126160",
    __self: this
  }, ".workComponent.jsx-305126160{max-height:325px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9wYWdlcy9GQVVYcmVhbC93UERac2c2QmtXLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQixBQUc0QixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1hbmRyZWUvS29kM24vZHVtcHRydWNrL3BhZ2VzL0ZBVVhyZWFsL3dQRFpzZzZCa1cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHVtcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EdW1wXCI7XG5jb25zdCBzb3VyY2VVUkxTID0gW1xuICBcImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9BYWpqcFotck9va01sSkpSM1dDY2NuWXdZSTRidWpidGE2OVBXNUhJN1lTSEVqdjdpQzZ6MlNoOG42eDFleU8tMVIwYndudk5XR2lZR3lpREZkcEhpcEsyeGc4NWtyMTZuUGh4MWhiWXhIZHE3dmxuR0xLRndfel95cmtBSk94QXBFaHZQaWliWFBENG1JdTh2MXNiOFk4bTNMTmtROTJBNkN5VHBsUVltci02ZHhVclh2Vm45VzNiZGw5amRFQU90My1RWndKd1pMeHhiWmJ0R3E5Ui1KWVlxUW1qd255NjJSWHdKbkNxQnpPV1h4cUtBcGdBMkh6TkttSmVFN3c3QXZVeTFyczlqOUt1SDU1X2tPTHR5SnN5UlkwRDV0NE9TaHFsNlR2OWpKWW1LWTBZbXU0aFRxbVVJT3dneXFfcjVRSUxXaU1Eb09GYzMxcWljTHJ6b2JBejMzUDdDQWlpTmlJRjVSOXRlOS01TmF0WDFyTkJ0cFpwTUJlUFZhSTdwcWNXdjNBWDBnQ0t4SktvOEpubGh1cHdiT1dha2Q4TVFHM2l2Y0EwNlY5Rm9keWw3NE84WXNzaXVMZHE0aUZrY0Q4NTlYaVpVdzZpWVhMM3J5bWthR040Y1ZfWDlZaW44UGdhRmlzQURiVWlLb2kxYXV2SWx0SW9nVVpFZVVQb0g3WXRwQ1gyTUNNalM2VWx6aURxSlJXUVE5aVRYMlUwQUtYUzlGWkVSVG96Zk5NUTYtMFdvQzFSWW10WklqN3FEV1ZsZUhLVnNFN2pmZUt3ZUlmT3FFOWdiSnhYZjJoZl9wR25iUHh2M0xzR2ZTOVRGMVBsaExJQ19RSWVtblJKWk5WM0lDY0ZRQm1KQ0ZFODM1YWNza1hkb0hOd19LeWREeWE5N2NSU3V2MWo5Q3ZaWjdjPXcxNDQwLWg1NTAtZnRcIlxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdQRFpzZzZCa1coKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEdW1wIGlkPVwiRkFVWHJlYWxcIj5cbiAgICAgICAge3NvdXJjZVVSTFMubWFwKHVybCA9PiAoXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3b3JrQ29tcG9uZW50XCIgc3JjPXt1cmx9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9EdW1wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud29ya0NvbXBvbmVudCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzI1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/pages/FAUXreal/wPDZsg6BkW.js */"));
}

/***/ }),

/***/ 4:
/*!********************************************!*\
  !*** multi ./pages/FAUXreal/wPDZsg6BkW.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/williamandree/Kod3n/dumptruck/pages/FAUXreal/wPDZsg6BkW.js */"./pages/FAUXreal/wPDZsg6BkW.js");


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
//# sourceMappingURL=wPDZsg6BkW.js.map