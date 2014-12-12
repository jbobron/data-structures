var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here

  newTree.children = [];  // fix me

  return _.extend( newTree, treeMethods );
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  var result = false;


  var checkChild = function(node) {
      //check top node with if
    console.log("this.value: ", node.value, "target:", target);
    if ( node.value === target ) {
      result = true;
      return result;
    }





  //   for ( var i = 0; i < this.children.length; i++ ) {

  //     if ( this.children[i].value === target ) {
  //       // console.log('value:', this.children[i].value, ", target: ", target );
  //       result = true;
  //       return result;
  //     } else if ( this.children[i].children.length !== 0 ) {
  //       //call recursion
  //       checkChild(this.children[i]);

  //     }else{
  //       return result;
  //     }
  //   }
  }
  return checkChild(this);
  // return result;
  //this.children
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
