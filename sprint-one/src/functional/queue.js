var Queue = function() {
  var someInstance = {};
  var queueSize = 0;
  var lastKey = 0;
  var front = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastKey++] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    if (queueSize > 0){
      var deleted = storage[front];
      delete storage[front];
      front++;
      queueSize--;
      return deleted;
    }

  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
