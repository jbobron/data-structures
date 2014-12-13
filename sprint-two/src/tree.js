var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here

  newTree.children = [];  // fix me

  return _.extend( newTree, treeMethods );
};





var treeMethods = {};

treeMethods.addChild = function(value){
  //var child = newTree;
  //child.value = value;

  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){


  var checkChild = function(node){



    if ( node.value === target ) {
      return true;
    }
    else if ( node.children.length !== 0 ) {
      for ( var i = 0; i < node.children.length; i++ ) {

        if( checkChild(node.children[i]) ){
          return true;
        }

      }
      return false;

    } else {
      return false;
    }

  }
  //implement false case
  return checkChild(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


 // var checkChild = function(node){
 //      if(node.value === target){
 //        return true;
 //      }
 //      else if(node.children.length > 0){
 //      if(node.value === target){
 //        return true;
 //      }
 //      else{
 //        for( var i = 0; i < node.children.length; i++ ){
 //          checkChild(node.children[i]);
 //        }
 //      }
 //    }
 //  }
 //  //implement false case
 //  return checkChild(this);
