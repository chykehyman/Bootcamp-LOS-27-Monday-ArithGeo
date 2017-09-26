'use strict';

const aritGeo = (array) => {
    // Initialize boolean values for if array is arithmetic or(and) geometric
    let isArithmetic = true,
        isGeometric = true;

    if (!Array.isArray(array)) {
        return "Argument must be an array of numbers";
    }
    // Check if array is empty
    if (array.length < 1) {
        return 0;
    }
    if (array.length < 3) {
        return -1
    }

    // Determine common difference value for arithmetic progression sequence
    const commonDifference = array[1] - array[0];

    //Determine geometric ratio for geometric progression sequence
    const geoRatio = array[1] / array[0];

    // Get highest array index
    let highestIndex = array.length - 1;

    for (let i = 2; i <= highestIndex; i++) {
        //checks if the sequence is arithemetic
        if (isArithmetic === true) {
            if (array[i] - array[i - 1] !== commonDifference) {
                isArithmetic = false;
            }
        }
        //checks if the sequence is geometric
        if (isGeometric === true) {
            if (array[i] / array[i - 1] !== geoRatio) {
                isGeometric = false;
            }
        }

    }
    // Check if isArithmetic is true or false
    if (isArithmetic === true) {
        return "Arithmetic";
    }
    // Check if isGeometric is true or false   
    if (isGeometric === true) {
        return "Geometric";
    }

    return -1;

}

export default aritGeo;