export default function findItemsOver(itemsProd, threshold){
    var ArrayProd = [];
  
      for(var i = 0; i < itemsProd.length; i++)
      {
              if(itemsProd[i].qty > threshold)
          {
              ArrayProd.push(itemsProd[i]);
          }
      }
    //   console.log(ArrayProd);
    //   console.log(threshold);
      return ArrayProd;
  }