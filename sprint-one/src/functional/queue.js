var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    //delete storage[0];
    if(counter > 0){
      var value = storage[0];
      counter--;
      for(var i = counter; i > 0; i--){
        storage[i-1] = storage[i];
      }

      delete storage[counter];
      return value;
    }

  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
