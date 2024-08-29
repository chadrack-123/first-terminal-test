import assert from "assert"
import transportFee from "../transportFee.js"
import chalk from "chalk"

describe (chalk.bgGreen.whiteBright("The transportFee function calculates the shifts rate :"), function() {
    it(chalk.bgWhiteBright.black("The transportFee uses condition statement to charge for different shifts: Morning is for R20"), function () {
        assert.equal(transportFee('morning'), 'R20');
    })

    it(chalk.bgWhiteBright.black("The transportFee uses condition statement to charge for different shifts: Afternoon is for R10"), function() {
        assert.equal(transportFee('afternoon'), 'R10');
    })

    it(chalk.bgWhiteBright.black("The transportFee uses condition statement to charge for different shifts: Nightshift is for free"), function() {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
})