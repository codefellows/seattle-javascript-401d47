# Trees

## Review

####  Linear Node Organization

- Linked Lists
- Stacks
- Queues


## Tree Overview

>  Hierarchical:  a cyclical non linear representation

### Terminology

- k-ary:  each node node has "k" number of children
    - example:  DOM
- binary tree:  each node (potentially) has a left and right child node
- leaf:  node with no children
- edge: connection between nodes
- path weight:  specifically if node values are numbers, this is the addition of all the nodes from root to leaf
- binary search tree:  sorted binary tree:  if value inserted is greater than root, it goes right.  less  than root it goes left.

### Traversals

#### Depth First

> read all nodes root to leaf FIRST, then traverse the remaining portion of tree in a similar fashion

- pre-order
- in-order
- post-order

#### Breadth First

> read all nodes on the first level, then the second level, third level etc.
