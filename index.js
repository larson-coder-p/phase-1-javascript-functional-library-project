// Define myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection;
  }
  
  // Define myMap
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key]));
        }
      }
    }
    return result;
  }
  
  // Define myReduce
 // Define myReduce function
function myReduce(collection, callback, initialValue) {
    let accumulator;
    let startIndex;
  
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // If initialValue is provided, set it as the accumulator
      if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
      } else {
        // If no initialValue, use the first element of the array as the accumulator
        if (collection.length === 0) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = collection[0];
        startIndex = 1;
      }
  
      // Iterate over the array
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
  
    // Check if the collection is an object
    } else if (typeof collection === 'object' && collection !== null) {
      // If initialValue is provided, set it as the accumulator
      if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
      } else {
        // If no initialValue, use the first key's value as the accumulator
        const keys = Object.keys(collection);
        if (keys.length === 0) {
          throw new TypeError('Reduce of empty object with no initial value');
        }
        accumulator = collection[keys[0]];
        startIndex = 1;
      }
  
      // Iterate over the object's keys
      const keys = Object.keys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        accumulator = callback(accumulator, collection[keys[i]], keys[i], collection);
      }
    } else {
      throw new TypeError('First argument must be an array or object');
    }
  
    return accumulator;
  }
  
  
  // Define myFind
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  
  // Define myFilter
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  
  // Define mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  // Define myFirst
  function myFirst(collection, n) {
    if (n === undefined) {
      return Array.isArray(collection) ? collection[0] : undefined;
    } else {
      return Array.isArray(collection) ? collection.slice(0, n) : [];
    }
  }
  
  // Define myLast
  function myLast(collection, n) {
    if (n === undefined) {
      return Array.isArray(collection) ? collection[collection.length - 1] : undefined;
    } else {
      return Array.isArray(collection) ? collection.slice(-n) : [];
    }
  }
  
  // Define myKeys
  function myKeys(object) {
    if (typeof object === 'object' && object !== null) {
      return Object.keys(object);
    }
    return [];
  }
  
  // Define myValues
  function myValues(object) {
    if (typeof object === 'object' && object !== null) {
      return Object.values(object);
    }
    return [];
  }
  
  // Example tests (you can use a testing framework like Mocha or Jest to run these)
  function runTests() {
    // myEach
    console.log('myEach:');
    myEach([1, 2, 3], (x) => console.log(x)); // should log 1, 2, 3
  
    // myMap
    console.log('myMap:');
    console.log(myMap([1, 2, 3], (x) => x * 2)); // should log [2, 4, 6]
  
    // myReduce
    console.log('myReduce:');
    console.log(myReduce([1, 2, 3], (acc, x) => acc + x, 0)); // should log 6
  
    // myFind
    console.log('myFind:');
    console.log(myFind([1, 2, 3], (x) => x === 2)); // should log 2
  
    // myFilter
    console.log('myFilter:');
    console.log(myFilter([1, 2, 3], (x) => x > 1)); // should log [2, 3]
  
    // mySize
    console.log('mySize:');
    console.log(mySize([1, 2, 3])); // should log 3
    console.log(mySize({a: 1, b: 2})); // should log 2
  
    // myFirst
    console.log('myFirst:');
    console.log(myFirst([1, 2, 3])); // should log 1
    console.log(myFirst([1, 2, 3], 2)); // should log [1, 2]
  
    // myLast
    console.log('myLast:');
    console.log(myLast([1, 2, 3])); // should log 3
    console.log(myLast([1, 2, 3], 2)); // should log [2, 3]
  
    // myKeys
    console.log('myKeys:');
    console.log(myKeys({a: 1, b: 2})); // should log ['a', 'b']
  
    // myValues
    console.log('myValues:');
    console.log(myValues({a: 1, b: 2})); // should log [1, 2]
  }
  
  // Run tests
  runTests();
  