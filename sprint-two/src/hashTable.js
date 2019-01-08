var HashTable = function() {
  this._limit = 8;
  this._elements = 0;
  this._storage = LimitedArray(this._limit);
};

// O(1)
HashTable.prototype.insert = function(k, v, copy) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [[k, v]];
    this._elements++;
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
    }
  }
  this._storage.set(index, bucket);
  if (!copy) {
    this.checkSpaceUsage();
  }
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
    }
  }
  this.checkSpaceUsage();
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
    var bucket = this._storage.get(i);
    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        array.push(bucket[j]);
      }
    }
  }
  this._limit *= 2;
  this._storage = LimitedArray(this._limit);
  this._elements = 0;
  for (var i = 0; i < array.length; i ++) {
    this.insert(array[i][0], array[i][1], true);
  }
};

HashTable.prototype.shrink = function() {
  var array = [];
  for (var i = 0; i < this._limit; i ++) {
    var bucket = this._storage.get(i);
    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        array.push(bucket[j]);
      }
    }
  }
  this._limit /= 2;
  this._storage = LimitedArray(this._limit);
  this._elements = 0;
  for (var i = 0; i < array.length; i ++) {
    this.insert(array[i][0], array[i][1], true);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

