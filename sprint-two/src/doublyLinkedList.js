var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToHead = function(value) {
    var newNode = ListNode(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  };

  // O(1)
  list.removeTail = function() {
    if (list.head && list.head.next === null) {
      var removed = list.head.value;
      list.head = null;
      list.tail = null;
      return removed;
    } else if (list.head) {
      var removed = list.tail.value;
      list.tail = list.tail.prev;
      list.tail.next = null;
      return removed;
    }
  };

  // O(N)
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

var ListNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
