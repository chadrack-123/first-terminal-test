export default function countAllFromTown(regNo, forTown) {
    var RegList = regNo.split(",");
    var CarRegNoCount = 0;

    for (var i = 0; i < RegList.length; i++) {
        var finalList = RegList[i].trim();

        if (finalList.startsWith(forTown)) {
            CarRegNoCount++;
        }
    }
    // console.log(forTown);
  	// console.log(CarRegNoCount);
    return CarRegNoCount;
}