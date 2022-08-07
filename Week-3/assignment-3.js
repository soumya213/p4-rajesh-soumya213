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

// Here the increment function is called thrice, so the count will be incremnted by 3 and finally the count value will be 3.

// But the console.log value will be 0 because variable `message` is a not incremented and assigned a value of 0 at the start.