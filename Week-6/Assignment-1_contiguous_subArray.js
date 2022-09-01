function contuguousSubArray(numberArray){
    max_curent_value=0
    max_possible_sum=Number.MIN_SAFE_INTEGER
    for(element in numberArray){
      max_curent_value=max_curent_value+numberArray[element]
  
      if(max_curent_value<numberArray[element]){
        max_curent_value=numberArray[element]
      }
        
      if (max_possible_sum<max_curent_value){
        max_possible_sum=max_curent_value
      }
    }
  
    return max_possible_sum
  }
  
  numberList=contuguousSubArray([1,2,3,4,-10])
  
  console.log("Max Possible sum of contiguos array is: ", max_possible_sum)