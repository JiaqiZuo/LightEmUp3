/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cellBtn.js":
/*!************************!*\
  !*** ./src/cellBtn.js ***!
  \************************/
/*! exports provided: clickCellBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickCellBtn\", function() { return clickCellBtn; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction clickCellBtn() {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"cell\"]').click(function (event) {\r\n        event.preventDefault();\r\n        console.log(this.value);\r\n        var clickBtn=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\r\n        // post/game-post.php\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post( \"post/game-post.php\",{cell:this.value}, function( data ) {\r\n            console.log(data)\r\n            switch (data) {\r\n                case \"-1\":\r\n                    clickBtn.html(\"&nbsp;\")\r\n                    break;\r\n                case \"-2\":\r\n\r\n                    break;\r\n                case \"-3\":\r\n                    clickBtn.html('<img src=\"images/light.png\" width=\"43\" height=\"75\" alt=\"Light\">')\r\n                    clickBtn.parent('td').removeClass(\"unshaded\").addClass(\"light\")\r\n                    break;\r\n                case \"-4\":\r\n                    clickBtn.html(\"•\")\r\n                    clickBtn.parent('td').removeClass(\"light\").addClass(\"unshaded\")\r\n                    break;\r\n\r\n            }\r\n        });\r\n    })\r\n\r\n    \r\n  }\n\n//# sourceURL=webpack:///./src/cellBtn.js?");

/***/ }),

/***/ "./src/checkBtn.js":
/*!*************************!*\
  !*** ./src/checkBtn.js ***!
  \*************************/
/*! exports provided: checkBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkBtn\", function() { return checkBtn; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction checkBtn() {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"check\"]').click(function (event) {\r\n        event.preventDefault();\r\n        console.log(this);\r\n        var clickBtn=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\r\n        // post/game-post.php\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post( \"post/game-post.php\",{check:\"\"}, function( data ) {\r\n            console.log(data)\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"td\").removeClass(\"wrong\")\r\n            var wrongCells=JSON.parse(data);\r\n            for (var i = 0; i < wrongCells.length; i++) {\r\n\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"button[value='\"+wrongCells[i]+\"']\").parent().addClass(\"wrong\")\r\n            }\r\n\r\n        });\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/checkBtn.js?");

/***/ }),

/***/ "./src/clearBtn.js":
/*!*************************!*\
  !*** ./src/clearBtn.js ***!
  \*************************/
/*! exports provided: clearBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearBtn\", function() { return clearBtn; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction clearBtn() {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"clear\"]').click(function (event) {\r\n        event.preventDefault();\r\n        console.log(this);\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"post/game-post.php\", {clear: \"\"}, function (data) {\r\n\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.controls').hide();\r\n\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.messageDiv').html('<p><button name=\"yes\">Yes</button> <button name=\"no\">No</button></p>\\n' +\r\n                '<p class=\"message\">Are you sure you want to clear?</p>')\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".messageDiv\").show()\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"yes\"]').click(function (event) {\r\n                event.preventDefault();\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"post/game-post.php\", {yes: \"\"}, function (data) {\r\n\r\n                })\r\n// post/game-post.php\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"td\").removeClass(\"wrong\");\r\n                var btns = jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"cell\"]');\r\n                for (var i = 0; i < btns.length; i++) {\r\n                    if (btns[i].innerHTML != \"&nbsp;\") {\r\n                        btns[i].innerHTML=\"&nbsp;\"\r\n                    }\r\n                }\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".controls\").show();\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".messageDiv\").html(\"\").hide()\r\n            });\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"no\"]').click(function (event) {\r\n\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".controls\").show();\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".messageDiv\").html(\"\").hide()\r\n            });\r\n\r\n        });\r\n\r\n\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/clearBtn.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cellBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cellBtn */ \"./src/cellBtn.js\");\n/* harmony import */ var _checkBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkBtn */ \"./src/checkBtn.js\");\n/* harmony import */ var _solveBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solveBtn */ \"./src/solveBtn.js\");\n/* harmony import */ var _clearBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearBtn */ \"./src/clearBtn.js\");\n\r\n\r\n\r\n\r\nObject(_cellBtn__WEBPACK_IMPORTED_MODULE_0__[\"clickCellBtn\"])();\r\nObject(_checkBtn__WEBPACK_IMPORTED_MODULE_1__[\"checkBtn\"])();\r\nObject(_solveBtn__WEBPACK_IMPORTED_MODULE_2__[\"solveBtn\"])();\r\nObject(_clearBtn__WEBPACK_IMPORTED_MODULE_3__[\"clearBtn\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/solveBtn.js":
/*!*************************!*\
  !*** ./src/solveBtn.js ***!
  \*************************/
/*! exports provided: solveBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"solveBtn\", function() { return solveBtn; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction solveBtn() {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"solve\"]').click(function (event) {\r\n        event.preventDefault();\r\n        console.log(this);\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"post/game-post.php\", {solve: \"\"}, function (data) {\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.controls').hide();\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.messageDiv').html('<p><button name=\"yes\">Yes</button> <button name=\"no\">No</button></p>\\n' +\r\n                '<p class=\"message\">Are you sure you want to solve?</p>').show()\r\n\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"yes\"]').click(function (event) {\r\n                event.preventDefault();\r\n// post/game-post.php\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"post/game-post.php\", {yes: \"\"}, function (data) {\r\n                    console.log(data)\r\n                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"td\").removeClass(\"wrong\")\r\n                    var btns = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.parseJSON(data)\r\n                    var arr = []\r\n                    for (let i in btns) {\r\n                        let o = {};\r\n                        o[i] = btns[i];\r\n                        arr.push(o)\r\n                    }\r\n\r\n                    for (var i = 1; i <= arr.length; i++) {\r\n                        for (var j = 1; j <= Object.keys(btns[i]).length; j++) {\r\n                            console.log('button[value=\"' + i + ',' + j + '\"]')\r\n                            var btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[value=\"' + i + ',' + j + '\"]')\r\n                            switch (btns[i][j]) {\r\n                                case -4:\r\n                                    btn.html('•')\r\n                                    btn.parent('td').removeClass(\"light\").addClass(\"unshaded\")\r\n                                    break;\r\n                                case -3:\r\n                                    btn.html('<img src=\"images/light.png\" width=\"43\" height=\"75\" alt=\"Light\">')\r\n                                    btn.parent('td').removeClass(\"unshaded\").addClass(\"light\")\r\n                                    break;\r\n                                default:\r\n                                    break;\r\n                            }\r\n                        }\r\n                    }\r\n                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".messageDiv\").html('<p class=\"message\">Solution is correct!</p>\\n' +\r\n                        '<p><button name=\"clear\">Clear</button></p>');\r\n                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"clear\"]').click(function (event) {\r\n                        event.preventDefault();\r\n                        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"post/game-post.php\", {clear: \"\"}, function (data) {\r\n                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.messageDiv').html('<p><button name=\"yes\">Yes</button> <button name=\"no\">No</button></p>\\n' +\r\n                            '<p class=\"message\">Are you sure you want to clear?</p>')\r\n                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"yes\"]').click(function (event) {\r\n                            event.preventDefault();\r\n// post/game-post.php\r\n                            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"post/game-post.php\", {yes: \"\"}, function (data) {\r\n\r\n                            })\r\n                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"td\").removeClass(\"wrong\");\r\n                            var btns = jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"cell\"]');\r\n                            for (var i = 0; i < btns.length; i++) {\r\n                                if (btns[i].innerHTML != \"&nbsp;\") {\r\n                                    btns[i].innerHTML = \"&nbsp;\"\r\n                                }\r\n                            }\r\n                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".controls\").show();\r\n                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".messageDiv\").html(\"\").hide()\r\n                        });\r\n                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"no\"]').click(function (event) {\r\n\r\n                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".controls\").show();\r\n                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".messageDiv\").html(\"\").hide()\r\n                        });\r\n                        });\r\n                    })\r\n\r\n                });\r\n            });\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[name=\"no\"]').click(function (event) {\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".controls\").show();\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".messageDiv\").html(\"\").hide()\r\n            });\r\n\r\n        })\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack:///./src/solveBtn.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************************!*\
  !*** multi ./src/index.js ./src/cellBtn.js ./src/checkBtn.js ./src/clearBtn.js ./src/solveBtn.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n__webpack_require__(/*! ./src/cellBtn.js */\"./src/cellBtn.js\");\n__webpack_require__(/*! ./src/checkBtn.js */\"./src/checkBtn.js\");\n__webpack_require__(/*! ./src/clearBtn.js */\"./src/clearBtn.js\");\nmodule.exports = __webpack_require__(/*! ./src/solveBtn.js */\"./src/solveBtn.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/cellBtn.js_./src/checkBtn.js_./src/clearBtn.js_./src/solveBtn.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });