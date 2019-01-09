class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // O(LOG N)
  insert(value) {
    var current = this;
    var valueEntered = false;
    while (!valueEntered) {
      if (current.value > value) {
        if (!current.left) {
          current.left = new BinarySearchTree(value);
          valueEntered = true;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new BinarySearchTree(value);
          valueEntered = true;
        } else {
          current = current.right;
        }
      }
    }
  }

  // O(LOG N)
  contains(value, current) {
    current = current === undefined ? this : current;
    if (!current) {
      return false;
    } else if (current.value === value) {
      return true;
    } else if (value < current.value) {
      return this.contains(value, current.left);
    } else {
      return this.contains(value, current.right);
    }
  }

  // O(N)
  depthFirstLog(func, current) {
    current = current === undefined ? this : current;
    if (!current) {
      return;
    } else {
      current.value = func(current.value);
      this.depthFirstLog(func, current.left);
      this.depthFirstLog(func, current.right);
    }
  }

  // O(N)
  breadthFirstLog(func) {
    var queue = [this];
    while (queue.length > 0) {
      var levelSize = queue.length;
      for (var i = 0; i < levelSize; i++) {
        var current = queue.shift();
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        current.value = func(current.value);
      }
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
