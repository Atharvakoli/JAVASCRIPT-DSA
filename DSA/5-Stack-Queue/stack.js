class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.height = 1;
    }
    printStack() {
        let current = this.top;
        const result = [];
        while(current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result.join(' -> ');
    }
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.height++;
        return this;
    }
    pop() {
        if(this.length === 0) return undefined;

        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

const myStack = new Stack(6); // LIFO -> Last In First Out
myStack.push(5);
myStack.push(4);
myStack.push(41);
myStack.push(4123);
myStack.push(455);



console.log(myStack.printStack());
myStack.pop();
myStack.pop();
myStack.pop();


console.log(myStack.printStack());



// console.log(myStack.printStack());

