var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);

    if ( list.head === null && list.tail === null ) {
      // question: does list.tail and list.head have a unique copy of node? or are they pointing to the same object in memory??
      list.tail = node;
      list.head = node;
    } else {

      list.tail.next = node;

      list.tail = node;
      //list.head.next = list.tail;
    }

  };

  list.removeHead = function(){
    var temp = list.head.value;
    if(list.head === list.tail && list.head !== null){
      list.tail = null;
      list.head = null;
      return temp;
    }else{
      list.head = list.head.next;
      return temp;
    }

  };

  list.contains = function(target){
    var results = false;
      //while list.head.next != null
      //INFINATE LOOOOOOP!

      var traverseNodes = function(node){

          //console.log(node.value, target);
          if(node.value === target){
            results = true;
            //console.log(results);
            return results;
          }
          else{
            console.log(node.next);
            if(node.next){
              traverseNodes(node.next);
            }
          }
        return results;
      }
      return traverseNodes(list.head);
  };



  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
