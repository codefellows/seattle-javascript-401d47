'use strict';


const map = require('./map.js');

describe('Testing the map function',  () => {
  test('map over an array of numbers and return another numbers', () => {
    let array = [1,2,3,4];
    let newArray = map(array, (val,idx) => {
      return val * val;
    });
    expect(newArray).toEqual([1, 4, 9, 16])
  })
})
