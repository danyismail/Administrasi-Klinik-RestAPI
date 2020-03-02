"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var CitySchema = new Schema({
  name: {
    type: String
  }
}, {
  timestamps: true
});

var City = _mongoose["default"].model("City", CitySchema);

var _default = City;
exports["default"] = _default;