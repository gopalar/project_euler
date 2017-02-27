'use strict';

import readline from 'readline';
import * as fs from 'fs';
import calculateMaxPathSum from 'calculateMaxPathSum';

(function (filename) {
    let triangle = [];
    let lineNumber = 0;
    let startTime = new Date();

    if (!fs.existsSync(filename)) {
        throw 'File not found. ' + filename;
    }

    var lineReader = readline.createInterface({
        input: fs.createReadStream(filename)
    });

    lineReader.on('line', function (line) {
        line = line.trim();
        // Check if row is empty
        if(line.length > 0){
            let values = line.split(' ');
            // Convert values to numeric
            for(let index = 0; index < values.length; index++){
                values[index] = +values[index];
            }         
            triangle[lineNumber] = values;
            lineNumber++;
        }
    });

    lineReader.on('close', function () {
        let maxTotal = 0;
        // Check if file is empty
        if(triangle && triangle.length > 0) {
            maxTotal = calculateMaxPathSum(triangle);
        }
        let endTime = new Date();
        let timeTaken = endTime.getTime() - startTime.getTime();

        console.log(' Maximum path sum II: https://projecteuler.net/problem=67 ' +
            '\n File: ' + filename +            
            '\n Max Total: ' + maxTotal +
            '\n Time Taken: ' + timeTaken + ' milliseconds');
    });
})('p067_triangle.txt');