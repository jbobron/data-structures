var Graph = function(){
  this.nodes = {}
};
Graph.prototype.addNode = function(node){

  var obj = {};
  obj.node = node;
  obj.edges = {};
  this.nodes[node] = obj;
};

Graph.prototype.contains = function(node){
  return this.nodes[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode)){
    if(this.nodes[fromNode].edges[toNode]){
      return true;
    }else{
      return false;
    }
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = this.nodes[toNode];
  this.nodes[toNode].edges[fromNode] = this.nodes[fromNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var node in this.nodes) {
    cb(node);
  }
}