'use strict';

import calculateMaxPathSum, {errors} from '../../../app/calculateMaxPathSum';

describe("Maximum path sum II: ", function () {
    
    it("expect 4 with simple triangle 1, 2, 3.", function () {
        // Arrange
        let triangle = [[1], [2,3]];

        // Acct
        let maxPathSum = calculateMaxPathSum(triangle);
        
        // Assert
        expect(maxPathSum).toEqual(4);
    });
    
    it("except 1 with triangle 1 (only one row).", function () {    
        // Arrange
        let triangle = [[1]];

        // Acct
        let maxPathSum = calculateMaxPathSum(triangle);
        
        // Assert
        expect(maxPathSum).toEqual(1);
    });
    
    
    it("Must throw error, when input param is an object.", function () {
        // Arrange
        let triangle = {};

        // Acct and Assert
        expect(calculateMaxPathSum(triangle)).toThrowError(errors.invalidInput);
    });

    it("Must throw error, when input param is undefined.", function () {
        // Arrange
        let triangle;

        // Acct and Assert
        expect(calculateMaxPathSum(triangle)).toThrowError(errors.invalidInput);
    });
});