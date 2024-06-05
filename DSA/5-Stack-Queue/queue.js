class Node  {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.line = 1;
    }
    printQueue() {
        let current = this.first;
        const result = [];

        while(current !== null) {
            result.push(current.value);
           current = current.next;
        }
        return result.join(' -> ');
    }
    enqueue(value) {
        const newNode = new Node(value);

        if(this.line === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if(this.line === 0) return undefined;
        let temp = this.first;
        if(this.line === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.line--;
        return temp;
    }
}

const myQueue = new Queue(4);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.enqueue(9);


console.log(myQueue.printQueue());

console.log(myQueue.dequeue().value);





