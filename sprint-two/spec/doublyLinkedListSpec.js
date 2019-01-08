describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToHead", "removeTail", and "contains"', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new head when new nodes are added', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should return the value of the former head when removeTail is called', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
  it('should not contain a value in an empty list', function() {
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should not update tail after adding to head', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  it('should return undefined if there is no head to remove', function() {
    expect(doublyLinkedList.removeTail()).to.equal(undefined);
  });

  it('should update tail after removing it', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should maintain prev correctly', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.tail.prev.value).to.equal(5);
    expect(doublyLinkedList.tail.prev.prev.value).to.equal(6);
  });

});
