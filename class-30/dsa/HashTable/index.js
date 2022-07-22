'use strict';

const { LinkedList } = require('../LinkedList');

class HashTable {
  constructor(size){
    this.size = size;
    // most languages, this is just they create arrays.
    this.buckets = new Array(size); 
  }

  /**
   *   Takes in a string and returns a hash as integer
   * @param {String} key 
   * @returns 
   */
  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;

    return initialHash % 1024;
  }

  set(key, value){
    // hash is the position inside the table where we will "set" the key value pair
    let position = this.hash(key);
    let data = {[key]: value};

    // we check if there is a bucket at the specified position
    // if bucket exists, add our data
    if (this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      // if bucket doesn't exist, create one
      let bucket = new LinkedList();

      // add data to the bucket
      bucket.add(data);

      // add bucket to its position
      this.buckets[position] = bucket;
    }
  }

  // returns ONLY the value stored
  get(key){
    let position = this.hash(key);

    if(this.buckets[position]){
      let bucket = this.buckets[position];

      // I'll assume no collisions, I'll leave the link list traversal to you (as a stretch goal);
      let value = bucket.head.value[key];
      return value;
    }
  }

  contains(){
    // all you!
  }

  keys(){
    // all you!
  }
}

let table = new HashTable(1024);

console.log(table);
console.log(table.hash('Ryan'));
table.set('Ryan', 47);
table.set('Lucky', 4);
table.set('Audrey', {name: 'Audrey'});
console.log(table);
console.log('Ryan', table.get('Ryan'));
console.log('Audrey', table.get('Audrey'));

