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
    console.error("Firebase initialization error", err.stack);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UuanMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJlcnIiLCJ0ZXN0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiZmlyZSIsImZpcmVzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLGNBQWMsR0FBRztBQUNuQkMsUUFBTSxFQUFFLHlDQURXO0FBRW5CQyxZQUFVLEVBQUUsZ0NBRk87QUFHbkJDLGFBQVcsRUFBRSxvREFITTtBQUluQkMsV0FBUyxFQUFFLGdCQUpRO0FBS25CQyxlQUFhLEVBQUUsNEJBTEk7QUFNbkJDLG1CQUFpQixFQUFFLGNBTkE7QUFPbkJDLE9BQUssRUFBRSwyQ0FQWTtBQVFuQkMsZUFBYSxFQUFFO0FBUkksQ0FBckIsQyxDQVVBOztBQUNBLElBQUk7QUFDRkMsa0RBQVEsQ0FBQ0MsYUFBVCxDQUF1QlYsY0FBdkI7QUFDRCxDQUZELENBRUUsT0FBT1csR0FBUCxFQUFZO0FBQ1osTUFBSSxDQUFDLGlCQUFpQkMsSUFBakIsQ0FBc0JELEdBQUcsQ0FBQ0UsT0FBMUIsQ0FBTCxFQUF5QztBQUN2Q0MsV0FBTyxDQUFDQyxLQUFSLENBQWMsK0JBQWQsRUFBK0NKLEdBQUcsQ0FBQ0ssS0FBbkQ7QUFDRDtBQUNGOztBQUNELElBQU1DLElBQUksR0FBR1IsZ0RBQVEsQ0FBQ1MsU0FBVCxFQUFiO0FBQ2VELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhZDRjM2YzYjU2YWQwZDRmOWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcblxyXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeURBWWNVYlpmT2tOTnRTWHh1QlRHN2pad3J5UW5JbGZoWVwiLFxyXG4gIGF1dGhEb21haW46IFwidG9kby1hcHAtNjllZmIuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly90b2RvLWFwcC02OWVmYi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidG9kby1hcHAtNjllZmJcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInRvZG8tYXBwLTY5ZWZiLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzYwODc3MTI0OTY5XCIsXHJcbiAgYXBwSWQ6IFwiMTo3NjA4NzcxMjQ5Njk6d2ViOjI3MzNhMGQ1NWVlNDg2MTEwMmMxZjhcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctWVlMTEJSQ1o4NlwiLFxyXG59O1xyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbnRyeSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn0gY2F0Y2ggKGVycikge1xyXG4gIGlmICghL2FscmVhZHkgZXhpc3RzLy50ZXN0KGVyci5tZXNzYWdlKSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yXCIsIGVyci5zdGFjayk7XHJcbiAgfVxyXG59XHJcbmNvbnN0IGZpcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuZXhwb3J0IGRlZmF1bHQgZmlyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==