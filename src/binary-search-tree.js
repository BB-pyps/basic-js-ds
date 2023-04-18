const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootForTree = null;
  }

  root() {
      return this.rootForTree;
  }

  add(data) {
    this.rootForTree = addWithin(this.rootForTree, data);

    function addWithin(node, data){
      if(!node){
        return new Node(data);
      }
      if(node.data === data){
        return node;
      }
      if(data < node.data){
        node.left = addWithin(node.left, data);
      }else{
        node.right = addWithin(node.right, data);
      }
      return node;
    }
    // const newNode = new Node(data);
    // if(!this.rootForTree){
    //   this.rootForTree = newNode;
    //   return;
    // }
    // let currentNode = this.rootForTree;
    // while(currentNode){
    //   if(newNode.data < currentNode.data){
    //     if(!currentNode.left){
    //       currentNode.left = newNode;
    //       return;
    //     }
    //     currentNode = currentNode.left;
    //   } else {
    //     if(!currentNode.right){
    //       currentNode.right = newNode;
    //       return;
    //     }
    //     currentNode = currentNode.right;
    //   }
    // }
  }

  has(data) {
    return searchWithin(this.rootForTree, data);

    function searchWithin(node, data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true;
      }
      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);
    }
  }

  find(data) {
    return findNumber(this.rootForTree, data);
    
    function findNumber(node, data){
      if(!node){
        return null;
      }
      if(node.data === data){
        return node;
      }
      return data < node.data ?
      findNumber(node.left, data) :
      findNumber(node.right, data);
    }
  }
    // if(!this.rootForTree){
    //   return null;
    // }
    // let currentNode = this.rootForTree;
    // while(true){
    //   if(currentNode.data === data){
    //     return currentNode;
    //   }
    //   if(data < currentNode.data){
    //     if(!currentNode.left){
    //       return null;
    //     }
    //     currentNode = currentNode.left;
    //   }else{
    //     if(!currentNode.right){
    //       return null;
    //     }
    //     currentNode = currentNode.right;
    //   }
    // }


  remove(data) {
    this.rootForTree = removeNode(this.rootForTree, data);

    function removeNode(node, data){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }else if(data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      }else{
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while(minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.rootForTree){
      return null;
    }
    let node = this.rootForTree;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.rootForTree){
      return null;
    }
    let node = this.rootForTree;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};