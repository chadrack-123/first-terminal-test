export default function countAllPaarl(regCarNo)
{
  	var getList = regCarNo.split(", ");
  
  	var CountList = 0;
  
  	for( var i = 0; i < getList.length; i++)
    {
      var carRegNo = getList[i].trim();
      
      if (carRegNo.startsWith("CJ"))
      {
        	CountList++;
      }
    }
    // console.log(carRegNo);
  	// console.log(CountList);
  	return CountList;
}
