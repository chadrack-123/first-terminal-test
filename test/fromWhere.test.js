import assert from "assert"
import fromWhere from "../fromWhere.js"
import chalk from "chalk"

describe  (chalk.bgGreen.whiteBright("The fromWhere function returns result based on boolean :"), function() {
    it(chalk.bgWhiteBright.black("The fromWhere validates if reg no of CY is Bellville: If true, return Bellville"), function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    })

    it(chalk.bgWhiteBright.black("The fromWhere validates if reg no of CJ is Paarl: If true, return Paarl"), function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    })

    it(chalk.bgWhiteBright.black("The fromWhere validates if reg no of CA is Cape Town: If true, return Cape Town"), function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    })

    it(chalk.bgWhiteBright.black("The fromWhere validates if reg no of ZN is Some other place!: If true, return Some other place!"), function() {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })
})