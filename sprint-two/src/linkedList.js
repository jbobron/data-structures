var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var myNode = Node(value);
    if(list.tail === null){
      list.head = myNode;
    }else{
      list.head.next = myNode;
    }
    list.tail = myNode;
  };

  list.removeHead = function(){
    if(list.head){
      var temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }
  };

  list.contains = function(target){
    var result = false;
    var recursion = function(node){
      if(node.value === target){
        result = true;
        return;
      }else{
        if(node.next !== null){ 
        recursion(node.next);
        }
        return;
      }
    }
    recursion(list.head);
    return result;
  };


  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};