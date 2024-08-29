export default function findItemsOver20(item){
    var Array = [];
    for (var i = 0; i < item.length; i++)
    {
        var prod = item[i].qty;
        if(prod > 20){
            Array.push(item[i]);
        }
    }
    // console.log("Hard Coded Threshold: 20")
    // console.log(Array);
    return Array;
}