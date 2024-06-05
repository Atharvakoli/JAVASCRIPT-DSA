//Graphs are the go to data structure when you need to represent entities and relationship between them
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        // A vertex is represented as a key in an object. Key lookUp in an object is O(1)
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }
    addEdges(vertex1,vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }
    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        return true;
        }
        return false;
    }
    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return undefined;
        while(this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        delete this.adjacencyList[vertex];
        return this;
    }
}

let myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');

// myGraph.addEdges('A', 'B');
// myGraph.addEdges('B', 'C');
// myGraph.addEdges('C', 'D');
// myGraph.addEdges('D', 'A');

myGraph.addEdges('A', 'B');
myGraph.addEdges('A', 'C');
myGraph.addEdges('A', 'D');
myGraph.addEdges('B', 'D');
myGraph.addEdges('C', 'D');

// myGraph.removeEdge('A', 'D');
// myGraph.removeEdge('A', 'D');


// console.log(myGraph.addEdges('A', 'E'));

myGraph.removeVertex('D');

console.log(myGraph.removeVertex('E'));

console.log(myGraph);