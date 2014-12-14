var BinarySearchTree = function(value){
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value){
    var myTree = new BinarySearchTree(value);
    if(value < this.value){
      if(this.left === null){
        this.left = myTree;
      }else{
        this.left.insert(value);
      }
    }else if(value > this.value){
      if(this.right === null){
        this.right = myTree;
      }else{
        this.right.insert(value);
      }
    }
  }

  return tree;
};







/*
 * Complexity: What is the time complexity of the above functions?
 */
