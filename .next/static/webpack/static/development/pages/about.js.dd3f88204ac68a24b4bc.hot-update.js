webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
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
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/components/Header.js";


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
  }, "h1.jsx-4028648676,a.jsx-4028648676{font-family:\"Arial\";}ul.jsx-4028648676{padding:0;}li.jsx-4028648676{list-style:none;margin:5px 0;}a.jsx-4028648676{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4028648676:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2dCLEFBSTZCLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLElBVmUsSUFSZixTQVNBLHFCQUlhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1hbmRyZWUvS29kM24vZHVtcHRydWNrL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNVxufTtcbmZ1bmN0aW9uIHJldHVybkFydGlzdHMoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogXCJtYXhsYWJvclwiLCBhcnRpc3Q6IFwibWF4bGFib3JcIiB9LFxuICAgIHsgaWQ6IFwia2lwdG9rXCIsIGFydGlzdDogXCJraXB0b2tcIiB9LFxuICAgIHsgaWQ6IFwiam95XCIsIGFydGlzdDogXCJqb3lcIiB9XG4gIF07XG59XG5cbmNvbnN0IEZpbGVzID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIHsvKiA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPiAqL31cblxuICAgIDx1bD5cbiAgICAgIHtyZXR1cm5BcnRpc3RzKCkubWFwKGFydGlzdGUgPT4gKFxuICAgICAgICA8bGkga2V5PXthcnRpc3RlLmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1tpZF1cIiBhcz17YC8ke2FydGlzdGUuaWR9YH0+XG4gICAgICAgICAgICA8YT57YXJ0aXN0ZS5hcnRpc3R9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSxcbiAgICAgIGEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVzO1xuIl19 */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Files);

/***/ })

})
//# sourceMappingURL=about.js.dd3f88204ac68a24b4bc.hot-update.js.map