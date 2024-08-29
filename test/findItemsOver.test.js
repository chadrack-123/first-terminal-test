import assert from "assert"
import findItemsOver from "../findItemsOver.js"
import chalk from "chalk"

describe (chalk.bgGreen.whiteBright("The findItemsOver function returns qty which is over 20 :"), function () {
    it(chalk.bgWhiteBright.black("The findItemsOver should returns the array of qty > threshold which is 20: Result 2 items"), function () {
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
        
        assert.deepEqual(results, findItemsOver(itemList, 20));
        
        //console.log('findItemsOver passed!');
    })

    it(chalk.bgWhiteBright.black("The findItemsOver should returns the array of qty > threshold which is 20: None / Empty"), function() {
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];

        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        //console.log('findItemsOver passed!');
    })

    it(chalk.bgWhiteBright.black("The findItemsOver should returns the array of qty > threshold which is 20: Result 3 items"), function(){
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

        assert.deepEqual(results3, findItemsOver(itemList3, 20));
        //console.log('findItemsOver passed!');
    })
})