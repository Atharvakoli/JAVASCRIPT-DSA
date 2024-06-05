// Classes

class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

// Instance
let cookieOne = new Cookie("yellow");
let cookieTwo = new Cookie("blue");

// console.log(cookieOne, cookieTwo);

console.log(cookieOne.getColor());
console.log(cookieTwo.getColor());

class LinkList {
  constructor(value) {}
  push(value) {}
  unshift(value) {}
  insert(index, value) {}
  remove(value) {}
  pop(value) {}
  shift(value) {}
}

let myLinkedList = new LinkList(23);
myLinkedList.push(2);
myLinkedList.pop(2);
myLinkedList.insert(1, 15);
myLinkedList.remove(15);
myLinkedList.unshift(3);
myLinkedList.shift(3);

//POINTERS

let num1 = 5;
let num2 = num1;

num1 = 10; // so here if you do this num1 will be 10 but num2 wil be 5 only that's what happens when we're not using a pointer

let obj1 = {
  value: 11,
};
let obj2 = obj1; // if you do this it will say that Point to the exact same object in memrory

obj1.value = 34; // this value cannoot be access becuase on variable or address javascript will collect with garbage collection. That's the pointer

let obj3 = {
  value: 56,
};
obj2 = obj3;
obj1 = obj2;

// if you have an object that nothing is pointing to, you have no way of accessing this because you can only access this a variable

console.log(obj1, obj2, obj3);
