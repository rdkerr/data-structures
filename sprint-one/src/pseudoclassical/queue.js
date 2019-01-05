var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back++] = value;
  this.queueSize++;
}

Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) {
    var deleted = this.storage[this.front];
    delete this.storage[this.front++];
    this.queueSize--;
    return deleted;
  }
}

Queue.prototype.size = function() {
  return this.queueSize;
}

