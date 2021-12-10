"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@redwoodjs/router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BazingaPage = {
  name: "BazingaPage",
  loader: () => require("./pages/BazingaPage/BazingaPage")
};
const FatalErrorPage = {
  name: "FatalErrorPage",
  loader: () => require("./pages/FatalErrorPage/FatalErrorPage")
};
const HomePage = {
  name: "HomePage",
  loader: () => require("./pages/HomePage/HomePage")
};
const NotFoundPage = {
  name: "NotFoundPage",
  loader: () => require("./pages/NotFoundPage/NotFoundPage")
};

const Routes = () => {
  return /*#__PURE__*/_react.default.createElement(_router.Router, null, /*#__PURE__*/_react.default.createElement(_router.Route, {
    path: "/bazinga",
    page: BazingaPage,
    name: "bazinga"
  }), /*#__PURE__*/_react.default.createElement(_router.Route, {
    path: "/",
    page: HomePage,
    name: "home"
  }), /*#__PURE__*/_react.default.createElement(_router.Route, {
    notfound: true,
    page: NotFoundPage
  }));
};

var _default = Routes;
exports.default = _default;