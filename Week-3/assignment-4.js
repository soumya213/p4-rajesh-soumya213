console.log('--------------------');
console.log('This is assignment 4');

function createStack() {

    let items = [];

    return {

        push(item) {
            console.log('inside push function');
            items.push(item);
        },

        pop() {
            console.log('inside pop function');
            return items.pop();
        },
        get() {
            console.log('Items value ',items);
        }
    }
}


const stack = createStack();
stack.push(10);
stack.push(5);
stack.get()
stack.pop();// => 5
stack.pop();// => [10]
stack.get()
stack.items = [10, 100, 1000];// Encapsulationbroken!
console.log('stack Items' , stack.items);
stack.get();