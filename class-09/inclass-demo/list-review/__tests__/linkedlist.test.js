'use strict';

let { Node, LinkedList } = require('../LinkedList');

describe('Node Tests', () => {
  // we may want to test the Node, but not required ss per challenge instructions
})

let list = new LinkedList();

describe('LinkedList Tests', () => {

  test('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  });

  test('Can properly insert into the linked list', () => {
    list.insert('banana');
    list.insert('potato');

    expect(list.head.value).toEqual('potato');
    expect(list.head.next.value).toEqual('banana');
    expect(list.head.next.next).toBeNull();
  });

  test('The head property will properly point to the first node in the linked list', ()=> {
    let expected = list.head.value;

    expect('potato').toEqual(expected);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    list.insert('mango');

    expect(list.head.value).toEqual('mango');
    expect(list.head.next.value).toEqual('potato');
    expect(list.head.next.next.value).toEqual('banana');
    expect(list.head.next.next.next).toBeNull();
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    let result = list.includes('banana');

    expect(result).toBeTruthy();
    expect(result).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let anotherResult = list.includes('not included');

    expect(anotherResult).toBeFalsy();
    expect(anotherResult).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let str = list.toString();
    let expected = '{ mango } -> { potato } -> { banana } -> NULL';

    expect(str).toEqual(expected);
  })


});
