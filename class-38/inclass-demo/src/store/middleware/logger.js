// log the action in console.
// using middleware in a fashion redux likes
// redux is VERY "functional" aka it favors functions AND I can curry information to those respective functions
const logger = (store) => (next) => (action) => {
  console.log('__action__', action);
  return next(action);
}

export default logger;
