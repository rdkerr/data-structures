describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    set.add(1);
    set.add(null);
    set.add(undefined);
    set.add(function(a) { return a; });
    set.add({'a': 1});
    set.add(true);
    set.add(false);
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(null)).to.equal(true);
    expect(set.contains(undefined)).to.equal(true);
    expect(set.contains(function(a) { return a; })).to.equal(true);
    expect(set.contains({'a': 1})).to.equal(true);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains(false)).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    set.add(1);
    set.remove(1);
    set.add(null);
    set.remove(null);
    set.add(undefined);
    set.remove(undefined);
    set.add(function(a) { return a; });
    set.remove(function(a) { return a; });
    set.add({'a': 1});
    set.remove({'a': 1});
    set.add(true);
    set.remove(true);
    set.add(false);
    set.remove(false);
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(1)).to.equal(false);
    expect(set.contains(null)).to.equal(false);
    expect(set.contains(undefined)).to.equal(false);
    expect(set.contains(function(a) { return a; })).to.equal(false);
    expect(set.contains({'a': 1})).to.equal(false);
    expect(set.contains(true)).to.equal(false);
    expect(set.contains(false)).to.equal(false);
  });

  it('should only contain one copy of duplicated values', function() {
    set.add('Mel Gibson');
    set.add('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(true);
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
    set.add(1);
    set.add(1);
    expect(set.contains(1)).to.equal(true);
    set.remove(1);
    expect(set.contains(1)).to.equal(false);
    set.add(null);
    set.add(null);
    expect(set.contains(null)).to.equal(true);
    set.remove(null);
    expect(set.contains(null)).to.equal(false);
    set.add(undefined);
    set.add(undefined);
    expect(set.contains(undefined)).to.equal(true);
    set.remove(undefined);
    expect(set.contains(undefined)).to.equal(false);
    set.add(function(a) { return a; });
    set.add(function(a) { return a; });
    expect(set.contains(function(a) { return a; })).to.equal(true);
    set.remove(function(a) { return a; });
    expect(set.contains(function(a) { return a; })).to.equal(false);
    set.add({'a': 1});
    set.add({'a': 1});
    expect(set.contains({'a': 1})).to.equal(true);
    set.remove({'a': 1});
    expect(set.contains({'a': 1})).to.equal(false);
    set.add(true);
    set.add(true);
    expect(set.contains(true)).to.equal(true);
    set.remove(true);
    expect(set.contains(true)).to.equal(false);
    set.add(false);
    set.add(false);
    expect(set.contains(false)).to.equal(true);
    set.remove(false);
    expect(set.contains(false)).to.equal(false);
  });

  it('should return false when trying to remove element that is not in set', function() {
    expect(set.remove('Mel Gibson')).to.equal(false);
  });

  it('should return false when the type doesn\'t match', function() {
    set.add(1);
    set.add(null);
    set.add(true);
    set.add(false);
    set.add(undefined);
    set.add(function(a) { return a; });
    set.add({'a': 1});
    expect(set.contains('1')).to.equal(false);
    expect(set.contains('null')).to.equal(false);
    expect(set.contains('true')).to.equal(false);
    expect(set.contains('false')).to.equal(false);
    expect(set.contains('function(a) { return a; }')).to.equal(false);
    expect(set.contains('{\'a\': 1}')).to.equal(false);
  });
});
