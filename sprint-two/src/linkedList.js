var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head && list.head.next === null) {
      var removed = list.head.value;
      list.head = null;
      list.tail = null;
      return removed;
    } else if (list.head) {
      var removed = list.head.value;
      list.head = list.head.next;
      return removed;
    }
  };

  list.contains = function(target) {
    if (!list.head) {
      return false;
    } else {
      var currentNode = list.head;
      while (currentNode) {
        if (currentNode.value === target) {
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
