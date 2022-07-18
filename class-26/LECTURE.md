# Component Based UI (React)

#### Annoucements

- Take Care 
- Most focus on the front end (80%)
- Whiteboard Prep:  
  - review DSA traversals today.
  - everyone in the spotlight for a DSA practice
  - (optional) DSA 1 on 1 practice whiteboard

## DSA

### Linked List, Stacks, Queues

- Linear. a beginning and end with a single clear "line" to the other end

### Trees

-  HIERARCHICAL
- types of trees:  
  - k-ary
  - binary search tree
  - binary tree
- non-linear
- branching
- parents and children

#### Review Repl

[DSA Traversal Review](https://replit.com/@rkgallaway/dsa-practice-401d47#index.js)
[DSA whiteboard (class-15)](https://projects.invisionapp.com/freehand/document/6YJedGRsf)

## REACT!

### Class Component

Anatomy:
- new class extends `React.component`
- MUST have the React import
- must have a render method, with a return
- if using state, must typically have:  constructor, super(props), state definition
- lifecycle:  componentDidMount, componentDidUpdate, componentWillUnmount, shouldComponentUpdate

### FUnctional Component

Anatomy:
- it's a function.  
- pass in props as a property to maintain prop chain
- `this` has no context.  access props as a POJO example: `props.greetings`

## Setting up a React app from Demo Code or Starter Code

1. `npx create react-app <app-name>
1. replace src and public folders (if either or both are given) with provided code.
1. DO NOT replace the package.json, but rather `npm i` all the missing packages.  strong recommend to get the latest version by just doing a normal `npm i sass` for example
