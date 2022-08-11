console.log('--------------------');
console.log('This is assignment 3');

function createIncrement()
{
    let count = 0;
    function increment()
    { count++;}

    let message = `Count is ${count}`;
    function log()
    {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// Explanation of the function

/*
The increment function is called thrice, so the count will be incremented by 3 and finally the count value will be 3.
But the console.log value for message is initialised only once during parent function call and its not getting reset, hence the value is 0.
*/
