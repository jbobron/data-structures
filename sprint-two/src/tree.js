var Tree = function(value){
  var myTree = {};
  myTree.value = value;
  myTree.children = [];

  _.extend(myTree, treeMethods);

  return myTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(new Tree(value));

};

treeMethods.contains = function(target){
	result = false;
  var recurse = function(node){
    if(target === node.value){
      result = true;
      return;
    }
    for(var i = 0; i < node.children.length; i++){
      recurse(node.children[i]);
    }
  }
  recurse(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
