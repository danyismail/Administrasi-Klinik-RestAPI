"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _doctorController = require("../controllers/doctorController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* Link routing. */


router.get('/', _doctorController.getAll);
router.post('/', _doctorController.create);
router["delete"]('/', _doctorController.deleteAll);
var _default = router;
exports["default"] = _default;