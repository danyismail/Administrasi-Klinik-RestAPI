"use strict";

var _faker = _interopRequireDefault(require("faker"));

var _doctor = _interopRequireDefault(require("../../models/doctor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var doctors = [];
var doctTitle = ['dr.', 'drg.'];

for (var i = 0; i < 5; ++i) {
  var newDoctor = {
    fullname: _faker["default"].name.firstName + ' ' + _faker["default"].name.lastName,
    title: doctTitle[Math.floor(Math.random() * 2)],
    username: _faker["default"].name.findName,
    password: _faker["default"].random.word,
    birthdate: _faker["default"].date.past,
    birthplace: _faker["default"].address.city,
    phoneNumber: _faker["default"].phone.phoneNumber,
    address: _faker["default"].address.streetAddress,
    city: _faker["default"].address.city,
    province: _faker["default"].address.state,
    zipCode: _faker["default"].address.zipCode,
    country: _faker["default"].address.country,
    nik: _faker["default"].random.number
  };
  doctors.push(newDoctor);
}

_doctor["default"].insertMany(doctors);