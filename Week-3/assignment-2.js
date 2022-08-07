console.log('--------------------');
console.log('This is assignment 2');

console.log('------------Bind------------');

a=10 //Global variable 
b=10 //Global variable 

// Bind
function multiply(a,b) {

    return this.a * this.b;
    
}

var multiplyB = multiply.bind({a:2,b:3})

console.log(multiply(6,7)); //100
console.log(multiplyB()); //6
console.log(multiplyB(3,4)); //6

/* 
Bind method creates a new method from the method it is binded and nullifies the this keyword functionality
 If we are not using Bind then the this keyword will take the global variable if availble and return undefined/NAN if there is no global variables. 
 Bind restrict the values to the provided one. In function-1 multiply(6,7) the global values will be taken.

 Once binded the values are resricted to the ones provided. multiplyB will alwasys give 6 as output. 
*/

// Call

console.log('------------Call------------');

function pesto(additionalInformation) {
    console.log(`${this.name} have completed assignment ${this.value} ${additionalInformation}.`);
}

soumya={
    name:'Soumya',
    value:3
}

vijay={
    name:'Vijay',
    value:2
}

pesto.call(soumya,'also rest of the assignments')
pesto.call(vijay)

/*
Call invokes the method and allows you to pass in arguments one by one. The call method takes argument separately
*/

// Apply

console.log('------------Apply------------');

function pestoApplyfunction(additionalInformation) {
    console.log(`${this.name} have completed assignment ${this.value} ${additionalInformation}.`);
}

pestoApplyfunction.apply(soumya,['also rest of the assignments'])
pestoApplyfunction.apply(vijay)

/*
Apply invokes the function and allows you to pass in arguments as an array.

Call and Apply are similar but the diffence is the way arguments are passed to the fucntion
*/

