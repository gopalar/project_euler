'use strict';

// Counting Sundays https://projecteuler.net/problem=67
// Solution is based on http://www.mathblog.dk/project-euler-67/

function calculateMaxPathSum(triangle) {
    if(!Array.isArray(triangle)) {
        throw new Error(errors.invalidInput);
    } 

    // Calculate max path sum from bottom of the tree, string with row last but one.
    for(let index = triangle.length-2; index >= 0; index--) {
        let row = triangle[index];
        // Adjecent row
        let rowAdjecent = triangle[index + 1];
        for (let rowIndex = 0; rowIndex < row.length; rowIndex++) {
            let value = row[rowIndex];
            let leftTotal = value + rowAdjecent[rowIndex];
            let rightTotal = value + rowAdjecent[rowIndex + 1];
            // Check if left adjecent total is greater than right adjecent total
            if (leftTotal > rightTotal) {
                // Left is greater
                row[rowIndex] = leftTotal;
            }
            else {
                // Right is greater
                row[rowIndex] = rightTotal;
            }
        }
    }

    let result = triangle[0][0];
    return(result);
}

export const errors = {
    invalidInput: "Input param must be an array."
};

export default calculateMaxPathSum;