import assert from "assert"
import isFromBellville from "../isFromBellville.js"
import chalk from "chalk";

describe(chalk.bgGreen.whiteBright('The isFromBellville function search for CY regNo :') , function(){
    it(chalk.bgWhiteBright.black('The isFromBellville validates the reg no. starts with CY: if startsWith CY, return true'), function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it(chalk.bgWhiteBright.black("The isFromBellville validates the reg no. starts with CY: if startsWith something else, return false"), function() {
        assert.equal(isFromBellville('CJ 123'), false);
    })
});