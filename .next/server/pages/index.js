module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Todo.tsx":
/*!*****************************!*\
  !*** ./components/Todo.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\lahari\\Documents\\my-todo-app\\pages\\auth\\index.tsx";



function ListItems(props) {
  const items = props.items;
  const listItems = items.map(items => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-4227984298" + " " + "list",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "jsx-4227984298",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        id: items.key,
        value: items.text,
        onChange: e => props.setUpdate(e.currentTarget.value, items.key),
        className: "jsx-4227984298"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-4227984298",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => props.deleteItem(items.key),
          className: "jsx-4227984298" + " " + "button",
          children: "delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4227984298",
      children: ".list.jsx-4227984298{color:white;width:300px;background-color:rgb(175,224,42);height:50px;margin:20px auto;border-radius:5px;}.list.jsx-4227984298 p.jsx-4227984298{padding:10px;position:relative;}.list.jsx-4227984298 p.jsx-4227984298 span.jsx-4227984298 button.jsx-4227984298{position:absolute;right:10px;cursor:pointer;}.list.jsx-4227984298 p.jsx-4227984298 input.jsx-4227984298{background-color:transparent;border:0;color:white;font-size:18px;}.list.jsx-4227984298 p.jsx-4227984298 input.jsx-4227984298{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGFoYXJpXFxEb2N1bWVudHNcXG15LXRvZG8tYXBwXFxwYWdlc1xcYXV0aFxcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCeUIsQUFLZ0IsQUFTQyxBQUtNLEFBTVcsQUFNaEIsWUF6QkQsQ0FTTSxBQWlCdEIsS0FaZSxNQWJ3QixLQWNwQixBQUtQLEVBVlosT0FXZSxNQUxmLE1BTW1CLE9BcEJKLFFBcUJmLElBcEJxQixpQkFDQyxrQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxsYWhhcmlcXERvY3VtZW50c1xcbXktdG9kby1hcHBcXHBhZ2VzXFxhdXRoXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIExpc3RJdGVtc1Byb3Bze1xyXG4gICAgaXRlbXM6YW55O1xyXG4gICAgc2V0VXBkYXRlOih2YWx1ZTphbnksIGtleTphbnkgKSA9PiB2b2lkO1xyXG4gICAgZGVsZXRlSXRlbTooa2V5OmFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gIExpc3RJdGVtcyhwcm9wczpMaXN0SXRlbXNQcm9wcykge1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gcHJvcHMuaXRlbXM7XHJcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBpdGVtcy5tYXAoIChpdGVtczp7dGV4dDphbnksa2V5OmFueX0pOiBKU1guRWxlbWVudCA9PlxyXG4gICAgXHJcbiAgICAgICAgKFxyXG4gICAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXtpdGVtcy5rZXl9PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD17aXRlbXMua2V5fSAgdmFsdWU9e2l0ZW1zLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6UmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+XHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLnNldFVwZGF0ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUsIGl0ZW1zLmtleSl9IC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+cHJvcHMuZGVsZXRlSXRlbShpdGVtcy5rZXkpfT5kZWxldGU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gLmxpc3R7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3NSwgMjI0LCA0MikgO1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxpc3QgcHtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxpc3QgcCBzcGFuIGJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlzdCBwIGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5saXN0IHAgaW5wdXR7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2PntsaXN0SXRlbXN9PC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbXM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\lahari\\\\Documents\\\\my-todo-app\\\\pages\\\\auth\\\\index.tsx */"
    }, void 0, false, void 0, this)]
  }, items.key, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 12
  }, this));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: listItems
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ListItems);

/***/ }),

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ "./components/Todo.tsx");

var _jsxFileName = "C:\\Users\\lahari\\Documents\\my-todo-app\\components\\TodoList.tsx";



class TodoList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      });
    }
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.currentTarget.value,
        key: Date.now()
      }
    });
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.text = text;
      }
    });
    this.setState({
      items: items
    });
  }

  render() {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Todo__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        children: `body{
  background-color: white;
}
.App{
  background-color: skyblue;
  min-height:500px;
  width: 400px;
  margin: 40px auto;
}

#to-do-form input{
  background-color: black;
  border: 0; 
  color: #fff;
  width: 200px;
  height: 50px;
  margin: 20px;
  padding: 0 20px;
  font-size: 18px;
  border-radius: 10px;
}
#to-do-form input::placeholder{
  color: white;
}
#to-do-form input:focus{
  outline: none;
}
#to-do-form button{
  height: 50px;
  width: 80px;
  border-radius: 5px;
  border: 0;
  background-color: green; 
  cursor: pointer;
}
#to-do-form button:focus{
  outline: none;
}
      `
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

}

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");

var _jsxFileName = "C:\\Users\\lahari\\Documents\\my-todo-app\\pages\\index.tsx";



function Index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: props.items,
    currentItem: props.currentItem
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxpc3RJdGVtcyIsInByb3BzIiwiaXRlbXMiLCJsaXN0SXRlbXMiLCJtYXAiLCJrZXkiLCJ0ZXh0IiwiZSIsInNldFVwZGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImRlbGV0ZUl0ZW0iLCJUb2RvTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImN1cnJlbnRJdGVtIiwiYWRkSXRlbSIsImJpbmQiLCJoYW5kbGVJbnB1dCIsInByZXZlbnREZWZhdWx0IiwibmV3SXRlbSIsInNldFN0YXRlIiwiRGF0ZSIsIm5vdyIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFp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LEVBQXNDO0FBQ3BDLHNCQUNFLHFFQUFDLDREQUFEO0FBQVcsU0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBQXhCO0FBQStCLGVBQVcsRUFBRUQsS0FBSyxDQUFDZ0I7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0FBRWVlLG9FQUFoQixFOzs7Ozs7Ozs7OztBQ1ZBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIExpc3RJdGVtc1Byb3Bze1xyXG4gICAgaXRlbXM6YW55O1xyXG4gICAgc2V0VXBkYXRlOih2YWx1ZTphbnksIGtleTphbnkgKSA9PiB2b2lkO1xyXG4gICAgZGVsZXRlSXRlbTooa2V5OmFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gIExpc3RJdGVtcyhwcm9wczpMaXN0SXRlbXNQcm9wcykge1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gcHJvcHMuaXRlbXM7XHJcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBpdGVtcy5tYXAoIChpdGVtczp7dGV4dDphbnksa2V5OmFueX0pOiBKU1guRWxlbWVudCA9PlxyXG4gICAgXHJcbiAgICAgICAgKFxyXG4gICAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXtpdGVtcy5rZXl9PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD17aXRlbXMua2V5fSAgdmFsdWU9e2l0ZW1zLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6UmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+XHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLnNldFVwZGF0ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUsIGl0ZW1zLmtleSl9IC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+cHJvcHMuZGVsZXRlSXRlbShpdGVtcy5rZXkpfT5kZWxldGU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gLmxpc3R7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3NSwgMjI0LCA0MikgO1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxpc3QgcHtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxpc3QgcCBzcGFuIGJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlzdCBwIGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5saXN0IHAgaW5wdXR7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2PntsaXN0SXRlbXN9PC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpc3RJdGVtcyBmcm9tICcuL1RvZG8nO1xyXG5cclxudHlwZSBNeVByb3BzPXtcclxuICBpdGVtczphbnk7XHJcbiAgY3VycmVudEl0ZW06e3RleHQ6YW55LCBrZXk6YW55fVxyXG59XHJcblxyXG50eXBlIE15U3RhdGUgPXtcclxuICBpdGVtczogYW55O1xyXG4gIGN1cnJlbnRJdGVtOnt0ZXh0OmFueSwga2V5OmFueX1cclxufVxyXG5cclxuXHJcbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE15UHJvcHMsTXlTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOk15UHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXRlbXM6W10sXHJcbiAgICAgIGN1cnJlbnRJdGVtOntcclxuICAgICAgICB0ZXh0OicnLFxyXG4gICAgICAgIGtleTonJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZEl0ZW0gPSB0aGlzLmFkZEl0ZW0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlSW5wdXQgPSB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRlbGV0ZUl0ZW0gPXRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRVcGRhdGUgPSB0aGlzLnNldFVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pil7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gdGhpcy5zdGF0ZS5jdXJyZW50SXRlbTtcclxuICAgIGlmKG5ld0l0ZW0udGV4dCAhPT1cIlwiKXtcclxuICAgICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5zdGF0ZS5pdGVtcywgbmV3SXRlbV07XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICBjdXJyZW50SXRlbTp7XHJcbiAgICAgICAgdGV4dDonJyxcclxuICAgICAgICBrZXk6JydcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlSW5wdXQoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjdXJyZW50SXRlbTp7XHJcbiAgICAgICAgdGV4dDogZS5jdXJyZW50VGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIGtleTogRGF0ZS5ub3coKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuIFxyXG4gIGRlbGV0ZUl0ZW0oa2V5OiBhbnkpe1xyXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcz0gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoKGl0ZW06IHsga2V5OiBhbnk7IH0pID0+XHJcbiAgICAgIGl0ZW0ua2V5IT09a2V5KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpdGVtczogZmlsdGVyZWRJdGVtc1xyXG4gICAgfSlcclxuXHJcbiAgfVxyXG4gIHNldFVwZGF0ZSh0ZXh0OiBhbnksa2V5OiBzdHJpbmcpe1xyXG4gICAgY29uc29sZS5sb2coXCJpdGVtczpcIit0aGlzLnN0YXRlLml0ZW1zKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuICAgIGl0ZW1zLm1hcCgoaXRlbTogeyBrZXk6IHN0cmluZzsgdGV4dDogYW55OyB9KT0+eyAgICAgIFxyXG4gICAgaWYoaXRlbS5rZXk9PT1rZXkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ua2V5ICtcIiAgICBcIitrZXkpXHJcbiAgICAgICAgaXRlbS50ZXh0PSB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGl0ZW1zOiBpdGVtc1xyXG4gICAgfSkgfVxyXG4gXHJcbiBcclxucmVuZGVyKCl7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJ0by1kby1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuYWRkSXRlbX0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQgYWJvdXQgVG9kYXk/XCIgdmFsdWU9IHt0aGlzLnN0YXRlLmN1cnJlbnRJdGVtLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fT48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwPnt0aGlzLnN0YXRlLml0ZW1zLnRleHR9PC9wPlxyXG4gICAgICAgIDxMaXN0SXRlbXMgaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9IGRlbGV0ZUl0ZW09e3RoaXMuZGVsZXRlSXRlbX0gc2V0VXBkYXRlPXt0aGlzLnNldFVwZGF0ZX0vPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHN0eWxlPntgYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uQXBwe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgbWluLWhlaWdodDo1MDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbn1cclxuXHJcbiN0by1kby1mb3JtIGlucHV0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMDsgXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiN0by1kby1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3RvLWRvLWZvcm0gaW5wdXQ6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jdG8tZG8tZm9ybSBidXR0b257XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47IFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jdG8tZG8tZm9ybSBidXR0b246Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9MaXN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wczogYW55KTpKU1guRWxlbWVudHtcclxuICByZXR1cm4oXHJcbiAgICA8VG9kb0xpc3QgIGl0ZW1zPXtwcm9wcy5pdGVtc30gY3VycmVudEl0ZW09e3Byb3BzLmN1cnJlbnRJdGVtfT48L1RvZG9MaXN0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=