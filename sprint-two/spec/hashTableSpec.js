describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should overwrite values that have the same key', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).to.equal('Barker');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(undefined);
  });

  it('should handle hash function collisions', function() {
    var v1 = 'val1';
    var v2 = 'val2';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    hashTable.remove(v1);
    expect(hashTable.retrieve(v1)).to.equal(undefined);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  it('should return undefined for keys not already in table', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Bill')).to.equal(undefined);
  });

  it('should update elements property', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Boba', 'Barker');
    expect(hashTable._elements).to.equal(2);
    hashTable.insert('Bobab', 'Loblaw');
    hashTable.insert('Bobababa', 'Barker');
    expect(hashTable._elements).to.equal(4);
    hashTable.remove('Bob');
    expect(hashTable._elements).to.equal(3);
    hashTable.remove('Boba');
    expect(hashTable._elements).to.equal(2);
    hashTable.remove('Bobab');
    expect(hashTable._elements).to.equal(1);
    hashTable.remove('Bobababa');
    expect(hashTable._elements).to.equal(0);
  });

  // (Advanced! Remove the extra "x" when you want the following tests to run)
  // Make sure the old keys are still present
  it ('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

  it ('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).to.equal(8);
  });
});
