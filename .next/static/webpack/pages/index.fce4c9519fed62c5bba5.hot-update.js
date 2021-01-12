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








var _jsxFileName = "C:\\Users\\lahari\\Documents\\my-todo-app\\components\\TodoList.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var App = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = _super.call(this, props);
    _this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    };
    _this.addItem = _this.addItem.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleInput = _this.handleInput.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.deleteItem = _this.deleteItem.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setUpdate = _this.setUpdate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "addItem",
    value: function addItem(e) {
      e.preventDefault();
      var newItem = this.state.currentItem;

      if (newItem.text !== "") {
        var items = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.state.items), [newItem]);
        this.setState({
          items: items,
          currentItem: {
            text: '',
            key: ''
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
              lineNumber: 82,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: this.state.items.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Todo__WEBPACK_IMPORTED_MODULE_9__["default"], {
            items: this.state.items,
            deleteItem: this.deleteItem,
            setUpdate: this.setUpdate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
          children: "body{\n  background-color: white;\n}\n.App{\n  background-color: skyblue;\n  min-height:500px;\n  width: 400px;\n  margin: 40px auto;\n}\n\n#to-do-form input{\n  background-color: black;\n  border: 0; \n  color: #fff;\n  width: 200px;\n  height: 50px;\n  margin: 20px;\n  padding: 0 20px;\n  font-size: 18px;\n  border-radius: 10px;\n}\n#to-do-form input::placeholder{\n  color: white;\n}\n#to-do-form input:focus{\n  outline: none;\n}\n#to-do-form button{\n  height: 50px;\n  width: 80px;\n  border-radius: 5px;\n  border: 0;\n  background-color: green; \n  cursor: pointer;\n}\n#to-do-form button:focus{\n  outline: none;\n}\n      "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, this);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIml0ZW1zIiwiY3VycmVudEl0ZW0iLCJ0ZXh0Iiwia2V5IiwiYWRkSXRlbSIsImJpbmQiLCJoYW5kbGVJbnB1dCIsImRlbGV0ZUl0ZW0iLCJzZXRVcGRhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdJdGVtIiwic2V0U3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJEYXRlIiwibm93IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQWFNQSxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFDLEVBREs7QUFFWEMsaUJBQVcsRUFBQztBQUNWQyxZQUFJLEVBQUMsRUFESztBQUVWQyxXQUFHLEVBQUM7QUFGTTtBQUZELEtBQWI7QUFPQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLHlHQUFmO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQix5R0FBbkI7QUFDQSxVQUFLRSxVQUFMLEdBQWlCLE1BQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLHlHQUFqQjtBQUNBLFVBQUtHLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlSCxJQUFmLHlHQUFqQjtBQVp3QjtBQWN6Qjs7Ozs0QkFFT0ksQyxFQUFvQztBQUMxQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLEtBQUtaLEtBQUwsQ0FBV0UsV0FBM0I7O0FBQ0EsVUFBR1UsT0FBTyxDQUFDVCxJQUFSLEtBQWdCLEVBQW5CLEVBQXNCO0FBQ3BCLFlBQU1GLEtBQUssMEdBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUFsQixJQUF5QlcsT0FBekIsRUFBWDtBQUNGLGFBQUtDLFFBQUwsQ0FBYztBQUNaWixlQUFLLEVBQUVBLEtBREs7QUFFWkMscUJBQVcsRUFBQztBQUNWQyxnQkFBSSxFQUFDLEVBREs7QUFFVkMsZUFBRyxFQUFDO0FBRk07QUFGQSxTQUFkO0FBT0M7QUFDRjs7O2dDQUNXTSxDLEVBQXFDO0FBQy9DLFdBQUtHLFFBQUwsQ0FBYztBQUNaWCxtQkFBVyxFQUFDO0FBQ1ZDLGNBQUksRUFBRU8sQ0FBQyxDQUFDSSxhQUFGLENBQWdCQyxLQURaO0FBRVZYLGFBQUcsRUFBRVksSUFBSSxDQUFDQyxHQUFMO0FBRks7QUFEQSxPQUFkO0FBTUQ7OzsrQkFFVWIsRyxFQUFTO0FBQ2xCLFVBQU1jLGFBQWEsR0FBRSxLQUFLbEIsS0FBTCxDQUFXQyxLQUFYLENBQWlCa0IsTUFBakIsQ0FBd0IsVUFBQ0MsSUFBRDtBQUFBLGVBQzNDQSxJQUFJLENBQUNoQixHQUFMLEtBQVdBLEdBRGdDO0FBQUEsT0FBeEIsQ0FBckI7QUFFQSxXQUFLUyxRQUFMLENBQWM7QUFDWlosYUFBSyxFQUFFaUI7QUFESyxPQUFkO0FBSUQ7Ozs4QkFDU2YsSSxFQUFVQyxHLEVBQVk7QUFDOUJpQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFTLEtBQUt0QixLQUFMLENBQVdDLEtBQWhDO0FBQ0EsVUFBTUEsS0FBSyxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsS0FBekI7QUFDQUEsV0FBSyxDQUFDc0IsR0FBTixDQUFVLFVBQUNILElBQUQsRUFBcUM7QUFDL0MsWUFBR0EsSUFBSSxDQUFDaEIsR0FBTCxLQUFXQSxHQUFkLEVBQWtCO0FBQ2RpQixpQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ2hCLEdBQUwsR0FBVSxNQUFWLEdBQWlCQSxHQUE3QjtBQUNBZ0IsY0FBSSxDQUFDakIsSUFBTCxHQUFXQSxJQUFYO0FBQ0Q7QUFDRixPQUxEO0FBTUEsV0FBS1UsUUFBTCxDQUFjO0FBQ1paLGFBQUssRUFBRUE7QUFESyxPQUFkO0FBRUk7Ozs2QkFHQTtBQUNOLDBCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFNLGNBQUUsRUFBQyxZQUFUO0FBQXNCLG9CQUFRLEVBQUUsS0FBS0ksT0FBckM7QUFBQSxvQ0FDRTtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQix5QkFBVyxFQUFDLG1CQUEvQjtBQUFtRCxtQkFBSyxFQUFHLEtBQUtMLEtBQUwsQ0FBV0UsV0FBWCxDQUF1QkMsSUFBbEY7QUFBd0Ysc0JBQVEsRUFBRSxLQUFLSTtBQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0U7QUFBQSxzQkFBSSxLQUFLUCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFNRSxxRUFBQyw2Q0FBRDtBQUFXLGlCQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXQyxLQUE3QjtBQUFvQyxzQkFBVSxFQUFFLEtBQUtPLFVBQXJEO0FBQWlFLHFCQUFTLEVBQUUsS0FBS0M7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQW1EQTs7OztFQWxIZ0JlLDRDQUFLLENBQUNDLFM7O0FBc0hUM0Isa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmNlNGM5NTE5ZmVkNjJjNWJiYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaXN0SXRlbXMgZnJvbSAnLi9Ub2RvJztcclxuXHJcbnR5cGUgTXlQcm9wcz17XHJcbiAgaXRlbXM6YW55O1xyXG4gIGN1cnJlbnRJdGVtOnt0ZXh0OmFueSwga2V5OmFueX1cclxufVxyXG5cclxudHlwZSBNeVN0YXRlID17XHJcbiAgaXRlbXM6IGFueTtcclxuICBjdXJyZW50SXRlbTp7dGV4dDphbnksIGtleTphbnl9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TXlQcm9wcyxNeVN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6TXlQcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpdGVtczpbXSxcclxuICAgICAgY3VycmVudEl0ZW06e1xyXG4gICAgICAgIHRleHQ6JycsXHJcbiAgICAgICAga2V5OicnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWRkSXRlbSA9IHRoaXMuYWRkSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGVsZXRlSXRlbSA9dGhpcy5kZWxldGVJdGVtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldFVwZGF0ZSA9IHRoaXMuc2V0VXBkYXRlLmJpbmQodGhpcyk7XHJcbiAgXHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB0aGlzLnN0YXRlLmN1cnJlbnRJdGVtO1xyXG4gICAgaWYobmV3SXRlbS50ZXh0ICE9PVwiXCIpe1xyXG4gICAgICBjb25zdCBpdGVtcyA9IFsuLi50aGlzLnN0YXRlLml0ZW1zLCBuZXdJdGVtXTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpdGVtczogaXRlbXMsXHJcbiAgICAgIGN1cnJlbnRJdGVtOntcclxuICAgICAgICB0ZXh0OicnLFxyXG4gICAgICAgIGtleTonJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVJbnB1dChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRJdGVtOntcclxuICAgICAgICB0ZXh0OiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXHJcbiAgICAgICAga2V5OiBEYXRlLm5vdygpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gXHJcbiAgZGVsZXRlSXRlbShrZXk6IGFueSl7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zPSB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcigoaXRlbTogeyBrZXk6IGFueTsgfSkgPT5cclxuICAgICAgaXRlbS5rZXkhPT1rZXkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGl0ZW1zOiBmaWx0ZXJlZEl0ZW1zXHJcbiAgICB9KVxyXG5cclxuICB9XHJcbiAgc2V0VXBkYXRlKHRleHQ6IGFueSxrZXk6IHN0cmluZyl7XHJcbiAgICBjb25zb2xlLmxvZyhcIml0ZW1zOlwiK3RoaXMuc3RhdGUuaXRlbXMpO1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgaXRlbXMubWFwKChpdGVtOiB7IGtleTogc3RyaW5nOyB0ZXh0OiBhbnk7IH0pPT57ICAgICAgXHJcbiAgICBpZihpdGVtLmtleT09PWtleSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS5rZXkgK1wiICAgIFwiK2tleSlcclxuICAgICAgICBpdGVtLnRleHQ9IHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXRlbXM6IGl0ZW1zXHJcbiAgICB9KSB9XHJcbiBcclxuIFxyXG5yZW5kZXIoKXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8Zm9ybSBpZD1cInRvLWRvLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2hhdCBhYm91dCBUb2RheT9cIiB2YWx1ZT0ge3RoaXMuc3RhdGUuY3VycmVudEl0ZW0udGV4dH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9PjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHA+e3RoaXMuc3RhdGUuaXRlbXMudGV4dH08L3A+XHJcbiAgICAgICAgPExpc3RJdGVtcyBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30gZGVsZXRlSXRlbT17dGhpcy5kZWxldGVJdGVtfSBzZXRVcGRhdGU9e3RoaXMuc2V0VXBkYXRlfS8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8c3R5bGU+e2Bib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5BcHB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxufVxyXG5cclxuI3RvLWRvLWZvcm0gaW5wdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAwOyBcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuI3RvLWRvLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jdG8tZG8tZm9ybSBpbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiN0by1kby1mb3JtIGJ1dHRvbntcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiN0by1kby1mb3JtIGJ1dHRvbjpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=