'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }
  
  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;

  }

  pop(){
    // - identify top of stack (if stack exists)
    // create a temp variable and assign current top
    // move top pointer to the (temp or current top) next node
    // return temp value

  }

  peek(){
    //  return this.top.value 
  }

  isEmpty(){
    //  return (this.top === null) // true if null, false otherwise

  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue(){
    // if front, assign to temp variable 
    // if temp.next does not exist, this.back = null
    // this.front <- this.front.next (or temp.next)
    // return temp.value
  }

  peek(){
    //  return this.front.value

  }

  isEmpty(){
    // return this.front === null
  }
}

module.exports = {
  Stack,
  Queue,
};
