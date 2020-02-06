webpackHotUpdate("static/development/pages/kiptok.js",{

/***/ "./components/PostLink.js":
/*!********************************!*\
  !*** ./components/PostLink.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/components/PostLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PostLink = function PostLink(props) {
  return __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.id)));
};

/* harmony default export */ __webpack_exports__["default"] = (PostLink);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Marquee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Marquee */ "./components/Marquee.js");
/* harmony import */ var _components_ArtistBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ArtistBody */ "./components/ArtistBody.js");
/* harmony import */ var _components_PostLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostLink */ "./components/PostLink.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/pages/kiptok.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var works = ["Om4hKmsSCi", "YqZmNPyL6L", "nsDdrHFcHU", "FDDGLaTJpX", "sjmnBqeus7", "WBE5xVtWzK"];
function Kiptok() {
  return __jsx("div", {
    className: "jsx-528614054" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-528614054" + " " + "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "PROFILE"), __jsx("div", {
    className: "jsx-528614054" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "kiptok")), __jsx(_components_ArtistBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, works.map(function (work) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/[work]",
      as: "/".concat(work),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      key: work,
      className: "jsx-528614054" + " " + "fileName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-528614054",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "kiptok/", work, ".dump")));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "528614054",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Work+Sans&display=swap\");.profile.jsx-528614054{font-family:\"Work Sans\";font-size:77%;}.fileName.jsx-528614054{text-align:right;border-bottom:1px solid #e8e8e8;height:32px;font-family:\"Work Sans\";border-top:1px solid transparent;-webkit-transition:all 0.25s;transition:all 0.25s;cursor:pointer;border-left:8px solid #f8f8f8;vertical-align:middle;position:relative;}.fileName.jsx-528614054:hover{background:#f8f8f8;}.fileName.jsx-528614054 span.jsx-528614054{font-size:0.9em;color:#484848;position:absolute;top:50%;right:0%;-webkit-transform:translatey(-50%);-ms-transform:translatey(-50%);transform:translatey(-50%);}.page.jsx-528614054{margin:10px;margin-top:20px;padding-bottom:100px;}.header.jsx-528614054{font-size:3em;position:relative;margin-top:6px;left:-3px;padding-bottom:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9wYWdlcy9raXB0b2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJrQixBQUVzRixBQUVuRCxBQUlQLEFBWUUsQUFHSCxBQVFKLEFBS0UsWUFKRSxFQUtFLEVBYkosQ0Fma0IsRUFZbEMsS0FoQmdCLElBNEJPLEVBUkgsRUFhSCxNQWhDakIsU0FpQ1ksQ0FiRixDQWhCSSxBQXdCZCxPQVBXLENBYVcsSUE3QkksSUFpQkcsWUFhN0IsUUE3Qm1DLGlDQUNaLHdDQWdCdkIsVUFmaUIsZUFDZSw4QkFDUixzQkFDSixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1hbmRyZWUvS29kM24vZHVtcHRydWNrL3BhZ2VzL2tpcHRvay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXJxdWVlIGZyb20gXCIuLi9jb21wb25lbnRzL01hcnF1ZWVcIjtcbmltcG9ydCBCb2R5IGZyb20gXCIuLi9jb21wb25lbnRzL0FydGlzdEJvZHlcIjtcbmltcG9ydCBQb3N0TGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0TGlua1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCB3b3JrcyA9IFtcbiAgXCJPbTRoS21zU0NpXCIsXG4gIFwiWXFabU5QeUw2TFwiLFxuICBcIm5zRGRySEZjSFVcIixcbiAgXCJGRERHTGFUSnBYXCIsXG4gIFwic2ptbkJxZXVzN1wiLFxuICBcIldCRTV4VnRXektcIlxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtpcHRvaygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgIDxNYXJxdWVlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5QUk9GSUxFPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+a2lwdG9rPC9kaXY+XG4gICAgICA8L01hcnF1ZWU+XG4gICAgICA8Qm9keT5cbiAgICAgICAge3dvcmtzLm1hcCh3b3JrID0+IChcbiAgICAgICAgICA8TGluayBocmVmPVwiL1t3b3JrXVwiIGFzPXtgLyR7d29ya31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZU5hbWVcIiBrZXk9e3dvcmt9PlxuICAgICAgICAgICAgICA8c3Bhbj5raXB0b2sve3dvcmt9LmR1bXA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb2R5PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVdvcmsrU2FucyZkaXNwbGF5PXN3YXBcIik7XG4gICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcbiAgICAgICAgICBmb250LXNpemU6IDc3JTtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZU5hbWUge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmOGY4Zjg7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbGVOYW1lOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICB9XG4gICAgICAgIC5maWxlTmFtZSBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICBsZWZ0OiAtM3B4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/pages/kiptok.js */"));
}

/***/ })

})
//# sourceMappingURL=kiptok.js.d1952f4f3618e4e29759.hot-update.js.map