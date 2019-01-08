var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  return newTree;
};

var treeMethods = {};

// O(1)
treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  newNode.parent = this;
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

// O(N)
treeMethods.removeFromParent = function(target) {
  var index;
  for (var i = 0; i < this.children.length; i ++) {
    if (this.children[i].value === target) {
      index = i;
    }
  }
  if (index >= 0) {
    this.children.splice(index, 1);
  }
};

/* Complexity: What is the time complexity of the above functions?
*/
