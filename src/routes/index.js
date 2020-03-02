"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _doctor = _interopRequireDefault(require("./doctor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// routes/index.js
var router = _express["default"].Router();
/* GET home page. */


router.get('/', function (req, res) {
  console.log("here");
  res.status(200).json({
    message: "index page"
  });
});
router.use('/doctor', _doctor["default"]);
var _default = router;
exports["default"] = _default;