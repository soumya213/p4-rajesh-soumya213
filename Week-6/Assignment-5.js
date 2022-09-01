function pair_with_difference(inputArray,value_to_compare){

    difference=0
  
    for (var i = 0; i < inputArray.length-1; i++) {
      for (var j = i+1; j < inputArray.length; j++){
          difference=inputArray[j]-inputArray[i]
        if(difference===value_to_compare){
          return 1
        } 
        
      }
  }
  
    return difference
   
  }
  
  const input_array = [5, 10, 3, 2, 50, 80];
  let value_to_compare=78