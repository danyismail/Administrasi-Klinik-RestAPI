"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// app.js
require('dotenv').config();

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use('/api/v1', _index["default"]); // connect to mongoDB
mongoose.connect(process.env.DB_MONGO, { useNewUrlParser: true, useUnifiedTopology: true }) // local
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoDB connected')
})
var mongodUri = 'mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds151943.mlab.com:51943/short_link'
mongoose.connect(mongodUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var _default = app;
exports["default"] = _default;