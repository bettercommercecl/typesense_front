"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;
var _PopUpSearcher = _interopRequireDefault(require("@/src/components/PopUpSearcher/PopUpSearcher"));
var _pageModule = _interopRequireDefault(require("./page.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Home() {
  return /*#__PURE__*/React.createElement("div", {
    className: _pageModule["default"].page
  }, /*#__PURE__*/React.createElement("main", {
    className: _pageModule["default"].main
  }, /*#__PURE__*/React.createElement(_PopUpSearcher["default"], null)));
}