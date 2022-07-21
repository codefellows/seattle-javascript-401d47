# Reducer Pattern:  useReducer Hook in React

## Review

### Quick Sort

Isolate sections of an array using a pivot point and moving things to the left or right based on where they belong in the array.  rinse & repeat until sorted

- solution and tests will be in review folder in class repo

### Lab-28

- see video
- see form test folder in review folder in class repo

## Reducer Pattern

You have all used the `.reduce()` method in JavaScript. 
```javascript
let arr = ['ryan', 'lucky'];

let objArr = arr.reduce((newArr, objName) => {
  newArr.push({name: objName});
}, []);
```
 - what is returned?  returns a NEW object

 > Reducer: is a pure function that returns new objects

 - what is a pure function?  
    - no side effects
    - no mutations to the object the reducer has access to.  (pass by reference - NO references returned - returns something new)
- JavaScript passes all object references to the NEW variable - left with a new variable.  no references, clean
- how:  take an initial state object and a callback that tells the reducer how to change the object

``` javascript
let initialState = {
  name: 'Sesame Street',
  characters: [],
};

function reducer(state, payload){
  return {...state, characters: [...state.characters, payload]}
}

let updatedState = reducer(initialState, 'Big Bird');
```

React realizes that managing individual state variables is complex across tons of components

- When updating state, each component just needs to know what to give hte reducer to update state without any mutations

## Whiteboard

[Freehand](https://projects.invisionapp.com/freehand/document/32isCUiWX?)

[Reduce Repl](https://replit.com/@rkgallaway/reduce-fun-401d47#index.js)
