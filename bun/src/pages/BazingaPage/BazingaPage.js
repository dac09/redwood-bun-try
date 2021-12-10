"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@redwoodjs/router");

var _web = require("@redwoodjs/web");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BazingaPage = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_web.MetaTags, {
    title: "Bazinga" // description="Bazinga description"

    /* you should un-comment description and add a unique description, 155 characters or less
    You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */

  }), /*#__PURE__*/_react.default.createElement("h1", null, "BazingaPage"), /*#__PURE__*/_react.default.createElement("p", null, "Find me in ", /*#__PURE__*/_react.default.createElement("code", null, "./web/src/pages/BazingaPage/BazingaPage.js")), /*#__PURE__*/_react.default.createElement("p", null, "My default route is named ", /*#__PURE__*/_react.default.createElement("code", null, "bazinga"), ", link to me with `", /*#__PURE__*/_react.default.createElement(_router.Link, {
    to: _router.routes.bazinga()
  }, "Bazinga"), "`"));
};

var _default = BazingaPage;
exports.default = _default;