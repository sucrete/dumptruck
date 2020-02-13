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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
  className: "jsx-2458015116" + " " + "marquee",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("a", {
  id: "marqLink",
  href: "/",
  className: "jsx-2458015116",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("img", {
  alt: "logo for dumpTRUCK a dump.fm gallery showcase",
  src: "/dumpTRUCKlogo.svg",
  className: "jsx-2458015116" + " " + "guc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
})), __jsx("hr", {
  className: "jsx-2458015116",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2458015116" + " " + "description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2458015116",
  __self: undefined
}, "@font-face{font-family:\"America Expanded Regular\";src:url(\"/fonts/GT-America-Expanded-Regular.otf\") format(\"opentype\");font-display:auto;}@font-face{font-family:\"America Expanded Fat\";src:url(\"/fonts/GT-America-Expanded-Bold.otf\") format(\"opentype\");font-display:auto;}.description.jsx-2458015116,.description.jsx-2458015116>*.jsx-2458015116{font-family:\"America Expanded Fat\",sans-serif;margin-left:5px;margin-top:20px;word-break:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;}#marqLink.jsx-2458015116{width:100%;padding-left:5px;}.guc.jsx-2458015116{width:175px;margin-bottom:12px;margin-top:3px;}.marquee.jsx-2458015116{background:#f8f8f8;padding-left:20px;padding-top:20px;padding-right:20px;}hr.jsx-2458015116{margin:0px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL01hcnF1ZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBSXdELEFBUXBDLEFBSUMsQUFLTyxBQU1KLEFBR3dCLEFBS0osV0F0QmxCLENBSUUsR0FXckIsSUFOb0IsU0FScEIsR0FJaUIsSUFrQm1ELEVBYmpELEVBUW9ELE9BMUJyRCxBQWNsQixRQUtxQixRQWxCSCxXQW1CbEIsS0FsQndCLHNCQUNULENBNkJLLE9BTEEsV0FNcEIsT0FMQSwyQ0F4QkEiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1hbmRyZWUvS29kM24vZHVtcHRydWNrL2NvbXBvbmVudHMvTWFycXVlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1hcnF1ZWUgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFycXVlZVwiPlxuICAgIDxhIGlkPVwibWFycUxpbmtcIiBocmVmPVwiL1wiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJndWNcIlxuICAgICAgICBhbHQ9XCJsb2dvIGZvciBkdW1wVFJVQ0sgYSBkdW1wLmZtIGdhbGxlcnkgc2hvd2Nhc2VcIlxuICAgICAgICBzcmM9XCIvZHVtcFRSVUNLbG9nby5zdmdcIlxuICAgICAgLz5cbiAgICA8L2E+XG4gICAgPGhyIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZGVzY3JpcHRpb24sXG4gICAgICAuZGVzY3JpcHRpb24gPiAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQW1lcmljYSBFeHBhbmRlZCBGYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgaHlwaGVuczogYXV0bztcbiAgICAgIH1cblxuICAgICAgI21hcnFMaW5rIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgfVxuICAgICAgLmd1YyB7XG4gICAgICAgIHdpZHRoOiAxNzVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgfVxuICAgICAgLm1hcnF1ZWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgICAgaHIge1xuICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQW1lcmljYSBFeHBhbmRlZCBSZWd1bGFyXCI7XG4gICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0dULUFtZXJpY2EtRXhwYW5kZWQtUmVndWxhci5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogXCJBbWVyaWNhIEV4cGFuZGVkIEZhdFwiO1xuICAgICAgICBzcmM6IHVybChcIi9mb250cy9HVC1BbWVyaWNhLUV4cGFuZGVkLUJvbGQub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICAgICAgICBmb250LWRpc3BsYXk6IGF1dG87XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcnF1ZWU7XG4iXX0= */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/components/Marquee.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Marquee);

/***/ }),

/***/ "./components/TopFiles.js":
/*!********************************!*\
  !*** ./components/TopFiles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/components/TopFiles.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const artists = [{
  pageName: "maxlabor",
  artistName: "maxlabor"
}, {
  pageName: "kiptok",
  artistName: "kiptok"
}, {
  pageName: "joy",
  artistName: "joy"
}, {
  pageName: "fiveilverkitten",
  artistName: "5ilverkitten"
}, {
  pageName: "carjacker",
  artistName: "carjacker"
}, {
  pageName: "D_MAGIK",
  artistName: "D_MAGIK"
}, {
  pageName: "FAUXreal",
  artistName: "FAUXreal"
}, {
  pageName: "glasspopcorn",
  artistName: "glasspopcorn"
}, {
  pageName: "grass",
  artistName: "grass"
}, {
  pageName: "ice",
  artistName: "ice"
}, {
  pageName: "polymer",
  artistName: "polymer"
}, {
  pageName: "qil",
  artistName: "qil"
}, {
  pageName: "robocide",
  artistName: "robocide"
}, {
  pageName: "sidonie",
  artistName: "sidonie"
}, {
  pageName: "ssnack",
  artistName: "ssnack"
}, {
  pageName: "eighteenhundreddogcig",
  artistName: "1800dogcig"
}, {
  pageName: "aoifeml",
  artistName: "aoifeml"
}, {
  pageName: "cosmicdesert",
  artistName: "cosmicdesert"
}, {
  pageName: "dvvidpw",
  artistName: "dvvidpw"
}, {
  pageName: "girlafraid",
  artistName: "girlafraid"
}, {
  pageName: "gordonramsay",
  artistName: "gordonramsay"
}, {
  pageName: "gosane",
  artistName: "gosane"
}, {
  pageName: "GucciSoFlosy",
  artistName: "GucciSoFlosy"
}, {
  pageName: "gularjinoish",
  artistName: "gularjinoish"
}, {
  pageName: "illalli",
  artistName: "illalli"
}, {
  pageName: "isaac",
  artistName: "isaac"
}, {
  pageName: "kalan",
  artistName: "kalan"
}, {
  pageName: "kintrala",
  artistName: "kintrala"
}, {
  pageName: "lianne",
  artistName: "lianne"
}, {
  pageName: "loserbitch",
  artistName: "loserbitch"
}, {
  pageName: "melipone",
  artistName: "melipone"
}, {
  pageName: "peggy",
  artistName: "peggy"
}, {
  pageName: "petrograd",
  artistName: "petrograd"
}, {
  pageName: "photocopy",
  artistName: "photocopy"
}, {
  pageName: "plams",
  artistName: "plams"
}, {
  pageName: "polymer",
  artistName: "polymer"
}, {
  pageName: "pretzel",
  artistName: "pretzel"
}, {
  pageName: "pummp",
  artistName: "pummp"
}, {
  pageName: "reverberasia",
  artistName: "reverberasia"
}, {
  pageName: "Rob",
  artistName: "Rob"
}, {
  pageName: "roppercat",
  artistName: "roppercat"
}, {
  pageName: "ryz",
  artistName: "ryz"
}, {
  pageName: "Seacrestcheadle",
  artistName: "Seacrestcheadle"
}, {
  pageName: "slugg",
  artistName: "slugg"
}, {
  pageName: "sol",
  artistName: "sol"
}, {
  pageName: "tommoody",
  artistName: "tommoody"
}, {
  pageName: "weirdnumber",
  artistName: "weirdnumber"
}];

const TopFiles = () => __jsx("div", {
  className: "jsx-3204120288",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, artists.map(artiste => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/[artiste.artistName]",
  as: `/${artiste.pageName}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("div", {
  key: artiste.artistName,
  className: "jsx-3204120288" + " " + "fileContainer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("img", {
  src: "/Folder-icon.png",
  className: "jsx-3204120288" + " " + "iconImg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), __jsx("a", {
  className: "jsx-3204120288",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, artiste.artistName)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3204120288",
  __self: undefined
}, "@import url(\"https://fonts.googleapis.com/css?family=Work+Sans&display=swap\");@font-face{font-family:\"America Expanded Regular\";src:url(\"/fonts/GT-America-Expanded-Regular.otf\") format(\"opentype\");font-display:auto;}h1.jsx-3204120288,a.jsx-3204120288{font-family:serif;}.fileContainer.jsx-3204120288{padding:10px 15px;border-radius:5px;border:1px solid #d0d0d0;margin-right:12px;margin-bottom:12px;display:inline-block;-webkit-transition:all 0.2s;transition:all 0.2s;box-shadow:3px 3px 0px rgba(0,0,0,0.19);cursor:pointer;}.fileContainer.jsx-3204120288:hover{box-shadow:5px 5px 0px rgba(0,0,0,0.14);}.iconImg.jsx-3204120288{display:inline-block;height:24px;margin:0;padding:0;}.fileContainer.jsx-3204120288>*.jsx-3204120288{vertical-align:middle;}a.jsx-3204120288{-webkit-text-decoration:none;text-decoration:none;color:#484848;padding-left:9px;-webkit-transition:all 0.3s;transition:all 0.3s;font-family:\"Work Sans\",sans-serif;font-size:0.9em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL1RvcEZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEZ0IsQUFFb0YsQUFJekQsQUFHQSxBQVd5QixBQUl0QixBQU1DLEFBR0QsQUFRa0Isa0JBbEN6QyxBQUdvQixHQWVOLENBTWQsV0FMVyxHQWZnQixHQStCNEMsQ0FwQnZFLEVBS1ksUUFPSSxFQU5oQixTQWhCb0IsR0F1QkQsZUF0QkUsRUF1QkMsaUJBdEJDLFVBNkJILFdBNUJFLE9BNkJ0QixHQVBzQyxtQ0FDcEIsR0F0QjJCLGFBdUI3QywyQkF0QmlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL1RvcEZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBhcnRpc3RzID0gW1xuICB7IHBhZ2VOYW1lOiBcIm1heGxhYm9yXCIsIGFydGlzdE5hbWU6IFwibWF4bGFib3JcIiB9LFxuICB7IHBhZ2VOYW1lOiBcImtpcHRva1wiLCBhcnRpc3ROYW1lOiBcImtpcHRva1wiIH0sXG4gIHsgcGFnZU5hbWU6IFwiam95XCIsIGFydGlzdE5hbWU6IFwiam95XCIgfSxcbiAgeyBwYWdlTmFtZTogXCJmaXZlaWx2ZXJraXR0ZW5cIiwgYXJ0aXN0TmFtZTogXCI1aWx2ZXJraXR0ZW5cIiB9LFxuICB7IHBhZ2VOYW1lOiBcImNhcmphY2tlclwiLCBhcnRpc3ROYW1lOiBcImNhcmphY2tlclwiIH0sXG4gIHsgcGFnZU5hbWU6IFwiRF9NQUdJS1wiLCBhcnRpc3ROYW1lOiBcIkRfTUFHSUtcIiB9LFxuICB7IHBhZ2VOYW1lOiBcIkZBVVhyZWFsXCIsIGFydGlzdE5hbWU6IFwiRkFVWHJlYWxcIiB9LFxuICB7IHBhZ2VOYW1lOiBcImdsYXNzcG9wY29yblwiLCBhcnRpc3ROYW1lOiBcImdsYXNzcG9wY29yblwiIH0sXG4gIHsgcGFnZU5hbWU6IFwiZ3Jhc3NcIiwgYXJ0aXN0TmFtZTogXCJncmFzc1wiIH0sXG4gIHsgcGFnZU5hbWU6IFwiaWNlXCIsIGFydGlzdE5hbWU6IFwiaWNlXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJwb2x5bWVyXCIsIGFydGlzdE5hbWU6IFwicG9seW1lclwiIH0sXG4gIHsgcGFnZU5hbWU6IFwicWlsXCIsIGFydGlzdE5hbWU6IFwicWlsXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJyb2JvY2lkZVwiLCBhcnRpc3ROYW1lOiBcInJvYm9jaWRlXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJzaWRvbmllXCIsIGFydGlzdE5hbWU6IFwic2lkb25pZVwiIH0sXG4gIHsgcGFnZU5hbWU6IFwic3NuYWNrXCIsIGFydGlzdE5hbWU6IFwic3NuYWNrXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJlaWdodGVlbmh1bmRyZWRkb2djaWdcIiwgYXJ0aXN0TmFtZTogXCIxODAwZG9nY2lnXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJhb2lmZW1sXCIsIGFydGlzdE5hbWU6IFwiYW9pZmVtbFwiIH0sXG4gIHsgcGFnZU5hbWU6IFwiY29zbWljZGVzZXJ0XCIsIGFydGlzdE5hbWU6IFwiY29zbWljZGVzZXJ0XCIgfSxcbiAgeyBwYWdlTmFtZTogXCJkdnZpZHB3XCIsIGFydGlzdE5hbWU6IFwiZHZ2aWRwd1wiIH0sXG4gIHsgcGFnZU5hbWU6IFwiZ2lybGFmcmFpZFwiLCBhcnRpc3ROYW1lOiBcImdpcmxhZnJhaWRcIiB9LFxuICB7IHBhZ2VOYW1lOiBcImdvcmRvbnJhbXNheVwiLCBhcnRpc3ROYW1lOiBcImdvcmRvbnJhbXNheVwiIH0sXG4gIHsgcGFnZU5hbWU6IFwiZ29zYW5lXCIsIGFydGlzdE5hbWU6IFwiZ29zYW5lXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJHdWNjaVNvRmxvc3lcIiwgYXJ0aXN0TmFtZTogXCJHdWNjaVNvRmxvc3lcIiB9LFxuICB7IHBhZ2VOYW1lOiBcImd1bGFyamlub2lzaFwiLCBhcnRpc3ROYW1lOiBcImd1bGFyamlub2lzaFwiIH0sXG4gIHsgcGFnZU5hbWU6IFwiaWxsYWxsaVwiLCBhcnRpc3ROYW1lOiBcImlsbGFsbGlcIiB9LFxuICB7IHBhZ2VOYW1lOiBcImlzYWFjXCIsIGFydGlzdE5hbWU6IFwiaXNhYWNcIiB9LFxuICB7IHBhZ2VOYW1lOiBcImthbGFuXCIsIGFydGlzdE5hbWU6IFwia2FsYW5cIiB9LFxuICB7IHBhZ2VOYW1lOiBcImtpbnRyYWxhXCIsIGFydGlzdE5hbWU6IFwia2ludHJhbGFcIiB9LFxuICB7IHBhZ2VOYW1lOiBcImxpYW5uZVwiLCBhcnRpc3ROYW1lOiBcImxpYW5uZVwiIH0sXG4gIHsgcGFnZU5hbWU6IFwibG9zZXJiaXRjaFwiLCBhcnRpc3ROYW1lOiBcImxvc2VyYml0Y2hcIiB9LFxuICB7IHBhZ2VOYW1lOiBcIm1lbGlwb25lXCIsIGFydGlzdE5hbWU6IFwibWVsaXBvbmVcIiB9LFxuICB7IHBhZ2VOYW1lOiBcInBlZ2d5XCIsIGFydGlzdE5hbWU6IFwicGVnZ3lcIiB9LFxuICB7IHBhZ2VOYW1lOiBcInBldHJvZ3JhZFwiLCBhcnRpc3ROYW1lOiBcInBldHJvZ3JhZFwiIH0sXG4gIHsgcGFnZU5hbWU6IFwicGhvdG9jb3B5XCIsIGFydGlzdE5hbWU6IFwicGhvdG9jb3B5XCIgfSxcbiAgeyBwYWdlTmFtZTogXCJwbGFtc1wiLCBhcnRpc3ROYW1lOiBcInBsYW1zXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJwb2x5bWVyXCIsIGFydGlzdE5hbWU6IFwicG9seW1lclwiIH0sXG4gIHsgcGFnZU5hbWU6IFwicHJldHplbFwiLCBhcnRpc3ROYW1lOiBcInByZXR6ZWxcIiB9LFxuICB7IHBhZ2VOYW1lOiBcInB1bW1wXCIsIGFydGlzdE5hbWU6IFwicHVtbXBcIiB9LFxuICB7IHBhZ2VOYW1lOiBcInJldmVyYmVyYXNpYVwiLCBhcnRpc3ROYW1lOiBcInJldmVyYmVyYXNpYVwiIH0sXG4gIHsgcGFnZU5hbWU6IFwiUm9iXCIsIGFydGlzdE5hbWU6IFwiUm9iXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJyb3BwZXJjYXRcIiwgYXJ0aXN0TmFtZTogXCJyb3BwZXJjYXRcIiB9LFxuICB7IHBhZ2VOYW1lOiBcInJ5elwiLCBhcnRpc3ROYW1lOiBcInJ5elwiIH0sXG4gIHsgcGFnZU5hbWU6IFwiU2VhY3Jlc3RjaGVhZGxlXCIsIGFydGlzdE5hbWU6IFwiU2VhY3Jlc3RjaGVhZGxlXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJzbHVnZ1wiLCBhcnRpc3ROYW1lOiBcInNsdWdnXCIgfSxcbiAgeyBwYWdlTmFtZTogXCJzb2xcIiwgYXJ0aXN0TmFtZTogXCJzb2xcIiB9LFxuICB7IHBhZ2VOYW1lOiBcInRvbW1vb2R5XCIsIGFydGlzdE5hbWU6IFwidG9tbW9vZHlcIiB9LFxuICB7IHBhZ2VOYW1lOiBcIndlaXJkbnVtYmVyXCIsIGFydGlzdE5hbWU6IFwid2VpcmRudW1iZXJcIiB9XG5dO1xuXG5jb25zdCBUb3BGaWxlcyA9ICgpID0+IChcbiAgPGRpdj5cbiAgICB7YXJ0aXN0cy5tYXAoYXJ0aXN0ZSA9PiAoXG4gICAgICA8TGluayBocmVmPVwiL1thcnRpc3RlLmFydGlzdE5hbWVdXCIgYXM9e2AvJHthcnRpc3RlLnBhZ2VOYW1lfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVDb250YWluZXJcIiBrZXk9e2FydGlzdGUuYXJ0aXN0TmFtZX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uSW1nXCIgc3JjPVwiL0ZvbGRlci1pY29uLnBuZ1wiIC8+XG4gICAgICAgICAgPGE+e2FydGlzdGUuYXJ0aXN0TmFtZX08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICkpfVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9V29yaytTYW5zJmRpc3BsYXk9c3dhcFwiKTtcblxuICAgICAgaDEsXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICAgICAgfVxuICAgICAgLmZpbGVDb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAuZmlsZUNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG4gICAgICB9XG4gICAgICAuaWNvbkltZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICAuZmlsZUNvbnRhaW5lciA+ICoge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQW1lcmljYSBFeHBhbmRlZCBSZWd1bGFyXCI7XG4gICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0dULUFtZXJpY2EtRXhwYW5kZWQtUmVndWxhci5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wRmlsZXM7XG4iXX0= */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/components/TopFiles.js */"));

/* harmony default export */ __webpack_exports__["default"] = (TopFiles);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TopFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TopFiles */ "./components/TopFiles.js");
/* harmony import */ var _components_Marquee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Marquee */ "./components/Marquee.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Index() {
  return __jsx("div", {
    className: "jsx-810325422" + " " + "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-810325422",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "sucrete's dumpTRUCK"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-810325422",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "https://image.flaticon.com/icons/svg/2422/2422056.svg",
    className: "jsx-810325422",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx(_components_Marquee__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-810325422" + " " + "titleContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-810325422" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "sucrete's ", __jsx("br", {
    className: "jsx-810325422",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), "files"), __jsx("p", {
    className: "jsx-810325422" + " " + "topDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "a collection of work casually saved to my hard drive between the years of 2012 and 2016 from the (now dead) meme accelerator", " ", __jsx("a", {
    href: "https://sites.rhizome.org/surfclubs/#dump.fm",
    target: "_blank",
    className: "jsx-810325422" + " " + "dumpfmlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "dump.fm"), ". intended to be a permanent home for some very good work otherwise forgotten"), __jsx("p", {
    className: "jsx-810325422" + " " + "descriptionDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "best displayed on desktop"))), __jsx("div", {
    className: "jsx-810325422" + " " + "topFilesContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_components_TopFiles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "810325422",
    __self: this
  }, "@font-face{font-family:\"America Expanded Regular\";src:url(\"/fonts/GT-America-Expanded-Regular.otf\") format(\"opentype\");font-display:auto;}@font-face{font-family:\"America Expanded Fat\";src:url(\"/fonts/GT-America-Expanded-Bold.otf\") format(\"opentype\");font-display:auto;}@import url(\"https://fonts.googleapis.com/css?family=Work+Sans&display=swap\");.descriptionDescription{color:grey;}.dumpfmlink:visited{color:midnightblue;}.title{margin-top:20px;margin-left:5px;margin-right:15px;font-family:\"America Expanded Fat\";font-size:3em;line-height:120%;background-size:cover;background-color:black;background-position:center;-webkit-background-clip:text;background-image:url(\"https://i.imgur.com/mpD6Aah.gif\");-webkit-text-fill-color:transparent;-webkit-hyphens:unset;-moz-hyphens:unset;-ms-hyphens:unset;hyphens:unset;}.topDescription,.descriptionDescription{font-family:\"Work Sans\",sans-serif;max-width:350px;padding-left:7px;}.titleContainer{padding-bottom:25px;width:85%;}@media screen and (max-width:400px){.title{font-size:2.5em;}}.topFilesContainer{margin-left:3px;padding-top:20px;}.app{margin:10px;margin-top:20px;padding-bottom:100px;}.profile{font-family:\"Work Sans\";font-size:77%;}.directoryFooter{-webkit-transition:all 0.25s;transition:all 0.25s;font-family:\"Work Sans\";border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;padding-left:2px;height:40px;position:relative;vertical-align:middle;}.allDumpsTitle{color:#484848;position:absolute;top:50%;-webkit-transform:translatey(-50%);-ms-transform:translatey(-50%);transform:translatey(-50%);}.iconImgReverse{height:130%;position:relative;top:85%;left:0%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.allDumpsTitle{left:38px;}.directoryFooter{border-top:unset;cursor:pointer;}.directoryFooter:hover{background:#f8f8f8;}.fileName{text-align:right;border-bottom:1px solid #e0e0e0;height:32px;font-family:\"Work Sans\";border-top:1px solid transparent;-webkit-transition:all 0.25s;transition:all 0.25s;cursor:pointer;border-left:8px solid #f8f8f8;vertical-align:middle;position:relative;}.fileName:hover{background:#f8f8f8;}.fileName span{font-size:0.9em;color:#484848;position:absolute;top:50%;right:0%;-webkit-transform:translatey(-50%);-ms-transform:translatey(-50%);transform:translatey(-50%);}.page{margin:10px;margin-top:20px;padding-bottom:100px;}.header{font-size:3em;position:relative;margin-top:6px;left:-3px;padding-bottom:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3lCLEFBR3NCLEFBR1EsQUFHSCxBQWdCb0IsQUFLaEIsQUFNRixBQUlGLEFBSUosQUFLMkIsQUFLSixBQUl3QyxBQUVuRCxBQUlILEFBVVAsQUFNRixBQU9GLEFBR08sQUFJRSxBQUdGLEFBWUUsQUFHSCxBQVFKLEFBS0UsVUFyQ2hCLENBcEZBLENBeUNrQixBQW9DRSxBQXdDRixFQTlDRSxBQW1EQSxFQXBIRixBQTJCaEIsQUFJaUIsQUF3RUgsQ0F0QkMsQUFPaUIsRUEzRmxDLEFBd0ZBLEFBZUEsQ0E5RVksSUE2QkksSUFmTyxBQTRFQSxFQXpGdkIsQUFpRFUsQUFnQ1UsRUF2R0EsQUFpRVYsQUFnQlYsQUFtQ2lCLENBckZqQixFQWhCa0IsQUE2QmtELEdBT3BFLEFBcUJVLENBakM2RCxDQTJCMUMsTUFPQSxDQTRDakIsQ0FiRixDQXBFVixBQW9EYyxBQXdCZCxDQS9HcUMsQUFxRFgsQ0F0Q1AsS0F5RlIsQ0FhVyxJQTdCSSxJQWlCRyxHQXpGN0IsTUFzQytCLEdBZ0UvQixRQXJIZ0IsQUF3Rm1CLGNBdkZoQixFQTBDQyxFQVdjLEtBaEJkLFFBcENJLEVBdUZELENBN0N2QixPQUxBLE9BMEJBLEVBVm1CLEdBcERNLENBcUV6QixhQWhCYyxNQWlEZCxHQXJHNkIsR0FxRFQsSUFpQ0gsY0FoQ08sQ0FpQ1EsS0F0RkQsZ0JBc0QvQixTQWlDd0IsSUF0RmtDLGtCQXVGdEMsa0JBQ3BCLG9CQXZGc0Msb0NBQ3RCLHlFQUNoQiIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbWFuZHJlZS9Lb2Qzbi9kdW1wdHJ1Y2svcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9wRmlsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9wRmlsZXNcIjtcbmltcG9ydCBNYXJxdWVlIGZyb20gXCIuLi9jb21wb25lbnRzL01hcnF1ZWVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+c3VjcmV0ZSdzIGR1bXBUUlVDSzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzI0MjIvMjQyMjA1Ni5zdmdcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1hcnF1ZWU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVDb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICBzdWNyZXRlJ3MgPGJyIC8+XG4gICAgICAgICAgICBmaWxlc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcERlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICBhIGNvbGxlY3Rpb24gb2Ygd29yayBjYXN1YWxseSBzYXZlZCB0byBteSBoYXJkIGRyaXZlIGJldHdlZW4gdGhlXG4gICAgICAgICAgICB5ZWFycyBvZiAyMDEyIGFuZCAyMDE2IGZyb20gdGhlIChub3cgZGVhZCkgbWVtZSBhY2NlbGVyYXRvcntcIiBcIn1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR1bXBmbWxpbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zaXRlcy5yaGl6b21lLm9yZy9zdXJmY2x1YnMvI2R1bXAuZm1cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBkdW1wLmZtXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAuIGludGVuZGVkIHRvIGJlIGEgcGVybWFuZW50IGhvbWUgZm9yIHNvbWUgdmVyeSBnb29kIHdvcmsgb3RoZXJ3aXNlXG4gICAgICAgICAgICBmb3Jnb3R0ZW5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25EZXNjcmlwdGlvblwiPmJlc3QgZGlzcGxheWVkIG9uIGRlc2t0b3A8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYXJxdWVlPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcEZpbGVzQ29udGFpbmVyXCI+XG4gICAgICAgIDxUb3BGaWxlcyAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5kZXNjcmlwdGlvbkRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuICAgICAgICAuZHVtcGZtbGluazp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogbWlkbmlnaHRibHVlO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBbWVyaWNhIEV4cGFuZGVkIEZhdFwiO1xuICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5pbWd1ci5jb20vbXBENkFhaC5naWZcIik7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGh5cGhlbnM6IHVuc2V0O1xuICAgICAgICB9XG4gICAgICAgIC50b3BEZXNjcmlwdGlvbixcbiAgICAgICAgLmRlc2NyaXB0aW9uRGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlQ29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcblxuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRvcEZpbGVzQ29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hcHAge1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBbWVyaWNhIEV4cGFuZGVkIFJlZ3VsYXJcIjtcbiAgICAgICAgICBzcmM6IHVybChcIi9mb250cy9HVC1BbWVyaWNhLUV4cGFuZGVkLVJlZ3VsYXIub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICAgICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBbWVyaWNhIEV4cGFuZGVkIEZhdFwiO1xuICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0dULUFtZXJpY2EtRXhwYW5kZWQtQm9sZC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gICAgICAgICAgZm9udC1kaXNwbGF5OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVdvcmsrU2FucyZkaXNwbGF5PXN3YXBcIik7XG4gICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcbiAgICAgICAgICBmb250LXNpemU6IDc3JTtcbiAgICAgICAgfVxuICAgICAgICAuZGlyZWN0b3J5Rm9vdGVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgICAgIC5hbGxEdW1wc1RpdGxlIHtcbiAgICAgICAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uSW1nUmV2ZXJzZSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDg1JTtcbiAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmFsbER1bXBzVGl0bGUge1xuICAgICAgICAgIGxlZnQ6IDM4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpcmVjdG9yeUZvb3RlciB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogdW5zZXQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kaXJlY3RvcnlGb290ZXI6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbGVOYW1lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZjhmOGY4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5maWxlTmFtZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZU5hbWUgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAucGFnZSB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgbGVmdDogLTNweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/pages/index.js */"));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/williamandree/Kod3n/dumptruck/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map