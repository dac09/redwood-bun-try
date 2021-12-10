"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@redwoodjs/router");

var _web = require("@redwoodjs/web");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HomePage = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_web.MetaTags, {
    title: "Home" // description="Home description"

    /* you should un-comment description and add a unique description, 155 characters or less
    You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */

  }), /*#__PURE__*/_react.default.createElement("h1", null, "HomePage"), /*#__PURE__*/_react.default.createElement("p", null, "Find me in ", /*#__PURE__*/_react.default.createElement("code", null, "./web/src/pages/HomePage/HomePage.js")), /*#__PURE__*/_react.default.createElement("p", null, "My default route is named ", /*#__PURE__*/_react.default.createElement("code", null, "home"), ", link to me with `", /*#__PURE__*/_react.default.createElement(_router.Link, {
    to: _router.routes.home()
  }, "Home"), "`"));
};

var _default = HomePage;
exports.default = _default;