class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    printList() {
        let current = this.head;
        const result = [];
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result.join(' -> ');
    }

    push(value) {
        let newNode = new Node(value);
        let temp = this.tail;
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.prev = null;
        } else {
            temp.next = newNode;
            newNode.prev = temp;
            this.tail = newNode;
            newNode.next = null;
        }
        this.length++;
        return this;
    }
    pop() {
        if(this.length === 0) return undefined;
        let temp = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
       return temp;
    }
    unshift(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {   
            newNode.next = this.head;
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++;
        return this;
    }
    shift() {
        if(this.length === 0) return undefined;
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let current = this.head;
        if(index < this.length / 2) {
            for(let i = 0;i < index;i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for(let i = this.length - 1;i > index;i--) {
                current = current.next;
            }
        }
        return current;
    }
    set(index, value) {
        /*
        if(index < 0 || index >= this.length) return undefined;

        let temp = this.head;

        if(index < this.length / 2) {
            let i = 0;
            while(i < index) {
                temp = temp.next;
                i++;
            }
            temp.value = value;
        } else {
            temp = this.tail;
            let i = 0;
            while(index > i) {
                temp = temp.next;
                i++;
            }
            temp.value = value;
        }
        */
       let temp = this.get(index);
       if(temp) {
        temp.value = value;
        return true;
       }
       return false;
    }
    insert(index, value) {
        let newNode = new Node(value);
        if(index === 0)
            return this.unshift(value);
        
        if(index === this.length)
            return this.push(value);
        
        if(index < 0 || index >= this.length) return false;
            
        const before = this.get(index - 1);
        const after = before.next;

        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;

        this.length++;
        return true;
    }
    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        const temp = this.get(index);
        
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log(myDoublyLinkedList.printList());
// myDoublyLinkedList.pop();
// myDoublyLinkedList.unshift(0);
// myDoublyLinkedList.shift();
// console.log(myDoublyLinkedList.get(6));
// myDoublyLinkedList.set(0,2);
console.log(myDoublyLinkedList.insert(3, 999));





console.log(myDoublyLinkedList.printList());



