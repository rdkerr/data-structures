var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.queueSize = 0;
  someInstance.front = 0;
  someInstance.back = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back++] = value;
    this.queueSize++;
  },

  dequeue: function() {
    if (this.queueSize > 0) {
      var deleted = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      this.queueSize--;
      return deleted;
    }
  },

  size: function() {
    return this.queueSize;
  }
};


