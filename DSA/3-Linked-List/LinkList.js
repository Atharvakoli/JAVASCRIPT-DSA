/*
Here's how you can tackle it:

Visualize the Problem: Before diving into coding, grab a pen and paper. Sketch out the linked list and visualize each step of the process. This approach isn't just for beginners; it's exactly how seasoned developers plan their attack on complex problems.

Seek Understanding Over Speed: Take your time to really grasp each part of the problem. The goal here is deep understanding, not just a quick solution. If you find yourself stuck, that's a part of the learning process.

It's Okay to Take a Break: Feel free to step away from this challenge and return later. This course is designed to equip you with a growing set of skills, and sometimes, a bit of distance can bring new insights.

Approach Like a Pro: Remember, facing a challenging problem is what being a professional developer is all about. Use this exercise to think, plan, and code like a pro.

*/

class Node {
  constructor(value) {
    this.value = value; // nodeValue -> poniting -> value
    this.next = null; // nextNode -> pointing -> null
  }
}
class LinkedList {
  constructor(value) {
    const newNode = new Node(value); //newNode Created
    this.head = newNode; // head -> pointing -> newNode
    this.tail = this.head; // tail -> pointing -> head
    this.length = 1; // Tracking length
  }
  printLinkedList() {
    let current = this.head;
    const result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(" -> ");
  }

  getLength() {
    console.log("Length: " + this.length);
  }
  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get(index) {
    let temp = this.head;
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return 1;
    }
    return 0;
  }
  /*
If the index is less than zero or greater than the length of the list, return false (indicating the index is invalid).

If the index is equal to the length of the list, add the new node to the end of the list using the push method.

If the index is 0, add the new node to the start of the list using the unshift method.

Otherwise, create a new node and place it at the correct index in the list. Update any references to ensure the list remains correctly linked.

Increment the length of the list by one.

Return true to indicate the node was successfully inserted.
*/
  insert(index, value) {
    if (index === 0) return this.unShift(value); // for front-side
    if (index === this.length) return this.push(value); // for back-side
    if (index < 0 || index > this.length) return 0; // out of range form both-side negative index or positive index

    //In middle inserting
    const newNode = new Node(value);
    let temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return 1;
  }
  push(value) {
    const newNode = new Node(value); //newNode Created

    if (!this.head) {
      // head === null -> checking link-list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // inserting the node if link-list is not empty
      this.tail.next = newNode;
      this.tail = newNode; //updating the tail pointer
    }
    this.length++; //increasing length by 1
    return this; //returning entire linked-lists
  }
  pop() {
    const message = "Your List is empty..!";
    let current = this.head;
    let prev = this.head;
    // edge cases 1. if list is null 2. if we had one item in list
    if (!this.head) {
      return message;
    }
    // Traverse the list to find the second last node. Use two pointers temp and pre to keep track of the current node and the previous node while traversing.
    while (current.next) {
      prev = current; // in first iteration it will do nothing
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    // if only having a one item
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  unShift(value) {
    const newNode = new Node(value); // 4

    if (!this.head) {
      // if empty
      this.head = newNode; // make newNode to head
      this.tail = newNode; // make newNode to tail
    } else {
      // if not empty
      newNode.next = this.head; // newNode point to previous
      this.head = newNode; // change the head pointer to newNode
    }
    this.length++; //increase length
    return this; // return entire list
  }
  shift() {
    let current = this.head;
    //checking empty
    if (!this.head) {
      return undefined;
    }
    // checking if list as two and more elements
    this.head = this.head.next; // chnaging the head pointer to it's next node
    current.next = null; // removes the linked from it's next node and sets it's next to null
    this.length--;
    // length would 0 in case length 1 of list
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return 0;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = temp.next;
    temp.next = null;

    this.length--;
    return temp;
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let nextNode = current.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = current.next;
      current.next = prev; // this pointing works in reverse
      prev = current;
      current = nextNode;
    }
    return this;
  }

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
  findKthFromEnd(k) {
    // kth node or element means form backside of the list
    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
      if (!fast) {
        return null;
      }
      fast = fast.next;
    }
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
  /*
  If the head of the linked list is null, return, as there is nothing to rearrange.

Create two dummy nodes, dummy1 and dummy2. These dummy nodes will be used to build two separate linked lists: one for nodes with values less than x and the other for nodes with values greater than or equal to x.

Initialize two pointers, prev1 and prev2, pointing to dummy1 and dummy2, respectively. These pointers will be used to append nodes to the two separate linked lists.

Initialize a current pointer pointing to the head of the linked list.

Iterate through the linked list using a while loop that continues as long as current is not null: a. If the current node's value is less than x, update prev1.next to point to the current node and move prev1 forward. b. If the current node's value is greater than or equal to x, update prev2.next to point to the current node and move prev2 forward. c. Move the current pointer to the next node.

After the loop, set prev2.next to null to terminate the second linked list.

Connect the two separate linked lists by setting prev1.next to dummy2.next.

Update the head of the linked list to point to the next node of dummy1.
*/
  createLinkedList(arr) {
    const list = new LinkedList();
    if (arr.length === 0) return list;

    let current = new Node(arr[0]);
    list.head = current;

    for (let i = 0; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next;
    }
    return list;
  }
  partitionList(x) {
    // check if the list is empy
    if (!this.head) {
      return;
    }
    // create two dummy nodes
    const dummy1 = new Node(0);
    const dummy2 = new Node(0);

    //initailize two pointers
    // -> prev-1 is used to build the list of nodes with values less than 'x
    // -> prev-2 is used to build the list of nodes with values greater than 'x
    let prev1 = dummy1;
    let prev2 = dummy2;

    // start with the head of the original list
    let current = this.head;

    // Traverse the original list and partition the nodes
    while (current !== null) {
      if (current.value < x) {
        // If the node's value is less than x, append it to the list starting with dummy1
        prev1.next = current;
        prev1 = current;
      } else {
        // If the node's value is greater than or equal to x, append it to the list starting with dummy2.
        prev2.next = current;
        prev2 = current;
      }
      // Move to the next node in the list
      current = current.next;
    }
    //Terminate the second list
    prev2.next = null;
    // Connect the two partitions:
    prev1.next = dummy2.next;
    // Update the head of the original list:
    this.head = dummy1.next;
  }

  removeDuplicates() {
    // Create a Set to store unique values
    const values = new Set();
    // Initialize previous pointer as null
    let previous = null;
    // Initialize current pointer at head
    let current = this.head;

    // Iterate through the list
    while (current !== null) {
      // If value already exists in the set
      if (values.has(current.value)) {
        // Remove the duplicate node by updating previous' next
        previous.next = current.next;
        // Decrement list length
        this.length -= 1;
      } else {
        // Add unique value to the set
        values.add(current.value);
        // Update previous pointer to current node
        previous = current;
      }
      // Move current pointer to the next node
      current = current.next;
    }
  }
  binaryToDecimal() {
    let num = 0;
    let current = this.head;
    while (current !== null) {
      num = num * 2 + current.value;
      current = current.next;
    }
    return num;
  }
  /* 
  If the head of the linked list is null, return, as there is nothing to reverse.

Create a dummy node and set its next pointer to the head of the linked list. This dummy node simplifies the manipulation of pointers, especially at the beginning of the list.

Initialize a prev pointer and set it to the dummy node. Move the prev pointer m steps forward using a for loop. After the loop, prev will point to the node right before the mth node.

Initialize a current pointer to the mth node by setting it to prev.next.

Iterate through the list n - m times using a for loop, reversing the portion of the list between positions m and n: a. Create a temp pointer and set it to the next node of current. b. Update the next pointer of current to point to the node after temp. c. Update the next pointer of temp to point to the node right after prev. d. Update the next pointer of prev to point to temp.

After the loop, the portion of the linked list between positions m and n has been reversed. Set the head of the linked list to the next pointer of the dummy node.
  */
  reverseBetween(m, n) {
    if (!this.head) {
      return;
    }
    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;

    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }
    let current = prev.next;
    for (let i = 0; i < n - m; i++) {
      let temp = current.next;
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }
    this.head = dummy.next;
  }
}
let myLinkedList = new LinkedList(1);
// console.log(myLinkedList);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

// 1 4 3 2 5 2 => 1 2 2 3 4 5
// 4 5 6 => 4 5 6
// 1 2 2 => 1 2 2
// 1 => 1
// 3 3 3 => 3 3 3

// const arr = [1, 0, 1, 1];
// const x = 3;
// const list = myLinkedList.createLinkedList(arr);

console.log("Before");
console.log(myLinkedList.printLinkedList());

// myLinkedList.pop();

// if (myLinkedList.length !== 0) {
//     console.log(myLinkedList.pop().value);
// } else {
//     console.log("null");
// }

// console.log(myLinkedList.unShift(8).value);

// console.log(myLinkedList.shift().value);

// console.log(myLinkedList.get(2).value);

// console.log(myLinkedList.set(3, 5));

// 0, 1, 111, 2, 3,
// console.log(myLinkedList.insert(2, 111));

// 0, 1, 3
// console.log(myLinkedList.remove(2));

//here pointind should be changed
// console.log(myLinkedList.reverse());

// console.log(myLinkedList.findMiddleNode().value);

// console.log(myLinkedList.hasLoop());

// myLinkedList.tail.next = myLinkedList.head.next;

// console.log(myLinkedList.hasLoop());

// const k = 3;
// console.log(myLinkedList.findKthFromEnd(k).value);

// list.partitionList(x);
// list.removeDuplicates();
// list.removeDuplicates();
// console.log(myLinkedList.binaryToDecimal());
const n = 1;
const m = 4;
myLinkedList.reverseBetween(n, m);

console.log("After");
console.log(myLinkedList.printLinkedList());

/*
// Helper function to create list from array
function createListFromArray(arr) {
  const ll = new LinkedList(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ll.push(arr[i]);
  }
  return ll;
}

// Helper function to compare list with array
function listMatchesArray(ll, arr) {
  let temp = ll.head;
  let i = 0;
  while (temp !== null && i < arr.length) {
    if (temp.value !== arr[i]) {
      return false;
    }
    temp = temp.next;
    i++;
  }
  return temp === null && i === arr.length;
}

// Function to run a single test
function runTest(testNum, description, ll, x, expectedArr) {
  console.log("---------------------------------------");
  console.log(`Test ${testNum}: ${description}`);
  console.log("BEFORE: ");
  ll.printList();
  console.log("PARTITION: " + x);
  ll.partitionList(x);
  console.log("AFTER: ");
  ll.printList();
  console.log(listMatchesArray(ll, expectedArr) ? "PASS" : "FAIL");
}

// Test 1: Basic partition
let ll1 = createListFromArray([1, 4, 3, 2, 5, 2]);
runTest(1, "Basic partition", ll1, 3, [1, 2, 2, 4, 3, 5]);

// Test 2: No elements to partition
let ll2 = createListFromArray([4, 5, 6]);
runTest(2, "No elements to partition", ll2, 3, [4, 5, 6]);

// Test 3: All elements smaller
let ll3 = createListFromArray([1, 2, 2]);
runTest(3, "All elements smaller", ll3, 3, [1, 2, 2]);

// Test 4: Single-element list
let ll4 = createListFromArray([1]);
runTest(4, "Single-element list", ll4, 3, [1]);

// Test 5: All elements equal to partition
let ll5 = createListFromArray([3, 3, 3]);
runTest(5, "All elements equal to partition", ll5, 3, [3, 3, 3]);

// 1. Removing an item from the beginning of a linked list is
// ->This is a place where Linked Lists are better than Arrays. Arrays are O(n) when removing the first item because of the reindexing that is required. O(1)
*/
