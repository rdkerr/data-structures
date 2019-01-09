var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// O(1)
setPrototype.add = function(item) {
  // undefined, object, null, function
  var key = this.convert(item);
  if (this._storage[key]) {
    if (!this._storage[key].includes(typeof item)) {
      this._storage[key].push(typeof item);
    }
  } else {
    this._storage[key] = [typeof item];
  }
};

// O(1)
setPrototype.contains = function(item) {
  var key = this.convert(item);
  if (!this._storage[key]) {
    return false;
  }
  return this._storage[key].includes(typeof item);
};

// O(1)
setPrototype.remove = function(item) {
  var found = false;
  var key = this.convert(item);
  if (this._storage[key]) {
    found = this._storage[key].includes(typeof item);
    if (found && this._storage[key].length === 1) {
      delete this._storage[key];
    } else if (found) {
      var index = this._storage[key].indexOf(typeof item);
      this._storage[key].splice(index, 1);
    }
  }
  return found ? found : false;
};

setPrototype.convert = function(item) {
  var key;
  if (item === undefined) {
    key = 'undefined';
  } else if (item === null) {
    key = null;
  } else if (typeof item === 'object') {
    key = JSON.stringify(item);
  } else {
    key = item.toString();
  }
  return key;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
