var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.counter = 0;
  obj.storage = {};


  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;

};

queueMethods.dequeue = function() {
  if ( this.counter > 0 ) {
    this.counter--;
    var value = this.storage[0];
    for ( var i = this.counter; i > 0; i--) {
      this.storage[i-1] = this.storage[i];
    }


    delete this.storage[this.counter];
    return value;
  }
};

queueMethods.size = function(){
  return this.counter;
};


