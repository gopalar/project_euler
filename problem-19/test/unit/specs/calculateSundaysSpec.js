'use strict';

import calculateSundays, {errors} from '../../../app/calculateSundays';

describe("Calculate Sundays: ", function () {
    
    it("expect 171 sundays between '1/1/1901' and '12/31/2000'", function () {
        // Arrange
        let start = new Date('1/1/1901');
        let end = new Date('12/31/2000');

        // Act
        let totalSundays = calculateSundays(start, end);

        // Assert
        expect(totalSundays).toEqual(171);
    });
    
    it("expect 1 sunday", function () {    
        // Arrange
        let start = new Date('1/1/2016');
        let end = new Date('12/31/2016');
        
        // Act
        let totalSundays = calculateSundays(start, end);

        // Assert
        expect(totalSundays).toEqual(1);
    });
    
    it("Must throw error, when start date > end date", function () {    
        // Arrange
        let start = new Date('12/31/2000');
        let end = new Date('1/1/1901');
        
        // Act and Assert
        expect(function() {
            calculateSundays(start, end);
        }).toThrowError(Error, errors.invalidDateRange);
    });

    it("Must throw error, when start date is invalid", function () {    
        // Arrange
        let start = new Date('1/31/1901');
        let end = new Date('12/31/2000');
        
        // Act and Assert
        expect(function(){
            calculateSundays(start, end);
        }).toThrowError(Error, errors.invalidStartDate);
    });

    it("Must throw error, when end date is invalid", function () {  
        // Arrange
        let start = new Date('1/1/1901');
        let end = new Date('12/1/2000');
        
        // Act and Assert
        expect(function(){
            calculateSundays(start, end);
        }).toThrowError(Error, errors.invalidEndDate);
    });
});