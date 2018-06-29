(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.IsWhat = {})));
}(this, (function (exports) { 'use strict';

  function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
  }
  function isUndefined(payload) {
    return getType(payload) === 'Undefined';
  }
  function isNull(payload) {
    return getType(payload) === 'Null';
  }
  function isObject(payload) {
    return getType(payload) === 'Object';
  }
  function isArray(payload) {
    return getType(payload) === 'Array';
  }
  function isString(payload) {
    return getType(payload) === 'String';
  }
  function isNumber(payload) {
    return getType(payload) === 'Number';
  }
  function isBoolean(payload) {
    return getType(payload) === 'Boolean';
  }
  function isRegExp(payload) {
    return getType(payload) === 'RegExp';
  }
  function isDate(payload) {
    return getType(payload) === 'Date';
  }

  exports.getType = getType;
  exports.isUndefined = isUndefined;
  exports.isNull = isNull;
  exports.isObject = isObject;
  exports.isArray = isArray;
  exports.isString = isString;
  exports.isNumber = isNumber;
  exports.isBoolean = isBoolean;
  exports.isRegExp = isRegExp;
  exports.isDate = isDate;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
