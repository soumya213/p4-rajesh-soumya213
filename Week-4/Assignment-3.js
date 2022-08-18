console.log("---------Assignment-3----------");

function fibonacci(max) {

    // console.log("Inside Function");

    return {
        [Symbol.iterator]() {
            var n = 0
            var firstnumber=0
            var secondnumber=1
            return {
                next() {
                    n++;
                    if (n <= max) {
                        tempValue=firstnumber
                        firstnumber=secondnumber
                        secondnumber=tempValue+secondnumber
                        return {
                            value: tempValue,
                            done: false
                        }
                    }

                    return {
                        value: undefined,
                        done: true
                    }
                }


            }
        }
    }

}

let totalnumberOfIteration=10

for (const number of fibonacci(totalnumberOfIteration)) {
    console.log(number)
}