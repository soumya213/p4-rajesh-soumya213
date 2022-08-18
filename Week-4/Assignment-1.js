console.log("Assignment-1");

class MyPromise {

    resolvedData;
    rejectedData;
    thenFunc;
    catchFunc;
    isResolved = false;
    isReject=false;
    resolveChain=[];


    constructor(executor) {
        console.log('Inside constructor');

        const resolve = (value) => {
            this.resolvedData = value;
            this.isResolved = true
            if (this.resolveChain.length) {

                this.resolveChain.reduce((acc,fn)=>{
                    fn(acc)
                },this.resolvedData)
                
            }

        };

        const reject=(value)=>{

            this.rejectedData=value
            this.isReject=true

            if (typeof this.catchFunc==='function') {
                this.catchFunc(this.rejectedData)
            }

        }

        executor(resolve,reject);
    }

    then(fn){
        this.resolveChain.push(fn)
        if (this.isResolved){
            this.resolveChain.reduce((acc,fn)=>fn(acc),this.resolvedData)
        }
        return this
    }

    catch(fn){
        this.catchFunc=fn
        if (this.isReject){
            this.catchFunc(this.rejectedData)
        }
    }

}

new MyPromise(executor = (resolve,reject) => {
    setTimeout(() => {
       const temp = Math.round(Math.random() * 100) // to create random values from 1 to 100 and round the number else it will be a decimal number
        console.log('Math.random value is', Math.round(temp));

        if (temp%5===0) {
            reject(temp) //reject if the randomNumber is divisible by 5
        } else {
            resolve(temp)
        }

    }, 1)

}).then(fn=(data)=>{
    console.log('Resolve because it is not divisible',data);
}).catch(fn=(data)=>{
    console.log('Reject because it is not divisible',data);
})
