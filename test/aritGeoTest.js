/**
 *Unit test cases for aritGeo function
 **/

'use strict';

import chai from 'chai';
import aritGeo from '../aritGeo/aritGeo';
const assert = chai.assert;


describe("Determine the sequence(arithmetic or geometric) of an array of numbers", function() {

    describe("Test case to check if argument is an array", function() {

        it("should return `Argument must be an array of numbers` for string arguments", function() {
            assert.equal(aritGeo("Chinwoke"), 'Argument must be an array of numbers');
        });

        it("should return `Argument must be an array of numbers` for object arguments", function() {
            assert.equal(aritGeo({}), 'Argument must be an array of numbers');
        });

    });

    describe("Test case for an empty array", function() {

        it("should return 0 for an empty array", function() {
            assert(aritGeo([])).toEqual(0);
        });

    });

    describe("Test case for length of array less than 3", function() {

        it("should return -1 for an array length of 1", function() {
            assert(aritGeo([2])).toEqual(-1);
        });

        it("should return -1 for an array length of 2", function() {
            assert(aritGeo([2, 4])).toEqual(-1);
        });

    });

    describe("Test case for an arithmetic sequence", function() {

        it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
            assert.equal(aritGeo([2, 4, 6, 8, 10]), 'Arithmetic');
        });

        it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
            assert.equal(aritGeo([15, 10, 5, 0, -5, -10]), 'Arithmetic');
        });

        it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35]", function() {
            assert.equal(aritGeo([5, 11, 17, 23, 29, 35]), 'Arithmetic');
        });

    });

    describe("Test case for a geometric sequence", function() {

        it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
            assert.equal(aritGeo([2, 6, 18, 54, 162]), 'Geometric');
        });

        it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
            assert.equal(aritGeo([0.5, 3.5, 24.5, 171.5]), 'Geometric');
        });

        it("should return `Geometric` for [128, 64, 32, 16, 8]", function() {
            assert.equal(aritGeo([-128, 64, -32, 16, -8]), 'Geometric');
        });

        it("should return `Geometric` for [128, 64, 32 , 16 , 8]", function() {
            assert.equal(aritGeo([128, 64, 32, 16, 8]), 'Geometric');
        });


    });

    describe("Test case for neither arithmetic nor geometric sequence", function() {

        it("should return -1 for [1, 2, 3, 5, 8]", function() {
            assert.equal(aritGeo([1, 2, 3, 5, 8]), -1);
        });

        it("should return -1 for [1, 3, 6, 10, 15]", function() {
            expect(aritGeo([1, 3, 6, 10, 15]), -1);
        });

        it("should return -1 for [1, 8, 27, 64, 125]", function() {
            expect(aritGeo([1, 8, 27, 64, 125]), -1);
        });

        it("should return -1 for [1, 9, 27, 64, 125]", function() {
            expect(aritGeo([1, 9, 27, 64, 125]), -1);
        });

    });
});