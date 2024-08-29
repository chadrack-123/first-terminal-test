import assert from "assert";
import greet from "../greet.js";
import chalk from "chalk";

describe(chalk.bgGreen.whiteBright('The greet function should greet as :') , function(){
    it(chalk.bgWhiteBright.black('The anticipated result: Hello, Bob'), function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
    });

    it(chalk.bgWhiteBright.black('The anticipated result: Hello, Sam'), function() {
        assert.equal(greet('Sam'), 'Hello, Sam');
    })
});