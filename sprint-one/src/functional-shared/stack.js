var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.stackSize = 0;
  someInstance.storage = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.stackSize++] = value;
};

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--;
    var deleted = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return deleted;
  }
};

stackMethods.size = function() {
  return this.stackSize;
};

var stack = Stack();
stack.push('a');
