/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Counting Sundays https://projecteuler.net/problem=67
// Solution is based on http://www.mathblog.dk/project-euler-67/

Object.defineProperty(exports, "__esModule", {
    value: true
});
function calculateMaxPathSum(triangle) {
    if (!Array.isArray(triangle)) {
        throw new Error(errors.invalidInput);
    }

    // Calculate max path sum from bottom of the tree, string with row last but one.
    for (var index = triangle.length - 2; index >= 0; index--) {
        var row = triangle[index];
        // Adjecent row
        var rowAdjecent = triangle[index + 1];
        for (var rowIndex = 0; rowIndex < row.length; rowIndex++) {
            var value = row[rowIndex];
            var leftTotal = value + rowAdjecent[rowIndex];
            var rightTotal = value + rowAdjecent[rowIndex + 1];
            // Check if left adjecent total is greater than right adjecent total
            if (leftTotal > rightTotal) {
                // Left is greater
                row[rowIndex] = leftTotal;
            } else {
                // Right is greater
                row[rowIndex] = rightTotal;
            }
        }
    }

    var result = triangle[0][0];
    return result;
}

var errors = exports.errors = {
    invalidInput: "Input param must be an array."
};

exports.default = calculateMaxPathSum;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readline = __webpack_require__(2);

var _readline2 = _interopRequireDefault(_readline);

var _fs = __webpack_require__(1);

var fs = _interopRequireWildcard(_fs);

var _calculateMaxPathSum = __webpack_require__(0);

var _calculateMaxPathSum2 = _interopRequireDefault(_calculateMaxPathSum);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (filename) {
    var triangle = [];
    var lineNumber = 0;
    var startTime = new Date();

    if (!fs.existsSync(filename)) {
        throw 'File not found. ' + filename;
    }

    var lineReader = _readline2.default.createInterface({
        input: fs.createReadStream(filename)
    });

    lineReader.on('line', function (line) {
        line = line.trim();
        // Check if row is empty
        if (line.length > 0) {
            var values = line.split(' ');
            // Convert values to numeric
            for (var index = 0; index < values.length; index++) {
                values[index] = +values[index];
            }
            triangle[lineNumber] = values;
            lineNumber++;
        }
    });

    lineReader.on('close', function () {
        var maxTotal = 0;
        // Check if file is empty
        if (triangle && triangle.length > 0) {
            maxTotal = (0, _calculateMaxPathSum2.default)(triangle);
        }
        var endTime = new Date();
        var timeTaken = endTime.getTime() - startTime.getTime();

        console.log(' Maximum path sum II: https://projecteuler.net/problem=67 ' + '\n File: ' + filename + '\n Max Total: ' + maxTotal + '\n Time Taken: ' + timeTaken + ' milliseconds');
    });
})('p067_triangle.txt');

/***/ })
/******/ ]);