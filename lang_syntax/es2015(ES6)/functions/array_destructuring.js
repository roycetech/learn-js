/*jshint esversion: 6 */

function main() {

    "use strict";

    let users = ["Sam", "Tyler", "Brook"];
    let [a, b, c] = users;
    console.log( a, b, c );


    // Discarding values
    let users2 = ["Sam", "Tyler", "Brook"];
    let [a2, , c2] = users;
    console.log( a2, b, c2 );


    // Destructuring nad rest parametesr
    let [first, ...remainingUsers] = ["Sam", "Tyler", "Brook"];
    addActiveUsers(first, remainingUsers);


}
