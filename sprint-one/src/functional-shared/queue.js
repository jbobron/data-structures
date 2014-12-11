var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0;
  obj.storage = {};
  obj.value;


  return extend(obj, queueMethods);
};


var extend = function(obj){
  var args = Array.prototype.slice.call(arguments, 1);
  for ( var i = 0; i < args.length; i++ ) {
    var source = args[i];
    for ( var key in source ) {
      obj[key] = source[key];
    }
  }

  return obj;
};


queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if ( this.counter > 0 ) {
    this.value = this.storage[0];

    for ( var i = this.counter-1; i > 0; i-- ) {
      this.storage[i-1] = this.storage[i];
    }

    delete this.storage[this.counter-1];
    this.counter--;
    return this.value;
  }
};


queueMethods.size = function() {
  return this.counter;
}




















