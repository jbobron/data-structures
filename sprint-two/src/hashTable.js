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

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [];
  tuple.push(k, v);
  console.log("this._storage[i]", this._storage[i]);
  this._storage[i].push(tuple);
  return i;

  // create new array(tuple) that stores key, values

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i].length > 0){
    for(var j = 0; j < this._storage[i].length; j++){
      if(this._storage[i][0] === k){
        return this._storage[i][1];
      }
    }
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j = 0; j < this._storage[i].length; j++){
    if(this._storage[i][j][0] === k){
      this._storage[i].splice(j,1);
    }
  }
};







/*
 * Complexity: What is the time complexity of the above functions?
 */




