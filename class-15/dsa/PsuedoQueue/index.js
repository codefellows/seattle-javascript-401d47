'use strict';

const { Stack } = require('../Stack-and-Queue');

class PsuedoQueue {
  constructor(){
    this.input = new Stack();
    this.output = new Stack();
  }

  // does this test correctly???
  enqueue(value){
    if (this.input.isEmpty() && this.output.empty){
      let newNode = new Node(value);
      this.input.push(newNode);
    } else if (this.output.empty){
      let newNode = new Node(value);
      this.input.push(newNode);
    } else if (this.input.isEmpty() && !this.output.empty){
      while(!this.output.empty){
        this.input.push(this.output.pop());
      }
      let newNode = new Node(value);
      this.input.push(newNode);
    }
  }

  // need the confidence of testing!  this seems legit
  dequeue(){
    if(this.output.empty){
      while(!this.input.isEmpty()){
        this.output.push(this.input.pop());
      }
      return this.output.pop();
    } else {
      return this.output.pop();
    }
  }
}
