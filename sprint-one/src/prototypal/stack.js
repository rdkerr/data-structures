var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.stackSize = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.stackSize++] = value;
  },

  pop: function() {
    if (this.stackSize > 0) {
      this.stackSize--;
      var deleted = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      return deleted;
    }
  },

  size: function() {
    return this.stackSize;
  }
};

//// var stackMethods = {};
//Stack.prototype.push = function(value) {
//  this.storage[this.stackSize++] = value;
//};
//
//Stack.prototype.pop = function() {
//  if (stackSize > 0) {
//    var deleted = this.storage[--this.stackSize];
//    delete this.storage[this.stackSize];
//    return deleted;
//  }
//};
//
//Stack.prototype.size = function() {
// return this.stackSize;
//};

