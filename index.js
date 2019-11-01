#!/usr/bin/env node
/**
* Print the current date and time
*
* @return {String}
*/

"use strict";

var chalk = require('chalk'),
    clear = require('clear'),
    figlet = require('figlet');

clear();
console.log("\n");
console.log(
    chalk.white(figlet.textSync('Here is the time!', { horizontalLayout: 'full' })
    )
);

var currentTime = 'Current date and time : ' + new Date();

console.log("\n");
console.log(currentTime);
console.log("\n");
