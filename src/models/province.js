"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ProvinceSchema = new Schema({
  name: {
    type: String
  }
}, {
  timestamps: true
});

var Province = _mongoose["default"].model("Province", ProvinceSchema);

var _default = Province;
exports["default"] = _default;