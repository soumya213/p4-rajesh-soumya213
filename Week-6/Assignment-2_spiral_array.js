function spiral_matrix(numberArray){
    n=numberArray.length
    let top=0;
    let bottom=n-1
    let left=0
    let right=n-1
    let value=1
    let output=[]
      
    while(value<n*n){
      for(let i=left;i<=right;i++){
        output.push(numberArray[top][i])
        value++
      }
      top++;
      for(let i=top;i<=bottom;i++){
        output.push(numberArray[i][right])
        value++
      }
      right--
      for(let i=right;i>=left;i--){
        output.push(numberArray[bottom][i])
        value++
      }
      bottom--
     for(let i=left;i>=top;i--){
        output.push(numberArray[i][left])
        value++
      }
      left++
    }
    console.log(output)
  }
  
  numberList=spiral_matrix([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ])