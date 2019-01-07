var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// O(1)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [[k, v]];
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
  } else {
    for (var i = 0; i < bucket.length; i ++) {
      var bucketIndex;
      if (bucket[i][0] === k) {
        bucketIndex = i;
      }
    }
    bucket.splice(bucketIndex, 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


