import assert from "assert"
import countRegNumber from "../countRegNumber.js"
import chalk from "chalk"

describe (chalk.bgGreen.whiteBright('The countRegNumber function counts the Length of :'), function () {
    it(chalk.bgWhiteBright.black('The countRegNumber counts the length of the assertion test: Length is 3'), function() {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    })

    it(chalk.bgWhiteBright.black('The countRegNumber counts the length of the assertion test: Length is 1'), function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    })
})