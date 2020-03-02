"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var CountrySchema = new Schema({
  name: {
    type: String
  }
}, {
  timestamps: true
});

var Country = _mongoose["default"].model("Country", CountrySchema);

var _default = Country;
exports["default"] = _default;