"use strict";

var _link = _interopRequireDefault(require("../models/link"));

var _hashLink = _interopRequireDefault(require("../helpers/hashLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  // 
  getLinks: function getLinks(req, res) {
    _link["default"].find({}).then(function (data) {
      res.status(200).json({
        data: data,
        message: "get links"
      });
    })["catch"](function (err) {
      res.status(500).json({
        err: err,
        message: "data failure to get"
      });
    });
  },
  createLink: function createLink(req, res) {
    _hashLink["default"].shorten({
      longUrl: req.body.longUrl
    }, function (err, results) {
      // Do something with your new, shorter url...
      if (err) {
        res.status(500).json({
          message: "something trouble with your link"
        });
      }

      if (results) {
        var result = JSON.parse(results); // if post status success from bit.ly API

        if (result.status_code === 200) {
          var linkData = new _link["default"]({
            longUrl: req.body.longUrl,
            shortUrl: result.data.url,
            hashed: result.data.hash
          });
          linkData.save().then(function (data) {
            res.status(201).json({
              data: data,
              message: "get links"
            });
          })["catch"](function (err) {
            res.status(500).json({
              err: err,
              message: "data failure to get"
            });
          });
        } else if (result.status_code === 500) {
          // if no url request
          var msg = result.status_txt;

          if (msg = 'MISSING_ARG_URI') {
            res.status(500).json({
              message: "please insert the url"
            }); // if url is invalid
          } else if (msg = "INVALID_URI") {
            res.status(500).json({
              message: "wrong url"
            }); // else 500 response from bit.ly API
          } else {
            res.status(500).json({
              msg: msg
            });
          }
        } else {
          res.status(result.status_code).json({
            message: "there is something wrong with connection"
          });
        }
      }
    });
  },
  // to delete all posted link
  deleteAll: function deleteAll(req, res) {
    _link["default"].remove({}).then(function (data) {
      res.status(200).json({
        data: data,
        message: "all link has been removed"
      });
    })["catch"](function (err) {
      res.status(500).json({
        err: err,
        message: "links failure to remove"
      });
    });
  }
};