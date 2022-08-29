'use strict';

/**
Complete the function sumPositiveNumbers such that it returns the sum of all positive numbers
from the numbers parameter it receives.

/**
 * @param {number[]} numbers
 */
function sumPositiveNumbers(numbers) {

    let sum = 0;

    numbers.forEach(function (item, index)
    {
        if(item > 0)
            sum += +item;
    });

    return sum;
}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
