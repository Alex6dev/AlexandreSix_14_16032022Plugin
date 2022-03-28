"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalIcons = exports.ModalContent = exports.Modal = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = exports.Modal = function Modal(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        "section",
        { className: "modalBackground" },
        children
    );
};
exports.default = Modal;
var ModalContent = exports.ModalContent = function ModalContent(_ref2) {
    var children = _ref2.children;


    return _react2.default.createElement(
        "div",
        { className: "modalBox" },
        children
    );
};

var ModalIcons = exports.ModalIcons = function ModalIcons(_ref3) {
    var path = _ref3.path;

    return _react2.default.createElement("img", { ref: path, alt: "icon modale" });
};
//exemple 
//aaaaaaaaaaa

/*import React from "react";
import "./TextInput.css";

const TextInput = ({ type = "text", label, value, onChange }) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
);

export default TextInput;*/