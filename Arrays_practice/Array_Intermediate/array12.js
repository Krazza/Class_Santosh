'use strict';

/**
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures
(the temperatures that are above 0).

/**
 * @param {number[]} temperatures
 */
function getPositiveTemperatures(temperatures) {

    const posTemperatures = [];

    temperatures.forEach(function(item, index)
    {
        if(temperatures[index] > 0)
            posTemperatures.push(temperatures[index]);
    });
    
    return posTemperatures;
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]