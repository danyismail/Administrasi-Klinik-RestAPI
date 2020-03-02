"use strict";

var _doctor = _interopRequireDefault(require("../models/doctor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  // 
  getAll: function getAll(req, res) {
    _doctor["default"].find({}).then(function (data) {
      res.status(200).json({
        data: data,
        message: "get all data"
      });
    })["catch"](function (err) {
      res.status(500).json({
        err: err,
        message: "data failure to get"
      });
    });
  },
  create: function create(req, res) {
    var data = {};
  },
  // to delete all posted link
  deleteAll: function deleteAll(req, res) {
    _doctor["default"].remove({}).then(function (data) {
      res.status(200).json({
        data: data,
        message: "all doctor has been removed"
      });
    })["catch"](function (err) {
      res.status(500).json({
        err: err,
        message: "doctors failure to remove"
      });
    });
  }
};