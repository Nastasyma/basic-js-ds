const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.theRoot = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.theRoot;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let newNode = new Node(data)

    if (!this.theRoot) {
      this.theRoot = newNode;
    } else {

      return addNewNode(this.theRoot, data)
      function addNewNode(node, data) {
        if (data < node.data) {
          if (!node.left) {
            node.left = newNode;
          } else {
            node.left = addNewNode(node.left, data);
          }
        } else if (data > node.data) {
          if (!node.right) {
            node.right = newNode;
          } else {
            node.right = addNewNode(node.right, data);
          }
        }
        return node;
      }

    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.theRoot) {
      return false;
    } else {

      return hasData(this.theRoot, data)
      function hasData(node, data) {
        if (node.data === data) {
          return true;
        } else if (node.data < data) {
          if(!node.right) {
            return false;
          } else {
            return hasData(node.right, data);
          }
        } else if (node.data > data) {
          if(!node.left) {
            return false;
          } else {
            return hasData(node.left, data);
          }
        }
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.theRoot) {
      return null;
    } else {

      return findData(this.theRoot, data)
      function findData(node, data) {
        if (node.data === data) {
          return node;
        } else if (node.data < data) {
          if(!node.right) {
            return null;
          } else {
            return findData(node.right, data);
          }
        } else if (node.data > data) {
          if(!node.left) {
            return null;
          } else {
            return findData(node.left, data);
          }
        }
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.theRoot = removeNode(this.theRoot, data);
    function removeNode(node, data) {
      if(!node) {
        return null;
      } else {
        if (data > node.data) {
          node.right= removeNode(node.right, data)
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data)
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }
          if (!node.right) {
            return node.left;
          }
          if (!node.left) {
            return node.right;
          }

          let rightMin = node.right;
          while(rightMin.left !== null){
            rightMin = rightMin.left;
          }
          node.data = rightMin.data;
          node.right = removeNode(node.right, rightMin.data);
          return node;
        }
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currentNode = this.theRoot;
    while(currentNode.left !== null){
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currentNode = this.theRoot;
    while(currentNode.right !== null){
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};

/*const tree = new BinarySearchTree();

tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);

console.log(tree);
console.log("ROOT.data", tree.root().data); //9;
console.log("ROOT.left.data", tree.root().left.data); //2;
console.log("ROOT.right.data", tree.root().right.data); //14;
console.log("FIND 15:", tree.find(15)); //null
console.log("HAS 54:", tree.has(54)); //true
console.log("HAS 8:", tree.has(8)); //true
console.log("FIND 8:", tree.find(8));
console.log("HAS 7:", tree.has(7)); //false
console.log("HAS 4:", tree.has(4)); //false
console.log("FIND 4:", tree.find(4)); //null
console.log("MIN:", tree.min()); //1
console.log("MAX:", tree.max()); //54
tree.remove(54);
console.log("HAS 54 after remove:", tree.has(54)); //false
console.log("MIN:", tree.min()); //1
console.log("MAX:", tree.max()); //31
tree.remove(14);
console.log(tree);*/
