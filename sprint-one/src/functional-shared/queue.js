var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0
  return extend(obj, Queue.queueMethods);
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


Queue.queueMethods = {};


Queue.queueMethods.enqueue = function(value){
  //obj[counter] = value;

};

Queue.queueMethods.dequeue = function() {


};


Queue.queueMethods.size = function() {
  return this.counter;
}




















