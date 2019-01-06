var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

// O(1)
treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

// O(N)
treeMethods.contains = function(target) {
  var targetFound = false;
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i ++) {
      if (this.children[i].contains(target)) {
        targetFound = true;
      }
    }
  }
  return targetFound;
};

/* Complexity: What is the time complexity of the above functions?
*/
