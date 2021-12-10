"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _web = require("@redwoodjs/web");

var _apollo = require("@redwoodjs/web/apollo");

var _FatalErrorPage = _interopRequireDefault(require("./pages/FatalErrorPage/FatalErrorPage"));

var _Routes = _interopRequireDefault(require("./Routes"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => /*#__PURE__*/_react.default.createElement(_web.FatalErrorBoundary, {
  page: _FatalErrorPage.default
}, /*#__PURE__*/_react.default.createElement(_web.RedwoodProvider, {
  titleTemplate: "%PageTitle | %AppTitle"
}, /*#__PURE__*/_react.default.createElement(_apollo.RedwoodApolloProvider, null, /*#__PURE__*/_react.default.createElement(_Routes.default, null))));

var _default = App;
exports.default = _default;