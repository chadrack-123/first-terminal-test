import assert from "assert"
import regCheck from "../regCheck.js"
import chalk from "chalk"

describe (chalk.bgGreen.whiteBright('The regCheck function should return result based on boolean :'), function() {
    it(chalk.bgWhiteBright.black('The reCheck checks if the reg no. endsWith respective input: if so, returns boalean true'), function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    })

    it(chalk.bgWhiteBright.black("The reCheck checks if the reg no. endsWith respective input: if not, returns boalean false"), function() {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        assert.equal(regCheck('5566 L', 'M'), false);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    })
})