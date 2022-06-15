# Class 03: CRUD (with SQL) and REST (with Express)

## Warm Up

See warm up folder

## Code Review

Express Routing:

- paths (http://localhost:3000/hello) / sending requests to different routes
- HTTP method (GET/ POST /PUT / DELETE)

Middleware functions: any function that runs that runs between the request and the response.

```javascript
function (request, response, next) {
  console.log('function ran!');
  next();
}
```

## CRUD with SQl

We can perform CRUD using the sequelize library:

```javascript
Model.create(QUERY) // (C)reate a resource
Model.findAll(QUERY) // (R)ead from a resource
Model.update(QUERY) // (U)pdate a resource
Model.destroy(QUERY) // (D)elete a resource
```

## TDD: REST API

Our Routes should follow a pattern that matches HTTP methods to CRUD methods:

```javascript

app.get('/people', handleReadPeople);
app.post('/people', handleCreatePeople);
app.put('/people/:id', handleUpdatePeople);
app.get('/people/:id', handleDeletePeople);

```
