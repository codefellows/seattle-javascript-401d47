# Class-06: Basic Authentication

## Warmup

[Linked List Traversal Using Callback](./warmup/README.md)

## Announcements

- Feedback:  going well, we use NPS system
- TA help:  stay tuned
- One on One meetings:  [schedule time with me](http://rkgallaway.youcanbook.me/).  

## Review

- Node / Node Modules

- Express

- RESTful Routing

- CRUD with Sequelize

Now, Where we are going!

## Encoding vs Encryption

both are transformations: 

- Encoding: uses a standard communication method (base 64)
  - base64:  Ryan:pass123 ==> asdjghjvaruhug (no idea what that encoding actually is)      
  - username: password - we encode with base64, because the ':' won't encrypt later when we use bcrypt

- Encryption:  hides information from everyone
  - can only be decrypted using a key
  - we will use bcrypt.
  - we use salt and pepper.  
    - salt => random noise / filler
    - pepper => secret variable  


## Basic Authentication

what is the difference between authentication and authorization?
- authentication:  you are who you say you are
- authorization: what can you do?  RBAC  -> based on role
  - in basic auth, iif you are you are who say are.  you authorized - no roles.... yet

1. Create a POST route to `signup`. take in a username and a password (send in request.body as json).
1. read the headers.authorization and decode the user info
1. immediately encrypt password, create User Record in our DB
1. we want use the authenticated user info to hit a route!
   1. create some basicAuth middleware
   1. if user exists, they are authorized
   1. if user does NOT exist, they get an unauthorized error

## TDD: Basic AUth Router
