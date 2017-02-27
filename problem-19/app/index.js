'use strict';

import calculateSundays from 'calculateSundays';  

(function() {
    let startTime = new Date();
    let start = new Date('1/1/1901');
    let end = new Date('12/31/2000');

    let totalSundays = calculateSundays(start, end);

    let endTime = new Date();
    let timeTaken = endTime.getTime() - startTime.getTime();

    console.log(' Counting Sundays: https://projecteuler.net/problem=19 ' +
        '\n Start Date: ' + start.toDateString() +
        '\n End Date: ' + end.toDateString() +
        '\n Total Sundays: ' + totalSundays +
        '\n Time Taken: ' + timeTaken + ' milliseconds');
})();