'use strict';

const { link } = require("fs");

let callback = (node) => node.value * node.value;

// creating a Node class -specific to Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // this is extra for demo -> will just console.log node values
  traverse() {
    let current = this.head
    // pattern for traversing a  linked list.  ALWAYS
    while (current) {
      // do the thing (with each node)
      console.log(current.value);
      current = current.next;
    }
    // this is where I could add something the end!
    console.log('done traversing');
  }

  // not required, but we'll do this in class
  // add things to the END of the linked list
  add(value) {
    const node = new Node(value);
    // if there is no head, we create one!
    if (!this.head) {
      this.head = node;
      // if we add the head, terminate operation or we'll add node twice
      return;
    }

    let current = this.head;

    // off by one errors are real.  when traversing is it current or current.next.  we have use cases for both
    // if there is a next node, we enter while loop
    while (current.next) {
      // we move the current pointer to the next node
      current = current.next;
    }
    // we've found the end and we can assign the NEW NODE as the next node in the linked list 
    current.next = node;
  }

  // prepend things to linked list - your assignment - google pre-pending to a linked list
  insert() {

  }

  toString() {

  }

  //  - declare a function (let's use a method on the LinkedList Class) that takes in the linked list and callback
  traverseWithCallback(callback) {
    // what if linked list empty
    let current = this.head;

    while (current) {
      // need to do something:
      // maybe make sure existing value is typeof 'number'
      current.value = callback(current);
      current = current.next;
    }
    return this;
  }
  //- traverse LinkedList
  //  - identify head
  //  - use while loop to move thru list
  //   - at each node, pass in the node and use callback
  //   - reassign node value to the node
  //   - move from current node to next node
  // - when there is no next node - traversal is finished, return linked List
}

let linkedList = new LinkedList();

let nodeA = new Node('a');
let nodeB = new Node('b');
let nodeC = new Node('c');
let nodeD = new Node('d');

// linkedList.head = nodeA
// linkedList.head.next = nodeB
// linkedList.head.next.next = nodeC
// linkedList.head.next.next.next = nodeD
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);



// console.log(JSON.stringify(linkedList));
linkedList.traverse();
let newList = linkedList.traverseWithCallback(callback);
newList.traverse();
