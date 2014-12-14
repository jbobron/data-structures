//  *** MASTER PLAN ***
// A. INSERT
//  1. Assuming key and value are provided
//  2. Assuming key is a string
//  3. Assuming storage has an array at each index (must implement in hashTable Helpers)
//  4. Create an array ["key", value]
//  5. Pass key and limit to hash function
//        ** key, limit --> [HASH FUNCTION] --> index **
//  (collisions accounted for with push)
//  7. push [key, value] to Storage array at index (var i) returned from hash Function
//  8. return index (var i )
//
// B. RETRIEVE
//  1. Assuming key is provided and its a string
//  2. Pass key and limit to hash function
//        ** key, limit --> [HASH FUNCTION] --> index **
//  3. save index value
//  4. if the length of storage[index] === 1
          // return value at storage[index][0][1]
    // else if the length of storage[index] > 1
          // iterate over storage[index]
              // if key === storage[index][i][0]
                  // return storage[index][i][1] --> key string
//  5. THE END

// C. REMOVE
//  1. Assuming we are passing in a key of type string
//  2. Pass key and limit to Hash Function
//       ** key, limit --> [HASH FUNCTION] --> index **

//  iterate over storage[index]
//if storage[index][i][0] === key
// remove element from array (using splice)



var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this._storage = "hello";
  //this._storage.storage
  console.log(this._storage.storage)
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  var bucket = this._storage.get(i) || [];
  var keyExists = false;

  if ( bucket.length ) {
    for ( var j = 0; j < bucket.length; j++) {
      if ( bucket[j][0] === k ) {
        bucket[j][1] = v;
        keyExists = true;
        break;
      } else {
        bucket.push(tuple);
      }
    }
  } else {
    bucket.push(tuple);
    this._storage.set(i, bucket);
  }

  return i;

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if ( bucket ) {
    for ( var j = 0; j < bucket.length; j++ ) {
      if ( bucket[j][0] === k ) {
        return bucket[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if ( bucket ) {
    for ( var j = 0; j < bucket.length; j++ ) {
      if ( bucket[j][0] === k ) {
        bucket.splice(j,1);
      }
    }
  }

};







/*
 * Complexity: What is the time complexity of the above functions?
 */




