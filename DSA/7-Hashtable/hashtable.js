class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length;i++) {
            hash = hash + key.charCodeAt(i) * 23 % this.dataMap.length
        }
        return hash;
    }
    set(key, value) {
        let index = this._hash(key);
        if(!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value]);
        return this;
    }
    get(key) {
        let index = this._hash(key);
        if(this.dataMap[index]) {
            for(let i = 0; i < this.dataMap[index].lenght;i++) {
                if(this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
    }
    keys() {
        let allKeys = [];
       for(let i = 0;i < this.dataMap.length;i++) {
        if(this.dataMap[i]) {
            for(let j = 0;j < this.dataMap[i].length;j++) {
                allKeys.push(this.dataMap[i][j][0])
            }
        }
       }
       return allKeys;
    }
}

let myHashTable = new HashTable();
myHashTable.set('kabaddi', 500);
myHashTable.set('kho-kho', 1000);
myHashTable.set('cricket', 1500);
myHashTable.set('volleyball', 2000);

// console.log(myHashTable.get('kho-kho'));

// console.log(myHashTable.keys());


// console.log(myHashTable.dataMap);


function itemInCommon(arr1, arr2) {
    for(let i = 0;i < arr1.length;i++) {
        for(let j = 0; j < arr2.length;j++) {
            if(arr1[i] === arr2[j]) return true;
        }
    }
    return false;
}
function itemInCommon1(arr1, arr2) {
   let = obj = {};
   for(let i = 0;i < arr1.length;i++) {
    obj[arr1[i]] = true;
   }
   for(let j = 0;j < arr2.length;j++) {
    if(obj[arr2[j]]) return true;
   }
   return false;
}

let arr1 = [1,2,5];
let arr2 = [3,4,5];

console.log(itemInCommon1(arr1, arr2));
