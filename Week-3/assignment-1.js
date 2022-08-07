console.log('--------------------');
console.log('This is assignment 1');

function memoize(fn) {
    console.log(`memoize function called`);
    const cache=new Map()
    return function(...args){
        const key = args.toString();
        if (cache.has(key)){
           return cache.get(key)
        }

        cache.set(key,fn(...args))
        return cache.get(key)
    }
    
}

function add(...numbers){
    console.log(`add function called`);
    let variableSent=[...numbers]
    sum=0
    for (i in variableSent){
        sum=sum+variableSent[i]
    }

   return sum
}

function time(fn){
    console.time()
    console.log(fn())
    console.timeEnd();
}

const memoizeAdd=memoize(add)

time(()=> memoizeAdd(100,100))
time(()=> memoizeAdd(100))
time(()=> memoizeAdd(100,200))
time(()=> memoizeAdd(100,100))
