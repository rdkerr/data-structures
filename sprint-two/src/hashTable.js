var HashTable = function() {
  this._limit = 8;
  this._elements = 0;
  this._storage = LimitedArray(this._limit);
};

// O(1)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [[k, v]];
    this._elements++;
    this.checkSpaceUsage();
  } else {
    var found = false;
    for (var i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        found = true;
      }
    }
    if (!found) {
      bucket.push([k, v]);
      this._elements++;
      this.checkSpaceUsage();
    }
  }
  this._storage.set(index, bucket);
};

// O(1)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

// O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.length === 1) {
    this._storage.set(index, undefined);
    this._elements--;
    this.checkSpaceUsage();
  } else {
    for (var i = 0; i < bucket.length; i ++) {
      var bucketIndex;
      if (bucket[i][0] === k) {
        bucketIndex = i;
      }
    }
    if (bucketIndex !== undefined) {
      bucket.splice(bucketIndex, 1);
      this._elements--;
      this.checkSpaceUsage();
    }
  }
};

HashTable.prototype.checkSpaceUsage = function() {
  var used = this._elements / this._limit;
  if (used >= 0.75) {
    this.grow();
  }
  if (used <= 0.25 && this._limit > 8) {
    this.shrink();
  }
};

HashTable.prototype.grow = function() {
  var array = [];
  for (var i = 0; i < this._limit; i ++) {
    if (this._storage[i]) {
      for (var j = 0; j < this._storage[i].length; j++) {
        array.push(this._storage[i][j]);
      }
    }
  }
  this._limit *= 2;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < array.length; i ++) {
    this.insert(array[i][0], array[i][1]);
  }
};

HashTable.prototype.shrink = function() {
  console.log("SHRINK");
  console.log(this._storage, this._limit);
  var array = [];
  for (var i = 0; i < this._limit; i ++) {
    if (this._storage[i]) {
      for (var j = 0; j < this._storage[i].length; j++) {
        array.push(this._storage[i][j]);
      }
    }
  }
  this._limit /= 2;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < array.length; i ++) {
    this.insert(array[i][0], array[i][1]);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

