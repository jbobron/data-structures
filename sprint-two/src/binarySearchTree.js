var BinarySearchTree = function(value){
	var newBinarySearchTree = {};
	newBinarySearchTree.value = value;
	newBinarySearchTree.left = null;
	newBinarySearchTree.right = null;
	_.extend(newBinarySearchTree, binaryMethods);
	return newBinarySearchTree;
};

binaryMethods = {};

binaryMethods.insert = function(value){
  if(value > this.value){
    if(this.right === null){
      this.right = new BinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }else if(value < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  }
}

binaryMethods.contains = function(value){
  var result = false;
  var recursion = function(node){
    if(value === node.value){
      result = true;
      return;
    }

    else if(value > node.value && node.right !== null){
        recursion(node.right);
    }else if(value < node.value && node.left !== null){
        recursion(node.left);
    }else{
      return;
    }
  }
  recursion(this);
  return result;
}

binaryMethods.depthFirstLog = function(cb){
  cb(this.value);
  
  if(this.left){
    this.left.depthFirstLog(cb);
  }
  if(this.right){
    this.right.depthFirstLog(cb);
  }
  return BinarySearchTree;

}




/*
 * Complexity: What is the time complexity of the above functions?
 */


















