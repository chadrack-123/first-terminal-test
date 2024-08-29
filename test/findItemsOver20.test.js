import assert from "assert"
import findItemsOver20 from "../findItemsOver20.js"
import chalk from "chalk"

describe (chalk.bgGreen.whiteBright("The findItemsOver20 function returns items of qty > 20 :"), function() {
    it(chalk.bgWhiteBright.black("The findItemsOver20 should returns the array of qty that are over 20: Result 2 items"), function () {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        
        //
        assert.deepEqual(results, findItemsOver20(itemList));
        //console.log('findItemsOver20 passed!')
    })

    it(chalk.bgWhiteBright.black("The findItemsOver20 should returns the array of qty that are over 20: Result None/Empty"), function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];

        assert.deepEqual(results2, findItemsOver20(itemList2));
        //console.log('findItemsOver20 passed!')
    })

    it(chalk.bgWhiteBright.black("The findItemsOver20 should returns the array of qty that are over 20: Result 3 items"), function(){
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        assert.deepEqual(results3, findItemsOver20(itemList3));
        //console.log('findItemsOver20 passed!')
    })
})