"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ZipCode = new Schema({
  name: {
    type: String
  }
}, {
  timestamps: true
}); 

const ZipCode = mongoose.model("ZipCode", ZipCode);
export default ZipCode