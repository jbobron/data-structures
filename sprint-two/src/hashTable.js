var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if tuple exists at index this._storage.get(i)
  var bucket = this._storage.get(i) || [];
  var tuple = [k,v];
  if(bucket.length){
    if(bucket[0][0] === k){
      bucket[0][1] = v;
    }else{
      bucket.push(tuple);
    }
  }else{
    bucket.push(tuple);
  }
  this._storage.set(i, bucket); 
  return i;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  debugger;
    if(bucket.length){
      for(var i = 0; i < bucket.length; i++){
        if(k === bucket[i][0]){
          return bucket[i][1];
        }
      }
    }else{
      return null;
    }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  for(var i = 0; i < bucket.length; i++){
    if( k === bucket[i][0]){

      bucket = bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
















