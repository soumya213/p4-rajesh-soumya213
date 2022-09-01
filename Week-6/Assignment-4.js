const { timeStamp } = require("console");

function max_profit(input_share_price){

  profit=0

  for (var i = 0; i < input_share_price.length-1; i++) {
    for (var j = i+1; j < input_share_price.length; j++){
      if(input_share_price[j]>input_share_price[i]){
        temp_difference=input_share_price[j]-input_share_price[i]
        
        if(temp_difference>profit){
          profit=temp_difference
        }
      }
      
    }
}

  return profit
 
}

const input_share_price = [7,1,5,3,6,4];

console.log("Maximum Possible Profit is", max_profit(input_share_price))