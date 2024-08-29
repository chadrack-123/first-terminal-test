import assert from "assert"
import totalPhoneBill from "../totalPhoneBill.js"
import chalk from "chalk"

describe (chalk.bgGreen.whiteBright("The totalPhoneBill function calculates the cost of :"), function (){
    it(chalk.bgWhiteBright.black("The totalPhoneBill multiplies all four costs with R7.25"), function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })

    it(chalk.bgWhiteBright.black("The totalPhoneBill multiplies two costs which are call & sms with R3.40"), function() {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    })

    it(chalk.bgWhiteBright.black("The totalPhoneBill multiplies two costs which are sms & sms with R1.30"), function() {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
})