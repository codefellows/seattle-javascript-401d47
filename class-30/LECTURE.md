# Hashmaps

## Review

### Linked List

Why Would we use a Linked List?  IT'S LINEAR

- browser forward and backward
- want to store some information and have no rules about insertion or removal

### Stack or Queue

Why would we use?  FILO or FIFO expectations for removing or using data

### Binary Tree

Why would we use?  hierarchical

- file structure (K-ary tree)
- DOM (K-ary tree)

### Binary Search Tree

Why would we use?  sorted numbers

- cuts run time in half with EVERY MOVE  Big O of time is O(log n)  opposite of O (x^2)

## HashMap

A structure (array) that stores key value pairs.

WHY?
- PERFORMANT LOOKUP
- Dylan - O(1) lookup!
- can find the exact location where the data lives

### Terminology

- Hashing:  pass in a string, return a hashed string as a number.  the "number" translates to a specific or "deterministic" place within our structure.
    - we will write our own hashing mechanism, 3rd party could be great too
    - some languages have this structure baked in

- Collision: if keys map to the same location in our structure, we call that a collision.  
    - the more perfect the hash, the less likely we are to have collisions

- Bucket:  a Linked Listed built at the index in our structure to hold multiple keys (collisions)

### Hashing Algorithm

The goal is to input a key, and output a location in our HashTable (structure)

- decide the "size".  (how many buckets)  `1024`
- turn the key into a string (or require that it be a string)
    - Convert string characters into ASCII values
    - Sum all of the ASCII values
    - multiply our sum by a "large" prime number  `599`
    - take the product and get the `%` (modulo) when divided by number of bucket

    example:  
    ```javascript
    `ASCII sum of 'Ryan'` = 410.  
    410 * 599 = 245590, 
    245590 % 1024 = 854
    // 'Ryan' would hash to location of 854
    ```

    Code Implementation.  see DSA folder!

