// Instantiate a new graph
var Graph = function() {
  this.graphNodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graphNodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.graphNodes).includes(node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    this.graphNodes[node].forEach(function(element) {
      this.removeEdge(element, node);
    });
    delete this.graphNodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.graphNodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graphNodes[fromNode].push(toNode);
  this.graphNodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.graphNodes[fromNode].indexOf(toNode);
  this.graphNodes[fromNode].splice(index, 1);
  index = this.graphNodes[toNode].indexOf(fromNode);
  this.graphNodes[toNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var graph = new Graph();
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
console.log(graph.hasEdge(4, 5));
graph.removeEdge(5, 4);
console.log(graph.hasEdge(4, 5));

/*
 * Complexity: What is the time complexity of the above functions?
 */