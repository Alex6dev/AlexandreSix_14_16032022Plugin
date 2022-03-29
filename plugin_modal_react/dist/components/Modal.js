'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalExit = exports.ModalText = exports.ModalIcons = exports.ModalTittle = exports.ModalContent = exports.Modal = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./modal.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getColor(type) {
  switch (type) {
    case 'warning':
      return 'red';
    case 'information':
      return 'blue';
    case 'success':
      return 'green';
  }
}

function getSymbole(type) {
  switch (type) {
    case 'warning':
      return _react2.default.createElement('i', { className: 'fa-solid fa-triangle-exclamation symbole' });
    case 'information':
      return _react2.default.createElement('i', { className: 'fa-solid fa-circle-info symbole' });
    case 'success':
      return _react2.default.createElement('i', { className: 'fa-solid fa-circle-check symbole' });
  }
}

/**show component ModalBackground
* @param {Object} params
* @param {Boolean} params.display
* @returns {JSX}
*/
var Modal = exports.Modal = function Modal(_ref) {
  var children = _ref.children,
      _ref$display = _ref.display,
      display = _ref$display === undefined ? true : _ref$display;

  return display && _react2.default.createElement(
    'section',
    { className: 'modalBackground' },
    children
  );
};
exports.default = Modal;

/** show box content modal
 * 
 * @param {Object} params
 * @param {String} params.type 
 * @returns {JSX}
 */

var ModalContent = exports.ModalContent = function ModalContent(_ref2) {
  var children = _ref2.children,
      type = _ref2.type;

  var colorModal = getColor(type);
  return _react2.default.createElement(
    'div',
    { className: 'modalBox ' + colorModal },
    children
  );
};

/** show tittle modal
 * 
 * @param {Object} params 
 * @returns {JSX}
 */
var ModalTittle = exports.ModalTittle = function ModalTittle(_ref3) {
  var children = _ref3.children;

  return _react2.default.createElement(
    'h2',
    { className: 'tittleModal' },
    children
  );
};

/** show icon modal
 * 
 * @param {Object} params
 * @param {String} params.type 
 * @returns {HTML}
 */
var ModalIcons = exports.ModalIcons = function ModalIcons(_ref4) {
  var type = _ref4.type;

  var symboleModal = getSymbole(type);
  return symboleModal;
};

/** show text modal
 * 
 * @param {Object} params
 * @returns {JSX}
 */
var ModalText = exports.ModalText = function ModalText(_ref5) {
  var children = _ref5.children;

  return _react2.default.createElement(
    'p',
    { className: 'textModal' },
    children
  );
};

/** show box content modal
 * 
 * @param {Object} params
 * @param {String} params.etat 
 * @param {String} params.set 
 * @returns {JSX}
 */
var ModalExit = exports.ModalExit = function ModalExit(_ref6) {
  var etat = _ref6.etat,
      set = _ref6.set,
      children = _ref6.children;


  return _react2.default.createElement(
    'button',
    { onClick: function onClick() {
        return set(!etat);
      }, className: 'button' },
    _react2.default.createElement(
      'p',
      null,
      children,
      ' '
    )
  );
};