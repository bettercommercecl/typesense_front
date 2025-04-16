"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FreeSolo;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _InputBase = _interopRequireDefault(require("@mui/material/InputBase"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Search = (0, _styles.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (0, _styles.alpha)(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: (0, _styles.alpha)(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%'
  }, theme.breakpoints.up('sm'), {
    marginLeft: theme.spacing(1),
    width: 'auto'
  });
});
var SearchIconWrapper = (0, _styles.styled)('div')(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    'svg': {
      zIndex: 10
    }
  };
});
var BootstrapInput = (0, _styles.styled)(_InputBase["default"])(function (_ref4) {
  var theme = _ref4.theme;
  return {
    'label + &': {
      marginTop: theme.spacing(3)
    },
    '& .MuiInputBase-input': _defineProperty({
      color: '#000000',
      fontWeight: 'bold',
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
      transition: theme.transitions.create('width'),
      backgroundColor: '#e3e3e8',
      width: '100px',
      borderRadius: 24,
      fontFamily: ['Outfit', '-apple-system', 'sans-serif', '"Apple Color Emoji"'].join(','),
      '&:focus': {
        boxShadow: "".concat((0, _styles.alpha)(theme.palette.primary.main, 0.25), " 0 0 0 0.2rem"),
        borderColor: theme.palette.primary.main
      }
    }, theme.breakpoints.up('sm'), {
      width: '12ch',
      '&:focus': {
        width: '15ch'
      }
    })
  };
});
var StyledInputBase = (0, _styles.styled)(_InputBase["default"])(function (_ref5) {
  var theme = _ref5.theme;
  return {
    color: 'inherit',
    '& .MuiInputBase-input': _defineProperty({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    })
  };
});
function FreeSolo(_ref6) {
  var inputHandler = _ref6.inputHandler,
    isDoofinder = _ref6.isDoofinder;
  return /*#__PURE__*/_react["default"].createElement(Search, null, /*#__PURE__*/_react["default"].createElement(SearchIconWrapper, null, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)), /*#__PURE__*/_react["default"].createElement(BootstrapInput, {
    onChange: inputHandler,
    placeholder: "Buscar",
    inputProps: {
      'aria-label': 'search'
    }
  }));
}