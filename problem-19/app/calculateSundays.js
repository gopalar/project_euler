'use strict';

// Counting Sundays https://projecteuler.net/problem=19
// Solution is based on http://www.mathblog.dk/project-euler-19/

function calculateSundays(start, end) {
    let totalSundays = 0;

    // Validate Date Range
    if(start > end) {
        throw new Error(errors.invalidDateRange);
    }

    // Validate start date
    let startMonth = start.getMonth();
    let startDate = start.getDate();
    if(startMonth !== 0 || startDate !== 1) {
        throw new Error(errors.invalidStartDate);
    }

    // Validate end date
    let endMonth = end.getMonth();
    let endDate = end.getDate();
    if(endMonth !== 11 || endDate !== 31) {
        throw new Error(errors.invalidEndDate);
    }

    let startYear = start.getFullYear();
    let endYear = end.getFullYear();
    for (let year = startYear; year <= endYear; year++) {
        for (let month = 0; month < 12 ; month++) {
            let firstOfMonth = new Date(year, month, 1);

            // Check if first day of month is Sunday
            if (firstOfMonth.getDay() === 0) {                
                totalSundays++;
            }
        }
    }
    return (totalSundays);
}

export const errors = {
    invalidDateRange: "Start date must be less than end date.",
    invalidStartDate: "Start month must be 1 and start date must be 1.",
    invalidEndDate: "End month must be 12 and end date must be 31.",
};

export default calculateSundays;