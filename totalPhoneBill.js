export default function totalPhoneBill(data) {
    var string = data.split(", ");
    
    var callCount = 0;
    var smsCount = 0;
    
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'call') {
            callCount++;
        } else if (string[i] === 'sms') {
            smsCount++;
        }
    }
    var totalCost = (callCount * 2.75) + (smsCount * 0.65);
    
    return 'R' + totalCost.toFixed(2);
}