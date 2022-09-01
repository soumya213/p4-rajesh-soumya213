function sort_array(input_array){
    console.log(input_array)
    array_0=[]
    array_1=[]
    array_2=[]
  
    for(element in input_array ){
  
      if(input_array[element]===0){
        array_0.push(input_array[element])
      }
      if(input_array[element]===1){
        array_1.push(input_array[element])
      }
      if(input_array[element]===2){
        array_2.push(input_array[element])
      }
    }
  
    return array_0.concat(array_1,array_2)
   
  }
  
  let N=5
  const input_array = new Array(0,2,1,2,0);
  
  console.log(sort_array(input_array))