var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
}


Queue.prototype.dequeue = function(){
  if(this.counter > 0){
    var val = this.storage[0];
    for( var i = 0; i < this.counter-1; i++){
      this.storage[i] = this.storage[i+1];
    }
    delete this.storage[this.counter-1];
    this.counter--;
    return val;
  }
}

Queue.prototype.size = function(){
  return this.counter;
}


