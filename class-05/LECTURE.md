# Linked Lists and Big O

##  Big O (big oh)

Big O(oh) notation is used to describe the efficiency of an algorithm or function. This efficiency is evaluated based on 2 factors:

1. Running Time (also known as time efficiency / complexity)
The amount of time a function needs to complete.

1. Memory Space (also known as space efficiency / complexity)
The amount of memory resources a function uses to store data and instructions.

- Constant:  O(1) - example:  we create one variable and keep assigning a  value to that variable
- Linear:  O(n) - a certain number of times.  iterating thru an array.  picture an array with a length of 1,000,000.  if iterating a second time?  2n === n
- exponential:  O(n^2) nested for loop and think n * n
- logarithmic: O(log n)  sorted array, find midpoint, look left OR right
- when navigating trees we'll see O(h) where h === height

- Abdi: mathematical efficiency - how efficiency will something(code) do something (run).
- Marcus: kind of an equation expressing both time to run and memory space required to run.  Orders of magnitude

- Brady: we can plot the difference:  based on the curve growth (linear, logarithmic, exponential, consant)

## Node (for a singly linked list)

An "element" in a linked list.  Each Node has value, and a next property.  in javascript a Node is an object
- doubly linked might also have a prev, and a tail

## Linked List (singly linked list)

What is a linked list?  Data Structure.  Head - property of the linked list.  
 - Ben:  object / no index
 - Abdi:  Linked list nodes have 2 properties.  value, and next (pointer to the next node in linked list)
 - Dylan:  head is the point of entry (we know where to start)

example of a linked list:
Express Middleware: one thing must run before the next.  passes that request (ore response) object on to the next middleware.

{4} -> {3} -> null

## Whiteboard

[invision](https://projects.invisionapp.com/freehand/document/fNKhe9C6d)


## Whiteboard stretch goal:

### Problem Domain

given a linked list with integer values, multiply each existing value by itself, change the exiting value to the new value, and return the SAME linked list.  On Monday, let's big O!
