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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");








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
      _firebase__WEBPACK_IMPORTED_MODULE_10__["default"].collection("blog").add({
        inprogress: true,
        timestamp: firebase__WEBPACK_IMPORTED_MODULE_11__["default"].firestore.FieldValue.serverTimestamp(),
        blog: this.addItem
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
              lineNumber: 95,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: this.state.items.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Todo__WEBPACK_IMPORTED_MODULE_9__["default"], {
            items: this.state.items,
            deleteItem: this.deleteItem,
            setUpdate: this.setUpdate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
          children: "body{\n  background-color: white;\n}\n.App{\n  background-color: skyblue;\n  min-height:500px;\n  width: 400px;\n  margin: 40px auto;\n}\n\n#to-do-form input{\n  background-color: black;\n  border: 0; \n  color: #fff;\n  width: 200px;\n  height: 50px;\n  margin: 20px;\n  padding: 0 20px;\n  font-size: 18px;\n  border-radius: 10px;\n}\n#to-do-form input::placeholder{\n  color: white;\n}\n#to-do-form input:focus{\n  outline: none;\n}\n#to-do-form button{\n  height: 50px;\n  width: 80px;\n  border-radius: 5px;\n  border: 0;\n  background-color: green; \n  cursor: pointer;\n}\n#to-do-form button:focus{\n  outline: none;\n}\n      "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJwcm9wcyIsInN0YXRlIiwiaXRlbXMiLCJjdXJyZW50SXRlbSIsInRleHQiLCJrZXkiLCJhZGRJdGVtIiwiYmluZCIsImhhbmRsZUlucHV0IiwiZGVsZXRlSXRlbSIsInNldFVwZGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwiaW5wcm9ncmVzcyIsInRpbWVzdGFtcCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsImJsb2ciLCJuZXdJdGVtIiwic2V0U3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJEYXRlIiwibm93IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztJQWVNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDhCQUFNQSxLQUFOO0FBQ0YsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxFQURFO0FBRVRDLGlCQUFXLEVBQUU7QUFDWEMsWUFBSSxFQUFFLEVBREs7QUFFWEMsV0FBRyxFQUFFO0FBRk07QUFGSixLQUFiO0FBUUUsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYix5R0FBZjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIseUdBQW5CO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRixJQUFoQix5R0FBbEI7QUFDQSxVQUFLRyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FB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RSxLQUFLTyxVQUZuQjtBQUdFLHFCQUFTLEVBQUUsS0FBS0M7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBNEREOzs7O0VBbklvQnlCLDRDQUFLLENBQUNDLFM7O0FBc0lkckMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGU5MzU4NjA3NTEzNjRkYzFmYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3RJdGVtcyBmcm9tIFwiLi9Ub2RvXCI7XHJcbmltcG9ydCBmaXJlIGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2VDb25maWcgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuXHJcblxyXG5cclxuXHJcbnR5cGUgTXlQcm9wcyA9IHtcclxuICBpdGVtczogc3RyaW5nO1xyXG4gIGN1cnJlbnRJdGVtOiB7IHRleHQ6c3RyaW5nIDsga2V5OiBhbnl9O1xyXG59O1xyXG5cclxudHlwZSBNeVN0YXRlID0ge1xyXG4gIGl0ZW1zOiBhbnk7XHJcbiAgY3VycmVudEl0ZW06IHsgdGV4dDogc3RyaW5nOyBrZXk6IGFueX07XHJcbn07XHJcblxyXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNeVByb3BzLCBNeVN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IE15UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpdGVtczogW10sXHJcbiAgICAgIGN1cnJlbnRJdGVtOiB7XHJcbiAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICBrZXk6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgfTtcclxuICAgIHRoaXMuYWRkSXRlbSA9IHRoaXMuYWRkSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGVsZXRlSXRlbSA9IHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRVcGRhdGUgPSB0aGlzLnNldFVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBcclxuICAgXHJcblxyXG4gIGFkZEl0ZW0oZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGZpcmUuY29sbGVjdGlvbihcImJsb2dcIikuYWRkKHtcclxuICAgICAgaW5wcm9ncmVzczogdHJ1ZSxcclxuICAgICAgdGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgYmxvZzogdGhpcy5hZGRJdGVtLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gdGhpcy5zdGF0ZS5jdXJyZW50SXRlbTtcclxuICAgIGlmIChuZXdJdGVtLnRleHQgIT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5zdGF0ZS5pdGVtcywgbmV3SXRlbV07XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBjdXJyZW50SXRlbToge1xyXG4gICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgIGtleTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlSW5wdXQoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRJdGVtOiB7XHJcbiAgICAgICAgdGV4dDogZS5jdXJyZW50VGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIGtleTogRGF0ZS5ub3coKSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlSXRlbShrZXk6IGFueSkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKFxyXG4gICAgICAoaXRlbTogeyBrZXk6IGFueSB9KSA9PiBpdGVtLmtleSAhPT0ga2V5XHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGl0ZW1zOiBmaWx0ZXJlZEl0ZW1zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldFVwZGF0ZSh0ZXh0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIml0ZW1zOlwiICsgdGhpcy5zdGF0ZS5pdGVtcyk7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBpdGVtcy5tYXAoKGl0ZW06IHsga2V5OiBzdHJpbmc7IHRleHQ6IGFueSB9KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS5rZXkgKyBcIiAgICBcIiArIGtleSk7XHJcbiAgICAgICAgaXRlbS50ZXh0ID0gdGV4dDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8Zm9ybSBpZD1cInRvLWRvLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhYm91dCBUb2RheT9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRJdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLml0ZW1zLnRleHR9PC9wPlxyXG4gICAgICAgICAgPExpc3RJdGVtc1xyXG4gICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc31cclxuICAgICAgICAgICAgZGVsZXRlSXRlbT17dGhpcy5kZWxldGVJdGVtfVxyXG4gICAgICAgICAgICBzZXRVcGRhdGU9e3RoaXMuc2V0VXBkYXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8c3R5bGU+e2Bib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5BcHB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxufVxyXG5cclxuI3RvLWRvLWZvcm0gaW5wdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAwOyBcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuI3RvLWRvLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jdG8tZG8tZm9ybSBpbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiN0by1kby1mb3JtIGJ1dHRvbntcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiN0by1kby1mb3JtIGJ1dHRvbjpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=