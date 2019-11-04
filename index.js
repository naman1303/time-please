#!/usr/bin/env node
/**
* Print the current date and time
*
* @return {String}
*/

"use strict";

var chalk = require("chalk"),
    clear = require("clear"),
    figlet = require("figlet");

clear();

var currentTime = "Current date and time : " + new Date();

process.stdout.write("\n"+chalk.white(figlet.textSync("Here is the time!", { horizontalLayout: "full" })));
process.stdout.write("\n"+currentTime+"\n");
