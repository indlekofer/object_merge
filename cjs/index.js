"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(objects) {
  var obj = {};

  for (var i = 0, c = objects.length; i < c; i++) {
    for (var key in objects[i]) {
      //do not replace prototypes 
      if (Object.prototype.hasOwnProperty.call(objects[i], key)) {
        obj[key] = objects[i][key];
      }
    }
  }

  return obj;
};

exports["default"] = _default;