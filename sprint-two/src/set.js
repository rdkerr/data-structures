var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// O(1)
setPrototype.add = function(item) {
  this._storage[item] = true;
};

// O(1)
setPrototype.contains = function(item) {
  return this._storage[item] === true;
};

// O(1)
setPrototype.remove = function(item) {
  var found = this._storage[item];
  delete this._storage[item];
  return found ? found : false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
