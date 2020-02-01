webpackHotUpdate("static/development/pages/kiptok.js",{

/***/ "./components/Files.js":
/*!*****************************!*\
  !*** ./components/Files.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/components/Files.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var linkStyle = {
  marginRight: 15
};

function returnArtists() {
  return [{
    id: "maxlabor",
    artist: "maxlabor"
  }, {
    id: "kiptok",
    artist: "kiptok"
  }, {
    id: "joy",
    artist: "joy"
  }];
}

var Files = function Files() {
  return __jsx("div", {
    className: "jsx-4028648676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-4028648676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, returnArtists().map(function (artiste) {
    return __jsx("li", {
      key: artiste.id,
      className: "jsx-4028648676",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/[id]",
      as: "/".concat(artiste.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-4028648676",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, artiste.artist)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4028648676",
    __self: this
  }, "h1.jsx-4028648676,a.jsx-4028648676{font-family:\"Arial\";}ul.jsx-4028648676{padding:0;}li.jsx-4028648676{list-style:none;margin:5px 0;}a.jsx-4028648676{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4028648676:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL0ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZ0IsQUFJNkIsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLFNBU0EscUJBSWEsV0FDYiIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbWFuZHJlZS9Lb2Qzbi9kdW1wdHJ1Y2svY29tcG9uZW50cy9GaWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTVcbn07XG5mdW5jdGlvbiByZXR1cm5BcnRpc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6IFwibWF4bGFib3JcIiwgYXJ0aXN0OiBcIm1heGxhYm9yXCIgfSxcbiAgICB7IGlkOiBcImtpcHRva1wiLCBhcnRpc3Q6IFwia2lwdG9rXCIgfSxcbiAgICB7IGlkOiBcImpveVwiLCBhcnRpc3Q6IFwiam95XCIgfVxuICBdO1xufVxuXG5jb25zdCBGaWxlcyA9ICgpID0+IChcbiAgPGRpdj5cbiAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxuICAgIDwvTGluaz4gKi99XG5cbiAgICA8dWw+XG4gICAgICB7cmV0dXJuQXJ0aXN0cygpLm1hcChhcnRpc3RlID0+IChcbiAgICAgICAgPGxpIGtleT17YXJ0aXN0ZS5pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9baWRdXCIgYXM9e2AvJHthcnRpc3RlLmlkfWB9PlxuICAgICAgICAgICAgPGE+e2FydGlzdGUuYXJ0aXN0fTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEsXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlcztcbiJdfQ== */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/components/Files.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Files);

/***/ }),

/***/ "./components/Header.js":
false,

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Files */ "./components/Files.js");
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/components/MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

var Layout = function Layout(props) {
  return __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_Files__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=kiptok.js.4dfcf8ea93785c6b3ba9.hot-update.js.map