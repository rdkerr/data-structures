describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children if present', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly detect nested children if not present', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(9)).to.equal(false);
    expect(tree.contains(1)).to.equal(false);
  });

  it('should return false for an empty tree', function() {
    expect(tree.contains(6)).to.equal(false);
  });

  it('should maintain parent property', function() {
    expect(tree.parent).to.equal(null);
    tree.addChild(5);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    expect(tree.children[0].parent.value).to.equal(undefined);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
    expect(tree.children[0].children[1].parent.value).to.equal(5);
  });

  it('should remove children and children of children when removed from parent', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    tree.children[0].removeFromParent(8);
    expect(tree.contains(8)).to.equal(false);
    tree.removeFromParent(5);
    expect(tree.contains(5)).to.equal(false);
    expect(tree.contains(7)).to.equal(false);
    expect(tree.contains(6)).to.equal(true);
  });

  it('should apply callback to each element in tree', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    var double = function(element) {
      return element * 2;
    };
    tree.traverse(double);
    expect(tree.contains(5)).to.equal(false);
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(7)).to.equal(false);
    expect(tree.contains(8)).to.equal(false);
    expect(tree.contains(10)).to.equal(true);
    expect(tree.contains(12)).to.equal(true);
    expect(tree.contains(14)).to.equal(true);
    expect(tree.contains(16)).to.equal(true);
  });

});
