// Instantiate a new graph
var Graph = function() {
  this.graphNodes = {};
};

// Add a node to the graph, passing in the node's value.
// We are assuming nodes are unique
// O(1)
Graph.prototype.addNode = function(node) {
  this.graphNodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// O(N)
Graph.prototype.contains = function(node) {
  return Object.keys(this.graphNodes).includes(node.toString());
};

// Removes a node from the graph.
// O(N + E^2)
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    for (var i = 0; i < this.graphNodes[node].length; i ++) { // O(E)
      this.removeEdge(this.graphNodes[node][i], node); // O(E)
    }
    delete this.graphNodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// O(E)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.graphNodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
// O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graphNodes[fromNode].push(toNode);
  this.graphNodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
// O(E)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.graphNodes[fromNode].indexOf(toNode);
  this.graphNodes[fromNode].splice(index, 1);
  index = this.graphNodes[toNode].indexOf(fromNode);
  this.graphNodes[toNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
// O(N)
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graphNodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */