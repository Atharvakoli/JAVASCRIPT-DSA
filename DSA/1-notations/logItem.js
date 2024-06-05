// O(n) --> proportional
function logItem(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

// logItem(10);

//drop constants
function logItem(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
  for (let j = 0; j < num; j++) {
    console.log(j);
  }
}
// logItem(4);

// O(2n) -> here 2 is contant we usually drop it so O(n)

// O(n^2) --> Loop within aloop

function logItem(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      console.log(i, j);
    }
  }
}
// logItem(4);

//drop Non-Dominants
function logItem(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      console.log(i, j);
    }
  } // O(n^2);
  for (let k = 0; k < num; k++) {
    console.log(k);
  } // O(n)
  //   O(n^2) + O(n) = O(n^2 + n)
  // n^2 is a dominant term and n by itself is the non-dominant term
}
// logItem(4);

//O(1) -> constant Time
// function addItems(n) {
//   return n + n;
// }
// addItems(4);

// O(log n) --> Divide and conquer

// 2^3 = log 8 base 2 = 3 times --> here we basically saying 2 to the what power equals eight

// O(nlog n) --> Some Sorting Algorithms

//Different terms for Inputs
function logItem(a, b) {
  // O(a + b)
  //   for (let i = 0; i < a; i++) {
  //     console.log(i);
  //   }
  //   for (let j = 0; j < b; j++) {
  //     console.log(j);
  //   }

  // O(a * b)
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i, j);
    }
  }
}

// logItem(3);

// Big O of Arrays

// push() and pop() --> O(1)
// shift() and unshift() --> O(n)
// splice --> o(1/2n) 1/2 is constant so removed O(n) e.g myArray.splice(1,0,"Hi");
