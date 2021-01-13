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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");

var _jsxFileName = "C:\\Users\\lahari\\Documents\\my-todo-app\\pages\\index.tsx";



function Index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: props.items,
      currentItem: props.currentItem
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJMaXN0SXRlbXMiLCJwcm9wcyIsIml0ZW1zIiwibGlzdEl0ZW1zIiwibWFwIiwia2V5IiwidGV4dCIsImUiLCJzZXRVcGRhdGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJkZWxldGVJdGVtIiwiVG9kb0xpc3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJjdXJyZW50SXRlbSIsImFkZEl0ZW0iLCJiaW5kIiwiaGFuZGxlSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsImZpcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwiaW5wcm9ncmVzcyIsInRpbWVzdGFtcCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsInRvZG8iLCJuZXdJdGVtIiwic2V0U3RhdGUiLCJEYXRlIiwibm93IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJpbml0aWFsaXplQXBwIiwiZXJyIiwidGVzdCIsIm1lc3NhZ2UiLCJlcnJvciIsInN0YWNrIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQVFBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBDO0FBQ3hDLFFBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDQyxLQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQ2ZGLEtBQUQsaUJBQ0U7QUFBQSx1Q0FBZSxNQUFmO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLEVBQUVBLEtBQUssQ0FBQ0csR0FGWjtBQUdFLGFBQUssRUFBRUgsS0FBSyxDQUFDSSxJQUhmO0FBSUUsZ0JBQVEsRUFB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TyxDQUFDZ0IsS0FBUixDQUFjLCtCQUFkLEVBQStDSCxHQUFHLENBQUNJLEtBQW5EO0FBQ0Q7QUFDRjs7QUFDRCxNQUFNbEMsSUFBSSxHQUFHSywrQ0FBUSxDQUFDQyxTQUFULEVBQWI7QUFDZU4sbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFHQSxTQUFTbUMsS0FBVCxDQUFleEQsS0FBZixFQUF3QztBQUN0QyxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQVUsV0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBQXZCO0FBQThCLGlCQUFXLEVBQUVELEtBQUssQ0FBQ2dCO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY3dDLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDWkEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBMaXN0SXRlbXNQcm9wcyB7XHJcbiAgaXRlbXM6IGFueTtcclxuICBzZXRVcGRhdGU6ICh2YWx1ZTogYW55LCBrZXk6IGFueSkgPT4gdm9pZDtcclxuICBkZWxldGVJdGVtOiAoa2V5OiBhbnkpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExpc3RJdGVtcyhwcm9wczogTGlzdEl0ZW1zUHJvcHMpIHtcclxuICBjb25zdCBpdGVtcyA9IHByb3BzLml0ZW1zO1xyXG4gIGNvbnN0IGxpc3RJdGVtcyA9IGl0ZW1zLm1hcChcclxuICAgIChpdGVtczogeyB0ZXh0OiBhbnk7IGtleTogYW55IH0pOiBKU1guRWxlbWVudCA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiIGtleT17aXRlbXMua2V5fT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPXtpdGVtcy5rZXl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtpdGVtcy50ZXh0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5zZXRVcGRhdGUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCBpdGVtcy5rZXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZUl0ZW0oaXRlbXMua2V5KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDIyNCwgNDIpO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saXN0IHAge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGlzdCBwIHNwYW4gYnV0dG9uIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGlzdCBwIGlucHV0IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlzdCBwIGlucHV0IHtcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICk7XHJcbiAgcmV0dXJuIDxkaXY+e2xpc3RJdGVtc308L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1zIGZyb20gXCIuL1RvZG9cIjtcclxuaW1wb3J0IGZpcmUgZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuXHJcbnR5cGUgTXlQcm9wcyA9IHtcclxuICBpdGVtczogc3RyaW5nO1xyXG4gIGN1cnJlbnRJdGVtOiB7IHRleHQ6IHN0cmluZzsga2V5OiBhbnkgfTtcclxufTtcclxuXHJcbnR5cGUgTXlTdGF0ZSA9IHtcclxuICBpdGVtczogYW55O1xyXG4gIGN1cnJlbnRJdGVtOiB7IHRleHQ6IHN0cmluZzsga2V5OiBhbnkgfTtcclxufTtcclxuXHJcbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE15UHJvcHMsIE15U3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogTXlQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICBjdXJyZW50SXRlbToge1xyXG4gICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAga2V5OiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIHRoaXMuYWRkSXRlbSA9IHRoaXMuYWRkSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGVsZXRlSXRlbSA9IHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRVcGRhdGUgPSB0aGlzLnNldFVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZmlyZS5jb2xsZWN0aW9uKFwidG9kb1wiKS5hZGQoe1xyXG4gICAgICBpbnByb2dyZXNzOiB0cnVlLFxyXG4gICAgICB0aW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB0b2RvOiB0aGlzLnN0YXRlLmN1cnJlbnRJdGVtLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gdGhpcy5zdGF0ZS5jdXJyZW50SXRlbTtcclxuICAgIGlmIChuZXdJdGVtLnRleHQgIT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5zdGF0ZS5pdGVtcywgbmV3SXRlbV07XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICBjdXJyZW50SXRlbToge1xyXG4gICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgIGtleTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlSW5wdXQoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3VycmVudEl0ZW06IHtcclxuICAgICAgICB0ZXh0OiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXHJcbiAgICAgICAga2V5OiBEYXRlLm5vdygpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVJdGVtKGtleTogYW55KSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoXHJcbiAgICAgIChpdGVtOiB7IGtleTogYW55IH0pID0+IGl0ZW0ua2V5ICE9PSBrZXlcclxuICAgICk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXRlbXM6IGZpbHRlcmVkSXRlbXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFVwZGF0ZSh0ZXh0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIml0ZW1zOlwiICsgdGhpcy5zdGF0ZS5pdGVtcyk7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBpdGVtcy5tYXAoKGl0ZW06IHsga2V5OiBzdHJpbmc7IHRleHQ6IGFueSB9KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS5rZXkgKyBcIiAgICBcIiArIGtleSk7XHJcbiAgICAgICAgaXRlbS50ZXh0ID0gdGV4dDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8Zm9ybSBpZD1cInRvLWRvLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhYm91dCBUb2RheT9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRJdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLml0ZW1zLnRleHR9PC9wPlxyXG4gICAgICAgICAgPExpc3RJdGVtc1xyXG4gICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc31cclxuICAgICAgICAgICAgZGVsZXRlSXRlbT17dGhpcy5kZWxldGVJdGVtfVxyXG4gICAgICAgICAgICBzZXRVcGRhdGU9e3RoaXMuc2V0VXBkYXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8c3R5bGU+e2Bib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5BcHB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxufVxyXG5cclxuI3RvLWRvLWZvcm0gaW5wdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAwOyBcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuI3RvLWRvLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jdG8tZG8tZm9ybSBpbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiN0by1kby1mb3JtIGJ1dHRvbntcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiN0by1kby1mb3JtIGJ1dHRvbjpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5REFZY1ViWmZPa05OdFNYeHVCVEc3alp3cnlRbklsZmhZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ0b2RvLWFwcC02OWVmYi5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3RvZG8tYXBwLTY5ZWZiLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ0b2RvLWFwcC02OWVmYlwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidG9kby1hcHAtNjllZmIuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3NjA4NzcxMjQ5NjlcIixcclxuICBhcHBJZDogXCIxOjc2MDg3NzEyNDk2OTp3ZWI6MjczM2EwZDU1ZWU0ODYxMTAyYzFmOFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1ZWUxMQlJDWjg2XCIsXHJcbn07XHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxudHJ5IHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufSBjYXRjaCAoZXJyKSB7XHJcbiAgaWYgKCEvYWxyZWFkeSBleGlzdHMvLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmlyZWJhc2UgaW5pdGlhbGl6YXRpb24gZXJyb3JcIiwgZXJyLnN0YWNrKTtcclxuICB9XHJcbn1cclxuY29uc3QgZmlyZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBmaXJlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcclxuaW1wb3J0IGZpcmUgZnJvbSBcImZpcmViYXNlXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8VG9kb0xpc3QgaXRlbXM9e3Byb3BzLml0ZW1zfSBjdXJyZW50SXRlbT17cHJvcHMuY3VycmVudEl0ZW19PjwvVG9kb0xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==