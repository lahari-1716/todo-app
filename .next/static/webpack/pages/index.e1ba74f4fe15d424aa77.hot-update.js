webpackHotUpdate_N_E("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Todo */ "./components/Todo.tsx");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");








var _jsxFileName = "C:\\Users\\lahari\\Documents\\my-todo-app\\components\\TodoList.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var TodoList = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TodoList, _React$Component);

  var _super = _createSuper(TodoList);

  function TodoList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TodoList);

    _this = _super.call(this, props);
    _this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
    _this.addItem = _this.addItem.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleInput = _this.handleInput.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.deleteItem = _this.deleteItem.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setUpdate = _this.setUpdate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TodoList, [{
    key: "addItem",
    value: function addItem(e) {
      e.preventDefault();
      _firebase__WEBPACK_IMPORTED_MODULE_10__["default"].firestore().collection("blog").add({
        items: [],
        currentItem: {
          text: "",
          key: ""
        }
      });
      var newItem = this.state.currentItem;

      if (newItem.text !== "") {
        var items = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.state.items), [newItem]);
        this.setState({
          items: items,
          currentItem: {
            text: "",
            key: ""
          }
        });
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      this.setState({
        currentItem: {
          text: e.currentTarget.value,
          key: Date.now()
        }
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(key) {
      var filteredItems = this.state.items.filter(function (item) {
        return item.key !== key;
      });
      this.setState({
        items: filteredItems
      });
    }
  }, {
    key: "setUpdate",
    value: function setUpdate(text, key) {
      console.log("items:" + this.state.items);
      var items = this.state.items;
      items.map(function (item) {
        if (item.key === key) {
          console.log(item.key + "    " + key);
          item.text = text;
        }
      });
      this.setState({
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "App",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            id: "to-do-form",
            onSubmit: this.addItem,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              placeholder: "What about Today?",
              value: this.state.currentItem.text,
              onChange: this.handleInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: this.state.items.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Todo__WEBPACK_IMPORTED_MODULE_9__["default"], {
            items: this.state.items,
            deleteItem: this.deleteItem,
            setUpdate: this.setUpdate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
          children: "body{\n  background-color: white;\n}\n.App{\n  background-color: skyblue;\n  min-height:500px;\n  width: 400px;\n  margin: 40px auto;\n}\n\n#to-do-form input{\n  background-color: black;\n  border: 0; \n  color: #fff;\n  width: 200px;\n  height: 50px;\n  margin: 20px;\n  padding: 0 20px;\n  font-size: 18px;\n  border-radius: 10px;\n}\n#to-do-form input::placeholder{\n  color: white;\n}\n#to-do-form input:focus{\n  outline: none;\n}\n#to-do-form button{\n  height: 50px;\n  width: 80px;\n  border-radius: 5px;\n  border: 0;\n  background-color: green; \n  cursor: pointer;\n}\n#to-do-form button:focus{\n  outline: none;\n}\n      "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }, this);
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/esm5/index.js");

//# sourceMappingURL=index.esm.js.map


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9maXJlc3RvcmUvZGlzdC9pbmRleC5lc20uanMiXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJwcm9wcyIsInN0YXRlIiwiaXRlbXMiLCJjdXJyZW50SXRlbSIsInRleHQiLCJrZXkiLCJhZGRJdGVtIiwiYmluZCIsImhhbmRsZUlucHV0IiwiZGVsZXRlSXRlbSIsInNldFVwZGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpcmUiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwibmV3SXRlbSIsInNldFN0YXRlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiRGF0ZSIsIm5vdyIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7SUFhTUEsUTs7Ozs7QUFDSixvQkFBWUMsS0FBWixFQUE0QjtBQUFBOztBQUFBOztBQUMxQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUUsRUFESTtBQUVYQyxpQkFBVyxFQUFFO0FBQ1hDLFlBQUksRUFBRSxFQURLO0FBRVhDLFdBQUcsRUFBRTtBQUZNO0FBRkYsS0FBYjtBQU9BLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIseUdBQWY7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLHlHQUFuQjtBQUNBLFVBQUtFLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkYsSUFBaEIseUdBQWxCO0FBQ0EsVUFBS0csU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVILElB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S0FBS0M7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBNEREOzs7O0VBL0hvQm1CLDRDQUFLLENBQUNDLFM7O0FBa0lkL0IsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25KQTtBQUFBO0FBQTZCO0FBQzdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxYmE3NGY0ZmUxNWQ0MjRhYTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbXMgZnJvbSBcIi4vVG9kb1wiO1xyXG5pbXBvcnQgZmlyZSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuXHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuXHJcbnR5cGUgTXlQcm9wcyA9IHtcclxuICBpdGVtczogc3RyaW5nO1xyXG4gIGN1cnJlbnRJdGVtOiB7IHRleHQ6c3RyaW5nIDsga2V5OiBhbnl9O1xyXG59O1xyXG5cclxudHlwZSBNeVN0YXRlID0ge1xyXG4gIGl0ZW1zOiBhbnk7XHJcbiAgY3VycmVudEl0ZW06IHsgdGV4dDogc3RyaW5nOyBrZXk6IGFueX07XHJcbn07XHJcblxyXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNeVByb3BzLCBNeVN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IE15UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgY3VycmVudEl0ZW06IHtcclxuICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgIGtleTogXCJcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICB0aGlzLmFkZEl0ZW0gPSB0aGlzLmFkZEl0ZW0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlSW5wdXQgPSB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRlbGV0ZUl0ZW0gPSB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0VXBkYXRlID0gdGhpcy5zZXRVcGRhdGUuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgXHJcbiAgIFxyXG5cclxuICBhZGRJdGVtKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmaXJlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJibG9nXCIpLmFkZCh7XHJcbiAgICAgIGl0ZW1zOltdLCBjdXJyZW50SXRlbTp7dGV4dDpcIlwiLCBrZXk6XCJcIn1cclxuICAgIH0pXHJcbiAgICBjb25zdCBuZXdJdGVtID0gdGhpcy5zdGF0ZS5jdXJyZW50SXRlbTtcclxuICAgIGlmIChuZXdJdGVtLnRleHQgIT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5zdGF0ZS5pdGVtcywgbmV3SXRlbV07XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBjdXJyZW50SXRlbToge1xyXG4gICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgIGtleTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlSW5wdXQoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3VycmVudEl0ZW06IHtcclxuICAgICAgICB0ZXh0OiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXHJcbiAgICAgICAga2V5OiBEYXRlLm5vdygpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVJdGVtKGtleTogYW55KSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoXHJcbiAgICAgIChpdGVtOiB7IGtleTogYW55IH0pID0+IGl0ZW0ua2V5ICE9PSBrZXlcclxuICAgICk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXRlbXM6IGZpbHRlcmVkSXRlbXMsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0VXBkYXRlKHRleHQ6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaXRlbXM6XCIgKyB0aGlzLnN0YXRlLml0ZW1zKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuICAgIGl0ZW1zLm1hcCgoaXRlbTogeyBrZXk6IHN0cmluZzsgdGV4dDogYW55IH0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0ua2V5ID09PSBrZXkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmtleSArIFwiICAgIFwiICsga2V5KTtcclxuICAgICAgICBpdGVtLnRleHQgPSB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpdGVtczogaXRlbXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxmb3JtIGlkPVwidG8tZG8tZm9ybVwiIG9uU3VibWl0PXt0aGlzLmFkZEl0ZW19PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFib3V0IFRvZGF5P1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVudEl0ZW0udGV4dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUuaXRlbXMudGV4dH08L3A+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1zXHJcbiAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfVxyXG4gICAgICAgICAgICBkZWxldGVJdGVtPXt0aGlzLmRlbGV0ZUl0ZW19XHJcbiAgICAgICAgICAgIHNldFVwZGF0ZT17dGhpcy5zZXRVcGRhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxzdHlsZT57YGJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLkFwcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG4gIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG59XHJcblxyXG4jdG8tZG8tZm9ybSBpbnB1dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDA7IFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jdG8tZG8tZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiN0by1kby1mb3JtIGlucHV0OmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI3RvLWRvLWZvcm0gYnV0dG9ue1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3RvLWRvLWZvcm0gYnV0dG9uOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIiwiaW1wb3J0ICdAZmlyZWJhc2UvZmlyZXN0b3JlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=