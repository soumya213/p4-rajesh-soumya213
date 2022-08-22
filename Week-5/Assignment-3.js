console.log('Assignment-3');

const hasDuplicate = (array) => {
    let setData= new Set(array)
    length=array.length
    if (setData.size===length){
        return false
    }

    else{
        return true
    }
}

let data = ['a','b','c','d','d']

let checkDuplicate = hasDuplicate(data)

console.log(checkDuplicate);

