(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/kiptok/Om4hKmsSCi.js"],{

/***/ "./components/Dump.js":
/*!****************************!*\
  !*** ./components/Dump.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/components/Dump.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Dump = function Dump(props) {
  return __jsx("div", {
    className: "jsx-686987944" + " " + "workContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-686987944",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.id, __jsx("img", {
    src: "/heart.svg",
    className: "jsx-686987944",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "686987944",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL0R1bXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCIiwiZmlsZSI6Ii9Vc2Vycy93aWxsaWFtYW5kcmVlL0tvZDNuL2R1bXB0cnVjay9jb21wb25lbnRzL0R1bXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEdW1wID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtDb250YWluZXJcIj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIHtwcm9wcy5pZH1cbiAgICAgIDxpbWcgc3JjPVwiL2hlYXJ0LnN2Z1wiIC8+XG4gICAgPC9zZWN0aW9uPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAud29ya0NvbXBvbmVudCB7XG4gICAgICB9XG4gICAgICAud29ya0NvbnRhaW5lciB7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5leHBvcnQgZGVmYXVsdCBEdW1wO1xuIl19 */\n/*@ sourceURL=/Users/williamandree/Kod3n/dumptruck/components/Dump.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Dump);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fkiptok%2FOm4hKmsSCi&absolutePagePath=%2FUsers%2Fwilliamandree%2FKod3n%2Fdumptruck%2Fpages%2Fkiptok%2FOm4hKmsSCi.js!./":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fkiptok%2FOm4hKmsSCi&absolutePagePath=%2FUsers%2Fwilliamandree%2FKod3n%2Fdumptruck%2Fpages%2Fkiptok%2FOm4hKmsSCi.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/kiptok/Om4hKmsSCi", function() {
      var mod = __webpack_require__(/*! ./pages/kiptok/Om4hKmsSCi.js */ "./pages/kiptok/Om4hKmsSCi.js")
      if(true) {
        module.hot.accept(/*! ./pages/kiptok/Om4hKmsSCi.js */ "./pages/kiptok/Om4hKmsSCi.js", function() {
          if(!next.router.components["/kiptok/Om4hKmsSCi"]) return
          var updatedPage = __webpack_require__(/*! ./pages/kiptok/Om4hKmsSCi.js */ "./pages/kiptok/Om4hKmsSCi.js")
          next.router.update("/kiptok/Om4hKmsSCi", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/kiptok/Om4hKmsSCi.js":
/*!************************************!*\
  !*** ./pages/kiptok/Om4hKmsSCi.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Om4hKmsSCi; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dump__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Dump */ "./components/Dump.js");
var _jsxFileName = "/Users/williamandree/Kod3n/dumptruck/pages/kiptok/Om4hKmsSCi.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var sourceURLS = ["https://lh3.googleusercontent.com/yD53DpdTuw--jpw0LCHyQYCq36NcCIXbypLQtglwRV2at0bVIFG28caXehnTNrUGWDGpEOuna5o60vJYbdq8MdyVBbaTmelxn2zJ1A1GB5QE5vzrv1BqHE9friuZn_M5tGmbS51GLRSihTwLFHyRtDp-meai2LIg7iKcOsTgqZM0MHAd6ppFXC_Y94DPLzRPivtf7Z7uXlEUpWGgUPDbqVrxbRMuuHLxSYilA1-yGToQ08-SKdCe29MoNEcpCZFD9roMmCRMeSDcLRFlUD5x6yh5u_YHFSSUeyLoNm8fgL9IsnaOseJ5RR3vxEfTS_rakLxBPN5NVDUEeoSMDLxMIcqJ-dzScEqvAQSLDb3ORsa42Q63D7RoH6N5NsrVEJcyCIIj8iMoEdwj1986rkUgX2Qp5hYC8mIrsSEEPbYaQd_L5px2QxD-gjWYDSyQdzUQFw768ksPiKCiUPdTmKw61GwmtUsrJlWETpSoCJtY8P4-AHu4Dq0CWGj8wUq6orDGIDlpBO-_p8e-zuvygNVBXF6mDNHt26vXcN65A-Dgu1KGk5h0ZK1YAr_1-4pcdeaXXBjmvYE8XOSTKbKcYUJleYeMwuJaZI7uxl-cNolr0Oyswm7e4z64pxEDLmI4nmtovT98cHtOin5FOOgJ1yvy0fg2cna-foTofrT4KwVgo34XLDkGi-g=w1440-h479-ft", "https://lh3.googleusercontent.com/2P2ZxHIQmGGusAw1hRYoLkk3z8nnrb5D01r_1yuabO3CxGScgLpUWhO26G-dojKiOyjtJvdQEKcJNl7l4BW5zOgLkSnnN89rzBkGFOkRYEr_XNwybNuHeSeyaknNYxobhf1eGKVW024TKa9gRsAZww35YiBzAoziUOF2k1cqOJHpmNozFel45_Uc-p3SD7tE4N2LD-bN1NBPrdmz-2DwuNIPfGa7M2U8ny6jOT-TOT4h99O-D58wJBEw8puaj2Zlz7008CxnMCkSBzVGn3xijp8T3efSXPVo1uwSG919thFJNnldw68tYfZXoKj70RtaRTLncEWZgXvFdT2i0Vnd5-NLkgTeZjwSPP9z3lnr96JA7S-wj98robuQKnb_pfM9-h_1hAB4mA5SK4U8G5uW_7YwakSjjv56vz72Z_xYBiW-hCS95lW1BVSxEg2z1XpaXXHo8xBsZ26Q6Z953U71Eo23a0NQIbHzl2g936npU9kfYP0WOew7gfB2-PAhR4Cl7m__gFdS6Lp9NSnaMEUzVkLGkK1G3bHvtb6GvYb6pmUneFGsIDGYR5jncYqUOXMFCghdoPBOTwXaUtYsUPVB7nZHGAoo_NibLh3fY9UchRyjdahghdsrIsLRrynOYJme3Ev4s4U1XXY1cw6HHc6fwbbYoY2gneR3ZRY3wT9XyEamZBTjTqw=w1440-h479-ft", "https://lh3.googleusercontent.com/ro3j1lLvHTXjccV3tYgnJ7gdxznrON95dcbF3gddLbp14rGQ6tLWmD1V2HFR_vEuGnUIHynaWpswVdUGQOUBgKKhKNw4sT-C-1d1_aKJSLOkSiIySzQtkMCFVUHZG9ULtssFydD41anJ3QD3Q_zZyWBMy15gB45gv87EeoSYRfNKhcFcTF_o_IeM0bzHXSRUElFSpA7q6rY46xKrkW7_vBGli-1jQhwAjBYxCFzpLIfpT00YJAPtt_QINnl3YhtsyU0xU5qD_tdDpLxDjZ9-G5EqnMZnmH-4jq7xsC82H1ULwxGSrjutlu8tLVZDrZ9LsTcPkjmLRH99nwWYnWdFPfw6smsId8s_Ywd_LjOjXtppsX5TiJIjdsNwPhRleGbpZYRWmFZyztwseRRw5pomBp8oOn1KcgsXxLRfZDuW6wMUAeYN3OTjPJA6ebSAQtxgxxP0-QARyN8cbwYpaM7yX4XTvocSLH5ExQasaK8LmSPMhJcIw1XgeAZkgQeEivUe3-8MTuyq_JbGq3H6fSchKQ_LCb88EiXvIvdOCeysTJvsYvVNDVrgWq7ek216y3tx-Ru68VFBoM-2W42dZVrPm3pA1RGgAEnTfqp79mLXZnU_85uuX_-aycH1U2iCEuxCJsI4b1D_lQ8AcEJnbS3LzhVqBAf8B8cl_qiHZhjTgaI7tZBa1Uk=w1396-h766-ft", "https://lh3.googleusercontent.com/iN2y36wboD0yhE_dfey4u4GWxgYw9bYUALwEtZylgVZxrbekbjn5J09wQ4sQf-rWSLc9FIR1wc4LMXGDhdhHsFwnsoEclCJAGr02BQYg5OB2mF0-7GRuMD_UMSDGdjq0SVWGEWb6mPW1Mek0YnB4E-Cy3lEOCbf0MgCOBj-OJhD6HGhQZ_F6v7hnhjixXWtnhIbGyI3DgTgqxkrySAa9I1t_Zl6U5LZoJy-I25cVitSlV8ZQGXUFXj1L2ifzIhDLjqh0_Kjp1i54AQQ4Tz5yVdcqDz3p-ETYBc0Z79uwA8pW7v_OV3Nr4cu7FkG5-qn2hy_b6bZM12LZR97YJj42st1udXpjRKP_B2T1EASq1Nkvsh7lJ_Z-UKPob-9JdNEZFPPry5RF4tpBgGUQalw6euUoiLx3IFcG--37LjwxA9HSiY_UNEm4sR-AgJUYi55WYdFlvEl2m1bhoQfyzn1jcCly-jSDSlgP5D8eLPoSAjPvsCUO-0obOJFvit57FEwTp4e0-W4L_6EVKOMGUxA8NK2ds7zZJz3PXC-FBqPQYdks5OofvHS40IzPmdlWw8BOp6RWuCkXCQ1o0y6I1O8hjVu4swI3nqD7YPIGrOr-JrRC1uLY29DA5xjE3kg49MOnBQzu3XiYd9qu1UolcEoGhrdc6exSUtrMJ_TnY2r3wnzGTHU8OuY=w1396-h766-ft", "https://lh3.googleusercontent.com/n15GD7HGBQa1sYNVREehvJ_ME-RHB_8gHklZf0aOGoF2FEBizk-dxO_o-2dK3ugLTE30gy30_HZoSqKWTYVQUC-7I0QUSbBzL_f7dwJxBXULFLBDKmCHIaFUrKTJlkvL_amOF0p8Ttm0nCwx1WFBQtwGwA1TEs5cxagVOPpUJB_eAPPJ7BMyfUDp5sGNFCXH4Sc2CdSLg1l4-_GNg2f_FLoRk15H5fruaFlZ4MRHf8wUnpURGO_jgvDz4kbMs7OIkT2PkomOAejYsVF7cH_J2U-dSGHgfktPvcIePrJ2U9ldmblcsTToXM3ZccXu5YW91K3BEJjkyPYO14V8cck8L19MBTSkNslt-CxnE9injt8fte0ScihHtO50BnKE2UWMqF1hyRIQboUUC_A6zhu2wcdKerWx6JUAZP257PmhiJtVGbMBx8cjX7H9E3grnOIUGuFKOwU-hHhKBkENLJZFye0TSUIDOJeDusKVXZ4g4MqNVUUJcDspzvAN0zLZgYW5KNDtZR_nabyfQ7TU_gJZxk5wU-2TAWa8rRFWiVAGd506hm-PeNKw72BPmotZMYkX1LrFOMrtw2oTx2QOdoJ3W9VpdcHSFnANte055rLkgm2SwcR_kxOnEaf97HtFM0BWqvseYKN7ipQw0vfCZLDAbhnPsO2QhuRzJHNe-advP4fw2QFPd74=w1440-h479-ft", "https://lh3.googleusercontent.com/y7x-M_0ZQxYa4hLnFb1asHXizsv6xFebGxQCziXIRBATB5gf81N__uM2knyilOs-OOfp7dXEyWRli9HxDS5DAkmcG-QCkSh7KtIEfR84RKH7E5VUhXdt5O0mHmShhtJ2F7pBjxlTVuP0Pe-zNgNbaVuOVSoQ_-Eh-3eCbE2Sl8eM492o9VAir_JyhphZGfFz45oSlY49YG2bMJH6Kga2YFFagikAZlrYBP7YjMZ9qQZvJy7bmRUiprAsUzZrfAVZbw7dold1-ll-Z5R4sGagc0nPxeuBZTOZcO50UzuXtgQQ_LbhBhXOPxXy8RApZ_lqdi4nlFrOBeYlqN6acm6WLoyuSSBV_pwzAKw3m9HicbSvPAjt4D9UerqhYVJweBJEqwZ6jOyNvzbdxYmZ44GCMYWF_nTKDwDOYEE8USPyQvQESbjLI_sRL0D85JuhbaIDpG_3BAS4FaSkfmgwXA1XTy21Hb0Swp94L56ZRReyK9Ot2vKHZ67whWxPw-qSlAOi4Slq1tl27Y1JUtwp_T4r16snzVoAEBwjVEJKP03T-VZnmDiWAJFCzpIVl-OnesEGazdmI0qtztpGQXaKFEEIkPXKDBQkqzy6V_toS-H7VB_tfZgI_dvufjP17QuNI5dK21gyAK6Z7sxbZXewdxD5GFMtTuUd4_1WAX7CuZ1s3aSOSqCTK_8=w1440-h479-ft", "https://lh3.googleusercontent.com/LBdWWY3ivejLPuwPvEtuIlURqxb7ZfK58H7bi-m76_JKRxKMMHJjMb68pacjjWdAhOoV8KzcFuW4YvFpEZ2ljjkkd0uaplqLZ5bDPdSpDOUIjaQ7hyF7tpXO7GFcAZ3qv_dVXIlIuycf7b1pn7yyvuLyM05L4D5agOs_WWtbmCXqw2z5y-4hCWR5TCpyhZvi2Piqi4rslbMb63y8wTEnZhkNANwWUs07Oa0aH-Qwm5KVVYPNNs76mk8AGE87Ap-QZvHOtyRbuQSnlWqYu2zkHXPqdu8iBc7-5pOJ1dK5oVvWQjwUNm91sz3B-bYziQG63tx-hycBBG6j8thRpr-K006bs1pQuSZFywu3MZV3S-JDASP5rS-Nzpn3a_FZf-ca8F4e0iDbKsGg9rLQ9B9CdCkvxWkjOq3R8hngRpiopwDLJu7Sc-d5BK1mZtW07U5CRAFlaqpfarbMuuCGilzRChCc-jqJ7OAS73ucy5Ga4HScvQmeB70yLKvoEU8vmteuv2ASVUM_1DEtumsfRvz4xb_rxY6Wl7aNF2yOLZeViTtNeno5ULRwrIyr-JH9XUo0VZSNQ3gXM5xuRRt4rLfDTBBspMQ94b8NVqpX0Gi8F--ObPeIrCkFrDT4Kn8uTJl1KhFiw9r01uFE_QLj-VX5qBWwiegiWTrt1xkbdZMZDgH_ZmUBq-k=w1396-h766-ft", "https://lh3.googleusercontent.com/3UOHN6M8y_6g1QC7aqVOgSlegm1lye3GPfkr8q9t96Qoc5TVPCCxOJXw0NVk4euEpuR1fkdFFzZFENo2HHBp7aoO3a6Z9rGYJPduOGBhVEfwZQ-1k_2QQRnW16UJ5gBe7Dcs7saFvIOMtHMBGTH2sXr3WODHNjij82RBKJkigJj8r_WoFKZp3W7wGgf_Ja-itXVn2v0LsuJGDqWO4ruu5i-UWofWa-XL_r4t_UzeF4WYu5RfzAM0NVil610eS9GU2d-rqWAURmX_41OhdRsEVfylfngyvWGOaV-Y0_9twYweklYZCtRxXQQlNOMA3lpvYKbY6Pxglhlrn7dtVFHWxVGN0K2dPYhYJVod6PVf5Zvtbjhy0AElN2dNcyiBKbIa34pQ4NFmNmHLOyvKCzDdIaMU_X8oEyarpEWT7Q2JUPcUiY2ZmBpPpFOBS76z_dpWJb4VVubFxPubiB6VyZd6OC6crdoLoCsbs5WTnQzaqRF8zWd-PrjxUeP3eTs9F6WCEGKY7HEZcXr_5rNtSLfD-V2woAenvNyORWNiqteCkDSNh3FbN_UlKtoWvsobET_-u4A2H70wVxr5NoMtQJhk_nDNgpUP120mi6pMYLhnJw1bmRhed-jqDogFHqo79aN41E4zvWtZwjycj7hcYmx6-Hn56iJBHvUfa-OMtKD2C3m6jT0vPxw=w1440-h479-ft", "https://lh3.googleusercontent.com/XA-MH9P1mDOvybJTjJbgsruOm9eMdd7V4QcEBt79xB-yaWvy71CXDf-wp66CJW7eOVJe42SZgMGiPYPhfzL46MVZylfg4wItNJg0b0rf_272w4KXdux8eSNgFaUtSjiG1VcpiyQcWcdQxfdORWI9dSOy64Q7Yi0mpWmC_oYg98nj5iNmxFLe9aryObt9IHifbFtaJSlzYwjshdA6kBtJjsi2pirh1OsIhaiZ4Ey_ESq32gRuGnuqcWJ4US6mwv5HfPBuxxto9b3zkq_X07KQ1wviT8Mco3Nnf79g0Qolm4W4_0wtGnRaMhwMjDWUxGWeh6r8AeUXWUup59a3By48P1XY_Z2dYvWTw7weUh4AngKMqL-DPJN0K8rkcnqfD0qIaGjoLH3DPczNcUnCferI2jhtwWDglQaiH6JBbX6AYjAAGOhoCju5V4ZnNhlDFwl2jx31eOPR6Lu0n07N6i1jrA1O6cmbFA0Z2PMm1YBY4ihM3UE9cV1ZwR3QlbupSPJTSvtthIvJ7NFfEZxmiydJp6AdqlEt2Ki4DXREqVfyyJZXlQ6GLRil7rcfUfqlPuKseWuqJGqsQOaXIDj039PArdUwpOEEe-QQ786BNUODU77DQD6jJ-agu3gUx0dagc7W6wN4zmDBfy9riz11wdJa5hCuj8G1lTxywmRSQwmxDQiocbhQOoM=w1396-h766-ft"];
function Om4hKmsSCi() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_Dump__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "kiptok",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, sourceURLS.map(function (url) {
    return __jsx("img", {
      className: "workComponent",
      src: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    });
  })));
}

/***/ }),

/***/ 2:
/*!*****************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fkiptok%2FOm4hKmsSCi&absolutePagePath=%2FUsers%2Fwilliamandree%2FKod3n%2Fdumptruck%2Fpages%2Fkiptok%2FOm4hKmsSCi.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fkiptok%2FOm4hKmsSCi&absolutePagePath=%2FUsers%2Fwilliamandree%2FKod3n%2Fdumptruck%2Fpages%2Fkiptok%2FOm4hKmsSCi.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fkiptok%2FOm4hKmsSCi&absolutePagePath=%2FUsers%2Fwilliamandree%2FKod3n%2Fdumptruck%2Fpages%2Fkiptok%2FOm4hKmsSCi.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=Om4hKmsSCi.js.map