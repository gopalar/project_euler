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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Counting Sundays https://projecteuler.net/problem=19
// Solution is based on http://www.mathblog.dk/project-euler-19/

Object.defineProperty(exports, "__esModule", {
    value: true
});
function calculateSundays(start, end) {
    var totalSundays = 0;

    // Validate Date Range
    if (start > end) {
        throw new Error(errors.invalidDateRange);
    }

    // Validate start date
    var startMonth = start.getMonth();
    var startDate = start.getDate();
    if (startMonth !== 0 || startDate !== 1) {
        throw new Error(errors.invalidStartDate);
    }

    // Validate end date
    var endMonth = end.getMonth();
    var endDate = end.getDate();
    if (endMonth !== 11 || endDate !== 31) {
        throw new Error(errors.invalidEndDate);
    }

    var startYear = start.getFullYear();
    var endYear = end.getFullYear();
    for (var year = startYear; year <= endYear; year++) {
        for (var month = 0; month < 12; month++) {
            var firstOfMonth = new Date(year, month, 1);

            // Check if first day of month is Sunday
            if (firstOfMonth.getDay() === 0) {
                totalSundays++;
            }
        }
    }
    return totalSundays;
}

var errors = exports.errors = {
    invalidDateRange: "Start date must be less than end date.",
    invalidStartDate: "Start month must be 1 and start date must be 1.",
    invalidEndDate: "End month must be 12 and end date must be 31."
};

exports.default = calculateSundays;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _calculateSundays = __webpack_require__(0);

var _calculateSundays2 = _interopRequireDefault(_calculateSundays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var startTime = new Date();
    var start = new Date('1/1/1901');
    var end = new Date('12/31/2000');

    var totalSundays = (0, _calculateSundays2.default)(start, end);

    var endTime = new Date();
    var timeTaken = endTime.getTime() - startTime.getTime();

    console.log(' Counting Sundays: https://projecteuler.net/problem=19 ' + '\n Start Date: ' + start.toDateString() + '\n End Date: ' + end.toDateString() + '\n Total Sundays: ' + totalSundays + '\n Time Taken: ' + timeTaken + ' milliseconds');
})();

/***/ })
/******/ ]);