export default function yearsAgo(year){
	const new_year = new Date().getFullYear(); // current year(working in years)
  	const diff = new_year - year; // variable that will contain the difference.
  	return diff; // just returning 
}
// console.log((new Date().getFullYear() - 2000))