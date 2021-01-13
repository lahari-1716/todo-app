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

var _jsxFileName = "C:\\Users\\lahari\\Documents\\my-todo-app\\components\\Todo.tsx";



function ListItems(props) {
  const items = props.items;
  const listItems = items.map(items => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-148787458" + " " + "list",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "jsx-148787458",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        id: items.key,
        value: items.text,
        onChange: e => props.setUpdate(e.currentTarget.value, items.key),
        className: "jsx-148787458"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-148787458",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => props.deleteItem(items.key),
          className: "jsx-148787458" + " " + "button",
          children: "delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "148787458",
      children: ".list.jsx-148787458{color:white;width:300px;background-color:rgb(175,224,42);height:50px;margin:20px auto;border-radius:5px;}.list.jsx-148787458 p.jsx-148787458{padding:10px;position:relative;}.list.jsx-148787458 p.jsx-148787458 span.jsx-148787458 button.jsx-148787458{position:absolute;right:10px;cursor:pointer;}.list.jsx-148787458 p.jsx-148787458 input.jsx-148787458{background-color:transparent;border:0;color:white;font-size:18px;}.list.jsx-148787458 p.jsx-148787458 input.jsx-148787458{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGFoYXJpXFxEb2N1bWVudHNcXG15LXRvZG8tYXBwXFxjb21wb25lbnRzXFxUb2RvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ1csQUFHMkIsQUFTQyxBQUtLLEFBTVcsQUFNaEIsWUF6QkQsQ0FTTSxBQWlCcEIsS0FaYSxNQWJ3QixLQWNwQixBQUtOLEVBVlgsT0FXYyxNQUxkLE1BTWlCLE9BcEJILFFBcUJkLElBcEJtQixpQkFDQyxrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxsYWhhcmlcXERvY3VtZW50c1xcbXktdG9kby1hcHBcXGNvbXBvbmVudHNcXFRvZG8udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIExpc3RJdGVtc1Byb3BzIHtcclxuICBpdGVtczogYW55O1xyXG4gIHNldFVwZGF0ZTogKHZhbHVlOiBhbnksIGtleTogYW55KSA9PiB2b2lkO1xyXG4gIGRlbGV0ZUl0ZW06IChrZXk6IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gTGlzdEl0ZW1zKHByb3BzOiBMaXN0SXRlbXNQcm9wcykge1xyXG4gIGNvbnN0IGl0ZW1zID0gcHJvcHMuaXRlbXM7XHJcbiAgY29uc3QgbGlzdEl0ZW1zID0gaXRlbXMubWFwKFxyXG4gICAgKGl0ZW1zOiB7IHRleHQ6IGFueTsga2V5OiBhbnkgfSk6IEpTWC5FbGVtZW50ID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXtpdGVtcy5rZXl9PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9e2l0ZW1zLmtleX1cclxuICAgICAgICAgICAgdmFsdWU9e2l0ZW1zLnRleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnNldFVwZGF0ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUsIGl0ZW1zLmtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZGVsZXRlSXRlbShpdGVtcy5rZXkpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgZGVsZXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmxpc3Qge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMjI0LCA0Mik7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpc3QgcCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saXN0IHAgc3BhbiBidXR0b24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saXN0IHAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saXN0IHAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgKTtcclxuICByZXR1cm4gPGRpdj57bGlzdEl0ZW1zfTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1zO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\lahari\\\\Documents\\\\my-todo-app\\\\components\\\\Todo.tsx */"
    }, void 0, false, void 0, this)]
  }, items.key, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, this));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: listItems
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 10
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
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\lahari\\Documents\\my-todo-app\\components\\TodoList.tsx";





class TodoList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].collection("todo").add({
      inprogress: true,
      timestamp: firebase__WEBPACK_IMPORTED_MODULE_4___default.a.firestore.FieldValue.serverTimestamp(),
      todo: this.state.currentItem
    });
    const newItem = this.state.currentItem;

    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: ""
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Todo__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

var firebaseConfig = {
  apiKey: "AIzaSyDAYcUbZfOkNNtSXxuBTG7jZwryQnIlfhY",
  authDomain: "todo-app-69efb.firebaseapp.com",
  databaseURL: "https://todo-app-69efb-default-rtdb.firebaseio.com",
  projectId: "todo-app-69efb",
  storageBucket: "todo-app-69efb.appspot.com",
  messagingSenderId: "760877124969",
  appId: "1:760877124969:web:2733a0d55ee4861102c1f8",
  measurementId: "G-YYLLBRCZ86"
}; // Initialize Firebase

try {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
/* harmony default export */ __webpack_exports__["default"] = (fire);

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
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");

var _jsxFileName = "C:\\Users\\lahari\\Documents\\my-todo-app\\pages\\index.tsx";


function Index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: props.items,
      currentItem: props.currentItem
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJMaXN0SXRlbXMiLCJwcm9wcyIsIml0ZW1zIiwibGlzdEl0ZW1zIiwibWFwIiwia2V5IiwidGV4dCIsImUiLCJzZXRVcGRhdGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJkZWxldGVJdGVtIiwiVG9kb0xpc3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJjdXJyZW50SXRlbSIsImFkZEl0ZW0iLCJiaW5kIiwiaGFuZGxlSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsImZpcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwiaW5wcm9ncmVzcyIsInRpbWVzdGFtcCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsInRvZG8iLCJuZXdJdGVtIiwic2V0U3RhdGUiLCJEYXRlIiwibm93IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJpbml0aWFsaXplQXBwIiwiZXJyIiwidGVzdCIsIm1lc3NhZ2UiLCJlcnJvciIsInN0YWNrIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQVFBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBDO0FBQ3hDLFFBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDQyxLQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQ2ZGLEtBQUQsaUJBQ0U7QUFBQSx1Q0FBZSxNQUFmO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLEVBQUVBLEtBQUssQ0FBQ0csR0FGWjtBQUdFLGFBQUssRUFBRUgsS0FBSyxDQUFDSSxJQUhmO0FBSUUsZ0JBQVEsRUFB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TyxDQUFDZ0IsS0FBUixDQUFjLCtCQUFkLEVBQStDSCxHQUFHLENBQUNJLEtBQW5EO0FBQ0Q7QUFDRjs7QUFDRCxNQUFNbEMsSUFBSSxHQUFHSywrQ0FBUSxDQUFDQyxTQUFULEVBQWI7QUFDZU4sbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOztBQUdBLFNBQVNtQyxLQUFULENBQWV4RCxLQUFmLEVBQXdDO0FBQ3RDLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBVSxXQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FBdkI7QUFBOEIsaUJBQVcsRUFBRUQsS0FBSyxDQUFDZ0I7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjd0Msb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNYQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIExpc3RJdGVtc1Byb3BzIHtcclxuICBpdGVtczogYW55O1xyXG4gIHNldFVwZGF0ZTogKHZhbHVlOiBhbnksIGtleTogYW55KSA9PiB2b2lkO1xyXG4gIGRlbGV0ZUl0ZW06IChrZXk6IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gTGlzdEl0ZW1zKHByb3BzOiBMaXN0SXRlbXNQcm9wcykge1xyXG4gIGNvbnN0IGl0ZW1zID0gcHJvcHMuaXRlbXM7XHJcbiAgY29uc3QgbGlzdEl0ZW1zID0gaXRlbXMubWFwKFxyXG4gICAgKGl0ZW1zOiB7IHRleHQ6IGFueTsga2V5OiBhbnkgfSk6IEpTWC5FbGVtZW50ID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXtpdGVtcy5rZXl9PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9e2l0ZW1zLmtleX1cclxuICAgICAgICAgICAgdmFsdWU9e2l0ZW1zLnRleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnNldFVwZGF0ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUsIGl0ZW1zLmtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZGVsZXRlSXRlbShpdGVtcy5rZXkpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgZGVsZXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmxpc3Qge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMjI0LCA0Mik7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpc3QgcCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saXN0IHAgc3BhbiBidXR0b24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saXN0IHAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saXN0IHAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgKTtcclxuICByZXR1cm4gPGRpdj57bGlzdEl0ZW1zfTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1zO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbXMgZnJvbSBcIi4vVG9kb1wiO1xyXG5pbXBvcnQgZmlyZSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5cclxudHlwZSBNeVByb3BzID0ge1xyXG4gIGl0ZW1zOiBzdHJpbmc7XHJcbiAgY3VycmVudEl0ZW06IHsgdGV4dDogc3RyaW5nOyBrZXk6IGFueSB9O1xyXG59O1xyXG5cclxudHlwZSBNeVN0YXRlID0ge1xyXG4gIGl0ZW1zOiBhbnk7XHJcbiAgY3VycmVudEl0ZW06IHsgdGV4dDogc3RyaW5nOyBrZXk6IGFueSB9O1xyXG59O1xyXG5cclxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TXlQcm9wcywgTXlTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBNeVByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpdGVtczogW10sXHJcbiAgICAgIGN1cnJlbnRJdGVtOiB7XHJcbiAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICBrZXk6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5hZGRJdGVtID0gdGhpcy5hZGRJdGVtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kZWxldGVJdGVtID0gdGhpcy5kZWxldGVJdGVtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldFVwZGF0ZSA9IHRoaXMuc2V0VXBkYXRlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmaXJlLmNvbGxlY3Rpb24oXCJ0b2RvXCIpLmFkZCh7XHJcbiAgICAgIGlucHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgIHRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIHRvZG86IHRoaXMuc3RhdGUuY3VycmVudEl0ZW0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB0aGlzLnN0YXRlLmN1cnJlbnRJdGVtO1xyXG4gICAgaWYgKG5ld0l0ZW0udGV4dCAhPT0gXCJcIikge1xyXG4gICAgICBjb25zdCBpdGVtcyA9IFsuLi50aGlzLnN0YXRlLml0ZW1zLCBuZXdJdGVtXTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICAgIGN1cnJlbnRJdGVtOiB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAga2V5OiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVJbnB1dChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjdXJyZW50SXRlbToge1xyXG4gICAgICAgIHRleHQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSxcclxuICAgICAgICBrZXk6IERhdGUubm93KCksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUl0ZW0oa2V5OiBhbnkpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihcclxuICAgICAgKGl0ZW06IHsga2V5OiBhbnkgfSkgPT4gaXRlbS5rZXkgIT09IGtleVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpdGVtczogZmlsdGVyZWRJdGVtcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VXBkYXRlKHRleHQ6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaXRlbXM6XCIgKyB0aGlzLnN0YXRlLml0ZW1zKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuICAgIGl0ZW1zLm1hcCgoaXRlbTogeyBrZXk6IHN0cmluZzsgdGV4dDogYW55IH0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0ua2V5ID09PSBrZXkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmtleSArIFwiICAgIFwiICsga2V5KTtcclxuICAgICAgICBpdGVtLnRleHQgPSB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpdGVtczogaXRlbXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxmb3JtIGlkPVwidG8tZG8tZm9ybVwiIG9uU3VibWl0PXt0aGlzLmFkZEl0ZW19PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFib3V0IFRvZGF5P1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVudEl0ZW0udGV4dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUuaXRlbXMudGV4dH08L3A+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1zXHJcbiAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfVxyXG4gICAgICAgICAgICBkZWxldGVJdGVtPXt0aGlzLmRlbGV0ZUl0ZW19XHJcbiAgICAgICAgICAgIHNldFVwZGF0ZT17dGhpcy5zZXRVcGRhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxzdHlsZT57YGJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLkFwcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG4gIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG59XHJcblxyXG4jdG8tZG8tZm9ybSBpbnB1dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDA7IFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jdG8tZG8tZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiN0by1kby1mb3JtIGlucHV0OmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI3RvLWRvLWZvcm0gYnV0dG9ue1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3RvLWRvLWZvcm0gYnV0dG9uOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5cclxudmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEQVljVWJaZk9rTk50U1h4dUJURzdqWndyeVFuSWxmaFlcIixcclxuICBhdXRoRG9tYWluOiBcInRvZG8tYXBwLTY5ZWZiLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdG9kby1hcHAtNjllZmItZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInRvZG8tYXBwLTY5ZWZiXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0b2RvLWFwcC02OWVmYi5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjc2MDg3NzEyNDk2OVwiLFxyXG4gIGFwcElkOiBcIjE6NzYwODc3MTI0OTY5OndlYjoyNzMzYTBkNTVlZTQ4NjExMDJjMWY4XCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLVlZTExCUkNaODZcIixcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG50cnkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59IGNhdGNoIChlcnIpIHtcclxuICBpZiAoIS9hbHJlYWR5IGV4aXN0cy8udGVzdChlcnIubWVzc2FnZSkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGaXJlYmFzZSBpbml0aWFsaXphdGlvbiBlcnJvclwiLCBlcnIuc3RhY2spO1xyXG4gIH1cclxufVxyXG5jb25zdCBmaXJlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGZpcmU7XHJcbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2RvTGlzdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUb2RvTGlzdCBpdGVtcz17cHJvcHMuaXRlbXN9IGN1cnJlbnRJdGVtPXtwcm9wcy5jdXJyZW50SXRlbX0+PC9Ub2RvTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9