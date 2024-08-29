import assert from "assert"
import countAllPaarl from "../countAllPaarl.js"
import chalk from "chalk"

describe (chalk.bgGreen.whiteBright("The countAllPaarl function counts regNo :"), function() {
    it(chalk.bgWhiteBright.black("The countAllPaarl counts reg no. starts with CJ: which are 3 in the list."), function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    })

    it(chalk.bgWhiteBright.black("The countAllPaarl counts reg no. starts with CJ: which are 2 in the list."), function() {
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
})