const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    // hrow new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.queue;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let newNode = new ListNode(value);

    if (!this.queue) {
      this.queue = newNode;
    } else {
        let node = this.queue;
        while(node.next) {
          node = node.next;
        }
        node.next = newNode;
    }
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let a = this.queue.value;
    this.queue = this.queue.next;
    return a;
  }
}

module.exports = {
  Queue
};

/*const queue = new Queue();

queue.enqueue(5);
console.log(queue);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.getUnderlyingList())
queue.dequeue();
console.log(queue);*/