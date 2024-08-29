import assert from "assert"
import yearsAgo from "../yearsAgo.js"
import chalk from "chalk"

describe (chalk.bgGreen.whiteBright("The yearsAgo function gets the difference of :"), function(){
    it(chalk.bgWhiteBright.black("The yearsAgo computes the difference from the given input e.g(1976): Return the diffrence"), function (){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    })

    it(chalk.bgWhiteBright.black("The yearsAgo computes the difference from the given input e.g(2000): Return the diffrence"), function() {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    })
})