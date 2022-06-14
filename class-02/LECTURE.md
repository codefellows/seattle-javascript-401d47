# Class 02: Express (Routing / Middleware)

## Warmup

map function that takes an array and callback - see solution in `warmup` folder

## Review Lab 01

- Dylan:  test to pass locally
- Abdi: how/why expect and what to receive - can be contrived, but we we want meaningful
- Marcus:  CI/CD testing issues

### Require function

### Express Routing

HTTP framework. Uses a straight forward unopinionated syntax for routing -> matching a `method` and a `route` / `url` to a service or function / program.
- Express does not require any configuration to allow developer to setup services that you can route to.
- Ben:  it doesn't define methods for you, it lets you
- Abdi: less restrictions.  you can do what you want

### Middleware

Generic definition:  Software that runs in between 2 programs
Express:  a function that receives the request and response objects, as well as a next function (next optional... maybe)

- Brady: the plum bing in your house.  brings the water to you -  

### Request, Response, Next

- request can have auth attached
   - query parameters:  `/hello?name=Ryan`
   - URL or path parameters:  `/hello/:person`  /hello/Ryan

- response:  status payload(message / data / any information) sent to the client. 

- next:  function signals that the middleware is done and can either move on with no error.  OR it can send an error to the error handler


### Test Driven Development (TDD)

tests written BEFORE code, and code written to satisfy the tests.  net result, code that behaves as expected and ultimately dependent upon great tests
