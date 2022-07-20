# Lifecycle Events:  Use Effect Hook

## Review

Code Challenge 27 - Merge Sort

- see `inclass-demo/review-merge-sort
- Lab-27:  
  - we converted APp.js to function component
  - talked about form.  use state to capture method and url

## UseEffect Hook

Why do we care?

- manage lifecycle events
- manage side-effects

In Class components, how did we manage lifecycle events
```javascript
class App extends React.Component{
  constructor(){
    super(props);
  }

  componentDidMount(){
    console.log('something mounted!')
  }

  componentWillReceiveProps(props){
    console.log('I got some props!)
  }

  componentDidUpdate(){
    console.log('something updated!');
  }

  componentWillUnmount(){
    console.log('something unmounted...)
  }
}
```

useEffect will handle all of these cases!  
- convenient to use one Hook for all
- must do things correctly for each use case
    - every time an event occurs (greedy)
    - can do when something ONCE when event occurs 
    - when state is updated
    - when a component unmounts - aka turn shit off! if starting a process. Turn. It. Off.

### NOTE

What is going on when run `npm start`?
  - runs React: compiles code, runs in a DEV environment
  - dev environment is very different than a prod build or deployment

TDD approach using Mock Service Worker (msw) mock API calls


