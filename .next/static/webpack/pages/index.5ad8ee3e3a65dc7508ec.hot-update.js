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
      _firebase__WEBPACK_IMPORTED_MODULE_10__["default"].collection("todo").add({
        inprogress: true,
        timestamp: firebase__WEBPACK_IMPORTED_MODULE_11__["default"].firestore.FieldValue.serverTimestamp(),
        todo: this.state.currentItem
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
              lineNumber: 88,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: this.state.items.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Todo__WEBPACK_IMPORTED_MODULE_9__["default"], {
            items: this.state.items,
            deleteItem: this.deleteItem,
            setUpdate: this.setUpdate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
          children: "body{\n  background-color: white;\n}\n.App{\n  background-color: skyblue;\n  min-height:500px;\n  width: 400px;\n  margin: 40px auto;\n}\n\n#to-do-form input{\n  background-color: black;\n  border: 0; \n  color: #fff;\n  width: 200px;\n  height: 50px;\n  margin: 20px;\n  padding: 0 20px;\n  font-size: 18px;\n  border-radius: 10px;\n}\n#to-do-form input::placeholder{\n  color: white;\n}\n#to-do-form input:focus{\n  outline: none;\n}\n#to-do-form button{\n  height: 50px;\n  width: 80px;\n  border-radius: 5px;\n  border: 0;\n  background-color: green; \n  cursor: pointer;\n}\n#to-do-form button:focus{\n  outline: none;\n}\n      "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJwcm9wcyIsInN0YXRlIiwiaXRlbXMiLCJjdXJyZW50SXRlbSIsInRleHQiLCJrZXkiLCJhZGRJdGVtIiwiYmluZCIsImhhbmRsZUlucHV0IiwiZGVsZXRlSXRlbSIsInNldFVwZGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwiaW5wcm9ncmVzcyIsInRpbWVzdGFtcCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsInRvZG8iLCJuZXdJdGVtIiwic2V0U3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJEYXRlIiwibm93IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQVlNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFBRSxFQURJO0FBRVhDLGlCQUFXLEVBQUU7QUFDWEMsWUFBSSxFQUFFLEVBREs7QUFFWEMsV0FBRyxFQUFFO0FBRk07QUFGRixLQUFiO0FBT0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYix5R0FBZjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIseUdBQW5CO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRixJQUFoQix5R0FBbEI7QUFDQSxVQUFLRyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FB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RSxzQkFBVSxFQUFFLEtBQUtPLFVBRm5CO0FBR0UscUJBQVMsRUFBRSxLQUFLQztBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUE0REQ7Ozs7RUFoSW9CeUIsNENBQUssQ0FBQ0MsUzs7QUFtSWRyQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YWQ4ZWUzZTNhNjVkYzc1MDhlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1zIGZyb20gXCIuL1RvZG9cIjtcclxuaW1wb3J0IGZpcmUgZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuXHJcbnR5cGUgTXlQcm9wcyA9IHtcclxuICBpdGVtczogc3RyaW5nO1xyXG4gIGN1cnJlbnRJdGVtOiB7IHRleHQ6IHN0cmluZzsga2V5OiBhbnkgfTtcclxufTtcclxuXHJcbnR5cGUgTXlTdGF0ZSA9IHtcclxuICBpdGVtczogYW55O1xyXG4gIGN1cnJlbnRJdGVtOiB7IHRleHQ6IHN0cmluZzsga2V5OiBhbnkgfTtcclxufTtcclxuXHJcbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE15UHJvcHMsIE15U3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogTXlQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICBjdXJyZW50SXRlbToge1xyXG4gICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAga2V5OiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIHRoaXMuYWRkSXRlbSA9IHRoaXMuYWRkSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGVsZXRlSXRlbSA9IHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRVcGRhdGUgPSB0aGlzLnNldFVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZmlyZS5jb2xsZWN0aW9uKFwidG9kb1wiKS5hZGQoe1xyXG4gICAgICBpbnByb2dyZXNzOiB0cnVlLFxyXG4gICAgICB0aW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB0b2RvOiB0aGlzLnN0YXRlLmN1cnJlbnRJdGVtLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gdGhpcy5zdGF0ZS5jdXJyZW50SXRlbTtcclxuICAgIGlmIChuZXdJdGVtLnRleHQgIT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5zdGF0ZS5pdGVtcywgbmV3SXRlbV07XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBjdXJyZW50SXRlbToge1xyXG4gICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgIGtleTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlSW5wdXQoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3VycmVudEl0ZW06IHtcclxuICAgICAgICB0ZXh0OiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXHJcbiAgICAgICAga2V5OiBEYXRlLm5vdygpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVJdGVtKGtleTogYW55KSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoXHJcbiAgICAgIChpdGVtOiB7IGtleTogYW55IH0pID0+IGl0ZW0ua2V5ICE9PSBrZXlcclxuICAgICk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXRlbXM6IGZpbHRlcmVkSXRlbXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFVwZGF0ZSh0ZXh0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIml0ZW1zOlwiICsgdGhpcy5zdGF0ZS5pdGVtcyk7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBpdGVtcy5tYXAoKGl0ZW06IHsga2V5OiBzdHJpbmc7IHRleHQ6IGFueSB9KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS5rZXkgKyBcIiAgICBcIiArIGtleSk7XHJcbiAgICAgICAgaXRlbS50ZXh0ID0gdGV4dDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8Zm9ybSBpZD1cInRvLWRvLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhYm91dCBUb2RheT9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRJdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLml0ZW1zLnRleHR9PC9wPlxyXG4gICAgICAgICAgPExpc3RJdGVtc1xyXG4gICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc31cclxuICAgICAgICAgICAgZGVsZXRlSXRlbT17dGhpcy5kZWxldGVJdGVtfVxyXG4gICAgICAgICAgICBzZXRVcGRhdGU9e3RoaXMuc2V0VXBkYXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8c3R5bGU+e2Bib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5BcHB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxufVxyXG5cclxuI3RvLWRvLWZvcm0gaW5wdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAwOyBcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuI3RvLWRvLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jdG8tZG8tZm9ybSBpbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiN0by1kby1mb3JtIGJ1dHRvbntcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiN0by1kby1mb3JtIGJ1dHRvbjpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=