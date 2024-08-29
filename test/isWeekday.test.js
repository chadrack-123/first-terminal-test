import assert from "assert";
import isWeekday from "../isWeekday.js";
import chalk from "chalk";

describe (chalk.bgGreen.whiteBright("The isWeekday function checking for Weekdays :"), function() {
    it(chalk.bgWhiteBright.black("The isWeekday checks if the input is a weekday: if condition met, return true"), function () {
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    })

    it(chalk.bgWhiteBright.black("The isWeekday checks if the input is a weekday: if the condition isn't meet, return false"), function() {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
    })
})