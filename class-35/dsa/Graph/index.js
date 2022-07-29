' use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }

}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex){
    // find the node we want to connect
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex));
  }

  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex)];
  }


}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const D = graph.addVertex('D');
const C = graph.addVertex('C');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

console.log(graph.adjacencyList);
