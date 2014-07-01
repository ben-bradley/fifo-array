var FifoArray = require('../');

var fifoArray = new FifoArray(3, [ 'a', 'b', 'c', 'd' ]);
console.log(fifoArray); // => [ 'b', 'c', 'd' ]
console.log('max:', fifoArray.max); // => max: 3
fifoArray.push(1, 2);
console.log(fifoArray); // => [ 'd', 1, 2 ]

var fifoArray = new FifoArray(3);
fifoArray.push(2, 3, 4, 5);
console.log(fifoArray); // => [ 3, 4, 5 ]

var fifoArray = new FifoArray(3, [ 0, 1, 2 ]);
fifoArray.unshift('a', 'b');
console.log(fifoArray); // => [ 'a', 'b', 0 ]

var fifoArray = new FifoArray(3, [ 0, 1, 2 ]);
fifoArray.splice(1, 2, 'a'); // at position 1, remove 2 elements and add 'a'
console.log(fifoArray); // => [ 0, 'a' ]

fifoArray.splice(1, 0, 'b'); // at posotion 1, remove 0 elements and add 'b'
console.log(fifoArray); // => [ 0, 'b', 'a' ]

// if necessary, it chops the array down to the new max
var fifoArray = new FifoArray(5, [ 0, 1, 2, 3, 4 ]);
console.log(fifoArray); // => [ 0, 1, 2, 3, 4 ]
fifoArray.max = 3;
console.log('new max:', fifoArray.max); // => new max: 3
console.log(fifoArray); // => [ 0, 1, 2 ]

fifoArray.max = 10;
fifoArray.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
console.log(fifoArray); // => [ 1, 2, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
