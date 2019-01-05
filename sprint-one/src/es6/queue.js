class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queueSize = 0;
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(value) {
    this.storage[this.back++] = value;
    this.queueSize++;
  }

  dequeue() {
    if (this.queueSize > 0) {
      var deleted = this.storage[this.front];
      delete this.storage[this.front++];
      this.queueSize--;
      return deleted;
    }
  }

  size() {
    return this.queueSize;
  }
}
