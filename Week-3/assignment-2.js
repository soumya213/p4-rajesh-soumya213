console.log('--------------------');
console.log('This is assignment 2');

console.log('------------Bind------------');

const a=10 //Global variable 
const b=10 //Global variable 

// Bind

let name1={
    name:'Soumya',
    title:'Dhar',
    
    works: function (workplace) {
        console.log(this.name + ' ' + this.title + ' is working ' + workplace);
    }
}

let name2={
    name:'Sthiti',
    title:'Nath',
}

let name3={
    name:'Abhsekh',
    title:'Panigrahi',
}

workPlace= name1.works.bind(name2,'tcs')
workPlace()

workPlace= name1.works.bind(name3,'pwc')
workPlace()

/*
 bind() method doesn’t immediately execute the function. It just returns a new version of the function whose this sets to thisArg argument. 
*/

// Call

console.log('------------Call------------');

function pesto(additionalInformation) {
    if (additionalInformation) {
        console.log(`${this.name} have completed assignment ${this.value} ${additionalInformation}.`);
    }
    else{
    console.log(`${this.name} have completed assignment ${this.value}.`);
    }
}

let soumya={
    name:'Soumya',
    value:3
}

let vijay={
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
    if (additionalInformation) {
        console.log(`${this.name} have completed assignment ${this.value} ${additionalInformation}.`);
    }
    else{
    console.log(`${this.name} have completed assignment ${this.value}.`);
    }
}

pestoApplyfunction.apply(soumya,['also rest of the assignments'])
pestoApplyfunction.apply(vijay)

/*
Apply invokes the function and allows you to pass in arguments as an array.

Call and Apply are similar but the diffence is the way arguments are passed to the fucntion
*/

