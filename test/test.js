var should = require('should'),
    FifoArray = require('../');

describe('FifoArray', function() {

  it('should be requireable', function() {
    var FifoArray = require('../');
    (FifoArray).should.be.ok;
  });

  it('should return an array with a fixed length', function() {
    var fifoArray = new FifoArray(3, [ 'a', 'b', 'c', 'd' ]);
    (fifoArray).should.eql([ 'b', 'c', 'd' ]);
    (fifoArray.max).should.equal(3);
    (fifoArray.length).should.equal(3);
  });

  it('should push to the end and chop from the start', function() {
    var fifoArray = new FifoArray(3);
    fifoArray.push(2, 3, 4);
    (fifoArray).should.eql([ 2, 3, 4 ]);

    fifoArray.push(5);
    (fifoArray).should.eql([ 3, 4, 5 ]);
  });

  it('should unshift to the start and chop from the end', function() {
    var fifoArray = new FifoArray(3, [ 0, 1, 2 ]);
    (fifoArray).should.eql([ 0, 1, 2 ]);

    fifoArray.unshift('a', 'b');
    (fifoArray).should.eql([ 'a', 'b', 0 ]);
  });

  it('should splice and chope from the end', function() {
    var fifoArray = new FifoArray(3, [ 0, 1, 2 ]);
    (fifoArray).should.eql([ 0, 1, 2 ]);

    fifoArray.splice(1, 2, 'a'); // at position 1, remove 2 elements and add 'a'
    (fifoArray).should.eql([ 0, 'a' ]);

    fifoArray.splice(1, 0, 'b'); // at posotion 1, remove 0 elements and add 'b'
    (fifoArray).should.eql([ 0, 'b', 'a' ]);
  });

  it('should let the user modify the `max` and chop from the end', function() {
    var fifoArray = new FifoArray(5, [ 0, 1, 2, 3, 4 ]);
    (fifoArray).should.eql([ 0, 1, 2, 3, 4 ]);

    fifoArray.max = 3;
    (fifoArray.max).should.equal(3);
    (fifoArray).should.eql([ 0, 1, 2 ]);

    fifoArray.max = 10;
    (fifoArray.max).should.equal(10);
    (fifoArray).should.eql([ 0, 1, 2 ]);

    fifoArray.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
    (fifoArray).should.eql([ 1, 2, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]);
  });

});
