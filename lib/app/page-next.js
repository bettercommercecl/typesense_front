"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;
var _image = _interopRequireDefault(require("next/image"));
var _pageModule = _interopRequireDefault(require("./page.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Home() {
  return /*#__PURE__*/React.createElement("div", {
    className: _pageModule["default"].page
  }, /*#__PURE__*/React.createElement("main", {
    className: _pageModule["default"].main
  }, /*#__PURE__*/React.createElement(_image["default"], {
    className: _pageModule["default"].logo,
    src: "/next.svg",
    alt: "Next.js logo",
    width: 180,
    height: 38,
    priority: true
  }), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Get started by editing ", /*#__PURE__*/React.createElement("code", null, "app/page.js"), "."), /*#__PURE__*/React.createElement("li", null, "Save and see your changes instantly.")), /*#__PURE__*/React.createElement("div", {
    className: _pageModule["default"].ctas
  }, /*#__PURE__*/React.createElement("a", {
    className: _pageModule["default"].primary,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    className: _pageModule["default"].logo,
    src: "/vercel.svg",
    alt: "Vercel logomark",
    width: 20,
    height: 20
  }), "Deploy now"), /*#__PURE__*/React.createElement("a", {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _pageModule["default"].secondary
  }, "Read our docs"))), /*#__PURE__*/React.createElement("footer", {
    className: _pageModule["default"].footer
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    "aria-hidden": true,
    src: "/file.svg",
    alt: "File icon",
    width: 16,
    height: 16
  }), "Learn"), /*#__PURE__*/React.createElement("a", {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    "aria-hidden": true,
    src: "/window.svg",
    alt: "Window icon",
    width: 16,
    height: 16
  }), "Examples"), /*#__PURE__*/React.createElement("a", {
    href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    "aria-hidden": true,
    src: "/globe.svg",
    alt: "Globe icon",
    width: 16,
    height: 16
  }), "Go to nextjs.org \u2192")));
}