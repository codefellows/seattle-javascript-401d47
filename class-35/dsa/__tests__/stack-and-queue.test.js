'use strict';

const { Stack } = require('../Stack-and-Queue');

// 
// 
// 
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack
// Can successfully instantiate an empty stack
// Calling pop or peek on empty stack raises exception
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception

describe('Stack Tests', () => {
  test('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push('a');

    expect(stack.top.value).toEqual('a');
  });
  test('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');

    expect(stack.top.value).toEqual('c');
    expect(stack.top.next.value).toEqual('b');
    expect(stack.top.next.next.value).toEqual('a');

  });
  test('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.pop();

    expect(stack.top).toBeNull();
  });

});
