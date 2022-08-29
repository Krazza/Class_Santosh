'use strict';

/**
Our logUserIds function fails when we call it without any parameter.
Fix that without using an if condition.
**/

/**
 * @param {number[]} userIds
 */
function logUserIds(userIds = 0) {
    console.log(userIds);
}

// Sample usage - do not modify
logUserIds([10, 15, 14]); // should log every userId to the console
logUserIds(); // should NOT fail
