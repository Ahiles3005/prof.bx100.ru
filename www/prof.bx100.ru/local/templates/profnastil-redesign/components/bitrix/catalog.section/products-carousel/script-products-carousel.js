/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/Applications/MAMP/htdocs/pn-prod/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/.default/components/bitrix/catalog.top/products-carousel/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! @babel/runtime/helpers/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! @babel/runtime/helpers/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js");

var iterableToArray = __webpack_require__(/*! @babel/runtime/helpers/iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray/index.js");

var unsupportedIterableToArray = __webpack_require__(/*! @babel/runtime/helpers/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js");

var nonIterableSpread = __webpack_require__(/*! @babel/runtime/helpers/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! @babel/runtime/helpers/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ module_Splide
});

// NAMESPACE OBJECT: ./src/js/constants/states.js
var states_namespaceObject = {};
__webpack_require__.r(states_namespaceObject);
__webpack_require__.d(states_namespaceObject, {
  "CREATED": () => CREATED,
  "DESTROYED": () => DESTROYED,
  "IDLE": () => IDLE,
  "MOUNTED": () => MOUNTED,
  "MOVING": () => MOVING
});

;// CONCATENATED MODULE: ./src/js/core/event.js
/**
 * The function for providing an Event object simply managing events.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function for providing an Event object simply managing events.
 */
/* harmony default export */ const core_event = (function () {
  /**
   * Store all event data.
   *
   * @type {Array}
   */
  var data = [];
  var Event = {
    /**
     * Subscribe the given event(s).
     *
     * @param {string}   events  - An event name. Use space to separate multiple events.
     *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
     * @param {function} handler - A callback function.
     * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
     * @param {Object}   options - Optional. Options for addEventListener.
     */
    on: function on(events, handler, elm, options) {
      if (elm === void 0) {
        elm = null;
      }

      if (options === void 0) {
        options = {};
      }

      events.split(' ').forEach(function (event) {
        if (elm) {
          elm.addEventListener(event, handler, options);
        }

        data.push({
          event: event,
          handler: handler,
          elm: elm,
          options: options
        });
      });
    },

    /**
     * Unsubscribe the given event(s).
     *
     * @param {string}  events - A event name or names split by space.
     * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
     */
    off: function off(events, elm) {
      if (elm === void 0) {
        elm = null;
      }

      events.split(' ').forEach(function (event) {
        data = data.filter(function (item) {
          if (item && item.event === event && item.elm === elm) {
            unsubscribe(item);
            return false;
          }

          return true;
        });
      });
    },

    /**
     * Emit an event.
     * This method is only for custom events.
     *
     * @param {string}  event - An event name.
     * @param {*}       args  - Any number of arguments passed to handlers.
     */
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      data.forEach(function (item) {
        if (!item.elm && item.event.split('.')[0] === event) {
          item.handler.apply(item, args);
        }
      });
    },

    /**
     * Clear event data.
     */
    destroy: function destroy() {
      data.forEach(unsubscribe);
      data = [];
    }
  };
  /**
   * Remove the registered event listener.
   *
   * @param {Object} item - An object containing event data.
   */

  function unsubscribe(item) {
    if (item.elm) {
      item.elm.removeEventListener(item.event, item.handler, item.options);
    }
  }

  return Event;
});
;// CONCATENATED MODULE: ./src/js/core/state.js
/**
 * The function providing a super simple state system.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function providing a super simple state system.
 *
 * @param {string|number} initialState - Provide the initial state value.
 */
/* harmony default export */ const state = (function (initialState) {
  /**
   * Store the current state.
   *
   * @type {string|number}
   */
  var curr = initialState;
  return {
    /**
     * Change state.
     *
     * @param {string|number} state - A new state.
     */
    set: function set(state) {
      curr = state;
    },

    /**
     * Verify if the current state is given one or not.
     *
     * @param {string|number} state - A state name to be verified.
     *
     * @return {boolean} - True if the current state is the given one.
     */
    is: function is(state) {
      return state === curr;
    }
  };
});
;// CONCATENATED MODULE: ./src/js/utils/object.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Some utility functions related with Object, supporting IE.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */
var keys = Object.keys;
/**
 * Iterate an object like Array.forEach.
 * IE doesn't support forEach of HTMLCollection.
 *
 * @param {Object}    obj       - An object.
 * @param {function}  callback  - A function handling each value. Arguments are value, property and index.
 */

function each(obj, callback) {
  keys(obj).some(function (key, index) {
    return callback(obj[key], key, index);
  });
}
/**
 * Return values of the given object as an array.
 * IE doesn't support Object.values.
 *
 * @param {Object} obj - An object.
 *
 * @return {Array} - An array containing all values of the given object.
 */

function values(obj) {
  return keys(obj).map(function (key) {
    return obj[key];
  });
}
/**
 * Check if the given subject is object or not.
 *
 * @param {*} subject - A subject to be verified.
 *
 * @return {boolean} - True if object, false otherwise.
 */

function isObject(subject) {
  return typeof subject === 'object';
}
/**
 * Merge two objects deeply.
 *
 * @param {Object} to   - An object where "from" is merged.
 * @param {Object} from - An object merged to "to".
 *
 * @return {Object} - A merged object.
 */

function merge(_ref, from) {
  var to = _extends({}, _ref);

  each(from, function (value, key) {
    if (isObject(value)) {
      if (!isObject(to[key])) {
        to[key] = {};
      }

      to[key] = merge(to[key], value);
    } else {
      to[key] = value;
    }
  });
  return to;
}
/**
 * Assign all properties "from" to "to" object.
 *
 * @param {Object} to   - An object where properties are assigned.
 * @param {Object} from - An object whose properties are assigned to "to".
 *
 * @return {Object} - An assigned object.
 */

function object_assign(to, from) {
  keys(from).forEach(function (key) {
    if (!to[key]) {
      Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
    }
  });
  return to;
}
;// CONCATENATED MODULE: ./src/js/utils/utils.js
/**
 * A package of some miscellaneous utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Convert the given value to array.
 *
 * @param {*} value - Any value.
 *
 * @return {*[]} - Array containing the given value.
 */

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * Check if the given value is between min and max.
 * Min will be returned when the value is less than min or max will do when greater than max.
 *
 * @param {number} value - A number to be checked.
 * @param {number} m1    - Minimum or maximum number.
 * @param {number} m2    - Maximum or minimum number.
 *
 * @return {number} - A value itself, min or max.
 */

function between(value, m1, m2) {
  return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
}
/**
 * The sprintf method with minimum functionality.
 *
 * @param {string}       format       - The string format.
 * @param {string|Array} replacements - Replacements accepting multiple arguments.
 *
 * @returns {string} - Converted string.
 */

function sprintf(format, replacements) {
  var i = 0;
  return format.replace(/%s/g, function () {
    return toArray(replacements)[i++];
  });
}
/**
 * Append px unit to the given subject if necessary.
 *
 * @param {number|string} value - A value that may not include an unit.
 *
 * @return {string} - If the value is string, return itself.
 *                    If number, do value + "px". An empty string, otherwise.
 */

function unit(value) {
  var type = typeof value;

  if (type === 'number' && value > 0) {
    return parseFloat(value) + 'px';
  }

  return type === 'string' ? value : '';
}
/**
 * Pad start with 0.
 *
 * @param {number} number - A number to be filled with 0.
 *
 * @return {string|number} - Padded number.
 */

function pad(number) {
  return number < 10 ? '0' + number : number;
}
/**
 * Convert the given value to pixel.
 *
 * @param {Element}       root  - Root element where a dummy div is appended.
 * @param {string|number} value - CSS value to be converted, such as 10rem.
 *
 * @return {number} - Pixel.
 */

function toPixel(root, value) {
  if (typeof value === 'string') {
    var div = create('div', {});
    applyStyle(div, {
      position: 'absolute',
      width: value
    });
    append(root, div);
    value = div.clientWidth;
    dom_remove(div);
  }

  return +value || 0;
}
;// CONCATENATED MODULE: ./src/js/utils/dom.js
/**
 * Some utility functions related with DOM.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Find the first element matching the given selector.
 * Be aware that all selectors after a space are ignored.
 *
 * @param {Element|Node}  elm       - An ancestor element.
 * @param {string}        selector  - DOMString.
 *
 * @return {Element|null} - A found element or null.
 */

function find(elm, selector) {
  return elm ? elm.querySelector(selector.split(' ')[0]) : null;
}
/**
 * Find a first child having the given tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element|undefined} - A found element on success or undefined on failure.
 */

function child(parent, tagOrClassName) {
  return children(parent, tagOrClassName)[0];
}
/**
 * Return chile elements that matches the provided tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element[]} - Found elements.
 */

function children(parent, tagOrClassName) {
  if (parent) {
    return values(parent.children).filter(function (child) {
      return hasClass(child, tagOrClassName.split(' ')[0]) || child.tagName === tagOrClassName;
    });
  }

  return [];
}
/**
 * Create an element with some optional attributes.
 *
 * @param {string} tag   - A tag name.
 * @param {Object} attrs - An object any attribute pairs of name and value.
 *
 * @return {Element} - A created element.
 */

function create(tag, attrs) {
  var elm = document.createElement(tag);
  each(attrs, function (value, key) {
    return setAttribute(elm, key, value);
  });
  return elm;
}
/**
 * Convert HTML string to DOM node.
 *
 * @param {string} html - HTML string.
 *
 * @return {Node} - A created node.
 */

function domify(html) {
  var div = create('div', {});
  div.innerHTML = html;
  return div.firstChild;
}
/**
 * Remove a given element from a DOM tree.
 *
 * @param {Element|Element[]} elms - Element(s) to be removed.
 */

function dom_remove(elms) {
  toArray(elms).forEach(function (elm) {
    if (elm) {
      var parent = elm.parentElement;
      parent && parent.removeChild(elm);
    }
  });
}
/**
 * Append a child to a given element.
 *
 * @param {Element} parent - A parent element.
 * @param {Element} child  - An element to be appended.
 */

function append(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
/**
 * Insert an element before the reference element.
 *
 * @param {Element|Node} ref - A reference element.
 * @param {Element}      elm - An element to be inserted.
 */

function before(elm, ref) {
  if (elm && ref) {
    var parent = ref.parentElement;
    parent && parent.insertBefore(elm, ref);
  }
}
/**
 * Apply styles to the given element.
 *
 * @param {Element} elm     - An element where styles are applied.
 * @param {Object}  styles  - Object containing styles.
 */

function applyStyle(elm, styles) {
  if (elm) {
    each(styles, function (value, prop) {
      if (value !== null) {
        elm.style[prop] = value;
      }
    });
  }
}
/**
 * Add or remove classes to/from the element.
 * This function is for internal usage.
 *
 * @param {Element}         elm     - An element where classes are added.
 * @param {string|string[]} classes - Class names being added.
 * @param {boolean}         remove  - Whether to remove or add classes.
 */

function addOrRemoveClasses(elm, classes, remove) {
  if (elm) {
    toArray(classes).forEach(function (name) {
      if (name) {
        elm.classList[remove ? 'remove' : 'add'](name);
      }
    });
  }
}
/**
 * Add classes to the element.
 *
 * @param {Element}          elm     - An element where classes are added.
 * @param {string|string[]}  classes - Class names being added.
 */


function addClass(elm, classes) {
  addOrRemoveClasses(elm, classes, false);
}
/**
 * Remove a class from the element.
 *
 * @param {Element}         elm     - An element where classes are removed.
 * @param {string|string[]} classes - A class name being removed.
 */

function removeClass(elm, classes) {
  addOrRemoveClasses(elm, classes, true);
}
/**
 * Verify if the provided element has the class or not.
 *
 * @param {Element} elm       - An element.
 * @param {string}  className - A class name.
 *
 * @return {boolean} - True if the element has the class or false if not.
 */

function hasClass(elm, className) {
  return !!elm && elm.classList.contains(className);
}
/**
 * Set attribute to the given element.
 *
 * @param {Element}                 elm   - An element where an attribute is assigned.
 * @param {string}                  name  - Attribute name.
 * @param {string|number|boolean}   value - Attribute value.
 */

function setAttribute(elm, name, value) {
  if (elm) {
    elm.setAttribute(name, value);
  }
}
/**
 * Get attribute from the given element.
 *
 * @param {Element} elm  - An element where an attribute is assigned.
 * @param {string}  name - Attribute name.
 *
 * @return {string} - The value of the given attribute if available. An empty string if not.
 */

function getAttribute(elm, name) {
  return elm ? elm.getAttribute(name) : '';
}
/**
 * Remove attribute from the given element.
 *
 * @param {Element|Element[]} elms  - An element where an attribute is removed.
 * @param {string|string[]}      names - Attribute name.
 */

function removeAttribute(elms, names) {
  toArray(names).forEach(function (name) {
    toArray(elms).forEach(function (elm) {
      return elm && elm.removeAttribute(name);
    });
  });
}
/**
 * Return the Rect object of the provided object.
 *
 * @param {Element} elm - An element.
 *
 * @return {ClientRect|DOMRect} - A rect object.
 */

function getRect(elm) {
  return elm.getBoundingClientRect();
}
/**
 * Trigger the given callback after all images contained by the element are loaded.
 *
 * @param {Element}  elm      - Element that may contain images.
 * @param {Function} callback - Callback function fired right after all images are loaded.
 */

function loaded(elm, callback) {
  var images = elm.querySelectorAll('img');
  var length = images.length;

  if (length) {
    var count = 0;
    each(images, function (img) {
      img.onload = img.onerror = function () {
        if (++count === length) {
          callback();
        }
      };
    });
  } else {
    // Trigger the callback immediately if there is no image.
    callback();
  }
}
;// CONCATENATED MODULE: ./src/js/constants/types.js
/**
 * Export slider types.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Normal slider.
 *
 * @type {string}
 */
var SLIDE = 'slide';
/**
 * Loop after the last slide and before the first one.
 *
 * @type {string}
 */

var LOOP = 'loop';
/**
 * The track doesn't move.
 *
 * @type {string}
 */

var FADE = 'fade';
;// CONCATENATED MODULE: ./src/js/transitions/slide/index.js
/**
 * The component for general slide effect transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for general slide effect transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const slide = (function (Splide, Components) {
  /**
   * Hold the list element.
   *
   * @type {Element}
   */
  var list;
  /**
   * Hold the onEnd callback function.
   *
   * @type {function}
   */

  var endCallback;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      list = Components.Elements.list;
      Splide.on('transitionend', function (e) {
        if (e.target === list && endCallback) {
          endCallback();
        }
      }, list);
    },

    /**
     * Start transition.
     *
     * @param {number}   destIndex - Destination slide index that might be clone's.
     * @param {number}   newIndex  - New index.
     * @param {number}   prevIndex - Previous index.
     * @param {Object}   coord     - Destination coordinates.
     * @param {function} done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var options = Splide.options;
      var edgeIndex = Components.Controller.edgeIndex;
      var speed = options.speed;
      endCallback = done;

      if (Splide.is(SLIDE)) {
        if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) {
          speed = options.rewindSpeed || speed;
        }
      }

      applyStyle(list, {
        transition: "transform " + speed + "ms " + options.easing,
        transform: "translate(" + coord.x + "px," + coord.y + "px)"
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/transitions/fade/index.js
/**
 * The component for fade transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for fade transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const fade = (function (Splide, Components) {
  var Fade = {
    /**
     * Called when the component is mounted.
     * Apply transition style to the first slide.
     */
    mount: function mount() {
      apply(Splide.index);
    },

    /**
     * Start transition.
     *
     * @param {number}    destIndex - Destination slide index that might be clone's.
     * @param {number}    newIndex  - New index.
     * @param {number}    prevIndex - Previous index.
     * @param {Object}    coord     - Destination coordinates.
     * @param {function}  done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var track = Components.Elements.track;
      applyStyle(track, {
        height: unit(track.clientHeight)
      });
      apply(newIndex);
      setTimeout(function () {
        done();
        applyStyle(track, {
          height: ''
        });
      });
    }
  };
  /**
   * Apply transition style to the slide specified by the given index.
   *
   * @param {number} index - A slide index.
   */

  function apply(index) {
    var options = Splide.options;
    applyStyle(Components.Elements.slides[index], {
      transition: "opacity " + options.speed + "ms " + options.easing
    });
  }

  return Fade;
});
;// CONCATENATED MODULE: ./src/js/transitions/index.js
/**
 * Export transition components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


;// CONCATENATED MODULE: ./src/js/core/composer.js
/**
 * Provide a function for composing components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * Compose components.
 *
 * @param {Splide}   Splide     - Splide instance.
 * @param {Object}   Components - Additional components.
 * @param {function} Transition - Change component for transition.
 *
 * @return {Object} - An object containing all components.
 */

function compose(Splide, Components, Transition) {
  var components = {};
  each(Components, function (Component, name) {
    components[name] = Component(Splide, components, name.toLowerCase());
  });

  if (!Transition) {
    Transition = Splide.is(FADE) ? fade : slide;
  }

  components.Transition = Transition(Splide, components);
  return components;
}
;// CONCATENATED MODULE: ./src/js/utils/error.js
/**
 * Utility functions for outputting logs.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Prefix of an error massage.
 *
 * @type {string}
 */
var MESSAGE_PREFIX = '[SPLIDE]';
/**
 * Display an error message on the browser console.
 *
 * @param {string} message - An error message.
 */

function error(message) {
  console.error(MESSAGE_PREFIX + " " + message);
}
/**
 * Check existence of the given object and throw an error if it doesn't.
 *
 * @throws {Error}
 *
 * @param {*}      subject - A subject to be confirmed.
 * @param {string} message - An error message.
 */

function exist(subject, message) {
  if (!subject) {
    throw new Error(message);
  }
}
;// CONCATENATED MODULE: ./src/js/constants/classes.js
/**
 * Export class names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * A root class name.
 *
 * @type {string}
 */
var ROOT = 'splide';
/**
 * The definition table of all classes for elements.
 * They might be modified by options.
 *
 * @type {Object}
 */

var ELEMENT_CLASSES = {
  root: ROOT,
  slider: ROOT + "__slider",
  track: ROOT + "__track",
  list: ROOT + "__list",
  slide: ROOT + "__slide",
  container: ROOT + "__slide__container",
  arrows: ROOT + "__arrows",
  arrow: ROOT + "__arrow",
  prev: ROOT + "__arrow--prev",
  next: ROOT + "__arrow--next",
  pagination: ROOT + "__pagination",
  page: ROOT + "__pagination__page",
  clone: ROOT + "__slide--clone",
  progress: ROOT + "__progress",
  bar: ROOT + "__progress__bar",
  autoplay: ROOT + "__autoplay",
  play: ROOT + "__play",
  pause: ROOT + "__pause",
  spinner: ROOT + "__spinner",
  sr: ROOT + "__sr"
};
/**
 * Definitions of status classes.
 *
 * @type {Object}
 */

var STATUS_CLASSES = {
  active: 'is-active',
  visible: 'is-visible',
  loading: 'is-loading'
};
;// CONCATENATED MODULE: ./src/js/constants/i18n.js
/**
 * Export i18n texts as object.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Texts for i18n.
 *
 * @type {Object}
 */
var I18N = {
  prev: 'Previous slide',
  next: 'Next slide',
  first: 'Go to first slide',
  last: 'Go to last slide',
  slideX: 'Go to slide %s',
  pageX: 'Go to page %s',
  play: 'Start autoplay',
  pause: 'Pause autoplay'
};
;// CONCATENATED MODULE: ./src/js/constants/defaults.js
/**
 * Export default options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


var DEFAULTS = {
  /**
   * Determine a slider type.
   * - 'slide': Regular slider.
   * - 'loop' : Carousel slider.
   * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
   *
   * @type {string}
   */
  type: 'slide',

  /**
   * Whether to rewind a slider before the first slide or after the last one.
   * In "loop" mode, this option is ignored.
   *
   * @type {boolean}
   */
  rewind: false,

  /**
   * Transition speed in milliseconds.
   *
   * @type {number}
   */
  speed: 400,

  /**
   * Transition speed on rewind in milliseconds.
   *
   * @type {number}
   */
  rewindSpeed: 0,

  /**
   * Whether to prevent any actions while a slider is transitioning.
   * If false, navigation, drag and swipe work while the slider is running.
   * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Define slider max width.
   *
   * @type {number}
   */
  width: 0,

  /**
   * Define slider height.
   *
   * @type {number}
   */
  height: 0,

  /**
   * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
   * perPage number will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedWidth: 0,

  /**
   * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
   * heightRatio option will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedHeight: 0,

  /**
   * Determine height of slides by ratio to a slider width.
   * This will be ignored when the fixedHeight is provided.
   *
   * @type {number}
   */
  heightRatio: 0,

  /**
   * If true, slide width will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoWidth: false,

  /**
   * If true, slide height will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoHeight: false,

  /**
   * Determine how many slides should be displayed per page.
   *
   * @type {number}
   */
  perPage: 1,

  /**
   * Determine how many slides should be moved when a slider goes to next or perv.
   *
   * @type {number}
   */
  perMove: 0,

  /**
   * Determine manually how many clones should be generated on the left and right side.
   * The total number of clones will be twice of this number.
   *
   * @type {number}
   */
  clones: 0,

  /**
   * Start index.
   *
   * @type {number}
   */
  start: 0,

  /**
   * Determine which slide should be focused if there are multiple slides in a page.
   * A string "center" is acceptable for centering slides.
   *
   * @type {boolean|number|string}
   */
  focus: false,

  /**
   * Gap between slides. CSS format is allowed such as 1em.
   *
   * @type {number|string}
   */
  gap: 0,

  /**
   * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
   * Give a single value to set a same size for both sides or
   * do an object for different sizes.
   * Also, CSS format is allowed such as 1em.
   *
   * @example
   * - 10: Number
   * - '1em': CSS format.
   * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
   * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
   *
   * @type {number|string|Object}
   */
  padding: 0,

  /**
   * Whether to append arrows.
   *
   * @type {boolean}
   */
  arrows: true,

  /**
   * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
   *
   * @type {string}
   */
  arrowPath: '',

  /**
   * Whether to append pagination(indicator dots) or not.
   *
   * @type {boolean}
   */
  pagination: true,

  /**
   * Activate autoplay.
   *
   * @type {boolean}
   */
  autoplay: false,

  /**
   * Autoplay interval in milliseconds.
   *
   * @type {number}
   */
  interval: 5000,

  /**
   * Whether to stop autoplay when a slider is hovered.
   *
   * @type {boolean}
   */
  pauseOnHover: true,

  /**
   * Whether to stop autoplay when a slider elements are focused.
   * True is recommended for accessibility.
   *
   * @type {boolean}
   */
  pauseOnFocus: true,

  /**
   * Whether to reset progress of the autoplay timer when resumed.
   *
   * @type {boolean}
   */
  resetProgress: true,

  /**
   * Loading images lazily.
   * Image src must be provided by a data-splide-lazy attribute.
   *
   * - false: Do nothing.
   * - 'nearby': Only images around an active slide will be loaded.
   * - 'sequential': All images will be sequentially loaded.
   *
   * @type {boolean|string}
   */
  lazyLoad: false,

  /**
   * This option works only when a lazyLoad option is "nearby".
   * Determine how many pages(not slides) around an active slide should be loaded beforehand.
   *
   * @type {number}
   */
  preloadPages: 1,

  /**
   * Easing for CSS transition. For example, linear, ease or cubic-bezier().
   *
   * @type {string}
   */
  easing: 'cubic-bezier(.42,.65,.27,.99)',

  /**
   * Whether to enable keyboard shortcuts
   * - true or 'global': Listen to keydown event of the document.
   * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
   * - false: Disable keyboard shortcuts.
   *
   * @type {boolean|string}
   */
  keyboard: 'global',

  /**
   * Whether to allow mouse drag and touch swipe.
   *
   * @type {boolean}
   */
  drag: true,

  /**
   * The angle threshold for drag.
   * The slider starts moving only when the drag angle is less than this threshold.
   *
   * @type {number}
   */
  dragAngleThreshold: 30,

  /**
   * Distance threshold for determining if the action is "flick" or "swipe".
   * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
   *
   * @type {number}
   */
  swipeDistanceThreshold: 150,

  /**
   * Velocity threshold for determining if the action is "flick" or "swipe".
   * Around 0.5 is recommended.
   *
   * @type {number}
   */
  flickVelocityThreshold: .6,

  /**
   * Determine power of flick. The larger number this is, the farther a slider runs by flick.
   * Around 500 is recommended.
   *
   * @type {number}
   */
  flickPower: 600,

  /**
   * Limit a number of pages to move by flick.
   *
   * @type {number}
   */
  flickMaxPages: 1,

  /**
   * Slider direction.
   * - 'ltr': Left to right.
   * - 'rtl': Right to left.
   * - 'ttb': Top to bottom.
   *
   * @type {string}
   */
  direction: 'ltr',

  /**
   * Set img src to background-image of its parent element.
   * Images with various sizes can be displayed as same dimension without cropping work.
   * fixedHeight or heightRatio is required.
   *
   * @type {boolean}
   */
  cover: false,

  /**
   * Whether to enable accessibility(aria and screen reader texts) or not.
   *
   * @type {boolean}
   */
  accessibility: true,

  /**
   * Whether to add tabindex="0" to visible slides or not.
   *
   * @type {boolean}
   */
  slideFocus: true,

  /**
   * Determine if a slider is navigation for another.
   * Use "sync" API to synchronize two sliders.
   *
   * @type {boolean}
   */
  isNavigation: false,

  /**
   * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
   *
   * @type {boolean}
   */
  trimSpace: true,

  /**
   * The "is-active" class is added after transition as default.
   * If true, it will be added before move.
   *
   * @type {boolean}
   */
  updateOnMove: false,

  /**
   * Throttle duration in milliseconds for the resize event.
   *
   * @type {number}
   */
  throttle: 100,

  /**
   * Whether to destroy a slider or not.
   *
   * @type {boolean}
   */
  destroy: false,

  /**
   * Options for specific breakpoints.
   *
   * @example
   * {
   *   1000: {
   *     perPage: 3,
   *     gap: 20
   *   },
   *   600: {
   *     perPage: 1,
   *     gap: 5,
   *   }
   * }
   *
   * @type {boolean|Object}
   */
  breakpoints: false,

  /**
   * Collection of class names.
   *
   * @see ./classes.js
   *
   * @type {Object}
   */
  classes: ELEMENT_CLASSES,

  /**
   * Collection of i18n texts.
   *
   * @see ./i18n.js
   *
   * @type {Object}
   */
  i18n: I18N
};
;// CONCATENATED MODULE: ./src/js/constants/states.js
/**
 * Export state constants.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Splide has been just created.
 *
 * @type {number}
 */
var CREATED = 1;
/**
 * All components have been mounted and initialized.
 *
 * @type {number}
 */

var MOUNTED = 2;
/**
 * Splide is ready for transition.
 *
 * @type {number}
 */

var IDLE = 3;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var MOVING = 4;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var DESTROYED = 5;
;// CONCATENATED MODULE: ./src/js/splide.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The main class for applying Splide to an element.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */








/**
 * The main class for applying Splide to an element,
 * providing some APIs to control the behavior.
 */

var Splide = /*#__PURE__*/function () {
  /**
   * Splide constructor.
   *
   * @throws {Error} When the given root element or selector is invalid.
   *
   * @param {Element|string}  root       - A selector for a root element or an element itself.
   * @param {Object}          options    - Optional. Options to change default behaviour.
   * @param {Object}          Components - Optional. Components.
   */
  function Splide(root, options, Components) {
    if (options === void 0) {
      options = {};
    }

    if (Components === void 0) {
      Components = {};
    }

    this.root = root instanceof Element ? root : document.querySelector(root);
    exist(this.root, 'An invalid element/selector was given.');
    this.Components = null;
    this.Event = core_event();
    this.State = state(CREATED);
    this.STATES = states_namespaceObject;
    this._o = merge(DEFAULTS, options);
    this._i = 0;
    this._c = Components;
    this._e = {}; // Extensions

    this._t = null; // Transition
  }
  /**
   * Compose and mount components.
   *
   * @param {Object}   Extensions - Optional. Additional components.
   * @param {function} Transition - Optional. Set a custom transition component.
   *
   * @return {Splide|undefined} - This instance or undefined if an exception occurred.
   */


  var _proto = Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    if (Extensions === void 0) {
      Extensions = this._e;
    }

    if (Transition === void 0) {
      Transition = this._t;
    }

    // Reset the state.
    this.State.set(CREATED);
    this._e = Extensions;
    this._t = Transition;
    this.Components = compose(this, merge(this._c, Extensions), Transition);

    try {
      each(this.Components, function (component, key) {
        var required = component.required;

        if (required === undefined || required) {
          component.mount && component.mount();
        } else {
          delete _this.Components[key];
        }
      });
    } catch (e) {
      error(e.message);
      return;
    }

    var State = this.State;
    State.set(MOUNTED);
    each(this.Components, function (component) {
      component.mounted && component.mounted();
    });
    this.emit('mounted');
    State.set(IDLE);
    this.emit('ready');
    applyStyle(this.root, {
      visibility: 'visible'
    });
    this.on('move drag', function () {
      return State.set(MOVING);
    }).on('moved dragged', function () {
      return State.set(IDLE);
    });
    return this;
  }
  /**
   * Set sync target.
   *
   * @param {Splide} splide - A Splide instance.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.sync = function sync(splide) {
    this.sibling = splide;
    return this;
  }
  /**
   * Register callback fired on the given event(s).
   *
   * @param {string}   events  - An event name. Use space to separate multiple events.
   *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
   * @param {function} handler - A callback function.
   * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
   * @param {Object}   options - Optional. Options for addEventListener.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.on = function on(events, handler, elm, options) {
    if (elm === void 0) {
      elm = null;
    }

    if (options === void 0) {
      options = {};
    }

    this.Event.on(events, handler, elm, options);
    return this;
  }
  /**
   * Unsubscribe the given event.
   *
   * @param {string}  events - A event name.
   * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.off = function off(events, elm) {
    if (elm === void 0) {
      elm = null;
    }

    this.Event.off(events, elm);
    return this;
  }
  /**
   * Emit an event.
   *
   * @param {string} event - An event name.
   * @param {*}      args  - Any number of arguments passed to handlers.
   */
  ;

  _proto.emit = function emit(event) {
    var _this$Event;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_this$Event = this.Event).emit.apply(_this$Event, [event].concat(args));

    return this;
  }
  /**
   * Go to the slide specified by the given control.
   *
   * @param {string|number} control - A control pattern.
   * @param {boolean}       wait    - Optional. Whether to wait for transition.
   */
  ;

  _proto.go = function go(control, wait) {
    if (wait === void 0) {
      wait = this.options.waitForTransition;
    }

    if (this.State.is(IDLE) || this.State.is(MOVING) && !wait) {
      this.Components.Controller.go(control, false);
    }

    return this;
  }
  /**
   * Verify whether the slider type is the given one or not.
   *
   * @param {string} type - A slider type.
   *
   * @return {boolean} - True if the slider type is the provided type or false if not.
   */
  ;

  _proto.is = function is(type) {
    return type === this._o.type;
  }
  /**
   * Insert a slide.
   *
   * @param {Element|string} slide - A slide element to be added.
   * @param {number}         index - A slide will be added at the position.
   */
  ;

  _proto.add = function add(slide, index) {
    if (index === void 0) {
      index = -1;
    }

    this.Components.Elements.add(slide, index, this.refresh.bind(this));
    return this;
  }
  /**
   * Remove the slide designated by the index.
   *
   * @param {number} index - A slide index.
   */
  ;

  _proto.remove = function remove(index) {
    this.Components.Elements.remove(index);
    this.refresh();
    return this;
  }
  /**
   * Destroy all Slide objects and clones and recreate them again.
   */
  ;

  _proto.refresh = function refresh() {
    this.emit('refresh:before').emit('refresh').emit('resize');
    return this;
  }
  /**
   * Destroy the Splide.
   * "Completely" boolean is mainly for breakpoints.
   *
   * @param {boolean} completely - Destroy completely.
   */
  ;

  _proto.destroy = function destroy(completely) {
    var _this2 = this;

    if (completely === void 0) {
      completely = true;
    }

    // Postpone destroy because it should be done after mount.
    if (this.State.is(CREATED)) {
      this.on('ready', function () {
        return _this2.destroy(completely);
      });
      return;
    }

    values(this.Components).reverse().forEach(function (component) {
      component.destroy && component.destroy(completely);
    });
    this.emit('destroy', completely); // Destroy all event handlers, including ones for native events.

    this.Event.destroy();
    this.State.set(DESTROYED);
    return this;
  }
  /**
   * Return the current slide index.
   *
   * @return {number} - The current slide index.
   // */
  ;

  _createClass(Splide, [{
    key: "index",
    get: function get() {
      return this._i;
    }
    /**
     * Set the current slide index.
     *
     * @param {number|string} index - A new index.
     */
    ,
    set: function set(index) {
      this._i = parseInt(index);
    }
    /**
     * Return length of slides.
     * This is an alias of Elements.length.
     *
     * @return {number} - A number of slides.
     */

  }, {
    key: "length",
    get: function get() {
      return this.Components.Elements.length;
    }
    /**
     * Return options.
     *
     * @return {Object} - Options object.
     */

  }, {
    key: "options",
    get: function get() {
      return this._o;
    }
    /**
     * Set options with merging the given object to the current one.
     *
     * @param {Object} options - New options.
     */
    ,
    set: function set(options) {
      var created = this.State.is(CREATED);

      if (!created) {
        this.emit('update');
      }

      this._o = merge(this._o, options);

      if (!created) {
        this.emit('updated', this._o);
      }
    }
    /**
     * Return the class list.
     * This is an alias of Splide.options.classList.
     *
     * @return {Object} - An object containing all class list.
     */

  }, {
    key: "classes",
    get: function get() {
      return this._o.classes;
    }
    /**
     * Return the i18n strings.
     * This is an alias of Splide.options.i18n.
     *
     * @return {Object} - An object containing all i18n strings.
     */

  }, {
    key: "i18n",
    get: function get() {
      return this._o.i18n;
    }
  }]);

  return Splide;
}();


;// CONCATENATED MODULE: ./src/js/components/options/index.js
/**
 * The component for initializing options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for initializing options.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const options = (function (Splide) {
  /**
   * Retrieve options from the data attribute.
   * Note that IE10 doesn't support dataset property.
   *
   * @type {string}
   */
  var options = getAttribute(Splide.root, 'data-splide');

  if (options) {
    try {
      Splide.options = JSON.parse(options);
    } catch (e) {
      error(e.message);
    }
  }

  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      if (Splide.State.is(CREATED)) {
        Splide.index = Splide.options.start;
      }
    }
  };
});
;// CONCATENATED MODULE: ./src/js/constants/directions.js
/**
 * Export layout modes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Enumerate slides from left to right.
 *
 * @type {string}
 */
var LTR = 'ltr';
/**
 * Enumerate slides from right to left.
 *
 * @type {string}
 */

var RTL = 'rtl';
/**
 * Enumerate slides in a col.
 *
 * @type {string}
 */

var TTB = 'ttb';
;// CONCATENATED MODULE: ./src/js/components/elements/slide.js
/**
 * The sub component for handling each slide.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */






/**
 * Events for restoring original styles.
 *
 * @type {string}
 */

var STYLE_RESTORE_EVENTS = 'update.slide';
/**
 * The sub component for handling each slide.
 *
 * @param {Splide}  Splide    - A Splide instance.
 * @param {number}  index     - An unique slide index.
 * @param {number}  realIndex - Clones should pass a real slide index.
 * @param {Element} slide     - A slide element.
 *
 * @return {Object} - The sub component object.
 */

/* harmony default export */ const elements_slide = (function (Splide, index, realIndex, slide) {
  /**
   * Whether to update "is-active" class before or after transition.
   *
   * @type {boolean}
   */
  var updateOnMove = Splide.options.updateOnMove;
  /**
   * Events when the slide status is updated.
   * Append a namespace to remove listeners later.
   *
   * @type {string}
   */

  var STATUS_UPDATE_EVENTS = 'ready.slide updated.slide resized.slide moved.slide' + (updateOnMove ? ' move.slide' : '');
  /**
   * Slide sub component object.
   *
   * @type {Object}
   */

  var Slide = {
    /**
     * Slide element.
     *
     * @type {Element}
     */
    slide: slide,

    /**
     * Slide index.
     *
     * @type {number}
     */
    index: index,

    /**
     * Real index for clones.
     *
     * @type {number}
     */
    realIndex: realIndex,

    /**
     * Container element if available.
     *
     * @type {Element|undefined}
     */
    container: child(slide, Splide.classes.container),

    /**
     * Whether this is a cloned slide or not.
     *
     * @type {boolean}
     */
    isClone: realIndex > -1,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (!this.isClone) {
        slide.id = Splide.root.id + "-slide" + pad(index + 1);
      }

      Splide.on(STATUS_UPDATE_EVENTS, function () {
        return _this.update();
      }).on(STYLE_RESTORE_EVENTS, restoreStyles).on('click', function () {
        return Splide.emit('click', _this);
      }, slide);
      /*
       * Add "is-active" class to a clone element temporarily
       * and it will be removed on "moved" event.
       */

      if (updateOnMove) {
        Splide.on('move.slide', function (newIndex) {
          if (newIndex === realIndex) {
            _update(true, false);
          }
        });
      } // Make sure the slide is shown.


      applyStyle(slide, {
        display: ''
      }); // Hold the original styles.

      this.styles = getAttribute(slide, 'style') || '';
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Splide.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off('click', slide);
      removeClass(slide, values(STATUS_CLASSES));
      restoreStyles();
      removeAttribute(this.container, 'style');
    },

    /**
     * Update active and visible status.
     */
    update: function update() {
      _update(this.isActive(), false);

      _update(this.isVisible(), true);
    },

    /**
     * Check whether this slide is active or not.
     *
     * @return {boolean} - True if the slide is active or false if not.
     */
    isActive: function isActive() {
      return Splide.index === index;
    },

    /**
     * Check whether this slide is visible in the viewport or not.
     *
     * @return {boolean} - True if the slide is visible or false if not.
     */
    isVisible: function isVisible() {
      var active = this.isActive();

      if (Splide.is(FADE) || active) {
        return active;
      }

      var ceil = Math.ceil;
      var trackRect = getRect(Splide.Components.Elements.track);
      var slideRect = getRect(slide);

      if (Splide.options.direction === TTB) {
        return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
      }

      return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
    },

    /**
     * Calculate how far this slide is from another slide and
     * return true if the distance is within the given number.
     *
     * @param {number} from   - Index of a target slide.
     * @param {number} within - True if the slide is within this number.
     *
     * @return {boolean} - True if the slide is within the number or false otherwise.
     */
    isWithin: function isWithin(from, within) {
      var diff = Math.abs(from - index);

      if (!Splide.is(SLIDE) && !this.isClone) {
        diff = Math.min(diff, Splide.length - diff);
      }

      return diff < within;
    }
  };
  /**
   * Update classes for activity or visibility.
   *
   * @param {boolean} active        - Is active/visible or not.
   * @param {boolean} forVisibility - Toggle classes for activity or visibility.
   */

  function _update(active, forVisibility) {
    var type = forVisibility ? 'visible' : 'active';
    var className = STATUS_CLASSES[type];

    if (active) {
      addClass(slide, className);
      Splide.emit("" + type, Slide);
    } else {
      if (hasClass(slide, className)) {
        removeClass(slide, className);
        Splide.emit("" + (forVisibility ? 'hidden' : 'inactive'), Slide);
      }
    }
  }
  /**
   * Restore the original styles.
   */


  function restoreStyles() {
    setAttribute(slide, 'style', Slide.styles);
  }

  return Slide;
});
;// CONCATENATED MODULE: ./src/js/components/elements/index.js
/**
 * The component for main elements.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





/**
 * The property name for UID stored in a window object.
 *
 * @type {string}
 */

var UID_NAME = 'uid';
/**
 * The component for main elements.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const components_elements = (function (Splide, Components) {
  /**
   * Hold the root element.
   *
   * @type {Element}
   */
  var root = Splide.root;
  /**
   * Hold the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Store Slide objects.
   *
   * @type {Array}
   */

  var Slides = [];
  /*
   * Assign unique ID to the root element if it doesn't have the one.
   * Note that IE doesn't support padStart() to fill the uid by 0.
   */

  if (!root.id) {
    window.splide = window.splide || {};
    var uid = window.splide[UID_NAME] || 0;
    window.splide[UID_NAME] = ++uid;
    root.id = "splide" + pad(uid);
  }
  /**
   * Elements component object.
   *
   * @type {Object}
   */


  var Elements = {
    /**
     * Called when the component is mounted.
     * Collect main elements and store them as member properties.
     */
    mount: function mount() {
      var _this = this;

      this.init();
      Splide.on('refresh', function () {
        _this.destroy();

        _this.init();
      }).on('updated', function () {
        removeClass(root, getClasses());
        addClass(root, getClasses());
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Slides.forEach(function (Slide) {
        Slide.destroy();
      });
      Slides = [];
      removeClass(root, getClasses());
    },

    /**
     * Initialization.
     */
    init: function init() {
      var _this2 = this;

      collect();
      addClass(root, getClasses());
      this.slides.forEach(function (slide, index) {
        _this2.register(slide, index, -1);
      });
    },

    /**
     * Register a slide to create a Slide object and handle its behavior.
     *
     * @param {Element} slide     - A slide element.
     * @param {number}  index     - A unique index. This can be negative.
     * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
     */
    register: function register(slide, index, realIndex) {
      var SlideObject = elements_slide(Splide, index, realIndex, slide);
      SlideObject.mount();
      Slides.push(SlideObject);
    },

    /**
     * Return the Slide object designated by the index.
     * Note that "find" is not supported by IE.
     *
     * @return {Object|undefined} - A Slide object if available. Undefined if not.
     */
    getSlide: function getSlide(index) {
      return Slides.filter(function (Slide) {
        return Slide.index === index;
      })[0];
    },

    /**
     * Return all Slide objects.
     *
     * @param {boolean} includeClones - Whether to include cloned slides or not.
     *
     * @return {Object[]} - Slide objects.
     */
    getSlides: function getSlides(includeClones) {
      return includeClones ? Slides : Slides.filter(function (Slide) {
        return !Slide.isClone;
      });
    },

    /**
     * Return Slide objects belonging to the given page.
     *
     * @param {number} page - A page number.
     *
     * @return {Object[]} - An array containing Slide objects.
     */
    getSlidesByPage: function getSlidesByPage(page) {
      var idx = Components.Controller.toIndex(page);
      var options = Splide.options;
      var max = options.focus !== false ? 1 : options.perPage;
      return Slides.filter(function (_ref) {
        var index = _ref.index;
        return idx <= index && index < idx + max;
      });
    },

    /**
     * Insert a slide to a slider.
     * Need to refresh Splide after adding a slide.
     *
     * @param {Node|string} slide    - A slide element to be added.
     * @param {number}      index    - A slide will be added at the position.
     * @param {Function}    callback - Called right after the slide is added to the DOM tree.
     */
    add: function add(slide, index, callback) {
      if (typeof slide === 'string') {
        slide = domify(slide);
      }

      if (slide instanceof Element) {
        var ref = this.slides[index]; // This will be removed in mount() of a Slide component.

        applyStyle(slide, {
          display: 'none'
        });

        if (ref) {
          before(slide, ref);
          this.slides.splice(index, 0, slide);
        } else {
          append(this.list, slide);
          this.slides.push(slide);
        }

        loaded(slide, function () {
          callback && callback(slide);
        });
      }
    },

    /**
     * Remove a slide from a slider.
     * Need to refresh Splide after removing a slide.
     *
     * @param index - Slide index.
     */
    remove: function remove(index) {
      dom_remove(this.slides.splice(index, 1)[0]);
    },

    /**
     * Trigger the provided callback for each Slide object.
     *
     * @param {Function} callback - A callback function. The first argument will be the Slide object.
     */
    each: function each(callback) {
      Slides.forEach(callback);
    },

    /**
     * Return slides length without clones.
     *
     * @return {number} - Slide length.
     */
    get length() {
      return this.slides.length;
    },

    /**
     * Return "SlideObjects" length including clones.
     *
     * @return {number} - Slide length including clones.
     */
    get total() {
      return Slides.length;
    }

  };
  /**
   * Collect elements.
   */

  function collect() {
    Elements.slider = child(root, classes.slider);
    Elements.track = find(root, "." + classes.track);
    Elements.list = child(Elements.track, classes.list);
    exist(Elements.track && Elements.list, 'Track or list was not found.');
    Elements.slides = children(Elements.list, classes.slide);
    var arrows = findParts(classes.arrows);
    Elements.arrows = {
      prev: find(arrows, "." + classes.prev),
      next: find(arrows, "." + classes.next)
    };
    var autoplay = findParts(classes.autoplay);
    Elements.bar = find(findParts(classes.progress), "." + classes.bar);
    Elements.play = find(autoplay, "." + classes.play);
    Elements.pause = find(autoplay, "." + classes.pause);
    Elements.track.id = Elements.track.id || root.id + "-track";
    Elements.list.id = Elements.list.id || root.id + "-list";
  }
  /**
   * Return class names for the root element.
   */


  function getClasses() {
    var rootClass = classes.root;
    var options = Splide.options;
    return [rootClass + "--" + options.type, rootClass + "--" + options.direction, options.drag ? rootClass + "--draggable" : '', options.isNavigation ? rootClass + "--nav" : '', STATUS_CLASSES.active];
  }
  /**
   * Find parts only from children of the root or track.
   *
   * @return {Element} - A found element or undefined.
   */


  function findParts(className) {
    return child(root, className) || child(Elements.slider, className);
  }

  return Elements;
});
;// CONCATENATED MODULE: ./src/js/components/controller/index.js
/**
 * The component for controlling the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



var floor = Math.floor;
/**
 * The component for controlling the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const controller = (function (Splide, Components) {
  /**
   * Store current options.
   *
   * @type {Object}
   */
  var options;
  /**
   * True if the slide is LOOP mode.
   *
   * @type {boolean}
   */

  var isLoop;
  /**
   * Controller component object.
   *
   * @type {Object}
   */

  var Controller = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      options = Splide.options;
      isLoop = Splide.is(LOOP);
      bind();
    },

    /**
     * Make track run by the given control.
     * - "+{i}" : Increment the slide index by i.
     * - "-{i}" : Decrement the slide index by i.
     * - "{i}"  : Go to the slide whose index is i.
     * - ">"    : Go to next page.
     * - "<"    : Go to prev page.
     * - ">{i}" : Go to page i.
     *
     * @param {string|number} control  - A control pattern.
     * @param {boolean}       silently - Go to the destination without event emission.
     */
    go: function go(control, silently) {
      var destIndex = this.trim(this.parse(control));
      Components.Track.go(destIndex, this.rewind(destIndex), silently);
    },

    /**
     * Parse the given control and return the destination index for the track.
     *
     * @param {string} control - A control target pattern.
     *
     * @return {number} - A parsed target.
     */
    parse: function parse(control) {
      var index = Splide.index;
      var matches = String(control).match(/([+\-<>]+)(\d+)?/);
      var indicator = matches ? matches[1] : '';
      var number = matches ? parseInt(matches[2]) : 0;

      switch (indicator) {
        case '+':
          index += number || 1;
          break;

        case '-':
          index -= number || 1;
          break;

        case '>':
        case '<':
          index = parsePage(number, index, indicator === '<');
          break;

        default:
          index = parseInt(control);
      }

      return index;
    },

    /**
     * Compute index from the given page number.
     *
     * @param {number} page - Page number.
     *
     * @return {number} - A computed page number.
     */
    toIndex: function toIndex(page) {
      if (hasFocus()) {
        return page;
      }

      var length = Splide.length;
      var perPage = options.perPage;
      var index = page * perPage;
      index = index - (this.pageLength * perPage - length) * floor(index / length); // Adjustment for the last page.

      if (length - perPage <= index && index < length) {
        index = length - perPage;
      }

      return index;
    },

    /**
     * Compute page number from the given slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - A computed page number.
     */
    toPage: function toPage(index) {
      if (hasFocus()) {
        return index;
      }

      var length = Splide.length;
      var perPage = options.perPage; // Make the last "perPage" number of slides belong to the last page.

      if (length - perPage <= index && index < length) {
        return floor((length - 1) / perPage);
      }

      return floor(index / perPage);
    },

    /**
     * Trim the given index according to the current mode.
     * Index being returned could be less than 0 or greater than the length in Loop mode.
     *
     * @param {number} index - An index being trimmed.
     *
     * @return {number} - A trimmed index.
     */
    trim: function trim(index) {
      if (!isLoop) {
        index = options.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
      }

      return index;
    },

    /**
     * Rewind the given index if it's out of range.
     *
     * @param {number} index - An index.
     *
     * @return {number} - A rewound index.
     */
    rewind: function rewind(index) {
      var edge = this.edgeIndex;

      if (isLoop) {
        while (index > edge) {
          index -= edge + 1;
        }

        while (index < 0) {
          index += edge + 1;
        }
      } else {
        if (index > edge) {
          index = 0;
        } else if (index < 0) {
          index = edge;
        }
      }

      return index;
    },

    /**
     * Check if the direction is "rtl" or not.
     *
     * @return {boolean} - True if "rtl" or false if not.
     */
    isRtl: function isRtl() {
      return options.direction === RTL;
    },

    /**
     * Return the page length.
     *
     * @return {number} - Max page number.
     */
    get pageLength() {
      var length = Splide.length;
      return hasFocus() ? length : Math.ceil(length / options.perPage);
    },

    /**
     * Return the edge index.
     *
     * @return {number} - Edge index.
     */
    get edgeIndex() {
      var length = Splide.length;

      if (!length) {
        return 0;
      }

      if (hasFocus() || options.isNavigation || isLoop) {
        return length - 1;
      }

      return length - options.perPage;
    },

    /**
     * Return the index of the previous slide.
     *
     * @return {number} - The index of the previous slide if available. -1 otherwise.
     */
    get prevIndex() {
      var prev = Splide.index - 1;

      if (isLoop || options.rewind) {
        prev = this.rewind(prev);
      }

      return prev > -1 ? prev : -1;
    },

    /**
     * Return the index of the next slide.
     *
     * @return {number} - The index of the next slide if available. -1 otherwise.
     */
    get nextIndex() {
      var next = Splide.index + 1;

      if (isLoop || options.rewind) {
        next = this.rewind(next);
      }

      return Splide.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
    }

  };
  /**
   * Listen to some events.
   */

  function bind() {
    Splide.on('move', function (newIndex) {
      Splide.index = newIndex;
    }).on('updated refresh', function (newOptions) {
      options = newOptions || options;
      Splide.index = between(Splide.index, 0, Controller.edgeIndex);
    });
  }
  /**
   * Verify if the focus option is available or not.
   *
   * @return {boolean} - True if a slider has the focus option.
   */


  function hasFocus() {
    return options.focus !== false;
  }
  /**
   * Return the next or previous page index computed by the page number and current index.
   *
   * @param {number}  number - Specify the page number.
   * @param {number}  index  - Current index.
   * @param {boolean} prev   - Prev or next.
   *
   * @return {number} - Slide index.
   */


  function parsePage(number, index, prev) {
    if (number > -1) {
      return Controller.toIndex(number);
    }

    var perMove = options.perMove;
    var sign = prev ? -1 : 1;

    if (perMove) {
      return index + perMove * sign;
    }

    return Controller.toIndex(Controller.toPage(index) + sign);
  }

  return Controller;
});
;// CONCATENATED MODULE: ./src/js/components/track/index.js
/**
 * The component for moving list in the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var abs = Math.abs;
/**
 * The component for moving list in the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const track = (function (Splide, Components) {
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */
  var Layout;
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */

  var Elements;
  /**
   * Store the list element.
   *
   * @type {Element}
   */

  var list;
  /**
   * Whether the current direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Whether the slider type is FADE or not.
   *
   * @type {boolean}
   */

  var isFade = Splide.is(FADE);
  /**
   * Whether the slider direction is RTL or not.
   *
   * @type {boolean}
   */

  var isRTL = Splide.options.direction === RTL;
  /**
   * This will be true while transitioning from the last index to the first one.
   *
   * @type {boolean}
   */

  var isLoopPending = false;
  /**
   * Sign for the direction. Only RTL mode uses the positive sign.
   *
   * @type {number}
   */

  var sign = isRTL ? 1 : -1;
  /**
   * Track component object.
   *
   * @type {Object}
   */

  var Track = {
    /**
     * Make public the sign defined locally.
     *
     * @type {number}
     */
    sign: sign,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Elements = Components.Elements;
      Layout = Components.Layout;
      list = Elements.list;
    },

    /**
     * Called after the component is mounted.
     * The resize event must be registered after the Layout's one is done.
     */
    mounted: function mounted() {
      var _this = this;

      if (!isFade) {
        this.jump(0);
        Splide.on('mounted resize updated', function () {
          _this.jump(Splide.index);
        });
      }
    },

    /**
     * Go to the given destination index.
     * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
     *
     * @param {number}  destIndex - A destination index.
     *                              This can be negative or greater than slides length for reaching clones.
     * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
     * @param {boolean} silently  - If true, suppress emitting events.
     */
    go: function go(destIndex, newIndex, silently) {
      var newPosition = getTrimmedPosition(destIndex);
      var prevIndex = Splide.index; // Prevent any actions while transitioning from the last index to the first one for jump.

      if (Splide.State.is(MOVING) && isLoopPending) {
        return;
      }

      isLoopPending = destIndex !== newIndex;

      if (!silently) {
        Splide.emit('move', newIndex, prevIndex, destIndex);
      }

      if (Math.abs(newPosition - this.position) >= 1 || isFade) {
        Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function () {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        });
      } else {
        if (destIndex !== prevIndex && Splide.options.trimSpace === 'move') {
          Components.Controller.go(destIndex + destIndex - prevIndex, silently);
        } else {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        }
      }
    },

    /**
     * Move the track to the specified index.
     *
     * @param {number} index - A destination index where the track jumps.
     */
    jump: function jump(index) {
      this.translate(getTrimmedPosition(index));
    },

    /**
     * Set the list position by CSS translate property.
     *
     * @param {number} position - A new position value.
     */
    translate: function translate(position) {
      applyStyle(list, {
        transform: "translate" + (isVertical ? 'Y' : 'X') + "(" + position + "px)"
      });
    },

    /**
     * Cancel the transition and set the list position.
     * Also, loop the slider if necessary.
     */
    cancel: function cancel() {
      if (Splide.is(LOOP)) {
        this.shift();
      } else {
        // Ensure the current position.
        this.translate(this.position);
      }

      applyStyle(list, {
        transition: ''
      });
    },

    /**
     * Shift the slider if it exceeds borders on the edge.
     */
    shift: function shift() {
      var position = abs(this.position);
      var left = abs(this.toPosition(0));
      var right = abs(this.toPosition(Splide.length));
      var innerSize = right - left;

      if (position < left) {
        position += innerSize;
      } else if (position > right) {
        position -= innerSize;
      }

      this.translate(sign * position);
    },

    /**
     * Trim redundant spaces on the left or right edge if necessary.
     *
     * @param {number} position - Position value to be trimmed.
     *
     * @return {number} - Trimmed position.
     */
    trim: function trim(position) {
      if (!Splide.options.trimSpace || Splide.is(LOOP)) {
        return position;
      }

      var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
      return between(position, edge, 0);
    },

    /**
     * Calculate the closest slide index from the given position.
     *
     * @param {number} position - A position converted to an slide index.
     *
     * @return {number} - The closest slide index.
     */
    toIndex: function toIndex(position) {
      var _this2 = this;

      var index = 0;
      var minDistance = Infinity;
      Elements.getSlides(true).forEach(function (Slide) {
        var slideIndex = Slide.index;
        var distance = abs(_this2.toPosition(slideIndex) - position);

        if (distance < minDistance) {
          minDistance = distance;
          index = slideIndex;
        }
      });
      return index;
    },

    /**
     * Return coordinates object by the given position.
     *
     * @param {number} position - A position value.
     *
     * @return {Object} - A coordinates object.
     */
    toCoord: function toCoord(position) {
      return {
        x: isVertical ? 0 : position,
        y: isVertical ? position : 0
      };
    },

    /**
     * Calculate the track position by a slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {Object} - Calculated position.
     */
    toPosition: function toPosition(index) {
      var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
      return sign * (position + this.offset(index));
    },

    /**
     * Return the current offset value, considering direction.
     *
     * @return {number} - Offset amount.
     */
    offset: function offset(index) {
      var focus = Splide.options.focus;
      var slideSize = Layout.slideSize(index);

      if (focus === 'center') {
        return -(Layout.size - slideSize) / 2;
      }

      return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
    },

    /**
     * Return the current position.
     * This returns the correct position even while transitioning by CSS.
     *
     * @return {number} - Current position.
     */
    get position() {
      var prop = isVertical ? 'top' : isRTL ? 'right' : 'left';
      return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
    }

  };
  /**
   * Called whenever slides arrive at a destination.
   *
   * @param {number}  destIndex - A destination index.
   * @param {number}  newIndex  - A new index.
   * @param {number}  prevIndex - A previous index.
   * @param {boolean} silently  - If true, suppress emitting events.
   */

  function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
    applyStyle(list, {
      transition: ''
    });
    isLoopPending = false;

    if (!isFade) {
      Track.jump(newIndex);
    }

    if (!silently) {
      Splide.emit('moved', newIndex, prevIndex, destIndex);
    }
  }
  /**
   * Convert index to the trimmed position.
   *
   * @return {number} - Trimmed position.
   */


  function getTrimmedPosition(index) {
    return Track.trim(Track.toPosition(index));
  }

  return Track;
});
;// CONCATENATED MODULE: ./src/js/components/clones/index.js
/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */




/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const clones = (function (Splide, Components) {
  /**
   * Store information of all clones.
   *
   * @type {Array}
   */
  var clones = [];
  /**
   * Store the current clone count on one side.
   *
   * @type {number}
   */

  var cloneCount = 0;
  /**
   * Keep Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Clones component object.
   *
   * @type {Object}
   */

  var Clones = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (Splide.is(LOOP)) {
        init();
        Splide.on('refresh:before', function () {
          _this.destroy();
        }).on('refresh', init).on('resize', function () {
          if (cloneCount !== getCloneCount()) {
            // Destroy before refresh not to collect clones by the Elements component.
            _this.destroy();

            Splide.refresh();
          }
        });
      }
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      dom_remove(clones);
      clones = [];
    },

    /**
     * Return all clones.
     *
     * @return {Element[]} - Cloned elements.
     */
    get clones() {
      return clones;
    },

    /**
     * Return clone length.
     *
     * @return {number} - A length of clones.
     */
    get length() {
      return clones.length;
    }

  };
  /**
   * Initialization.
   */

  function init() {
    Clones.destroy();
    cloneCount = getCloneCount();
    generateClones(cloneCount);
  }
  /**
   * Generate and append/prepend clones.
   *
   * @param {number} count - The half number of clones.
   */


  function generateClones(count) {
    var length = Elements.length,
        register = Elements.register;

    if (length) {
      var slides = Elements.slides;

      while (slides.length < count) {
        slides = slides.concat(slides);
      } // Clones after the last element.


      slides.slice(0, count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        append(Elements.list, clone);
        clones.push(clone);
        register(clone, index + length, index % length);
      }); // Clones before the first element.

      slides.slice(-count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        before(clone, slides[0]);
        clones.push(clone);
        register(clone, index - count, (length + index - count % length) % length);
      });
    }
  }
  /**
   * Return half count of clones to be generated.
   * Clone count is determined by:
   * - "clones" value in the options.
   * - Number of slides that can be placed in a view in "fixed" mode.
   * - Max pages a flick action can move.
   * - Whether the slide length is enough for perPage.
   *
   * @return {number} - Count for clones.
   */


  function getCloneCount() {
    var options = Splide.options;

    if (options.clones) {
      return options.clones;
    } // Use the slide length in autoWidth mode because the number cannot be calculated.


    var baseCount = options.autoWidth || options.autoHeight ? Elements.length : options.perPage;
    var dimension = options.direction === TTB ? 'Height' : 'Width';
    var fixedSize = toPixel(Splide.root, options["fixed" + dimension]);

    if (fixedSize) {
      // Roughly calculate the count. This needs not to be strict.
      baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
    }

    return baseCount * (options.drag ? options.flickMaxPages + 1 : 1);
  }
  /**
   * Clone deeply the given element.
   *
   * @param {Element} elm - An element being duplicated.
   *
   * @return {Node} - A cloned node(element).
   */


  function cloneDeeply(elm) {
    var clone = elm.cloneNode(true);
    addClass(clone, Splide.classes.clone); // ID should not be duplicated.

    removeAttribute(clone, 'id');
    return clone;
  }

  return Clones;
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/horizontal.js
/**
 * The resolver component for horizontal layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for horizontal layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const horizontal = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options = Splide.options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'margin' + (options.direction === RTL ? 'Left' : 'Right'),

    /**
     * Always 0 because the height will be determined by inner contents.
     *
     * @type {number}
     */
    height: 0,

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var left = toPixel(root, padding.left || padding);
      var right = toPixel(root, padding.right || padding);
      this.padding = {
        left: left,
        right: right
      };
      applyStyle(track, {
        paddingLeft: unit(left),
        paddingRight: unit(right)
      });
    },

    /**
     * Return total width from the left of the list to the right of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
     *
     * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
     */
    totalWidth: function totalWidth(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);
      var width = 0;

      if (Slide) {
        var slideRect = getRect(Slide.slide);
        var listRect = getRect(Elements.list);

        if (options.direction === RTL) {
          width = listRect.right - slideRect.left;
        } else {
          width = slideRect.right - listRect.left;
        }

        width += this.gap;
      }

      return width;
    },

    /**
     * Return the slide width in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth(index) {
      if (options.autoWidth) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetWidth : 0;
      }

      var width = options.fixedWidth || (this.width + this.gap) / options.perPage - this.gap;
      return toPixel(root, width);
    },

    /**
     * Return the slide height in px.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight() {
      var height = options.height || options.fixedHeight || this.width * options.heightRatio;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth - this.padding.left - this.padding.right;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/vertical.js
/**
 * The resolver component for vertical layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for vertical layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const vertical = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'marginBottom',

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var top = toPixel(root, padding.top || padding);
      var bottom = toPixel(root, padding.bottom || padding);
      this.padding = {
        top: top,
        bottom: bottom
      };
      applyStyle(track, {
        paddingTop: unit(top),
        paddingBottom: unit(bottom)
      });
    },

    /**
     * Return total height from the top of the list to the bottom of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
     *
     * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
     */
    totalHeight: function totalHeight(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);

      if (Slide) {
        return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
      }

      return 0;
    },

    /**
     * Return the slide width in px.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth() {
      return toPixel(root, options.fixedWidth || this.width);
    },

    /**
     * Return the slide height in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight(index) {
      if (options.autoHeight) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetHeight : 0;
      }

      var height = options.fixedHeight || (this.height + this.gap) / options.perPage - this.gap;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth;
    },

    /**
     * Return slide height without padding.
     *
     * @return {number} - Slider height.
     */
    get height() {
      var height = options.height || this.width * options.heightRatio;
      exist(height, '"height" or "heightRatio" is missing.');
      return toPixel(root, height) - this.padding.top - this.padding.bottom;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/utils/time.js
/**
 * A package of utility functions related with time.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Simple throttle function that controls how often the given function is executed.
 *
 * @param {function} func - A function to be throttled.
 * @param {number}   wait - Time in millisecond for interval of execution.
 *
 * @return {Function} - A debounced function.
 */
function throttle(func, wait) {
  var timeout; // Declare function by the "function" keyword to prevent "this" from being inherited.

  return function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        func();
        timeout = null;
      }, wait);
    }
  };
}
/**
 * Custom setInterval function that provides progress rate as callback.
 *
 * @param {function} callback - A callback function fired every time the interval time passes.
 * @param {number}   interval - Interval duration in milliseconds.
 * @param {function} progress - A callback function fired whenever the progress goes.
 *
 * @return {Object} - An object containing play() and pause() functions.
 */

function createInterval(callback, interval, progress) {
  var _window = window,
      requestAnimationFrame = _window.requestAnimationFrame;
  var start,
      elapse,
      rate,
      _pause = true;

  var step = function step(timestamp) {
    if (!_pause) {
      if (!start) {
        start = timestamp;

        if (rate && rate < 1) {
          start -= rate * interval;
        }
      }

      elapse = timestamp - start;
      rate = elapse / interval;

      if (elapse >= interval) {
        start = 0;
        rate = 1;
        callback();
      }

      if (progress) {
        progress(rate);
      }

      requestAnimationFrame(step);
    }
  };

  return {
    pause: function pause() {
      _pause = true;
      start = 0;
    },
    play: function play(reset) {
      start = 0;

      if (reset) {
        rate = 0;
      }

      if (_pause) {
        _pause = false;
        requestAnimationFrame(step);
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/js/components/layout/index.js
/**
 * The component for handing slide layouts and their sizes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */







/**
 * The component for handing slide layouts and their sizes.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const layout = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Whether the slider is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Layout = object_assign({
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      bind();
      init(); // The word "size" means width for a horizontal slider and height for a vertical slider.

      this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
      this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
    },

    /**
     * Destroy the component.
     */
    destroy: function destroy() {
      removeAttribute([Elements.list, Elements.track], 'style');
    },

    /**
     * Return the slider height on the vertical mode or width on the horizontal mode.
     *
     * @return {number}
     */
    get size() {
      return isVertical ? this.height : this.width;
    }

  }, isVertical ? vertical(Splide, Components) : horizontal(Splide, Components));
  /**
   * Init slider styles according to options.
   */

  function init() {
    Layout.init();
    applyStyle(Splide.root, {
      maxWidth: unit(Splide.options.width)
    });
    Elements.each(function (Slide) {
      Slide.slide.style[Layout.margin] = unit(Layout.gap);
    });
    resize();
  }
  /**
   * Listen the resize native event with throttle.
   * Initialize when the component is mounted or options are updated.
   */


  function bind() {
    Splide.on('resize load', throttle(function () {
      Splide.emit('resize');
    }, Splide.options.throttle), window).on('resize', resize).on('updated refresh', init);
  }
  /**
   * Resize the track and slide elements.
   */


  function resize() {
    var options = Splide.options;
    Layout.resize();
    applyStyle(Elements.track, {
      height: unit(Layout.height)
    });
    var slideHeight = options.autoHeight ? null : unit(Layout.slideHeight());
    Elements.each(function (Slide) {
      applyStyle(Slide.container, {
        height: slideHeight
      });
      applyStyle(Slide.slide, {
        width: options.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
        height: Slide.container ? null : slideHeight
      });
    });
    Splide.emit('resized');
  }

  return Layout;
});
;// CONCATENATED MODULE: ./src/js/components/drag/index.js
/**
 * The component for supporting mouse drag and swipe.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var drag_abs = Math.abs;
/**
 * If the absolute velocity is greater thant this value,
 * a slider always goes to a different slide after drag, not allowed to stay on a current slide.
 */

var MIN_VELOCITY = 0.1;
/**
 * Adjust how much the track can be pulled on the first or last page.
 * The larger number this is, the farther the track moves.
 * This should be around 5 - 9.
 *
 * @type {number}
 */

var FRICTION_REDUCER = 7;
/**
 * The component supporting mouse drag and swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const drag = (function (Splide, Components) {
  /**
   * Store the Move component.
   *
   * @type {Object}
   */
  var Track = Components.Track;
  /**
   * Store the Controller component.
   *
   * @type {Object}
   */

  var Controller = Components.Controller;
  /**
   * Coordinate of the track on starting drag.
   *
   * @type {Object}
   */

  var startCoord;
  /**
   * Analyzed info on starting drag.
   *
   * @type {Object|null}
   */

  var startInfo;
  /**
   * Analyzed info being updated while dragging/swiping.
   *
   * @type {Object}
   */

  var currentInfo;
  /**
   * Determine whether slides are being dragged or not.
   *
   * @type {boolean}
   */

  var isDragging;
  /**
   * Whether the slider direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Axis for the direction.
   *
   * @type {string}
   */

  var axis = isVertical ? 'y' : 'x';
  /**
   * Drag component object.
   *
   * @type {Object}
   */

  var Drag = {
    /**
     * Whether dragging is disabled or not.
     *
     * @type {boolean}
     */
    disabled: false,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      var Elements = Components.Elements;
      var track = Elements.track;
      Splide.on('touchstart mousedown', start, track).on('touchmove mousemove', move, track, {
        passive: false
      }).on('touchend touchcancel mouseleave mouseup dragend', end, track).on('mounted refresh', function () {
        // Prevent dragging an image or anchor itself.
        each(Elements.list.querySelectorAll('img, a'), function (elm) {
          Splide.off('dragstart', elm).on('dragstart', function (e) {
            e.preventDefault();
          }, elm, {
            passive: false
          });
        });
      }).on('mounted updated', function () {
        _this.disabled = !Splide.options.drag;
      });
    }
  };
  /**
   * Called when the track starts to be dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */

  function start(e) {
    if (!Drag.disabled && !isDragging) {
      // These prams are used to evaluate whether the slider should start moving.
      init(e);
    }
  }
  /**
   * Initialize parameters.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function init(e) {
    startCoord = Track.toCoord(Track.position);
    startInfo = analyze(e, {});
    currentInfo = startInfo;
  }
  /**
   * Called while the track being dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function move(e) {
    if (startInfo) {
      currentInfo = analyze(e, startInfo);

      if (isDragging) {
        if (e.cancelable) {
          e.preventDefault();
        }

        if (!Splide.is(FADE)) {
          var position = startCoord[axis] + currentInfo.offset[axis];
          Track.translate(resist(position));
        }
      } else {
        if (shouldMove(currentInfo)) {
          Splide.emit('drag', startInfo);
          isDragging = true;
          Track.cancel(); // These params are actual drag data.

          init(e);
        }
      }
    }
  }
  /**
   * Determine whether to start moving the track or not by drag angle.
   *
   * @param {Object} info - An information object.
   *
   * @return {boolean} - True if the track should be moved or false if not.
   */


  function shouldMove(_ref) {
    var offset = _ref.offset;

    if (Splide.State.is(MOVING) && Splide.options.waitForTransition) {
      return false;
    }

    var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;

    if (isVertical) {
      angle = 90 - angle;
    }

    return angle < Splide.options.dragAngleThreshold;
  }
  /**
   * Resist dragging the track on the first/last page because there is no more.
   *
   * @param {number} position - A position being applied to the track.
   *
   * @return {Object} - Adjusted position.
   */


  function resist(position) {
    if (Splide.is(SLIDE)) {
      var sign = Track.sign;

      var _start = sign * Track.trim(Track.toPosition(0));

      var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));

      position *= sign;

      if (position < _start) {
        position = _start - FRICTION_REDUCER * Math.log(_start - position);
      } else if (position > _end) {
        position = _end + FRICTION_REDUCER * Math.log(position - _end);
      }

      position *= sign;
    }

    return position;
  }
  /**
   * Called when dragging ends.
   */


  function end() {
    startInfo = null;

    if (isDragging) {
      Splide.emit('dragged', currentInfo);
      go(currentInfo);
      isDragging = false;
    }
  }
  /**
   * Go to the slide determined by the analyzed data.
   *
   * @param {Object} info - An info object.
   */


  function go(info) {
    var velocity = info.velocity[axis];
    var absV = drag_abs(velocity);

    if (absV > 0) {
      var options = Splide.options;
      var index = Splide.index;
      var sign = velocity < 0 ? -1 : 1;
      var destIndex = index;

      if (!Splide.is(FADE)) {
        var destination = Track.position;

        if (absV > options.flickVelocityThreshold && drag_abs(info.offset[axis]) < options.swipeDistanceThreshold) {
          destination += sign * Math.min(absV * options.flickPower, Components.Layout.size * (options.flickMaxPages || 1));
        }

        destIndex = Track.toIndex(destination);
      }
      /*
       * Do not allow the track to go to a previous position if there is enough velocity.
       * Always use the adjacent index for the fade mode.
       */


      if (destIndex === index && absV > MIN_VELOCITY) {
        destIndex = index + sign * Track.sign;
      }

      if (Splide.is(SLIDE)) {
        destIndex = between(destIndex, 0, Controller.edgeIndex);
      }

      Controller.go(destIndex, options.isNavigation);
    }
  }
  /**
   * Analyze the given event object and return important information for handling swipe behavior.
   *
   * @param {Event}   e          - Touch or Mouse event object.
   * @param {Object}  startInfo  - Information analyzed on start for calculating difference from the current one.
   *
   * @return {Object} - An object containing analyzed information, such as offset, velocity, etc.
   */


  function analyze(e, startInfo) {
    var timeStamp = e.timeStamp,
        touches = e.touches;

    var _ref2 = touches ? touches[0] : e,
        clientX = _ref2.clientX,
        clientY = _ref2.clientY;

    var _ref3 = startInfo.to || {},
        _ref3$x = _ref3.x,
        fromX = _ref3$x === void 0 ? clientX : _ref3$x,
        _ref3$y = _ref3.y,
        fromY = _ref3$y === void 0 ? clientY : _ref3$y;

    var startTime = startInfo.time || 0;
    var offset = {
      x: clientX - fromX,
      y: clientY - fromY
    };
    var duration = timeStamp - startTime;
    var velocity = {
      x: offset.x / duration,
      y: offset.y / duration
    };
    return {
      to: {
        x: clientX,
        y: clientY
      },
      offset: offset,
      time: timeStamp,
      velocity: velocity
    };
  }

  return Drag;
});
;// CONCATENATED MODULE: ./src/js/components/click/index.js
/**
 * The component for handling a click event.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for handling a click event.
 * Click should be disabled during drag/swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */
/* harmony default export */ const click = (function (Splide, Components) {
  /**
   * Whether click is disabled or not.
   *
   * @type {boolean}
   */
  var disabled = false;
  /**
   * Click component object.
   *
   * @type {Object}
   */

  var Click = {
    /**
     * Mount only when the drag is activated and the slide type is not "fade".
     *
     * @type {boolean}
     */
    required: Splide.options.drag,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('click', onClick, Components.Elements.track, {
        capture: true
      }).on('drag', function () {
        disabled = true;
      }).on('dragged', function () {
        // Make sure the flag is released after the click event is fired.
        setTimeout(function () {
          disabled = false;
        });
      });
    }
  };
  /**
   * Called when a track element is clicked.
   *
   * @param {Event} e - A click event.
   */

  function onClick(e) {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  return Click;
});
;// CONCATENATED MODULE: ./src/js/components/autoplay/index.js
/**
 * The component for playing slides automatically.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Set of pause flags.
 */

var PAUSE_FLAGS = {
  HOVER: 1,
  FOCUS: 2,
  MANUAL: 3
};
/**
 * The component for playing slides automatically.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const autoplay = (function (Splide, Components, name) {
  /**
   * Store pause flags.
   *
   * @type {Array}
   */
  var flags = [];
  /**
   * Store an interval object.
   *
   * @type {Object};
   */

  var interval;
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */

  var Elements = Components.Elements;
  /**
   * Autoplay component object.
   *
   * @type {Object}
   */

  var Autoplay = {
    /**
     * Required only when the autoplay option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.autoplay,

    /**
     * Called when the component is mounted.
     * Note that autoplay starts only if there are slides over perPage number.
     */
    mount: function mount() {
      var options = Splide.options;

      if (Elements.slides.length > options.perPage) {
        interval = createInterval(function () {
          Splide.go('>');
        }, options.interval, function (rate) {
          Splide.emit(name + ":playing", rate);

          if (Elements.bar) {
            applyStyle(Elements.bar, {
              width: rate * 100 + "%"
            });
          }
        });
        bind();
        this.play();
      }
    },

    /**
     * Start autoplay.
     *
     * @param {number} flag - A pause flag to be removed.
     */
    play: function play(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      flags = flags.filter(function (f) {
        return f !== flag;
      });

      if (!flags.length) {
        Splide.emit(name + ":play");
        interval.play(Splide.options.resetProgress);
      }
    },

    /**
     * Pause autoplay.
     * Note that Array.includes is not supported by IE.
     *
     * @param {number} flag - A pause flag to be added.
     */
    pause: function pause(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      interval.pause();

      if (flags.indexOf(flag) === -1) {
        flags.push(flag);
      }

      if (flags.length === 1) {
        Splide.emit(name + ":pause");
      }
    }
  };
  /**
   * Listen some events.
   */

  function bind() {
    var options = Splide.options;
    var sibling = Splide.sibling;
    var elms = [Splide.root, sibling ? sibling.root : null];

    if (options.pauseOnHover) {
      switchOn(elms, 'mouseleave', PAUSE_FLAGS.HOVER, true);
      switchOn(elms, 'mouseenter', PAUSE_FLAGS.HOVER, false);
    }

    if (options.pauseOnFocus) {
      switchOn(elms, 'focusout', PAUSE_FLAGS.FOCUS, true);
      switchOn(elms, 'focusin', PAUSE_FLAGS.FOCUS, false);
    }

    if (Elements.play) {
      Splide.on('click', function () {
        // Need to be removed a focus flag at first.
        Autoplay.play(PAUSE_FLAGS.FOCUS);
        Autoplay.play(PAUSE_FLAGS.MANUAL);
      }, Elements.play);
    }

    if (Elements.pause) {
      switchOn([Elements.pause], 'click', PAUSE_FLAGS.MANUAL, false);
    }

    Splide.on('move refresh', function () {
      Autoplay.play();
    }) // Rewind the timer.
    .on('destroy', function () {
      Autoplay.pause();
    });
  }
  /**
   * Play or pause on the given event.
   *
   * @param {Element[]} elms  - Elements.
   * @param {string}    event - An event name or names.
   * @param {number}    flag  - A pause flag defined on the top.
   * @param {boolean}   play  - Determine whether to play or pause.
   */


  function switchOn(elms, event, flag, play) {
    elms.forEach(function (elm) {
      Splide.on(event, function () {
        Autoplay[play ? 'play' : 'pause'](flag);
      }, elm);
    });
  }

  return Autoplay;
});
;// CONCATENATED MODULE: ./src/js/components/cover/index.js
/**
 * The component for change an img element to background image of its wrapper.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for change an img element to background image of its wrapper.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const cover = (function (Splide, Components) {
  /**
   * Hold options.
   *
   * @type {Object}
   */
  var options = Splide.options;
  /**
   * Cover component object.
   *
   * @type {Object}
   */

  var Cover = {
    /**
     * Required only when "cover" option is true.
     *
     * @type {boolean}
     */
    required: options.cover,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('lazyload:loaded', function (img) {
        cover(img, false);
      });
      Splide.on('mounted updated refresh', function () {
        return apply(false);
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      apply(true);
    }
  };
  /**
   * Apply "cover" to all slides.
   *
   * @param {boolean} uncover - If true, "cover" will be clear.
   */

  function apply(uncover) {
    Components.Elements.each(function (Slide) {
      var img = child(Slide.slide, 'IMG') || child(Slide.container, 'IMG');

      if (img && img.src) {
        cover(img, uncover);
      }
    });
  }
  /**
   * Set background image of the parent element, using source of the given image element.
   *
   * @param {Element} img     - An image element.
   * @param {boolean} uncover - Reset "cover".
   */


  function cover(img, uncover) {
    applyStyle(img.parentElement, {
      background: uncover ? '' : "center/cover no-repeat url(\"" + img.src + "\")"
    });
    applyStyle(img, {
      display: uncover ? '' : 'none'
    });
  }

  return Cover;
});
;// CONCATENATED MODULE: ./src/js/components/arrows/path.js
/**
 * Export vector path for an arrow.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Namespace definition for SVG element.
 *
 * @type {string}
 */
var XML_NAME_SPACE = 'http://www.w3.org/2000/svg';
/**
 * The arrow vector path.
 *
 * @type {number}
 */

var PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
/**
 * SVG width and height.
 *
 * @type {number}
 */

var SIZE = 40;
;// CONCATENATED MODULE: ./src/js/components/arrows/index.js
/**
 * The component for appending prev/next arrows.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for appending prev/next arrows.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const arrows = (function (Splide, Components, name) {
  /**
   * Previous arrow element.
   *
   * @type {Element|undefined}
   */
  var prev;
  /**
   * Next arrow element.
   *
   * @type {Element|undefined}
   */

  var next;
  /**
   * Store the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Hold the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Whether arrows are created programmatically or not.
   *
   * @type {boolean}
   */

  var created;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Arrows component object.
   *
   * @type {Object}
   */

  var Arrows = {
    /**
     * Required when the arrows option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.arrows,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      // Attempt to get arrows from HTML source.
      prev = Elements.arrows.prev;
      next = Elements.arrows.next; // If arrows were not found in HTML, let's generate them.

      if ((!prev || !next) && Splide.options.arrows) {
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        appendArrows();
      }

      if (prev && next) {
        bind();
      }

      this.arrows = {
        prev: prev,
        next: next
      };
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      Splide.emit(name + ":mounted", prev, next);
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      removeAttribute([prev, next], 'disabled');

      if (created) {
        dom_remove(prev.parentElement);
      }
    }
  };
  /**
   * Listen to native and custom events.
   */

  function bind() {
    Splide.on('click', function () {
      Splide.go('<');
    }, prev).on('click', function () {
      Splide.go('>');
    }, next).on('mounted move updated refresh', updateDisabled);
  }
  /**
   * Update a disabled attribute.
   */


  function updateDisabled() {
    var _Components$Controlle = Components.Controller,
        prevIndex = _Components$Controlle.prevIndex,
        nextIndex = _Components$Controlle.nextIndex;
    var isEnough = Splide.length > Splide.options.perPage || Splide.is(LOOP);
    prev.disabled = prevIndex < 0 || !isEnough;
    next.disabled = nextIndex < 0 || !isEnough;
    Splide.emit(name + ":updated", prev, next, prevIndex, nextIndex);
  }
  /**
   * Create a wrapper element and append arrows.
   */


  function appendArrows() {
    var wrapper = create('div', {
      "class": classes.arrows
    });
    append(wrapper, prev);
    append(wrapper, next);
    var slider = Elements.slider;
    var parent = Splide.options.arrows === 'slider' && slider ? slider : root;
    before(wrapper, parent.firstElementChild);
  }
  /**
   * Create an arrow element.
   *
   * @param {boolean} prev - Determine to create a prev arrow or next arrow.
   *
   * @return {Element} - A created arrow element.
   */


  function createArrow(prev) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev ? classes.prev : classes.next) + "\" type=\"button\">" + ("<svg xmlns=\"" + XML_NAME_SPACE + "\"\tviewBox=\"0 0 " + SIZE + " " + SIZE + "\"\twidth=\"" + SIZE + "\"\theight=\"" + SIZE + "\">") + ("<path d=\"" + (Splide.options.arrowPath || PATH) + "\" />");
    return domify(arrow);
  }

  return Arrows;
});
;// CONCATENATED MODULE: ./src/js/components/pagination/index.js
/**
 * The component for handling pagination
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for updating some attributes of pagination nodes.
 *
 * @type {string}
 */

var ATTRIBUTES_UPDATE_EVENT = 'move.page';
/**
 * The event name for recreating pagination.
 *
 * @type {string}
 */

var UPDATE_EVENT = 'updated.page refresh.page';
/**
 * The component for handling pagination
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const pagination = (function (Splide, Components, name) {
  /**
   * Store all data for pagination.
   * - list: A list element.
   * - items: An array that contains objects(li, button, index, page).
   *
   * @type {Object}
   */
  var data = {};
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Pagination component object.
   *
   * @type {Object}
   */

  var Pagination = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var pagination = Splide.options.pagination;

      if (pagination) {
        data = createPagination();
        var slider = Elements.slider;
        var parent = pagination === 'slider' && slider ? slider : Splide.root;
        append(parent, data.list);
        Splide.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
      }

      Splide.off(UPDATE_EVENT).on(UPDATE_EVENT, function () {
        Pagination.destroy();

        if (Splide.options.pagination) {
          Pagination.mount();
          Pagination.mounted();
        }
      });
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (Splide.options.pagination) {
        var index = Splide.index;
        Splide.emit(name + ":mounted", data, this.getItem(index));
        updateAttributes(index, -1);
      }
    },

    /**
     * Destroy the pagination.
     * Be aware that node.remove() is not supported by IE.
     */
    destroy: function destroy() {
      dom_remove(data.list);

      if (data.items) {
        data.items.forEach(function (item) {
          Splide.off('click', item.button);
        });
      } // Do not remove UPDATE_EVENT to recreate pagination if needed.


      Splide.off(ATTRIBUTES_UPDATE_EVENT);
      data = {};
    },

    /**
     * Return an item by index.
     *
     * @param {number} index - A slide index.
     *
     * @return {Object|undefined} - An item object on success or undefined on failure.
     */
    getItem: function getItem(index) {
      return data.items[Components.Controller.toPage(index)];
    },

    /**
     * Return object containing pagination data.
     *
     * @return {Object} - Pagination data including list and items.
     */
    get data() {
      return data;
    }

  };
  /**
   * Update attributes.
   *
   * @param {number} index     - Active index.
   * @param {number} prevIndex - Prev index.
   */

  function updateAttributes(index, prevIndex) {
    var prev = Pagination.getItem(prevIndex);
    var curr = Pagination.getItem(index);
    var active = STATUS_CLASSES.active;

    if (prev) {
      removeClass(prev.button, active);
    }

    if (curr) {
      addClass(curr.button, active);
    }

    Splide.emit(name + ":updated", data, prev, curr);
  }
  /**
   * Create a wrapper and button elements.
   *
   * @return {Object} - An object contains all data.
   */


  function createPagination() {
    var options = Splide.options;
    var classes = Splide.classes;
    var list = create('ul', {
      "class": classes.pagination
    });
    var items = Elements.getSlides(false).filter(function (Slide) {
      return options.focus !== false || Slide.index % options.perPage === 0;
    }).map(function (Slide, page) {
      var li = create('li', {});
      var button = create('button', {
        "class": classes.page,
        type: 'button'
      });
      append(li, button);
      append(list, li);
      Splide.on('click', function () {
        Splide.go(">" + page);
      }, button);
      return {
        li: li,
        button: button,
        page: page,
        Slides: Elements.getSlidesByPage(page)
      };
    });
    return {
      list: list,
      items: items
    };
  }

  return Pagination;
});
;// CONCATENATED MODULE: ./src/js/components/lazyload/index.js
/**
 * The component for loading slider images lazily.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The name for a data attribute of src.
 *
 * @type {string}
 */

var SRC_DATA_NAME = 'data-splide-lazy';
/**
 * The name for a data attribute of srcset.
 *
 * @type {string}
 */

var SRCSET_DATA_NAME = 'data-splide-lazy-srcset';
/**
 * The component for loading slider images lazily.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const lazyload = (function (Splide, Components, name) {
  /**
   * Next index for sequential loading.
   *
   * @type {number}
   */
  var nextIndex;
  /**
   * Store objects containing an img element and a Slide object.
   *
   * @type {Object[]}
   */

  var images;
  /**
   * Store the options.
   *
   * @type {Object}
   */

  var options = Splide.options;
  /**
   * Whether to load images sequentially or not.
   *
   * @type {boolean}
   */

  var isSequential = options.lazyLoad === 'sequential';
  /**
   * Lazyload component object.
   *
   * @type {Object}
   */

  var Lazyload = {
    /**
     * Mount only when the lazyload option is provided.
     *
     * @type {boolean}
     */
    required: options.lazyLoad,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted refresh', function () {
        init();
        Components.Elements.each(function (Slide) {
          each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function (img) {
            if (!img.src && !img.srcset) {
              images.push({
                img: img,
                Slide: Slide
              });
              applyStyle(img, {
                display: 'none'
              });
            }
          });
        });

        if (isSequential) {
          loadNext();
        }
      });

      if (!isSequential) {
        Splide.on("mounted refresh moved." + name, check);
      }
    },

    /**
     * Destroy.
     */
    destroy: init
  };
  /**
   * Initialize parameters.
   */

  function init() {
    images = [];
    nextIndex = 0;
  }
  /**
   * Check how close each image is from the active slide and
   * determine whether to start loading or not, according to the distance.
   *
   * @param {number} index - Current index.
   */


  function check(index) {
    index = isNaN(index) ? Splide.index : index;
    images = images.filter(function (image) {
      if (image.Slide.isWithin(index, options.perPage * (options.preloadPages + 1))) {
        load(image.img, image.Slide);
        return false;
      }

      return true;
    }); // Unbind if all images are loaded.

    if (!images[0]) {
      Splide.off("moved." + name);
    }
  }
  /**
   * Start loading an image.
   * Creating a clone of the image element since setting src attribute directly to it
   * often occurs 'hitch', blocking some other processes of a browser.
   *
   * @param {Element} img   - An image element.
   * @param {Object}  Slide - A Slide object.
   */


  function load(img, Slide) {
    addClass(Slide.slide, STATUS_CLASSES.loading);
    var spinner = create('span', {
      "class": Splide.classes.spinner
    });
    append(img.parentElement, spinner);

    img.onload = function () {
      loaded(img, spinner, Slide, false);
    };

    img.onerror = function () {
      loaded(img, spinner, Slide, true);
    };

    setAttribute(img, 'srcset', getAttribute(img, SRCSET_DATA_NAME) || '');
    setAttribute(img, 'src', getAttribute(img, SRC_DATA_NAME) || '');
  }
  /**
   * Start loading a next image in images array.
   */


  function loadNext() {
    if (nextIndex < images.length) {
      var image = images[nextIndex];
      load(image.img, image.Slide);
    }

    nextIndex++;
  }
  /**
   * Called just after the image was loaded or loading was aborted by some error.
   *
   * @param {Element} img     - An image element.
   * @param {Element} spinner - A spinner element.
   * @param {Object}  Slide   - A Slide object.
   * @param {boolean} error   - True if the image was loaded successfully or false on error.
   */


  function loaded(img, spinner, Slide, error) {
    removeClass(Slide.slide, STATUS_CLASSES.loading);

    if (!error) {
      dom_remove(spinner);
      applyStyle(img, {
        display: ''
      });
      Splide.emit(name + ":loaded", img).emit('resize');
    }

    if (isSequential) {
      loadNext();
    }
  }

  return Lazyload;
});
;// CONCATENATED MODULE: ./src/js/constants/a11y.js
/**
 * Export aria attribute names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Attribute name for aria-current.
 *
 * @type {string}
 */
var ARIA_CURRENRT = 'aria-current';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_CONTROLS = 'aria-controls';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_LABEL = 'aria-label';
/**
 * Attribute name for aria-labelledby.
 *
 * @type {string}
 */

var ARIA_LABELLEDBY = 'aria-labelledby';
/**
 * Attribute name for aria-hidden.
 *
 * @type {string}
 */

var ARIA_HIDDEN = 'aria-hidden';
/**
 * Attribute name for tab-index.
 *
 * @type {string}
 */

var TAB_INDEX = 'tabindex';
;// CONCATENATED MODULE: ./src/js/components/keyboard/index.js
/**
 * The component for controlling slides via keyboard.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Map a key to a slide control.
 *
 * @type {Object}
 */

var KEY_MAP = {
  ltr: {
    ArrowLeft: '<',
    ArrowRight: '>',
    // For IE.
    Left: '<',
    Right: '>'
  },
  rtl: {
    ArrowLeft: '>',
    ArrowRight: '<',
    // For IE.
    Left: '>',
    Right: '<'
  },
  ttb: {
    ArrowUp: '<',
    ArrowDown: '>',
    // For IE.
    Up: '<',
    Down: '>'
  }
};
/**
 * The component for controlling slides via keyboard.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const keyboard = (function (Splide) {
  /**
   * Hold the target element.
   *
   * @type {Element|Document|undefined}
   */
  var target;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted updated', function () {
        var options = Splide.options;
        var root = Splide.root;
        var map = KEY_MAP[options.direction];
        var keyboard = options.keyboard;

        if (target) {
          Splide.off('keydown', target);
          removeAttribute(root, TAB_INDEX);
        }

        if (keyboard) {
          if (keyboard === 'focused') {
            target = root;
            setAttribute(root, TAB_INDEX, 0);
          } else {
            target = document;
          }

          Splide.on('keydown', function (e) {
            if (map[e.key]) {
              Splide.go(map[e.key]);
            }
          }, target);
        }
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/components/a11y/index.js
/**
 * The component for enhancing accessibility.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for enhancing accessibility.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const a11y = (function (Splide, Components) {
  /**
   * Hold a i18n object.
   *
   * @type {Object}
   */
  var i18n = Splide.i18n;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * All attributes related with A11y.
   *
   * @type {string[]}
   */

  var allAttributes = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, 'role'];
  /**
   * A11y component object.
   *
   * @type {Object}
   */

  var A11y = {
    /**
     * Required only when the accessibility option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.accessibility,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('visible', function (Slide) {
        updateSlide(Slide.slide, true);
      }).on('hidden', function (Slide) {
        updateSlide(Slide.slide, false);
      }).on('arrows:mounted', initArrows).on('arrows:updated', updateArrows).on('pagination:mounted', initPagination).on('pagination:updated', updatePagination).on('refresh', function () {
        removeAttribute(Components.Clones.clones, allAttributes);
      });

      if (Splide.options.isNavigation) {
        Splide.on('navigation:mounted navigation:updated', initNavigation).on('active', function (Slide) {
          updateNavigation(Slide, true);
        }).on('inactive', function (Slide) {
          updateNavigation(Slide, false);
        });
      }

      initAutoplay();
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      var Arrows = Components.Arrows;
      var arrows = Arrows ? Arrows.arrows : {};
      removeAttribute(Elements.slides.concat([arrows.prev, arrows.next, Elements.play, Elements.pause]), allAttributes);
    }
  };
  /**
   * Update slide attributes when it gets visible or hidden.
   *
   * @param {Element} slide   - A slide element.
   * @param {Boolean} visible - True when the slide gets visible, or false when hidden.
   */

  function updateSlide(slide, visible) {
    setAttribute(slide, ARIA_HIDDEN, !visible);

    if (Splide.options.slideFocus) {
      setAttribute(slide, TAB_INDEX, visible ? 0 : -1);
    }
  }
  /**
   * Initialize arrows if they are available.
   * Append screen reader elements and add aria-controls attribute.
   *
   * @param {Element} prev - Previous arrow element.
   * @param {Element} next - Next arrow element.
   */


  function initArrows(prev, next) {
    var controls = Elements.track.id;
    setAttribute(prev, ARIA_CONTROLS, controls);
    setAttribute(next, ARIA_CONTROLS, controls);
  }
  /**
   * Update arrow attributes.
   *
   * @param {Element} prev      - Previous arrow element.
   * @param {Element} next      - Next arrow element.
   * @param {number}  prevIndex - Previous slide index or -1 when there is no precede slide.
   * @param {number}  nextIndex - Next slide index or -1 when there is no next slide.
   */


  function updateArrows(prev, next, prevIndex, nextIndex) {
    var index = Splide.index;
    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
  }
  /**
   * Initialize pagination if it's available.
   * Append a screen reader element and add aria-controls/label attribute to each item.
   *
   * @param {Object} data       - Data object containing all items.
   * @param {Object} activeItem - An initial active item.
   */


  function initPagination(data, activeItem) {
    if (activeItem) {
      setAttribute(activeItem.button, ARIA_CURRENRT, true);
    }

    data.items.forEach(function (item) {
      var options = Splide.options;
      var text = options.focus === false && options.perPage > 1 ? i18n.pageX : i18n.slideX;
      var label = sprintf(text, item.page + 1);
      var button = item.button;
      var controls = item.Slides.map(function (Slide) {
        return Slide.slide.id;
      });
      setAttribute(button, ARIA_CONTROLS, controls.join(' '));
      setAttribute(button, ARIA_LABEL, label);
    });
  }
  /**
   * Update pagination attributes.
   *
   * @param {Object}  data - Data object containing all items.
   * @param {Element} prev - A previous active element.
   * @param {Element} curr - A current active element.
   */


  function updatePagination(data, prev, curr) {
    if (prev) {
      removeAttribute(prev.button, ARIA_CURRENRT);
    }

    if (curr) {
      setAttribute(curr.button, ARIA_CURRENRT, true);
    }
  }
  /**
   * Initialize autoplay buttons.
   */


  function initAutoplay() {
    ['play', 'pause'].forEach(function (name) {
      var elm = Elements[name];

      if (elm) {
        if (!isButton(elm)) {
          setAttribute(elm, 'role', 'button');
        }

        setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
        setAttribute(elm, ARIA_LABEL, i18n[name]);
      }
    });
  }
  /**
   * Initialize navigation slider.
   * Add button role, aria-label, aria-controls to slide elements and append screen reader text to them.
   *
   * @param {Splide} main - A main Splide instance.
   */


  function initNavigation(main) {
    Elements.each(function (Slide) {
      var slide = Slide.slide;
      var realIndex = Slide.realIndex;

      if (!isButton(slide)) {
        setAttribute(slide, 'role', 'button');
      }

      var slideIndex = realIndex > -1 ? realIndex : Slide.index;
      var label = sprintf(i18n.slideX, slideIndex + 1);
      var mainSlide = main.Components.Elements.getSlide(slideIndex);
      setAttribute(slide, ARIA_LABEL, label);

      if (mainSlide) {
        setAttribute(slide, ARIA_CONTROLS, mainSlide.slide.id);
      }
    });
  }
  /**
   * Update navigation attributes.
   *
   * @param {Object}  Slide  - A target Slide object.
   * @param {boolean} active - True if the slide is active or false if inactive.
   */


  function updateNavigation(_ref, active) {
    var slide = _ref.slide;

    if (active) {
      setAttribute(slide, ARIA_CURRENRT, true);
    } else {
      removeAttribute(slide, ARIA_CURRENRT);
    }
  }
  /**
   * Check if the given element is button or not.
   *
   * @param {Element} elm - An element to be checked.
   *
   * @return {boolean} - True if the given element is button.
   */


  function isButton(elm) {
    return elm.tagName === 'BUTTON';
  }

  return A11y;
});
;// CONCATENATED MODULE: ./src/js/components/sync/index.js
/**
 * The component for synchronizing a slider with another.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for sync.
 *
 * @type {string}
 */

var SYNC_EVENT = 'move.sync';
/**
 * The event names for click navigation.
 * @type {string}
 */

var CLICK_EVENTS = 'mouseup touchend';
/**
 * The keys for triggering the navigation button.
 *
 * @type {String[]}
 */

var TRIGGER_KEYS = [' ', 'Enter', 'Spacebar'];
/**
 * The component for synchronizing a slider with another.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const sync = (function (Splide) {
  /**
   * Keep the sibling Splide instance.
   *
   * @type {Splide}
   */
  var sibling = Splide.sibling;
  /**
   * Whether the sibling slider is navigation or not.
   *
   * @type {Splide|boolean}
   */

  var isNavigation = sibling && sibling.options.isNavigation;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Sync = {
    /**
     * Required only when the sub slider is available.
     *
     * @type {boolean}
     */
    required: !!sibling,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      syncMain();
      syncSibling();

      if (isNavigation) {
        bind();
        Splide.on('refresh', function () {
          setTimeout(function () {
            bind();
            sibling.emit('navigation:updated', Splide);
          });
        });
      }
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (isNavigation) {
        sibling.emit('navigation:mounted', Splide);
      }
    }
  };
  /**
   * Listen the primary slider event to move secondary one.
   * Must unbind a handler at first to avoid infinite loop.
   */

  function syncMain() {
    Splide.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
      syncSibling();
    });
  }
  /**
   * Listen the secondary slider event to move primary one.
   * Must unbind a handler at first to avoid infinite loop.
   */


  function syncSibling() {
    sibling.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      Splide.off(SYNC_EVENT).go(Splide.is(LOOP) ? destIndex : newIndex, false);
      syncMain();
    });
  }
  /**
   * Listen some events on each slide.
   */


  function bind() {
    sibling.Components.Elements.each(function (_ref) {
      var slide = _ref.slide,
          index = _ref.index;

      /*
       * Listen mouseup and touchend events to handle click.
       */
      Splide.off(CLICK_EVENTS, slide).on(CLICK_EVENTS, function (e) {
        // Ignore a middle or right click.
        if (!e.button || e.button === 0) {
          moveSibling(index);
        }
      }, slide);
      /*
       * Subscribe keyup to handle Enter and Space key.
       * Note that Array.includes is not supported by IE.
       */

      Splide.off('keyup', slide).on('keyup', function (e) {
        if (TRIGGER_KEYS.indexOf(e.key) > -1) {
          e.preventDefault();
          moveSibling(index);
        }
      }, slide, {
        passive: false
      });
    });
  }
  /**
   * Move the sibling to the given index.
   * Need to check "IDLE" status because slides can be moving by Drag component.
   *
   * @param {number} index - Target index.
   */


  function moveSibling(index) {
    if (Splide.State.is(IDLE)) {
      sibling.go(index);
    }
  }

  return Sync;
});
;// CONCATENATED MODULE: ./src/js/components/breakpoints/index.js
/**
 * The component for updating options according to a current window width.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Interval time for throttle.
 *
 * @type {number}
 */

var THROTTLE = 50;
/**
 * The component for updating options according to a current window width.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const breakpoints = (function (Splide) {
  /**
   * Store breakpoints.
   *
   * @type {Object|boolean}
   */
  var breakpoints = Splide.options.breakpoints;
  /**
   * The check function whose frequency of call is reduced.
   *
   * @type {Function}
   */

  var throttledCheck = throttle(check, THROTTLE);
  /**
   * Keep initial options.
   *
   * @type {Object}
   */

  var initialOptions;
  /**
   * An array containing objects of point and MediaQueryList.
   *
   * @type {Object[]}
   */

  var map = [];
  /**
   * Hold the previous breakpoint.
   *
   * @type {number|undefined}
   */

  var prevPoint;
  /**
   * Breakpoints component object.
   *
   * @type {Object}
   */

  var Breakpoints = {
    /**
     * Required only when the breakpoints definition is provided and browser supports matchMedia.
     *
     * @type {boolean}
     */
    required: breakpoints && matchMedia,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      map = Object.keys(breakpoints).sort(function (n, m) {
        return +n - +m;
      }).map(function (point) {
        return {
          point: point,
          mql: matchMedia("(max-width:" + point + "px)")
        };
      });
      /*
       * To keep monitoring resize event after destruction without "completely",
       * use native addEventListener instead of Splide.on.
       */

      this.destroy(true);
      addEventListener('resize', throttledCheck); // Keep initial options to apply them when no breakpoint matches.

      initialOptions = Splide.options;
      check();
    },

    /**
     * Destroy.
     *
     * @param {boolean} completely - Whether to destroy Splide completely.
     */
    destroy: function destroy(completely) {
      if (completely) {
        removeEventListener('resize', throttledCheck);
      }
    }
  };
  /**
   * Check the breakpoint.
   */

  function check() {
    var point = getPoint();

    if (point !== prevPoint) {
      prevPoint = point;
      var State = Splide.State;
      var options = breakpoints[point] || initialOptions;
      var destroy = options.destroy;

      if (destroy) {
        Splide.options = initialOptions;
        Splide.destroy(destroy === 'completely');
      } else {
        if (State.is(DESTROYED)) {
          Splide.mount();
        }

        Splide.options = options;
      }
    }
  }
  /**
   * Return the breakpoint matching current window width.
   * Note that Array.prototype.find is not supported by IE.
   *
   * @return {number|string} - A breakpoint as number or string. -1 if no point matches.
   */


  function getPoint() {
    var item = map.filter(function (item) {
      return item.mql.matches;
    })[0];
    return item ? item.point : -1;
  }

  return Breakpoints;
});
;// CONCATENATED MODULE: ./src/js/components/index.js
/**
 * Export components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

















var COMPLETE = {
  Options: options,
  Breakpoints: breakpoints,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Autoplay: autoplay,
  Cover: cover,
  Arrows: arrows,
  Pagination: pagination,
  LazyLoad: lazyload,
  Keyboard: keyboard,
  Sync: sync,
  A11y: a11y
};
var LIGHT = {
  Options: options,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Arrows: arrows,
  Pagination: pagination,
  A11y: a11y
};
;// CONCATENATED MODULE: ./build/module/module.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Export Splide class for import.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Export Splide class for import from other projects.
 */

var module_Splide = /*#__PURE__*/function (_Core) {
  _inheritsLoose(Splide, _Core);

  function Splide(root, options) {
    return _Core.call(this, root, options, COMPLETE) || this;
  }

  return Splide;
}(Splide);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(311);
/******/ })()
;
});

/***/ }),

/***/ "./templates/.default/components/bitrix/catalog.top/products-carousel/src/js/app.js":
/*!******************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/catalog.top/products-carousel/src/js/app.js ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-carousel */ "./templates/.default/components/bitrix/catalog.top/products-carousel/src/js/product-carousel.js");

document.addEventListener("DOMContentLoaded", function () {
  new _product_carousel__WEBPACK_IMPORTED_MODULE_0__["default"](".js-products-carousel").init();
});

/***/ }),

/***/ "./templates/.default/components/bitrix/catalog.top/products-carousel/src/js/product-carousel.js":
/*!*******************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/catalog.top/products-carousel/src/js/product-carousel.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsCarousel; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray/index.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass/index.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _profnastil_redesign_src_js_utils_breakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../profnastil-redesign/src/js/utils/breakpoints */ "./templates/profnastil-redesign/src/js/utils/breakpoints.js");





var _breakpoints;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var DEFAULT_OPTIONS = {
  breakpoints: (_breakpoints = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_breakpoints, _profnastil_redesign_src_js_utils_breakpoints__WEBPACK_IMPORTED_MODULE_5__["BREAKPOINTS"].xl, {
    perPage: 4
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_breakpoints, _profnastil_redesign_src_js_utils_breakpoints__WEBPACK_IMPORTED_MODULE_5__["BREAKPOINTS"].lg, {
    perPage: 3
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_breakpoints, _profnastil_redesign_src_js_utils_breakpoints__WEBPACK_IMPORTED_MODULE_5__["BREAKPOINTS"].md, {
    perPage: 2
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_breakpoints, _profnastil_redesign_src_js_utils_breakpoints__WEBPACK_IMPORTED_MODULE_5__["BREAKPOINTS"].sm, {
    perPage: 1
  }), _breakpoints)
};

var ProductsCarousel = /*#__PURE__*/function () {
  function ProductsCarousel(sliderSelector) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProductsCarousel);

    this._containerElements = document.querySelectorAll(sliderSelector);
    this._instances = [];
    this._slideLeft = this._slideLeft.bind(this);
    this._slideRight = this._slideRight.bind(this);
    this._onTabClick = this._onTabClick.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProductsCarousel, [{
    key: "_slideLeft",
    value: function _slideLeft(instance) {
      if (instance.length > instance.options.perPage) {
        instance.go("<");
      }
    }
  }, {
    key: "_slideRight",
    value: function _slideRight(instance) {
      if (instance.length > instance.options.perPage) {
        instance.go(">");
      }
    }
  }, {
    key: "_setHandlers",
    value: function _setHandlers(containerElement, instance) {
      var _this = this;

      containerElement.parentElement.querySelector(".js-slide-left").addEventListener("click", function () {
        return _this._slideLeft(instance);
      });
      containerElement.parentElement.querySelector(".js-slide-right").addEventListener("click", function () {
        return _this._slideRight(instance);
      });
    }
  }, {
    key: "_filterSlides",
    value: function _filterSlides(filterTarget, instance, containerElement) {
      instance.destroy();
      var filteredSlidesFragment = document.createDocumentFragment();

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(instance.slides).forEach(function (slideElement) {
        if (slideElement.dataset.filter === filterTarget || filterTarget === "all") {
          filteredSlidesFragment.append(slideElement);
        }
      });

      var slidesContainerElement = containerElement.querySelector(".js-products-carousel-slides-list");
      slidesContainerElement.innerHTML = "";
      slidesContainerElement.appendChild(filteredSlidesFragment);
      instance.mount();
    }
  }, {
    key: "_toggleSelectedState",
    value: function _toggleSelectedState(element) {
      element.parentElement.querySelectorAll("[aria-selected=\"true\"]").forEach(function (button) {
        return button.setAttribute("aria-selected", "false");
      });
      element.setAttribute("aria-selected", "true");
    }
  }, {
    key: "_onTabClick",
    value: function _onTabClick(target, instance, containerElement) {
      var filterTarget = target.dataset.filterTarget;

      this._toggleSelectedState(target);

      this._filterSlides(filterTarget, instance, containerElement);
    }
  }, {
    key: "_initFilter",
    value: function _initFilter(containerElement, instance) {
      var _this2 = this;

      var tabElements = containerElement.parentElement.querySelectorAll("[role=\"tab\"]");
      tabElements.forEach(function (tabElement) {
        return tabElement.addEventListener("click", function (_ref) {
          var target = _ref.target;
          return _this2._onTabClick(target, instance, containerElement);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      this._containerElements.forEach(function (containerElement) {
        var slides = containerElement.querySelectorAll(".js-products-carousel-slide");
        var instance = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_4___default.a(containerElement, _objectSpread({
          perPage: containerElement.dataset.perPage,
          gap: "1.5rem",
          arrows: false
        }, DEFAULT_OPTIONS));
        instance.mount();
        instance.slides = slides;

        _this3._instances.push(instance);

        _this3._setHandlers(containerElement, instance);

        _this3._initFilter(containerElement, instance);
      });
    }
  }]);

  return ProductsCarousel;
}();



/***/ }),

/***/ "./templates/profnastil-redesign/src/js/utils/breakpoints.js":
/*!*******************************************************************!*\
  !*** ./templates/profnastil-redesign/src/js/utils/breakpoints.js ***!
  \*******************************************************************/
/*! exports provided: BREAKPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
var BREAKPOINTS = {
  xl: 1400,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzcGxpZGVqcy9zcGxpZGUvZGlzdC9qcy9zcGxpZGUuZXNtLmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9jYXRhbG9nLnRvcC9wcm9kdWN0cy1jYXJvdXNlbC9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9jYXRhbG9nLnRvcC9wcm9kdWN0cy1jYXJvdXNlbC9zcmMvanMvcHJvZHVjdC1jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcHJvZm5hc3RpbC1yZWRlc2lnbi9zcmMvanMvdXRpbHMvYnJlYWtwb2ludHMuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiUHJvZHVjdHNDYXJvdXNlbCIsImluaXQiLCJERUZBVUxUX09QVElPTlMiLCJicmVha3BvaW50cyIsIkJSRUFLUE9JTlRTIiwieGwiLCJwZXJQYWdlIiwibGciLCJtZCIsInNtIiwic2xpZGVyU2VsZWN0b3IiLCJfY29udGFpbmVyRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2luc3RhbmNlcyIsIl9zbGlkZUxlZnQiLCJiaW5kIiwiX3NsaWRlUmlnaHQiLCJfb25UYWJDbGljayIsImluc3RhbmNlIiwibGVuZ3RoIiwib3B0aW9ucyIsImdvIiwiY29udGFpbmVyRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlsdGVyVGFyZ2V0IiwiZGVzdHJveSIsImZpbHRlcmVkU2xpZGVzRnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic2xpZGVzIiwiZm9yRWFjaCIsInNsaWRlRWxlbWVudCIsImRhdGFzZXQiLCJmaWx0ZXIiLCJhcHBlbmQiLCJzbGlkZXNDb250YWluZXJFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJtb3VudCIsImVsZW1lbnQiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJ0YXJnZXQiLCJfdG9nZ2xlU2VsZWN0ZWRTdGF0ZSIsIl9maWx0ZXJTbGlkZXMiLCJ0YWJFbGVtZW50cyIsInRhYkVsZW1lbnQiLCJTcGxpZGUiLCJnYXAiLCJhcnJvd3MiLCJwdXNoIiwiX3NldEhhbmRsZXJzIiwiX2luaXRG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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUJBQXFCO0FBQzdCLFFBQVEscUJBQXFCO0FBQzdCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsQ0FBQztBQUNELDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFF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QUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsWUFBWSxPQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwrQ0FBK0MsMERB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QUFFLEVBQUU7QUFMcUIsQ0FBcEIsQyIsImZpbGUiOiJsb2NhbC90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvY2F0YWxvZy50b3AvcHJvZHVjdHMtY2Fyb3VzZWwvc2NyaXB0LXByb2R1Y3RzLWNhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3BuLXByb2QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L2NhdGFsb2cudG9wL3Byb2R1Y3RzLWNhcm91c2VsL3NyYy9qcy9hcHAuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIi8qIVxuICogU3BsaWRlLmpzXG4gKiBWZXJzaW9uICA6IDIuNC4yMFxuICogTGljZW5zZSAgOiBNSVRcbiAqIENvcHlyaWdodDogMjAyMCBOYW90b3NoaSBGdWppdGFcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3BsaWRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNwbGlkZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gMzExOlxuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG4vLyBFU00gQ09NUEFUIEZMQUdcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gRVhQT1JUU1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbiAgXCJkZWZhdWx0XCI6ICgpID0+IC8qIGJpbmRpbmcgKi8gbW9kdWxlX1NwbGlkZVxufSk7XG5cbi8vIE5BTUVTUEFDRSBPQkpFQ1Q6IC4vc3JjL2pzL2NvbnN0YW50cy9zdGF0ZXMuanNcbnZhciBzdGF0ZXNfbmFtZXNwYWNlT2JqZWN0ID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoc3RhdGVzX25hbWVzcGFjZU9iamVjdCk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoc3RhdGVzX25hbWVzcGFjZU9iamVjdCwge1xuICBcIkNSRUFURURcIjogKCkgPT4gQ1JFQVRFRCxcbiAgXCJERVNUUk9ZRURcIjogKCkgPT4gREVTVFJPWUVELFxuICBcIklETEVcIjogKCkgPT4gSURMRSxcbiAgXCJNT1VOVEVEXCI6ICgpID0+IE1PVU5URUQsXG4gIFwiTU9WSU5HXCI6ICgpID0+IE1PVklOR1xufSk7XG5cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb3JlL2V2ZW50LmpzXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYW4gRXZlbnQgb2JqZWN0IHNpbXBseSBtYW5hZ2luZyBldmVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBmdW5jdGlvbiBmb3IgcHJvdmlkaW5nIGFuIEV2ZW50IG9iamVjdCBzaW1wbHkgbWFuYWdpbmcgZXZlbnRzLlxyXG4gKi9cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgY29yZV9ldmVudCA9IChmdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGFsbCBldmVudCBkYXRhLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqL1xuICB2YXIgZGF0YSA9IFtdO1xuICB2YXIgRXZlbnQgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmUgdGhlIGdpdmVuIGV2ZW50KHMpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIGV2ZW50cyAgLSBBbiBldmVudCBuYW1lLiBVc2Ugc3BhY2UgdG8gc2VwYXJhdGUgbXVsdGlwbGUgZXZlbnRzLlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsc28sIG5hbWVzcGFjZSBpcyBhY2NlcHRlZCBieSBkb3QsIHN1Y2ggYXMgJ3Jlc2l6ZS57bmFtZXNwYWNlfScuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gQSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gIGVsbSAgICAgLSBPcHRpb25hbC4gTmF0aXZlIGV2ZW50IHdpbGwgYmUgbGlzdGVuZWQgdG8gd2hlbiB0aGlzIGFyZyBpcyBwcm92aWRlZC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgIG9wdGlvbnMgLSBPcHRpb25hbC4gT3B0aW9ucyBmb3IgYWRkRXZlbnRMaXN0ZW5lci5cclxuICAgICAqL1xuICAgIG9uOiBmdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIsIGVsbSwgb3B0aW9ucykge1xuICAgICAgaWYgKGVsbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGVsbSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZWxtKSB7XG4gICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICBlbG06IGVsbSxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVW5zdWJzY3JpYmUgdGhlIGdpdmVuIGV2ZW50KHMpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgZXZlbnRzIC0gQSBldmVudCBuYW1lIG9yIG5hbWVzIHNwbGl0IGJ5IHNwYWNlLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbG0gICAgLSBPcHRpb25hbC4gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhpcyBhcmcgaXMgcHJvdmlkZWQuXHJcbiAgICAgKi9cbiAgICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudHMsIGVsbSkge1xuICAgICAgaWYgKGVsbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGVsbSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uZXZlbnQgPT09IGV2ZW50ICYmIGl0ZW0uZWxtID09PSBlbG0pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIEVtaXQgYW4gZXZlbnQuXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvbmx5IGZvciBjdXN0b20gZXZlbnRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgZXZlbnQgLSBBbiBldmVudCBuYW1lLlxyXG4gICAgICogQHBhcmFtIHsqfSAgICAgICBhcmdzICAtIEFueSBudW1iZXIgb2YgYXJndW1lbnRzIHBhc3NlZCB0byBoYW5kbGVycy5cclxuICAgICAqL1xuICAgIGVtaXQ6IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoIWl0ZW0uZWxtICYmIGl0ZW0uZXZlbnQuc3BsaXQoJy4nKVswXSA9PT0gZXZlbnQpIHtcbiAgICAgICAgICBpdGVtLmhhbmRsZXIuYXBwbHkoaXRlbSwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENsZWFyIGV2ZW50IGRhdGEuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZGF0YS5mb3JFYWNoKHVuc3Vic2NyaWJlKTtcbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgZXZlbnQgZGF0YS5cclxuICAgKi9cblxuICBmdW5jdGlvbiB1bnN1YnNjcmliZShpdGVtKSB7XG4gICAgaWYgKGl0ZW0uZWxtKSB7XG4gICAgICBpdGVtLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKGl0ZW0uZXZlbnQsIGl0ZW0uaGFuZGxlciwgaXRlbS5vcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gRXZlbnQ7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb3JlL3N0YXRlLmpzXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIHByb3ZpZGluZyBhIHN1cGVyIHNpbXBsZSBzdGF0ZSBzeXN0ZW0uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBmdW5jdGlvbiBwcm92aWRpbmcgYSBzdXBlciBzaW1wbGUgc3RhdGUgc3lzdGVtLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGluaXRpYWxTdGF0ZSAtIFByb3ZpZGUgdGhlIGluaXRpYWwgc3RhdGUgdmFsdWUuXHJcbiAqL1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBzdGF0ZSA9IChmdW5jdGlvbiAoaW5pdGlhbFN0YXRlKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBjdXJyZW50IHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ3xudW1iZXJ9XHJcbiAgICovXG4gIHZhciBjdXJyID0gaW5pdGlhbFN0YXRlO1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIHN0YXRlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gc3RhdGUgLSBBIG5ldyBzdGF0ZS5cclxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICBjdXJyID0gc3RhdGU7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVmVyaWZ5IGlmIHRoZSBjdXJyZW50IHN0YXRlIGlzIGdpdmVuIG9uZSBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBzdGF0ZSAtIEEgc3RhdGUgbmFtZSB0byBiZSB2ZXJpZmllZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdGhlIGdpdmVuIG9uZS5cclxuICAgICAqL1xuICAgIGlzOiBmdW5jdGlvbiBpcyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlID09PSBjdXJyO1xuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL29iamVjdC5qc1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuLyoqXHJcbiAqIFNvbWUgdXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB3aXRoIE9iamVjdCwgc3VwcG9ydGluZyBJRS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xudmFyIGtleXMgPSBPYmplY3Qua2V5cztcbi8qKlxyXG4gKiBJdGVyYXRlIGFuIG9iamVjdCBsaWtlIEFycmF5LmZvckVhY2guXHJcbiAqIElFIGRvZXNuJ3Qgc3VwcG9ydCBmb3JFYWNoIG9mIEhUTUxDb2xsZWN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gICAgb2JqICAgICAgIC0gQW4gb2JqZWN0LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSAgY2FsbGJhY2sgIC0gQSBmdW5jdGlvbiBoYW5kbGluZyBlYWNoIHZhbHVlLiBBcmd1bWVudHMgYXJlIHZhbHVlLCBwcm9wZXJ0eSBhbmQgaW5kZXguXHJcbiAqL1xuXG5mdW5jdGlvbiBlYWNoKG9iaiwgY2FsbGJhY2spIHtcbiAga2V5cyhvYmopLnNvbWUoZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sob2JqW2tleV0sIGtleSwgaW5kZXgpO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBSZXR1cm4gdmFsdWVzIG9mIHRoZSBnaXZlbiBvYmplY3QgYXMgYW4gYXJyYXkuXHJcbiAqIElFIGRvZXNuJ3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gQW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtBcnJheX0gLSBBbiBhcnJheSBjb250YWluaW5nIGFsbCB2YWx1ZXMgb2YgdGhlIGdpdmVuIG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfSk7XG59XG4vKipcclxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHN1YmplY3QgaXMgb2JqZWN0IG9yIG5vdC5cclxuICpcclxuICogQHBhcmFtIHsqfSBzdWJqZWN0IC0gQSBzdWJqZWN0IHRvIGJlIHZlcmlmaWVkLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgb2JqZWN0LCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChzdWJqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCc7XG59XG4vKipcclxuICogTWVyZ2UgdHdvIG9iamVjdHMgZGVlcGx5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdG8gICAtIEFuIG9iamVjdCB3aGVyZSBcImZyb21cIiBpcyBtZXJnZWQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gQW4gb2JqZWN0IG1lcmdlZCB0byBcInRvXCIuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBBIG1lcmdlZCBvYmplY3QuXHJcbiAqL1xuXG5mdW5jdGlvbiBtZXJnZShfcmVmLCBmcm9tKSB7XG4gIHZhciB0byA9IF9leHRlbmRzKHt9LCBfcmVmKTtcblxuICBlYWNoKGZyb20sIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKCFpc09iamVjdCh0b1trZXldKSkge1xuICAgICAgICB0b1trZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIHRvW2tleV0gPSBtZXJnZSh0b1trZXldLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG87XG59XG4vKipcclxuICogQXNzaWduIGFsbCBwcm9wZXJ0aWVzIFwiZnJvbVwiIHRvIFwidG9cIiBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0byAgIC0gQW4gb2JqZWN0IHdoZXJlIHByb3BlcnRpZXMgYXJlIGFzc2lnbmVkLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZnJvbSAtIEFuIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBhc3NpZ25lZCB0byBcInRvXCIuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBhc3NpZ25lZCBvYmplY3QuXHJcbiAqL1xuXG5mdW5jdGlvbiBvYmplY3RfYXNzaWduKHRvLCBmcm9tKSB7XG4gIGtleXMoZnJvbSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCF0b1trZXldKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihmcm9tLCBrZXkpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG87XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvdXRpbHMuanNcbi8qKlxyXG4gKiBBIHBhY2thZ2Ugb2Ygc29tZSBtaXNjZWxsYW5lb3VzIHV0aWxpdHkgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byBhcnJheS5cclxuICpcclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIEFueSB2YWx1ZS5cclxuICpcclxuICogQHJldHVybiB7KltdfSAtIEFycmF5IGNvbnRhaW5pbmcgdGhlIGdpdmVuIHZhbHVlLlxyXG4gKi9cblxuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG4vKipcclxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGJldHdlZW4gbWluIGFuZCBtYXguXHJcbiAqIE1pbiB3aWxsIGJlIHJldHVybmVkIHdoZW4gdGhlIHZhbHVlIGlzIGxlc3MgdGhhbiBtaW4gb3IgbWF4IHdpbGwgZG8gd2hlbiBncmVhdGVyIHRoYW4gbWF4LlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBBIG51bWJlciB0byBiZSBjaGVja2VkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbTEgICAgLSBNaW5pbXVtIG9yIG1heGltdW0gbnVtYmVyLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbTIgICAgLSBNYXhpbXVtIG9yIG1pbmltdW0gbnVtYmVyLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSB2YWx1ZSBpdHNlbGYsIG1pbiBvciBtYXguXHJcbiAqL1xuXG5mdW5jdGlvbiBiZXR3ZWVuKHZhbHVlLCBtMSwgbTIpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtMSA+IG0yID8gbTIgOiBtMSksIG0xID4gbTIgPyBtMSA6IG0yKTtcbn1cbi8qKlxyXG4gKiBUaGUgc3ByaW50ZiBtZXRob2Qgd2l0aCBtaW5pbXVtIGZ1bmN0aW9uYWxpdHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICBmb3JtYXQgICAgICAgLSBUaGUgc3RyaW5nIGZvcm1hdC5cclxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHJlcGxhY2VtZW50cyAtIFJlcGxhY2VtZW50cyBhY2NlcHRpbmcgbXVsdGlwbGUgYXJndW1lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnZlcnRlZCBzdHJpbmcuXHJcbiAqL1xuXG5mdW5jdGlvbiBzcHJpbnRmKGZvcm1hdCwgcmVwbGFjZW1lbnRzKSB7XG4gIHZhciBpID0gMDtcbiAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkocmVwbGFjZW1lbnRzKVtpKytdO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBBcHBlbmQgcHggdW5pdCB0byB0aGUgZ2l2ZW4gc3ViamVjdCBpZiBuZWNlc3NhcnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWUgLSBBIHZhbHVlIHRoYXQgbWF5IG5vdCBpbmNsdWRlIGFuIHVuaXQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBJZiB0aGUgdmFsdWUgaXMgc3RyaW5nLCByZXR1cm4gaXRzZWxmLlxyXG4gKiAgICAgICAgICAgICAgICAgICAgSWYgbnVtYmVyLCBkbyB2YWx1ZSArIFwicHhcIi4gQW4gZW1wdHkgc3RyaW5nLCBvdGhlcndpc2UuXHJcbiAqL1xuXG5mdW5jdGlvbiB1bml0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJztcbn1cbi8qKlxyXG4gKiBQYWQgc3RhcnQgd2l0aCAwLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gQSBudW1iZXIgdG8gYmUgZmlsbGVkIHdpdGggMC5cclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfG51bWJlcn0gLSBQYWRkZWQgbnVtYmVyLlxyXG4gKi9cblxuZnVuY3Rpb24gcGFkKG51bWJlcikge1xuICByZXR1cm4gbnVtYmVyIDwgMTAgPyAnMCcgKyBudW1iZXIgOiBudW1iZXI7XG59XG4vKipcclxuICogQ29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gcGl4ZWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gICAgICAgcm9vdCAgLSBSb290IGVsZW1lbnQgd2hlcmUgYSBkdW1teSBkaXYgaXMgYXBwZW5kZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gdmFsdWUgLSBDU1MgdmFsdWUgdG8gYmUgY29udmVydGVkLCBzdWNoIGFzIDEwcmVtLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IC0gUGl4ZWwuXHJcbiAqL1xuXG5mdW5jdGlvbiB0b1BpeGVsKHJvb3QsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGRpdiA9IGNyZWF0ZSgnZGl2Jywge30pO1xuICAgIGFwcGx5U3R5bGUoZGl2LCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiB2YWx1ZVxuICAgIH0pO1xuICAgIGFwcGVuZChyb290LCBkaXYpO1xuICAgIHZhbHVlID0gZGl2LmNsaWVudFdpZHRoO1xuICAgIGRvbV9yZW1vdmUoZGl2KTtcbiAgfVxuXG4gIHJldHVybiArdmFsdWUgfHwgMDtcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy91dGlscy9kb20uanNcbi8qKlxyXG4gKiBTb21lIHV0aWxpdHkgZnVuY3Rpb25zIHJlbGF0ZWQgd2l0aCBET00uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogRmluZCB0aGUgZmlyc3QgZWxlbWVudCBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VsZWN0b3IuXHJcbiAqIEJlIGF3YXJlIHRoYXQgYWxsIHNlbGVjdG9ycyBhZnRlciBhIHNwYWNlIGFyZSBpZ25vcmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8Tm9kZX0gIGVsbSAgICAgICAtIEFuIGFuY2VzdG9yIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgc2VsZWN0b3IgIC0gRE9NU3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9IC0gQSBmb3VuZCBlbGVtZW50IG9yIG51bGwuXHJcbiAqL1xuXG5mdW5jdGlvbiBmaW5kKGVsbSwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGVsbSA/IGVsbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yLnNwbGl0KCcgJylbMF0pIDogbnVsbDtcbn1cbi8qKlxyXG4gKiBGaW5kIGEgZmlyc3QgY2hpbGQgaGF2aW5nIHRoZSBnaXZlbiB0YWcgb3IgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnQgICAgICAgICAtIEEgcGFyZW50IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgdGFnT3JDbGFzc05hbWUgLSBBIHRhZyBvciBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtFbGVtZW50fHVuZGVmaW5lZH0gLSBBIGZvdW5kIGVsZW1lbnQgb24gc3VjY2VzcyBvciB1bmRlZmluZWQgb24gZmFpbHVyZS5cclxuICovXG5cbmZ1bmN0aW9uIGNoaWxkKHBhcmVudCwgdGFnT3JDbGFzc05hbWUpIHtcbiAgcmV0dXJuIGNoaWxkcmVuKHBhcmVudCwgdGFnT3JDbGFzc05hbWUpWzBdO1xufVxuLyoqXHJcbiAqIFJldHVybiBjaGlsZSBlbGVtZW50cyB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIHRhZyBvciBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCAgICAgICAgIC0gQSBwYXJlbnQgZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICB0YWdPckNsYXNzTmFtZSAtIEEgdGFnIG9yIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0VsZW1lbnRbXX0gLSBGb3VuZCBlbGVtZW50cy5cclxuICovXG5cbmZ1bmN0aW9uIGNoaWxkcmVuKHBhcmVudCwgdGFnT3JDbGFzc05hbWUpIHtcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiB2YWx1ZXMocGFyZW50LmNoaWxkcmVuKS5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gaGFzQ2xhc3MoY2hpbGQsIHRhZ09yQ2xhc3NOYW1lLnNwbGl0KCcgJylbMF0pIHx8IGNoaWxkLnRhZ05hbWUgPT09IHRhZ09yQ2xhc3NOYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFtdO1xufVxuLyoqXHJcbiAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggc29tZSBvcHRpb25hbCBhdHRyaWJ1dGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnICAgLSBBIHRhZyBuYW1lLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgLSBBbiBvYmplY3QgYW55IGF0dHJpYnV0ZSBwYWlycyBvZiBuYW1lIGFuZCB2YWx1ZS5cclxuICpcclxuICogQHJldHVybiB7RWxlbWVudH0gLSBBIGNyZWF0ZWQgZWxlbWVudC5cclxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZSh0YWcsIGF0dHJzKSB7XG4gIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVhY2goYXR0cnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgcmV0dXJuIHNldEF0dHJpYnV0ZShlbG0sIGtleSwgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGVsbTtcbn1cbi8qKlxyXG4gKiBDb252ZXJ0IEhUTUwgc3RyaW5nIHRvIERPTSBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbCAtIEhUTUwgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtOb2RlfSAtIEEgY3JlYXRlZCBub2RlLlxyXG4gKi9cblxuZnVuY3Rpb24gZG9taWZ5KGh0bWwpIHtcbiAgdmFyIGRpdiA9IGNyZWF0ZSgnZGl2Jywge30pO1xuICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xufVxuLyoqXHJcbiAqIFJlbW92ZSBhIGdpdmVuIGVsZW1lbnQgZnJvbSBhIERPTSB0cmVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8RWxlbWVudFtdfSBlbG1zIC0gRWxlbWVudChzKSB0byBiZSByZW1vdmVkLlxyXG4gKi9cblxuZnVuY3Rpb24gZG9tX3JlbW92ZShlbG1zKSB7XG4gIHRvQXJyYXkoZWxtcykuZm9yRWFjaChmdW5jdGlvbiAoZWxtKSB7XG4gICAgaWYgKGVsbSkge1xuICAgICAgdmFyIHBhcmVudCA9IGVsbS5wYXJlbnRFbGVtZW50O1xuICAgICAgcGFyZW50ICYmIHBhcmVudC5yZW1vdmVDaGlsZChlbG0pO1xuICAgIH1cbiAgfSk7XG59XG4vKipcclxuICogQXBwZW5kIGEgY2hpbGQgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCAtIEEgcGFyZW50IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGQgIC0gQW4gZWxlbWVudCB0byBiZSBhcHBlbmRlZC5cclxuICovXG5cbmZ1bmN0aW9uIGFwcGVuZChwYXJlbnQsIGNoaWxkKSB7XG4gIGlmIChwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG59XG4vKipcclxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYmVmb3JlIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fE5vZGV9IHJlZiAtIEEgcmVmZXJlbmNlIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gICAgICBlbG0gLSBBbiBlbGVtZW50IHRvIGJlIGluc2VydGVkLlxyXG4gKi9cblxuZnVuY3Rpb24gYmVmb3JlKGVsbSwgcmVmKSB7XG4gIGlmIChlbG0gJiYgcmVmKSB7XG4gICAgdmFyIHBhcmVudCA9IHJlZi5wYXJlbnRFbGVtZW50O1xuICAgIHBhcmVudCAmJiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsbSwgcmVmKTtcbiAgfVxufVxuLyoqXHJcbiAqIEFwcGx5IHN0eWxlcyB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbG0gICAgIC0gQW4gZWxlbWVudCB3aGVyZSBzdHlsZXMgYXJlIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgc3R5bGVzICAtIE9iamVjdCBjb250YWluaW5nIHN0eWxlcy5cclxuICovXG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGUoZWxtLCBzdHlsZXMpIHtcbiAgaWYgKGVsbSkge1xuICAgIGVhY2goc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuLyoqXHJcbiAqIEFkZCBvciByZW1vdmUgY2xhc3NlcyB0by9mcm9tIHRoZSBlbGVtZW50LlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGZvciBpbnRlcm5hbCB1c2FnZS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICAgIGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIGNsYXNzZXMgYXJlIGFkZGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gY2xhc3NlcyAtIENsYXNzIG5hbWVzIGJlaW5nIGFkZGVkLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICAgICAgICAgcmVtb3ZlICAtIFdoZXRoZXIgdG8gcmVtb3ZlIG9yIGFkZCBjbGFzc2VzLlxyXG4gKi9cblxuZnVuY3Rpb24gYWRkT3JSZW1vdmVDbGFzc2VzKGVsbSwgY2xhc3NlcywgcmVtb3ZlKSB7XG4gIGlmIChlbG0pIHtcbiAgICB0b0FycmF5KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGVsbS5jbGFzc0xpc3RbcmVtb3ZlID8gJ3JlbW92ZScgOiAnYWRkJ10obmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbi8qKlxyXG4gKiBBZGQgY2xhc3NlcyB0byB0aGUgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICAgICBlbG0gICAgIC0gQW4gZWxlbWVudCB3aGVyZSBjbGFzc2VzIGFyZSBhZGRlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119ICBjbGFzc2VzIC0gQ2xhc3MgbmFtZXMgYmVpbmcgYWRkZWQuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsbSwgY2xhc3Nlcykge1xuICBhZGRPclJlbW92ZUNsYXNzZXMoZWxtLCBjbGFzc2VzLCBmYWxzZSk7XG59XG4vKipcclxuICogUmVtb3ZlIGEgY2xhc3MgZnJvbSB0aGUgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICAgIGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIGNsYXNzZXMgYXJlIHJlbW92ZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBjbGFzc2VzIC0gQSBjbGFzcyBuYW1lIGJlaW5nIHJlbW92ZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbG0sIGNsYXNzZXMpIHtcbiAgYWRkT3JSZW1vdmVDbGFzc2VzKGVsbSwgY2xhc3NlcywgdHJ1ZSk7XG59XG4vKipcclxuICogVmVyaWZ5IGlmIHRoZSBwcm92aWRlZCBlbGVtZW50IGhhcyB0aGUgY2xhc3Mgb3Igbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAgICAtIEFuIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgY2xhc3NOYW1lIC0gQSBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIGVsZW1lbnQgaGFzIHRoZSBjbGFzcyBvciBmYWxzZSBpZiBub3QuXHJcbiAqL1xuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbG0sIGNsYXNzTmFtZSkge1xuICByZXR1cm4gISFlbG0gJiYgZWxtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufVxuLyoqXHJcbiAqIFNldCBhdHRyaWJ1dGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gICAgICAgICAgICAgICAgIGVsbSAgIC0gQW4gZWxlbWVudCB3aGVyZSBhbiBhdHRyaWJ1dGUgaXMgYXNzaWduZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgIG5hbWUgIC0gQXR0cmlidXRlIG5hbWUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxib29sZWFufSAgIHZhbHVlIC0gQXR0cmlidXRlIHZhbHVlLlxyXG4gKi9cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKGVsbSwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKGVsbSkge1xuICAgIGVsbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG4vKipcclxuICogR2V0IGF0dHJpYnV0ZSBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgLSBBbiBlbGVtZW50IHdoZXJlIGFuIGF0dHJpYnV0ZSBpcyBhc3NpZ25lZC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICBuYW1lIC0gQXR0cmlidXRlIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgdmFsdWUgb2YgdGhlIGdpdmVuIGF0dHJpYnV0ZSBpZiBhdmFpbGFibGUuIEFuIGVtcHR5IHN0cmluZyBpZiBub3QuXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWxtLCBuYW1lKSB7XG4gIHJldHVybiBlbG0gPyBlbG0uZ2V0QXR0cmlidXRlKG5hbWUpIDogJyc7XG59XG4vKipcclxuICogUmVtb3ZlIGF0dHJpYnV0ZSBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8RWxlbWVudFtdfSBlbG1zICAtIEFuIGVsZW1lbnQgd2hlcmUgYW4gYXR0cmlidXRlIGlzIHJlbW92ZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSAgICAgIG5hbWVzIC0gQXR0cmlidXRlIG5hbWUuXHJcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWxtcywgbmFtZXMpIHtcbiAgdG9BcnJheShuYW1lcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHRvQXJyYXkoZWxtcykuZm9yRWFjaChmdW5jdGlvbiAoZWxtKSB7XG4gICAgICByZXR1cm4gZWxtICYmIGVsbS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuLyoqXHJcbiAqIFJldHVybiB0aGUgUmVjdCBvYmplY3Qgb2YgdGhlIHByb3ZpZGVkIG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbG0gLSBBbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtDbGllbnRSZWN0fERPTVJlY3R9IC0gQSByZWN0IG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIGdldFJlY3QoZWxtKSB7XG4gIHJldHVybiBlbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG59XG4vKipcclxuICogVHJpZ2dlciB0aGUgZ2l2ZW4gY2FsbGJhY2sgYWZ0ZXIgYWxsIGltYWdlcyBjb250YWluZWQgYnkgdGhlIGVsZW1lbnQgYXJlIGxvYWRlZC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgZWxtICAgICAgLSBFbGVtZW50IHRoYXQgbWF5IGNvbnRhaW4gaW1hZ2VzLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHJpZ2h0IGFmdGVyIGFsbCBpbWFnZXMgYXJlIGxvYWRlZC5cclxuICovXG5cbmZ1bmN0aW9uIGxvYWRlZChlbG0sIGNhbGxiYWNrKSB7XG4gIHZhciBpbWFnZXMgPSBlbG0ucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gIHZhciBsZW5ndGggPSBpbWFnZXMubGVuZ3RoO1xuXG4gIGlmIChsZW5ndGgpIHtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIGVhY2goaW1hZ2VzLCBmdW5jdGlvbiAoaW1nKSB7XG4gICAgICBpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgrK2NvdW50ID09PSBsZW5ndGgpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFRyaWdnZXIgdGhlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGlzIG5vIGltYWdlLlxuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvdHlwZXMuanNcbi8qKlxyXG4gKiBFeHBvcnQgc2xpZGVyIHR5cGVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBOb3JtYWwgc2xpZGVyLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBTTElERSA9ICdzbGlkZSc7XG4vKipcclxuICogTG9vcCBhZnRlciB0aGUgbGFzdCBzbGlkZSBhbmQgYmVmb3JlIHRoZSBmaXJzdCBvbmUuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgTE9PUCA9ICdsb29wJztcbi8qKlxyXG4gKiBUaGUgdHJhY2sgZG9lc24ndCBtb3ZlLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEZBREUgPSAnZmFkZSc7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdHJhbnNpdGlvbnMvc2xpZGUvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBnZW5lcmFsIHNsaWRlIGVmZmVjdCB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGdlbmVyYWwgc2xpZGUgZWZmZWN0IHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBzbGlkZSA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIGxpc3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuICB2YXIgbGlzdDtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgb25FbmQgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAgICovXG5cbiAgdmFyIGVuZENhbGxiYWNrO1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgbGlzdCA9IENvbXBvbmVudHMuRWxlbWVudHMubGlzdDtcbiAgICAgIFNwbGlkZS5vbigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gbGlzdCAmJiBlbmRDYWxsYmFjaykge1xuICAgICAgICAgIGVuZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGxpc3QpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRyYW5zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgZGVzdEluZGV4IC0gRGVzdGluYXRpb24gc2xpZGUgaW5kZXggdGhhdCBtaWdodCBiZSBjbG9uZSdzLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgbmV3SW5kZXggIC0gTmV3IGluZGV4LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgcHJldkluZGV4IC0gUHJldmlvdXMgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICBjb29yZCAgICAgLSBEZXN0aW5hdGlvbiBjb29yZGluYXRlcy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgICAgICAtIENhbGxiYWNrIGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCB3aGVuIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxyXG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgY29vcmQsIGRvbmUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB2YXIgZWRnZUluZGV4ID0gQ29tcG9uZW50cy5Db250cm9sbGVyLmVkZ2VJbmRleDtcbiAgICAgIHZhciBzcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gICAgICBlbmRDYWxsYmFjayA9IGRvbmU7XG5cbiAgICAgIGlmIChTcGxpZGUuaXMoU0xJREUpKSB7XG4gICAgICAgIGlmIChwcmV2SW5kZXggPT09IDAgJiYgbmV3SW5kZXggPj0gZWRnZUluZGV4IHx8IHByZXZJbmRleCA+PSBlZGdlSW5kZXggJiYgbmV3SW5kZXggPT09IDApIHtcbiAgICAgICAgICBzcGVlZCA9IG9wdGlvbnMucmV3aW5kU3BlZWQgfHwgc3BlZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXBwbHlTdHlsZShsaXN0LCB7XG4gICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIFwiICsgc3BlZWQgKyBcIm1zIFwiICsgb3B0aW9ucy5lYXNpbmcsXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIgKyBjb29yZC54ICsgXCJweCxcIiArIGNvb3JkLnkgKyBcInB4KVwiXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy90cmFuc2l0aW9ucy9mYWRlL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZmFkZSB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGZhZGUgdHJhbnNpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGZhZGUgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICB2YXIgRmFkZSA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqIEFwcGx5IHRyYW5zaXRpb24gc3R5bGUgdG8gdGhlIGZpcnN0IHNsaWRlLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgYXBwbHkoU3BsaWRlLmluZGV4KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0cmFuc2l0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgICBkZXN0SW5kZXggLSBEZXN0aW5hdGlvbiBzbGlkZSBpbmRleCB0aGF0IG1pZ2h0IGJlIGNsb25lJ3MuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICAgbmV3SW5kZXggIC0gTmV3IGluZGV4LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgIHByZXZJbmRleCAtIFByZXZpb3VzIGluZGV4LlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgIGNvb3JkICAgICAtIERlc3RpbmF0aW9uIGNvb3JkaW5hdGVzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gIGRvbmUgICAgICAtIENhbGxiYWNrIGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCB3aGVuIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxyXG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgY29vcmQsIGRvbmUpIHtcbiAgICAgIHZhciB0cmFjayA9IENvbXBvbmVudHMuRWxlbWVudHMudHJhY2s7XG4gICAgICBhcHBseVN0eWxlKHRyYWNrLCB7XG4gICAgICAgIGhlaWdodDogdW5pdCh0cmFjay5jbGllbnRIZWlnaHQpXG4gICAgICB9KTtcbiAgICAgIGFwcGx5KG5ld0luZGV4KTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIGFwcGx5U3R5bGUodHJhY2ssIHtcbiAgICAgICAgICBoZWlnaHQ6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBBcHBseSB0cmFuc2l0aW9uIHN0eWxlIHRvIHRoZSBzbGlkZSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGluZGV4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQSBzbGlkZSBpbmRleC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBhcHBseShpbmRleCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgYXBwbHlTdHlsZShDb21wb25lbnRzLkVsZW1lbnRzLnNsaWRlc1tpbmRleF0sIHtcbiAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSBcIiArIG9wdGlvbnMuc3BlZWQgKyBcIm1zIFwiICsgb3B0aW9ucy5lYXNpbmdcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBGYWRlO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdHJhbnNpdGlvbnMvaW5kZXguanNcbi8qKlxyXG4gKiBFeHBvcnQgdHJhbnNpdGlvbiBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvcmUvY29tcG9zZXIuanNcbi8qKlxyXG4gKiBQcm92aWRlIGEgZnVuY3Rpb24gZm9yIGNvbXBvc2luZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogQ29tcG9zZSBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gICBTcGxpZGUgICAgIC0gU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gICBDb21wb25lbnRzIC0gQWRkaXRpb25hbCBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBUcmFuc2l0aW9uIC0gQ2hhbmdlIGNvbXBvbmVudCBmb3IgdHJhbnNpdGlvbi5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBjb21wb25lbnRzLlxyXG4gKi9cblxuZnVuY3Rpb24gY29tcG9zZShTcGxpZGUsIENvbXBvbmVudHMsIFRyYW5zaXRpb24pIHtcbiAgdmFyIGNvbXBvbmVudHMgPSB7fTtcbiAgZWFjaChDb21wb25lbnRzLCBmdW5jdGlvbiAoQ29tcG9uZW50LCBuYW1lKSB7XG4gICAgY29tcG9uZW50c1tuYW1lXSA9IENvbXBvbmVudChTcGxpZGUsIGNvbXBvbmVudHMsIG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gIH0pO1xuXG4gIGlmICghVHJhbnNpdGlvbikge1xuICAgIFRyYW5zaXRpb24gPSBTcGxpZGUuaXMoRkFERSkgPyBmYWRlIDogc2xpZGU7XG4gIH1cblxuICBjb21wb25lbnRzLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uKFNwbGlkZSwgY29tcG9uZW50cyk7XG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL2Vycm9yLmpzXG4vKipcclxuICogVXRpbGl0eSBmdW5jdGlvbnMgZm9yIG91dHB1dHRpbmcgbG9ncy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogUHJlZml4IG9mIGFuIGVycm9yIG1hc3NhZ2UuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIE1FU1NBR0VfUFJFRklYID0gJ1tTUExJREVdJztcbi8qKlxyXG4gKiBEaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2Ugb24gdGhlIGJyb3dzZXIgY29uc29sZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBbiBlcnJvciBtZXNzYWdlLlxyXG4gKi9cblxuZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICBjb25zb2xlLmVycm9yKE1FU1NBR0VfUFJFRklYICsgXCIgXCIgKyBtZXNzYWdlKTtcbn1cbi8qKlxyXG4gKiBDaGVjayBleGlzdGVuY2Ugb2YgdGhlIGdpdmVuIG9iamVjdCBhbmQgdGhyb3cgYW4gZXJyb3IgaWYgaXQgZG9lc24ndC5cclxuICpcclxuICogQHRocm93cyB7RXJyb3J9XHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gICAgICBzdWJqZWN0IC0gQSBzdWJqZWN0IHRvIGJlIGNvbmZpcm1lZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBbiBlcnJvciBtZXNzYWdlLlxyXG4gKi9cblxuZnVuY3Rpb24gZXhpc3Qoc3ViamVjdCwgbWVzc2FnZSkge1xuICBpZiAoIXN1YmplY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvY2xhc3Nlcy5qc1xuLyoqXHJcbiAqIEV4cG9ydCBjbGFzcyBuYW1lcy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogQSByb290IGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIFJPT1QgPSAnc3BsaWRlJztcbi8qKlxyXG4gKiBUaGUgZGVmaW5pdGlvbiB0YWJsZSBvZiBhbGwgY2xhc3NlcyBmb3IgZWxlbWVudHMuXHJcbiAqIFRoZXkgbWlnaHQgYmUgbW9kaWZpZWQgYnkgb3B0aW9ucy5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXG5cbnZhciBFTEVNRU5UX0NMQVNTRVMgPSB7XG4gIHJvb3Q6IFJPT1QsXG4gIHNsaWRlcjogUk9PVCArIFwiX19zbGlkZXJcIixcbiAgdHJhY2s6IFJPT1QgKyBcIl9fdHJhY2tcIixcbiAgbGlzdDogUk9PVCArIFwiX19saXN0XCIsXG4gIHNsaWRlOiBST09UICsgXCJfX3NsaWRlXCIsXG4gIGNvbnRhaW5lcjogUk9PVCArIFwiX19zbGlkZV9fY29udGFpbmVyXCIsXG4gIGFycm93czogUk9PVCArIFwiX19hcnJvd3NcIixcbiAgYXJyb3c6IFJPT1QgKyBcIl9fYXJyb3dcIixcbiAgcHJldjogUk9PVCArIFwiX19hcnJvdy0tcHJldlwiLFxuICBuZXh0OiBST09UICsgXCJfX2Fycm93LS1uZXh0XCIsXG4gIHBhZ2luYXRpb246IFJPT1QgKyBcIl9fcGFnaW5hdGlvblwiLFxuICBwYWdlOiBST09UICsgXCJfX3BhZ2luYXRpb25fX3BhZ2VcIixcbiAgY2xvbmU6IFJPT1QgKyBcIl9fc2xpZGUtLWNsb25lXCIsXG4gIHByb2dyZXNzOiBST09UICsgXCJfX3Byb2dyZXNzXCIsXG4gIGJhcjogUk9PVCArIFwiX19wcm9ncmVzc19fYmFyXCIsXG4gIGF1dG9wbGF5OiBST09UICsgXCJfX2F1dG9wbGF5XCIsXG4gIHBsYXk6IFJPT1QgKyBcIl9fcGxheVwiLFxuICBwYXVzZTogUk9PVCArIFwiX19wYXVzZVwiLFxuICBzcGlubmVyOiBST09UICsgXCJfX3NwaW5uZXJcIixcbiAgc3I6IFJPT1QgKyBcIl9fc3JcIlxufTtcbi8qKlxyXG4gKiBEZWZpbml0aW9ucyBvZiBzdGF0dXMgY2xhc3Nlcy5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXG5cbnZhciBTVEFUVVNfQ0xBU1NFUyA9IHtcbiAgYWN0aXZlOiAnaXMtYWN0aXZlJyxcbiAgdmlzaWJsZTogJ2lzLXZpc2libGUnLFxuICBsb2FkaW5nOiAnaXMtbG9hZGluZydcbn07XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL2kxOG4uanNcbi8qKlxyXG4gKiBFeHBvcnQgaTE4biB0ZXh0cyBhcyBvYmplY3QuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFRleHRzIGZvciBpMThuLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cbnZhciBJMThOID0ge1xuICBwcmV2OiAnUHJldmlvdXMgc2xpZGUnLFxuICBuZXh0OiAnTmV4dCBzbGlkZScsXG4gIGZpcnN0OiAnR28gdG8gZmlyc3Qgc2xpZGUnLFxuICBsYXN0OiAnR28gdG8gbGFzdCBzbGlkZScsXG4gIHNsaWRlWDogJ0dvIHRvIHNsaWRlICVzJyxcbiAgcGFnZVg6ICdHbyB0byBwYWdlICVzJyxcbiAgcGxheTogJ1N0YXJ0IGF1dG9wbGF5JyxcbiAgcGF1c2U6ICdQYXVzZSBhdXRvcGxheSdcbn07XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL2RlZmF1bHRzLmpzXG4vKipcclxuICogRXhwb3J0IGRlZmF1bHQgb3B0aW9ucy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbnZhciBERUZBVUxUUyA9IHtcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGEgc2xpZGVyIHR5cGUuXHJcbiAgICogLSAnc2xpZGUnOiBSZWd1bGFyIHNsaWRlci5cclxuICAgKiAtICdsb29wJyA6IENhcm91c2VsIHNsaWRlci5cclxuICAgKiAtICdmYWRlJyA6IENoYW5nZSBzbGlkZXMgd2l0aCBmYWRlIHRyYW5zaXRpb24uIHBlclBhZ2UsIGRyYWcgb3B0aW9ucyBhcmUgaWdub3JlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHR5cGU6ICdzbGlkZScsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byByZXdpbmQgYSBzbGlkZXIgYmVmb3JlIHRoZSBmaXJzdCBzbGlkZSBvciBhZnRlciB0aGUgbGFzdCBvbmUuXHJcbiAgICogSW4gXCJsb29wXCIgbW9kZSwgdGhpcyBvcHRpb24gaXMgaWdub3JlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICByZXdpbmQ6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zaXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgc3BlZWQ6IDQwMCxcblxuICAvKipcclxuICAgKiBUcmFuc2l0aW9uIHNwZWVkIG9uIHJld2luZCBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICByZXdpbmRTcGVlZDogMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHByZXZlbnQgYW55IGFjdGlvbnMgd2hpbGUgYSBzbGlkZXIgaXMgdHJhbnNpdGlvbmluZy5cclxuICAgKiBJZiBmYWxzZSwgbmF2aWdhdGlvbiwgZHJhZyBhbmQgc3dpcGUgd29yayB3aGlsZSB0aGUgc2xpZGVyIGlzIHJ1bm5pbmcuXHJcbiAgICogRXZlbiBzbywgaXQgd2lsbCBiZSBmb3JjZWQgdG8gd2FpdCBmb3IgdHJhbnNpdGlvbiBpbiBzb21lIGNhc2VzIGluIHRoZSBsb29wIG1vZGUgdG8gc2hpZnQgYSBzbGlkZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG5cbiAgLyoqXHJcbiAgICogRGVmaW5lIHNsaWRlciBtYXggd2lkdGguXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICB3aWR0aDogMCxcblxuICAvKipcclxuICAgKiBEZWZpbmUgc2xpZGVyIGhlaWdodC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGhlaWdodDogMCxcblxuICAvKipcclxuICAgKiBGaXggd2lkdGggb2Ygc2xpZGVzLiBDU1MgZm9ybWF0IGlzIGFsbG93ZWQgc3VjaCBhcyAxMGVtLCA4MCUgb3IgODB2dy5cclxuICAgKiBwZXJQYWdlIG51bWJlciB3aWxsIGJlIGlnbm9yZWQgd2hlbiB0aGlzIG9wdGlvbiBpcyBmYWxzeS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfVxyXG4gICAqL1xuICBmaXhlZFdpZHRoOiAwLFxuXG4gIC8qKlxyXG4gICAqIEZpeCBoZWlnaHQgb2Ygc2xpZGVzLiBDU1MgZm9ybWF0IGlzIGFsbG93ZWQgc3VjaCBhcyAxMGVtLCA4MHZoIGJ1dCAlIHVuaXQgaXMgbm90IGFjY2VwdGVkLlxyXG4gICAqIGhlaWdodFJhdGlvIG9wdGlvbiB3aWxsIGJlIGlnbm9yZWQgd2hlbiB0aGlzIG9wdGlvbiBpcyBmYWxzeS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfVxyXG4gICAqL1xuICBmaXhlZEhlaWdodDogMCxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaGVpZ2h0IG9mIHNsaWRlcyBieSByYXRpbyB0byBhIHNsaWRlciB3aWR0aC5cclxuICAgKiBUaGlzIHdpbGwgYmUgaWdub3JlZCB3aGVuIHRoZSBmaXhlZEhlaWdodCBpcyBwcm92aWRlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGhlaWdodFJhdGlvOiAwLFxuXG4gIC8qKlxyXG4gICAqIElmIHRydWUsIHNsaWRlIHdpZHRoIHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB0aGUgZWxlbWVudCB3aWR0aCBpdHNlbGYuXHJcbiAgICogLSBwZXJQYWdlL3Blck1vdmUgc2hvdWxkIGJlIDEuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgYXV0b1dpZHRoOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBJZiB0cnVlLCBzbGlkZSBoZWlnaHQgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBlbGVtZW50IHdpZHRoIGl0c2VsZi5cclxuICAgKiAtIHBlclBhZ2UvcGVyTW92ZSBzaG91bGQgYmUgMS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhdXRvSGVpZ2h0OiBmYWxzZSxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaG93IG1hbnkgc2xpZGVzIHNob3VsZCBiZSBkaXNwbGF5ZWQgcGVyIHBhZ2UuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBwZXJQYWdlOiAxLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBob3cgbWFueSBzbGlkZXMgc2hvdWxkIGJlIG1vdmVkIHdoZW4gYSBzbGlkZXIgZ29lcyB0byBuZXh0IG9yIHBlcnYuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBwZXJNb3ZlOiAwLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBtYW51YWxseSBob3cgbWFueSBjbG9uZXMgc2hvdWxkIGJlIGdlbmVyYXRlZCBvbiB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZS5cclxuICAgKiBUaGUgdG90YWwgbnVtYmVyIG9mIGNsb25lcyB3aWxsIGJlIHR3aWNlIG9mIHRoaXMgbnVtYmVyLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgY2xvbmVzOiAwLFxuXG4gIC8qKlxyXG4gICAqIFN0YXJ0IGluZGV4LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgc3RhcnQ6IDAsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHdoaWNoIHNsaWRlIHNob3VsZCBiZSBmb2N1c2VkIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBzbGlkZXMgaW4gYSBwYWdlLlxyXG4gICAqIEEgc3RyaW5nIFwiY2VudGVyXCIgaXMgYWNjZXB0YWJsZSBmb3IgY2VudGVyaW5nIHNsaWRlcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufG51bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGZvY3VzOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBHYXAgYmV0d2VlbiBzbGlkZXMuIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDFlbS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfVxyXG4gICAqL1xuICBnYXA6IDAsXG5cbiAgLyoqXHJcbiAgICogU2V0IHBhZGRpbmctbGVmdC9yaWdodCBpbiBob3Jpem9udGFsIG1vZGUgb3IgcGFkZGluZy10b3AvYm90dG9tIGluIHZlcnRpY2FsIG9uZS5cclxuICAgKiBHaXZlIGEgc2luZ2xlIHZhbHVlIHRvIHNldCBhIHNhbWUgc2l6ZSBmb3IgYm90aCBzaWRlcyBvclxyXG4gICAqIGRvIGFuIG9iamVjdCBmb3IgZGlmZmVyZW50IHNpemVzLlxyXG4gICAqIEFsc28sIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDFlbS5cclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLSAxMDogTnVtYmVyXHJcbiAgICogLSAnMWVtJzogQ1NTIGZvcm1hdC5cclxuICAgKiAtIHsgbGVmdDogMCwgcmlnaHQ6IDIwIH06IE9iamVjdCBmb3IgZGlmZmVyZW50IHNpemVzIGluIGhvcml6b250YWwgbW9kZS5cclxuICAgKiAtIHsgdG9wOiAwLCBib3R0b206IDIwIH06IE9iamVjdCBmb3IgZGlmZmVyZW50IHNpemVzIGluIHZlcnRpY2FsIG1vZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfHN0cmluZ3xPYmplY3R9XHJcbiAgICovXG4gIHBhZGRpbmc6IDAsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBhcHBlbmQgYXJyb3dzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGFycm93czogdHJ1ZSxcblxuICAvKipcclxuICAgKiBDaGFuZ2UgdGhlIGFycm93IFNWRyBwYXRoIGxpa2UgJ203LjYxIDAuODA3LTIuMTIuLi4nLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgYXJyb3dQYXRoOiAnJyxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGFwcGVuZCBwYWdpbmF0aW9uKGluZGljYXRvciBkb3RzKSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgcGFnaW5hdGlvbjogdHJ1ZSxcblxuICAvKipcclxuICAgKiBBY3RpdmF0ZSBhdXRvcGxheS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhdXRvcGxheTogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogQXV0b3BsYXkgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgaW50ZXJ2YWw6IDUwMDAsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzdG9wIGF1dG9wbGF5IHdoZW4gYSBzbGlkZXIgaXMgaG92ZXJlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBwYXVzZU9uSG92ZXI6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzdG9wIGF1dG9wbGF5IHdoZW4gYSBzbGlkZXIgZWxlbWVudHMgYXJlIGZvY3VzZWQuXHJcbiAgICogVHJ1ZSBpcyByZWNvbW1lbmRlZCBmb3IgYWNjZXNzaWJpbGl0eS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBwYXVzZU9uRm9jdXM6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byByZXNldCBwcm9ncmVzcyBvZiB0aGUgYXV0b3BsYXkgdGltZXIgd2hlbiByZXN1bWVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHJlc2V0UHJvZ3Jlc3M6IHRydWUsXG5cbiAgLyoqXHJcbiAgICogTG9hZGluZyBpbWFnZXMgbGF6aWx5LlxyXG4gICAqIEltYWdlIHNyYyBtdXN0IGJlIHByb3ZpZGVkIGJ5IGEgZGF0YS1zcGxpZGUtbGF6eSBhdHRyaWJ1dGUuXHJcbiAgICpcclxuICAgKiAtIGZhbHNlOiBEbyBub3RoaW5nLlxyXG4gICAqIC0gJ25lYXJieSc6IE9ubHkgaW1hZ2VzIGFyb3VuZCBhbiBhY3RpdmUgc2xpZGUgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICogLSAnc2VxdWVudGlhbCc6IEFsbCBpbWFnZXMgd2lsbCBiZSBzZXF1ZW50aWFsbHkgbG9hZGVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxyXG4gICAqL1xuICBsYXp5TG9hZDogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogVGhpcyBvcHRpb24gd29ya3Mgb25seSB3aGVuIGEgbGF6eUxvYWQgb3B0aW9uIGlzIFwibmVhcmJ5XCIuXHJcbiAgICogRGV0ZXJtaW5lIGhvdyBtYW55IHBhZ2VzKG5vdCBzbGlkZXMpIGFyb3VuZCBhbiBhY3RpdmUgc2xpZGUgc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmVoYW5kLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgcHJlbG9hZFBhZ2VzOiAxLFxuXG4gIC8qKlxyXG4gICAqIEVhc2luZyBmb3IgQ1NTIHRyYW5zaXRpb24uIEZvciBleGFtcGxlLCBsaW5lYXIsIGVhc2Ugb3IgY3ViaWMtYmV6aWVyKCkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICBlYXNpbmc6ICdjdWJpYy1iZXppZXIoLjQyLC42NSwuMjcsLjk5KScsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBlbmFibGUga2V5Ym9hcmQgc2hvcnRjdXRzXHJcbiAgICogLSB0cnVlIG9yICdnbG9iYWwnOiBMaXN0ZW4gdG8ga2V5ZG93biBldmVudCBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgICogLSAnZm9jdXNlZCc6IExpc3RlbiB0byB0aGUga2V5ZG93biBldmVudCBvZiB0aGUgc2xpZGVyIHJvb3QgZWxlbWVudC4gdGFiaW5kZXg9XCIwXCIgd2lsbCBiZSBhZGRlZCB0byB0aGUgZWxlbWVudC5cclxuICAgKiAtIGZhbHNlOiBEaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cclxuICAgKi9cbiAga2V5Ym9hcmQ6ICdnbG9iYWwnLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gYWxsb3cgbW91c2UgZHJhZyBhbmQgdG91Y2ggc3dpcGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgZHJhZzogdHJ1ZSxcblxuICAvKipcclxuICAgKiBUaGUgYW5nbGUgdGhyZXNob2xkIGZvciBkcmFnLlxyXG4gICAqIFRoZSBzbGlkZXIgc3RhcnRzIG1vdmluZyBvbmx5IHdoZW4gdGhlIGRyYWcgYW5nbGUgaXMgbGVzcyB0aGFuIHRoaXMgdGhyZXNob2xkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgZHJhZ0FuZ2xlVGhyZXNob2xkOiAzMCxcblxuICAvKipcclxuICAgKiBEaXN0YW5jZSB0aHJlc2hvbGQgZm9yIGRldGVybWluaW5nIGlmIHRoZSBhY3Rpb24gaXMgXCJmbGlja1wiIG9yIFwic3dpcGVcIi5cclxuICAgKiBXaGVuIGEgZHJhZyBkaXN0YW5jZSBpcyBvdmVyIHRoaXMgdmFsdWUsIHRoZSBhY3Rpb24gd2lsbCBiZSB0cmVhdGVkIGFzIFwic3dpcGVcIiwgbm90IFwiZmxpY2tcIi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHN3aXBlRGlzdGFuY2VUaHJlc2hvbGQ6IDE1MCxcblxuICAvKipcclxuICAgKiBWZWxvY2l0eSB0aHJlc2hvbGQgZm9yIGRldGVybWluaW5nIGlmIHRoZSBhY3Rpb24gaXMgXCJmbGlja1wiIG9yIFwic3dpcGVcIi5cclxuICAgKiBBcm91bmQgMC41IGlzIHJlY29tbWVuZGVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgZmxpY2tWZWxvY2l0eVRocmVzaG9sZDogLjYsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHBvd2VyIG9mIGZsaWNrLiBUaGUgbGFyZ2VyIG51bWJlciB0aGlzIGlzLCB0aGUgZmFydGhlciBhIHNsaWRlciBydW5zIGJ5IGZsaWNrLlxyXG4gICAqIEFyb3VuZCA1MDAgaXMgcmVjb21tZW5kZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBmbGlja1Bvd2VyOiA2MDAsXG5cbiAgLyoqXHJcbiAgICogTGltaXQgYSBudW1iZXIgb2YgcGFnZXMgdG8gbW92ZSBieSBmbGljay5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGZsaWNrTWF4UGFnZXM6IDEsXG5cbiAgLyoqXHJcbiAgICogU2xpZGVyIGRpcmVjdGlvbi5cclxuICAgKiAtICdsdHInOiBMZWZ0IHRvIHJpZ2h0LlxyXG4gICAqIC0gJ3J0bCc6IFJpZ2h0IHRvIGxlZnQuXHJcbiAgICogLSAndHRiJzogVG9wIHRvIGJvdHRvbS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIGRpcmVjdGlvbjogJ2x0cicsXG5cbiAgLyoqXHJcbiAgICogU2V0IGltZyBzcmMgdG8gYmFja2dyb3VuZC1pbWFnZSBvZiBpdHMgcGFyZW50IGVsZW1lbnQuXHJcbiAgICogSW1hZ2VzIHdpdGggdmFyaW91cyBzaXplcyBjYW4gYmUgZGlzcGxheWVkIGFzIHNhbWUgZGltZW5zaW9uIHdpdGhvdXQgY3JvcHBpbmcgd29yay5cclxuICAgKiBmaXhlZEhlaWdodCBvciBoZWlnaHRSYXRpbyBpcyByZXF1aXJlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBjb3ZlcjogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBlbmFibGUgYWNjZXNzaWJpbGl0eShhcmlhIGFuZCBzY3JlZW4gcmVhZGVyIHRleHRzKSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGFkZCB0YWJpbmRleD1cIjBcIiB0byB2aXNpYmxlIHNsaWRlcyBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgc2xpZGVGb2N1czogdHJ1ZSxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgYSBzbGlkZXIgaXMgbmF2aWdhdGlvbiBmb3IgYW5vdGhlci5cclxuICAgKiBVc2UgXCJzeW5jXCIgQVBJIHRvIHN5bmNocm9uaXplIHR3byBzbGlkZXJzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGlzTmF2aWdhdGlvbjogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byB0cmltIHNwYWNlcyBiZWZvcmUgdGhlIGZpc3Qgc2xpZGUgb3IgYWZ0ZXIgdGhlIGxhc3Qgb25lIHdoZW4gXCJmb2N1c1wiIGlzIG5vdCAwLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHRyaW1TcGFjZTogdHJ1ZSxcblxuICAvKipcclxuICAgKiBUaGUgXCJpcy1hY3RpdmVcIiBjbGFzcyBpcyBhZGRlZCBhZnRlciB0cmFuc2l0aW9uIGFzIGRlZmF1bHQuXHJcbiAgICogSWYgdHJ1ZSwgaXQgd2lsbCBiZSBhZGRlZCBiZWZvcmUgbW92ZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICB1cGRhdGVPbk1vdmU6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIFRocm90dGxlIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHJlc2l6ZSBldmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHRocm90dGxlOiAxMDAsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBkZXN0cm95IGEgc2xpZGVyIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBkZXN0cm95OiBmYWxzZSxcblxuICAvKipcclxuICAgKiBPcHRpb25zIGZvciBzcGVjaWZpYyBicmVha3BvaW50cy5cclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICoge1xyXG4gICAqICAgMTAwMDoge1xyXG4gICAqICAgICBwZXJQYWdlOiAzLFxyXG4gICAqICAgICBnYXA6IDIwXHJcbiAgICogICB9LFxyXG4gICAqICAgNjAwOiB7XHJcbiAgICogICAgIHBlclBhZ2U6IDEsXHJcbiAgICogICAgIGdhcDogNSxcclxuICAgKiAgIH1cclxuICAgKiB9XHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbnxPYmplY3R9XHJcbiAgICovXG4gIGJyZWFrcG9pbnRzOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBDb2xsZWN0aW9uIG9mIGNsYXNzIG5hbWVzLlxyXG4gICAqXHJcbiAgICogQHNlZSAuL2NsYXNzZXMuanNcclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIGNsYXNzZXM6IEVMRU1FTlRfQ0xBU1NFUyxcblxuICAvKipcclxuICAgKiBDb2xsZWN0aW9uIG9mIGkxOG4gdGV4dHMuXHJcbiAgICpcclxuICAgKiBAc2VlIC4vaTE4bi5qc1xyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgaTE4bjogSTE4TlxufTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvc3RhdGVzLmpzXG4vKipcclxuICogRXhwb3J0IHN0YXRlIGNvbnN0YW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogU3BsaWRlIGhhcyBiZWVuIGp1c3QgY3JlYXRlZC5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG52YXIgQ1JFQVRFRCA9IDE7XG4vKipcclxuICogQWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIG1vdW50ZWQgYW5kIGluaXRpYWxpemVkLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIE1PVU5URUQgPSAyO1xuLyoqXHJcbiAqIFNwbGlkZSBpcyByZWFkeSBmb3IgdHJhbnNpdGlvbi5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBJRExFID0gMztcbi8qKlxyXG4gKiBTcGxpZGUgaXMgbW92aW5nLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIE1PVklORyA9IDQ7XG4vKipcclxuICogU3BsaWRlIGlzIG1vdmluZy5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBERVNUUk9ZRUQgPSA1O1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3NwbGlkZS5qc1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcclxuICogVGhlIG1haW4gY2xhc3MgZm9yIGFwcGx5aW5nIFNwbGlkZSB0byBhbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG5cblxuLyoqXHJcbiAqIFRoZSBtYWluIGNsYXNzIGZvciBhcHBseWluZyBTcGxpZGUgdG8gYW4gZWxlbWVudCxcclxuICogcHJvdmlkaW5nIHNvbWUgQVBJcyB0byBjb250cm9sIHRoZSBiZWhhdmlvci5cclxuICovXG5cbnZhciBTcGxpZGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBTcGxpZGUgY29uc3RydWN0b3IuXHJcbiAgICpcclxuICAgKiBAdGhyb3dzIHtFcnJvcn0gV2hlbiB0aGUgZ2l2ZW4gcm9vdCBlbGVtZW50IG9yIHNlbGVjdG9yIGlzIGludmFsaWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSAgcm9vdCAgICAgICAtIEEgc2VsZWN0b3IgZm9yIGEgcm9vdCBlbGVtZW50IG9yIGFuIGVsZW1lbnQgaXRzZWxmLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBvcHRpb25zICAgIC0gT3B0aW9uYWwuIE9wdGlvbnMgdG8gY2hhbmdlIGRlZmF1bHQgYmVoYXZpb3VyLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBDb21wb25lbnRzIC0gT3B0aW9uYWwuIENvbXBvbmVudHMuXHJcbiAgICovXG4gIGZ1bmN0aW9uIFNwbGlkZShyb290LCBvcHRpb25zLCBDb21wb25lbnRzKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChDb21wb25lbnRzID09PSB2b2lkIDApIHtcbiAgICAgIENvbXBvbmVudHMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3QgPSByb290IGluc3RhbmNlb2YgRWxlbWVudCA/IHJvb3QgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3QpO1xuICAgIGV4aXN0KHRoaXMucm9vdCwgJ0FuIGludmFsaWQgZWxlbWVudC9zZWxlY3RvciB3YXMgZ2l2ZW4uJyk7XG4gICAgdGhpcy5Db21wb25lbnRzID0gbnVsbDtcbiAgICB0aGlzLkV2ZW50ID0gY29yZV9ldmVudCgpO1xuICAgIHRoaXMuU3RhdGUgPSBzdGF0ZShDUkVBVEVEKTtcbiAgICB0aGlzLlNUQVRFUyA9IHN0YXRlc19uYW1lc3BhY2VPYmplY3Q7XG4gICAgdGhpcy5fbyA9IG1lcmdlKERFRkFVTFRTLCBvcHRpb25zKTtcbiAgICB0aGlzLl9pID0gMDtcbiAgICB0aGlzLl9jID0gQ29tcG9uZW50cztcbiAgICB0aGlzLl9lID0ge307IC8vIEV4dGVuc2lvbnNcblxuICAgIHRoaXMuX3QgPSBudWxsOyAvLyBUcmFuc2l0aW9uXG4gIH1cbiAgLyoqXHJcbiAgICogQ29tcG9zZSBhbmQgbW91bnQgY29tcG9uZW50cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgIEV4dGVuc2lvbnMgLSBPcHRpb25hbC4gQWRkaXRpb25hbCBjb21wb25lbnRzLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFRyYW5zaXRpb24gLSBPcHRpb25hbC4gU2V0IGEgY3VzdG9tIHRyYW5zaXRpb24gY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3BsaWRlfHVuZGVmaW5lZH0gLSBUaGlzIGluc3RhbmNlIG9yIHVuZGVmaW5lZCBpZiBhbiBleGNlcHRpb24gb2NjdXJyZWQuXHJcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gU3BsaWRlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ubW91bnQgPSBmdW5jdGlvbiBtb3VudChFeHRlbnNpb25zLCBUcmFuc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChFeHRlbnNpb25zID09PSB2b2lkIDApIHtcbiAgICAgIEV4dGVuc2lvbnMgPSB0aGlzLl9lO1xuICAgIH1cblxuICAgIGlmIChUcmFuc2l0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIFRyYW5zaXRpb24gPSB0aGlzLl90O1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHRoZSBzdGF0ZS5cbiAgICB0aGlzLlN0YXRlLnNldChDUkVBVEVEKTtcbiAgICB0aGlzLl9lID0gRXh0ZW5zaW9ucztcbiAgICB0aGlzLl90ID0gVHJhbnNpdGlvbjtcbiAgICB0aGlzLkNvbXBvbmVudHMgPSBjb21wb3NlKHRoaXMsIG1lcmdlKHRoaXMuX2MsIEV4dGVuc2lvbnMpLCBUcmFuc2l0aW9uKTtcblxuICAgIHRyeSB7XG4gICAgICBlYWNoKHRoaXMuQ29tcG9uZW50cywgZnVuY3Rpb24gKGNvbXBvbmVudCwga2V5KSB7XG4gICAgICAgIHZhciByZXF1aXJlZCA9IGNvbXBvbmVudC5yZXF1aXJlZDtcblxuICAgICAgICBpZiAocmVxdWlyZWQgPT09IHVuZGVmaW5lZCB8fCByZXF1aXJlZCkge1xuICAgICAgICAgIGNvbXBvbmVudC5tb3VudCAmJiBjb21wb25lbnQubW91bnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgX3RoaXMuQ29tcG9uZW50c1trZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBTdGF0ZSA9IHRoaXMuU3RhdGU7XG4gICAgU3RhdGUuc2V0KE1PVU5URUQpO1xuICAgIGVhY2godGhpcy5Db21wb25lbnRzLCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQubW91bnRlZCAmJiBjb21wb25lbnQubW91bnRlZCgpO1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnbW91bnRlZCcpO1xuICAgIFN0YXRlLnNldChJRExFKTtcbiAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XG4gICAgYXBwbHlTdHlsZSh0aGlzLnJvb3QsIHtcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgIH0pO1xuICAgIHRoaXMub24oJ21vdmUgZHJhZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBTdGF0ZS5zZXQoTU9WSU5HKTtcbiAgICB9KS5vbignbW92ZWQgZHJhZ2dlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBTdGF0ZS5zZXQoSURMRSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogU2V0IHN5bmMgdGFyZ2V0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGxpZGV9IHNwbGlkZSAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3BsaWRlfSAtIFRoaXMgaW5zdGFuY2UuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc3luYyA9IGZ1bmN0aW9uIHN5bmMoc3BsaWRlKSB7XG4gICAgdGhpcy5zaWJsaW5nID0gc3BsaWRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGNhbGxiYWNrIGZpcmVkIG9uIHRoZSBnaXZlbiBldmVudChzKS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIGV2ZW50cyAgLSBBbiBldmVudCBuYW1lLiBVc2Ugc3BhY2UgdG8gc2VwYXJhdGUgbXVsdGlwbGUgZXZlbnRzLlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbHNvLCBuYW1lc3BhY2UgaXMgYWNjZXB0ZWQgYnkgZG90LCBzdWNoIGFzICdyZXNpemUue25hbWVzcGFjZX0nLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gIGVsbSAgICAgLSBPcHRpb25hbC4gTmF0aXZlIGV2ZW50IHdpbGwgYmUgbGlzdGVuZWQgdG8gd2hlbiB0aGlzIGFyZyBpcyBwcm92aWRlZC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gICBvcHRpb25zIC0gT3B0aW9uYWwuIE9wdGlvbnMgZm9yIGFkZEV2ZW50TGlzdGVuZXIuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTcGxpZGV9IC0gVGhpcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50cywgaGFuZGxlciwgZWxtLCBvcHRpb25zKSB7XG4gICAgaWYgKGVsbSA9PT0gdm9pZCAwKSB7XG4gICAgICBlbG0gPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLkV2ZW50Lm9uKGV2ZW50cywgaGFuZGxlciwgZWxtLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZSB0aGUgZ2l2ZW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGV2ZW50cyAtIEEgZXZlbnQgbmFtZS5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAtIE9wdGlvbmFsLiByZW1vdmVFdmVudExpc3RlbmVyKCkgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGlzIGFyZyBpcyBwcm92aWRlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1NwbGlkZX0gLSBUaGlzIGluc3RhbmNlLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9mZiA9IGZ1bmN0aW9uIG9mZihldmVudHMsIGVsbSkge1xuICAgIGlmIChlbG0gPT09IHZvaWQgMCkge1xuICAgICAgZWxtID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLkV2ZW50Lm9mZihldmVudHMsIGVsbSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogRW1pdCBhbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIEFuIGV2ZW50IG5hbWUuXHJcbiAgICogQHBhcmFtIHsqfSAgICAgIGFyZ3MgIC0gQW55IG51bWJlciBvZiBhcmd1bWVudHMgcGFzc2VkIHRvIGhhbmRsZXJzLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzJEV2ZW50O1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgKF90aGlzJEV2ZW50ID0gdGhpcy5FdmVudCkuZW1pdC5hcHBseShfdGhpcyRFdmVudCwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogR28gdG8gdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gY29udHJvbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gY29udHJvbCAtIEEgY29udHJvbCBwYXR0ZXJuLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgd2FpdCAgICAtIE9wdGlvbmFsLiBXaGV0aGVyIHRvIHdhaXQgZm9yIHRyYW5zaXRpb24uXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ28gPSBmdW5jdGlvbiBnbyhjb250cm9sLCB3YWl0KSB7XG4gICAgaWYgKHdhaXQgPT09IHZvaWQgMCkge1xuICAgICAgd2FpdCA9IHRoaXMub3B0aW9ucy53YWl0Rm9yVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5TdGF0ZS5pcyhJRExFKSB8fCB0aGlzLlN0YXRlLmlzKE1PVklORykgJiYgIXdhaXQpIHtcbiAgICAgIHRoaXMuQ29tcG9uZW50cy5Db250cm9sbGVyLmdvKGNvbnRyb2wsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBWZXJpZnkgd2hldGhlciB0aGUgc2xpZGVyIHR5cGUgaXMgdGhlIGdpdmVuIG9uZSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIEEgc2xpZGVyIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIHNsaWRlciB0eXBlIGlzIHRoZSBwcm92aWRlZCB0eXBlIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pcyA9IGZ1bmN0aW9uIGlzKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSA9PT0gdGhpcy5fby50eXBlO1xuICB9XG4gIC8qKlxyXG4gICAqIEluc2VydCBhIHNsaWRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gc2xpZGUgLSBBIHNsaWRlIGVsZW1lbnQgdG8gYmUgYWRkZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICAgICAgICAgaW5kZXggLSBBIHNsaWRlIHdpbGwgYmUgYWRkZWQgYXQgdGhlIHBvc2l0aW9uLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChzbGlkZSwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgaW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICB0aGlzLkNvbXBvbmVudHMuRWxlbWVudHMuYWRkKHNsaWRlLCBpbmRleCwgdGhpcy5yZWZyZXNoLmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgc2xpZGUgZGVzaWduYXRlZCBieSB0aGUgaW5kZXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBIHNsaWRlIGluZGV4LlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMuQ29tcG9uZW50cy5FbGVtZW50cy5yZW1vdmUoaW5kZXgpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgYWxsIFNsaWRlIG9iamVjdHMgYW5kIGNsb25lcyBhbmQgcmVjcmVhdGUgdGhlbSBhZ2Fpbi5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZWZyZXNoID0gZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICB0aGlzLmVtaXQoJ3JlZnJlc2g6YmVmb3JlJykuZW1pdCgncmVmcmVzaCcpLmVtaXQoJ3Jlc2l6ZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgdGhlIFNwbGlkZS5cclxuICAgKiBcIkNvbXBsZXRlbHlcIiBib29sZWFuIGlzIG1haW5seSBmb3IgYnJlYWtwb2ludHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbXBsZXRlbHkgLSBEZXN0cm95IGNvbXBsZXRlbHkuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKGNvbXBsZXRlbHkgPT09IHZvaWQgMCkge1xuICAgICAgY29tcGxldGVseSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUG9zdHBvbmUgZGVzdHJveSBiZWNhdXNlIGl0IHNob3VsZCBiZSBkb25lIGFmdGVyIG1vdW50LlxuICAgIGlmICh0aGlzLlN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICB0aGlzLm9uKCdyZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5kZXN0cm95KGNvbXBsZXRlbHkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsdWVzKHRoaXMuQ29tcG9uZW50cykucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LmRlc3Ryb3kgJiYgY29tcG9uZW50LmRlc3Ryb3koY29tcGxldGVseSk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdkZXN0cm95JywgY29tcGxldGVseSk7IC8vIERlc3Ryb3kgYWxsIGV2ZW50IGhhbmRsZXJzLCBpbmNsdWRpbmcgb25lcyBmb3IgbmF0aXZlIGV2ZW50cy5cblxuICAgIHRoaXMuRXZlbnQuZGVzdHJveSgpO1xuICAgIHRoaXMuU3RhdGUuc2V0KERFU1RST1lFRCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHNsaWRlIGluZGV4LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBjdXJyZW50IHNsaWRlIGluZGV4LlxyXG4gICAvLyAqL1xuICA7XG5cbiAgX2NyZWF0ZUNsYXNzKFNwbGlkZSwgW3tcbiAgICBrZXk6IFwiaW5kZXhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgY3VycmVudCBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGluZGV4IC0gQSBuZXcgaW5kZXguXHJcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5kZXgpIHtcbiAgICAgIHRoaXMuX2kgPSBwYXJzZUludChpbmRleCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGxlbmd0aCBvZiBzbGlkZXMuXHJcbiAgICAgKiBUaGlzIGlzIGFuIGFsaWFzIG9mIEVsZW1lbnRzLmxlbmd0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSBudW1iZXIgb2Ygc2xpZGVzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLkNvbXBvbmVudHMuRWxlbWVudHMubGVuZ3RoO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJldHVybiBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gLSBPcHRpb25zIG9iamVjdC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib3B0aW9uc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX287XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0IG9wdGlvbnMgd2l0aCBtZXJnaW5nIHRoZSBnaXZlbiBvYmplY3QgdG8gdGhlIGN1cnJlbnQgb25lLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gTmV3IG9wdGlvbnMuXHJcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob3B0aW9ucykge1xuICAgICAgdmFyIGNyZWF0ZWQgPSB0aGlzLlN0YXRlLmlzKENSRUFURUQpO1xuXG4gICAgICBpZiAoIWNyZWF0ZWQpIHtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbyA9IG1lcmdlKHRoaXMuX28sIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoIWNyZWF0ZWQpIHtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkJywgdGhpcy5fbyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBjbGFzcyBsaXN0LlxyXG4gICAgICogVGhpcyBpcyBhbiBhbGlhcyBvZiBTcGxpZGUub3B0aW9ucy5jbGFzc0xpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBjbGFzcyBsaXN0LlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbGFzc2VzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fby5jbGFzc2VzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgaTE4biBzdHJpbmdzLlxyXG4gICAgICogVGhpcyBpcyBhbiBhbGlhcyBvZiBTcGxpZGUub3B0aW9ucy5pMThuLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgaTE4biBzdHJpbmdzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpMThuXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fby5pMThuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTcGxpZGU7XG59KCk7XG5cblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvb3B0aW9ucy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGluaXRpYWxpemluZyBvcHRpb25zLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaW5pdGlhbGl6aW5nIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBvcHRpb25zID0gKGZ1bmN0aW9uIChTcGxpZGUpIHtcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgb3B0aW9ucyBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZS5cclxuICAgKiBOb3RlIHRoYXQgSUUxMCBkb2Vzbid0IHN1cHBvcnQgZGF0YXNldCBwcm9wZXJ0eS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBvcHRpb25zID0gZ2V0QXR0cmlidXRlKFNwbGlkZS5yb290LCAnZGF0YS1zcGxpZGUnKTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIHRyeSB7XG4gICAgICBTcGxpZGUub3B0aW9ucyA9IEpTT04ucGFyc2Uob3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IoZS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhDUkVBVEVEKSkge1xuICAgICAgICBTcGxpZGUuaW5kZXggPSBTcGxpZGUub3B0aW9ucy5zdGFydDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvZGlyZWN0aW9ucy5qc1xuLyoqXHJcbiAqIEV4cG9ydCBsYXlvdXQgbW9kZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIEVudW1lcmF0ZSBzbGlkZXMgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBMVFIgPSAnbHRyJztcbi8qKlxyXG4gKiBFbnVtZXJhdGUgc2xpZGVzIGZyb20gcmlnaHQgdG8gbGVmdC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBSVEwgPSAncnRsJztcbi8qKlxyXG4gKiBFbnVtZXJhdGUgc2xpZGVzIGluIGEgY29sLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFRUQiA9ICd0dGInO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvZWxlbWVudHMvc2xpZGUuanNcbi8qKlxyXG4gKiBUaGUgc3ViIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgZWFjaCBzbGlkZS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cblxuLyoqXHJcbiAqIEV2ZW50cyBmb3IgcmVzdG9yaW5nIG9yaWdpbmFsIHN0eWxlcy5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBTVFlMRV9SRVNUT1JFX0VWRU5UUyA9ICd1cGRhdGUuc2xpZGUnO1xuLyoqXHJcbiAqIFRoZSBzdWIgY29tcG9uZW50IGZvciBoYW5kbGluZyBlYWNoIHNsaWRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gIFNwbGlkZSAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gIGluZGV4ICAgICAtIEFuIHVuaXF1ZSBzbGlkZSBpbmRleC5cclxuICogQHBhcmFtIHtudW1iZXJ9ICByZWFsSW5kZXggLSBDbG9uZXMgc2hvdWxkIHBhc3MgYSByZWFsIHNsaWRlIGluZGV4LlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHNsaWRlICAgICAtIEEgc2xpZGUgZWxlbWVudC5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBzdWIgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgZWxlbWVudHNfc2xpZGUgPSAoZnVuY3Rpb24gKFNwbGlkZSwgaW5kZXgsIHJlYWxJbmRleCwgc2xpZGUpIHtcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byB1cGRhdGUgXCJpcy1hY3RpdmVcIiBjbGFzcyBiZWZvcmUgb3IgYWZ0ZXIgdHJhbnNpdGlvbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICB2YXIgdXBkYXRlT25Nb3ZlID0gU3BsaWRlLm9wdGlvbnMudXBkYXRlT25Nb3ZlO1xuICAvKipcclxuICAgKiBFdmVudHMgd2hlbiB0aGUgc2xpZGUgc3RhdHVzIGlzIHVwZGF0ZWQuXHJcbiAgICogQXBwZW5kIGEgbmFtZXNwYWNlIHRvIHJlbW92ZSBsaXN0ZW5lcnMgbGF0ZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuXG4gIHZhciBTVEFUVVNfVVBEQVRFX0VWRU5UUyA9ICdyZWFkeS5zbGlkZSB1cGRhdGVkLnNsaWRlIHJlc2l6ZWQuc2xpZGUgbW92ZWQuc2xpZGUnICsgKHVwZGF0ZU9uTW92ZSA/ICcgbW92ZS5zbGlkZScgOiAnJyk7XG4gIC8qKlxyXG4gICAqIFNsaWRlIHN1YiBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgU2xpZGUgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBTbGlkZSBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAgICovXG4gICAgc2xpZGU6IHNsaWRlLFxuXG4gICAgLyoqXHJcbiAgICAgKiBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgaW5kZXg6IGluZGV4LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZWFsIGluZGV4IGZvciBjbG9uZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xuICAgIHJlYWxJbmRleDogcmVhbEluZGV4LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDb250YWluZXIgZWxlbWVudCBpZiBhdmFpbGFibGUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0VsZW1lbnR8dW5kZWZpbmVkfVxyXG4gICAgICovXG4gICAgY29udGFpbmVyOiBjaGlsZChzbGlkZSwgU3BsaWRlLmNsYXNzZXMuY29udGFpbmVyKSxcblxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGlzIGEgY2xvbmVkIHNsaWRlIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIGlzQ2xvbmU6IHJlYWxJbmRleCA+IC0xLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuaXNDbG9uZSkge1xuICAgICAgICBzbGlkZS5pZCA9IFNwbGlkZS5yb290LmlkICsgXCItc2xpZGVcIiArIHBhZChpbmRleCArIDEpO1xuICAgICAgfVxuXG4gICAgICBTcGxpZGUub24oU1RBVFVTX1VQREFURV9FVkVOVFMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZSgpO1xuICAgICAgfSkub24oU1RZTEVfUkVTVE9SRV9FVkVOVFMsIHJlc3RvcmVTdHlsZXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFNwbGlkZS5lbWl0KCdjbGljaycsIF90aGlzKTtcbiAgICAgIH0sIHNsaWRlKTtcbiAgICAgIC8qXHJcbiAgICAgICAqIEFkZCBcImlzLWFjdGl2ZVwiIGNsYXNzIHRvIGEgY2xvbmUgZWxlbWVudCB0ZW1wb3JhcmlseVxyXG4gICAgICAgKiBhbmQgaXQgd2lsbCBiZSByZW1vdmVkIG9uIFwibW92ZWRcIiBldmVudC5cclxuICAgICAgICovXG5cbiAgICAgIGlmICh1cGRhdGVPbk1vdmUpIHtcbiAgICAgICAgU3BsaWRlLm9uKCdtb3ZlLnNsaWRlJywgZnVuY3Rpb24gKG5ld0luZGV4KSB7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ID09PSByZWFsSW5kZXgpIHtcbiAgICAgICAgICAgIF91cGRhdGUodHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IC8vIE1ha2Ugc3VyZSB0aGUgc2xpZGUgaXMgc2hvd24uXG5cblxuICAgICAgYXBwbHlTdHlsZShzbGlkZSwge1xuICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgfSk7IC8vIEhvbGQgdGhlIG9yaWdpbmFsIHN0eWxlcy5cblxuICAgICAgdGhpcy5zdHlsZXMgPSBnZXRBdHRyaWJ1dGUoc2xpZGUsICdzdHlsZScpIHx8ICcnO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgU3BsaWRlLm9mZihTVEFUVVNfVVBEQVRFX0VWRU5UUykub2ZmKFNUWUxFX1JFU1RPUkVfRVZFTlRTKS5vZmYoJ2NsaWNrJywgc2xpZGUpO1xuICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGUsIHZhbHVlcyhTVEFUVVNfQ0xBU1NFUykpO1xuICAgICAgcmVzdG9yZVN0eWxlcygpO1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCAnc3R5bGUnKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgYWN0aXZlIGFuZCB2aXNpYmxlIHN0YXR1cy5cclxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgX3VwZGF0ZSh0aGlzLmlzQWN0aXZlKCksIGZhbHNlKTtcblxuICAgICAgX3VwZGF0ZSh0aGlzLmlzVmlzaWJsZSgpLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoaXMgc2xpZGUgaXMgYWN0aXZlIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIGFjdGl2ZSBvciBmYWxzZSBpZiBub3QuXHJcbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgICByZXR1cm4gU3BsaWRlLmluZGV4ID09PSBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoaXMgc2xpZGUgaXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnQgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgdmlzaWJsZSBvciBmYWxzZSBpZiBub3QuXHJcbiAgICAgKi9cbiAgICBpc1Zpc2libGU6IGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICAgIHZhciBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XG5cbiAgICAgIGlmIChTcGxpZGUuaXMoRkFERSkgfHwgYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9XG5cbiAgICAgIHZhciBjZWlsID0gTWF0aC5jZWlsO1xuICAgICAgdmFyIHRyYWNrUmVjdCA9IGdldFJlY3QoU3BsaWRlLkNvbXBvbmVudHMuRWxlbWVudHMudHJhY2spO1xuICAgICAgdmFyIHNsaWRlUmVjdCA9IGdldFJlY3Qoc2xpZGUpO1xuXG4gICAgICBpZiAoU3BsaWRlLm9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEIpIHtcbiAgICAgICAgcmV0dXJuIHRyYWNrUmVjdC50b3AgPD0gc2xpZGVSZWN0LnRvcCAmJiBzbGlkZVJlY3QuYm90dG9tIDw9IGNlaWwodHJhY2tSZWN0LmJvdHRvbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFja1JlY3QubGVmdCA8PSBzbGlkZVJlY3QubGVmdCAmJiBzbGlkZVJlY3QucmlnaHQgPD0gY2VpbCh0cmFja1JlY3QucmlnaHQpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSBob3cgZmFyIHRoaXMgc2xpZGUgaXMgZnJvbSBhbm90aGVyIHNsaWRlIGFuZFxyXG4gICAgICogcmV0dXJuIHRydWUgaWYgdGhlIGRpc3RhbmNlIGlzIHdpdGhpbiB0aGUgZ2l2ZW4gbnVtYmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tICAgLSBJbmRleCBvZiBhIHRhcmdldCBzbGlkZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aXRoaW4gLSBUcnVlIGlmIHRoZSBzbGlkZSBpcyB3aXRoaW4gdGhpcyBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBzbGlkZSBpcyB3aXRoaW4gdGhlIG51bWJlciBvciBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgKi9cbiAgICBpc1dpdGhpbjogZnVuY3Rpb24gaXNXaXRoaW4oZnJvbSwgd2l0aGluKSB7XG4gICAgICB2YXIgZGlmZiA9IE1hdGguYWJzKGZyb20gLSBpbmRleCk7XG5cbiAgICAgIGlmICghU3BsaWRlLmlzKFNMSURFKSAmJiAhdGhpcy5pc0Nsb25lKSB7XG4gICAgICAgIGRpZmYgPSBNYXRoLm1pbihkaWZmLCBTcGxpZGUubGVuZ3RoIC0gZGlmZik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaWZmIDwgd2l0aGluO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogVXBkYXRlIGNsYXNzZXMgZm9yIGFjdGl2aXR5IG9yIHZpc2liaWxpdHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFjdGl2ZSAgICAgICAgLSBJcyBhY3RpdmUvdmlzaWJsZSBvciBub3QuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBmb3JWaXNpYmlsaXR5IC0gVG9nZ2xlIGNsYXNzZXMgZm9yIGFjdGl2aXR5IG9yIHZpc2liaWxpdHkuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gX3VwZGF0ZShhY3RpdmUsIGZvclZpc2liaWxpdHkpIHtcbiAgICB2YXIgdHlwZSA9IGZvclZpc2liaWxpdHkgPyAndmlzaWJsZScgOiAnYWN0aXZlJztcbiAgICB2YXIgY2xhc3NOYW1lID0gU1RBVFVTX0NMQVNTRVNbdHlwZV07XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBhZGRDbGFzcyhzbGlkZSwgY2xhc3NOYW1lKTtcbiAgICAgIFNwbGlkZS5lbWl0KFwiXCIgKyB0eXBlLCBTbGlkZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXNDbGFzcyhzbGlkZSwgY2xhc3NOYW1lKSkge1xuICAgICAgICByZW1vdmVDbGFzcyhzbGlkZSwgY2xhc3NOYW1lKTtcbiAgICAgICAgU3BsaWRlLmVtaXQoXCJcIiArIChmb3JWaXNpYmlsaXR5ID8gJ2hpZGRlbicgOiAnaW5hY3RpdmUnKSwgU2xpZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBSZXN0b3JlIHRoZSBvcmlnaW5hbCBzdHlsZXMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiByZXN0b3JlU3R5bGVzKCkge1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgJ3N0eWxlJywgU2xpZGUuc3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBTbGlkZTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvZWxlbWVudHMvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBtYWluIGVsZW1lbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuLyoqXHJcbiAqIFRoZSBwcm9wZXJ0eSBuYW1lIGZvciBVSUQgc3RvcmVkIGluIGEgd2luZG93IG9iamVjdC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBVSURfTkFNRSA9ICd1aWQnO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1haW4gZWxlbWVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb21wb25lbnRzX2VsZW1lbnRzID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG4gIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIGNsYXNzIGxpc3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBjbGFzc2VzID0gU3BsaWRlLmNsYXNzZXM7XG4gIC8qKlxyXG4gICAqIFN0b3JlIFNsaWRlIG9iamVjdHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICovXG5cbiAgdmFyIFNsaWRlcyA9IFtdO1xuICAvKlxyXG4gICAqIEFzc2lnbiB1bmlxdWUgSUQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBpdCBkb2Vzbid0IGhhdmUgdGhlIG9uZS5cclxuICAgKiBOb3RlIHRoYXQgSUUgZG9lc24ndCBzdXBwb3J0IHBhZFN0YXJ0KCkgdG8gZmlsbCB0aGUgdWlkIGJ5IDAuXHJcbiAgICovXG5cbiAgaWYgKCFyb290LmlkKSB7XG4gICAgd2luZG93LnNwbGlkZSA9IHdpbmRvdy5zcGxpZGUgfHwge307XG4gICAgdmFyIHVpZCA9IHdpbmRvdy5zcGxpZGVbVUlEX05BTUVdIHx8IDA7XG4gICAgd2luZG93LnNwbGlkZVtVSURfTkFNRV0gPSArK3VpZDtcbiAgICByb290LmlkID0gXCJzcGxpZGVcIiArIHBhZCh1aWQpO1xuICB9XG4gIC8qKlxyXG4gICAqIEVsZW1lbnRzIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG5cbiAgdmFyIEVsZW1lbnRzID0ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogQ29sbGVjdCBtYWluIGVsZW1lbnRzIGFuZCBzdG9yZSB0aGVtIGFzIG1lbWJlciBwcm9wZXJ0aWVzLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICBTcGxpZGUub24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmRlc3Ryb3koKTtcblxuICAgICAgICBfdGhpcy5pbml0KCk7XG4gICAgICB9KS5vbigndXBkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3Mocm9vdCwgZ2V0Q2xhc3NlcygpKTtcbiAgICAgICAgYWRkQ2xhc3Mocm9vdCwgZ2V0Q2xhc3NlcygpKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgU2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIFNsaWRlLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgICAgU2xpZGVzID0gW107XG4gICAgICByZW1vdmVDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemF0aW9uLlxyXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBjb2xsZWN0KCk7XG4gICAgICBhZGRDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUsIGluZGV4KSB7XG4gICAgICAgIF90aGlzMi5yZWdpc3RlcihzbGlkZSwgaW5kZXgsIC0xKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgc2xpZGUgdG8gY3JlYXRlIGEgU2xpZGUgb2JqZWN0IGFuZCBoYW5kbGUgaXRzIGJlaGF2aW9yLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gc2xpZGUgICAgIC0gQSBzbGlkZSBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBpbmRleCAgICAgLSBBIHVuaXF1ZSBpbmRleC4gVGhpcyBjYW4gYmUgbmVnYXRpdmUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIHJlYWxJbmRleCAtIEEgcmVhbCBpbmRleCBmb3IgY2xvbmVzLiBTZXQgLTEgZm9yIHJlYWwgc2xpZGVzLlxyXG4gICAgICovXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uIHJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgcmVhbEluZGV4KSB7XG4gICAgICB2YXIgU2xpZGVPYmplY3QgPSBlbGVtZW50c19zbGlkZShTcGxpZGUsIGluZGV4LCByZWFsSW5kZXgsIHNsaWRlKTtcbiAgICAgIFNsaWRlT2JqZWN0Lm1vdW50KCk7XG4gICAgICBTbGlkZXMucHVzaChTbGlkZU9iamVjdCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBTbGlkZSBvYmplY3QgZGVzaWduYXRlZCBieSB0aGUgaW5kZXguXHJcbiAgICAgKiBOb3RlIHRoYXQgXCJmaW5kXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfSAtIEEgU2xpZGUgb2JqZWN0IGlmIGF2YWlsYWJsZS4gVW5kZWZpbmVkIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGdldFNsaWRlOiBmdW5jdGlvbiBnZXRTbGlkZShpbmRleCkge1xuICAgICAgcmV0dXJuIFNsaWRlcy5maWx0ZXIoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHJldHVybiBTbGlkZS5pbmRleCA9PT0gaW5kZXg7XG4gICAgICB9KVswXTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYWxsIFNsaWRlIG9iamVjdHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlQ2xvbmVzIC0gV2hldGhlciB0byBpbmNsdWRlIGNsb25lZCBzbGlkZXMgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdFtdfSAtIFNsaWRlIG9iamVjdHMuXHJcbiAgICAgKi9cbiAgICBnZXRTbGlkZXM6IGZ1bmN0aW9uIGdldFNsaWRlcyhpbmNsdWRlQ2xvbmVzKSB7XG4gICAgICByZXR1cm4gaW5jbHVkZUNsb25lcyA/IFNsaWRlcyA6IFNsaWRlcy5maWx0ZXIoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHJldHVybiAhU2xpZGUuaXNDbG9uZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBTbGlkZSBvYmplY3RzIGJlbG9uZ2luZyB0byB0aGUgZ2l2ZW4gcGFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSAtIEEgcGFnZSBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0W119IC0gQW4gYXJyYXkgY29udGFpbmluZyBTbGlkZSBvYmplY3RzLlxyXG4gICAgICovXG4gICAgZ2V0U2xpZGVzQnlQYWdlOiBmdW5jdGlvbiBnZXRTbGlkZXNCeVBhZ2UocGFnZSkge1xuICAgICAgdmFyIGlkeCA9IENvbXBvbmVudHMuQ29udHJvbGxlci50b0luZGV4KHBhZ2UpO1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHZhciBtYXggPSBvcHRpb25zLmZvY3VzICE9PSBmYWxzZSA/IDEgOiBvcHRpb25zLnBlclBhZ2U7XG4gICAgICByZXR1cm4gU2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgaW5kZXggPSBfcmVmLmluZGV4O1xuICAgICAgICByZXR1cm4gaWR4IDw9IGluZGV4ICYmIGluZGV4IDwgaWR4ICsgbWF4O1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogSW5zZXJ0IGEgc2xpZGUgdG8gYSBzbGlkZXIuXHJcbiAgICAgKiBOZWVkIHRvIHJlZnJlc2ggU3BsaWRlIGFmdGVyIGFkZGluZyBhIHNsaWRlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Tm9kZXxzdHJpbmd9IHNsaWRlICAgIC0gQSBzbGlkZSBlbGVtZW50IHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgICAgaW5kZXggICAgLSBBIHNsaWRlIHdpbGwgYmUgYWRkZWQgYXQgdGhlIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gICAgY2FsbGJhY2sgLSBDYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIHNsaWRlIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gYWRkKHNsaWRlLCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNsaWRlID0gZG9taWZ5KHNsaWRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNsaWRlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICB2YXIgcmVmID0gdGhpcy5zbGlkZXNbaW5kZXhdOyAvLyBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiBtb3VudCgpIG9mIGEgU2xpZGUgY29tcG9uZW50LlxuXG4gICAgICAgIGFwcGx5U3R5bGUoc2xpZGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgIGJlZm9yZShzbGlkZSwgcmVmKTtcbiAgICAgICAgICB0aGlzLnNsaWRlcy5zcGxpY2UoaW5kZXgsIDAsIHNsaWRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcHBlbmQodGhpcy5saXN0LCBzbGlkZSk7XG4gICAgICAgICAgdGhpcy5zbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkZWQoc2xpZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhzbGlkZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHNsaWRlIGZyb20gYSBzbGlkZXIuXHJcbiAgICAgKiBOZWVkIHRvIHJlZnJlc2ggU3BsaWRlIGFmdGVyIHJlbW92aW5nIGEgc2xpZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xuICAgICAgZG9tX3JlbW92ZSh0aGlzLnNsaWRlcy5zcGxpY2UoaW5kZXgsIDEpWzBdKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyIHRoZSBwcm92aWRlZCBjYWxsYmFjayBmb3IgZWFjaCBTbGlkZSBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZmlyc3QgYXJndW1lbnQgd2lsbCBiZSB0aGUgU2xpZGUgb2JqZWN0LlxyXG4gICAgICovXG4gICAgZWFjaDogZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICAgICAgU2xpZGVzLmZvckVhY2goY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBzbGlkZXMgbGVuZ3RoIHdpdGhvdXQgY2xvbmVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBTbGlkZSBsZW5ndGguXHJcbiAgICAgKi9cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gXCJTbGlkZU9iamVjdHNcIiBsZW5ndGggaW5jbHVkaW5nIGNsb25lcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gU2xpZGUgbGVuZ3RoIGluY2x1ZGluZyBjbG9uZXMuXHJcbiAgICAgKi9cbiAgICBnZXQgdG90YWwoKSB7XG4gICAgICByZXR1cm4gU2xpZGVzLmxlbmd0aDtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogQ29sbGVjdCBlbGVtZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgIEVsZW1lbnRzLnNsaWRlciA9IGNoaWxkKHJvb3QsIGNsYXNzZXMuc2xpZGVyKTtcbiAgICBFbGVtZW50cy50cmFjayA9IGZpbmQocm9vdCwgXCIuXCIgKyBjbGFzc2VzLnRyYWNrKTtcbiAgICBFbGVtZW50cy5saXN0ID0gY2hpbGQoRWxlbWVudHMudHJhY2ssIGNsYXNzZXMubGlzdCk7XG4gICAgZXhpc3QoRWxlbWVudHMudHJhY2sgJiYgRWxlbWVudHMubGlzdCwgJ1RyYWNrIG9yIGxpc3Qgd2FzIG5vdCBmb3VuZC4nKTtcbiAgICBFbGVtZW50cy5zbGlkZXMgPSBjaGlsZHJlbihFbGVtZW50cy5saXN0LCBjbGFzc2VzLnNsaWRlKTtcbiAgICB2YXIgYXJyb3dzID0gZmluZFBhcnRzKGNsYXNzZXMuYXJyb3dzKTtcbiAgICBFbGVtZW50cy5hcnJvd3MgPSB7XG4gICAgICBwcmV2OiBmaW5kKGFycm93cywgXCIuXCIgKyBjbGFzc2VzLnByZXYpLFxuICAgICAgbmV4dDogZmluZChhcnJvd3MsIFwiLlwiICsgY2xhc3Nlcy5uZXh0KVxuICAgIH07XG4gICAgdmFyIGF1dG9wbGF5ID0gZmluZFBhcnRzKGNsYXNzZXMuYXV0b3BsYXkpO1xuICAgIEVsZW1lbnRzLmJhciA9IGZpbmQoZmluZFBhcnRzKGNsYXNzZXMucHJvZ3Jlc3MpLCBcIi5cIiArIGNsYXNzZXMuYmFyKTtcbiAgICBFbGVtZW50cy5wbGF5ID0gZmluZChhdXRvcGxheSwgXCIuXCIgKyBjbGFzc2VzLnBsYXkpO1xuICAgIEVsZW1lbnRzLnBhdXNlID0gZmluZChhdXRvcGxheSwgXCIuXCIgKyBjbGFzc2VzLnBhdXNlKTtcbiAgICBFbGVtZW50cy50cmFjay5pZCA9IEVsZW1lbnRzLnRyYWNrLmlkIHx8IHJvb3QuaWQgKyBcIi10cmFja1wiO1xuICAgIEVsZW1lbnRzLmxpc3QuaWQgPSBFbGVtZW50cy5saXN0LmlkIHx8IHJvb3QuaWQgKyBcIi1saXN0XCI7XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJuIGNsYXNzIG5hbWVzIGZvciB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NlcygpIHtcbiAgICB2YXIgcm9vdENsYXNzID0gY2xhc3Nlcy5yb290O1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgcmV0dXJuIFtyb290Q2xhc3MgKyBcIi0tXCIgKyBvcHRpb25zLnR5cGUsIHJvb3RDbGFzcyArIFwiLS1cIiArIG9wdGlvbnMuZGlyZWN0aW9uLCBvcHRpb25zLmRyYWcgPyByb290Q2xhc3MgKyBcIi0tZHJhZ2dhYmxlXCIgOiAnJywgb3B0aW9ucy5pc05hdmlnYXRpb24gPyByb290Q2xhc3MgKyBcIi0tbmF2XCIgOiAnJywgU1RBVFVTX0NMQVNTRVMuYWN0aXZlXTtcbiAgfVxuICAvKipcclxuICAgKiBGaW5kIHBhcnRzIG9ubHkgZnJvbSBjaGlsZHJlbiBvZiB0aGUgcm9vdCBvciB0cmFjay5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IC0gQSBmb3VuZCBlbGVtZW50IG9yIHVuZGVmaW5lZC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGZpbmRQYXJ0cyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gY2hpbGQocm9vdCwgY2xhc3NOYW1lKSB8fCBjaGlsZChFbGVtZW50cy5zbGlkZXIsIGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gRWxlbWVudHM7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2NvbnRyb2xsZXIvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY29udHJvbGxpbmcgdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGN1cnJlbnQgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBvcHRpb25zO1xuICAvKipcclxuICAgKiBUcnVlIGlmIHRoZSBzbGlkZSBpcyBMT09QIG1vZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNMb29wO1xuICAvKipcclxuICAgKiBDb250cm9sbGVyIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDb250cm9sbGVyID0ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgaXNMb29wID0gU3BsaWRlLmlzKExPT1ApO1xuICAgICAgYmluZCgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIE1ha2UgdHJhY2sgcnVuIGJ5IHRoZSBnaXZlbiBjb250cm9sLlxyXG4gICAgICogLSBcIit7aX1cIiA6IEluY3JlbWVudCB0aGUgc2xpZGUgaW5kZXggYnkgaS5cclxuICAgICAqIC0gXCIte2l9XCIgOiBEZWNyZW1lbnQgdGhlIHNsaWRlIGluZGV4IGJ5IGkuXHJcbiAgICAgKiAtIFwie2l9XCIgIDogR28gdG8gdGhlIHNsaWRlIHdob3NlIGluZGV4IGlzIGkuXHJcbiAgICAgKiAtIFwiPlwiICAgIDogR28gdG8gbmV4dCBwYWdlLlxyXG4gICAgICogLSBcIjxcIiAgICA6IEdvIHRvIHByZXYgcGFnZS5cclxuICAgICAqIC0gXCI+e2l9XCIgOiBHbyB0byBwYWdlIGkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjb250cm9sICAtIEEgY29udHJvbCBwYXR0ZXJuLlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSAgICAgICBzaWxlbnRseSAtIEdvIHRvIHRoZSBkZXN0aW5hdGlvbiB3aXRob3V0IGV2ZW50IGVtaXNzaW9uLlxyXG4gICAgICovXG4gICAgZ286IGZ1bmN0aW9uIGdvKGNvbnRyb2wsIHNpbGVudGx5KSB7XG4gICAgICB2YXIgZGVzdEluZGV4ID0gdGhpcy50cmltKHRoaXMucGFyc2UoY29udHJvbCkpO1xuICAgICAgQ29tcG9uZW50cy5UcmFjay5nbyhkZXN0SW5kZXgsIHRoaXMucmV3aW5kKGRlc3RJbmRleCksIHNpbGVudGx5KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZSB0aGUgZ2l2ZW4gY29udHJvbCBhbmQgcmV0dXJuIHRoZSBkZXN0aW5hdGlvbiBpbmRleCBmb3IgdGhlIHRyYWNrLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250cm9sIC0gQSBjb250cm9sIHRhcmdldCBwYXR0ZXJuLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIHBhcnNlZCB0YXJnZXQuXHJcbiAgICAgKi9cbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoY29udHJvbCkge1xuICAgICAgdmFyIGluZGV4ID0gU3BsaWRlLmluZGV4O1xuICAgICAgdmFyIG1hdGNoZXMgPSBTdHJpbmcoY29udHJvbCkubWF0Y2goLyhbK1xcLTw+XSspKFxcZCspPy8pO1xuICAgICAgdmFyIGluZGljYXRvciA9IG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogJyc7XG4gICAgICB2YXIgbnVtYmVyID0gbWF0Y2hlcyA/IHBhcnNlSW50KG1hdGNoZXNbMl0pIDogMDtcblxuICAgICAgc3dpdGNoIChpbmRpY2F0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgaW5kZXggKz0gbnVtYmVyIHx8IDE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgaW5kZXggLT0gbnVtYmVyIHx8IDE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGluZGV4ID0gcGFyc2VQYWdlKG51bWJlciwgaW5kZXgsIGluZGljYXRvciA9PT0gJzwnKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoY29udHJvbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlIGluZGV4IGZyb20gdGhlIGdpdmVuIHBhZ2UgbnVtYmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gUGFnZSBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgY29tcHV0ZWQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cbiAgICB0b0luZGV4OiBmdW5jdGlvbiB0b0luZGV4KHBhZ2UpIHtcbiAgICAgIGlmIChoYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcbiAgICAgIHZhciBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlO1xuICAgICAgdmFyIGluZGV4ID0gcGFnZSAqIHBlclBhZ2U7XG4gICAgICBpbmRleCA9IGluZGV4IC0gKHRoaXMucGFnZUxlbmd0aCAqIHBlclBhZ2UgLSBsZW5ndGgpICogZmxvb3IoaW5kZXggLyBsZW5ndGgpOyAvLyBBZGp1c3RtZW50IGZvciB0aGUgbGFzdCBwYWdlLlxuXG4gICAgICBpZiAobGVuZ3RoIC0gcGVyUGFnZSA8PSBpbmRleCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBpbmRleCA9IGxlbmd0aCAtIHBlclBhZ2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlIHBhZ2UgbnVtYmVyIGZyb20gdGhlIGdpdmVuIHNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIGNvbXB1dGVkIHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXG4gICAgdG9QYWdlOiBmdW5jdGlvbiB0b1BhZ2UoaW5kZXgpIHtcbiAgICAgIGlmIChoYXNGb2N1cygpKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IFNwbGlkZS5sZW5ndGg7XG4gICAgICB2YXIgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTsgLy8gTWFrZSB0aGUgbGFzdCBcInBlclBhZ2VcIiBudW1iZXIgb2Ygc2xpZGVzIGJlbG9uZyB0byB0aGUgbGFzdCBwYWdlLlxuXG4gICAgICBpZiAobGVuZ3RoIC0gcGVyUGFnZSA8PSBpbmRleCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmxvb3IoKGxlbmd0aCAtIDEpIC8gcGVyUGFnZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbG9vcihpbmRleCAvIHBlclBhZ2UpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFRyaW0gdGhlIGdpdmVuIGluZGV4IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBtb2RlLlxyXG4gICAgICogSW5kZXggYmVpbmcgcmV0dXJuZWQgY291bGQgYmUgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggaW4gTG9vcCBtb2RlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEFuIGluZGV4IGJlaW5nIHRyaW1tZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgdHJpbW1lZCBpbmRleC5cclxuICAgICAqL1xuICAgIHRyaW06IGZ1bmN0aW9uIHRyaW0oaW5kZXgpIHtcbiAgICAgIGlmICghaXNMb29wKSB7XG4gICAgICAgIGluZGV4ID0gb3B0aW9ucy5yZXdpbmQgPyB0aGlzLnJld2luZChpbmRleCkgOiBiZXR3ZWVuKGluZGV4LCAwLCB0aGlzLmVkZ2VJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXdpbmQgdGhlIGdpdmVuIGluZGV4IGlmIGl0J3Mgb3V0IG9mIHJhbmdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEFuIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIHJld291bmQgaW5kZXguXHJcbiAgICAgKi9cbiAgICByZXdpbmQ6IGZ1bmN0aW9uIHJld2luZChpbmRleCkge1xuICAgICAgdmFyIGVkZ2UgPSB0aGlzLmVkZ2VJbmRleDtcblxuICAgICAgaWYgKGlzTG9vcCkge1xuICAgICAgICB3aGlsZSAoaW5kZXggPiBlZGdlKSB7XG4gICAgICAgICAgaW5kZXggLT0gZWRnZSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgaW5kZXggKz0gZWRnZSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpbmRleCA+IGVkZ2UpIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgaW5kZXggPSBlZGdlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZGlyZWN0aW9uIGlzIFwicnRsXCIgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiBcInJ0bFwiIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGlzUnRsOiBmdW5jdGlvbiBpc1J0bCgpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgcGFnZSBsZW5ndGguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIE1heCBwYWdlIG51bWJlci5cclxuICAgICAqL1xuICAgIGdldCBwYWdlTGVuZ3RoKCkge1xuICAgICAgdmFyIGxlbmd0aCA9IFNwbGlkZS5sZW5ndGg7XG4gICAgICByZXR1cm4gaGFzRm9jdXMoKSA/IGxlbmd0aCA6IE1hdGguY2VpbChsZW5ndGggLyBvcHRpb25zLnBlclBhZ2UpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgZWRnZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gRWRnZSBpbmRleC5cclxuICAgICAqL1xuICAgIGdldCBlZGdlSW5kZXgoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcblxuICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNGb2N1cygpIHx8IG9wdGlvbnMuaXNOYXZpZ2F0aW9uIHx8IGlzTG9vcCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxlbmd0aCAtIG9wdGlvbnMucGVyUGFnZTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBwcmV2aW91cyBzbGlkZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIGluZGV4IG9mIHRoZSBwcmV2aW91cyBzbGlkZSBpZiBhdmFpbGFibGUuIC0xIG90aGVyd2lzZS5cclxuICAgICAqL1xuICAgIGdldCBwcmV2SW5kZXgoKSB7XG4gICAgICB2YXIgcHJldiA9IFNwbGlkZS5pbmRleCAtIDE7XG5cbiAgICAgIGlmIChpc0xvb3AgfHwgb3B0aW9ucy5yZXdpbmQpIHtcbiAgICAgICAgcHJldiA9IHRoaXMucmV3aW5kKHByZXYpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldiA+IC0xID8gcHJldiA6IC0xO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIG5leHQgc2xpZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBpbmRleCBvZiB0aGUgbmV4dCBzbGlkZSBpZiBhdmFpbGFibGUuIC0xIG90aGVyd2lzZS5cclxuICAgICAqL1xuICAgIGdldCBuZXh0SW5kZXgoKSB7XG4gICAgICB2YXIgbmV4dCA9IFNwbGlkZS5pbmRleCArIDE7XG5cbiAgICAgIGlmIChpc0xvb3AgfHwgb3B0aW9ucy5yZXdpbmQpIHtcbiAgICAgICAgbmV4dCA9IHRoaXMucmV3aW5kKG5leHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gU3BsaWRlLmluZGV4IDwgbmV4dCAmJiBuZXh0IDw9IHRoaXMuZWRnZUluZGV4IHx8IG5leHQgPT09IDAgPyBuZXh0IDogLTE7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0byBzb21lIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIFNwbGlkZS5vbignbW92ZScsIGZ1bmN0aW9uIChuZXdJbmRleCkge1xuICAgICAgU3BsaWRlLmluZGV4ID0gbmV3SW5kZXg7XG4gICAgfSkub24oJ3VwZGF0ZWQgcmVmcmVzaCcsIGZ1bmN0aW9uIChuZXdPcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gbmV3T3B0aW9ucyB8fCBvcHRpb25zO1xuICAgICAgU3BsaWRlLmluZGV4ID0gYmV0d2VlbihTcGxpZGUuaW5kZXgsIDAsIENvbnRyb2xsZXIuZWRnZUluZGV4KTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBWZXJpZnkgaWYgdGhlIGZvY3VzIG9wdGlvbiBpcyBhdmFpbGFibGUgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIGEgc2xpZGVyIGhhcyB0aGUgZm9jdXMgb3B0aW9uLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaGFzRm9jdXMoKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZm9jdXMgIT09IGZhbHNlO1xuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgbmV4dCBvciBwcmV2aW91cyBwYWdlIGluZGV4IGNvbXB1dGVkIGJ5IHRoZSBwYWdlIG51bWJlciBhbmQgY3VycmVudCBpbmRleC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgbnVtYmVyIC0gU3BlY2lmeSB0aGUgcGFnZSBudW1iZXIuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBpbmRleCAgLSBDdXJyZW50IGluZGV4LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJldiAgIC0gUHJldiBvciBuZXh0LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSAtIFNsaWRlIGluZGV4LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcGFyc2VQYWdlKG51bWJlciwgaW5kZXgsIHByZXYpIHtcbiAgICBpZiAobnVtYmVyID4gLTEpIHtcbiAgICAgIHJldHVybiBDb250cm9sbGVyLnRvSW5kZXgobnVtYmVyKTtcbiAgICB9XG5cbiAgICB2YXIgcGVyTW92ZSA9IG9wdGlvbnMucGVyTW92ZTtcbiAgICB2YXIgc2lnbiA9IHByZXYgPyAtMSA6IDE7XG5cbiAgICBpZiAocGVyTW92ZSkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgcGVyTW92ZSAqIHNpZ247XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbnRyb2xsZXIudG9JbmRleChDb250cm9sbGVyLnRvUGFnZShpbmRleCkgKyBzaWduKTtcbiAgfVxuXG4gIHJldHVybiBDb250cm9sbGVyO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy90cmFjay9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1vdmluZyBsaXN0IGluIHRoZSB0cmFjay5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cbnZhciBhYnMgPSBNYXRoLmFicztcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBtb3ZpbmcgbGlzdCBpbiB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCB0cmFjayA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIExheW91dCBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgTGF5b3V0O1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBMYXlvdXQgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBsaXN0IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgbGlzdDtcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgY3VycmVudCBkaXJlY3Rpb24gaXMgdmVydGljYWwgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzVmVydGljYWwgPSBTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2xpZGVyIHR5cGUgaXMgRkFERSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNGYWRlID0gU3BsaWRlLmlzKEZBREUpO1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBzbGlkZXIgZGlyZWN0aW9uIGlzIFJUTCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNSVEwgPSBTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFJUTDtcbiAgLyoqXHJcbiAgICogVGhpcyB3aWxsIGJlIHRydWUgd2hpbGUgdHJhbnNpdGlvbmluZyBmcm9tIHRoZSBsYXN0IGluZGV4IHRvIHRoZSBmaXJzdCBvbmUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNMb29wUGVuZGluZyA9IGZhbHNlO1xuICAvKipcclxuICAgKiBTaWduIGZvciB0aGUgZGlyZWN0aW9uLiBPbmx5IFJUTCBtb2RlIHVzZXMgdGhlIHBvc2l0aXZlIHNpZ24uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuXG4gIHZhciBzaWduID0gaXNSVEwgPyAxIDogLTE7XG4gIC8qKlxyXG4gICAqIFRyYWNrIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBUcmFjayA9IHtcbiAgICAvKipcclxuICAgICAqIE1ha2UgcHVibGljIHRoZSBzaWduIGRlZmluZWQgbG9jYWxseS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgc2lnbjogc2lnbixcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAgICAgTGF5b3V0ID0gQ29tcG9uZW50cy5MYXlvdXQ7XG4gICAgICBsaXN0ID0gRWxlbWVudHMubGlzdDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogVGhlIHJlc2l6ZSBldmVudCBtdXN0IGJlIHJlZ2lzdGVyZWQgYWZ0ZXIgdGhlIExheW91dCdzIG9uZSBpcyBkb25lLlxyXG4gICAgICovXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghaXNGYWRlKSB7XG4gICAgICAgIHRoaXMuanVtcCgwKTtcbiAgICAgICAgU3BsaWRlLm9uKCdtb3VudGVkIHJlc2l6ZSB1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmp1bXAoU3BsaWRlLmluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogR28gdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAgICogQWZ0ZXIgYXJyaXZpbmcgdGhlcmUsIHRoZSB0cmFjayBpcyBqdW1wIHRvIHRoZSBuZXcgaW5kZXggd2l0aG91dCBhbmltYXRpb24sIG1haW5seSBmb3IgbG9vcCBtb2RlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgZGVzdEluZGV4IC0gQSBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBjYW4gYmUgbmVnYXRpdmUgb3IgZ3JlYXRlciB0aGFuIHNsaWRlcyBsZW5ndGggZm9yIHJlYWNoaW5nIGNsb25lcy5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgbmV3SW5kZXggIC0gQW4gYWN0dWFsIG5ldyBpbmRleC4gVGhleSBhcmUgYWx3YXlzIHNhbWUgaW4gU2xpZGUgYW5kIFJld2luZCBtb2RlLlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzaWxlbnRseSAgLSBJZiB0cnVlLCBzdXBwcmVzcyBlbWl0dGluZyBldmVudHMuXHJcbiAgICAgKi9cbiAgICBnbzogZnVuY3Rpb24gZ28oZGVzdEluZGV4LCBuZXdJbmRleCwgc2lsZW50bHkpIHtcbiAgICAgIHZhciBuZXdQb3NpdGlvbiA9IGdldFRyaW1tZWRQb3NpdGlvbihkZXN0SW5kZXgpO1xuICAgICAgdmFyIHByZXZJbmRleCA9IFNwbGlkZS5pbmRleDsgLy8gUHJldmVudCBhbnkgYWN0aW9ucyB3aGlsZSB0cmFuc2l0aW9uaW5nIGZyb20gdGhlIGxhc3QgaW5kZXggdG8gdGhlIGZpcnN0IG9uZSBmb3IganVtcC5cblxuICAgICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhNT1ZJTkcpICYmIGlzTG9vcFBlbmRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpc0xvb3BQZW5kaW5nID0gZGVzdEluZGV4ICE9PSBuZXdJbmRleDtcblxuICAgICAgaWYgKCFzaWxlbnRseSkge1xuICAgICAgICBTcGxpZGUuZW1pdCgnbW92ZScsIG5ld0luZGV4LCBwcmV2SW5kZXgsIGRlc3RJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLmFicyhuZXdQb3NpdGlvbiAtIHRoaXMucG9zaXRpb24pID49IDEgfHwgaXNGYWRlKSB7XG4gICAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5zdGFydChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIHRoaXMudG9Db29yZChuZXdQb3NpdGlvbiksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvblRyYW5zaXRpb25FbmQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBzaWxlbnRseSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRlc3RJbmRleCAhPT0gcHJldkluZGV4ICYmIFNwbGlkZS5vcHRpb25zLnRyaW1TcGFjZSA9PT0gJ21vdmUnKSB7XG4gICAgICAgICAgQ29tcG9uZW50cy5Db250cm9sbGVyLmdvKGRlc3RJbmRleCArIGRlc3RJbmRleCAtIHByZXZJbmRleCwgc2lsZW50bHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIHNpbGVudGx5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIE1vdmUgdGhlIHRyYWNrIHRvIHRoZSBzcGVjaWZpZWQgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQSBkZXN0aW5hdGlvbiBpbmRleCB3aGVyZSB0aGUgdHJhY2sganVtcHMuXHJcbiAgICAgKi9cbiAgICBqdW1wOiBmdW5jdGlvbiBqdW1wKGluZGV4KSB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZShnZXRUcmltbWVkUG9zaXRpb24oaW5kZXgpKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGxpc3QgcG9zaXRpb24gYnkgQ1NTIHRyYW5zbGF0ZSBwcm9wZXJ0eS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gLSBBIG5ldyBwb3NpdGlvbiB2YWx1ZS5cclxuICAgICAqL1xuICAgIHRyYW5zbGF0ZTogZnVuY3Rpb24gdHJhbnNsYXRlKHBvc2l0aW9uKSB7XG4gICAgICBhcHBseVN0eWxlKGxpc3QsIHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVwiICsgKGlzVmVydGljYWwgPyAnWScgOiAnWCcpICsgXCIoXCIgKyBwb3NpdGlvbiArIFwicHgpXCJcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbmNlbCB0aGUgdHJhbnNpdGlvbiBhbmQgc2V0IHRoZSBsaXN0IHBvc2l0aW9uLlxyXG4gICAgICogQWxzbywgbG9vcCB0aGUgc2xpZGVyIGlmIG5lY2Vzc2FyeS5cclxuICAgICAqL1xuICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgaWYgKFNwbGlkZS5pcyhMT09QKSkge1xuICAgICAgICB0aGlzLnNoaWZ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFbnN1cmUgdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgICAgIHRoaXMudHJhbnNsYXRlKHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBhcHBseVN0eWxlKGxpc3QsIHtcbiAgICAgICAgdHJhbnNpdGlvbjogJydcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFNoaWZ0IHRoZSBzbGlkZXIgaWYgaXQgZXhjZWVkcyBib3JkZXJzIG9uIHRoZSBlZGdlLlxyXG4gICAgICovXG4gICAgc2hpZnQ6IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gYWJzKHRoaXMucG9zaXRpb24pO1xuICAgICAgdmFyIGxlZnQgPSBhYnModGhpcy50b1Bvc2l0aW9uKDApKTtcbiAgICAgIHZhciByaWdodCA9IGFicyh0aGlzLnRvUG9zaXRpb24oU3BsaWRlLmxlbmd0aCkpO1xuICAgICAgdmFyIGlubmVyU2l6ZSA9IHJpZ2h0IC0gbGVmdDtcblxuICAgICAgaWYgKHBvc2l0aW9uIDwgbGVmdCkge1xuICAgICAgICBwb3NpdGlvbiArPSBpbm5lclNpemU7XG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID4gcmlnaHQpIHtcbiAgICAgICAgcG9zaXRpb24gLT0gaW5uZXJTaXplO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRyYW5zbGF0ZShzaWduICogcG9zaXRpb24pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFRyaW0gcmVkdW5kYW50IHNwYWNlcyBvbiB0aGUgbGVmdCBvciByaWdodCBlZGdlIGlmIG5lY2Vzc2FyeS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gLSBQb3NpdGlvbiB2YWx1ZSB0byBiZSB0cmltbWVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUcmltbWVkIHBvc2l0aW9uLlxyXG4gICAgICovXG4gICAgdHJpbTogZnVuY3Rpb24gdHJpbShwb3NpdGlvbikge1xuICAgICAgaWYgKCFTcGxpZGUub3B0aW9ucy50cmltU3BhY2UgfHwgU3BsaWRlLmlzKExPT1ApKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVkZ2UgPSBzaWduICogKExheW91dC50b3RhbFNpemUoKSAtIExheW91dC5zaXplIC0gTGF5b3V0LmdhcCk7XG4gICAgICByZXR1cm4gYmV0d2Vlbihwb3NpdGlvbiwgZWRnZSwgMCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIHRoZSBjbG9zZXN0IHNsaWRlIGluZGV4IGZyb20gdGhlIGdpdmVuIHBvc2l0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgcG9zaXRpb24gY29udmVydGVkIHRvIGFuIHNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgY2xvc2VzdCBzbGlkZSBpbmRleC5cclxuICAgICAqL1xuICAgIHRvSW5kZXg6IGZ1bmN0aW9uIHRvSW5kZXgocG9zaXRpb24pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIG1pbkRpc3RhbmNlID0gSW5maW5pdHk7XG4gICAgICBFbGVtZW50cy5nZXRTbGlkZXModHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgdmFyIHNsaWRlSW5kZXggPSBTbGlkZS5pbmRleDtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gYWJzKF90aGlzMi50b1Bvc2l0aW9uKHNsaWRlSW5kZXgpIC0gcG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICBpbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBjb29yZGluYXRlcyBvYmplY3QgYnkgdGhlIGdpdmVuIHBvc2l0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgcG9zaXRpb24gdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIEEgY29vcmRpbmF0ZXMgb2JqZWN0LlxyXG4gICAgICovXG4gICAgdG9Db29yZDogZnVuY3Rpb24gdG9Db29yZChwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogaXNWZXJ0aWNhbCA/IDAgOiBwb3NpdGlvbixcbiAgICAgICAgeTogaXNWZXJ0aWNhbCA/IHBvc2l0aW9uIDogMFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHRyYWNrIHBvc2l0aW9uIGJ5IGEgc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIENhbGN1bGF0ZWQgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICB0b1Bvc2l0aW9uOiBmdW5jdGlvbiB0b1Bvc2l0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBMYXlvdXQudG90YWxTaXplKGluZGV4KSAtIExheW91dC5zbGlkZVNpemUoaW5kZXgpIC0gTGF5b3V0LmdhcDtcbiAgICAgIHJldHVybiBzaWduICogKHBvc2l0aW9uICsgdGhpcy5vZmZzZXQoaW5kZXgpKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgb2Zmc2V0IHZhbHVlLCBjb25zaWRlcmluZyBkaXJlY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIE9mZnNldCBhbW91bnQuXHJcbiAgICAgKi9cbiAgICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChpbmRleCkge1xuICAgICAgdmFyIGZvY3VzID0gU3BsaWRlLm9wdGlvbnMuZm9jdXM7XG4gICAgICB2YXIgc2xpZGVTaXplID0gTGF5b3V0LnNsaWRlU2l6ZShpbmRleCk7XG5cbiAgICAgIGlmIChmb2N1cyA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcmV0dXJuIC0oTGF5b3V0LnNpemUgLSBzbGlkZVNpemUpIC8gMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC0ocGFyc2VJbnQoZm9jdXMpIHx8IDApICogKHNsaWRlU2l6ZSArIExheW91dC5nYXApO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbi5cclxuICAgICAqIFRoaXMgcmV0dXJucyB0aGUgY29ycmVjdCBwb3NpdGlvbiBldmVuIHdoaWxlIHRyYW5zaXRpb25pbmcgYnkgQ1NTLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBDdXJyZW50IHBvc2l0aW9uLlxyXG4gICAgICovXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgdmFyIHByb3AgPSBpc1ZlcnRpY2FsID8gJ3RvcCcgOiBpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICByZXR1cm4gZ2V0UmVjdChsaXN0KVtwcm9wXSAtIChnZXRSZWN0KEVsZW1lbnRzLnRyYWNrKVtwcm9wXSAtIExheW91dC5wYWRkaW5nW3Byb3BdICogc2lnbik7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuZXZlciBzbGlkZXMgYXJyaXZlIGF0IGEgZGVzdGluYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gIGRlc3RJbmRleCAtIEEgZGVzdGluYXRpb24gaW5kZXguXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBuZXdJbmRleCAgLSBBIG5ldyBpbmRleC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIHByZXZJbmRleCAtIEEgcHJldmlvdXMgaW5kZXguXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzaWxlbnRseSAgLSBJZiB0cnVlLCBzdXBwcmVzcyBlbWl0dGluZyBldmVudHMuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgc2lsZW50bHkpIHtcbiAgICBhcHBseVN0eWxlKGxpc3QsIHtcbiAgICAgIHRyYW5zaXRpb246ICcnXG4gICAgfSk7XG4gICAgaXNMb29wUGVuZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKCFpc0ZhZGUpIHtcbiAgICAgIFRyYWNrLmp1bXAobmV3SW5kZXgpO1xuICAgIH1cblxuICAgIGlmICghc2lsZW50bHkpIHtcbiAgICAgIFNwbGlkZS5lbWl0KCdtb3ZlZCcsIG5ld0luZGV4LCBwcmV2SW5kZXgsIGRlc3RJbmRleCk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIENvbnZlcnQgaW5kZXggdG8gdGhlIHRyaW1tZWQgcG9zaXRpb24uXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVHJpbW1lZCBwb3NpdGlvbi5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFRyaW1tZWRQb3NpdGlvbihpbmRleCkge1xuICAgIHJldHVybiBUcmFjay50cmltKFRyYWNrLnRvUG9zaXRpb24oaW5kZXgpKTtcbiAgfVxuXG4gIHJldHVybiBUcmFjaztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvY2xvbmVzL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY2xvbmluZyBzb21lIHNsaWRlcyBmb3IgXCJsb29wXCIgbW9kZSBvZiB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNsb25pbmcgc29tZSBzbGlkZXMgZm9yIFwibG9vcFwiIG1vZGUgb2YgdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgY2xvbmVzID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgaW5mb3JtYXRpb24gb2YgYWxsIGNsb25lcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtBcnJheX1cclxuICAgKi9cbiAgdmFyIGNsb25lcyA9IFtdO1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgY3VycmVudCBjbG9uZSBjb3VudCBvbiBvbmUgc2lkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG5cbiAgdmFyIGNsb25lQ291bnQgPSAwO1xuICAvKipcclxuICAgKiBLZWVwIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogQ2xvbmVzIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDbG9uZXMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoU3BsaWRlLmlzKExPT1ApKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgU3BsaWRlLm9uKCdyZWZyZXNoOmJlZm9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH0pLm9uKCdyZWZyZXNoJywgaW5pdCkub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoY2xvbmVDb3VudCAhPT0gZ2V0Q2xvbmVDb3VudCgpKSB7XG4gICAgICAgICAgICAvLyBEZXN0cm95IGJlZm9yZSByZWZyZXNoIG5vdCB0byBjb2xsZWN0IGNsb25lcyBieSB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxuICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICBTcGxpZGUucmVmcmVzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBkb21fcmVtb3ZlKGNsb25lcyk7XG4gICAgICBjbG9uZXMgPSBbXTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYWxsIGNsb25lcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50W119IC0gQ2xvbmVkIGVsZW1lbnRzLlxyXG4gICAgICovXG4gICAgZ2V0IGNsb25lcygpIHtcbiAgICAgIHJldHVybiBjbG9uZXM7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGNsb25lIGxlbmd0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSBsZW5ndGggb2YgY2xvbmVzLlxyXG4gICAgICovXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBjbG9uZXMubGVuZ3RoO1xuICAgIH1cblxuICB9O1xuICAvKipcclxuICAgKiBJbml0aWFsaXphdGlvbi5cclxuICAgKi9cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIENsb25lcy5kZXN0cm95KCk7XG4gICAgY2xvbmVDb3VudCA9IGdldENsb25lQ291bnQoKTtcbiAgICBnZW5lcmF0ZUNsb25lcyhjbG9uZUNvdW50KTtcbiAgfVxuICAvKipcclxuICAgKiBHZW5lcmF0ZSBhbmQgYXBwZW5kL3ByZXBlbmQgY2xvbmVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IC0gVGhlIGhhbGYgbnVtYmVyIG9mIGNsb25lcy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2xvbmVzKGNvdW50KSB7XG4gICAgdmFyIGxlbmd0aCA9IEVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgcmVnaXN0ZXIgPSBFbGVtZW50cy5yZWdpc3RlcjtcblxuICAgIGlmIChsZW5ndGgpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBFbGVtZW50cy5zbGlkZXM7XG5cbiAgICAgIHdoaWxlIChzbGlkZXMubGVuZ3RoIDwgY291bnQpIHtcbiAgICAgICAgc2xpZGVzID0gc2xpZGVzLmNvbmNhdChzbGlkZXMpO1xuICAgICAgfSAvLyBDbG9uZXMgYWZ0ZXIgdGhlIGxhc3QgZWxlbWVudC5cblxuXG4gICAgICBzbGlkZXMuc2xpY2UoMCwgY291bnQpLmZvckVhY2goZnVuY3Rpb24gKGVsbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNsb25lID0gY2xvbmVEZWVwbHkoZWxtKTtcbiAgICAgICAgYXBwZW5kKEVsZW1lbnRzLmxpc3QsIGNsb25lKTtcbiAgICAgICAgY2xvbmVzLnB1c2goY2xvbmUpO1xuICAgICAgICByZWdpc3RlcihjbG9uZSwgaW5kZXggKyBsZW5ndGgsIGluZGV4ICUgbGVuZ3RoKTtcbiAgICAgIH0pOyAvLyBDbG9uZXMgYmVmb3JlIHRoZSBmaXJzdCBlbGVtZW50LlxuXG4gICAgICBzbGlkZXMuc2xpY2UoLWNvdW50KS5mb3JFYWNoKGZ1bmN0aW9uIChlbG0sIGluZGV4KSB7XG4gICAgICAgIHZhciBjbG9uZSA9IGNsb25lRGVlcGx5KGVsbSk7XG4gICAgICAgIGJlZm9yZShjbG9uZSwgc2xpZGVzWzBdKTtcbiAgICAgICAgY2xvbmVzLnB1c2goY2xvbmUpO1xuICAgICAgICByZWdpc3RlcihjbG9uZSwgaW5kZXggLSBjb3VudCwgKGxlbmd0aCArIGluZGV4IC0gY291bnQgJSBsZW5ndGgpICUgbGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gaGFsZiBjb3VudCBvZiBjbG9uZXMgdG8gYmUgZ2VuZXJhdGVkLlxyXG4gICAqIENsb25lIGNvdW50IGlzIGRldGVybWluZWQgYnk6XHJcbiAgICogLSBcImNsb25lc1wiIHZhbHVlIGluIHRoZSBvcHRpb25zLlxyXG4gICAqIC0gTnVtYmVyIG9mIHNsaWRlcyB0aGF0IGNhbiBiZSBwbGFjZWQgaW4gYSB2aWV3IGluIFwiZml4ZWRcIiBtb2RlLlxyXG4gICAqIC0gTWF4IHBhZ2VzIGEgZmxpY2sgYWN0aW9uIGNhbiBtb3ZlLlxyXG4gICAqIC0gV2hldGhlciB0aGUgc2xpZGUgbGVuZ3RoIGlzIGVub3VnaCBmb3IgcGVyUGFnZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gLSBDb3VudCBmb3IgY2xvbmVzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q2xvbmVDb3VudCgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xvbmVzKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jbG9uZXM7XG4gICAgfSAvLyBVc2UgdGhlIHNsaWRlIGxlbmd0aCBpbiBhdXRvV2lkdGggbW9kZSBiZWNhdXNlIHRoZSBudW1iZXIgY2Fubm90IGJlIGNhbGN1bGF0ZWQuXG5cblxuICAgIHZhciBiYXNlQ291bnQgPSBvcHRpb25zLmF1dG9XaWR0aCB8fCBvcHRpb25zLmF1dG9IZWlnaHQgPyBFbGVtZW50cy5sZW5ndGggOiBvcHRpb25zLnBlclBhZ2U7XG4gICAgdmFyIGRpbWVuc2lvbiA9IG9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEIgPyAnSGVpZ2h0JyA6ICdXaWR0aCc7XG4gICAgdmFyIGZpeGVkU2l6ZSA9IHRvUGl4ZWwoU3BsaWRlLnJvb3QsIG9wdGlvbnNbXCJmaXhlZFwiICsgZGltZW5zaW9uXSk7XG5cbiAgICBpZiAoZml4ZWRTaXplKSB7XG4gICAgICAvLyBSb3VnaGx5IGNhbGN1bGF0ZSB0aGUgY291bnQuIFRoaXMgbmVlZHMgbm90IHRvIGJlIHN0cmljdC5cbiAgICAgIGJhc2VDb3VudCA9IE1hdGguY2VpbChFbGVtZW50cy50cmFja1tcImNsaWVudFwiICsgZGltZW5zaW9uXSAvIGZpeGVkU2l6ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VDb3VudCAqIChvcHRpb25zLmRyYWcgPyBvcHRpb25zLmZsaWNrTWF4UGFnZXMgKyAxIDogMSk7XG4gIH1cbiAgLyoqXHJcbiAgICogQ2xvbmUgZGVlcGx5IHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbG0gLSBBbiBlbGVtZW50IGJlaW5nIGR1cGxpY2F0ZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOb2RlfSAtIEEgY2xvbmVkIG5vZGUoZWxlbWVudCkuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBjbG9uZURlZXBseShlbG0pIHtcbiAgICB2YXIgY2xvbmUgPSBlbG0uY2xvbmVOb2RlKHRydWUpO1xuICAgIGFkZENsYXNzKGNsb25lLCBTcGxpZGUuY2xhc3Nlcy5jbG9uZSk7IC8vIElEIHNob3VsZCBub3QgYmUgZHVwbGljYXRlZC5cblxuICAgIHJlbW92ZUF0dHJpYnV0ZShjbG9uZSwgJ2lkJyk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG5cbiAgcmV0dXJuIENsb25lcztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L2RpcmVjdGlvbnMvaG9yaXpvbnRhbC5qc1xuLyoqXHJcbiAqIFRoZSByZXNvbHZlciBjb21wb25lbnQgZm9yIGhvcml6b250YWwgbGF5b3V0LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgaG9yaXpvbnRhbCBsYXlvdXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSByZXNvbHZlciBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGhvcml6b250YWwgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBLZWVwIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAvKipcclxuICAgKiBLZWVwIHRoZSB0cmFjayBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIHRyYWNrO1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBsYXRlc3Qgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBNYXJnaW4gcHJvcGVydHkgbmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXG4gICAgbWFyZ2luOiAnbWFyZ2luJyArIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMID8gJ0xlZnQnIDogJ1JpZ2h0JyksXG5cbiAgICAvKipcclxuICAgICAqIEFsd2F5cyAwIGJlY2F1c2UgdGhlIGhlaWdodCB3aWxsIGJlIGRldGVybWluZWQgYnkgaW5uZXIgY29udGVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xuICAgIGhlaWdodDogMCxcblxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemUgZ2FwIGFuZCBwYWRkaW5nLlxyXG4gICAgICogVGhpcyBtdXN0IGJlIGNhbGxlZCBvbiBpbml0LlxyXG4gICAgICovXG4gICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB0cmFjayA9IEVsZW1lbnRzLnRyYWNrO1xuICAgICAgdGhpcy5nYXAgPSB0b1BpeGVsKHJvb3QsIG9wdGlvbnMuZ2FwKTtcbiAgICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgICAgdmFyIGxlZnQgPSB0b1BpeGVsKHJvb3QsIHBhZGRpbmcubGVmdCB8fCBwYWRkaW5nKTtcbiAgICAgIHZhciByaWdodCA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy5yaWdodCB8fCBwYWRkaW5nKTtcbiAgICAgIHRoaXMucGFkZGluZyA9IHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0XG4gICAgICB9O1xuICAgICAgYXBwbHlTdHlsZSh0cmFjaywge1xuICAgICAgICBwYWRkaW5nTGVmdDogdW5pdChsZWZ0KSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiB1bml0KHJpZ2h0KVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRvdGFsIHdpZHRoIGZyb20gdGhlIGxlZnQgb2YgdGhlIGxpc3QgdG8gdGhlIHJpZ2h0IG9mIHRoZSBzbGlkZSBzcGVjaWZpZWQgYnkgdGhlIHByb3ZpZGVkIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIE9wdGlvbmFsLiBBIHNsaWRlIGluZGV4LiBJZiB1bmRlZmluZWQsIHRvdGFsIHdpZHRoIG9mIHRoZSBzbGlkZXIgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVG90YWwgd2lkdGggdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNwZWNpZmllZCBzbGlkZSwgb3IgMCBmb3IgYW4gaW52YWxpZCBpbmRleC5cclxuICAgICAqL1xuICAgIHRvdGFsV2lkdGg6IGZ1bmN0aW9uIHRvdGFsV2lkdGgoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGluZGV4ID0gU3BsaWRlLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBTbGlkZSA9IEVsZW1lbnRzLmdldFNsaWRlKGluZGV4KTtcbiAgICAgIHZhciB3aWR0aCA9IDA7XG5cbiAgICAgIGlmIChTbGlkZSkge1xuICAgICAgICB2YXIgc2xpZGVSZWN0ID0gZ2V0UmVjdChTbGlkZS5zbGlkZSk7XG4gICAgICAgIHZhciBsaXN0UmVjdCA9IGdldFJlY3QoRWxlbWVudHMubGlzdCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEwpIHtcbiAgICAgICAgICB3aWR0aCA9IGxpc3RSZWN0LnJpZ2h0IC0gc2xpZGVSZWN0LmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGggPSBzbGlkZVJlY3QucmlnaHQgLSBsaXN0UmVjdC5sZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgd2lkdGggKz0gdGhpcy5nYXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlIHdpZHRoIGluIHB4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgc2xpZGUgd2lkdGguXHJcbiAgICAgKi9cbiAgICBzbGlkZVdpZHRoOiBmdW5jdGlvbiBzbGlkZVdpZHRoKGluZGV4KSB7XG4gICAgICBpZiAob3B0aW9ucy5hdXRvV2lkdGgpIHtcbiAgICAgICAgdmFyIFNsaWRlID0gRWxlbWVudHMuZ2V0U2xpZGUoaW5kZXgpO1xuICAgICAgICByZXR1cm4gU2xpZGUgPyBTbGlkZS5zbGlkZS5vZmZzZXRXaWR0aCA6IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMuZml4ZWRXaWR0aCB8fCAodGhpcy53aWR0aCArIHRoaXMuZ2FwKSAvIG9wdGlvbnMucGVyUGFnZSAtIHRoaXMuZ2FwO1xuICAgICAgcmV0dXJuIHRvUGl4ZWwocm9vdCwgd2lkdGgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGUgaGVpZ2h0IGluIHB4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgc2xpZGUgaGVpZ2h0LlxyXG4gICAgICovXG4gICAgc2xpZGVIZWlnaHQ6IGZ1bmN0aW9uIHNsaWRlSGVpZ2h0KCkge1xuICAgICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IG9wdGlvbnMuZml4ZWRIZWlnaHQgfHwgdGhpcy53aWR0aCAqIG9wdGlvbnMuaGVpZ2h0UmF0aW87XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCBoZWlnaHQpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBzbGlkZXIgd2lkdGggd2l0aG91dCBwYWRkaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBDdXJyZW50IHNsaWRlciB3aWR0aC5cclxuICAgICAqL1xuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgIHJldHVybiB0cmFjay5jbGllbnRXaWR0aCAtIHRoaXMucGFkZGluZy5sZWZ0IC0gdGhpcy5wYWRkaW5nLnJpZ2h0O1xuICAgIH1cblxuICB9O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvZGlyZWN0aW9ucy92ZXJ0aWNhbC5qc1xuLyoqXHJcbiAqIFRoZSByZXNvbHZlciBjb21wb25lbnQgZm9yIHZlcnRpY2FsIGxheW91dC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuLyoqXHJcbiAqIFRoZSByZXNvbHZlciBjb21wb25lbnQgZm9yIHZlcnRpY2FsIGxheW91dC5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIHJlc29sdmVyIG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgdmVydGljYWwgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBLZWVwIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAvKipcclxuICAgKiBLZWVwIHRoZSB0cmFjayBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIHRyYWNrO1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBsYXRlc3Qgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciBvcHRpb25zO1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogTWFyZ2luIHByb3BlcnR5IG5hbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xuICAgIG1hcmdpbjogJ21hcmdpbkJvdHRvbScsXG5cbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemF0aW9uLlxyXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmVzaXplIGdhcCBhbmQgcGFkZGluZy5cclxuICAgICAqIFRoaXMgbXVzdCBiZSBjYWxsZWQgb24gaW5pdC5cclxuICAgICAqL1xuICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdHJhY2sgPSBFbGVtZW50cy50cmFjaztcbiAgICAgIHRoaXMuZ2FwID0gdG9QaXhlbChyb290LCBvcHRpb25zLmdhcCk7XG4gICAgICB2YXIgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcbiAgICAgIHZhciB0b3AgPSB0b1BpeGVsKHJvb3QsIHBhZGRpbmcudG9wIHx8IHBhZGRpbmcpO1xuICAgICAgdmFyIGJvdHRvbSA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy5ib3R0b20gfHwgcGFkZGluZyk7XG4gICAgICB0aGlzLnBhZGRpbmcgPSB7XG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBib3R0b206IGJvdHRvbVxuICAgICAgfTtcbiAgICAgIGFwcGx5U3R5bGUodHJhY2ssIHtcbiAgICAgICAgcGFkZGluZ1RvcDogdW5pdCh0b3ApLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiB1bml0KGJvdHRvbSlcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0b3RhbCBoZWlnaHQgZnJvbSB0aGUgdG9wIG9mIHRoZSBsaXN0IHRvIHRoZSBib3R0b20gb2YgdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgcHJvdmlkZWQgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gT3B0aW9uYWwuIEEgc2xpZGUgaW5kZXguIElmIHVuZGVmaW5lZCwgdG90YWwgaGVpZ2h0IG9mIHRoZSBzbGlkZXIgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVG90YWwgaGVpZ2h0IHRvIHRoZSBib3R0b20gb2YgdGhlIHNwZWNpZmllZCBzbGlkZSwgb3IgMCBmb3IgYW4gaW52YWxpZCBpbmRleC5cclxuICAgICAqL1xuICAgIHRvdGFsSGVpZ2h0OiBmdW5jdGlvbiB0b3RhbEhlaWdodChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5kZXggPSBTcGxpZGUubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIFNsaWRlID0gRWxlbWVudHMuZ2V0U2xpZGUoaW5kZXgpO1xuXG4gICAgICBpZiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIGdldFJlY3QoU2xpZGUuc2xpZGUpLmJvdHRvbSAtIGdldFJlY3QoRWxlbWVudHMubGlzdCkudG9wICsgdGhpcy5nYXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGUgd2lkdGggaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSB3aWR0aC5cclxuICAgICAqL1xuICAgIHNsaWRlV2lkdGg6IGZ1bmN0aW9uIHNsaWRlV2lkdGgoKSB7XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCBvcHRpb25zLmZpeGVkV2lkdGggfHwgdGhpcy53aWR0aCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZSBoZWlnaHQgaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSBoZWlnaHQuXHJcbiAgICAgKi9cbiAgICBzbGlkZUhlaWdodDogZnVuY3Rpb24gc2xpZGVIZWlnaHQoaW5kZXgpIHtcbiAgICAgIGlmIChvcHRpb25zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgdmFyIFNsaWRlID0gRWxlbWVudHMuZ2V0U2xpZGUoaW5kZXgpO1xuICAgICAgICByZXR1cm4gU2xpZGUgPyBTbGlkZS5zbGlkZS5vZmZzZXRIZWlnaHQgOiAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5maXhlZEhlaWdodCB8fCAodGhpcy5oZWlnaHQgKyB0aGlzLmdhcCkgLyBvcHRpb25zLnBlclBhZ2UgLSB0aGlzLmdhcDtcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIGhlaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlciB3aWR0aCB3aXRob3V0IHBhZGRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEN1cnJlbnQgc2xpZGVyIHdpZHRoLlxyXG4gICAgICovXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRyYWNrLmNsaWVudFdpZHRoO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBzbGlkZSBoZWlnaHQgd2l0aG91dCBwYWRkaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBTbGlkZXIgaGVpZ2h0LlxyXG4gICAgICovXG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCB0aGlzLndpZHRoICogb3B0aW9ucy5oZWlnaHRSYXRpbztcbiAgICAgIGV4aXN0KGhlaWdodCwgJ1wiaGVpZ2h0XCIgb3IgXCJoZWlnaHRSYXRpb1wiIGlzIG1pc3NpbmcuJyk7XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCBoZWlnaHQpIC0gdGhpcy5wYWRkaW5nLnRvcCAtIHRoaXMucGFkZGluZy5ib3R0b207XG4gICAgfVxuXG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy91dGlscy90aW1lLmpzXG4vKipcclxuICogQSBwYWNrYWdlIG9mIHV0aWxpdHkgZnVuY3Rpb25zIHJlbGF0ZWQgd2l0aCB0aW1lLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBTaW1wbGUgdGhyb3R0bGUgZnVuY3Rpb24gdGhhdCBjb250cm9scyBob3cgb2Z0ZW4gdGhlIGdpdmVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gQSBmdW5jdGlvbiB0byBiZSB0aHJvdHRsZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgIHdhaXQgLSBUaW1lIGluIG1pbGxpc2Vjb25kIGZvciBpbnRlcnZhbCBvZiBleGVjdXRpb24uXHJcbiAqXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAtIEEgZGVib3VuY2VkIGZ1bmN0aW9uLlxyXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgdmFyIHRpbWVvdXQ7IC8vIERlY2xhcmUgZnVuY3Rpb24gYnkgdGhlIFwiZnVuY3Rpb25cIiBrZXl3b3JkIHRvIHByZXZlbnQgXCJ0aGlzXCIgZnJvbSBiZWluZyBpbmhlcml0ZWQuXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuYygpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIH0sIHdhaXQpO1xuICAgIH1cbiAgfTtcbn1cbi8qKlxyXG4gKiBDdXN0b20gc2V0SW50ZXJ2YWwgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyBwcm9ncmVzcyByYXRlIGFzIGNhbGxiYWNrLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgZXZlcnkgdGltZSB0aGUgaW50ZXJ2YWwgdGltZSBwYXNzZXMuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgIGludGVydmFsIC0gSW50ZXJ2YWwgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9ncmVzcyAtIEEgY2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbmV2ZXIgdGhlIHByb2dyZXNzIGdvZXMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyBwbGF5KCkgYW5kIHBhdXNlKCkgZnVuY3Rpb25zLlxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlSW50ZXJ2YWwoY2FsbGJhY2ssIGludGVydmFsLCBwcm9ncmVzcykge1xuICB2YXIgX3dpbmRvdyA9IHdpbmRvdyxcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IF93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICB2YXIgc3RhcnQsXG4gICAgICBlbGFwc2UsXG4gICAgICByYXRlLFxuICAgICAgX3BhdXNlID0gdHJ1ZTtcblxuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XG4gICAgaWYgKCFfcGF1c2UpIHtcbiAgICAgIGlmICghc3RhcnQpIHtcbiAgICAgICAgc3RhcnQgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgaWYgKHJhdGUgJiYgcmF0ZSA8IDEpIHtcbiAgICAgICAgICBzdGFydCAtPSByYXRlICogaW50ZXJ2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWxhcHNlID0gdGltZXN0YW1wIC0gc3RhcnQ7XG4gICAgICByYXRlID0gZWxhcHNlIC8gaW50ZXJ2YWw7XG5cbiAgICAgIGlmIChlbGFwc2UgPj0gaW50ZXJ2YWwpIHtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICByYXRlID0gMTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2dyZXNzKSB7XG4gICAgICAgIHByb2dyZXNzKHJhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgX3BhdXNlID0gdHJ1ZTtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9LFxuICAgIHBsYXk6IGZ1bmN0aW9uIHBsYXkocmVzZXQpIHtcbiAgICAgIHN0YXJ0ID0gMDtcblxuICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgIHJhdGUgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3BhdXNlKSB7XG4gICAgICAgIF9wYXVzZSA9IGZhbHNlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGluZyBzbGlkZSBsYXlvdXRzIGFuZCB0aGVpciBzaXplcy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGluZyBzbGlkZSBsYXlvdXRzIGFuZCB0aGVpciBzaXplcy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGxheW91dCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyB2ZXJ0aWNhbCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNWZXJ0aWNhbCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAvKipcclxuICAgKiBMYXlvdXQgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIExheW91dCA9IG9iamVjdF9hc3NpZ24oe1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgYmluZCgpO1xuICAgICAgaW5pdCgpOyAvLyBUaGUgd29yZCBcInNpemVcIiBtZWFucyB3aWR0aCBmb3IgYSBob3Jpem9udGFsIHNsaWRlciBhbmQgaGVpZ2h0IGZvciBhIHZlcnRpY2FsIHNsaWRlci5cblxuICAgICAgdGhpcy50b3RhbFNpemUgPSBpc1ZlcnRpY2FsID8gdGhpcy50b3RhbEhlaWdodCA6IHRoaXMudG90YWxXaWR0aDtcbiAgICAgIHRoaXMuc2xpZGVTaXplID0gaXNWZXJ0aWNhbCA/IHRoaXMuc2xpZGVIZWlnaHQgOiB0aGlzLnNsaWRlV2lkdGg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveSB0aGUgY29tcG9uZW50LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShbRWxlbWVudHMubGlzdCwgRWxlbWVudHMudHJhY2tdLCAnc3R5bGUnKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlciBoZWlnaHQgb24gdGhlIHZlcnRpY2FsIG1vZGUgb3Igd2lkdGggb24gdGhlIGhvcml6b250YWwgbW9kZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBpc1ZlcnRpY2FsID8gdGhpcy5oZWlnaHQgOiB0aGlzLndpZHRoO1xuICAgIH1cblxuICB9LCBpc1ZlcnRpY2FsID8gdmVydGljYWwoU3BsaWRlLCBDb21wb25lbnRzKSA6IGhvcml6b250YWwoU3BsaWRlLCBDb21wb25lbnRzKSk7XG4gIC8qKlxyXG4gICAqIEluaXQgc2xpZGVyIHN0eWxlcyBhY2NvcmRpbmcgdG8gb3B0aW9ucy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIExheW91dC5pbml0KCk7XG4gICAgYXBwbHlTdHlsZShTcGxpZGUucm9vdCwge1xuICAgICAgbWF4V2lkdGg6IHVuaXQoU3BsaWRlLm9wdGlvbnMud2lkdGgpXG4gICAgfSk7XG4gICAgRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIFNsaWRlLnNsaWRlLnN0eWxlW0xheW91dC5tYXJnaW5dID0gdW5pdChMYXlvdXQuZ2FwKTtcbiAgICB9KTtcbiAgICByZXNpemUoKTtcbiAgfVxuICAvKipcclxuICAgKiBMaXN0ZW4gdGhlIHJlc2l6ZSBuYXRpdmUgZXZlbnQgd2l0aCB0aHJvdHRsZS5cclxuICAgKiBJbml0aWFsaXplIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIG9yIG9wdGlvbnMgYXJlIHVwZGF0ZWQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIFNwbGlkZS5vbigncmVzaXplIGxvYWQnLCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgICBTcGxpZGUuZW1pdCgncmVzaXplJyk7XG4gICAgfSwgU3BsaWRlLm9wdGlvbnMudGhyb3R0bGUpLCB3aW5kb3cpLm9uKCdyZXNpemUnLCByZXNpemUpLm9uKCd1cGRhdGVkIHJlZnJlc2gnLCBpbml0KTtcbiAgfVxuICAvKipcclxuICAgKiBSZXNpemUgdGhlIHRyYWNrIGFuZCBzbGlkZSBlbGVtZW50cy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgIExheW91dC5yZXNpemUoKTtcbiAgICBhcHBseVN0eWxlKEVsZW1lbnRzLnRyYWNrLCB7XG4gICAgICBoZWlnaHQ6IHVuaXQoTGF5b3V0LmhlaWdodClcbiAgICB9KTtcbiAgICB2YXIgc2xpZGVIZWlnaHQgPSBvcHRpb25zLmF1dG9IZWlnaHQgPyBudWxsIDogdW5pdChMYXlvdXQuc2xpZGVIZWlnaHQoKSk7XG4gICAgRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIGFwcGx5U3R5bGUoU2xpZGUuY29udGFpbmVyLCB7XG4gICAgICAgIGhlaWdodDogc2xpZGVIZWlnaHRcbiAgICAgIH0pO1xuICAgICAgYXBwbHlTdHlsZShTbGlkZS5zbGlkZSwge1xuICAgICAgICB3aWR0aDogb3B0aW9ucy5hdXRvV2lkdGggPyBudWxsIDogdW5pdChMYXlvdXQuc2xpZGVXaWR0aChTbGlkZS5pbmRleCkpLFxuICAgICAgICBoZWlnaHQ6IFNsaWRlLmNvbnRhaW5lciA/IG51bGwgOiBzbGlkZUhlaWdodFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgU3BsaWRlLmVtaXQoJ3Jlc2l6ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBMYXlvdXQ7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2RyYWcvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBzdXBwb3J0aW5nIG1vdXNlIGRyYWcgYW5kIHN3aXBlLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxudmFyIGRyYWdfYWJzID0gTWF0aC5hYnM7XG4vKipcclxuICogSWYgdGhlIGFic29sdXRlIHZlbG9jaXR5IGlzIGdyZWF0ZXIgdGhhbnQgdGhpcyB2YWx1ZSxcclxuICogYSBzbGlkZXIgYWx3YXlzIGdvZXMgdG8gYSBkaWZmZXJlbnQgc2xpZGUgYWZ0ZXIgZHJhZywgbm90IGFsbG93ZWQgdG8gc3RheSBvbiBhIGN1cnJlbnQgc2xpZGUuXHJcbiAqL1xuXG52YXIgTUlOX1ZFTE9DSVRZID0gMC4xO1xuLyoqXHJcbiAqIEFkanVzdCBob3cgbXVjaCB0aGUgdHJhY2sgY2FuIGJlIHB1bGxlZCBvbiB0aGUgZmlyc3Qgb3IgbGFzdCBwYWdlLlxyXG4gKiBUaGUgbGFyZ2VyIG51bWJlciB0aGlzIGlzLCB0aGUgZmFydGhlciB0aGUgdHJhY2sgbW92ZXMuXHJcbiAqIFRoaXMgc2hvdWxkIGJlIGFyb3VuZCA1IC0gOS5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBGUklDVElPTl9SRURVQ0VSID0gNztcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IHN1cHBvcnRpbmcgbW91c2UgZHJhZyBhbmQgc3dpcGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBkcmFnID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIE1vdmUgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIFRyYWNrID0gQ29tcG9uZW50cy5UcmFjaztcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIENvbnRyb2xsZXIgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQ29udHJvbGxlciA9IENvbXBvbmVudHMuQ29udHJvbGxlcjtcbiAgLyoqXHJcbiAgICogQ29vcmRpbmF0ZSBvZiB0aGUgdHJhY2sgb24gc3RhcnRpbmcgZHJhZy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIHN0YXJ0Q29vcmQ7XG4gIC8qKlxyXG4gICAqIEFuYWx5emVkIGluZm8gb24gc3RhcnRpbmcgZHJhZy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cclxuICAgKi9cblxuICB2YXIgc3RhcnRJbmZvO1xuICAvKipcclxuICAgKiBBbmFseXplZCBpbmZvIGJlaW5nIHVwZGF0ZWQgd2hpbGUgZHJhZ2dpbmcvc3dpcGluZy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIGN1cnJlbnRJbmZvO1xuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBzbGlkZXMgYXJlIGJlaW5nIGRyYWdnZWQgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzRHJhZ2dpbmc7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciBkaXJlY3Rpb24gaXMgdmVydGljYWwgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzVmVydGljYWwgPSBTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgLyoqXHJcbiAgICogQXhpcyBmb3IgdGhlIGRpcmVjdGlvbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG5cbiAgdmFyIGF4aXMgPSBpc1ZlcnRpY2FsID8gJ3knIDogJ3gnO1xuICAvKipcclxuICAgKiBEcmFnIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBEcmFnID0ge1xuICAgIC8qKlxyXG4gICAgICogV2hldGhlciBkcmFnZ2luZyBpcyBkaXNhYmxlZCBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogZmFsc2UsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gICAgICB2YXIgdHJhY2sgPSBFbGVtZW50cy50cmFjaztcbiAgICAgIFNwbGlkZS5vbigndG91Y2hzdGFydCBtb3VzZWRvd24nLCBzdGFydCwgdHJhY2spLm9uKCd0b3VjaG1vdmUgbW91c2Vtb3ZlJywgbW92ZSwgdHJhY2ssIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pLm9uKCd0b3VjaGVuZCB0b3VjaGNhbmNlbCBtb3VzZWxlYXZlIG1vdXNldXAgZHJhZ2VuZCcsIGVuZCwgdHJhY2spLm9uKCdtb3VudGVkIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFByZXZlbnQgZHJhZ2dpbmcgYW4gaW1hZ2Ugb3IgYW5jaG9yIGl0c2VsZi5cbiAgICAgICAgZWFjaChFbGVtZW50cy5saXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZywgYScpLCBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgICAgU3BsaWRlLm9mZignZHJhZ3N0YXJ0JywgZWxtKS5vbignZHJhZ3N0YXJ0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9LCBlbG0sIHtcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkub24oJ21vdW50ZWQgdXBkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZGlzYWJsZWQgPSAhU3BsaWRlLm9wdGlvbnMuZHJhZztcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHRyYWNrIHN0YXJ0cyB0byBiZSBkcmFnZ2VkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fE1vdXNlRXZlbnR9IGUgLSBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQgb2JqZWN0LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHN0YXJ0KGUpIHtcbiAgICBpZiAoIURyYWcuZGlzYWJsZWQgJiYgIWlzRHJhZ2dpbmcpIHtcbiAgICAgIC8vIFRoZXNlIHByYW1zIGFyZSB1c2VkIHRvIGV2YWx1YXRlIHdoZXRoZXIgdGhlIHNsaWRlciBzaG91bGQgc3RhcnQgbW92aW5nLlxuICAgICAgaW5pdChlKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBwYXJhbWV0ZXJzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fE1vdXNlRXZlbnR9IGUgLSBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQgb2JqZWN0LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdChlKSB7XG4gICAgc3RhcnRDb29yZCA9IFRyYWNrLnRvQ29vcmQoVHJhY2sucG9zaXRpb24pO1xuICAgIHN0YXJ0SW5mbyA9IGFuYWx5emUoZSwge30pO1xuICAgIGN1cnJlbnRJbmZvID0gc3RhcnRJbmZvO1xuICB9XG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGlsZSB0aGUgdHJhY2sgYmVpbmcgZHJhZ2dlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VG91Y2hFdmVudHxNb3VzZUV2ZW50fSBlIC0gVG91Y2hFdmVudCBvciBNb3VzZUV2ZW50IG9iamVjdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG1vdmUoZSkge1xuICAgIGlmIChzdGFydEluZm8pIHtcbiAgICAgIGN1cnJlbnRJbmZvID0gYW5hbHl6ZShlLCBzdGFydEluZm8pO1xuXG4gICAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFTcGxpZGUuaXMoRkFERSkpIHtcbiAgICAgICAgICB2YXIgcG9zaXRpb24gPSBzdGFydENvb3JkW2F4aXNdICsgY3VycmVudEluZm8ub2Zmc2V0W2F4aXNdO1xuICAgICAgICAgIFRyYWNrLnRyYW5zbGF0ZShyZXNpc3QocG9zaXRpb24pKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNob3VsZE1vdmUoY3VycmVudEluZm8pKSB7XG4gICAgICAgICAgU3BsaWRlLmVtaXQoJ2RyYWcnLCBzdGFydEluZm8pO1xuICAgICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgIFRyYWNrLmNhbmNlbCgpOyAvLyBUaGVzZSBwYXJhbXMgYXJlIGFjdHVhbCBkcmFnIGRhdGEuXG5cbiAgICAgICAgICBpbml0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRvIHN0YXJ0IG1vdmluZyB0aGUgdHJhY2sgb3Igbm90IGJ5IGRyYWcgYW5nbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIEFuIGluZm9ybWF0aW9uIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgdHJhY2sgc2hvdWxkIGJlIG1vdmVkIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHNob3VsZE1vdmUoX3JlZikge1xuICAgIHZhciBvZmZzZXQgPSBfcmVmLm9mZnNldDtcblxuICAgIGlmIChTcGxpZGUuU3RhdGUuaXMoTU9WSU5HKSAmJiBTcGxpZGUub3B0aW9ucy53YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbihkcmFnX2FicyhvZmZzZXQueSkgLyBkcmFnX2FicyhvZmZzZXQueCkpICogMTgwIC8gTWF0aC5QSTtcblxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICBhbmdsZSA9IDkwIC0gYW5nbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuZ2xlIDwgU3BsaWRlLm9wdGlvbnMuZHJhZ0FuZ2xlVGhyZXNob2xkO1xuICB9XG4gIC8qKlxyXG4gICAqIFJlc2lzdCBkcmFnZ2luZyB0aGUgdHJhY2sgb24gdGhlIGZpcnN0L2xhc3QgcGFnZSBiZWNhdXNlIHRoZXJlIGlzIG5vIG1vcmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gLSBBIHBvc2l0aW9uIGJlaW5nIGFwcGxpZWQgdG8gdGhlIHRyYWNrLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSAtIEFkanVzdGVkIHBvc2l0aW9uLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVzaXN0KHBvc2l0aW9uKSB7XG4gICAgaWYgKFNwbGlkZS5pcyhTTElERSkpIHtcbiAgICAgIHZhciBzaWduID0gVHJhY2suc2lnbjtcblxuICAgICAgdmFyIF9zdGFydCA9IHNpZ24gKiBUcmFjay50cmltKFRyYWNrLnRvUG9zaXRpb24oMCkpO1xuXG4gICAgICB2YXIgX2VuZCA9IHNpZ24gKiBUcmFjay50cmltKFRyYWNrLnRvUG9zaXRpb24oQ29udHJvbGxlci5lZGdlSW5kZXgpKTtcblxuICAgICAgcG9zaXRpb24gKj0gc2lnbjtcblxuICAgICAgaWYgKHBvc2l0aW9uIDwgX3N0YXJ0KSB7XG4gICAgICAgIHBvc2l0aW9uID0gX3N0YXJ0IC0gRlJJQ1RJT05fUkVEVUNFUiAqIE1hdGgubG9nKF9zdGFydCAtIHBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiBfZW5kKSB7XG4gICAgICAgIHBvc2l0aW9uID0gX2VuZCArIEZSSUNUSU9OX1JFRFVDRVIgKiBNYXRoLmxvZyhwb3NpdGlvbiAtIF9lbmQpO1xuICAgICAgfVxuXG4gICAgICBwb3NpdGlvbiAqPSBzaWduO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBlbmRzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZW5kKCkge1xuICAgIHN0YXJ0SW5mbyA9IG51bGw7XG5cbiAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgU3BsaWRlLmVtaXQoJ2RyYWdnZWQnLCBjdXJyZW50SW5mbyk7XG4gICAgICBnbyhjdXJyZW50SW5mbyk7XG4gICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEdvIHRvIHRoZSBzbGlkZSBkZXRlcm1pbmVkIGJ5IHRoZSBhbmFseXplZCBkYXRhLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGluZm8gLSBBbiBpbmZvIG9iamVjdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdvKGluZm8pIHtcbiAgICB2YXIgdmVsb2NpdHkgPSBpbmZvLnZlbG9jaXR5W2F4aXNdO1xuICAgIHZhciBhYnNWID0gZHJhZ19hYnModmVsb2NpdHkpO1xuXG4gICAgaWYgKGFic1YgPiAwKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdmFyIGluZGV4ID0gU3BsaWRlLmluZGV4O1xuICAgICAgdmFyIHNpZ24gPSB2ZWxvY2l0eSA8IDAgPyAtMSA6IDE7XG4gICAgICB2YXIgZGVzdEluZGV4ID0gaW5kZXg7XG5cbiAgICAgIGlmICghU3BsaWRlLmlzKEZBREUpKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IFRyYWNrLnBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChhYnNWID4gb3B0aW9ucy5mbGlja1ZlbG9jaXR5VGhyZXNob2xkICYmIGRyYWdfYWJzKGluZm8ub2Zmc2V0W2F4aXNdKSA8IG9wdGlvbnMuc3dpcGVEaXN0YW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgIGRlc3RpbmF0aW9uICs9IHNpZ24gKiBNYXRoLm1pbihhYnNWICogb3B0aW9ucy5mbGlja1Bvd2VyLCBDb21wb25lbnRzLkxheW91dC5zaXplICogKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXN0SW5kZXggPSBUcmFjay50b0luZGV4KGRlc3RpbmF0aW9uKTtcbiAgICAgIH1cbiAgICAgIC8qXHJcbiAgICAgICAqIERvIG5vdCBhbGxvdyB0aGUgdHJhY2sgdG8gZ28gdG8gYSBwcmV2aW91cyBwb3NpdGlvbiBpZiB0aGVyZSBpcyBlbm91Z2ggdmVsb2NpdHkuXHJcbiAgICAgICAqIEFsd2F5cyB1c2UgdGhlIGFkamFjZW50IGluZGV4IGZvciB0aGUgZmFkZSBtb2RlLlxyXG4gICAgICAgKi9cblxuXG4gICAgICBpZiAoZGVzdEluZGV4ID09PSBpbmRleCAmJiBhYnNWID4gTUlOX1ZFTE9DSVRZKSB7XG4gICAgICAgIGRlc3RJbmRleCA9IGluZGV4ICsgc2lnbiAqIFRyYWNrLnNpZ247XG4gICAgICB9XG5cbiAgICAgIGlmIChTcGxpZGUuaXMoU0xJREUpKSB7XG4gICAgICAgIGRlc3RJbmRleCA9IGJldHdlZW4oZGVzdEluZGV4LCAwLCBDb250cm9sbGVyLmVkZ2VJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIENvbnRyb2xsZXIuZ28oZGVzdEluZGV4LCBvcHRpb25zLmlzTmF2aWdhdGlvbik7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEFuYWx5emUgdGhlIGdpdmVuIGV2ZW50IG9iamVjdCBhbmQgcmV0dXJuIGltcG9ydGFudCBpbmZvcm1hdGlvbiBmb3IgaGFuZGxpbmcgc3dpcGUgYmVoYXZpb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSAgIGUgICAgICAgICAgLSBUb3VjaCBvciBNb3VzZSBldmVudCBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBzdGFydEluZm8gIC0gSW5mb3JtYXRpb24gYW5hbHl6ZWQgb24gc3RhcnQgZm9yIGNhbGN1bGF0aW5nIGRpZmZlcmVuY2UgZnJvbSB0aGUgY3VycmVudCBvbmUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYW5hbHl6ZWQgaW5mb3JtYXRpb24sIHN1Y2ggYXMgb2Zmc2V0LCB2ZWxvY2l0eSwgZXRjLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYW5hbHl6ZShlLCBzdGFydEluZm8pIHtcbiAgICB2YXIgdGltZVN0YW1wID0gZS50aW1lU3RhbXAsXG4gICAgICAgIHRvdWNoZXMgPSBlLnRvdWNoZXM7XG5cbiAgICB2YXIgX3JlZjIgPSB0b3VjaGVzID8gdG91Y2hlc1swXSA6IGUsXG4gICAgICAgIGNsaWVudFggPSBfcmVmMi5jbGllbnRYLFxuICAgICAgICBjbGllbnRZID0gX3JlZjIuY2xpZW50WTtcblxuICAgIHZhciBfcmVmMyA9IHN0YXJ0SW5mby50byB8fCB7fSxcbiAgICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICAgIGZyb21YID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gY2xpZW50WCA6IF9yZWYzJHgsXG4gICAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgICBmcm9tWSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IGNsaWVudFkgOiBfcmVmMyR5O1xuXG4gICAgdmFyIHN0YXJ0VGltZSA9IHN0YXJ0SW5mby50aW1lIHx8IDA7XG4gICAgdmFyIG9mZnNldCA9IHtcbiAgICAgIHg6IGNsaWVudFggLSBmcm9tWCxcbiAgICAgIHk6IGNsaWVudFkgLSBmcm9tWVxuICAgIH07XG4gICAgdmFyIGR1cmF0aW9uID0gdGltZVN0YW1wIC0gc3RhcnRUaW1lO1xuICAgIHZhciB2ZWxvY2l0eSA9IHtcbiAgICAgIHg6IG9mZnNldC54IC8gZHVyYXRpb24sXG4gICAgICB5OiBvZmZzZXQueSAvIGR1cmF0aW9uXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgdG86IHtcbiAgICAgICAgeDogY2xpZW50WCxcbiAgICAgICAgeTogY2xpZW50WVxuICAgICAgfSxcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgdGltZTogdGltZVN0YW1wLFxuICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBEcmFnO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9jbGljay9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGhhbmRsaW5nIGEgY2xpY2sgZXZlbnQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGhhbmRsaW5nIGEgY2xpY2sgZXZlbnQuXHJcbiAqIENsaWNrIHNob3VsZCBiZSBkaXNhYmxlZCBkdXJpbmcgZHJhZy9zd2lwZS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjbGljayA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgY2xpY2sgaXMgZGlzYWJsZWQgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICAvKipcclxuICAgKiBDbGljayBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQ2xpY2sgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBNb3VudCBvbmx5IHdoZW4gdGhlIGRyYWcgaXMgYWN0aXZhdGVkIGFuZCB0aGUgc2xpZGUgdHlwZSBpcyBub3QgXCJmYWRlXCIuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogU3BsaWRlLm9wdGlvbnMuZHJhZyxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdjbGljaycsIG9uQ2xpY2ssIENvbXBvbmVudHMuRWxlbWVudHMudHJhY2ssIHtcbiAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgfSkub24oJ2RyYWcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pLm9uKCdkcmFnZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGZsYWcgaXMgcmVsZWFzZWQgYWZ0ZXIgdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gYSB0cmFjayBlbGVtZW50IGlzIGNsaWNrZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gQSBjbGljayBldmVudC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDbGljaztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYXV0b3BsYXkvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBwbGF5aW5nIHNsaWRlcyBhdXRvbWF0aWNhbGx5LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFNldCBvZiBwYXVzZSBmbGFncy5cclxuICovXG5cbnZhciBQQVVTRV9GTEFHUyA9IHtcbiAgSE9WRVI6IDEsXG4gIEZPQ1VTOiAyLFxuICBNQU5VQUw6IDNcbn07XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgcGxheWluZyBzbGlkZXMgYXV0b21hdGljYWxseS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGF1dG9wbGF5ID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMsIG5hbWUpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgcGF1c2UgZmxhZ3MuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICovXG4gIHZhciBmbGFncyA9IFtdO1xuICAvKipcclxuICAgKiBTdG9yZSBhbiBpbnRlcnZhbCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fTtcclxuICAgKi9cblxuICB2YXIgaW50ZXJ2YWw7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogQXV0b3BsYXkgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEF1dG9wbGF5ID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBhdXRvcGxheSBvcHRpb24gaXMgdHJ1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBTcGxpZGUub3B0aW9ucy5hdXRvcGxheSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogTm90ZSB0aGF0IGF1dG9wbGF5IHN0YXJ0cyBvbmx5IGlmIHRoZXJlIGFyZSBzbGlkZXMgb3ZlciBwZXJQYWdlIG51bWJlci5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG5cbiAgICAgIGlmIChFbGVtZW50cy5zbGlkZXMubGVuZ3RoID4gb3B0aW9ucy5wZXJQYWdlKSB7XG4gICAgICAgIGludGVydmFsID0gY3JlYXRlSW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIFNwbGlkZS5nbygnPicpO1xuICAgICAgICB9LCBvcHRpb25zLmludGVydmFsLCBmdW5jdGlvbiAocmF0ZSkge1xuICAgICAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjpwbGF5aW5nXCIsIHJhdGUpO1xuXG4gICAgICAgICAgaWYgKEVsZW1lbnRzLmJhcikge1xuICAgICAgICAgICAgYXBwbHlTdHlsZShFbGVtZW50cy5iYXIsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IHJhdGUgKiAxMDAgKyBcIiVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYmluZCgpO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBhdXRvcGxheS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZyAtIEEgcGF1c2UgZmxhZyB0byBiZSByZW1vdmVkLlxyXG4gICAgICovXG4gICAgcGxheTogZnVuY3Rpb24gcGxheShmbGFnKSB7XG4gICAgICBpZiAoZmxhZyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZsYWcgPSAwO1xuICAgICAgfVxuXG4gICAgICBmbGFncyA9IGZsYWdzLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gZiAhPT0gZmxhZztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWZsYWdzLmxlbmd0aCkge1xuICAgICAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6cGxheVwiKTtcbiAgICAgICAgaW50ZXJ2YWwucGxheShTcGxpZGUub3B0aW9ucy5yZXNldFByb2dyZXNzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBQYXVzZSBhdXRvcGxheS5cclxuICAgICAqIE5vdGUgdGhhdCBBcnJheS5pbmNsdWRlcyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnIC0gQSBwYXVzZSBmbGFnIHRvIGJlIGFkZGVkLlxyXG4gICAgICovXG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKGZsYWcpIHtcbiAgICAgIGlmIChmbGFnID09PSB2b2lkIDApIHtcbiAgICAgICAgZmxhZyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGludGVydmFsLnBhdXNlKCk7XG5cbiAgICAgIGlmIChmbGFncy5pbmRleE9mKGZsYWcpID09PSAtMSkge1xuICAgICAgICBmbGFncy5wdXNoKGZsYWcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmxhZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjpwYXVzZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIExpc3RlbiBzb21lIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgdmFyIHNpYmxpbmcgPSBTcGxpZGUuc2libGluZztcbiAgICB2YXIgZWxtcyA9IFtTcGxpZGUucm9vdCwgc2libGluZyA/IHNpYmxpbmcucm9vdCA6IG51bGxdO1xuXG4gICAgaWYgKG9wdGlvbnMucGF1c2VPbkhvdmVyKSB7XG4gICAgICBzd2l0Y2hPbihlbG1zLCAnbW91c2VsZWF2ZScsIFBBVVNFX0ZMQUdTLkhPVkVSLCB0cnVlKTtcbiAgICAgIHN3aXRjaE9uKGVsbXMsICdtb3VzZWVudGVyJywgUEFVU0VfRkxBR1MuSE9WRVIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uRm9jdXMpIHtcbiAgICAgIHN3aXRjaE9uKGVsbXMsICdmb2N1c291dCcsIFBBVVNFX0ZMQUdTLkZPQ1VTLCB0cnVlKTtcbiAgICAgIHN3aXRjaE9uKGVsbXMsICdmb2N1c2luJywgUEFVU0VfRkxBR1MuRk9DVVMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoRWxlbWVudHMucGxheSkge1xuICAgICAgU3BsaWRlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTmVlZCB0byBiZSByZW1vdmVkIGEgZm9jdXMgZmxhZyBhdCBmaXJzdC5cbiAgICAgICAgQXV0b3BsYXkucGxheShQQVVTRV9GTEFHUy5GT0NVUyk7XG4gICAgICAgIEF1dG9wbGF5LnBsYXkoUEFVU0VfRkxBR1MuTUFOVUFMKTtcbiAgICAgIH0sIEVsZW1lbnRzLnBsYXkpO1xuICAgIH1cblxuICAgIGlmIChFbGVtZW50cy5wYXVzZSkge1xuICAgICAgc3dpdGNoT24oW0VsZW1lbnRzLnBhdXNlXSwgJ2NsaWNrJywgUEFVU0VfRkxBR1MuTUFOVUFMLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgU3BsaWRlLm9uKCdtb3ZlIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBBdXRvcGxheS5wbGF5KCk7XG4gICAgfSkgLy8gUmV3aW5kIHRoZSB0aW1lci5cbiAgICAub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICBBdXRvcGxheS5wYXVzZSgpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFBsYXkgb3IgcGF1c2Ugb24gdGhlIGdpdmVuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50W119IGVsbXMgIC0gRWxlbWVudHMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgIGV2ZW50IC0gQW4gZXZlbnQgbmFtZSBvciBuYW1lcy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gICAgZmxhZyAgLSBBIHBhdXNlIGZsYWcgZGVmaW5lZCBvbiB0aGUgdG9wLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gICBwbGF5ICAtIERldGVybWluZSB3aGV0aGVyIHRvIHBsYXkgb3IgcGF1c2UuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBzd2l0Y2hPbihlbG1zLCBldmVudCwgZmxhZywgcGxheSkge1xuICAgIGVsbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxtKSB7XG4gICAgICBTcGxpZGUub24oZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQXV0b3BsYXlbcGxheSA/ICdwbGF5JyA6ICdwYXVzZSddKGZsYWcpO1xuICAgICAgfSwgZWxtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBBdXRvcGxheTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvY292ZXIvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjaGFuZ2UgYW4gaW1nIGVsZW1lbnQgdG8gYmFja2dyb3VuZCBpbWFnZSBvZiBpdHMgd3JhcHBlci5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY2hhbmdlIGFuIGltZyBlbGVtZW50IHRvIGJhY2tncm91bmQgaW1hZ2Ugb2YgaXRzIHdyYXBwZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb3ZlciA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gIC8qKlxyXG4gICAqIENvdmVyIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDb3ZlciA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIG9ubHkgd2hlbiBcImNvdmVyXCIgb3B0aW9uIGlzIHRydWUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogb3B0aW9ucy5jb3ZlcixcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdsYXp5bG9hZDpsb2FkZWQnLCBmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGNvdmVyKGltZywgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICBTcGxpZGUub24oJ21vdW50ZWQgdXBkYXRlZCByZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXBwbHkoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBhcHBseSh0cnVlKTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIEFwcGx5IFwiY292ZXJcIiB0byBhbGwgc2xpZGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB1bmNvdmVyIC0gSWYgdHJ1ZSwgXCJjb3ZlclwiIHdpbGwgYmUgY2xlYXIuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gYXBwbHkodW5jb3Zlcikge1xuICAgIENvbXBvbmVudHMuRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHZhciBpbWcgPSBjaGlsZChTbGlkZS5zbGlkZSwgJ0lNRycpIHx8IGNoaWxkKFNsaWRlLmNvbnRhaW5lciwgJ0lNRycpO1xuXG4gICAgICBpZiAoaW1nICYmIGltZy5zcmMpIHtcbiAgICAgICAgY292ZXIoaW1nLCB1bmNvdmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBTZXQgYmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgcGFyZW50IGVsZW1lbnQsIHVzaW5nIHNvdXJjZSBvZiB0aGUgZ2l2ZW4gaW1hZ2UgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW1nICAgICAtIEFuIGltYWdlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB1bmNvdmVyIC0gUmVzZXQgXCJjb3ZlclwiLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY292ZXIoaW1nLCB1bmNvdmVyKSB7XG4gICAgYXBwbHlTdHlsZShpbWcucGFyZW50RWxlbWVudCwge1xuICAgICAgYmFja2dyb3VuZDogdW5jb3ZlciA/ICcnIDogXCJjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHVybChcXFwiXCIgKyBpbWcuc3JjICsgXCJcXFwiKVwiXG4gICAgfSk7XG4gICAgYXBwbHlTdHlsZShpbWcsIHtcbiAgICAgIGRpc3BsYXk6IHVuY292ZXIgPyAnJyA6ICdub25lJ1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIENvdmVyO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9hcnJvd3MvcGF0aC5qc1xuLyoqXHJcbiAqIEV4cG9ydCB2ZWN0b3IgcGF0aCBmb3IgYW4gYXJyb3cuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIE5hbWVzcGFjZSBkZWZpbml0aW9uIGZvciBTVkcgZWxlbWVudC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgWE1MX05BTUVfU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuLyoqXHJcbiAqIFRoZSBhcnJvdyB2ZWN0b3IgcGF0aC5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBQQVRIID0gJ20xNS41IDAuOTMyLTQuMyA0LjM4IDE0LjUgMTQuNi0xNC41IDE0LjUgNC4zIDQuNCAxNC42LTE0LjYgNC40LTQuMy00LjQtNC40LTE0LjYtMTQuNnonO1xuLyoqXHJcbiAqIFNWRyB3aWR0aCBhbmQgaGVpZ2h0LlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIFNJWkUgPSA0MDtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2Fycm93cy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGFwcGVuZGluZyBwcmV2L25leHQgYXJyb3dzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgYXBwZW5kaW5nIHByZXYvbmV4dCBhcnJvd3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICAgICAgLSBBIGNvbXBvbmVudCBuYW1lIGFzIGEgbG93ZXJjYXNlIHN0cmluZy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBhcnJvd3MgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cywgbmFtZSkge1xuICAvKipcclxuICAgKiBQcmV2aW91cyBhcnJvdyBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR8dW5kZWZpbmVkfVxyXG4gICAqL1xuICB2YXIgcHJldjtcbiAgLyoqXHJcbiAgICogTmV4dCBhcnJvdyBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR8dW5kZWZpbmVkfVxyXG4gICAqL1xuXG4gIHZhciBuZXh0O1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgY2xhc3MgbGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIGNsYXNzZXMgPSBTcGxpZGUuY2xhc3NlcztcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIHJvb3QgPSBTcGxpZGUucm9vdDtcbiAgLyoqXHJcbiAgICogV2hldGhlciBhcnJvd3MgYXJlIGNyZWF0ZWQgcHJvZ3JhbW1hdGljYWxseSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgY3JlYXRlZDtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBBcnJvd3MgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEFycm93cyA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIHdoZW4gdGhlIGFycm93cyBvcHRpb24gaXMgdHJ1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBTcGxpZGUub3B0aW9ucy5hcnJvd3MsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8vIEF0dGVtcHQgdG8gZ2V0IGFycm93cyBmcm9tIEhUTUwgc291cmNlLlxuICAgICAgcHJldiA9IEVsZW1lbnRzLmFycm93cy5wcmV2O1xuICAgICAgbmV4dCA9IEVsZW1lbnRzLmFycm93cy5uZXh0OyAvLyBJZiBhcnJvd3Mgd2VyZSBub3QgZm91bmQgaW4gSFRNTCwgbGV0J3MgZ2VuZXJhdGUgdGhlbS5cblxuICAgICAgaWYgKCghcHJldiB8fCAhbmV4dCkgJiYgU3BsaWRlLm9wdGlvbnMuYXJyb3dzKSB7XG4gICAgICAgIHByZXYgPSBjcmVhdGVBcnJvdyh0cnVlKTtcbiAgICAgICAgbmV4dCA9IGNyZWF0ZUFycm93KGZhbHNlKTtcbiAgICAgICAgY3JlYXRlZCA9IHRydWU7XG4gICAgICAgIGFwcGVuZEFycm93cygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldiAmJiBuZXh0KSB7XG4gICAgICAgIGJpbmQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJvd3MgPSB7XG4gICAgICAgIHByZXY6IHByZXYsXG4gICAgICAgIG5leHQ6IG5leHRcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIGFyZSBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjptb3VudGVkXCIsIHByZXYsIG5leHQpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKFtwcmV2LCBuZXh0XSwgJ2Rpc2FibGVkJyk7XG5cbiAgICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICAgIGRvbV9yZW1vdmUocHJldi5wYXJlbnRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0byBuYXRpdmUgYW5kIGN1c3RvbSBldmVudHMuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBTcGxpZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgU3BsaWRlLmdvKCc8Jyk7XG4gICAgfSwgcHJldikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgU3BsaWRlLmdvKCc+Jyk7XG4gICAgfSwgbmV4dCkub24oJ21vdW50ZWQgbW92ZSB1cGRhdGVkIHJlZnJlc2gnLCB1cGRhdGVEaXNhYmxlZCk7XG4gIH1cbiAgLyoqXHJcbiAgICogVXBkYXRlIGEgZGlzYWJsZWQgYXR0cmlidXRlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gdXBkYXRlRGlzYWJsZWQoKSB7XG4gICAgdmFyIF9Db21wb25lbnRzJENvbnRyb2xsZSA9IENvbXBvbmVudHMuQ29udHJvbGxlcixcbiAgICAgICAgcHJldkluZGV4ID0gX0NvbXBvbmVudHMkQ29udHJvbGxlLnByZXZJbmRleCxcbiAgICAgICAgbmV4dEluZGV4ID0gX0NvbXBvbmVudHMkQ29udHJvbGxlLm5leHRJbmRleDtcbiAgICB2YXIgaXNFbm91Z2ggPSBTcGxpZGUubGVuZ3RoID4gU3BsaWRlLm9wdGlvbnMucGVyUGFnZSB8fCBTcGxpZGUuaXMoTE9PUCk7XG4gICAgcHJldi5kaXNhYmxlZCA9IHByZXZJbmRleCA8IDAgfHwgIWlzRW5vdWdoO1xuICAgIG5leHQuZGlzYWJsZWQgPSBuZXh0SW5kZXggPCAwIHx8ICFpc0Vub3VnaDtcbiAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6dXBkYXRlZFwiLCBwcmV2LCBuZXh0LCBwcmV2SW5kZXgsIG5leHRJbmRleCk7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgd3JhcHBlciBlbGVtZW50IGFuZCBhcHBlbmQgYXJyb3dzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYXBwZW5kQXJyb3dzKCkge1xuICAgIHZhciB3cmFwcGVyID0gY3JlYXRlKCdkaXYnLCB7XG4gICAgICBcImNsYXNzXCI6IGNsYXNzZXMuYXJyb3dzXG4gICAgfSk7XG4gICAgYXBwZW5kKHdyYXBwZXIsIHByZXYpO1xuICAgIGFwcGVuZCh3cmFwcGVyLCBuZXh0KTtcbiAgICB2YXIgc2xpZGVyID0gRWxlbWVudHMuc2xpZGVyO1xuICAgIHZhciBwYXJlbnQgPSBTcGxpZGUub3B0aW9ucy5hcnJvd3MgPT09ICdzbGlkZXInICYmIHNsaWRlciA/IHNsaWRlciA6IHJvb3Q7XG4gICAgYmVmb3JlKHdyYXBwZXIsIHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGFycm93IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZXYgLSBEZXRlcm1pbmUgdG8gY3JlYXRlIGEgcHJldiBhcnJvdyBvciBuZXh0IGFycm93LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7RWxlbWVudH0gLSBBIGNyZWF0ZWQgYXJyb3cgZWxlbWVudC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycm93KHByZXYpIHtcbiAgICB2YXIgYXJyb3cgPSBcIjxidXR0b24gY2xhc3M9XFxcIlwiICsgY2xhc3Nlcy5hcnJvdyArIFwiIFwiICsgKHByZXYgPyBjbGFzc2VzLnByZXYgOiBjbGFzc2VzLm5leHQpICsgXCJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XCIgKyAoXCI8c3ZnIHhtbG5zPVxcXCJcIiArIFhNTF9OQU1FX1NQQUNFICsgXCJcXFwiXFx0dmlld0JveD1cXFwiMCAwIFwiICsgU0laRSArIFwiIFwiICsgU0laRSArIFwiXFxcIlxcdHdpZHRoPVxcXCJcIiArIFNJWkUgKyBcIlxcXCJcXHRoZWlnaHQ9XFxcIlwiICsgU0laRSArIFwiXFxcIj5cIikgKyAoXCI8cGF0aCBkPVxcXCJcIiArIChTcGxpZGUub3B0aW9ucy5hcnJvd1BhdGggfHwgUEFUSCkgKyBcIlxcXCIgLz5cIik7XG4gICAgcmV0dXJuIGRvbWlmeShhcnJvdyk7XG4gIH1cblxuICByZXR1cm4gQXJyb3dzO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgcGFnaW5hdGlvblxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFRoZSBldmVudCBuYW1lIGZvciB1cGRhdGluZyBzb21lIGF0dHJpYnV0ZXMgb2YgcGFnaW5hdGlvbiBub2Rlcy5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBVFRSSUJVVEVTX1VQREFURV9FVkVOVCA9ICdtb3ZlLnBhZ2UnO1xuLyoqXHJcbiAqIFRoZSBldmVudCBuYW1lIGZvciByZWNyZWF0aW5nIHBhZ2luYXRpb24uXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgVVBEQVRFX0VWRU5UID0gJ3VwZGF0ZWQucGFnZSByZWZyZXNoLnBhZ2UnO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGhhbmRsaW5nIHBhZ2luYXRpb25cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHBhZ2luYXRpb24gPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cywgbmFtZSkge1xuICAvKipcclxuICAgKiBTdG9yZSBhbGwgZGF0YSBmb3IgcGFnaW5hdGlvbi5cclxuICAgKiAtIGxpc3Q6IEEgbGlzdCBlbGVtZW50LlxyXG4gICAqIC0gaXRlbXM6IEFuIGFycmF5IHRoYXQgY29udGFpbnMgb2JqZWN0cyhsaSwgYnV0dG9uLCBpbmRleCwgcGFnZSkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgZGF0YSA9IHt9O1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIFBhZ2luYXRpb24gY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIFBhZ2luYXRpb24gPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgcGFnaW5hdGlvbiA9IFNwbGlkZS5vcHRpb25zLnBhZ2luYXRpb247XG5cbiAgICAgIGlmIChwYWdpbmF0aW9uKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVQYWdpbmF0aW9uKCk7XG4gICAgICAgIHZhciBzbGlkZXIgPSBFbGVtZW50cy5zbGlkZXI7XG4gICAgICAgIHZhciBwYXJlbnQgPSBwYWdpbmF0aW9uID09PSAnc2xpZGVyJyAmJiBzbGlkZXIgPyBzbGlkZXIgOiBTcGxpZGUucm9vdDtcbiAgICAgICAgYXBwZW5kKHBhcmVudCwgZGF0YS5saXN0KTtcbiAgICAgICAgU3BsaWRlLm9uKEFUVFJJQlVURVNfVVBEQVRFX0VWRU5ULCB1cGRhdGVBdHRyaWJ1dGVzKTtcbiAgICAgIH1cblxuICAgICAgU3BsaWRlLm9mZihVUERBVEVfRVZFTlQpLm9uKFVQREFURV9FVkVOVCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBQYWdpbmF0aW9uLmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAoU3BsaWRlLm9wdGlvbnMucGFnaW5hdGlvbikge1xuICAgICAgICAgIFBhZ2luYXRpb24ubW91bnQoKTtcbiAgICAgICAgICBQYWdpbmF0aW9uLm1vdW50ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIGFyZSBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIGlmIChTcGxpZGUub3B0aW9ucy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHZhciBpbmRleCA9IFNwbGlkZS5pbmRleDtcbiAgICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOm1vdW50ZWRcIiwgZGF0YSwgdGhpcy5nZXRJdGVtKGluZGV4KSk7XG4gICAgICAgIHVwZGF0ZUF0dHJpYnV0ZXMoaW5kZXgsIC0xKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IHRoZSBwYWdpbmF0aW9uLlxyXG4gICAgICogQmUgYXdhcmUgdGhhdCBub2RlLnJlbW92ZSgpIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZG9tX3JlbW92ZShkYXRhLmxpc3QpO1xuXG4gICAgICBpZiAoZGF0YS5pdGVtcykge1xuICAgICAgICBkYXRhLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBTcGxpZGUub2ZmKCdjbGljaycsIGl0ZW0uYnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIERvIG5vdCByZW1vdmUgVVBEQVRFX0VWRU5UIHRvIHJlY3JlYXRlIHBhZ2luYXRpb24gaWYgbmVlZGVkLlxuXG5cbiAgICAgIFNwbGlkZS5vZmYoQVRUUklCVVRFU19VUERBVEVfRVZFTlQpO1xuICAgICAgZGF0YSA9IHt9O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbiBpdGVtIGJ5IGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEEgc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fHVuZGVmaW5lZH0gLSBBbiBpdGVtIG9iamVjdCBvbiBzdWNjZXNzIG9yIHVuZGVmaW5lZCBvbiBmYWlsdXJlLlxyXG4gICAgICovXG4gICAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbShpbmRleCkge1xuICAgICAgcmV0dXJuIGRhdGEuaXRlbXNbQ29tcG9uZW50cy5Db250cm9sbGVyLnRvUGFnZShpbmRleCldO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBvYmplY3QgY29udGFpbmluZyBwYWdpbmF0aW9uIGRhdGEuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIFBhZ2luYXRpb24gZGF0YSBpbmNsdWRpbmcgbGlzdCBhbmQgaXRlbXMuXHJcbiAgICAgKi9cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICB9O1xuICAvKipcclxuICAgKiBVcGRhdGUgYXR0cmlidXRlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAgICAgLSBBY3RpdmUgaW5kZXguXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByZXZJbmRleCAtIFByZXYgaW5kZXguXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlQXR0cmlidXRlcyhpbmRleCwgcHJldkluZGV4KSB7XG4gICAgdmFyIHByZXYgPSBQYWdpbmF0aW9uLmdldEl0ZW0ocHJldkluZGV4KTtcbiAgICB2YXIgY3VyciA9IFBhZ2luYXRpb24uZ2V0SXRlbShpbmRleCk7XG4gICAgdmFyIGFjdGl2ZSA9IFNUQVRVU19DTEFTU0VTLmFjdGl2ZTtcblxuICAgIGlmIChwcmV2KSB7XG4gICAgICByZW1vdmVDbGFzcyhwcmV2LmJ1dHRvbiwgYWN0aXZlKTtcbiAgICB9XG5cbiAgICBpZiAoY3Vycikge1xuICAgICAgYWRkQ2xhc3MoY3Vyci5idXR0b24sIGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnVwZGF0ZWRcIiwgZGF0YSwgcHJldiwgY3Vycik7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgd3JhcHBlciBhbmQgYnV0dG9uIGVsZW1lbnRzLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWlucyBhbGwgZGF0YS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICB2YXIgY2xhc3NlcyA9IFNwbGlkZS5jbGFzc2VzO1xuICAgIHZhciBsaXN0ID0gY3JlYXRlKCd1bCcsIHtcbiAgICAgIFwiY2xhc3NcIjogY2xhc3Nlcy5wYWdpbmF0aW9uXG4gICAgfSk7XG4gICAgdmFyIGl0ZW1zID0gRWxlbWVudHMuZ2V0U2xpZGVzKGZhbHNlKS5maWx0ZXIoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5mb2N1cyAhPT0gZmFsc2UgfHwgU2xpZGUuaW5kZXggJSBvcHRpb25zLnBlclBhZ2UgPT09IDA7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChTbGlkZSwgcGFnZSkge1xuICAgICAgdmFyIGxpID0gY3JlYXRlKCdsaScsIHt9KTtcbiAgICAgIHZhciBidXR0b24gPSBjcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBjbGFzc2VzLnBhZ2UsXG4gICAgICAgIHR5cGU6ICdidXR0b24nXG4gICAgICB9KTtcbiAgICAgIGFwcGVuZChsaSwgYnV0dG9uKTtcbiAgICAgIGFwcGVuZChsaXN0LCBsaSk7XG4gICAgICBTcGxpZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBTcGxpZGUuZ28oXCI+XCIgKyBwYWdlKTtcbiAgICAgIH0sIGJ1dHRvbik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaTogbGksXG4gICAgICAgIGJ1dHRvbjogYnV0dG9uLFxuICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICBTbGlkZXM6IEVsZW1lbnRzLmdldFNsaWRlc0J5UGFnZShwYWdlKVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgbGlzdDogbGlzdCxcbiAgICAgIGl0ZW1zOiBpdGVtc1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gUGFnaW5hdGlvbjtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvbGF6eWxvYWQvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBsb2FkaW5nIHNsaWRlciBpbWFnZXMgbGF6aWx5LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIG5hbWUgZm9yIGEgZGF0YSBhdHRyaWJ1dGUgb2Ygc3JjLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNSQ19EQVRBX05BTUUgPSAnZGF0YS1zcGxpZGUtbGF6eSc7XG4vKipcclxuICogVGhlIG5hbWUgZm9yIGEgZGF0YSBhdHRyaWJ1dGUgb2Ygc3Jjc2V0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNSQ1NFVF9EQVRBX05BTUUgPSAnZGF0YS1zcGxpZGUtbGF6eS1zcmNzZXQnO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGxvYWRpbmcgc2xpZGVyIGltYWdlcyBsYXppbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICAgICAgLSBBIGNvbXBvbmVudCBuYW1lIGFzIGEgbG93ZXJjYXNlIHN0cmluZy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBsYXp5bG9hZCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzLCBuYW1lKSB7XG4gIC8qKlxyXG4gICAqIE5leHQgaW5kZXggZm9yIHNlcXVlbnRpYWwgbG9hZGluZy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHZhciBuZXh0SW5kZXg7XG4gIC8qKlxyXG4gICAqIFN0b3JlIG9iamVjdHMgY29udGFpbmluZyBhbiBpbWcgZWxlbWVudCBhbmQgYSBTbGlkZSBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0W119XHJcbiAgICovXG5cbiAgdmFyIGltYWdlcztcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gbG9hZCBpbWFnZXMgc2VxdWVudGlhbGx5IG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1NlcXVlbnRpYWwgPSBvcHRpb25zLmxhenlMb2FkID09PSAnc2VxdWVudGlhbCc7XG4gIC8qKlxyXG4gICAqIExhenlsb2FkIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBMYXp5bG9hZCA9IHtcbiAgICAvKipcclxuICAgICAqIE1vdW50IG9ubHkgd2hlbiB0aGUgbGF6eWxvYWQgb3B0aW9uIGlzIHByb3ZpZGVkLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IG9wdGlvbnMubGF6eUxvYWQsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIFNwbGlkZS5vbignbW91bnRlZCByZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIENvbXBvbmVudHMuRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgICBlYWNoKFNsaWRlLnNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIgKyBTUkNfREFUQV9OQU1FICsgXCJdLCBbXCIgKyBTUkNTRVRfREFUQV9OQU1FICsgXCJdXCIpLCBmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICBpZiAoIWltZy5zcmMgJiYgIWltZy5zcmNzZXQpIHtcbiAgICAgICAgICAgICAgaW1hZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIGltZzogaW1nLFxuICAgICAgICAgICAgICAgIFNsaWRlOiBTbGlkZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYXBwbHlTdHlsZShpbWcsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc1NlcXVlbnRpYWwpIHtcbiAgICAgICAgICBsb2FkTmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFpc1NlcXVlbnRpYWwpIHtcbiAgICAgICAgU3BsaWRlLm9uKFwibW91bnRlZCByZWZyZXNoIG1vdmVkLlwiICsgbmFtZSwgY2hlY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBpbml0XG4gIH07XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgcGFyYW1ldGVycy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGltYWdlcyA9IFtdO1xuICAgIG5leHRJbmRleCA9IDA7XG4gIH1cbiAgLyoqXHJcbiAgICogQ2hlY2sgaG93IGNsb3NlIGVhY2ggaW1hZ2UgaXMgZnJvbSB0aGUgYWN0aXZlIHNsaWRlIGFuZFxyXG4gICAqIGRldGVybWluZSB3aGV0aGVyIHRvIHN0YXJ0IGxvYWRpbmcgb3Igbm90LCBhY2NvcmRpbmcgdG8gdGhlIGRpc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ3VycmVudCBpbmRleC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNoZWNrKGluZGV4KSB7XG4gICAgaW5kZXggPSBpc05hTihpbmRleCkgPyBTcGxpZGUuaW5kZXggOiBpbmRleDtcbiAgICBpbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgaWYgKGltYWdlLlNsaWRlLmlzV2l0aGluKGluZGV4LCBvcHRpb25zLnBlclBhZ2UgKiAob3B0aW9ucy5wcmVsb2FkUGFnZXMgKyAxKSkpIHtcbiAgICAgICAgbG9hZChpbWFnZS5pbWcsIGltYWdlLlNsaWRlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTsgLy8gVW5iaW5kIGlmIGFsbCBpbWFnZXMgYXJlIGxvYWRlZC5cblxuICAgIGlmICghaW1hZ2VzWzBdKSB7XG4gICAgICBTcGxpZGUub2ZmKFwibW92ZWQuXCIgKyBuYW1lKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogU3RhcnQgbG9hZGluZyBhbiBpbWFnZS5cclxuICAgKiBDcmVhdGluZyBhIGNsb25lIG9mIHRoZSBpbWFnZSBlbGVtZW50IHNpbmNlIHNldHRpbmcgc3JjIGF0dHJpYnV0ZSBkaXJlY3RseSB0byBpdFxyXG4gICAqIG9mdGVuIG9jY3VycyAnaGl0Y2gnLCBibG9ja2luZyBzb21lIG90aGVyIHByb2Nlc3NlcyBvZiBhIGJyb3dzZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGltZyAgIC0gQW4gaW1hZ2UgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gIFNsaWRlIC0gQSBTbGlkZSBvYmplY3QuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBsb2FkKGltZywgU2xpZGUpIHtcbiAgICBhZGRDbGFzcyhTbGlkZS5zbGlkZSwgU1RBVFVTX0NMQVNTRVMubG9hZGluZyk7XG4gICAgdmFyIHNwaW5uZXIgPSBjcmVhdGUoJ3NwYW4nLCB7XG4gICAgICBcImNsYXNzXCI6IFNwbGlkZS5jbGFzc2VzLnNwaW5uZXJcbiAgICB9KTtcbiAgICBhcHBlbmQoaW1nLnBhcmVudEVsZW1lbnQsIHNwaW5uZXIpO1xuXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxvYWRlZChpbWcsIHNwaW5uZXIsIFNsaWRlLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgbG9hZGVkKGltZywgc3Bpbm5lciwgU2xpZGUsIHRydWUpO1xuICAgIH07XG5cbiAgICBzZXRBdHRyaWJ1dGUoaW1nLCAnc3Jjc2V0JywgZ2V0QXR0cmlidXRlKGltZywgU1JDU0VUX0RBVEFfTkFNRSkgfHwgJycpO1xuICAgIHNldEF0dHJpYnV0ZShpbWcsICdzcmMnLCBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNfREFUQV9OQU1FKSB8fCAnJyk7XG4gIH1cbiAgLyoqXHJcbiAgICogU3RhcnQgbG9hZGluZyBhIG5leHQgaW1hZ2UgaW4gaW1hZ2VzIGFycmF5LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbG9hZE5leHQoKSB7XG4gICAgaWYgKG5leHRJbmRleCA8IGltYWdlcy5sZW5ndGgpIHtcbiAgICAgIHZhciBpbWFnZSA9IGltYWdlc1tuZXh0SW5kZXhdO1xuICAgICAgbG9hZChpbWFnZS5pbWcsIGltYWdlLlNsaWRlKTtcbiAgICB9XG5cbiAgICBuZXh0SW5kZXgrKztcbiAgfVxuICAvKipcclxuICAgKiBDYWxsZWQganVzdCBhZnRlciB0aGUgaW1hZ2Ugd2FzIGxvYWRlZCBvciBsb2FkaW5nIHdhcyBhYm9ydGVkIGJ5IHNvbWUgZXJyb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGltZyAgICAgLSBBbiBpbWFnZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gc3Bpbm5lciAtIEEgc3Bpbm5lciBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgU2xpZGUgICAtIEEgU2xpZGUgb2JqZWN0LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZXJyb3IgICAtIFRydWUgaWYgdGhlIGltYWdlIHdhcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IG9yIGZhbHNlIG9uIGVycm9yLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbG9hZGVkKGltZywgc3Bpbm5lciwgU2xpZGUsIGVycm9yKSB7XG4gICAgcmVtb3ZlQ2xhc3MoU2xpZGUuc2xpZGUsIFNUQVRVU19DTEFTU0VTLmxvYWRpbmcpO1xuXG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgZG9tX3JlbW92ZShzcGlubmVyKTtcbiAgICAgIGFwcGx5U3R5bGUoaW1nLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjpsb2FkZWRcIiwgaW1nKS5lbWl0KCdyZXNpemUnKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTZXF1ZW50aWFsKSB7XG4gICAgICBsb2FkTmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBMYXp5bG9hZDtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9hMTF5LmpzXG4vKipcclxuICogRXhwb3J0IGFyaWEgYXR0cmlidXRlIG5hbWVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgYXJpYS1jdXJyZW50LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBBUklBX0NVUlJFTlJUID0gJ2FyaWEtY3VycmVudCc7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtY29udHJvbC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBUklBX0NPTlRST0xTID0gJ2FyaWEtY29udHJvbHMnO1xuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWNvbnRyb2wuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQVJJQV9MQUJFTCA9ICdhcmlhLWxhYmVsJztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgYXJpYS1sYWJlbGxlZGJ5LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFSSUFfTEFCRUxMRURCWSA9ICdhcmlhLWxhYmVsbGVkYnknO1xuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWhpZGRlbi5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBUklBX0hJRERFTiA9ICdhcmlhLWhpZGRlbic7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIHRhYi1pbmRleC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBUQUJfSU5ERVggPSAndGFiaW5kZXgnO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMva2V5Ym9hcmQvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyBzbGlkZXMgdmlhIGtleWJvYXJkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIE1hcCBhIGtleSB0byBhIHNsaWRlIGNvbnRyb2wuXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xuXG52YXIgS0VZX01BUCA9IHtcbiAgbHRyOiB7XG4gICAgQXJyb3dMZWZ0OiAnPCcsXG4gICAgQXJyb3dSaWdodDogJz4nLFxuICAgIC8vIEZvciBJRS5cbiAgICBMZWZ0OiAnPCcsXG4gICAgUmlnaHQ6ICc+J1xuICB9LFxuICBydGw6IHtcbiAgICBBcnJvd0xlZnQ6ICc+JyxcbiAgICBBcnJvd1JpZ2h0OiAnPCcsXG4gICAgLy8gRm9yIElFLlxuICAgIExlZnQ6ICc+JyxcbiAgICBSaWdodDogJzwnXG4gIH0sXG4gIHR0Yjoge1xuICAgIEFycm93VXA6ICc8JyxcbiAgICBBcnJvd0Rvd246ICc+JyxcbiAgICAvLyBGb3IgSUUuXG4gICAgVXA6ICc8JyxcbiAgICBEb3duOiAnPidcbiAgfVxufTtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyBzbGlkZXMgdmlhIGtleWJvYXJkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3Qga2V5Ym9hcmQgPSAoZnVuY3Rpb24gKFNwbGlkZSkge1xuICAvKipcclxuICAgKiBIb2xkIHRoZSB0YXJnZXQgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fERvY3VtZW50fHVuZGVmaW5lZH1cclxuICAgKi9cbiAgdmFyIHRhcmdldDtcbiAgcmV0dXJuIHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIFNwbGlkZS5vbignbW91bnRlZCB1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAgICAgICB2YXIgbWFwID0gS0VZX01BUFtvcHRpb25zLmRpcmVjdGlvbl07XG4gICAgICAgIHZhciBrZXlib2FyZCA9IG9wdGlvbnMua2V5Ym9hcmQ7XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIFNwbGlkZS5vZmYoJ2tleWRvd24nLCB0YXJnZXQpO1xuICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZShyb290LCBUQUJfSU5ERVgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleWJvYXJkKSB7XG4gICAgICAgICAgaWYgKGtleWJvYXJkID09PSAnZm9jdXNlZCcpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHJvb3Q7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUocm9vdCwgVEFCX0lOREVYLCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgU3BsaWRlLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChtYXBbZS5rZXldKSB7XG4gICAgICAgICAgICAgIFNwbGlkZS5nbyhtYXBbZS5rZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2ExMXkvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBlbmhhbmNpbmcgYWNjZXNzaWJpbGl0eS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGVuaGFuY2luZyBhY2Nlc3NpYmlsaXR5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgYTExeSA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgYSBpMThuIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBpMThuID0gU3BsaWRlLmkxOG47XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogQWxsIGF0dHJpYnV0ZXMgcmVsYXRlZCB3aXRoIEExMXkuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICovXG5cbiAgdmFyIGFsbEF0dHJpYnV0ZXMgPSBbQVJJQV9ISURERU4sIFRBQl9JTkRFWCwgQVJJQV9DT05UUk9MUywgQVJJQV9MQUJFTCwgQVJJQV9DVVJSRU5SVCwgJ3JvbGUnXTtcbiAgLyoqXHJcbiAgICogQTExeSBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQTExeSA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgYWNjZXNzaWJpbGl0eSBvcHRpb24gaXMgdHJ1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBTcGxpZGUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ3Zpc2libGUnLCBmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgdXBkYXRlU2xpZGUoU2xpZGUuc2xpZGUsIHRydWUpO1xuICAgICAgfSkub24oJ2hpZGRlbicsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICB1cGRhdGVTbGlkZShTbGlkZS5zbGlkZSwgZmFsc2UpO1xuICAgICAgfSkub24oJ2Fycm93czptb3VudGVkJywgaW5pdEFycm93cykub24oJ2Fycm93czp1cGRhdGVkJywgdXBkYXRlQXJyb3dzKS5vbigncGFnaW5hdGlvbjptb3VudGVkJywgaW5pdFBhZ2luYXRpb24pLm9uKCdwYWdpbmF0aW9uOnVwZGF0ZWQnLCB1cGRhdGVQYWdpbmF0aW9uKS5vbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlKENvbXBvbmVudHMuQ2xvbmVzLmNsb25lcywgYWxsQXR0cmlidXRlcyk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKFNwbGlkZS5vcHRpb25zLmlzTmF2aWdhdGlvbikge1xuICAgICAgICBTcGxpZGUub24oJ25hdmlnYXRpb246bW91bnRlZCBuYXZpZ2F0aW9uOnVwZGF0ZWQnLCBpbml0TmF2aWdhdGlvbikub24oJ2FjdGl2ZScsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb24oU2xpZGUsIHRydWUpO1xuICAgICAgICB9KS5vbignaW5hY3RpdmUnLCBmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uKFNsaWRlLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpbml0QXV0b3BsYXkoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBBcnJvd3MgPSBDb21wb25lbnRzLkFycm93cztcbiAgICAgIHZhciBhcnJvd3MgPSBBcnJvd3MgPyBBcnJvd3MuYXJyb3dzIDoge307XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoRWxlbWVudHMuc2xpZGVzLmNvbmNhdChbYXJyb3dzLnByZXYsIGFycm93cy5uZXh0LCBFbGVtZW50cy5wbGF5LCBFbGVtZW50cy5wYXVzZV0pLCBhbGxBdHRyaWJ1dGVzKTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBzbGlkZSBhdHRyaWJ1dGVzIHdoZW4gaXQgZ2V0cyB2aXNpYmxlIG9yIGhpZGRlbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gc2xpZGUgICAtIEEgc2xpZGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZpc2libGUgLSBUcnVlIHdoZW4gdGhlIHNsaWRlIGdldHMgdmlzaWJsZSwgb3IgZmFsc2Ugd2hlbiBoaWRkZW4uXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlU2xpZGUoc2xpZGUsIHZpc2libGUpIHtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfSElEREVOLCAhdmlzaWJsZSk7XG5cbiAgICBpZiAoU3BsaWRlLm9wdGlvbnMuc2xpZGVGb2N1cykge1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBUQUJfSU5ERVgsIHZpc2libGUgPyAwIDogLTEpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGFycm93cyBpZiB0aGV5IGFyZSBhdmFpbGFibGUuXHJcbiAgICogQXBwZW5kIHNjcmVlbiByZWFkZXIgZWxlbWVudHMgYW5kIGFkZCBhcmlhLWNvbnRyb2xzIGF0dHJpYnV0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcHJldiAtIFByZXZpb3VzIGFycm93IGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBuZXh0IC0gTmV4dCBhcnJvdyBlbGVtZW50LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdEFycm93cyhwcmV2LCBuZXh0KSB7XG4gICAgdmFyIGNvbnRyb2xzID0gRWxlbWVudHMudHJhY2suaWQ7XG4gICAgc2V0QXR0cmlidXRlKHByZXYsIEFSSUFfQ09OVFJPTFMsIGNvbnRyb2xzKTtcbiAgICBzZXRBdHRyaWJ1dGUobmV4dCwgQVJJQV9DT05UUk9MUywgY29udHJvbHMpO1xuICB9XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhcnJvdyBhdHRyaWJ1dGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwcmV2ICAgICAgLSBQcmV2aW91cyBhcnJvdyBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbmV4dCAgICAgIC0gTmV4dCBhcnJvdyBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgcHJldkluZGV4IC0gUHJldmlvdXMgc2xpZGUgaW5kZXggb3IgLTEgd2hlbiB0aGVyZSBpcyBubyBwcmVjZWRlIHNsaWRlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgbmV4dEluZGV4IC0gTmV4dCBzbGlkZSBpbmRleCBvciAtMSB3aGVuIHRoZXJlIGlzIG5vIG5leHQgc2xpZGUuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiB1cGRhdGVBcnJvd3MocHJldiwgbmV4dCwgcHJldkluZGV4LCBuZXh0SW5kZXgpIHtcbiAgICB2YXIgaW5kZXggPSBTcGxpZGUuaW5kZXg7XG4gICAgdmFyIHByZXZMYWJlbCA9IHByZXZJbmRleCA+IC0xICYmIGluZGV4IDwgcHJldkluZGV4ID8gaTE4bi5sYXN0IDogaTE4bi5wcmV2O1xuICAgIHZhciBuZXh0TGFiZWwgPSBuZXh0SW5kZXggPiAtMSAmJiBpbmRleCA+IG5leHRJbmRleCA/IGkxOG4uZmlyc3QgOiBpMThuLm5leHQ7XG4gICAgc2V0QXR0cmlidXRlKHByZXYsIEFSSUFfTEFCRUwsIHByZXZMYWJlbCk7XG4gICAgc2V0QXR0cmlidXRlKG5leHQsIEFSSUFfTEFCRUwsIG5leHRMYWJlbCk7XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBwYWdpbmF0aW9uIGlmIGl0J3MgYXZhaWxhYmxlLlxyXG4gICAqIEFwcGVuZCBhIHNjcmVlbiByZWFkZXIgZWxlbWVudCBhbmQgYWRkIGFyaWEtY29udHJvbHMvbGFiZWwgYXR0cmlidXRlIHRvIGVhY2ggaXRlbS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICAgICAgIC0gRGF0YSBvYmplY3QgY29udGFpbmluZyBhbGwgaXRlbXMuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGl2ZUl0ZW0gLSBBbiBpbml0aWFsIGFjdGl2ZSBpdGVtLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdFBhZ2luYXRpb24oZGF0YSwgYWN0aXZlSXRlbSkge1xuICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoYWN0aXZlSXRlbS5idXR0b24sIEFSSUFfQ1VSUkVOUlQsIHRydWUpO1xuICAgIH1cblxuICAgIGRhdGEuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHZhciB0ZXh0ID0gb3B0aW9ucy5mb2N1cyA9PT0gZmFsc2UgJiYgb3B0aW9ucy5wZXJQYWdlID4gMSA/IGkxOG4ucGFnZVggOiBpMThuLnNsaWRlWDtcbiAgICAgIHZhciBsYWJlbCA9IHNwcmludGYodGV4dCwgaXRlbS5wYWdlICsgMSk7XG4gICAgICB2YXIgYnV0dG9uID0gaXRlbS5idXR0b247XG4gICAgICB2YXIgY29udHJvbHMgPSBpdGVtLlNsaWRlcy5tYXAoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHJldHVybiBTbGlkZS5zbGlkZS5pZDtcbiAgICAgIH0pO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9DT05UUk9MUywgY29udHJvbHMuam9pbignICcpKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIEFSSUFfTEFCRUwsIGxhYmVsKTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBVcGRhdGUgcGFnaW5hdGlvbiBhdHRyaWJ1dGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBkYXRhIC0gRGF0YSBvYmplY3QgY29udGFpbmluZyBhbGwgaXRlbXMuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwcmV2IC0gQSBwcmV2aW91cyBhY3RpdmUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGN1cnIgLSBBIGN1cnJlbnQgYWN0aXZlIGVsZW1lbnQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiB1cGRhdGVQYWdpbmF0aW9uKGRhdGEsIHByZXYsIGN1cnIpIHtcbiAgICBpZiAocHJldikge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKHByZXYuYnV0dG9uLCBBUklBX0NVUlJFTlJUKTtcbiAgICB9XG5cbiAgICBpZiAoY3Vycikge1xuICAgICAgc2V0QXR0cmlidXRlKGN1cnIuYnV0dG9uLCBBUklBX0NVUlJFTlJULCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBhdXRvcGxheSBidXR0b25zLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdEF1dG9wbGF5KCkge1xuICAgIFsncGxheScsICdwYXVzZSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbG0gPSBFbGVtZW50c1tuYW1lXTtcblxuICAgICAgaWYgKGVsbSkge1xuICAgICAgICBpZiAoIWlzQnV0dG9uKGVsbSkpIHtcbiAgICAgICAgICBzZXRBdHRyaWJ1dGUoZWxtLCAncm9sZScsICdidXR0b24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEF0dHJpYnV0ZShlbG0sIEFSSUFfQ09OVFJPTFMsIEVsZW1lbnRzLnRyYWNrLmlkKTtcbiAgICAgICAgc2V0QXR0cmlidXRlKGVsbSwgQVJJQV9MQUJFTCwgaTE4bltuYW1lXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBuYXZpZ2F0aW9uIHNsaWRlci5cclxuICAgKiBBZGQgYnV0dG9uIHJvbGUsIGFyaWEtbGFiZWwsIGFyaWEtY29udHJvbHMgdG8gc2xpZGUgZWxlbWVudHMgYW5kIGFwcGVuZCBzY3JlZW4gcmVhZGVyIHRleHQgdG8gdGhlbS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3BsaWRlfSBtYWluIC0gQSBtYWluIFNwbGlkZSBpbnN0YW5jZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGluaXROYXZpZ2F0aW9uKG1haW4pIHtcbiAgICBFbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgdmFyIHNsaWRlID0gU2xpZGUuc2xpZGU7XG4gICAgICB2YXIgcmVhbEluZGV4ID0gU2xpZGUucmVhbEluZGV4O1xuXG4gICAgICBpZiAoIWlzQnV0dG9uKHNsaWRlKSkge1xuICAgICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsICdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2xpZGVJbmRleCA9IHJlYWxJbmRleCA+IC0xID8gcmVhbEluZGV4IDogU2xpZGUuaW5kZXg7XG4gICAgICB2YXIgbGFiZWwgPSBzcHJpbnRmKGkxOG4uc2xpZGVYLCBzbGlkZUluZGV4ICsgMSk7XG4gICAgICB2YXIgbWFpblNsaWRlID0gbWFpbi5Db21wb25lbnRzLkVsZW1lbnRzLmdldFNsaWRlKHNsaWRlSW5kZXgpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMLCBsYWJlbCk7XG5cbiAgICAgIGlmIChtYWluU2xpZGUpIHtcbiAgICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0NPTlRST0xTLCBtYWluU2xpZGUuc2xpZGUuaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBuYXZpZ2F0aW9uIGF0dHJpYnV0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gIFNsaWRlICAtIEEgdGFyZ2V0IFNsaWRlIG9iamVjdC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFjdGl2ZSAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIGFjdGl2ZSBvciBmYWxzZSBpZiBpbmFjdGl2ZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb24oX3JlZiwgYWN0aXZlKSB7XG4gICAgdmFyIHNsaWRlID0gX3JlZi5zbGlkZTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9DVVJSRU5SVCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShzbGlkZSwgQVJJQV9DVVJSRU5SVCk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGJ1dHRvbiBvciBub3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAtIEFuIGVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBidXR0b24uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpc0J1dHRvbihlbG0pIHtcbiAgICByZXR1cm4gZWxtLnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICB9XG5cbiAgcmV0dXJuIEExMXk7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL3N5bmMvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBzeW5jaHJvbml6aW5nIGEgc2xpZGVyIHdpdGggYW5vdGhlci5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBUaGUgZXZlbnQgbmFtZSBmb3Igc3luYy5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBTWU5DX0VWRU5UID0gJ21vdmUuc3luYyc7XG4vKipcclxuICogVGhlIGV2ZW50IG5hbWVzIGZvciBjbGljayBuYXZpZ2F0aW9uLlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIENMSUNLX0VWRU5UUyA9ICdtb3VzZXVwIHRvdWNoZW5kJztcbi8qKlxyXG4gKiBUaGUga2V5cyBmb3IgdHJpZ2dlcmluZyB0aGUgbmF2aWdhdGlvbiBidXR0b24uXHJcbiAqXHJcbiAqIEB0eXBlIHtTdHJpbmdbXX1cclxuICovXG5cbnZhciBUUklHR0VSX0tFWVMgPSBbJyAnLCAnRW50ZXInLCAnU3BhY2ViYXInXTtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBzeW5jaHJvbml6aW5nIGEgc2xpZGVyIHdpdGggYW5vdGhlci5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHN5bmMgPSAoZnVuY3Rpb24gKFNwbGlkZSkge1xuICAvKipcclxuICAgKiBLZWVwIHRoZSBzaWJsaW5nIFNwbGlkZSBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtTcGxpZGV9XHJcbiAgICovXG4gIHZhciBzaWJsaW5nID0gU3BsaWRlLnNpYmxpbmc7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNpYmxpbmcgc2xpZGVyIGlzIG5hdmlnYXRpb24gb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge1NwbGlkZXxib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc05hdmlnYXRpb24gPSBzaWJsaW5nICYmIHNpYmxpbmcub3B0aW9ucy5pc05hdmlnYXRpb247XG4gIC8qKlxyXG4gICAqIExheW91dCBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgU3luYyA9IHtcbiAgICAvKipcclxuICAgICAqIFJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgc3ViIHNsaWRlciBpcyBhdmFpbGFibGUuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogISFzaWJsaW5nLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBzeW5jTWFpbigpO1xuICAgICAgc3luY1NpYmxpbmcoKTtcblxuICAgICAgaWYgKGlzTmF2aWdhdGlvbikge1xuICAgICAgICBiaW5kKCk7XG4gICAgICAgIFNwbGlkZS5vbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGJpbmQoKTtcbiAgICAgICAgICAgIHNpYmxpbmcuZW1pdCgnbmF2aWdhdGlvbjp1cGRhdGVkJywgU3BsaWRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIGFyZSBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIGlmIChpc05hdmlnYXRpb24pIHtcbiAgICAgICAgc2libGluZy5lbWl0KCduYXZpZ2F0aW9uOm1vdW50ZWQnLCBTcGxpZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRoZSBwcmltYXJ5IHNsaWRlciBldmVudCB0byBtb3ZlIHNlY29uZGFyeSBvbmUuXHJcbiAgICogTXVzdCB1bmJpbmQgYSBoYW5kbGVyIGF0IGZpcnN0IHRvIGF2b2lkIGluZmluaXRlIGxvb3AuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gc3luY01haW4oKSB7XG4gICAgU3BsaWRlLm9uKFNZTkNfRVZFTlQsIGZ1bmN0aW9uIChuZXdJbmRleCwgcHJldkluZGV4LCBkZXN0SW5kZXgpIHtcbiAgICAgIHNpYmxpbmcub2ZmKFNZTkNfRVZFTlQpLmdvKHNpYmxpbmcuaXMoTE9PUCkgPyBkZXN0SW5kZXggOiBuZXdJbmRleCwgZmFsc2UpO1xuICAgICAgc3luY1NpYmxpbmcoKTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBMaXN0ZW4gdGhlIHNlY29uZGFyeSBzbGlkZXIgZXZlbnQgdG8gbW92ZSBwcmltYXJ5IG9uZS5cclxuICAgKiBNdXN0IHVuYmluZCBhIGhhbmRsZXIgYXQgZmlyc3QgdG8gYXZvaWQgaW5maW5pdGUgbG9vcC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN5bmNTaWJsaW5nKCkge1xuICAgIHNpYmxpbmcub24oU1lOQ19FVkVOVCwgZnVuY3Rpb24gKG5ld0luZGV4LCBwcmV2SW5kZXgsIGRlc3RJbmRleCkge1xuICAgICAgU3BsaWRlLm9mZihTWU5DX0VWRU5UKS5nbyhTcGxpZGUuaXMoTE9PUCkgPyBkZXN0SW5kZXggOiBuZXdJbmRleCwgZmFsc2UpO1xuICAgICAgc3luY01haW4oKTtcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBMaXN0ZW4gc29tZSBldmVudHMgb24gZWFjaCBzbGlkZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgc2libGluZy5Db21wb25lbnRzLkVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBzbGlkZSA9IF9yZWYuc2xpZGUsXG4gICAgICAgICAgaW5kZXggPSBfcmVmLmluZGV4O1xuXG4gICAgICAvKlxyXG4gICAgICAgKiBMaXN0ZW4gbW91c2V1cCBhbmQgdG91Y2hlbmQgZXZlbnRzIHRvIGhhbmRsZSBjbGljay5cclxuICAgICAgICovXG4gICAgICBTcGxpZGUub2ZmKENMSUNLX0VWRU5UUywgc2xpZGUpLm9uKENMSUNLX0VWRU5UUywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gSWdub3JlIGEgbWlkZGxlIG9yIHJpZ2h0IGNsaWNrLlxuICAgICAgICBpZiAoIWUuYnV0dG9uIHx8IGUuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgbW92ZVNpYmxpbmcoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LCBzbGlkZSk7XG4gICAgICAvKlxyXG4gICAgICAgKiBTdWJzY3JpYmUga2V5dXAgdG8gaGFuZGxlIEVudGVyIGFuZCBTcGFjZSBrZXkuXHJcbiAgICAgICAqIE5vdGUgdGhhdCBBcnJheS5pbmNsdWRlcyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFLlxyXG4gICAgICAgKi9cblxuICAgICAgU3BsaWRlLm9mZigna2V5dXAnLCBzbGlkZSkub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKFRSSUdHRVJfS0VZUy5pbmRleE9mKGUua2V5KSA+IC0xKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG1vdmVTaWJsaW5nKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSwgc2xpZGUsIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIE1vdmUgdGhlIHNpYmxpbmcgdG8gdGhlIGdpdmVuIGluZGV4LlxyXG4gICAqIE5lZWQgdG8gY2hlY2sgXCJJRExFXCIgc3RhdHVzIGJlY2F1c2Ugc2xpZGVzIGNhbiBiZSBtb3ZpbmcgYnkgRHJhZyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUYXJnZXQgaW5kZXguXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBtb3ZlU2libGluZyhpbmRleCkge1xuICAgIGlmIChTcGxpZGUuU3RhdGUuaXMoSURMRSkpIHtcbiAgICAgIHNpYmxpbmcuZ28oaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTeW5jO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9icmVha3BvaW50cy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHVwZGF0aW5nIG9wdGlvbnMgYWNjb3JkaW5nIHRvIGEgY3VycmVudCB3aW5kb3cgd2lkdGguXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogSW50ZXJ2YWwgdGltZSBmb3IgdGhyb3R0bGUuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgVEhST1RUTEUgPSA1MDtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciB1cGRhdGluZyBvcHRpb25zIGFjY29yZGluZyB0byBhIGN1cnJlbnQgd2luZG93IHdpZHRoLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgYnJlYWtwb2ludHMgPSAoZnVuY3Rpb24gKFNwbGlkZSkge1xuICAvKipcclxuICAgKiBTdG9yZSBicmVha3BvaW50cy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R8Ym9vbGVhbn1cclxuICAgKi9cbiAgdmFyIGJyZWFrcG9pbnRzID0gU3BsaWRlLm9wdGlvbnMuYnJlYWtwb2ludHM7XG4gIC8qKlxyXG4gICAqIFRoZSBjaGVjayBmdW5jdGlvbiB3aG9zZSBmcmVxdWVuY3kgb2YgY2FsbCBpcyByZWR1Y2VkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gICAqL1xuXG4gIHZhciB0aHJvdHRsZWRDaGVjayA9IHRocm90dGxlKGNoZWNrLCBUSFJPVFRMRSk7XG4gIC8qKlxyXG4gICAqIEtlZXAgaW5pdGlhbCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgaW5pdGlhbE9wdGlvbnM7XG4gIC8qKlxyXG4gICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgb2JqZWN0cyBvZiBwb2ludCBhbmQgTWVkaWFRdWVyeUxpc3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0W119XHJcbiAgICovXG5cbiAgdmFyIG1hcCA9IFtdO1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBwcmV2aW91cyBicmVha3BvaW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XHJcbiAgICovXG5cbiAgdmFyIHByZXZQb2ludDtcbiAgLyoqXHJcbiAgICogQnJlYWtwb2ludHMgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEJyZWFrcG9pbnRzID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBicmVha3BvaW50cyBkZWZpbml0aW9uIGlzIHByb3ZpZGVkIGFuZCBicm93c2VyIHN1cHBvcnRzIG1hdGNoTWVkaWEuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogYnJlYWtwb2ludHMgJiYgbWF0Y2hNZWRpYSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgbWFwID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLnNvcnQoZnVuY3Rpb24gKG4sIG0pIHtcbiAgICAgICAgcmV0dXJuICtuIC0gK207XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICAgIG1xbDogbWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6XCIgKyBwb2ludCArIFwicHgpXCIpXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIC8qXHJcbiAgICAgICAqIFRvIGtlZXAgbW9uaXRvcmluZyByZXNpemUgZXZlbnQgYWZ0ZXIgZGVzdHJ1Y3Rpb24gd2l0aG91dCBcImNvbXBsZXRlbHlcIixcclxuICAgICAgICogdXNlIG5hdGl2ZSBhZGRFdmVudExpc3RlbmVyIGluc3RlYWQgb2YgU3BsaWRlLm9uLlxyXG4gICAgICAgKi9cblxuICAgICAgdGhpcy5kZXN0cm95KHRydWUpO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGVkQ2hlY2spOyAvLyBLZWVwIGluaXRpYWwgb3B0aW9ucyB0byBhcHBseSB0aGVtIHdoZW4gbm8gYnJlYWtwb2ludCBtYXRjaGVzLlxuXG4gICAgICBpbml0aWFsT3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgY2hlY2soKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tcGxldGVseSAtIFdoZXRoZXIgdG8gZGVzdHJveSBTcGxpZGUgY29tcGxldGVseS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgICAgaWYgKGNvbXBsZXRlbHkpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGVkQ2hlY2spO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQ2hlY2sgdGhlIGJyZWFrcG9pbnQuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgdmFyIHBvaW50ID0gZ2V0UG9pbnQoKTtcblxuICAgIGlmIChwb2ludCAhPT0gcHJldlBvaW50KSB7XG4gICAgICBwcmV2UG9pbnQgPSBwb2ludDtcbiAgICAgIHZhciBTdGF0ZSA9IFNwbGlkZS5TdGF0ZTtcbiAgICAgIHZhciBvcHRpb25zID0gYnJlYWtwb2ludHNbcG9pbnRdIHx8IGluaXRpYWxPcHRpb25zO1xuICAgICAgdmFyIGRlc3Ryb3kgPSBvcHRpb25zLmRlc3Ryb3k7XG5cbiAgICAgIGlmIChkZXN0cm95KSB7XG4gICAgICAgIFNwbGlkZS5vcHRpb25zID0gaW5pdGlhbE9wdGlvbnM7XG4gICAgICAgIFNwbGlkZS5kZXN0cm95KGRlc3Ryb3kgPT09ICdjb21wbGV0ZWx5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoU3RhdGUuaXMoREVTVFJPWUVEKSkge1xuICAgICAgICAgIFNwbGlkZS5tb3VudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgU3BsaWRlLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gdGhlIGJyZWFrcG9pbnQgbWF0Y2hpbmcgY3VycmVudCB3aW5kb3cgd2lkdGguXHJcbiAgICogTm90ZSB0aGF0IEFycmF5LnByb3RvdHlwZS5maW5kIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ8c3RyaW5nfSAtIEEgYnJlYWtwb2ludCBhcyBudW1iZXIgb3Igc3RyaW5nLiAtMSBpZiBubyBwb2ludCBtYXRjaGVzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0UG9pbnQoKSB7XG4gICAgdmFyIGl0ZW0gPSBtYXAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5tcWwubWF0Y2hlcztcbiAgICB9KVswXTtcbiAgICByZXR1cm4gaXRlbSA/IGl0ZW0ucG9pbnQgOiAtMTtcbiAgfVxuXG4gIHJldHVybiBCcmVha3BvaW50cztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvaW5kZXguanNcbi8qKlxyXG4gKiBFeHBvcnQgY29tcG9uZW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBDT01QTEVURSA9IHtcbiAgT3B0aW9uczogb3B0aW9ucyxcbiAgQnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICBDb250cm9sbGVyOiBjb250cm9sbGVyLFxuICBFbGVtZW50czogY29tcG9uZW50c19lbGVtZW50cyxcbiAgVHJhY2s6IHRyYWNrLFxuICBDbG9uZXM6IGNsb25lcyxcbiAgTGF5b3V0OiBsYXlvdXQsXG4gIERyYWc6IGRyYWcsXG4gIENsaWNrOiBjbGljayxcbiAgQXV0b3BsYXk6IGF1dG9wbGF5LFxuICBDb3ZlcjogY292ZXIsXG4gIEFycm93czogYXJyb3dzLFxuICBQYWdpbmF0aW9uOiBwYWdpbmF0aW9uLFxuICBMYXp5TG9hZDogbGF6eWxvYWQsXG4gIEtleWJvYXJkOiBrZXlib2FyZCxcbiAgU3luYzogc3luYyxcbiAgQTExeTogYTExeVxufTtcbnZhciBMSUdIVCA9IHtcbiAgT3B0aW9uczogb3B0aW9ucyxcbiAgQ29udHJvbGxlcjogY29udHJvbGxlcixcbiAgRWxlbWVudHM6IGNvbXBvbmVudHNfZWxlbWVudHMsXG4gIFRyYWNrOiB0cmFjayxcbiAgQ2xvbmVzOiBjbG9uZXMsXG4gIExheW91dDogbGF5b3V0LFxuICBEcmFnOiBkcmFnLFxuICBDbGljazogY2xpY2ssXG4gIEFycm93czogYXJyb3dzLFxuICBQYWdpbmF0aW9uOiBwYWdpbmF0aW9uLFxuICBBMTF5OiBhMTF5XG59O1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vYnVpbGQvbW9kdWxlL21vZHVsZS5qc1xuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxyXG4gKiBFeHBvcnQgU3BsaWRlIGNsYXNzIGZvciBpbXBvcnQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogRXhwb3J0IFNwbGlkZSBjbGFzcyBmb3IgaW1wb3J0IGZyb20gb3RoZXIgcHJvamVjdHMuXHJcbiAqL1xuXG52YXIgbW9kdWxlX1NwbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvcmUpIHtcbiAgX2luaGVyaXRzTG9vc2UoU3BsaWRlLCBfQ29yZSk7XG5cbiAgZnVuY3Rpb24gU3BsaWRlKHJvb3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gX0NvcmUuY2FsbCh0aGlzLCByb290LCBvcHRpb25zLCBDT01QTEVURSkgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBTcGxpZGU7XG59KFNwbGlkZSk7XG5cblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKVxuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuLyoqKioqKi8gXHRcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxMSk7XG4vKioqKioqLyB9KSgpXG47XG59KTsiLCJpbXBvcnQgUHJvZHVjdHNDYXJvdXNlbCBmcm9tIFwiLi9wcm9kdWN0LWNhcm91c2VsXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYERPTUNvbnRlbnRMb2FkZWRgLCAoKSA9PiB7XG4gICBuZXcgUHJvZHVjdHNDYXJvdXNlbChgLmpzLXByb2R1Y3RzLWNhcm91c2VsYCkuaW5pdCgpO1xufSk7IiwiaW1wb3J0IFNwbGlkZSBmcm9tIFwiQHNwbGlkZWpzL3NwbGlkZVwiO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvZm5hc3RpbC1yZWRlc2lnbi9zcmMvanMvdXRpbHMvYnJlYWtwb2ludHNcIjtcblxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xuICBicmVha3BvaW50czoge1xuICAgIFtCUkVBS1BPSU5UUy54bF06IHtcbiAgICAgIHBlclBhZ2U6IDQsXG4gICAgfSxcbiAgICBbQlJFQUtQT0lOVFMubGddOiB7XG4gICAgICBwZXJQYWdlOiAzLFxuICAgIH0sXG4gICAgW0JSRUFLUE9JTlRTLm1kXToge1xuICAgICAgcGVyUGFnZTogMixcbiAgICB9LFxuICAgIFtCUkVBS1BPSU5UUy5zbV06IHtcbiAgICAgIHBlclBhZ2U6IDEsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzQ2Fyb3VzZWwge1xuICBjb25zdHJ1Y3RvcihzbGlkZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzbGlkZXJTZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9pbnN0YW5jZXMgPSBbXTtcblxuICAgIHRoaXMuX3NsaWRlTGVmdCA9IHRoaXMuX3NsaWRlTGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3NsaWRlUmlnaHQgPSB0aGlzLl9zbGlkZVJpZ2h0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25UYWJDbGljayA9IHRoaXMuX29uVGFiQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9zbGlkZUxlZnQoaW5zdGFuY2UpIHtcbiAgICBpZiAoaW5zdGFuY2UubGVuZ3RoID4gaW5zdGFuY2Uub3B0aW9ucy5wZXJQYWdlKSB7XG4gICAgICBpbnN0YW5jZS5nbyhgPGApO1xuICAgIH1cbiAgfVxuXG4gIF9zbGlkZVJpZ2h0KGluc3RhbmNlKSB7XG4gICAgaWYgKGluc3RhbmNlLmxlbmd0aCA+IGluc3RhbmNlLm9wdGlvbnMucGVyUGFnZSkge1xuICAgICAgaW5zdGFuY2UuZ28oYD5gKTtcbiAgICB9XG4gIH1cblxuICBfc2V0SGFuZGxlcnMoY29udGFpbmVyRWxlbWVudCwgaW5zdGFuY2UpIHtcbiAgICBjb250YWluZXJFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAuanMtc2xpZGUtbGVmdGApXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB0aGlzLl9zbGlkZUxlZnQoaW5zdGFuY2UpKTtcbiAgICBjb250YWluZXJFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAuanMtc2xpZGUtcmlnaHRgKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4gdGhpcy5fc2xpZGVSaWdodChpbnN0YW5jZSkpO1xuICB9XG5cbiAgX2ZpbHRlclNsaWRlcyhmaWx0ZXJUYXJnZXQsIGluc3RhbmNlLCBjb250YWluZXJFbGVtZW50KSB7XG4gICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRTbGlkZXNGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBbLi4uaW5zdGFuY2Uuc2xpZGVzXS5mb3JFYWNoKChzbGlkZUVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgc2xpZGVFbGVtZW50LmRhdGFzZXQuZmlsdGVyID09PSBmaWx0ZXJUYXJnZXQgfHxcbiAgICAgICAgZmlsdGVyVGFyZ2V0ID09PSBgYWxsYFxuICAgICAgKSB7XG4gICAgICAgIGZpbHRlcmVkU2xpZGVzRnJhZ21lbnQuYXBwZW5kKHNsaWRlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzbGlkZXNDb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5qcy1wcm9kdWN0cy1jYXJvdXNlbC1zbGlkZXMtbGlzdGBcbiAgICApO1xuXG4gICAgc2xpZGVzQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBgYDtcbiAgICBzbGlkZXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGZpbHRlcmVkU2xpZGVzRnJhZ21lbnQpO1xuXG4gICAgaW5zdGFuY2UubW91bnQoKTtcbiAgfVxuXG4gIF90b2dnbGVTZWxlY3RlZFN0YXRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGBbYXJpYS1zZWxlY3RlZD1cInRydWVcIl1gKVxuICAgICAgLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLnNldEF0dHJpYnV0ZShgYXJpYS1zZWxlY3RlZGAsIGBmYWxzZWApKTtcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBhcmlhLXNlbGVjdGVkYCwgYHRydWVgKTtcbiAgfVxuXG4gIF9vblRhYkNsaWNrKHRhcmdldCwgaW5zdGFuY2UsIGNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICBjb25zdCBmaWx0ZXJUYXJnZXQgPSB0YXJnZXQuZGF0YXNldC5maWx0ZXJUYXJnZXQ7XG5cbiAgICB0aGlzLl90b2dnbGVTZWxlY3RlZFN0YXRlKHRhcmdldCk7XG4gICAgdGhpcy5fZmlsdGVyU2xpZGVzKGZpbHRlclRhcmdldCwgaW5zdGFuY2UsIGNvbnRhaW5lckVsZW1lbnQpO1xuICB9XG5cbiAgX2luaXRGaWx0ZXIoY29udGFpbmVyRWxlbWVudCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCB0YWJFbGVtZW50cyA9IGNvbnRhaW5lckVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYFtyb2xlPVwidGFiXCJdYFxuICAgICk7XG4gICAgdGFiRWxlbWVudHMuZm9yRWFjaCgodGFiRWxlbWVudCkgPT5cbiAgICAgIHRhYkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoeyB0YXJnZXQgfSkgPT5cbiAgICAgICAgdGhpcy5fb25UYWJDbGljayh0YXJnZXQsIGluc3RhbmNlLCBjb250YWluZXJFbGVtZW50KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnRzLmZvckVhY2goKGNvbnRhaW5lckVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHNsaWRlcyA9IGNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgYC5qcy1wcm9kdWN0cy1jYXJvdXNlbC1zbGlkZWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNwbGlkZShjb250YWluZXJFbGVtZW50LCB7XG4gICAgICAgIHBlclBhZ2U6IGNvbnRhaW5lckVsZW1lbnQuZGF0YXNldC5wZXJQYWdlLFxuICAgICAgICBnYXA6IGAxLjVyZW1gLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAuLi5ERUZBVUxUX09QVElPTlMsXG4gICAgICB9KTtcblxuICAgICAgaW5zdGFuY2UubW91bnQoKTtcbiAgICAgIGluc3RhbmNlLnNsaWRlcyA9IHNsaWRlcztcblxuICAgICAgdGhpcy5faW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuXG4gICAgICB0aGlzLl9zZXRIYW5kbGVycyhjb250YWluZXJFbGVtZW50LCBpbnN0YW5jZSk7XG4gICAgICB0aGlzLl9pbml0RmlsdGVyKGNvbnRhaW5lckVsZW1lbnQsIGluc3RhbmNlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEJSRUFLUE9JTlRTID0ge1xuICB4bDogMTQwMCxcbiAgbGc6IDEyMDAsXG4gIG1kOiA5OTIsXG4gIHNtOiA3NjgsXG4gIHhzOiA1NzYsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9