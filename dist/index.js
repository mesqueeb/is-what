(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Index = {})));
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

  var src = {
    getType: getType,
    isUndefined: isUndefined,
    isNull: isNull,
    isObject: isObject,
    isArray: isArray,
    isString: isString,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isRegExp: isRegExp,
    isDate: isDate
  };
  var src_1 = src.getType;
  var src_2 = src.isUndefined;
  var src_3 = src.isNull;
  var src_4 = src.isObject;
  var src_5 = src.isArray;
  var src_6 = src.isString;
  var src_7 = src.isNumber;
  var src_8 = src.isBoolean;
  var src_9 = src.isRegExp;
  var src_10 = src.isDate;

  exports.default = src;
  exports.getType = src_1;
  exports.isUndefined = src_2;
  exports.isNull = src_3;
  exports.isObject = src_4;
  exports.isArray = src_5;
  exports.isString = src_6;
  exports.isNumber = src_7;
  exports.isBoolean = src_8;
  exports.isRegExp = src_9;
  exports.isDate = src_10;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
