import assert from "assert";
import countAllFromTown from "../countAllFromTown.js"
import chalk from 'chalk';


describe (chalk.bgGreen.whiteBright("The countAllFromTown function returns regNo within a condition : "), function() {
    it(chalk.bgWhiteBright.black("The countAllFromTown counts reg no. starts with CL: Which are 3 in the list."), function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
    })

    it(chalk.bgWhiteBright.black("The countAllFromTown counts reg no. starts with CF: Which is 1 in the list."), function() {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)
    })
})

