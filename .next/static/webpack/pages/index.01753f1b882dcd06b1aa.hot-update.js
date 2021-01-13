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
        blog: this.currentItem.text
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
              lineNumber: 96,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: this.state.items.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Todo__WEBPACK_IMPORTED_MODULE_9__["default"], {
            items: this.state.items,
            deleteItem: this.deleteItem,
            setUpdate: this.setUpdate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
          children: "body{\n  background-color: white;\n}\n.App{\n  background-color: skyblue;\n  min-height:500px;\n  width: 400px;\n  margin: 40px auto;\n}\n\n#to-do-form input{\n  background-color: black;\n  border: 0; \n  color: #fff;\n  width: 200px;\n  height: 50px;\n  margin: 20px;\n  padding: 0 20px;\n  font-size: 18px;\n  border-radius: 10px;\n}\n#to-do-form input::placeholder{\n  color: white;\n}\n#to-do-form input:focus{\n  outline: none;\n}\n#to-do-form button{\n  height: 50px;\n  width: 80px;\n  border-radius: 5px;\n  border: 0;\n  background-color: green; \n  cursor: pointer;\n}\n#to-do-form button:focus{\n  outline: none;\n}\n      "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJwcm9wcyIsInN0YXRlIiwiaXRlbXMiLCJjdXJyZW50SXRlbSIsInRleHQiLCJrZXkiLCJhZGRJdGVtIiwiYmluZCIsImhhbmRsZUlucHV0IiwiZGVsZXRlSXRlbSIsInNldFVwZGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwiaW5wcm9ncmVzcyIsInRpbWVzdGFtcCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsImJsb2ciLCJuZXdJdGVtIiwic2V0U3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJEYXRlIiwibm93IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztJQWVNQSxROzs7OztBQUVKLG9CQUFZQyxLQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDhCQUFNQSxLQUFOO0FBQ0YsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxFQURFO0FBRVRDLGlCQUFXLEVBQUU7QUFDWEMsWUFBSSxFQUFFLEVBREs7QUFFWEMsV0FBRyxFQUFFO0FBRk07QUFGSixLQUFiO0FBUUUsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYix5R0FBZjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIseUdBQW5CO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRixJQUFoQix5R0FBbEI7QUFDQSxVQUFLRyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FB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RUUsc0JBQVUsRUFBRSxLQUFLTyxVQUZuQjtBQUdFLHFCQUFTLEVBQUUsS0FBS0M7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBNEREOzs7O0VBcElvQnlCLDRDQUFLLENBQUNDLFM7O0FBdUlkckMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDE3NTNmMWI4ODJkY2QwNmIxYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3RJdGVtcyBmcm9tIFwiLi9Ub2RvXCI7XHJcbmltcG9ydCBmaXJlIGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2VDb25maWcgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuXHJcblxyXG5cclxuXHJcbnR5cGUgTXlQcm9wcyA9IHtcclxuICBpdGVtczogc3RyaW5nO1xyXG4gIGN1cnJlbnRJdGVtOiB7IHRleHQ6c3RyaW5nIDsga2V5OiBhbnl9O1xyXG59O1xyXG5cclxudHlwZSBNeVN0YXRlID0ge1xyXG4gIGl0ZW1zOiBhbnk7XHJcbiAgY3VycmVudEl0ZW06IHsgdGV4dDogc3RyaW5nOyBrZXk6IGFueX07XHJcbn07XHJcblxyXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNeVByb3BzLCBNeVN0YXRlPiB7XHJcbiAgW3g6IHN0cmluZ106IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogTXlQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgY3VycmVudEl0ZW06IHtcclxuICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgIGtleTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICB9O1xyXG4gICAgdGhpcy5hZGRJdGVtID0gdGhpcy5hZGRJdGVtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kZWxldGVJdGVtID0gdGhpcy5kZWxldGVJdGVtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldFVwZGF0ZSA9IHRoaXMuc2V0VXBkYXRlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIFxyXG4gICBcclxuXHJcbiAgYWRkSXRlbShlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZmlyZS5jb2xsZWN0aW9uKFwiYmxvZ1wiKS5hZGQoe1xyXG4gICAgICBpbnByb2dyZXNzOiB0cnVlLFxyXG4gICAgICB0aW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICBibG9nOiB0aGlzLmN1cnJlbnRJdGVtLnRleHRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHRoaXMuc3RhdGUuY3VycmVudEl0ZW07XHJcbiAgICBpZiAobmV3SXRlbS50ZXh0ICE9PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gWy4uLnRoaXMuc3RhdGUuaXRlbXMsIG5ld0l0ZW1dO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpdGVtczogaXRlbXMsXHJcbiAgICAgICAgY3VycmVudEl0ZW06IHtcclxuICAgICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAgICBrZXk6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUlucHV0KGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjdXJyZW50SXRlbToge1xyXG4gICAgICAgIHRleHQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSxcclxuICAgICAgICBrZXk6IERhdGUubm93KCksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUl0ZW0oa2V5OiBhbnkpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihcclxuICAgICAgKGl0ZW06IHsga2V5OiBhbnkgfSkgPT4gaXRlbS5rZXkgIT09IGtleVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpdGVtczogZmlsdGVyZWRJdGVtcyxcclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRVcGRhdGUodGV4dDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coXCJpdGVtczpcIiArIHRoaXMuc3RhdGUuaXRlbXMpO1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgaXRlbXMubWFwKChpdGVtOiB7IGtleTogc3RyaW5nOyB0ZXh0OiBhbnkgfSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5rZXkgPT09IGtleSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ua2V5ICsgXCIgICAgXCIgKyBrZXkpO1xyXG4gICAgICAgIGl0ZW0udGV4dCA9IHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgPGZvcm0gaWQ9XCJ0by1kby1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuYWRkSXRlbX0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYWJvdXQgVG9kYXk/XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW50SXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5pdGVtcy50ZXh0fTwvcD5cclxuICAgICAgICAgIDxMaXN0SXRlbXNcclxuICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9XHJcbiAgICAgICAgICAgIGRlbGV0ZUl0ZW09e3RoaXMuZGVsZXRlSXRlbX1cclxuICAgICAgICAgICAgc2V0VXBkYXRlPXt0aGlzLnNldFVwZGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPHN0eWxlPntgYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uQXBwe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgbWluLWhlaWdodDo1MDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbn1cclxuXHJcbiN0by1kby1mb3JtIGlucHV0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMDsgXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiN0by1kby1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3RvLWRvLWZvcm0gaW5wdXQ6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jdG8tZG8tZm9ybSBidXR0b257XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47IFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jdG8tZG8tZm9ybSBidXR0b246Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9