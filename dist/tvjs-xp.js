/*!
 * TVJS Std Extension Pack - v0.3.0 - Sun Nov 26 2023
 *     https://github.com/tvjsx/tvjs-xp
 *     Copyright (c) 2020 c451 Code's All Right;
 *     Licensed under the MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (!root['trading-vue-js']) {
        root['trading-vue-js'] = root['TradingVueJs']
    }
    if (!root['vue']) {
        root['vue'] = root['Vue']
    }
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("trading-vue-js"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["trading-vue-js", "vue"], factory);
	else if(typeof exports === 'object')
		exports["TvjsXP"] = factory(require("trading-vue-js"), require("vue"));
	else
		root["TvjsXP"] = factory(root["trading-vue-js"], root["vue"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__252__, __WEBPACK_EXTERNAL_MODULE__748__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ 646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(228);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 575:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 913:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 713:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 860:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 206:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(646);

var iterableToArray = __webpack_require__(860);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableSpread = __webpack_require__(206);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(228);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ 90:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.tvjs-std-input {\n    margin: 5px;\n    background-color: #161b27;\n    border: 1px dotted #353940;\n    height: 22px;\n    border-radius: 3px;\n    padding: 2px 0px 3px 10px;\n    color: whitesmoke;\n    font-size: 1.2em;\n    outline: none;\n    width: 100px;\n}\nselect.tvjs-std-input {\n    height: 29px;\n    -moz-appearance: none;\n}\nselect.tvjs-std-input  {\n    //display: none; /*hide original SELECT element: */\n}\n.tvjs-std-input::placeholder {\n    color: #8e909a;\n    opacity: 0.25;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 486:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.tvjs-x-window {\n    position: absolute;\n    background: #1b202def;\n    border-radius: 3px;\n    pointer-events: all;\n    padding-left: 7px;\n    z-index: 100;\n    color: #dedddd;\n}\n.tvjs-x-window-head {\n    font-size: 2em;\n    user-select: none;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-content: center;\n    align-items: center;\n    height: 36px;\n    padding: 10px;\n    cursor: grab;\n}\n.tvjs-x-window-body {\n    padding: 10px;\n    font-size: 1.1em;\n}\n.tvjs-x-window-title {\n    width: 300px;\n    user-select: none;\n}\n.tvjs-x-window-close {\n    width: 26px;\n    cursor: pointer;\n    margin: -1em;\n    padding: 1em;\n    font-size: 0.75em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 985:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.h-splitter[data-v-189fccad] {\n    position: absolute;\n    left: 0;\n    height: 5px;\n    margin-top: -2px;\n    width: 100%;\n    z-index: 1;\n    background-color: #3ee4afb5;\n    opacity: 0;\n    pointer-events: all;\n}\n.h-splitter[data-v-189fccad]:hover {\n    cursor: row-resize;\n    opacity: 1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 283:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.tvjs-x-window.add-win[data-v-53408ac7] {\n    padding-bottom: 30px;\n    border: 1px solid #80808011;\n}\n.add-win-list[data-v-53408ac7] {\n    height: 300px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    user-select: none;\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n.add-win-list[data-v-53408ac7]::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.add-win-list[data-v-53408ac7] {\n  -ms-overflow-style: none;  /* IE and Edge */\n  scrollbar-width: none;  /* Firefox */\n}\n.add-win-item[data-v-53408ac7] {\n    color: #ffffff88;\n    width: 100%;\n    padding: 5px;\n    cursor: pointer;\n}\n.add-win-item[data-v-53408ac7]:hover {\n    background: #88888822;\n    color: #ffffffff;\n}\n.add-win-item-desc[data-v-53408ac7] {\n    color: #ffffff33;\n    margin-left: 3px;\n}\n.add-win-item:hover .add-win-item-desc[data-v-53408ac7] {\n    color: #ffffff44;\n}\n.add-win-empty[data-v-53408ac7] {\n    opacity: 0.5;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 855:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.tvjs-x-window.sett-win[data-v-5d223b0e] {\n    padding-bottom: 30px;\n    border: 1px solid #80808011;\n}\n.sett-win-item[data-v-5d223b0e] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-content: center;\n    align-items: center;\n}\n.sett-win-item label[data-v-5d223b0e] {\n    min-width: 80px;\n    color: #35a776;\n}\n.sett-win-empty[data-v-5d223b0e] {\n    opacity: 0.5;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 92:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("c03f22ea", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 144:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(486);
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("4007806b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(985);
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("00e7b1b4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(283);
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("657d4da2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(855);
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("3692d5e9", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ addStylesClient)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 252:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__252__;

/***/ }),

/***/ 748:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__748__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_prod)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(319);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(575);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(913);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
;// CONCATENATED MODULE: ./src/extensions/chart-link/shared.js


//  Object shared beetween tvjs instances
var Shared = function Shared() {
  classCallCheck_default()(this, Shared);

  this.__id__ = Math.random();
};

/* harmony default export */ const shared = (new Shared());
;// CONCATENATED MODULE: ./src/extensions/chart-link/utils.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ const utils = ({
  copy: function copy(obj, mod) {
    var copy = JSON.parse(JSON.stringify(obj));
    return Object.assign(copy, mod);
  },
  removed: function removed(ids, prev) {
    var list = [];

    var _iterator = _createForOfIteratorHelper(prev),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var id = _step.value;

        if (!ids.includes(id)) {
          list.push(id);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return list;
  }
});
;// CONCATENATED MODULE: ./src/extensions/chart-link/main.js




function main_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = main_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return main_arrayLikeToArray(o, minLen); }

function main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* Example:

rules: {
    '* -> *': {},     // From each to each
    '*': {            // The same as ^
        cursor: true, // bool, 'X', 'Y', 'XY'
        position: 'X', // bool, 'X', 'Y', 'XY'
        tools: true
    },
    'trading-vue-1 -> trading-vue-2': {
        data: [
            'onchart.SMA',
            'RSI4H',
            {
                from: 'chart.data',
                to: 'datasets',
                obj: {
                    id: 'small-tf-data',
                    type: 'SourceData'
                }
            }
        ]
    },
    'none': {
        range: 'X', // bool, 'X', 'Y', 'XY'
    }
}
*/



var Main = /*#__PURE__*/function () {
  function Main(tv, dc, sett) {
    classCallCheck_default()(this, Main);

    if (sett.use_window) {
      if (!window.xchartlink$) {
        window.xchartlink$ = {};
      }

      this.shared = window.xchartlink$;
    } else {
      this.shared = shared;
    }

    this.tv = tv;
    this.dc = dc;
    this.sett = sett;
    this.targets = {};
    this.onsettings({
      'chart-link': sett
    });
  }

  createClass_default()(Main, [{
    key: "onsettings",
    value: function onsettings(all) {
      var _this = this;

      clearTimeout(this.reset_id);
      this.sett = all['chart-link'];

      if (!this.shared.rules) {
        this.shared.rules = {};
        this.shared.refs = {};
        this.shared.meta = {};
      }

      var el = document.getElementById(this.tv.id);

      if (this.sett.rules && el) {
        this.shared.rules[this.tv.id] = this.sett.rules;
      }

      this.shared.refs[this.tv.id] = this.tv;
      this.combine();
      this.reset_id = setTimeout(function () {
        return _this.reset();
      });
    } //  Combine rules from different instances

  }, {
    key: "combine",
    value: function combine() {
      this.shared.combined = {};

      for (var id in this.shared.rules) {
        for (var r in this.shared.rules[id]) {
          this.shared.combined[r] = this.shared.rules[id][r];
        }
      }
    } // Compile rules for this instance

  }, {
    key: "compile",
    value: function compile() {
      var gebcn = 'getElementsByClassName';

      var els = toConsumableArray_default()(document[gebcn]('trading-vue'));

      this.targets = {};

      var _iterator = main_createForOfIteratorHelper(els),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;
          if (el.id === this.tv.id) continue;
          this.targets[el.id] = {};
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var rules = this.rank(this.shared.combined);

      var _iterator2 = main_createForOfIteratorHelper(rules),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var r = _step2.value;
          var dst = r.pair[1];

          if (dst === '*') {
            dst = Object.keys(this.targets);
          }

          if (Array.isArray(dst)) {
            var _iterator3 = main_createForOfIteratorHelper(dst),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var d = _step3.value;
                if (!(d in this.targets)) continue;
                Object.assign(this.targets[d], r.r);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else {
            if (!(dst in this.targets)) continue;
            Object.assign(this.targets[dst], r.r);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } // Select, rank & sort the rules

  }, {
    key: "rank",
    value: function rank(rules) {
      var out = [];

      for (var r in rules) {
        var pair = this.splitr(r);
        if (!this.matches(pair[0])) continue;

        if (pair[0] === '*') {
          var rank = 20;
        } else if (Array.isArray(pair[0])) {
          rank = 10;
        } else {
          rank = 0;
        }

        if (pair[1] === '*') {
          rank += 2;
        } else if (Array.isArray(pair[1])) {
          rank += 1;
        } else {
          rank += 0;
        }

        out.push({
          pair: pair,
          rank: rank,
          r: rules[r]
        });
      }

      return out.sort(function (a, b) {
        return b.rank - a.rank;
      });
    } // Check if the source of a rule matches tv.id

  }, {
    key: "matches",
    value: function matches(src) {
      return src === '*' || src === this.tv.id || Array.isArray(src) && src.includes(this.tv.id);
    }
  }, {
    key: "splitr",
    value: function splitr(rule) {
      if (rule.trim() === '*') return ['*', '*'];
      return rule.split('->').map(function (x) {
        var tup = x.split(',');

        if (tup.length > 1) {
          return tup.map(function (y) {
            return y.trim();
          });
        }

        return x.trim();
      });
    } // Apply all rules for this instance

  }, {
    key: "reset",
    value: function reset() {
      var _this2 = this;

      this.compile(); // Enable some chart hook events

      this.tv.$refs.chart.hooks('xchanged');
      this.tv.$watch(function (x) {
        return _this2.dc.get('.').filter(function (x) {
          return x.settings.$state;
        });
      }, this.ontools.bind(this));
    } // Listening to the Chart.vue hooks &
    // other events

  }, {
    key: "update",
    value: function update(e) {
      switch (e.event) {
        case '?x-changed':
          var cursor = e.args[0];
          if (cursor.preventDefault) return;
          var main = this.tv.$refs.chart._layout.grids[cursor.grid_id];
          var mc = this.tv.$refs.chart.cursor;
          cursor.t = mc.t;
          cursor.$ = mc.y$;

          for (var id in this.targets) {
            var r = this.targets[id].cursor;

            if (r) {
              var tv = this.shared.refs[id];
              var g = tv.$refs.chart._layout.grids[0];
              var xx = this.isX(r);
              var yy = g.id === main.id && this.isY(r);
              var upd = {
                preventDefault: true,
                x: xx ? g.t2screen(cursor.t) : -10,
                y: yy ? g.$2screen(cursor.$) : -10,
                grid_id: 0
              };
              tv.$refs.chart.cursor_changed(upd);
              tv.$refs.chart.cursor.t = xx ? cursor.t : -10;
              tv.$refs.chart.cursor.y$ = yy ? cursor.$ : -10;
            }
          }

          break;

        case 'range-changed':
          var now = new Date().getTime();
          var meta = this.shared.meta[this.tv.id];

          if (meta && meta.position) {
            if (meta.position.lock > now) return;
          }

          var range = e.args[0];

          for (var id in this.targets) {
            var _r = this.targets[id].position;
            var _tv = this.shared.refs[id];

            var _xx = this.isX(_r);

            var _yy = this.isY(_r);

            if (!this.shared.meta[id]) {
              this.shared.meta[id] = {};
            } // Prevents an infinite loop


            this.shared.meta[id].position = {
              lock: now + 100
            };
            if (_xx) _tv["goto"](range[1]);
          }

          break;
      }
    }
  }, {
    key: "ontools",
    value: function ontools(n, p) {
      var _this3 = this;

      var rem = utils.removed(n.map(function (x) {
        return x.settings.$uuid;
      }), p.map(function (x) {
        return x.settings.$uuid;
      }));
      var now = new Date().getTime();
      var meta = this.shared.meta[this.tv.id];

      if (meta && meta.tools) {
        if (meta.tools.lock > now) return;
      }

      var _loop = function _loop() {
        var r = _this3.targets[id].tools;
        var tv = _this3.shared.refs[id];

        if (r) {
          if (!_this3.shared.meta[id]) {
            _this3.shared.meta[id] = {};
          } // Prevents an infinite loop


          _this3.shared.meta[id].tools = {
            lock: now + 100
          };

          _this3.copy_tools(n, tv);

          rem.forEach(function (r) {
            return tv.data.del("".concat(r));
          });
        }
      };

      for (var id in this.targets) {
        _loop();
      }
    }
  }, {
    key: "copy_tools",
    value: function copy_tools(n, tv) {
      var _iterator4 = main_createForOfIteratorHelper(n),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var tool = _step4.value;
          if (tool.id.includes('offchart')) continue;
          var uuid = tool.settings.$uuid;
          var exi = tv.data.get_one("".concat(uuid));

          if (exi) {
            tv.$set(exi, 'settings', utils.copy(tool.settings, {
              $selected: false,
              $state: 'finished'
            })); // TODO: maybe add a proper method
            // of accessing overlays

            var ovs = tv.$refs.chart.$refs.sec[0].$refs.grid.$children.filter(function (x) {
              return x.tool;
            });

            var _iterator5 = main_createForOfIteratorHelper(ovs),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var ov = _step5.value;
                ov.pins.forEach(function (x) {
                  return x.re_init();
                });
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          } else {
            var copy = utils.copy(tool);
            copy.settings.$selected = false;
            copy.settings.$state = 'finished';
            tv.data.add('onchart', copy);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "isX",
    value: function isX(rule) {
      return rule === true || typeof rule === 'string' && rule.includes('X');
    }
  }, {
    key: "isY",
    value: function isY(rule) {
      return rule === true || typeof rule === 'string' && rule.includes('Y');
    }
  }]);

  return Main;
}();


;// CONCATENATED MODULE: ./build/chart-link/chart-link.js
// -------- Production extension index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// Do not commit this file, the final index is
// compiled by the repo owner, use index_dev.js to
// experiment: 'npm run compile'

Main.__name__ = 'chart-link';
var widgets = {};
var components = {};
var overlays = {};
var colorpacks = {};
var skins = {};
var Pack = {
  widgets: widgets,
  components: components,
  overlays: overlays,
  colorpacks: colorpacks,
  skins: skins,
  Main: Main
};
/* harmony default export */ const chart_link = (Pack);

// EXTERNAL MODULE: external "trading-vue-js"
var external_trading_vue_js_ = __webpack_require__(252);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(748);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/extensions/grid-resize/Splitter.vue?vue&type=template&id=189fccad&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", {
    staticClass: "h-splitter",
    style: _vm.hs_style,
    on: { mousedown: _vm.hs_mousedown }
  })
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/extensions/grid-resize/Splitter.vue?vue&type=template&id=189fccad&scoped=true&

;// CONCATENATED MODULE: ./src/extensions/grid-resize/utils.js
/* harmony default export */ const grid_resize_utils = ({
  add_style: function add_style(id, style) {
    var stbr = document.getElementById(id);

    if (stbr) {
      var sheetParent = stbr.parentNode;
      sheetParent.removeChild(stbr);
    }

    var sheet = document.createElement('style');
    sheet.setAttribute("id", id);
    sheet.innerHTML = style;
    document.body.appendChild(sheet);
  },
  rem_style: function rem_style(id, style) {
    var stbr = document.getElementById(id);

    if (stbr) {
      var sheetParent = stbr.parentNode;
      sheetParent.removeChild(stbr);
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/extensions/grid-resize/Splitter.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ const Splittervue_type_script_lang_js_ = ({
  name: 'Splitter',
  props: ['id', 'main', 'dc', 'tv', 'data'],
  mounted: function mounted() {
    this.MIN_HEIGHT = this.data.sett.min_height || 20;
  },
  methods: {
    hs_mousedown: function hs_mousedown(e) {
      this.drag = {
        type: 'hs',
        y: e.clientY,
        h1: this.data.grid1.height,
        h2: this.data.grid2.height
      };
      grid_resize_utils.add_style('disable-user-select', "body * {\n                user-select: none;\n            }\n            .trading-vue-chart {\n                pointer-events: none;\n            }");
    },
    hs_mouseup: function hs_mouseup(e) {
      this.drag = null;
      grid_resize_utils.rem_style('disable-user-select');
    },
    hs_mousemove: function hs_mousemove(e) {
      if (this.drag) {
        var off = e.clientY - this.drag.y;
        var new_h1 = this.drag.h1 + off;
        var new_h2 = this.drag.h2 - off;

        if (new_h1 > this.MIN_HEIGHT && new_h2 > this.MIN_HEIGHT) {
          this.data.grid1.height = new_h1;
          this.data.grid2.height = new_h2;
        }

        this.main.calc_heights();
      }
    },
    hs_mouseleave: function hs_mouseleave(e) {
      this.drag = null;
      grid_resize_utils.rem_style('disable-user-select');
    }
  },
  computed: {
    hs_style: function hs_style() {
      return {
        drag: null,
        top: this.data.grid2.offset + 'px' //backgroundColor: this.colors.splitter

      };
    }
  }
});
;// CONCATENATED MODULE: ./src/extensions/grid-resize/Splitter.vue?vue&type=script&lang=js&
 /* harmony default export */ const grid_resize_Splittervue_type_script_lang_js_ = (Splittervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/extensions/grid-resize/Splitter.vue?vue&type=style&index=0&id=189fccad&scoped=true&lang=css&
var Splittervue_type_style_index_0_id_189fccad_scoped_true_lang_css_ = __webpack_require__(712);
;// CONCATENATED MODULE: ./src/extensions/grid-resize/Splitter.vue?vue&type=style&index=0&id=189fccad&scoped=true&lang=css&
 /* harmony default export */ const grid_resize_Splittervue_type_style_index_0_id_189fccad_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/extensions/grid-resize/Splitter.vue



;


/* normalize component */

var component = normalizeComponent(
  grid_resize_Splittervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "189fccad",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/extensions/grid-resize/Splitter.vue"
/* harmony default export */ const Splitter = (component.exports);
;// CONCATENATED MODULE: ./src/extensions/grid-resize/main.js



function grid_resize_main_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = grid_resize_main_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function grid_resize_main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return grid_resize_main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return grid_resize_main_arrayLikeToArray(o, minLen); }

function grid_resize_main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Extension's controller




var main_Main = /*#__PURE__*/function () {
  function Main(tv, dc, sett) {
    var _this = this;

    classCallCheck_default()(this, Main);

    this.widgets = {};
    this.tv = tv;
    this.dc = dc;
    this.sett = sett;
    setTimeout(function () {
      _this.tv.$el.addEventListener('mousemove', _this.onmousemove.bind(_this));

      _this.tv.$el.addEventListener('mouseup', _this.onmouseup.bind(_this));

      _this.tv.$el.addEventListener('mouseleave', _this.onmouseleave.bind(_this));

      _this.place_splitters();

      _this.calc_heights(); // Track changes of grids count


      _this.tv.$watch(function (x) {
        return _this.dc.get('.').map(function (x) {
          return x.id;
        });
      }, _this.ongrids.bind(_this));
    });
  } // Listens to all tvjs events, creates new widgets


  createClass_default()(Main, [{
    key: "update",
    value: function update(e) {
      switch (e.event) {}
    } // Extension settings has changed

  }, {
    key: "onsettings",
    value: function onsettings(sett) {}
  }, {
    key: "ongrids",
    value: function ongrids() {
      var _this2 = this;

      setTimeout(function () {
        _this2.remove_widgets();

        _this2.place_splitters();
      });
    }
  }, {
    key: "onmousemove",
    value: function onmousemove(e) {
      var _this3 = this;

      // List of widgets created by this controller
      var list = this.tv.$refs.widgets.$children.filter(function (x) {
        return x.main === _this3;
      });

      var _iterator = grid_resize_main_createForOfIteratorHelper(list),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;
          s.hs_mousemove(e);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "onmouseup",
    value: function onmouseup(e) {
      var _this4 = this;

      // List of widgets created by this controller
      var list = this.tv.$refs.widgets.$children.filter(function (x) {
        return x.main === _this4;
      });

      var _iterator2 = grid_resize_main_createForOfIteratorHelper(list),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          s.hs_mouseup(e);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "onmouseleave",
    value: function onmouseleave(e) {
      var _this5 = this;

      // List of widgets created by this controller
      var list = this.tv.$refs.widgets.$children.filter(function (x) {
        return x.main === _this5;
      });

      var _iterator3 = grid_resize_main_createForOfIteratorHelper(list),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var s = _step3.value;
          s.hs_mouseleave(e);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "place_splitters",
    value: function place_splitters() {
      var grids = this.tv.$refs.chart._layout.grids;

      for (var i = 1; i < grids.length; i++) {
        var g1 = grids[i - 1];
        var g2 = grids[i];
        var id = "Splitter-".concat(g1.id, "-").concat(g2.id, "-").concat(external_trading_vue_js_.Utils.uuid2());
        external_vue_default().set(this.widgets, id, {
          id: id,
          cls: Splitter,
          data: {
            grid1: g1,
            grid2: g2,
            sett: this.sett
          }
        });
      }
    }
  }, {
    key: "calc_heights",
    value: function calc_heights() {
      var hs = [];

      var _iterator4 = grid_resize_main_createForOfIteratorHelper(this.tv.$refs.chart._layout.grids),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var g = _step4.value;
          hs.push(g.height);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var sum = hs.reduce(function (a, b) {
        return a + b;
      }, 0);
      hs = hs.map(function (h) {
        return h / sum;
      });
      this.grid_ovs().forEach(function (ov, i) {
        if (!ov.grid) {
          external_vue_default().set(ov, 'grid', {});
        }

        external_vue_default().set(ov.grid, 'height', hs[i] || 1);
      });
    } // Grid defining overlays

  }, {
    key: "grid_ovs",
    value: function grid_ovs() {
      var list = [this.dc.data.chart];

      var _iterator5 = grid_resize_main_createForOfIteratorHelper(this.dc.data.offchart),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var ov = _step5.value;

          if (!ov.grid || ov.grid.id === undefined) {
            list.push(ov);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return list;
    }
  }, {
    key: "remove_widgets",
    value: function remove_widgets() {
      for (var id in this.widgets) {
        this.tv.$delete(this.widgets, id);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.tv.$el.removeEventListener('mousemove', this.onmousemove);
      this.tv.$el.removeEventListener('mouseup', this.mouseup);
      this.tv.$el.removeEventListener('mouseleave', this.mouseleave);
    }
  }]);

  return Main;
}();


;// CONCATENATED MODULE: ./build/grid-resize/grid-resize.js
// -------- Production extension index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// Do not commit this file, the final index is
// compiled by the repo owner, use index_dev.js to
// experiment: 'npm run compile'

main_Main.__name__ = 'grid-resize';
var grid_resize_widgets = {};
var grid_resize_components = {};
var grid_resize_overlays = {};
var grid_resize_colorpacks = {};
var grid_resize_skins = {};
var grid_resize_Pack = {
  widgets: grid_resize_widgets,
  components: grid_resize_components,
  overlays: grid_resize_overlays,
  colorpacks: grid_resize_colorpacks,
  skins: grid_resize_skins,
  Main: main_Main
};
/* harmony default export */ const grid_resize = (grid_resize_Pack);

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/extensions/legend-buttons/AddWin.vue?vue&type=template&id=53408ac7&scoped=true&
var AddWinvue_type_template_id_53408ac7_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "window",
    {
      staticClass: "add-win",
      attrs: { title: "Add Overlay", tv: _vm.tv },
      on: { close: _vm.on_close }
    },
    [
      _c(
        "div",
        { staticClass: "add-win-list" },
        _vm._l(_vm.ovs, function(ov) {
          return _c(
            "div",
            {
              staticClass: "add-win-item",
              on: {
                click: function($event) {
                  return _vm.on_click(ov.name)
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(ov.name))]),
              _vm._v(" "),
              _c("span", { staticClass: "add-win-item-desc" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(ov.methods.meta_info().desc) +
                    "\n            "
                )
              ])
            ]
          )
        }),
        0
      )
    ]
  )
}
var AddWinvue_type_template_id_53408ac7_scoped_true_staticRenderFns = []
AddWinvue_type_template_id_53408ac7_scoped_true_render._withStripped = true


;// CONCATENATED MODULE: ./src/extensions/legend-buttons/AddWin.vue?vue&type=template&id=53408ac7&scoped=true&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Window.vue?vue&type=template&id=5b030a20&
var Windowvue_type_template_id_5b030a20_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "win", staticClass: "tvjs-x-window", style: _vm.style },
    [
      _c("div", { staticClass: "tvjs-x-window-head" }, [
        _c(
          "div",
          {
            staticClass: "tvjs-x-window-title",
            on: { mousedown: _vm.onMouseDown }
          },
          [_vm._v("\n            " + _vm._s(_vm.title) + "\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tvjs-x-window-close",
            on: {
              click: function($event) {
                return _vm.$emit("close")
              }
            }
          },
          [_vm._v("\n            ╳\n        ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tvjs-x-window-body" }, [_vm._t("default")], 2)
    ]
  )
}
var Windowvue_type_template_id_5b030a20_staticRenderFns = []
Windowvue_type_template_id_5b030a20_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/Window.vue?vue&type=template&id=5b030a20&

;// CONCATENATED MODULE: ./src/components/dragg.js
/* harmony default export */ const dragg = ({
  methods: {
    onMouseDown: function onMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      this.drag.offset_x = e.clientX - this.x;
      this.drag.offset_y = e.clientY - this.y;
      document.onmouseup = this.stopdrag;
      document.onmousemove = this.ondrag;
    },
    ondrag: function ondrag(e) {
      e = e || window.event;
      e.preventDefault();
      this.x = e.clientX - this.drag.offset_x;
      this.y = e.clientY - this.drag.offset_y;
    },
    stopdrag: function stopdrag() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  },
  data: function data() {
    return {
      drag: {
        offset_x: 0,
        offset_y: 0
      }
    };
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Window.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const Windowvue_type_script_lang_js_ = ({
  name: 'Window',
  mixins: [dragg],
  props: ['title', 'tv'],
  mounted: function mounted() {
    this.ww = this.$refs.win.clientWidth;
    this.wh = this.$refs.win.clientHeight;
    this.x = this.tvw * 0.5 - this.ww * 0.5;
    this.y = this.tvh * 0.5 - this.wh * 0.5;
  },
  computed: {
    style: function style() {
      return {
        top: "".concat(this.y, "px"),
        left: "".concat(this.x, "px")
      };
    },
    tvw: function tvw() {
      return this.$props.tv.width;
    },
    tvh: function tvh() {
      return this.$props.tv.height;
    }
  },
  data: function data() {
    return {
      ww: 0,
      wh: 0,
      x: 0,
      y: 0
    };
  }
});
;// CONCATENATED MODULE: ./src/components/Window.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Windowvue_type_script_lang_js_ = (Windowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Window.vue?vue&type=style&index=0&lang=css&
var Windowvue_type_style_index_0_lang_css_ = __webpack_require__(144);
;// CONCATENATED MODULE: ./src/components/Window.vue?vue&type=style&index=0&lang=css&
 /* harmony default export */ const components_Windowvue_type_style_index_0_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
;// CONCATENATED MODULE: ./src/components/Window.vue



;


/* normalize component */

var Window_component = normalizeComponent(
  components_Windowvue_type_script_lang_js_,
  Windowvue_type_template_id_5b030a20_render,
  Windowvue_type_template_id_5b030a20_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Window_api; }
Window_component.options.__file = "src/components/Window.vue"
/* harmony default export */ const Window = (Window_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/extensions/legend-buttons/AddWin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const AddWinvue_type_script_lang_js_ = ({
  name: 'AddWin',
  props: ['id', 'main', 'dc', 'tv', 'data'],
  components: {
    Window: Window
  },
  mounted: function mounted() {},
  methods: {
    on_close: function on_close() {
      this.$props.main.remove_widget(this.$props.id);
    },
    on_click: function on_click(name) {
      this.on_close();
      this.main.add_overlay({
        side: this.data.type,
        index: this.data.index,
        type: name
      });
    }
  },
  computed: {
    sett: function sett() {
      return this.$props.data.ov.settings;
    }
  },
  data: function data() {
    return {
      ovs: this.tv.overlays.filter(function (x) {
        return x.methods.calc;
      })
    };
  }
});
;// CONCATENATED MODULE: ./src/extensions/legend-buttons/AddWin.vue?vue&type=script&lang=js&
 /* harmony default export */ const legend_buttons_AddWinvue_type_script_lang_js_ = (AddWinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/extensions/legend-buttons/AddWin.vue?vue&type=style&index=0&id=53408ac7&scoped=true&lang=css&
var AddWinvue_type_style_index_0_id_53408ac7_scoped_true_lang_css_ = __webpack_require__(153);
;// CONCATENATED MODULE: ./src/extensions/legend-buttons/AddWin.vue?vue&type=style&index=0&id=53408ac7&scoped=true&lang=css&
 /* harmony default export */ const legend_buttons_AddWinvue_type_style_index_0_id_53408ac7_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
;// CONCATENATED MODULE: ./src/extensions/legend-buttons/AddWin.vue



;


/* normalize component */

var AddWin_component = normalizeComponent(
  legend_buttons_AddWinvue_type_script_lang_js_,
  AddWinvue_type_template_id_53408ac7_scoped_true_render,
  AddWinvue_type_template_id_53408ac7_scoped_true_staticRenderFns,
  false,
  null,
  "53408ac7",
  null
  
)

/* hot reload */
if (false) { var AddWin_api; }
AddWin_component.options.__file = "src/extensions/legend-buttons/AddWin.vue"
/* harmony default export */ const AddWin = (AddWin_component.exports);
;// CONCATENATED MODULE: ./src/extensions/legend-buttons/main.js



function legend_buttons_main_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = legend_buttons_main_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function legend_buttons_main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return legend_buttons_main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return legend_buttons_main_arrayLikeToArray(o, minLen); }

function legend_buttons_main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Extension's controller




var legend_buttons_main_Main = /*#__PURE__*/function () {
  function Main(tv, dc, sett) {
    classCallCheck_default()(this, Main);

    this.widgets = {};
    this.tv = tv;
    this.dc = dc;
    this.sett = sett;
  } // Listens to all tvjs events, creates new widgets


  createClass_default()(Main, [{
    key: "update",
    value: function update(e) {
      switch (e.event) {
        case 'legend-button-click':
          this.onbutton(e.args[0]);
          break;
      }
    }
  }, {
    key: "onbutton",
    value: function onbutton(e) {
      var ov = this.dc.get(e.type)[e.dataIndex];
      var onchart = this.dc.data.onchart;
      var offchart = this.dc.data.offchart;
      if (!ov) return;

      switch (e.button) {
        case 'display':
          if (ov.settings.display === undefined) {
            var flag = false;
          } else {
            flag = !ov.settings.display;
          }

          this.tv.$set(ov.settings, 'display', flag);
          break;

        case 'up':
          if (e.type === 'offchart') {
            if (e.dataIndex === 0) {
              offchart.splice(e.dataIndex, 1);
              onchart.push(ov);
            } else {
              var data = offchart;
              var i0 = e.dataIndex;
              var i1 = e.dataIndex - 1;
              data[i0] = data.splice(i1, 1, data[i0])[0];
            }
          }

          this.dc.update_ids();
          break;

        case 'down':
          if (e.type === 'onchart') {
            var h = this.avg_grid_h(offchart);
            onchart.splice(e.dataIndex, 1);
            offchart.unshift(ov);
            this.tv.$set(ov, 'grid', {
              height: h
            });
          } else {
            var n = offchart.length;
            var _data = offchart;

            if (e.dataIndex < n - 1) {
              var _i = e.dataIndex;

              var _i2 = e.dataIndex + 1;

              _data[_i] = _data.splice(_i2, 1, _data[_i])[0];
            }
          }

          this.dc.update_ids();
          break;

        case 'add':
          try {
            var id = "AddWin-".concat(external_trading_vue_js_.Utils.uuid2());
            var _ov = this.dc.data[e.type][e.dataIndex];
            var f = Object.values(this.widgets).find(function (x) {
              return x.data.ov === _ov;
            });

            if (f) {
              this.tv.$delete(this.widgets, f.id);
              break;
            }

            this.tv.$set(this.widgets, id, {
              id: id,
              cls: AddWin,
              data: {
                ov: _ov,
                type: e.type,
                index: e.dataIndex
              }
            });
          } catch (e) {
            console.log(e);
          }

          break;

        case 'remove':
          this.dc.data[e.type].splice(e.dataIndex, 1);
          this.dc.update_ids();
          break;
      }
    } // Called from AddWin.vue

  }, {
    key: "add_overlay",
    value: function add_overlay(e) {
      var preset = this.get_preset(e.type) || {};
      if (preset.side) e.side = preset.side;
      var onchart = this.dc.data.onchart;
      var offchart = this.dc.data.offchart;

      if (e.side === 'onchart') {
        onchart.splice(e.index + 1, 0, {
          name: preset.name,
          type: e.type,
          data: [],
          settings: preset.settings || {}
        });
      } else {
        var h = this.avg_grid_h(offchart);
        offchart.splice(e.index + 1, 0, {
          name: preset.name,
          type: e.type,
          data: [],
          settings: preset.settings || {},
          grid: {
            height: h
          }
        });
      }

      this.dc.update_ids();
    } // Get preset (default settings, colors) if defined

  }, {
    key: "get_preset",
    value: function get_preset(type) {
      var proto = this.tv.overlays.find(function (x) {
        return x.name === type;
      });

      if (proto && proto.methods.meta_info) {
        var meta = proto.methods.meta_info();
        return meta.preset;
      }
    } // Extension settings has changed

  }, {
    key: "onsettings",
    value: function onsettings(sett) {}
  }, {
    key: "avg_grid_h",
    value: function avg_grid_h(ovs) {
      if (!ovs.length) return 0.25;
      var gh = 0;

      var _iterator = legend_buttons_main_createForOfIteratorHelper(ovs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ov = _step.value;

          if (ov.grid && typeof ov.grid.height === 'number') {
            gh += ov.grid.height;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return gh / ovs.length;
    }
  }, {
    key: "remove_widget",
    value: function remove_widget(id) {
      this.tv.$delete(this.widgets, id);
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Main;
}();


;// CONCATENATED MODULE: ./build/legend-buttons/legend-buttons.js
// -------- Production extension index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// Do not commit this file, the final index is
// compiled by the repo owner, use index_dev.js to
// experiment: 'npm run compile'

legend_buttons_main_Main.__name__ = 'legend-buttons';
var legend_buttons_widgets = {};
var legend_buttons_components = {};
var legend_buttons_overlays = {};
var legend_buttons_colorpacks = {};
var legend_buttons_skins = {};
var legend_buttons_Pack = {
  widgets: legend_buttons_widgets,
  components: legend_buttons_components,
  overlays: legend_buttons_overlays,
  colorpacks: legend_buttons_colorpacks,
  skins: legend_buttons_skins,
  Main: legend_buttons_main_Main
};
/* harmony default export */ const legend_buttons = (legend_buttons_Pack);

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/extensions/settings-win/SettingsWin.vue?vue&type=template&id=5d223b0e&scoped=true&
var SettingsWinvue_type_template_id_5d223b0e_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "window",
    {
      staticClass: "sett-win",
      attrs: { title: _vm.data.ov.name, tv: _vm.tv },
      on: { close: _vm.on_close }
    },
    [
      _vm._l(_vm.settlist, function(k) {
        return _c(
          "div",
          { staticClass: "sett-win-item" },
          [
            _c("label", [_vm._v(_vm._s(_vm.s2d(k)))]),
            _vm._v(" "),
            _c("std-input", {
              attrs: { value: _vm.sett[k] },
              on: {
                input: function($event) {
                  return _vm.update_sett(k, $event)
                }
              }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      !_vm.settlist.length
        ? _c("span", { staticClass: "sett-win-empty" }, [
            _c("i", [_vm._v("No script settings")])
          ])
        : _vm._e()
    ],
    2
  )
}
var SettingsWinvue_type_template_id_5d223b0e_scoped_true_staticRenderFns = []
SettingsWinvue_type_template_id_5d223b0e_scoped_true_render._withStripped = true


;// CONCATENATED MODULE: ./src/extensions/settings-win/SettingsWin.vue?vue&type=template&id=5d223b0e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(713);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/StdInput.vue?vue&type=template&id=5e1f1c17&
var StdInputvue_type_template_id_5e1f1c17_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _vm.type === "text" || !_vm.type
      ? _c("input", {
          staticClass: "tvjs-std-input",
          style: _vm.style,
          attrs: { placeholder: _vm.name },
          domProps: { value: _vm.value },
          on: {
            change: function($event) {
              return _vm.$emit("change", $event.target.value)
            },
            input: function($event) {
              return _vm.$emit("input", $event.target.value)
            }
          }
        })
      : _vm.type === "select"
      ? _c(
          "select",
          {
            staticClass: "tvjs-std-input",
            style: _vm.style,
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                return _vm.$emit("input", $event.target.value)
              }
            }
          },
          _vm._l(_vm.list, function(opt) {
            return _c("option", [_vm._v(_vm._s(opt))])
          }),
          0
        )
      : _vm._e()
  ])
}
var StdInputvue_type_template_id_5e1f1c17_staticRenderFns = []
StdInputvue_type_template_id_5e1f1c17_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/StdInput.vue?vue&type=template&id=5e1f1c17&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/StdInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const StdInputvue_type_script_lang_js_ = ({
  name: 'StdInput',
  props: ['value', 'name', 'type', 'list', 'colors'],
  methods: {},
  computed: {
    style: function style() {
      return {//background: this.$props.colors.back,
        //color: this.$props.colors.text
      };
    }
  },
  data: function data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/components/StdInput.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_StdInputvue_type_script_lang_js_ = (StdInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/StdInput.vue?vue&type=style&index=0&lang=css&
var StdInputvue_type_style_index_0_lang_css_ = __webpack_require__(92);
;// CONCATENATED MODULE: ./src/components/StdInput.vue?vue&type=style&index=0&lang=css&
 /* harmony default export */ const components_StdInputvue_type_style_index_0_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
;// CONCATENATED MODULE: ./src/components/StdInput.vue



;


/* normalize component */

var StdInput_component = normalizeComponent(
  components_StdInputvue_type_script_lang_js_,
  StdInputvue_type_template_id_5e1f1c17_render,
  StdInputvue_type_template_id_5e1f1c17_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var StdInput_api; }
StdInput_component.options.__file = "src/components/StdInput.vue"
/* harmony default export */ const StdInput = (StdInput_component.exports);
;// CONCATENATED MODULE: ./src/extensions/settings-win/utils.js
/* harmony default export */ const settings_win_utils = ({
  sett2desc: function sett2desc(sett) {
    function setCharAt(str, index, chr) {
      if (index > str.length - 1) return str;
      return str.substring(0, index) + chr + str.substring(index + 1);
    }

    sett = sett.replace(/([^A-Z])([A-Z])/g, '$1 $2');
    sett = sett.replace(/-|_/g, ' ');
    var tuple = sett.split(' ');
    tuple = tuple.filter(function (x) {
      return x.length;
    }).map(function (x) {
      return setCharAt(x, 0, x[0].toUpperCase());
    });
    return tuple.join(' ');
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/extensions/settings-win/SettingsWin.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const SettingsWinvue_type_script_lang_js_ = ({
  name: 'SettingsWin',
  props: ['id', 'main', 'dc', 'tv', 'data'],
  components: {
    Window: Window,
    StdInput: StdInput
  },
  mounted: function mounted() {},
  methods: {
    s2d: function s2d(str) {
      return settings_win_utils.sett2desc(str);
    },
    on_close: function on_close() {
      this.$props.main.remove_widget(this.$props.id);
    },
    update_sett: function update_sett(k, val) {
      var dcid = this.$props.data.ov.id;
      var valN = parseFloat(val);
      if (valN !== valN) valN = val;
      this.$props.dc.merge("".concat(dcid, ".settings"), defineProperty_default()({}, k, valN));
    }
  },
  computed: {
    sett: function sett() {
      return this.$props.data.ov.settings;
    },
    settlist: function settlist() {
      var _this = this;

      return Object.keys(this.sett).filter(function (x) {
        return x[0] !== '$' && _this.sett.$props && _this.sett.$props.includes(x);
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/extensions/settings-win/SettingsWin.vue?vue&type=script&lang=js&
 /* harmony default export */ const settings_win_SettingsWinvue_type_script_lang_js_ = (SettingsWinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/extensions/settings-win/SettingsWin.vue?vue&type=style&index=0&id=5d223b0e&scoped=true&lang=css&
var SettingsWinvue_type_style_index_0_id_5d223b0e_scoped_true_lang_css_ = __webpack_require__(209);
;// CONCATENATED MODULE: ./src/extensions/settings-win/SettingsWin.vue?vue&type=style&index=0&id=5d223b0e&scoped=true&lang=css&
 /* harmony default export */ const settings_win_SettingsWinvue_type_style_index_0_id_5d223b0e_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
;// CONCATENATED MODULE: ./src/extensions/settings-win/SettingsWin.vue



;


/* normalize component */

var SettingsWin_component = normalizeComponent(
  settings_win_SettingsWinvue_type_script_lang_js_,
  SettingsWinvue_type_template_id_5d223b0e_scoped_true_render,
  SettingsWinvue_type_template_id_5d223b0e_scoped_true_staticRenderFns,
  false,
  null,
  "5d223b0e",
  null
  
)

/* hot reload */
if (false) { var SettingsWin_api; }
SettingsWin_component.options.__file = "src/extensions/settings-win/SettingsWin.vue"
/* harmony default export */ const SettingsWin = (SettingsWin_component.exports);
;// CONCATENATED MODULE: ./src/extensions/settings-win/main.js


// Extension's controller




var settings_win_main_Main = /*#__PURE__*/function () {
  function Main(tv, dc) {
    classCallCheck_default()(this, Main);

    this.widgets = {};
    this.tv = tv;
    this.dc = dc;
  } // Listens to all tvjs events, creates new widgets


  createClass_default()(Main, [{
    key: "update",
    value: function update(e) {
      switch (e.event) {
        case 'legend-button-click':
          var id = "SettingsWin-".concat(external_trading_vue_js_.Utils.uuid2());
          var args = e.args[0];
          if (args.button !== 'settings') break;

          try {
            var ov = this.dc.data[args.type][args.dataIndex];
            var f = Object.values(this.widgets).find(function (x) {
              return x.data.ov === ov;
            });

            if (f) {
              this.tv.$delete(this.widgets, f.id);
              break;
            }

            this.tv.$set(this.widgets, id, {
              id: id,
              cls: SettingsWin,
              data: {
                ov: ov
              }
            });
          } catch (e) {
            console.log(e);
          }

          break;
      }
    }
  }, {
    key: "remove_widget",
    value: function remove_widget(id) {
      this.tv.$delete(this.widgets, id);
    }
  }]);

  return Main;
}();


;// CONCATENATED MODULE: ./build/settings-win/settings-win.js
// -------- Production extension index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// Do not commit this file, the final index is
// compiled by the repo owner, use index_dev.js to
// experiment: 'npm run compile'


settings_win_main_Main.__name__ = 'settings-win';
var settings_win_widgets = {
  SettingsWin: SettingsWin
};
var settings_win_components = {};
var settings_win_overlays = {};
var settings_win_colorpacks = {};
var settings_win_skins = {};
var settings_win_Pack = {
  widgets: settings_win_widgets,
  SettingsWin: SettingsWin,
  components: settings_win_components,
  overlays: settings_win_overlays,
  colorpacks: settings_win_colorpacks,
  skins: settings_win_skins,
  Main: settings_win_main_Main
};
/* harmony default export */ const settings_win = (settings_win_Pack);

;// CONCATENATED MODULE: ./src/index_prod.js
// -------- Production extension index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// Do not commit this file, the final index is
// compiled by the repo owner, use index_dev.js to
// experiment: 'npm run compile'




var index_prod_Pack = {
  'chart-link': chart_link,
  'grid-resize': grid_resize,
  'legend-buttons': legend_buttons,
  'settings-win': settings_win
};
/* harmony default export */ const index_prod = (index_prod_Pack);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});