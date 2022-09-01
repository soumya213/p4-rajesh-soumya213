function sum_compared_to(inputArray,value_to_compare){

    // To store the closest sum
      let closestSum = Number.MAX_VALUE;
   
      // Run three nested loops each loop
      // for each element of triplet
      for(let i = 0; i < inputArray.length ; i++)
      {
          for(let j =i + 1; j < inputArray.length; j++)
          {
              for(let k =j + 1; k < inputArray.length; k++)
              {
                   
                  // Update the closestSum
                  if (Math.abs(value_to_compare - closestSum) >
                      Math.abs(value_to_compare - (inputArray[i] + inputArray[j] + inputArray[k])))
                      closestSum = (inputArray[i] + inputArray[j] + inputArray[k]);
              }
          }
      }
       
      // Return the closest sum found
      return closestSum;
  }
  
  const input_array = [-1 ,2, 1, -4];
  let value_to_compare=1
  
  console.log(sum_compared_to(input_array,value_to_compare))
  
  