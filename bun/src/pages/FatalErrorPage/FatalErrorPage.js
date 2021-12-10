"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This page will be rendered when an error makes it all the way to the top of the
// application without being handled by a Javascript catch statement or React error
// boundary.
//
// You can modify this page as you wish, but it is important to keep things simple to
// avoid the possibility that it will cause its own error. If it does, Redwood will
// still render a generic error page, but your users will prefer something a bit more
// thoughtful. =)
var _default = () => /*#__PURE__*/_react.default.createElement("main", null, /*#__PURE__*/_react.default.createElement("style", {
  dangerouslySetInnerHTML: {
    __html: "\n              html, body {\n                margin: 0;\n              }\n              html * {\n                box-sizing: border-box;\n              }\n              main {\n                display: flex;\n                align-items: center;\n                font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif;\n                text-align: center;\n                background-color: #E2E8F0;\n                height: 100vh;\n              }\n              section {\n                background-color: white;\n                border-radius: 0.25rem;\n                width: 32rem;\n                padding: 1rem;\n                margin: 0 auto;\n                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n              }\n              h1 {\n                font-size: 2rem;\n                margin: 0;\n                font-weight: 500;\n                line-height: 1;\n                color: #2D3748;\n              }\n            "
  }
}), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("span", null, "Something went wrong"))));

exports.default = _default;