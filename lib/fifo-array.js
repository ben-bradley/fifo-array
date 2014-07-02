function FifoArray(max, elements) {
  // Error checking
  if (!max)
    throw new Error('no `max` value provided to FifoArray()');

  // Build the initial elements array
  if (!elements)
    elements = [];

  // Define the array to be returned
  var array = Array.apply(null, []);

  // Map of methods to redefine
  var redefines = [
    { prop: 'push',     trim: 'front' },
    { prop: 'unshift',  trim: 'back'  },
    { prop: 'splice',   trim: 'back'  }
  ];

  // Process the map
  redefines.forEach(function(r) {
    array[r.prop] = function() {
      Array.prototype[r.prop].apply(this, arguments); // apply the original method
      var trim = (r.trim == 'back') ? [ this.max ] : [ 0, this.length - max ];
      Array.prorotype.splice.apply(this, trim);
    };
    Object.defineProperty(array, r.prop, { enumerable: false }); // hide it
  });

  // Manage the .max property
  Object.defineProperty(array, 'max', {
    get: function() { return max; },
    set: function(newMax) {
      max = newMax;
      while (this.length > this.max) this.pop(); // trim when necessary
    },
    enumerable: false // hide it
  });

  // now that it's ready, populate the fifoArray with initial elements
  elements.forEach(function(element) {
    array.push(element);
  });

  // mmm, bacon!
  return array;
};

module.exports = FifoArray;
