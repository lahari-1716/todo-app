webpackHotUpdate_N_E("pages/index",{

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");

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
  firebase__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

var fire = firebase__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
/* harmony default export */ __webpack_exports__["default"] = (fire);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UuanMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJlcnIiLCJ0ZXN0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiZmlyZSIsImZpcmVzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUVBLElBQUlBLGNBQWMsR0FBRztBQUNqQkMsUUFBTSxFQUFFLHlDQURTO0FBRWpCQyxZQUFVLEVBQUUsZ0NBRks7QUFHakJDLGFBQVcsRUFBRSxvREFISTtBQUlqQkMsV0FBUyxFQUFFLGdCQUpNO0FBS2pCQyxlQUFhLEVBQUUsNEJBTEU7QUFNakJDLG1CQUFpQixFQUFFLGNBTkY7QUFPakJDLE9BQUssRUFBRSwyQ0FQVTtBQVFqQkMsZUFBYSxFQUFFO0FBUkUsQ0FBckIsQyxDQVVFOztBQUNBLElBQUk7QUFDSkMsa0RBQVEsQ0FBQ0MsYUFBVCxDQUF1QlYsY0FBdkI7QUFDRCxDQUZDLENBRUEsT0FBTVcsR0FBTixFQUFVO0FBQ1YsTUFBSSxDQUFDLGlCQUFpQkMsSUFBakIsQ0FBc0JELEdBQUcsQ0FBQ0UsT0FBMUIsQ0FBTCxFQUF5QztBQUN2Q0MsV0FBTyxDQUFDQyxLQUFSLENBQWMsK0JBQWQsRUFBK0NKLEdBQUcsQ0FBQ0ssS0FBbkQ7QUFBMEQ7QUFDN0Q7O0FBQ0QsSUFBTUMsSUFBSSxHQUFHUixnREFBUSxDQUFDUyxTQUFULEVBQWI7QUFDZUQsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWVjODhlYWM3OGE1NmE2OWJiYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcblxyXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5REFZY1ViWmZPa05OdFNYeHVCVEc3alp3cnlRbklsZmhZXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInRvZG8tYXBwLTY5ZWZiLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly90b2RvLWFwcC02OWVmYi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJ0b2RvLWFwcC02OWVmYlwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ0b2RvLWFwcC02OWVmYi5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzYwODc3MTI0OTY5XCIsXHJcbiAgICBhcHBJZDogXCIxOjc2MDg3NzEyNDk2OTp3ZWI6MjczM2EwZDU1ZWU0ODYxMTAyYzFmOFwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVlZTExCUkNaODZcIlxyXG4gIH07XHJcbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG4gIHRyeSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn0gY2F0Y2goZXJyKXtcclxuICBpZiAoIS9hbHJlYWR5IGV4aXN0cy8udGVzdChlcnIubWVzc2FnZSkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yJywgZXJyLnN0YWNrKX1cclxufVxyXG5jb25zdCBmaXJlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGZpcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==