function mostProfitableDepartment(param) {
    const saleContainer = {};

    for (var i = 0; i < param.length; i++) {
        const department = param[i].department;
        const sales = param[i].sales;
      
        saleContainer[department] = (saleContainer[department] || 0) + sales;
    }

    let maxSales = 0;
    let mostProfitableDept;

    for (var department in saleContainer) {
        if (saleContainer[department] > maxSales) {
            maxSales = saleContainer[department];
            mostProfitableDept = department;
        }
    }
	// console.log(mostProfitableDept);
    return mostProfitableDept;
}

function mostProfitableDay(profitableDay) {
    const dayContainer = {};

    for (let i = 0; i < profitableDay.length; i++) {
        const day = profitableDay[i].day;
        const sales = profitableDay[i].sales;
        
        if (day in dayContainer) {
            dayContainer[day] += sales;
        } else {
            dayContainer[day] = sales;
        }
    }
  
    var maxSales = 0;
    let mostProfitableDay;
    for (var day in dayContainer) {
        if (dayContainer[day] > maxSales) {
            maxSales = dayContainer[day];
            mostProfitableDay = day;
        }
    }
  	// console.log(mostProfitableDay);
    return mostProfitableDay;
}

export default mostProfitableDepartment;
export {mostProfitableDay};
