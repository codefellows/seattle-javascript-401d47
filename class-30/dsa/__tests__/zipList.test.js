'use strict';

const { LinkedList } = require('../LinkedList');
const zipLists = require('../LinkedList/zipList');

// be careful with setting up global variables for your linked list.  they will passed by reference and therefore globally altered if/when you zip them

describe('ZipList Tests', () =>{
  
  //essentially testing the traverse method, 
  // but also want to confirm I have set up good starter data for my tests
  test('Created lists log as correctly', () =>{
    const shortListA = new LinkedList();
    const longListA = new LinkedList();
    const shortListB = new LinkedList();
    const longListB = new LinkedList();
    
    // I expect the created lists to return the following strings 
    shortListA.add('a').add('b');
    longListA.add('a').add('b').add('c').add('d');
    shortListB.add(1).add(2);
    longListB.add(1).add(2).add(3).add(4);

    let shortA = '{ a } -> { b } -> NULL';
    let longA = '{ a } -> { b } -> { c } -> { d } -> NULL';
    let shortB = '{ 1 } -> { 2 } -> NULL';
    let longB = '{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL';

    expect(shortListA.toString()).toEqual(shortA);
    expect(longListA.toString()).toEqual(longA);
    expect(shortListB.toString()).toEqual(shortB);
    expect(longListB.toString()).toEqual(longB);
  });

  test('Zips two list of the same length correctly', () =>{

    const shortListA = new LinkedList();
    const longListA = new LinkedList();
    const shortListB = new LinkedList();
    const longListB = new LinkedList();

    shortListA.add('a').add('b');
    longListA.add('a').add('b').add('c').add('d');
    shortListB.add(1).add(2);
    longListB.add(1).add(2).add(3).add(4);

    let shortZip = zipLists(shortListA, shortListB);
    let longZip = zipLists(longListA, longListB);

    let expectedShort = '{ a } -> { 1 } -> { b } -> { 2 } -> NULL';
    let expectedLong = '{ a } -> { 1 } -> { b } -> { 2 } -> { c } -> { 3 } -> { d } -> { 4 } -> NULL';

    expect(shortZip.toString()).toEqual(expectedShort);
    expect(longZip.toString()).toEqual(expectedLong);
  });

  test('Zips two list correctly when A is longer than B', () =>{

    const longListA = new LinkedList();
    const shortListB = new LinkedList();

    longListA.add('a').add('b').add('c').add('d');
    shortListB.add(1).add(2);

    let aLongerThanB = zipLists(longListA, shortListB);
    let expected = '{ a } -> { 1 } -> { b } -> { 2 } -> { c } -> { d } -> NULL';

    expect(aLongerThanB.toString()).toEqual(expected);
  });

  test('Zips two list correctly when A is shorter than B', () =>{
    const shortListA = new LinkedList();
    const longListB = new LinkedList();

    shortListA.add('a').add('b');
    longListB.add(1).add(2).add(3).add(4);

    let bLongerThanA = zipLists(shortListA, longListB);
    let expected = '{ a } -> { 1 } -> { b } -> { 2 } -> { 3 } -> { 4 } -> NULL';

    expect(bLongerThanA.toString()).toEqual(expected);
  });

  test('Returns as expected if two empty lists are entered', () => {
    const emptyA = new LinkedList();
    const emptyB = new LinkedList();

    let erroredList = zipLists(emptyA, emptyB);
    console.log(erroredList);
    expect(erroredList).toEqual('Both Lists are Empty');
  });

  test('Returns as expected if two parameters not entered', () => {
    const emptyA = new LinkedList();

    let erroredList = zipLists(emptyA);

    expect(erroredList).toEqual('Enter Two Lists as Args');
  });

  test('Returns second list if first list is empty', () => {
    const emptyA = new LinkedList();
    const shortListB = new LinkedList();

    shortListB.add(1).add(2);

    let onlyB = zipLists(emptyA, shortListB);
    expect(onlyB.toString()).toEqual('{ 1 } -> { 2 } -> NULL');
  });
});

