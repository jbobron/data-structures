

var Graph = function(){


};

Graph.prototype.addNode = function(node){


  var obj = {};
  obj.node = node;
  obj.edges = [];
  this[node] = obj;

};

Graph.prototype.contains = function(node){
  var lookup = ""+node;
  return this[lookup] ? true : false;
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.hasEdge = function(fromNode, toNode){




  // var fromLookup = ""+fromNode;
  // var toLookup = ""+toNode;
  // if(this.contains(fromLookup) && this.contains(toLookup)){
  //   // console.log('this[toLookup].edges: ', this[toLookup].edges);
  //   if(this[fromLookup].edges.length > 0) {
  //     //_.each(this[fromLookup].edges, function(v, i){
  //     for(var i = 0; i < this[fromLookup].edges.length; i++){
  //       console.log('this[toLookup].edges[i]', this[toLookup].edges[i]);
  //       console.log('this[fromLookup]', this[fromLookup]);
  //       if( this[fromLookup].edges[i] ) {

  //         return true;
  //       }
  //     }
  //     //});
  //   }
  //   return false;
  // }


};

Graph.prototype.addEdge = function(fromNode, toNode){
  //console.log("outer this: ", this);
  var fromLookup = ""+fromNode;
  var toLookup = ""+toNode;
  if(this.contains(fromLookup) && this.contains(toLookup)){
    //console.log(this);
    this[fromLookup].edges.push(this[toLookup]);
    this[toLookup].edges.push(this[fromLookup]);
    console.log(this[fromLookup]);

  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){

};

Graph.prototype.forEachNode = function(cb){
  console.log('thiz:', this);
  for (var key in this) {
    if (Object.hasOwnProperty(key)) {
      cb(this[key]);
    }
  }
  // var keyz = Object.keys(this);
  // var thiz = this;
  // _.each(keyz, function(key){
  //   cb(thiz[key].node);
  // });

  // var thiz = this;
  // var nodes = keyz.map(function(value){
  //   return thiz[value];
  // });

  // console.log(keyz);
  // keyz.forEach(cb);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */





















